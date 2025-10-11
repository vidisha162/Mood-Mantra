// import React, { useContext, useEffect, useState } from "react";
// import { useNavigate, useParams } from "react-router-dom";
// import { AppContext } from "../context/AppContext";
// import { ChevronDown, Star, MapPin, Clock, Award } from "lucide-react";
// import { motion } from "framer-motion";
// import { Briefcase, GraduationCap } from "lucide-react";
// import {
//   FaHeart,
//   FaArrowRight,
//   FaUserMd,
//   FaSearch,
//   FaFilter,
//   FaPhone,
//   FaCalendarAlt,
// } from "react-icons/fa";

// const Doctors = () => {
//   const { speciality } = useParams();
//   const [filterDoc, setFilterDoc] = useState([]);
//   const [showFilter, setShowFilter] = useState(false);
//   const [animationKey, setAnimationKey] = useState(0);

//   const navigate = useNavigate();

//   const scrollToTop = () => {
//     window.scrollTo({ top: 0, behavior: "smooth" });
//   };

//   const { doctors } = useContext(AppContext);

//   const applyFilter = () => {
//     if (speciality) {
//       const filtered = doctors.filter((doc) => doc.speciality === speciality);
//       setFilterDoc(filtered);
//     } else {
//       setFilterDoc(doctors);
//     }
//   };

//   useEffect(() => {
//     applyFilter();
//   }, [doctors, speciality]);

//   const handleSpecialityClick = (newSpeciality) => {
//     setAnimationKey((prev) => prev + 1);

//     if (speciality === newSpeciality) {
//       navigate("/doctors");
//     } else {
//       navigate(`/doctors/${newSpeciality}`);
//     }

//     scrollToTop();
//   };

//   const specialities = [
//     "Psychiatrists",
//     "Clinical Psychologists",
//     "Therapists",
//     "Child and Adolescent Psychiatrists",
//     "Geriatric Psychiatrists",
//     "Addiction Psychiatrists",
//   ];

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-slate-50 via-purple-50 to-indigo-100">
//       {/* Hero Section */}
//       <section className="relative overflow-hidden py-20">
//         {/* Animated Background Elements */}
//         <div className="absolute inset-0 overflow-hidden">
//           <motion.div
//             animate={{
//               scale: [1, 1.2, 1],
//               rotate: [0, 180, 360],
//             }}
//             transition={{
//               duration: 20,
//               repeat: Infinity,
//               ease: "linear",
//             }}
//             className="absolute top-20 left-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30"
//           />
//           <motion.div
//             animate={{
//               scale: [1.2, 1, 1.2],
//               rotate: [360, 180, 0],
//             }}
//             transition={{
//               duration: 25,
//               repeat: Infinity,
//               ease: "linear",
//             }}
//             className="absolute top-40 right-20 w-96 h-96 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30"
//           />
//           <motion.div
//             animate={{
//               scale: [1, 1.3, 1],
//               rotate: [0, -180, -360],
//             }}
//             transition={{
//               duration: 30,
//               repeat: Infinity,
//               ease: "linear",
//             }}
//             className="absolute bottom-20 left-1/4 w-80 h-80 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30"
//           />
//         </div>

//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
//           <div className="text-center">
//             {/* Badge */}
//             <motion.div
//               initial={{ scale: 0.8, opacity: 0 }}
//               animate={{ scale: 1, opacity: 1 }}
//               transition={{ delay: 0.2, duration: 0.5 }}
//               className="inline-flex items-center bg-white/90 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg mb-8 border border-purple-100"
//             >
//               <motion.div
//                 animate={{ scale: [1, 1.1, 1] }}
//                 transition={{ repeat: Infinity, duration: 2 }}
//               >
//                 <FaUserMd className="text-purple-500 text-xl mr-3" />
//               </motion.div>
//               <span className="text-purple-800 font-semibold">
//                 Expert Mental Health Professionals
//               </span>
//             </motion.div>

//             {/* Main Heading */}
//             <motion.h1
//               initial={{ opacity: 0, y: 30 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.3, duration: 0.8 }}
//               className="text-5xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight"
//             >
//               {speciality
//                 ? `${speciality} Specialists`
//                 : "Our Mental Health Professionals"}
//             </motion.h1>

//             {/* Subtitle */}
//             <motion.p
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.5, duration: 0.8 }}
//               className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed"
//             >
//               Connect with qualified mental health professionals who can guide
//               you on your wellness journey.
//             </motion.p>

//             {/* CTA Buttons */}
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.7, duration: 0.8 }}
//               className="flex flex-col sm:flex-row gap-4 mb-12 justify-center"
//             >
//               <motion.button
//                 whileHover={{
//                   scale: 1.05,
//                   boxShadow: "0 20px 25px -5px rgba(124, 58, 237, 0.3)",
//                 }}
//                 whileTap={{ scale: 0.95 }}
//                 className="group bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-xl transition-all duration-300 flex items-center justify-center gap-2"
//               >
//                 Book Appointment
//                 <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
//               </motion.button>

//               <motion.button
//                 whileHover={{
//                   scale: 1.05,
//                   backgroundColor: "#f8fafc",
//                 }}
//                 whileTap={{ scale: 0.95 }}
//                 className="bg-white/80 backdrop-blur-sm hover:bg-white text-purple-600 px-8 py-4 rounded-full text-lg font-semibold shadow-xl border border-purple-100 transition-all duration-300 flex items-center justify-center gap-2"
//               >
//                 <FaSearch className="text-sm" />
//                 Search Doctors
//               </motion.button>
//             </motion.div>
//           </div>
//         </div>

//         {/* Wave Divider */}
//         <div className="absolute bottom-0 left-0 right-0">
//           <svg
//             viewBox="0 0 1200 120"
//             preserveAspectRatio="none"
//             className="w-full h-24"
//           >
//             <path
//               d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
//               opacity=".25"
//               fill="currentColor"
//               className="text-white"
//             />
//             <path
//               d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
//               opacity=".5"
//               fill="currentColor"
//               className="text-white"
//             />
//             <path
//               d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
//               fill="currentColor"
//               className="text-white"
//             />
//           </svg>
//         </div>
//       </section>

//       {/* Main Content */}
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
//         <div className="flex flex-col lg:flex-row gap-12">
//           {/* Filter Sidebar */}
//           <div className="lg:w-1/4">
//             <motion.div
//               initial={{ opacity: 0, x: -50 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.6 }}
//             >
//               <button
//                 className={`w-full py-4 px-6 flex items-center justify-between gap-2 rounded-2xl text-lg font-semibold transition-all duration-300 lg:hidden ${
//                   showFilter
//                     ? "bg-white text-purple-700 border border-purple-200 shadow-lg"
//                     : "bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-xl hover:shadow-2xl"
//                 }`}
//                 onClick={() => setShowFilter((prev) => !prev)}
//               >
//                 <div className="flex items-center gap-2">
//                   <FaFilter className="text-lg" />
//                   {showFilter ? "Hide Filters" : "Filter by Specialization"}
//                 </div>
//                 <ChevronDown
//                   size={20}
//                   className={`transition-transform duration-300 ${
//                     showFilter ? "rotate-180" : ""
//                   }`}
//                 />
//               </button>

//               <motion.div
//                 initial={{ opacity: 0, x: -20 }}
//                 animate={{ opacity: 1, x: 0 }}
//                 className={`${showFilter ? "block" : "hidden"} lg:block`}
//               >
//                 <div className="bg-gradient-to-br from-white to-purple-50 p-8 rounded-3xl shadow-lg border border-purple-100">
//                   <h3 className="text-2xl font-bold text-gray-800 mb-8 flex items-center gap-3">
//                     <Award size={24} className="text-purple-600" />
//                     Specializations
//                   </h3>
//                   <div className="space-y-4">
//                     {specialities.map((spec, index) => (
//                       <motion.button
//                         key={index}
//                         whileHover={{ scale: 1.02 }}
//                         whileTap={{ scale: 0.98 }}
//                         onClick={() => handleSpecialityClick(spec)}
//                         className={`w-full text-left px-6 py-4 rounded-2xl transition-all flex items-center gap-4 ${
//                           speciality === spec
//                             ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg"
//                             : "bg-white hover:bg-purple-50 text-gray-700 hover:text-purple-700 border border-gray-100 hover:border-purple-200"
//                         }`}
//                       >
//                         <div
//                           className={`w-3 h-3 rounded-full ${
//                             speciality === spec ? "bg-white" : "bg-purple-500"
//                           }`}
//                         ></div>
//                         <span className="font-medium">{spec}</span>
//                       </motion.button>
//                     ))}
//                   </div>
//                 </div>
//               </motion.div>
//             </motion.div>
//           </div>

//           {/* Doctors Grid */}
//           <div className="lg:w-3/4">
//             {filterDoc.length === 0 ? (
//               <motion.div
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 className="bg-gradient-to-br from-white to-purple-50 rounded-3xl p-12 text-center shadow-lg border border-purple-100"
//               >
//                 <div className="max-w-md mx-auto">
//                   <div className="w-24 h-24 bg-gradient-to-br from-purple-100 to-pink-100 rounded-full flex items-center justify-center mx-auto mb-6">
//                     <FaUserMd className="text-4xl text-purple-600" />
//                   </div>
//                   <h3 className="text-2xl font-bold text-gray-800 mb-4">
//                     No Doctors Found
//                   </h3>
//                   <p className="text-gray-600 mb-8">
//                     We couldn't find any doctors matching your criteria. Please
//                     try a different specialization or check back later.
//                   </p>
//                   <motion.button
//                     whileHover={{ scale: 1.05 }}
//                     whileTap={{ scale: 0.95 }}
//                     onClick={() => navigate("/doctors")}
//                     className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all"
//                   >
//                     View All Doctors
//                   </motion.button>
//                 </div>
//               </motion.div>
//             ) : (
//               <motion.div
//                 key={animationKey}
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8"
//               >
//                 {filterDoc.map((doctor, index) => (
//                   <motion.div
//                     key={`${animationKey}-${index}`}
//                     whileHover={{ y: -10 }}
//                     onClick={() => {
//                       navigate(`/appointment/${doctor._id}`);
//                       scrollToTop();
//                     }}
//                     className="bg-gradient-to-br from-white to-purple-50 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all cursor-pointer group flex flex-col h-full border border-purple-100"
//                     initial={{ opacity: 0, y: 30 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     transition={{ duration: 0.5, delay: index * 0.1 }}
//                   >
//                     {/* Image Section */}
//                     <div className="relative h-64 overflow-hidden">
//                       <img
//                         className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
//                         src={
//                           doctor.image ||
//                           "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
//                         }
//                         alt={doctor.name}
//                         onError={(e) => {
//                           e.target.src =
//                             "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80";
//                         }}
//                       />
//                       <div
//                         className={`absolute top-4 right-4 px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-2 backdrop-blur-sm ${
//                           doctor.available
//                             ? "bg-green-100/90 text-green-800"
//                             : "bg-red-100/90 text-red-800"
//                         }`}
//                       >
//                         <div
//                           className={`w-2 h-2 rounded-full ${
//                             doctor.available ? "bg-green-500" : "bg-red-500"
//                           }`}
//                         ></div>
//                         {doctor.available ? "Available" : "Not Available"}
//                       </div>

