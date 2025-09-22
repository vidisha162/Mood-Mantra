// import { createContext, useContext, useEffect, useState } from "react";
// import axios from "axios";
// import { toast } from "react-toastify";
// import { getValidToken, clearAllTokens } from "../utils/tokenUtils";

// export const AppContext = createContext();

// const AppContextProvider = ({ children }) => {
//   const currencySymbol = "₹";
//   const backendUrl =
//     import.meta.env.VITE_BACKEND_URL || "http://localhost:4000";

//   const [doctors, setDoctors] = useState([]);
//   const [token, setToken] = useState(getValidToken());
//   const [userData, setUserData] = useState(null);
//   const [isLoadingUser, setIsLoadingUser] = useState(false);

//   const getDoctorsData = async () => {
//     try {
//       const { data } = await axios.get(`${backendUrl}/api/doctor/list`);
//       if (data.success) {
//         setDoctors(data.doctors);
//       } else {
//         toast.error(data.message);
//       }
//     } catch (error) {
//       console.error(error);
//       toast.error(error.response?.data?.message || error.message);
//     }
//   };

//   const loadUserProfileData = async () => {
//     if (!token) {
//       setUserData(null);
//       setIsLoadingUser(false);
//       return;
//     }
//     setIsLoadingUser(true);
//     try {
//       const { data } = await axios.get(`${backendUrl}/api/user/profile`, {
//         headers: { token },
//       });
//       if (data.success) {
//         setUserData(data.userData);
//         setIsLoadingUser(false);
//       } else {
//         console.error("Failed to load user data:", data.message);
//         // If the server says the token is invalid, clear it
//         if (
//           data.message.includes("Invalid token") ||
//           data.message.includes("Not Authorized")
//         ) {
//           clearAllTokens();
//           setToken(null);
//           setUserData(null);
//           setIsLoadingUser(false);
//         }
//       }
//     } catch (error) {
//       console.error("Error loading user profile:", error);
//       // If we get a 401 error, the token is invalid
//       if (error.response?.status === 401) {
//         clearAllTokens();
//         setToken(null);
//         setUserData(null);
//         setIsLoadingUser(false);
//         toast.error("Session expired. Please login again.");
//       } else {
//         console.error(
//           "Profile loading error:",
//           error.response?.data?.message || error.message
//         );
//         setIsLoadingUser(false);
//       }
//     }
//   };

//   useEffect(() => {
//     getDoctorsData();
//   }, []);

//   useEffect(() => {
//     if (token) {
//       loadUserProfileData();
//     } else {
//       setUserData(null);
//     }
//   }, [token]);

//   const value = {
//     doctors,
//     getDoctorsData,
//     currencySymbol,
//     token,
//     setToken,
//     backendUrl,
//     userData,
//     setUserData,
//     loadUserProfileData,
//     isLoadingUser,
//   };

//   return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
// };

// export const useAuth = () => {
//   const context = useContext(AppContext);
//   if (!context) {
//     throw new Error("useAuth must be used within an AppContextProvider");
//   }
//   return {
//     token: context.token,
//     setToken: context.setToken,
//     userData: context.userData,
//     backendUrl: context.backendUrl,
//   };
// };

// export default AppContextProvider;


import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { getValidToken, clearAllTokens } from "../utils/tokenUtils";

export const AppContext = createContext();

const AppContextProvider = ({ children }) => {
  const currencySymbol = "₹";
  const backendUrl =
    import.meta.env.VITE_BACKEND_URL || "http://localhost:4000";

  const [doctors, setDoctors] = useState([]);
  const [token, setToken] = useState(getValidToken());
  const [userData, setUserData] = useState(null);
  const [isLoadingUser, setIsLoadingUser] = useState(false);

  // MOCK DATA FOR FRONTEND TESTING
  const mockDoctors = [
    {
      _id: "1",
      name: "Dr. Anjali Sharma",
      speciality: "Psychiatrists",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
      location: "Delhi, India",
      experience: 8,
      qualification: "MD, Psychiatry",
      rating: 4.9,
      fees: 700,
      available: true,
    },
    {
      _id: "2",
      name: "Dr. Rajiv Mehta",
      speciality: "Therapists",
      image: "https://randomuser.me/api/portraits/men/46.jpg",
      location: "Mumbai, India",
      experience: 5,
      qualification: "MA, Psychology",
      rating: 4.8,
      fees: 500,
      available: true,
    },
    {
      _id: "3",
      name: "Dr. Priya Verma",
      speciality: "Clinical Psychologists",
      image: "https://randomuser.me/api/portraits/women/65.jpg",
      location: "Bangalore, India",
      experience: 6,
      qualification: "PhD, Psychology",
      rating: 4.7,
      fees: 600,
      available: false,
    },
  ];

  const getDoctorsData = async () => {
    try {
      // COMMENT OUT the backend call for now
      // const { data } = await axios.get(`${backendUrl}/api/doctor/list`);
      // if (data.success) {
      //   setDoctors(data.doctors);
      // } else {
      //   toast.error(data.message);
      // }

      // USE MOCK DATA
      setDoctors(mockDoctors);
    } catch (error) {
      console.error(error);
      toast.error(error.response?.data?.message || error.message);
    }
  };

  const loadUserProfileData = async () => {
    if (!token) {
      setUserData(null);
      setIsLoadingUser(false);
      return;
    }
    setIsLoadingUser(true);
    try {
      const { data } = await axios.get(`${backendUrl}/api/user/profile`, {
        headers: { token },
      });
      if (data.success) {
        setUserData(data.userData);
        setIsLoadingUser(false);
      } else {
        console.error("Failed to load user data:", data.message);
        if (
          data.message.includes("Invalid token") ||
          data.message.includes("Not Authorized")
        ) {
          clearAllTokens();
          setToken(null);
          setUserData(null);
          setIsLoadingUser(false);
        }
      }
    } catch (error) {
      console.error("Error loading user profile:", error);
      if (error.response?.status === 401) {
        clearAllTokens();
        setToken(null);
        setUserData(null);
        setIsLoadingUser(false);
        toast.error("Session expired. Please login again.");
      } else {
        console.error(
          "Profile loading error:",
          error.response?.data?.message || error.message
        );
        setIsLoadingUser(false);
      }
    }
  };

  useEffect(() => {
    getDoctorsData();
  }, []);

  useEffect(() => {
    if (token) {
      loadUserProfileData();
    } else {
      setUserData(null);
    }
  }, [token]);

  const value = {
    doctors,
    getDoctorsData,
    currencySymbol,
    token,
    setToken,
    backendUrl,
    userData,
    setUserData,
    loadUserProfileData,
    isLoadingUser,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export const useAuth = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAuth must be used within an AppContextProvider");
  }
  return {
    token: context.token,
    setToken: context.setToken,
    userData: context.userData,
    backendUrl: context.backendUrl,
  };
};

export default AppContextProvider;
