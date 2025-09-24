# File: SURAKSHA_DRISHTI/backend/main.py

from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import joblib
import numpy as np

# Initialize the FastAPI app
app = FastAPI()

# --- CORS (Cross-Origin Resource Sharing) ---
# This is crucial! It allows your Next.js app (running on localhost:3000)
# to make requests to this backend server (running on localhost:8000).
origins = [
    "http://localhost:3000",
]
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# --- Load the saved model and scaler ---
try:
    model = joblib.load('model.joblib')
    scaler = joblib.load('scaler.joblib')
    print("Model and scaler loaded successfully.")
except FileNotFoundError:
    print("ERROR: model.joblib or scaler.joblib not found.")
    model = None
    scaler = None

# --- Define the structure of the incoming data using Pydantic ---
class SensorData(BaseModel):
    displacement_mm: float
    strain_με: float
    pore_pressure_kPa: float
    rainfall_mm_hr: float
    vibrations_mm_s: float

# --- Define the prediction endpoint ---
@app.post("/predict")
def predict_rockfall(data: SensorData):
    if not model or not scaler:
        raise HTTPException(status_code=500, detail="Model or scaler is not loaded.")

    # 1. Convert the incoming data into a NumPy array.
    #    The order MUST BE THE SAME as the order during training!
    features_array = np.array([[
        data.displacement_mm,
        data.strain_με,
        data.pore_pressure_kPa,
        data.rainfall_mm_hr,
        data.vibrations_mm_s
    ]])

    # 2. Scale the features using the loaded scaler.
    scaled_features = scaler.transform(features_array)

    # 3. Make a prediction.
    prediction = model.predict(scaled_features)
    probability = model.predict_proba(scaled_features)

    # 4. Format the response.
    risk_status = "High Risk" if prediction[0] == 1 else "Stable"
    risk_probability = probability[0][1] # Get the probability of the 'High Risk' class

    return {
        "prediction_status": risk_status,
        "risk_probability": f"{risk_probability:.2%}" # Format as a percentage string
    }

@app.get("/")
def read_root():
    return {"message": "Welcome to the Rockfall Prediction API"}