//                       {/* Overlay on hover */}
//                       <div className="absolute inset-0 bg-gradient-to-t from-purple-600/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
//                         <div className="text-white">
//                           <p className="font-semibold">Book Appointment</p>
//                           <p className="text-sm opacity-90">
//                             Click to schedule a session
//                           </p>
//                         </div>
//                       </div>
//                     </div>

//                     {/* Content Section */}
//                     <div className="p-6 flex flex-col flex-grow">
//                       <div className="flex justify-between items-start mb-6">
//                         <div className="min-w-0 flex-1">
//                           <h3 className="text-xl font-bold text-gray-900 truncate mb-1">
//                             {doctor.name}
//                           </h3>
//                           <p className="text-purple-600 font-semibold text-sm truncate">
//                             {doctor.speciality || "General Practitioner"}
//                           </p>
//                         </div>
//                         <div className="flex items-center bg-gradient-to-r from-yellow-100 to-orange-100 px-3 py-2 rounded-xl shrink-0 ml-3">
//                           <Star
//                             size={16}
//                             className="text-yellow-500 fill-yellow-500"
//                           />
//                           <span className="text-yellow-800 font-bold ml-1 text-sm">
//                             {doctor.rating || "4.8"}
//                           </span>
//                         </div>
//                       </div>

//                       {/* Details Section */}
//                       <div className="space-y-3 mb-6">
//                         <div className="flex items-center text-gray-600">
//                           <MapPin
//                             size={16}
//                             className="text-purple-500 mr-3 flex-shrink-0"
//                           />
//                           <span className="truncate text-sm">
//                             {doctor.location || "Online & In-person"}
//                           </span>
//                         </div>
//                         <div className="flex items-center text-gray-600">
//                           <Briefcase
//                             size={16}
//                             className="text-purple-500 mr-3 flex-shrink-0"
//                           />
//                           <span className="text-sm">
//                             {doctor.experience || "5"}+ years experience
//                           </span>
//                         </div>
//                         <div className="flex items-center text-gray-600">
//                           <GraduationCap
//                             size={16}
//                             className="text-purple-500 mr-3 flex-shrink-0"
//                           />
//                           <span className="truncate text-sm">
//                             {doctor.qualification || "MD, MBBS"}
//                           </span>
//                         </div>
//                       </div>

//                       {/* Footer Section */}
//                       <div className="mt-auto pt-4 border-t border-purple-100">
//                         <div className="flex justify-between items-center mb-4">
//                           <span className="text-gray-500 text-sm font-medium">
//                             Starting from
//                           </span>
//                           <div className="flex items-center">
//                             <span className="text-2xl font-bold text-purple-700">
//                               ₹{doctor.fees || "500"}
//                             </span>
//                             <span className="text-xs text-gray-500 ml-1">
//                               /consultation
//                             </span>
//                           </div>
//                         </div>

//                         <motion.button
//                           whileHover={{ scale: 1.02 }}
//                           whileTap={{ scale: 0.98 }}
//                           className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 px-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2"
//                         >
//                           <FaCalendarAlt className="text-sm" />
//                           Book Appointment
//                         </motion.button>
//                       </div>
//                     </div>
//                   </motion.div>
//                 ))}
//               </motion.div>
//             )}
//           </div>
//         </div>
//       </div>

//       {/* Floating Action Button */}
//       <motion.button
//         initial={{ opacity: 0, scale: 0 }}
//         animate={{ opacity: 1, scale: 1 }}
//         transition={{ delay: 2, duration: 0.5 }}
//         className="fixed bottom-8 right-8 w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full shadow-2xl flex items-center justify-center z-50 hover:shadow-purple-500/25 transition-all duration-300"
//         whileHover={{ scale: 1.1 }}
//         whileTap={{ scale: 0.9 }}
//       >
//         <FaHeart className="text-xl" />
//       </motion.button>
//     </div>
//   );
// };

// export default Doctors;


// import React, { useContext, useEffect, useState } from "react";
// import { useNavigate, useParams } from "react-router-dom";
// import { AppContext } from "../context/AppContext";
// import { ChevronDown, Star, MapPin, Clock, Award } from "lucide-react";
// import { motion } from "framer-motion";
// import { Briefcase, GraduationCap } from "lucide-react";
// import {
//   FaHeart,
//   FaArrowRight,
//   FaUserMd,
//   FaSearch,
//   FaFilter,
//   FaPhone,
//   FaCalendarAlt,
// } from "react-icons/fa";
// import axios from "axios"; // for Razorpay

// const Doctors = () => {
//   const { speciality } = useParams();
//   const [filterDoc, setFilterDoc] = useState([]);
//   const [showFilter, setShowFilter] = useState(false);
//   const [animationKey, setAnimationKey] = useState(0);

//   const navigate = useNavigate();
//   const { doctors, user, token } = useContext(AppContext);

//   const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

//   const applyFilter = () => {
//     if (speciality) {
//       const filtered = doctors.filter((doc) => doc.speciality === speciality);
//       setFilterDoc(filtered);
//     } else {
//       setFilterDoc(doctors);
//     }
//   };

//   useEffect(() => {
//     applyFilter();
//   }, [doctors, speciality]);

//   const handleSpecialityClick = (newSpeciality) => {
//     setAnimationKey((prev) => prev + 1);

//     if (speciality === newSpeciality) {
//       navigate("/doctors");
//     } else {
//       navigate(`/doctors/${newSpeciality}`);
//     }

//     scrollToTop();
//   };

//   // Razorpay payment handler
//   const handlePayment = async (doctorId) => {
//     if (!token) {
//       alert("Please login first!");
//       navigate("/login");
//       return;
//     }

//     try {
//       const { data } = await axios.post(
//         "http://localhost:4000/api/payment/razorpay",
//         { userId: user._id, doctorId }
//       );

//       const order = data.order;

//       const options = {
//         key: order.key_id,
//         amount: order.amount,
//         currency: order.currency,
//         name: "Mood Mantra",
//         description: "Appointment Payment",
//         order_id: order.id,
//         handler: async function (response) {
//           await axios.post("http://localhost:4000/api/payment/verify", response);
//           alert("Payment Successful! Appointment confirmed 🎉");
//           navigate("/my-appointments");
//         },
//         prefill: {
//           email: user.email,
//           name: user.name,
//         },
//         theme: { color: "#2563EB" },
//       };

//       const rzp = new window.Razorpay(options);
//       rzp.open();
//     } catch (err) {
//       console.error(err);
//       alert("Payment failed. Try again!");
//     }
//   };

//   const specialities = [
//     "Psychiatrists",
//     "Clinical Psychologists",
//     "Therapists",
//     "Child and Adolescent Psychiatrists",
//     "Geriatric Psychiatrists",
//     "Addiction Psychiatrists",
//   ];

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-slate-50 via-purple-50 to-indigo-100">
//       {/* Hero Section */}
//       <section className="relative overflow-hidden py-20">
//         {/* Animated Background */}
//         <div className="absolute inset-0 overflow-hidden">
//           <motion.div
//             animate={{ scale: [1, 1.2, 1], rotate: [0, 180, 360] }}
//             transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
//             className="absolute top-20 left-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30"
//           />
//           <motion.div
//             animate={{ scale: [1.2, 1, 1.2], rotate: [360, 180, 0] }}
//             transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
//             className="absolute top-40 right-20 w-96 h-96 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30"
//           />
//           <motion.div
//             animate={{ scale: [1, 1.3, 1], rotate: [0, -180, -360] }}
//             transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
//             className="absolute bottom-20 left-1/4 w-80 h-80 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30"
//           />
//         </div>

//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
//           <div className="text-center">
//             {/* Badge */}
//             <motion.div
//               initial={{ scale: 0.8, opacity: 0 }}
//               animate={{ scale: 1, opacity: 1 }}
//               transition={{ delay: 0.2, duration: 0.5 }}
//               className="inline-flex items-center bg-white/90 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg mb-8 border border-purple-100"
//             >
//               <motion.div
//                 animate={{ scale: [1, 1.1, 1] }}
//                 transition={{ repeat: Infinity, duration: 2 }}
//               >
//                 <FaUserMd className="text-purple-500 text-xl mr-3" />
//               </motion.div>
//               <span className="text-purple-800 font-semibold">
//                 Expert Mental Health Professionals
//               </span>
//             </motion.div>

//             {/* Main Heading */}
//             <motion.h1
//               initial={{ opacity: 0, y: 30 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.3, duration: 0.8 }}
//               className="text-5xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight"
//             >
//               {speciality
//                 ? `${speciality} Specialists`
//                 : "Our Mental Health Professionals"}
//             </motion.h1>

//             {/* Subtitle */}
//             <motion.p
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.5, duration: 0.8 }}
//               className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed"
//             >
//               Connect with qualified mental health professionals who can guide
//               you on your wellness journey.
//             </motion.p>

