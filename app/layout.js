import { Inter } from "next/font/google";
import "./globals.css";
import 'leaflet/dist/leaflet.css';
import Footer from "./components/Footer"; // <-- IMPORT THE FOOTER

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "SurakshaDrishti Dashboard",
  description: "AI Rockfall Prediction",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} flex flex-col min-h-screen`}>
        <main className="flex-grow">
          {children}
        </main>
        <Footer /> {/* <-- ADD THE FOOTER HERE */}
      </body>
    </html>
  );
}