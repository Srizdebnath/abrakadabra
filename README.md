Notice : This project is under progress...


# SurakshaDrishti - RockSafe AI

AI-Powered Rockfall Prediction and Alert System for Open-Pit Mines

---

## Project Overview

SurakshaDrishti is an intelligent, AI-based platform designed to predict and prevent rockfall incidents in open-pit mines. By integrating data from multiple sources—including geotechnical sensors, drone imagery, and environmental factors—it provides real-time risk assessments, probability forecasts, and timely alerts to enhance operational safety and minimize accidents.

This solution is cost-effective, scalable, and adaptable to mining operations across India, enabling safer work environments and reducing injury, equipment damage, and operational downtime.

---

## Key Features

- Real-time Risk Maps: Visualize danger zones and monitor slope stability across mining sites.
- Predictive Alerts: Receive notifications through SMS and email before incidents occur.
- Data-driven Decisions: Use AI-based forecasts to plan evacuations and safety actions effectively.
- Impact-focused Design: Help reduce potential accidents by up to 70%* in monitored areas.
- Multi-source Data Integration: Process geotechnical, environmental, and drone data seamlessly.
- Open-Source and Scalable: Built with open-source tools to keep it affordable and expandable.

---

## Tech Stack

### Frontend
- Next.js – Framework for React-based UI.
- Tailwind CSS – For fast, responsive styling.
- React Hooks – State management.

### Backend
- FastAPI – Lightweight and fast Python framework.
- PostgreSQL – Reliable database for storing sensor data and alerts.
- Celery + Redis – For managing background tasks like alert notifications.

### Machine Learning
- Python.
- TensorFlow / PyTorch – Model training and inference.
- Scikit-learn – Risk analysis and classification algorithms.

### Mapping and Visualization
- Leaflet.js / Mapbox – Interactive geospatial analytics.

---

## Folder Structure

surakshadrishti/
├── app/ # Frontend pages (Next.js)
├── backend/ # FastAPI server and ML integration
├── data/ # Synthetic and real datasets
├── models/ # Trained AI models
├── utils/ # Utility functions
├── .env # Environment variables
├── README.md # Project documentation
├── requirements.txt # Backend dependencies
├── tailwind.config.js # Styling configuration
└── next.config.js # Next.js configuration


---

## Getting Started

### Prerequisites
- Node.js installed (v16+)
- Python 3.8+
- PostgreSQL server running
- Redis server running (for Celery)

### 1. Clone the repository
git clone https://github.com/yourusername/surakshadrishti.git

cd surakshadrishti


### 2. Setup Frontend


cd app
npm install
npm run dev


### 3. Setup Backend


cd backend
pip install -r requirements.txt
uvicorn main:app --reload


### 4. Setup Environment Variables
Create a `.env` file in the `backend/` directory with configurations for database connection and Redis.

---

## How It Works

1. Data is collected from sensors, drones, and environmental sources.
2. AI models process the data to predict potential risks.
3. Alerts are sent through SMS/email when danger is detected.
4. Users access real-time dashboards to plan safety measures and prevent accidents.

---

## Contributing

We welcome contributions from developers, researchers, and enthusiasts. Whether you want to improve the UI, enhance the machine learning models, or integrate new data sources, your contributions are highly valued.

1. Fork the repository.
2. Create a new branch for your feature.
3. Submit a pull request with a description of your changes.

---

## License

This project is open-source and available under the MIT License.