//             {/* Hero CTA Buttons */}
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.7, duration: 0.8 }}
//               className="flex flex-col sm:flex-row gap-4 mb-12 justify-center"
//             >
//               <motion.button
//                 whileHover={{
//                   scale: 1.05,
//                   boxShadow: "0 20px 25px -5px rgba(124, 58, 237, 0.3)",
//                 }}
//                 whileTap={{ scale: 0.95 }}
//                 className="group bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-xl transition-all duration-300 flex items-center justify-center gap-2"
//                 onClick={() => {
//                  if (filterDoc.length > 0 && filterDoc[0]._id) {
//   handlePayment(filterDoc[0]._id);
// } else {
//   alert("No doctor selected or doctor data is invalid.");
// }

//             }

//                 }}
//               ></motion.div>
//                 Book Appointment
//                 <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
//               </motion.button>

//               <motion.button
//                 whileHover={{ scale: 1.05, backgroundColor: "#f8fafc" }}
//                 whileTap={{ scale: 0.95 }}
//                 className="bg-white/80 backdrop-blur-sm hover:bg-white text-purple-600 px-8 py-4 rounded-full text-lg font-semibold shadow-xl border border-purple-100 transition-all duration-300 flex items-center justify-center gap-2"
//               >
//                 <FaSearch className="text-sm" />
//                 Search Doctors
//               </motion.button>
//             </motion.div>
//           </div>
//         </div>

//         {/* Wave Divider */}
//         <div className="absolute bottom-0 left-0 right-0">
//           <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-24">
//             <path
//               d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
//               opacity=".25"
//               fill="currentColor"
//               className="text-white"
//             />
//             <path
//               d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
//               opacity=".5"
//               fill="currentColor"
//               className="text-white"
//             />
//             <path
//               d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
//               fill="currentColor"
//               className="text-white"
//             />
//           </svg>
//         </div>
//       </section>

//       {/* Main Content */}
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
//         <div className="flex flex-col lg:flex-row gap-12">
//           {/* Filter Sidebar */}
//           <div className="lg:w-1/4">
//             <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
//               <button
//                 className={`w-full py-4 px-6 flex items-center justify-between gap-2 rounded-2xl text-lg font-semibold transition-all duration-300 lg:hidden ${
//                   showFilter ? "bg-white text-purple-700 border border-purple-200 shadow-lg" : "bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-xl hover:shadow-2xl"
//                 }`}
//                 onClick={() => setShowFilter((prev) => !prev)}
//               >
//                 <div className="flex items-center gap-2">
//                   <FaFilter className="text-lg" />
//                   {showFilter ? "Hide Filters" : "Filter by Specialization"}
//                 </div>
//                 <ChevronDown size={20} className={`transition-transform duration-300 ${showFilter ? "rotate-180" : ""}`} />
//               </button>

//               <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className={`${showFilter ? "block" : "hidden"} lg:block`}>
//                 <div className="bg-gradient-to-br from-white to-purple-50 p-8 rounded-3xl shadow-lg border border-purple-100">
//                   <h3 className="text-2xl font-bold text-gray-800 mb-8 flex items-center gap-3">
//                     <Award size={24} className="text-purple-600" />
//                     Specializations
//                   </h3>
//                   <div className="space-y-4">
//                     {specialities.map((spec, index) => (
//                       <motion.button
//                         key={index}
//                         whileHover={{ scale: 1.02 }}
//                         whileTap={{ scale: 0.98 }}
//                         onClick={() => handleSpecialityClick(spec)}
//                         className={`w-full text-left px-6 py-4 rounded-2xl transition-all flex items-center gap-4 ${
//                           speciality === spec
//                             ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg"
//                             : "bg-white hover:bg-purple-50 text-gray-700 hover:text-purple-700 border border-gray-100 hover:border-purple-200"
//                         }`}
//                       >
//                         <div className={`w-3 h-3 rounded-full ${speciality === spec ? "bg-white" : "bg-purple-500"}`}></div>
//                         <span className="font-medium">{spec}</span>
//                       </motion.button>
//                     ))}
//                   </div>
//                 </div>
//               </motion.div>
//             </motion.div>
//           </div>

//           {/* Doctors Grid */}
//           <div className="lg:w-3/4">
//             {filterDoc.length === 0 ? (
//               <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="bg-gradient-to-br from-white to-purple-50 rounded-3xl p-12 text-center shadow-lg border border-purple-100">
//                 <div className="max-w-md mx-auto">
//                   <div className="w-24 h-24 bg-gradient-to-br from-purple-100 to-pink-100 rounded-full flex items-center justify-center mx-auto mb-6">
//                     <FaUserMd className="text-4xl text-purple-600" />
//                   </div>
//                   <h3 className="text-2xl font-bold text-gray-800 mb-4">No Doctors Found</h3>
//                   <p className="text-gray-600 mb-8">We couldn't find any doctors matching your criteria. Please try a different specialization or check back later.</p>
//                   <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} onClick={() => navigate("/doctors")} className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all">
//                     View All Doctors
//                   </motion.button>
//                 </div>
//               </motion.div>
//             ) : (
//               <motion.div key={animationKey} initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8">
//                 {filterDoc.map((doctor, index) => (
//                   <motion.div
//                     key={`${animationKey}-${index}`}
//                     whileHover={{ y: -10 }}
//                     className="bg-gradient-to-br from-white to-purple-50 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all cursor-pointer group flex flex-col h-full border border-purple-100"
//                     initial={{ opacity: 0, y: 30 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     transition={{ duration: 0.5, delay: index * 0.1 }}
//                   >
//                     {/* Image Section */}
//                     <div className="relative h-64 overflow-hidden">
//                       <img
//                         className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
//                         src={doctor.image || "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"}
//                         alt={doctor.name}
//                       />
//                       <div className={`absolute top-4 right-4 px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-2 backdrop-blur-sm ${doctor.available ? "bg-green-100/90 text-green-800" : "bg-red-100/90 text-red-800"}`}>
//                         <div className={`w-2 h-2 rounded-full ${doctor.available ? "bg-green-500" : "bg-red-500"}`}></div>
//                         {doctor.available ? "Available" : "Not Available"}
//                       </div>
//                     </div>

//                     {/* Content Section */}
//                     <div className="p-6 flex flex-col flex-grow">
//                       <div className="flex justify-between items-start mb-6">
//                         <div className="min-w-0 flex-1">
//                           <h3 className="text-xl font-bold text-gray-900 truncate mb-1">{doctor.name}</h3>
//                           <p className="text-purple-600 font-semibold text-sm truncate">{doctor.speciality || "General Practitioner"}</p>
//                         </div>
//                         <div className="flex items-center bg-gradient-to-r from-yellow-100 to-orange-100 px-3 py-2 rounded-xl shrink-0 ml-3">
//                           <Star size={16} className="text-yellow-500 fill-yellow-500" />
//                           <span className="text-yellow-800 font-bold ml-1 text-sm">{doctor.rating || "4.8"}</span>
//                         </div>
//                       </div>

//                       {/* Details Section */}
//                       <div className="space-y-3 mb-6">
//                         <div className="flex items-center text-gray-600">
//                           <MapPin size={16} className="text-purple-500 mr-3 flex-shrink-0" />
//                           <span className="truncate text-sm">{doctor.location || "Online & In-person"}</span>
//                         </div>
//                         <div className="flex items-center text-gray-600">
//                           <Briefcase size={16} className="text-purple-500 mr-3 flex-shrink-0" />
//                           <span className="text-sm">{doctor.experience || "5"}+ years experience</span>
//                         </div>
//                         <div className="flex items-center text-gray-600">
//                           <GraduationCap size={16} className="text-purple-500 mr-3 flex-shrink-0" />
//                           <span className="truncate text-sm">{doctor.qualification || "MD, MBBS"}</span>
//                         </div>
//                       </div>

//                       {/* Footer Section */}
//                       <div className="mt-auto pt-4 border-t border-purple-100">
//                         <div className="flex justify-between items-center mb-4">
//                           <span className="text-gray-500 text-sm font-medium">Starting from</span>
//                           <div className="flex items-center">
//                             <span className="text-2xl font-bold text-purple-700">₹{doctor.fees || "500"}</span>
//                             <span className="text-xs text-gray-500 ml-1">/consultation</span>
//                           </div>
//                         </div>

//                         {/* Payment Button */}
//                         <motion.button
//                           whileHover={{ scale: 1.02 }}
//                           whileTap={{ scale: 0.98 }}
//                           className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 px-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2"
//                           onClick={() => handlePayment(doctor._id)}
//                         >
//                           <FaCalendarAlt className="text-sm" />
//                           Pay & Book Appointment
//                         </motion.button>
//                       </div>
//                     </div>
//                   </motion.div>
//                 ))}
//               </motion.div>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Doctors;














// import React, { useContext, useEffect, useState } from "react";
// import { useNavigate, useParams } from "react-router-dom";
// import { AppContext } from "../context/AppContext";
// import { ChevronDown, Star, MapPin, Clock, Award } from "lucide-react";
// import { motion } from "framer-motion";
// import { Briefcase, GraduationCap } from "lucide-react";
// import {
//   FaHeart,
//   FaArrowRight,
//   FaUserMd,
//   FaSearch,
//   FaFilter,
//   FaPhone,
//   FaCalendarAlt,
// } from "react-icons/fa";
// import axios from "axios"; // for Razorpay

// const Doctors = () => {
//   const { speciality } = useParams();
//   const [filterDoc, setFilterDoc] = useState([]);
//   const [showFilter, setShowFilter] = useState(false);
//   const [animationKey, setAnimationKey] = useState(0);

//   const navigate = useNavigate();
//   const { doctors, user, token } = useContext(AppContext);

//   const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

//   const applyFilter = () => {
//     if (speciality) {
//       const filtered = doctors.filter((doc) => doc.speciality === speciality);
//       setFilterDoc(filtered);
//     } else {
//       setFilterDoc(doctors);
//     }
//   };

//   useEffect(() => {
//     applyFilter();
//   }, [doctors, speciality]);

//   const handleSpecialityClick = (newSpeciality) => {
//     setAnimationKey((prev) => prev + 1);

