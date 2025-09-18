import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import AppContextProvider from "./context/AppContext.jsx";
import { GoogleOAuthProvider } from "@react-oauth/google";

// Debug: Check if Google Client ID is loaded
const googleClientId =
  import.meta.env.VITE_GOOGLE_CLIENT_ID ||
  "538958279442-765j798cilkvbvmdkgq29g4om78j7ig2.apps.googleusercontent.com";

console.log("🔍 Environment Debug:");
console.log("VITE_GOOGLE_CLIENT_ID:", import.meta.env.VITE_GOOGLE_CLIENT_ID);
console.log("Final Google Client ID:", googleClientId);
console.log("All env vars:", import.meta.env);

if (!import.meta.env.VITE_GOOGLE_CLIENT_ID) {
  console.warn("⚠️ Using hardcoded Google Client ID for testing");
}

createRoot(document.getElementById("root")).render(
  <GoogleOAuthProvider clientId={googleClientId}>
    <BrowserRouter>
      <AppContextProvider>
        <App />
      </AppContextProvider>
    </BrowserRouter>
  </GoogleOAuthProvider>
);