//     if (speciality === newSpeciality) {
//       navigate("/doctors");
//     } else {
//       navigate(`/doctors/${newSpeciality}`);
//     }

//     scrollToTop();
//   };

//   // Razorpay payment handler
//   const handlePayment = async (doctorId) => {
//     if (!token) {
//       alert("Please login first!");
//       navigate("/login");
//       return;
//     }

//     try {
//       const { data } = await axios.post(
//         "http://localhost:4000/api/payment/razorpay",
//         { userId: user._id, doctorId }
//       );

//       const order = data.order;

//       const options = {
//         key: order.key_id,
//         amount: order.amount,
//         currency: order.currency,
//         name: "Mood Mantra",
//         description: "Appointment Payment",
//         order_id: order.id,
//         handler: async function (response) {
//           await axios.post("http://localhost:4000/api/payment/verify", response);
//           alert("Payment Successful! Appointment confirmed 🎉");
//           navigate("/my-appointments");
//         },
//         prefill: {
//           email: user.email,
//           name: user.name,
//         },
//         theme: { color: "#2563EB" },
//       };

//       const rzp = new window.Razorpay(options);
//       rzp.open();
//     } catch (err) {
//       console.error(err);
//       alert("Payment failed. Try again!");
//     }
//   };

//   const specialities = [
//     "Psychiatrists",
//     "Clinical Psychologists",
//     "Therapists",
//     "Child and Adolescent Psychiatrists",
//     "Geriatric Psychiatrists",
//     "Addiction Psychiatrists",
//   ];

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-slate-50 via-purple-50 to-indigo-100">
//       {/* Hero Section */}
//       <section className="relative overflow-hidden py-20">
//         {/* Animated Background */}
//         <div className="absolute inset-0 overflow-hidden">
//           <motion.div
//             animate={{ scale: [1, 1.2, 1], rotate: [0, 180, 360] }}
//             transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
//             className="absolute top-20 left-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30"
//           />
//           <motion.div
//             animate={{ scale: [1.2, 1, 1.2], rotate: [360, 180, 0] }}
//             transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
//             className="absolute top-40 right-20 w-96 h-96 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30"
//           />
//           <motion.div
//             animate={{ scale: [1, 1.3, 1], rotate: [0, -180, -360] }}
//             transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
//             className="absolute bottom-20 left-1/4 w-80 h-80 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30"
//           />
//         </div>

//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
//           <div className="text-center">
//             {/* Badge */}
//             <motion.div
//               initial={{ scale: 0.8, opacity: 0 }}
//               animate={{ scale: 1, opacity: 1 }}
//               transition={{ delay: 0.2, duration: 0.5 }}
//               className="inline-flex items-center bg-white/90 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg mb-8 border border-purple-100"
//             >
//               <motion.div
//                 animate={{ scale: [1, 1.1, 1] }}
//                 transition={{ repeat: Infinity, duration: 2 }}
//               >
//                 <FaUserMd className="text-purple-500 text-xl mr-3" />
//               </motion.div>
//               <span className="text-purple-800 font-semibold">
//                 Expert Mental Health Professionals
//               </span>
//             </motion.div>

//             {/* Main Heading */}
//             <motion.h1
//               initial={{ opacity: 0, y: 30 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.3, duration: 0.8 }}
//               className="text-5xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight"
//             >
//               {speciality
//                 ? `${speciality} Specialists`
//                 : "Our Mental Health Professionals"}
//             </motion.h1>

//             {/* Subtitle */}
//             <motion.p
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.5, duration: 0.8 }}
//               className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed"
//             >
//               Connect with qualified mental health professionals who can guide
//               you on your wellness journey.
//             </motion.p>

//             {/* Hero CTA Buttons */}
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.7, duration: 0.8 }}
//               className="flex flex-col sm:flex-row gap-4 mb-12 justify-center"
//             >
//               <motion.button
//                 whileHover={{
//                   scale: 1.05,
//                   boxShadow: "0 20px 25px -5px rgba(124, 58, 237, 0.3)",
//                 }}
//                 whileTap={{ scale: 0.95 }}
//                 className="group bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-xl transition-all duration-300 flex items-center justify-center gap-2"
//                 onClick={() => {
//                   if (filterDoc.length > 0) handlePayment(filterDoc[0]._id);
//                   else alert("No doctors available!");
//                 }}
//               >
//                 Book Appointment
//                 <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
//               </motion.button>

//               <motion.button
//                 whileHover={{ scale: 1.05, backgroundColor: "#f8fafc" }}
//                 whileTap={{ scale: 0.95 }}
//                 className="bg-white/80 backdrop-blur-sm hover:bg-white text-purple-600 px-8 py-4 rounded-full text-lg font-semibold shadow-xl border border-purple-100 transition-all duration-300 flex items-center justify-center gap-2"
//               >
//                 <FaSearch className="text-sm" />
//                 Search Doctors
//               </motion.button>
//             </motion.div>
//           </div>
//         </div>

//         {/* Wave Divider */}
//         <div className="absolute bottom-0 left-0 right-0">
//           <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-24">
//             <path
//               d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
//               opacity=".25"
//               fill="currentColor"
//               className="text-white"
//             />
//             <path
//               d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
//               opacity=".5"
//               fill="currentColor"
//               className="text-white"
//             />
//             <path
//               d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
//               fill="currentColor"
//               className="text-white"
//             />
//           </svg>
//         </div>
//       </section>

//       {/* Main Content */}
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
//         <div className="flex flex-col lg:flex-row gap-12">
//           {/* Filter Sidebar */}
//           <div className="lg:w-1/4">
//             <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
//               <button
//                 className={`w-full py-4 px-6 flex items-center justify-between gap-2 rounded-2xl text-lg font-semibold transition-all duration-300 lg:hidden ${
//                   showFilter ? "bg-white text-purple-700 border border-purple-200 shadow-lg" : "bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-xl hover:shadow-2xl"
//                 }`}
//                 onClick={() => setShowFilter((prev) => !prev)}
//               >
//                 <div className="flex items-center gap-2">
//                   <FaFilter className="text-lg" />
//                   {showFilter ? "Hide Filters" : "Filter by Specialization"}
//                 </div>
//                 <ChevronDown size={20} className={`transition-transform duration-300 ${showFilter ? "rotate-180" : ""}`} />
//               </button>

//               <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className={`${showFilter ? "block" : "hidden"} lg:block`}>
//                 <div className="bg-gradient-to-br from-white to-purple-50 p-8 rounded-3xl shadow-lg border border-purple-100">
//                   <h3 className="text-2xl font-bold text-gray-800 mb-8 flex items-center gap-3">
//                     <Award size={24} className="text-purple-600" />
//                     Specializations
//                   </h3>
//                   <div className="space-y-4">
//                     {specialities.map((spec, index) => (
//                       <motion.button
//                         key={index}
//                         whileHover={{ scale: 1.02 }}
//                         whileTap={{ scale: 0.98 }}
//                         onClick={() => handleSpecialityClick(spec)}
//                         className={`w-full text-left px-6 py-4 rounded-2xl transition-all flex items-center gap-4 ${
//                           speciality === spec
//                             ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg"
//                             : "bg-white hover:bg-purple-50 text-gray-700 hover:text-purple-700 border border-gray-100 hover:border-purple-200"
//                         }`}
//                       >
//                         <div className={`w-3 h-3 rounded-full ${speciality === spec ? "bg-white" : "bg-purple-500"}`}></div>
//                         <span className="font-medium">{spec}</span>
//                       </motion.button>
//                     ))}
//                   </div>
//                 </div>
//               </motion.div>
//             </motion.div>
//           </div>

//           {/* Doctors Grid */}
//           <div className="lg:w-3/4">
//             {filterDoc.length === 0 ? (
//               <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="bg-gradient-to-br from-white to-purple-50 rounded-3xl p-12 text-center shadow-lg border border-purple-100">
//                 <div className="max-w-md mx-auto">
//                   <div className="w-24 h-24 bg-gradient-to-br from-purple-100 to-pink-100 rounded-full flex items-center justify-center mx-auto mb-6">
//                     <FaUserMd className="text-4xl text-purple-600" />
//                   </div>
//                   <h3 className="text-2xl font-bold text-gray-800 mb-4">No Doctors Found</h3>
//                   <p className="text-gray-600 mb-8">We couldn't find any doctors matching your criteria. Please try a different specialization or check back later.</p>
//                   <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} onClick={() => navigate("/doctors")} className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all">
//                     View All Doctors
//                   </motion.button>
//                 </div>
//               </motion.div>
//             ) : (
//               <motion.div key={animationKey} initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8">
//                 {filterDoc.map((doctor, index) => (
//                   <motion.div
//                     key={`${animationKey}-${index}`}
//                     whileHover={{ y: -10 }}
//                     className="bg-gradient-to-br from-white to-purple-50 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all cursor-pointer group flex flex-col h-full border border-purple-100"
//                     initial={{ opacity: 0, y: 30 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     transition={{ duration: 0.5, delay: index * 0.1 }}
//                   >
//                     {/* Image Section */}
//                     <div className="relative h-64 overflow-hidden">
//                       <img
//                         className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
//                         src={doctor.image || "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"}
//                         alt={doctor.name}
//                       />
//                       <div className={`absolute top-4 right-4 px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-2 backdrop-blur-sm ${doctor.available ? "bg-green-100/90 text-green-800" : "bg-red-100/90 text-red-800"}`}>
//                         <div className={`w-2 h-2 rounded-full ${doctor.available ? "bg-green-500" : "bg-red-500"}`}></div>
//                         {doctor.available ? "Available" : "Not Available"}
//                       </div>
//                     </div>

//                     {/* Content Section */}
//                     <div className="p-6 flex flex-col flex-grow">
//                       <div className="flex justify-between items-start mb-6">
//                         <div className="min-w-0 flex-1">
//                           <h3 className="text-xl font-bold text-gray-900 truncate mb-1">{doctor.name}</h3>
//                           <p className="text-purple-600 font-semibold text-sm truncate">{doctor.speciality || "General Practitioner"}</p>
//                         </div>
//                         <div className="flex items-center bg-gradient-to-r from-yellow-100 to-orange-100 px-3 py-2 rounded-xl shrink-0 ml-3">
//                           <Star size={16} className="text-yellow-500 fill-yellow-500" />
//                           <span className="text-yellow-800 font-bold ml-1 text-sm">{doctor.rating || "4.8"}</span>
//                         </div>
//                       </div>

//                       {/* Details Section */}
//                       <div className="space-y-3 mb-6">
//                         <div className="flex items-center text-gray-600">
//                           <MapPin size={16} className="text-purple-500 mr-3 flex-shrink-0" />
//                           <span className="truncate text-sm">{doctor.location || "Online & In-person"}</span>
//                         </div>
//                         <div className="flex items-center text-gray-600">
//                           <Briefcase size={16} className="text-purple-500 mr-3 flex-shrink-0" />
//                           <span className="text-sm">{doctor.experience || "5"}+ years experience</span>
//                         </div>
//                         <div className="flex items-center text-gray-600">
//                           <GraduationCap size={16} className="text-purple-500 mr-3 flex-shrink-0" />
//                           <span className="truncate text-sm">{doctor.qualification || "MD, MBBS"}</span>
//                         </div>
//                       </div>

//                       {/* Footer Section */}
//                       <div className="mt-auto pt-4 border-t border-purple-100">
//                         <div className="flex justify-between items-center mb-4">
//                           <span className="text-gray-500 text-sm font-medium">Starting from</span>
//                           <div className="flex items-center">
//                             <span className="text-2xl font-bold text-purple-700">₹{doctor.fees || "500"}</span>
//                             <span className="text-xs text-gray-500 ml-1">/consultation</span>
//                           </div>
//                         </div>

//                         {/* Payment Button */}
//                         <motion.button
//                           whileHover={{ scale: 1.02 }}
//                           whileTap={{ scale: 0.98 }}
//                           className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 px-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2"
//                           onClick={() => handlePayment(doctor._id)}
//                         >
//                           <FaCalendarAlt className="text-sm" />
//                           Pay & Book Appointment
//                         </motion.button>
//                       </div>
//                     </div>
//                   </motion.div>
//                 ))}
//               </motion.div>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Doctors;








// import React, { useContext, useEffect, useState } from "react";
// import { useNavigate, useParams } from "react-router-dom";
// import { AppContext } from "../context/AppContext";
// import { ChevronDown, Star, MapPin, Clock, Award } from "lucide-react";
// import { motion } from "framer-motion";
// import { Briefcase, GraduationCap } from "lucide-react";
// import {
//   FaHeart,
//   FaArrowRight,
//   FaUserMd,
//   FaSearch,
//   FaFilter,
//   FaPhone,
//   FaCalendarAlt,
// } from "react-icons/fa";
// import axios from "axios"; // for Razorpay

// const Doctors = () => {
//   const { speciality } = useParams();
//   const [filterDoc, setFilterDoc] = useState([]);
//   const [showFilter, setShowFilter] = useState(false);
//   const [animationKey, setAnimationKey] = useState(0);

//   const navigate = useNavigate();
//   const { doctors, user, token } = useContext(AppContext);

//   const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

//   const applyFilter = () => {
//     if (speciality) {
//       const filtered = doctors.filter((doc) => doc.speciality === speciality);
//       setFilterDoc(filtered);
//     } else {
//       setFilterDoc(doctors);
//     }
//   };

//   useEffect(() => {
//     applyFilter();
//   }, [doctors, speciality]);

//   const handleSpecialityClick = (newSpeciality) => {
//     setAnimationKey((prev) => prev + 1);

//     if (speciality === newSpeciality) {
//       navigate("/doctors");
//     } else {
//       navigate(`/doctors/${newSpeciality}`);
//     }

//     scrollToTop();
//   };

//   // Fixed Razorpay payment handler
//   const handlePayment = async (doctorId) => {
//     if (!token) {
//       alert("Please login first!");
//       navigate("/login");
//       return;
//     }

//     // Check if user object exists and has required data
//     if (!user || !user._id) {
//       alert("Please wait for profile to load or try logging in again!");
//       return;
//     }

//     try {
//       // Use environment variable for backend URL
//       const backendUrl = import.meta.env.VITE_BACKEND_URL || "http://localhost:4000";
      
//       const { data } = await axios.post(
//         `${backendUrl}/api/payment/razorpay`,
//         { 
//           userId: user._id, 
//           doctorId: doctorId 
//         },
//         {
//           headers: {
//             Authorization: `Bearer ${token}` // Add auth header if needed
//           }
//         }
//       );

//       const order = data.order;

//       const options = {
//         key: order.key_id,
//         amount: order.amount,
//         currency: order.currency,
//         name: "Mood Mantra",
//         description: "Appointment Payment",
//         order_id: order.id,
//         handler: async function (response) {
//           try {
//             await axios.post(
//               `${backendUrl}/api/payment/verify`, 
//               response,
//               {
//                 headers: {
//                   Authorization: `Bearer ${token}`
//                 }
//               }
//             );
//             alert("Payment Successful! Appointment confirmed 🎉");
//             navigate("/my-appointments");
//           } catch (verifyError) {
//             console.error("Payment verification failed:", verifyError);
//             alert("Payment completed but verification failed. Please contact support.");
//           }
//         },
//         prefill: {
//           email: user.email || "",
//           name: user.name || "",
//         },
//         theme: { 
//           color: "#2563EB" 
//         },
//         modal: {
//           ondismiss: function() {
//             console.log("Payment modal closed");
//           }
//         }
//       };

//       // Check if Razorpay is loaded
//       if (typeof window.Razorpay === 'undefined') {
//         alert("Payment system is loading. Please try again in a moment.");
//         return;
//       }

//       const rzp = new window.Razorpay(options);
//       rzp.open();

//     } catch (err) {
//       console.error("Payment error:", err);
      
//       if (err.response) {
//         // Server responded with error
//         const errorMessage = err.response.data.message || "Payment failed. Please try again!";
//         alert(errorMessage);
//       } else if (err.request) {
//         // Network error
//         alert("Network error. Please check your connection and try again!");
//       } else {
//         // Other error
//         alert("Payment failed. Please try again!");
//       }
//     }
//   };

//   const specialities = [
//     "Psychiatrists",
//     "Clinical Psychologists",
//     "Therapists",
//     "Child and Adolescent Psychiatrists",
//     "Geriatric Psychiatrists",
//     "Addiction Psychiatrists",
//   ];

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-slate-50 via-purple-50 to-indigo-100">
//       {/* Hero Section */}
//       <section className="relative overflow-hidden py-20">
//         {/* Animated Background */}
//         <div className="absolute inset-0 overflow-hidden">
//           <motion.div
//             animate={{ scale: [1, 1.2, 1], rotate: [0, 180, 360] }}
//             transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
//             className="absolute top-20 left-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30"
//           />
//           <motion.div
//             animate={{ scale: [1.2, 1, 1.2], rotate: [360, 180, 0] }}
//             transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
//             className="absolute top-40 right-20 w-96 h-96 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30"
//           />
//           <motion.div
//             animate={{ scale: [1, 1.3, 1], rotate: [0, -180, -360] }}
//             transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
//             className="absolute bottom-20 left-1/4 w-80 h-80 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30"
//           />
//         </div>

//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
//           <div className="text-center">
//             {/* Badge */}
//             <motion.div
//               initial={{ scale: 0.8, opacity: 0 }}
//               animate={{ scale: 1, opacity: 1 }}
//               transition={{ delay: 0.2, duration: 0.5 }}
//               className="inline-flex items-center bg-white/90 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg mb-8 border border-purple-100"
//             >
//               <motion.div
//                 animate={{ scale: [1, 1.1, 1] }}
//                 transition={{ repeat: Infinity, duration: 2 }}
//               >
//                 <FaUserMd className="text-purple-500 text-xl mr-3" />
//               </motion.div>
//               <span className="text-purple-800 font-semibold">
//                 Expert Mental Health Professionals
//               </span>
//             </motion.div>

//             {/* Main Heading */}
//             <motion.h1
//               initial={{ opacity: 0, y: 30 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.3, duration: 0.8 }}
//               className="text-5xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight"
//             >
//               {speciality
//                 ? `${speciality} Specialists`
//                 : "Our Mental Health Professionals"}
//             </motion.h1>

//             {/* Subtitle */}
//             <motion.p
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.5, duration: 0.8 }}
//               className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed"
//             >
//               Connect with qualified mental health professionals who can guide
//               you on your wellness journey.
//             </motion.p>

//             {/* Hero CTA Buttons */}
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.7, duration: 0.8 }}
//               className="flex flex-col sm:flex-row gap-4 mb-12 justify-center"
//             >
//               <motion.button
//                 whileHover={{
//                   scale: 1.05,
//                   boxShadow: "0 20px 25px -5px rgba(124, 58, 237, 0.3)",
//                 }}
//                 whileTap={{ scale: 0.95 }}
//                 className="group bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-xl transition-all duration-300 flex items-center justify-center gap-2"
//                 onClick={() => {
//                   if (filterDoc.length > 0) handlePayment(filterDoc[0]._id);
//                   else alert("No doctors available!");
//                 }}
//               >
//                 Book Appointment
//                 <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
//               </motion.button>

//               <motion.button
//                 whileHover={{ scale: 1.05, backgroundColor: "#f8fafc" }}
//                 whileTap={{ scale: 0.95 }}
//                 className="bg-white/80 backdrop-blur-sm hover:bg-white text-purple-600 px-8 py-4 rounded-full text-lg font-semibold shadow-xl border border-purple-100 transition-all duration-300 flex items-center justify-center gap-2"
//               >
//                 <FaSearch className="text-sm" />
//                 Search Doctors
//               </motion.button>
//             </motion.div>
//           </div>
//         </div>

//         {/* Wave Divider */}
//         <div className="absolute bottom-0 left-0 right-0">
//           <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-24">
//             <path
//               d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
//               opacity=".25"
//               fill="currentColor"
//               className="text-white"
//             />
//             <path
//               d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
//               opacity=".5"
//               fill="currentColor"
//               className="text-white"
//             />
//             <path
//               d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
//               fill="currentColor"
//               className="text-white"
//             />
//           </svg>
//         </div>
//       </section>

//       {/* Main Content */}
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
//         <div className="flex flex-col lg:flex-row gap-12">
//           {/* Filter Sidebar */}
//           <div className="lg:w-1/4">
//             <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
//               <button
//                 className={`w-full py-4 px-6 flex items-center justify-between gap-2 rounded-2xl text-lg font-semibold transition-all duration-300 lg:hidden ${
//                   showFilter ? "bg-white text-purple-700 border border-purple-200 shadow-lg" : "bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-xl hover:shadow-2xl"
//                 }`}
//                 onClick={() => setShowFilter((prev) => !prev)}
//               >
//                 <div className="flex items-center gap-2">
//                   <FaFilter className="text-lg" />
//                   {showFilter ? "Hide Filters" : "Filter by Specialization"}
//                 </div>
//                 <ChevronDown size={20} className={`transition-transform duration-300 ${showFilter ? "rotate-180" : ""}`} />
//               </button>

//               <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className={`${showFilter ? "block" : "hidden"} lg:block`}>
//                 <div className="bg-gradient-to-br from-white to-purple-50 p-8 rounded-3xl shadow-lg border border-purple-100">
//                   <h3 className="text-2xl font-bold text-gray-800 mb-8 flex items-center gap-3">
//                     <Award size={24} className="text-purple-600" />
//                     Specializations
//                   </h3>
//                   <div className="space-y-4">
//                     {specialities.map((spec, index) => (
//                       <motion.button
//                         key={index}
//                         whileHover={{ scale: 1.02 }}
//                         whileTap={{ scale: 0.98 }}
//                         onClick={() => handleSpecialityClick(spec)}
//                         className={`w-full text-left px-6 py-4 rounded-2xl transition-all flex items-center gap-4 ${
//                           speciality === spec
//                             ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg"
//                             : "bg-white hover:bg-purple-50 text-gray-700 hover:text-purple-700 border border-gray-100 hover:border-purple-200"
//                         }`}
//                       >
//                         <div className={`w-3 h-3 rounded-full ${speciality === spec ? "bg-white" : "bg-purple-500"}`}></div>
//                         <span className="font-medium">{spec}</span>
//                       </motion.button>
//                     ))}
//                   </div>
//                 </div>
//               </motion.div>
//             </motion.div>
//           </div>

//           {/* Doctors Grid */}
//           <div className="lg:w-3/4">
//             {filterDoc.length === 0 ? (
//               <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="bg-gradient-to-br from-white to-purple-50 rounded-3xl p-12 text-center shadow-lg border border-purple-100">
//                 <div className="max-w-md mx-auto">
//                   <div className="w-24 h-24 bg-gradient-to-br from-purple-100 to-pink-100 rounded-full flex items-center justify-center mx-auto mb-6">
//                     <FaUserMd className="text-4xl text-purple-600" />
//                   </div>
//                   <h3 className="text-2xl font-bold text-gray-800 mb-4">No Doctors Found</h3>
//                   <p className="text-gray-600 mb-8">We couldn't find any doctors matching your criteria. Please try a different specialization or check back later.</p>
//                   <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} onClick={() => navigate("/doctors")} className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all">
//                     View All Doctors
//                   </motion.button>
//                 </div>
//               </motion.div>
//             ) : (
//               <motion.div key={animationKey} initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8">
//                 {filterDoc.map((doctor, index) => (
//                   <motion.div
//                     key={`${animationKey}-${index}`}
//                     whileHover={{ y: -10 }}
//                     className="bg-gradient-to-br from-white to-purple-50 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all cursor-pointer group flex flex-col h-full border border-purple-100"
//                     initial={{ opacity: 0, y: 30 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     transition={{ duration: 0.5, delay: index * 0.1 }}
//                   >
//                     {/* Image Section */}
//                     <div className="relative h-64 overflow-hidden">
//                       <img
//                         className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
//                         src={doctor.image || "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"}
//                         alt={doctor.name}
//                       />
//                       <div className={`absolute top-4 right-4 px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-2 backdrop-blur-sm ${doctor.available ? "bg-green-100/90 text-green-800" : "bg-red-100/90 text-red-800"}`}>
//                         <div className={`w-2 h-2 rounded-full ${doctor.available ? "bg-green-500" : "bg-red-500"}`}></div>
//                         {doctor.available ? "Available" : "Not Available"}
//                       </div>
//                     </div>

//                     {/* Content Section */}
//                     <div className="p-6 flex flex-col flex-grow">
//                       <div className="flex justify-between items-start mb-6">
//                         <div className="min-w-0 flex-1">
//                           <h3 className="text-xl font-bold text-gray-900 truncate mb-1">{doctor.name}</h3>
//                           <p className="text-purple-600 font-semibold text-sm truncate">{doctor.speciality || "General Practitioner"}</p>
//                         </div>
//                         <div className="flex items-center bg-gradient-to-r from-yellow-100 to-orange-100 px-3 py-2 rounded-xl shrink-0 ml-3">
//                           <Star size={16} className="text-yellow-500 fill-yellow-500" />
//                           <span className="text-yellow-800 font-bold ml-1 text-sm">{doctor.rating || "4.8"}</span>
//                         </div>
//                       </div>

//                       {/* Details Section */}
//                       <div className="space-y-3 mb-6">
//                         <div className="flex items-center text-gray-600">
//                           <MapPin size={16} className="text-purple-500 mr-3 flex-shrink-0" />
//                           <span className="truncate text-sm">{doctor.location || "Online & In-person"}</span>
//                         </div>
//                         <div className="flex items-center text-gray-600">
//                           <Briefcase size={16} className="text-purple-500 mr-3 flex-shrink-0" />
//                           <span className="text-sm">{doctor.experience || "5"}+ years experience</span>
//                         </div>
//                         <div className="flex items-center text-gray-600">
//                           <GraduationCap size={16} className="text-purple-500 mr-3 flex-shrink-0" />
//                           <span className="truncate text-sm">{doctor.qualification || "MD, MBBS"}</span>
//                         </div>
//                       </div>

//                       {/* Footer Section */}
//                       <div className="mt-auto pt-4 border-t border-purple-100">
//                         <div className="flex justify-between items-center mb-4">
//                           <span className="text-gray-500 text-sm font-medium">Starting from</span>
//                           <div className="flex items-center">
//                             <span className="text-2xl font-bold text-purple-700">₹{doctor.fees || "500"}</span>
//                             <span className="text-xs text-gray-500 ml-1">/consultation</span>
//                           </div>
//                         </div>

//                         {/* Payment Button */}
//                         <motion.button
//                           whileHover={{ scale: 1.02 }}
//                           whileTap={{ scale: 0.98 }}
//                           className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 px-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
//                           onClick={() => handlePayment(doctor._id)}
//                           disabled={!user || !user._id}
//                         >
//                           {!user || !user._id ? (
//                             <>
//                               <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
//                               Loading...
//                             </>
//                           ) : (
//                             <>
//                               <FaCalendarAlt className="text-sm" />
//                               Pay & Book Appointment
//                             </>
//                           )}
//                         </motion.button>
//                       </div>
//                     </div>
//                   </motion.div>
//                 ))}
//               </motion.div>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Doctors;




















































































import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import { ChevronDown, Star, MapPin, Clock, Award, X } from "lucide-react";
import { motion } from "framer-motion";
import { Briefcase, GraduationCap } from "lucide-react";
import {
  FaHeart,
  FaArrowRight,
  FaUserMd,
  FaSearch,
  FaFilter,
  FaPhone,
  FaCalendarAlt,
  FaLock,
  FaCreditCard,
} from "react-icons/fa";
import axios from "axios";
import { toast } from "react-toastify";

const Doctors = () => {
  const { speciality } = useParams();
  const [filterDoc, setFilterDoc] = useState([]);
  const [showFilter, setShowFilter] = useState(false);
  const [animationKey, setAnimationKey] = useState(0);
  const [paymentLoading, setPaymentLoading] = useState(false);
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const [showBookingModal, setShowBookingModal] = useState(false);
  const [selectedDoctorData, setSelectedDoctorData] = useState(null);
  
  // Booking form state
  const [bookingData, setBookingData] = useState({
    slotDate: '',
    slotTime: '',
    reasonForVisit: '',
    sessionType: 'Online',
    communicationMethod: 'Video Call',
    briefNotes: '',
    emergencyContact: '',
    consentGiven: false
  });

  const navigate = useNavigate();
  const { doctors, userData, token, backendUrl } = useContext(AppContext);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  const applyFilter = () => {
    if (speciality) {
      const filtered = doctors.filter((doc) => doc.speciality === speciality);
      setFilterDoc(filtered);
    } else {
      setFilterDoc(doctors);
    }
  };

  useEffect(() => {
    applyFilter();
  }, [doctors, speciality]);

  const handleSpecialityClick = (newSpeciality) => {
    setAnimationKey((prev) => prev + 1);
    if (speciality === newSpeciality) {
      navigate("/doctors");
    } else {
      navigate(`/doctors/${newSpeciality}`);
    }
    scrollToTop();
  };

  // Generate available time slots
  const generateTimeSlots = () => {
    const slots = [];
    for (let hour = 9; hour <= 17; hour++) {
      slots.push(`${hour.toString().padStart(2, '0')}:00`);
      if (hour !== 17) {
        slots.push(`${hour.toString().padStart(2, '0')}:30`);
      }
    }
    return slots;
  };

  // Generate next 30 days (excluding Sundays)
  const generateAvailableDates = () => {
    const dates = [];
    const today = new Date();
    let daysAdded = 0;
    let dayOffset = 1;
    
    while (daysAdded < 30) {
      const date = new Date(today);
      date.setDate(today.getDate() + dayOffset);
      
      // Skip Sundays (0 = Sunday)
      if (date.getDay() !== 0) {
        dates.push({
          value: date.toISOString().split('T')[0],
          label: date.toLocaleDateString('en-IN', { 
            weekday: 'short', 
            month: 'short', 
            day: 'numeric' 
          })
        });
        daysAdded++;
      }
      dayOffset++;
    }
    return dates;
  };

  // Open booking modal
  const openBookingModal = (doctor) => {
    if (!token) {
      const loginConfirm = window.confirm(
        "You need to login to book an appointment. Would you like to login now?"
      );
      if (loginConfirm) {
        navigate("/login", { state: { redirectTo: `/doctors` } });
      }
      return;
    }

    if (!userData || !userData._id) {
      toast.error("Please wait for your profile to load completely, then try again.");
      return;
    }

    if (!doctor.available) {
      toast.error("This doctor is currently not available for appointments.");
      return;
    }

    setSelectedDoctorData(doctor);
    setShowBookingModal(true);
    
    // Reset form
    setBookingData({
      slotDate: '',
      slotTime: '',
      reasonForVisit: '',
      sessionType: 'Online',
      communicationMethod: 'Video Call',
      briefNotes: '',
      emergencyContact: '',
      consentGiven: false
    });
  };

  // Handle booking form submission and payment
  const handleBookingSubmit = async (e) => {
    e.preventDefault();
    
    // Validate required fields
    if (!bookingData.slotDate || !bookingData.slotTime || !bookingData.reasonForVisit) {
      toast.error("Please fill all required fields!");
      return;
    }

    if (!bookingData.consentGiven) {
      toast.error("Please give your consent to proceed with the booking.");
      return;
    }

    setPaymentLoading(true);

    try {
      // Step 1: Create appointment booking (temporary reservation)
      const bookingResponse = await axios.post(
        `${backendUrl}/api/user/book-appointment`,
        {
          docId: selectedDoctorData._id,
          ...bookingData
        },
        {
          headers: {
            token: token,
            "Content-Type": "application/json",
          }
        }
      );

      if (bookingResponse.data.success) {
        const tempReservationId = bookingResponse.data.tempReservationId;
        
        // Step 2: Create payment order
        const paymentResponse = await axios.post(
          `${backendUrl}/api/user/payment-razorpay`,
          {
            tempReservationId: tempReservationId
          },
          {
            headers: {
              token: token,
              "Content-Type": "application/json",
            }
          }
        );

        if (paymentResponse.data.success) {
          const order = paymentResponse.data.order;

          // Step 3: Initialize Razorpay payment
          const options = {
            key: order.key_id,
            amount: order.amount,
            currency: order.currency,
            name: "Mood Mantra",
            description: `Consultation with Dr. ${selectedDoctorData.name}`,
            order_id: order.id,
            handler: async function (response) {
              try {
                // Step 4: Verify payment
                const verifyResponse = await axios.post(
                  `${backendUrl}/api/user/verify-razorpay`,
                  {
                    razorpay_order_id: response.razorpay_order_id,
                    razorpay_payment_id: response.razorpay_payment_id,
                    razorpay_signature: response.razorpay_signature,
                  },
                  {
                    headers: {
                      token: token,
                      "Content-Type": "application/json",
                    }
                  }
                );

                if (verifyResponse.data.success) {
                  toast.success("🎉 Payment Successful! Your appointment has been confirmed.");
                  setShowBookingModal(false);
                  navigate("/my-appointments");
                } else {
                  toast.error("Payment verification failed. Please contact support.");
                }
              } catch (verifyError) {
                console.error("Payment verification error:", verifyError);
                toast.error("Payment completed but verification failed. Please contact support with your payment ID: " + response.razorpay_payment_id);
              }
            },
            prefill: {
              name: userData.name || "",
              email: userData.email || "",
              contact: userData.phone || "",
            },
            theme: {
              color: "#7C3AED",
            },
            modal: {
              ondismiss: function () {
                setPaymentLoading(false);
                // Cancel the reservation when payment modal is closed
                axios.post(
                  `${backendUrl}/api/user/cancel-payment`,
                  { tempReservationId },
                  { headers: { token } }
                ).catch(console.error);
              },
            },
            retry: {
              enabled: true,
              max_count: 3,
            },
            timeout: 300, // 5 minutes
          };

          // Check if Razorpay is loaded
          if (typeof window.Razorpay === "undefined") {
            toast.error("Payment system is loading. Please refresh the page and try again.");
            setPaymentLoading(false);
            return;
          }

          const rzp = new window.Razorpay(options);

          rzp.on("payment.failed", function (response) {
            console.error("Payment failed:", response.error);
            toast.error(`Payment failed: ${response.error.description}`);
            setPaymentLoading(false);
          });

          rzp.open();
        } else {
          toast.error(paymentResponse.data.message || "Failed to create payment order");
        }
      } else {
        toast.error(bookingResponse.data.message || "Failed to create booking");
      }
    } catch (error) {
      console.error("Booking/Payment error:", error);
      
      if (error.response) {
        const status = error.response.status;
        const message = error.response.data.message || "An error occurred";
        
        if (status === 401) {
          toast.error("Session expired. Please login again.");
          navigate("/login");
        } else {
          toast.error(message);
        }
      } else if (error.request) {
        toast.error("Network error. Please check your internet connection.");
      } else {
        toast.error("An unexpected error occurred. Please try again.");
      }
    } finally {
      setPaymentLoading(false);
    }
  };

  const specialities = [
    "Psychiatrists",
    "Clinical Psychologists", 
    "Therapists",
    "Child and Adolescent Psychiatrists",
    "Geriatric Psychiatrists",
    "Addiction Psychiatrists",
  ];

  const timeSlots = generateTimeSlots();
  const availableDates = generateAvailableDates();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-purple-50 to-indigo-100">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20">
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            animate={{ scale: [1, 1.2, 1], rotate: [0, 180, 360] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute top-20 left-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30"
          />
          <motion.div
            animate={{ scale: [1.2, 1, 1.2], rotate: [360, 180, 0] }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="absolute top-40 right-20 w-96 h-96 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30"
          />
          <motion.div
            animate={{ scale: [1, 1.3, 1], rotate: [0, -180, -360] }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="absolute bottom-20 left-1/4 w-80 h-80 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30"
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            {/* Badge */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center bg-white/90 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg mb-8 border border-purple-100"
            >
              <motion.div
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ repeat: Infinity, duration: 2 }}
              >
                <FaUserMd className="text-purple-500 text-xl mr-3" />
              </motion.div>
              <span className="text-purple-800 font-semibold">
                Expert Mental Health Professionals
              </span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-5xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight"
            >
              {speciality
                ? `${speciality} Specialists`
                : "Our Mental Health Professionals"}
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed"
            >
              Connect with qualified mental health professionals who can guide
              you on your wellness journey.
            </motion.p>

            {/* Hero CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 mb-12 justify-center"
            >
              <motion.button
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 20px 25px -5px rgba(124, 58, 237, 0.3)",
                }}
                whileTap={{ scale: 0.95 }}
                className="group bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-xl transition-all duration-300 flex items-center justify-center gap-2"
                onClick={() => {
                  if (filterDoc.length > 0) openBookingModal(filterDoc[0]);
                  else toast.error("No doctors available!");
                }}
              >
                Book Appointment
                <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05, backgroundColor: "#f8fafc" }}
                whileTap={{ scale: 0.95 }}
                className="bg-white/80 backdrop-blur-sm hover:bg-white text-purple-600 px-8 py-4 rounded-full text-lg font-semibold shadow-xl border border-purple-100 transition-all duration-300 flex items-center justify-center gap-2"
                onClick={() => document.getElementById('doctors-grid')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <FaSearch className="text-sm" />
                Search Doctors
              </motion.button>
            </motion.div>
          </div>
        </div>

        {/* Wave Divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-24">
            <path
              d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
              opacity=".25"
              fill="currentColor"
              className="text-white"
            />
            <path
              d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
              opacity=".5"
              fill="currentColor"
              className="text-white"
            />
            <path
              d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
              fill="currentColor"
              className="text-white"
            />
          </svg>
        </div>
      </section>

      {/* Main Content */}
      <div id="doctors-grid" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Filter Sidebar */}
          <div className="lg:w-1/4">
            <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <button
                className={`w-full py-4 px-6 flex items-center justify-between gap-2 rounded-2xl text-lg font-semibold transition-all duration-300 lg:hidden ${
                  showFilter ? "bg-white text-purple-700 border border-purple-200 shadow-lg" : "bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-xl hover:shadow-2xl"
                }`}
                onClick={() => setShowFilter((prev) => !prev)}
              >
                <div className="flex items-center gap-2">
                  <FaFilter className="text-lg" />
                  {showFilter ? "Hide Filters" : "Filter by Specialization"}
                </div>
                <ChevronDown size={20} className={`transition-transform duration-300 ${showFilter ? "rotate-180" : ""}`} />
              </button>

              <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className={`${showFilter ? "block" : "hidden"} lg:block`}>
                <div className="bg-gradient-to-br from-white to-purple-50 p-8 rounded-3xl shadow-lg border border-purple-100">
                  <h3 className="text-2xl font-bold text-gray-800 mb-8 flex items-center gap-3">
                    <Award size={24} className="text-purple-600" />
                    Specializations
                  </h3>
                  <div className="space-y-4">
                    {specialities.map((spec, index) => (
                      <motion.button
                        key={index}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => handleSpecialityClick(spec)}
                        className={`w-full text-left px-6 py-4 rounded-2xl transition-all flex items-center gap-4 ${
                          speciality === spec
                            ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg"
                            : "bg-white hover:bg-purple-50 text-gray-700 hover:text-purple-700 border border-gray-100 hover:border-purple-200"
                        }`}
                      >
                        <div className={`w-3 h-3 rounded-full ${speciality === spec ? "bg-white" : "bg-purple-500"}`}></div>
                        <span className="font-medium">{spec}</span>
                      </motion.button>
                    ))}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* Doctors Grid */}
          <div className="lg:w-3/4">
            {filterDoc.length === 0 ? (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="bg-gradient-to-br from-white to-purple-50 rounded-3xl p-12 text-center shadow-lg border border-purple-100">
                <div className="max-w-md mx-auto">
                  <div className="w-24 h-24 bg-gradient-to-br from-purple-100 to-pink-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <FaUserMd className="text-4xl text-purple-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">No Doctors Found</h3>
                  <p className="text-gray-600 mb-8">We couldn't find any doctors matching your criteria. Please try a different specialization or check back later.</p>
                  <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} onClick={() => navigate("/doctors")} className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all">
                    View All Doctors
                  </motion.button>
                </div>
              </motion.div>
            ) : (
              <motion.div key={animationKey} initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8">
                {filterDoc.map((doctor, index) => (
                  <motion.div
                    key={`${animationKey}-${index}`}
                    whileHover={{ y: -10 }}
                    className="bg-gradient-to-br from-white to-purple-50 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all cursor-pointer group flex flex-col h-full border border-purple-100"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    {/* Image Section */}
                    <div className="relative h-64 overflow-hidden">
                      <img
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        src={doctor.image || "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"}
                        alt={doctor.name}
                      />
                      <div className={`absolute top-4 right-4 px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-2 backdrop-blur-sm ${doctor.available ? "bg-green-100/90 text-green-800" : "bg-red-100/90 text-red-800"}`}>
                        <div className={`w-2 h-2 rounded-full ${doctor.available ? "bg-green-500" : "bg-red-500"}`}></div>
                        {doctor.available ? "Available" : "Not Available"}
                      </div>
                    </div>

                    {/* Content Section */}
                    <div className="p-6 flex flex-col flex-grow">
                      <div className="flex justify-between items-start mb-6">
                        <div className="min-w-0 flex-1">
                          <h3 className="text-xl font-bold text-gray-900 truncate mb-1">{doctor.name}</h3>
                          <p className="text-purple-600 font-semibold text-sm truncate">{doctor.speciality || "General Practitioner"}</p>
                        </div>
                        <div className="flex items-center bg-gradient-to-r from-yellow-100 to-orange-100 px-3 py-2 rounded-xl shrink-0 ml-3">
                          <Star size={16} className="text-yellow-500 fill-yellow-500" />
                          <span className="text-yellow-800 font-bold ml-1 text-sm">{doctor.rating || "4.8"}</span>
                        </div>
                      </div>

                      {/* Details Section */}
                      <div className="space-y-3 mb-6">
                        <div className="flex items-center text-gray-600">
                          <MapPin size={16} className="text-purple-500 mr-3 flex-shrink-0" />
                          <span className="truncate text-sm">{doctor.location || "Online & In-person"}</span>
                        </div>
                        <div className="flex items-center text-gray-600">
                          <Briefcase size={16} className="text-purple-500 mr-3 flex-shrink-0" />
                          <span className="text-sm">{doctor.experience || "5"}+ years experience</span>
                        </div>
                        <div className="flex items-center text-gray-600">
                          <GraduationCap size={16} className="text-purple-500 mr-3 flex-shrink-0" />
                          <span className="truncate text-sm">{doctor.qualification || "MD, MBBS"}</span>
                        </div>
                      </div>

                      {/* Footer Section */}
                      <div className="mt-auto pt-4 border-t border-purple-100">
                        <div className="flex justify-between items-center mb-4">
                          <span className="text-gray-500 text-sm font-medium">Starting from</span>
                          <div className="flex items-center">
                            <span className="text-2xl font-bold text-purple-700">₹{doctor.fees || "500"}</span>
                            <span className="text-xs text-gray-500 ml-1">/consultation</span>
                          </div>
                        </div>

                        {/* Secure Payment Badge */}
                        <div className="flex items-center justify-center mb-3 text-xs text-gray-500">
                          <FaLock className="mr-1" />
                          <span>Secure Payment by Razorpay</span>
                        </div>

                        {/* Payment Button */}
                        <motion.button
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          className={`w-full py-3 px-4 rounded-xl font-semibold shadow-lg transition-all flex items-center justify-center gap-2 ${
                            !userData || !userData._id
                              ? "bg-yellow-500 hover:bg-yellow-600 text-white hover:shadow-xl"
                              : !doctor.available
                              ? "bg-gray-400 cursor-not-allowed text-gray-700"
                              : "bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:shadow-xl"
                          }`}
                          onClick={() => openBookingModal(doctor)}
                          disabled={!doctor.available}
                        >
                          {!userData || !userData._id ? (
                            <>
                              <FaLock className="text-sm" />
                              Login to Book
                            </>
                          ) : !doctor.available ? (
                            <>
                              <Clock className="w-4 h-4" />
                              Currently Unavailable
                            </>
                          ) : (
                            <>
                              <FaCreditCard className="text-sm" />
                              Book Appointment
                            </>
                          )}
                        </motion.button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </div>
        </div>
      </div>

      {/* Booking Modal */}
      {showBookingModal && selectedDoctorData && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-3xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-200">
              <div className="flex items-center gap-4">
                <img
                  src={selectedDoctorData.image}
                  alt={selectedDoctorData.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h3 className="text-xl font-bold text-gray-900">{selectedDoctorData.name}</h3>
                  <p className="text-purple-600 font-medium">{selectedDoctorData.speciality}</p>
                </div>
              </div>
              <button
                onClick={() => setShowBookingModal(false)}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            {/* Booking Form */}
            <form onSubmit={handleBookingSubmit} className="p-6 space-y-6">
              {/* Date Selection */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Select Date *
                </label>
                <select
                  value={bookingData.slotDate}
                  onChange={(e) => setBookingData({...bookingData, slotDate: e.target.value, slotTime: ''})}
                  className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  required
                >
                  <option value="">Choose a date</option>
                  {availableDates.map((date) => (
                    <option key={date.value} value={date.value}>
                      {date.label}
                    </option>
                  ))}
                </select>
              </div>

              {/* Time Selection */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Select Time *
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {timeSlots.map((time) => (
                    <button
                      key={time}
                      type="button"
                      onClick={() => setBookingData({...bookingData, slotTime: time})}
                      className={`p-2 text-sm rounded-lg border transition-all ${
                        bookingData.slotTime === time
                          ? 'bg-purple-600 text-white border-purple-600'
                          : 'bg-white text-gray-700 border-gray-300 hover:border-purple-300'
                      }`}
                      disabled={!bookingData.slotDate}
                    >
                      {time}
                    </button>
                  ))}
                </div>
              </div>

              {/* Session Type */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Session Type *
                </label>
                <div className="flex gap-4">
                  {['Online', 'In-person'].map((type) => (
                    <button
                      key={type}
                      type="button"
                      onClick={() => setBookingData({...bookingData, sessionType: type})}
                      className={`px-4 py-2 rounded-lg border transition-all ${
                        bookingData.sessionType === type
                          ? 'bg-purple-600 text-white border-purple-600'
                          : 'bg-white text-gray-700 border-gray-300 hover:border-purple-300'
                      }`}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>

              {/* Communication Method (for Online sessions) */}
              {bookingData.sessionType === 'Online' && (
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Communication Method
                  </label>
                  <select
                    value={bookingData.communicationMethod}
                    onChange={(e) => setBookingData({...bookingData, communicationMethod: e.target.value})}
                    className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  >
                    <option value="Video Call">Video Call</option>
                    <option value="Phone Call">Phone Call</option>
                    <option value="Chat">Chat</option>
                  </select>
                </div>
              )}

              {/* Reason for Visit */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Reason for Visit *
                </label>
                <textarea
                  value={bookingData.reasonForVisit}
                  onChange={(e) => setBookingData({...bookingData, reasonForVisit: e.target.value})}
                  className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  rows="3"
                  placeholder="Please describe your concerns or reason for this appointment..."
                  required
                />
              </div>

              {/* Brief Notes */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Additional Notes (Optional)
                </label>
                <textarea
                  value={bookingData.briefNotes}
                  onChange={(e) => setBookingData({...bookingData, briefNotes: e.target.value})}
                  className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  rows="2"
                  placeholder="Any additional information you'd like to share..."
                />
              </div>

              {/* Emergency Contact */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Emergency Contact (Optional)
                </label>
                <input
                  type="text"
                  value={bookingData.emergencyContact}
                  onChange={(e) => setBookingData({...bookingData, emergencyContact: e.target.value})}
                  className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="Emergency contact name and number"
                />
              </div>

              {/* Consent Checkbox */}
              <div className="flex items-start gap-3">
                <input
                  type="checkbox"
                  id="consent"
                  checked={bookingData.consentGiven}
                  onChange={(e) => setBookingData({...bookingData, consentGiven: e.target.checked})}
                  className="mt-1 h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300 rounded"
                  required
                />
                <label htmlFor="consent" className="text-sm text-gray-700">
                  I consent to sharing this information with the healthcare provider and understand that this session will be conducted according to professional standards. I also agree to the payment terms and cancellation policy. *
                </label>
              </div>

              {/* Payment Summary */}
              <div className="bg-purple-50 p-4 rounded-xl border border-purple-200">
                <div className="flex justify-between items-center">
                  <span className="font-semibold text-gray-700">Consultation Fee:</span>
                  <span className="text-2xl font-bold text-purple-700">₹{selectedDoctorData.fees}</span>
                </div>
                <div className="flex items-center justify-center mt-2 text-sm text-gray-600">
                  <FaLock className="mr-2" />
                  Secure payment powered by Razorpay
                </div>
              </div>

              {/* Submit Button */}
              <div className="flex gap-4">
                <button
                  type="button"
                  onClick={() => setShowBookingModal(false)}
                  className="flex-1 py-3 px-4 border border-gray-300 text-gray-700 rounded-xl font-semibold hover:bg-gray-50 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={paymentLoading || !bookingData.consentGiven}
                  className={`flex-1 py-3 px-4 rounded-xl font-semibold transition-all flex items-center justify-center gap-2 ${
                    paymentLoading
                      ? 'bg-gray-400 cursor-not-allowed text-gray-700'
                      : 'bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:shadow-lg'
                  }`}
                >
                  {paymentLoading ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                      Processing...
                    </>
                  ) : (
                    <>
                      <FaCreditCard className="text-sm" />
                      Pay ₹{selectedDoctorData.fees} & Book
                    </>
                  )}
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default Doctors;