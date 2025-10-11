// import React, { useContext } from "react";
// import { useNavigate } from "react-router-dom";
// import { AppContext } from "../context/AppContext";
// import { motion } from "framer-motion";
// import {
//   FaCalendarAlt,
//   FaUserMd,
//   FaVideo,
//   FaArrowRight,
//   FaHeart,
//   FaClock,
//   FaShieldAlt,
// } from "react-icons/fa";

// const BookAppointmentCTA = () => {
//   const navigate = useNavigate();
//   const { token } = useContext(AppContext);

//   const handleAssessmentClick = () => {
//     if (!token) {
//       navigate("/login?type=login");
//     } else {
//       navigate("/assessments");
//     }
//   };

//   const features = [
//     {
//       icon: <FaUserMd className="text-2xl" />,
//       title: "Expert Therapists",
//       desc: "Licensed professionals with specialized training",
//     },
//     {
//       icon: <FaVideo className="text-2xl" />,
//       title: "Virtual Sessions",
//       desc: "Secure video consultations from anywhere",
//     },
//     {
//       icon: <FaClock className="text-2xl" />,
//       title: "Flexible Scheduling",
//       desc: "Book sessions at your convenience",
//     },
//     {
//       icon: <FaShieldAlt className="text-2xl" />,
//       title: "100% Confidential",
//       desc: "Your privacy is our top priority",
//     },
//   ];

//   return (
//     <section className="py-20 bg-gradient-to-br from-purple-50 to-indigo-100">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           viewport={{ once: true }}
//           className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-12 relative overflow-hidden shadow-2xl"
//         >
//           {/* Background Elements */}
//           <div className="absolute inset-0 overflow-hidden">
//             <motion.div
//               animate={{
//                 scale: [1, 1.2, 1],
//                 rotate: [0, 180, 360],
//               }}
//               transition={{
//                 duration: 20,
//                 repeat: Infinity,
//                 ease: "linear",
//               }}
//               className="absolute top-10 right-10 w-32 h-32 bg-white/10 rounded-full"
//             />
//             <motion.div
//               animate={{
//                 scale: [1.2, 1, 1.2],
//                 rotate: [360, 180, 0],
//               }}
//               transition={{
//                 duration: 25,
//                 repeat: Infinity,
//                 ease: "linear",
//               }}
//               className="absolute bottom-10 left-10 w-24 h-24 bg-white/10 rounded-full"
//             />
//           </div>

//           <div className="relative z-10">
//             {/* Header */}
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6, delay: 0.2 }}
//               viewport={{ once: true }}
//               className="text-center mb-12"
//             >
//               <motion.div
//                 initial={{ scale: 0.8, opacity: 0 }}
//                 whileInView={{ scale: 1, opacity: 1 }}
//                 transition={{ delay: 0.3, duration: 0.5 }}
//                 viewport={{ once: true }}
//                 className="inline-flex items-center bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full mb-8 border border-white/30"
//               >
//                 <FaHeart className="text-white text-xl mr-3" />
//                 <span className="text-white font-semibold">
//                   Start Your Healing Journey
//                 </span>
//               </motion.div>

//               <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
//                 Ready to Begin Your{" "}
//                 <span className="text-yellow-300">Healing Journey</span>?
//               </h2>

//               <p className="text-xl text-purple-100 max-w-3xl mx-auto leading-relaxed">
//                 Our compassionate team of licensed therapists is here to support
//                 you every step of the way. Take the first step towards better
//                 mental health today.
//               </p>
//             </motion.div>

//             {/* Features Grid */}
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6, delay: 0.4 }}
//               viewport={{ once: true }}
//               className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12"
//             >
//               {features.map((feature, index) => (
//                 <motion.div
//                   key={index}
//                   initial={{ opacity: 0, scale: 0.8 }}
//                   whileInView={{ opacity: 1, scale: 1 }}
//                   transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
//                   viewport={{ once: true }}
//                   whileHover={{ y: -5 }}
//                   className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/20"
//                 >
//                   <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-4 mx-auto">
//                     {feature.icon}
//                   </div>
//                   <h3 className="text-white font-semibold mb-2">
//                     {feature.title}
//                   </h3>
//                   <p className="text-purple-100 text-sm">{feature.desc}</p>
//                 </motion.div>
//               ))}
//             </motion.div>

//             {/* CTA Buttons */}
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6, delay: 0.6 }}
//               viewport={{ once: true }}
//               className="flex flex-col sm:flex-row gap-4 justify-center items-center"
//             >
//               <motion.button
//                 onClick={() => navigate("/doctors")}
//                 whileHover={{
//                   scale: 1.05,
//                   boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.3)",
//                 }}
//                 whileTap={{ scale: 0.95 }}
//                 className="group bg-white text-purple-600 px-8 py-4 rounded-full text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center gap-2"
//               >
//                 <FaCalendarAlt className="group-hover:scale-110 transition-transform" />
//                 Book an Appointment
//                 <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
//               </motion.button>

//               <motion.button
//                 onClick={handleAssessmentClick}
//                 whileHover={{
//                   scale: 1.05,
//                   backgroundColor: "rgba(255, 255, 255, 0.2)",
//                 }}
//                 whileTap={{ scale: 0.95 }}
//                 className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white px-8 py-4 rounded-full text-lg font-semibold border-2 border-white/30 transition-all duration-300 flex items-center gap-2"
//               >
//                 Take Assessment
//                 <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
//               </motion.button>
//             </motion.div>

//             {/* Trust Indicators */}
//             <motion.div
//               initial={{ opacity: 0 }}
//               whileInView={{ opacity: 1 }}
//               transition={{ duration: 0.6, delay: 0.8 }}
//               viewport={{ once: true }}
//               className="mt-12 text-center"
//             >
//               <p className="text-purple-100 text-sm mb-4">
//                 Trusted by 500+ clients • 98% satisfaction rate • 24/7 support
//               </p>
//               <div className="flex justify-center items-center gap-8 text-purple-100">
//                 <div className="flex items-center gap-2">
//                   <FaShieldAlt className="text-green-300" />
//                   <span className="text-sm">HIPAA Compliant</span>
//                 </div>
//                 <div className="flex items-center gap-2">
//                   <FaUserMd className="text-green-300" />
//                   <span className="text-sm">Licensed Therapists</span>
//                 </div>
//                 <div className="flex items-center gap-2">
//                   <FaVideo className="text-green-300" />
//                   <span className="text-sm">Secure Video Calls</span>
//                 </div>
//               </div>
//             </motion.div>
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default BookAppointmentCTA;

// import React, { useContext } from "react";
// import { useNavigate } from "react-router-dom";
// import { AppContext } from "../context/AppContext";
// import { motion } from "framer-motion";
// import axios from "axios";
// import {
//   FaCalendarAlt,
//   FaUserMd,
//   FaVideo,
//   FaArrowRight,
//   FaHeart,
//   FaClock,
//   FaShieldAlt,
// } from "react-icons/fa";

// const BookAppointmentCTA = () => {
//   const navigate = useNavigate();
//   const { token, user } = useContext(AppContext); // make sure user info is in context

//   const handleAssessmentClick = () => {
//     if (!token) {
//       navigate("/login?type=login");
//     } else {
//       navigate("/assessments");
//     }
//   };

//   // Payment function
//   const handlePayment = async () => {
//     if (!token) {
//       alert("Please login to pay!");
//       navigate("/login?type=login");
//       return;
//     }

//     try {
//       // 1️⃣ Call backend to create Razorpay order
//       const { data } = await axios.post(
//         "http://localhost:4000/api/payment/razorpay",
//         {
//           userId: user._id, // your backend can use this to create order
//         }
//       );

//       const order = data.order;

//       // 2️⃣ Razorpay checkout options
//       const options = {
//         key: order.key_id, // get this from backend
//         amount: order.amount,
//         currency: order.currency,
//         name: "Mood Mantra",
//         description: "Appointment Payment",
//         order_id: order.id,
//         handler: async function (response) {
//           // 3️⃣ Verify payment on backend
//           await axios.post(
//             "http://localhost:4000/api/payment/verify",
//             response
//           );
//           alert("Payment Successful! Your appointment is confirmed 🎉");
//         },
//         prefill: {
//           email: user.email,
//           name: user.name,
//         },
//         theme: {
//           color: "#2563EB",
//         },
//       };

//       const rzp = new window.Razorpay(options);
//       rzp.open();
//     } catch (err) {
//       console.error(err);
//       alert("Payment failed. Try again!");
//     }
//   };

//   const features = [
//     {
//       icon: <FaUserMd className="text-2xl" />,
//       title: "Expert Therapists",
//       desc: "Licensed professionals with specialized training",
//     },
//     {
//       icon: <FaVideo className="text-2xl" />,
//       title: "Virtual Sessions",
//       desc: "Secure video consultations from anywhere",
//     },
//     {
//       icon: <FaClock className="text-2xl" />,
//       title: "Flexible Scheduling",
//       desc: "Book sessions at your convenience",
//     },
//     {
//       icon: <FaShieldAlt className="text-2xl" />,
//       title: "100% Confidential",
//       desc: "Your privacy is our top priority",
//     },
//   ];

//   return (
//     <section className="py-20 bg-gradient-to-br from-purple-50 to-indigo-100">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           viewport={{ once: true }}
//           className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-12 relative overflow-hidden shadow-2xl"
//         >
//           {/* Background Elements */}
//           <div className="absolute inset-0 overflow-hidden">
//             <motion.div
//               animate={{
//                 scale: [1, 1.2, 1],
//                 rotate: [0, 180, 360],
//               }}
//               transition={{
//                 duration: 20,
//                 repeat: Infinity,
//                 ease: "linear",
//               }}
//               className="absolute top-10 right-10 w-32 h-32 bg-white/10 rounded-full"
//             />
//             <motion.div
//               animate={{
//                 scale: [1.2, 1, 1.2],
//                 rotate: [360, 180, 0],
//               }}
//               transition={{
//                 duration: 25,
//                 repeat: Infinity,
//                 ease: "linear",
//               }}
//               className="absolute bottom-10 left-10 w-24 h-24 bg-white/10 rounded-full"
//             />
//           </div>

//           <div className="relative z-10">
//             {/* Header */}
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6, delay: 0.2 }}
//               viewport={{ once: true }}
//               className="text-center mb-12"
//             >
//               <motion.div
//                 initial={{ scale: 0.8, opacity: 0 }}
//                 whileInView={{ scale: 1, opacity: 1 }}
//                 transition={{ delay: 0.3, duration: 0.5 }}
//                 viewport={{ once: true }}
//                 className="inline-flex items-center bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full mb-8 border border-white/30"
//               >
//                 <FaHeart className="text-white text-xl mr-3" />
//                 <span className="text-white font-semibold">
//                   Start Your Healing Journey
//                 </span>
//               </motion.div>

//               <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
//                 Ready to Begin Your{" "}
//                 <span className="text-yellow-300">Healing Journey</span>?
//               </h2>

//               <p className="text-xl text-purple-100 max-w-3xl mx-auto leading-relaxed">
//                 Our compassionate team of licensed therapists is here to support
//                 you every step of the way. Take the first step towards better
//                 mental health today.
//               </p>
//             </motion.div>

//             {/* Features Grid */}
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6, delay: 0.4 }}
//               viewport={{ once: true }}
//               className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12"
//             >
//               {features.map((feature, index) => (
//                 <motion.div
//                   key={index}
//                   initial={{ opacity: 0, scale: 0.8 }}
//                   whileInView={{ opacity: 1, scale: 1 }}
//                   transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
//                   viewport={{ once: true }}
//                   whileHover={{ y: -5 }}
//                   className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/20"
//                 >
//                   <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-4 mx-auto">
//                     {feature.icon}
//                   </div>
//                   <h3 className="text-white font-semibold mb-2">
//                     {feature.title}
//                   </h3>
//                   <p className="text-purple-100 text-sm">{feature.desc}</p>
//                 </motion.div>
//               ))}
//             </motion.div>

//             {/* CTA Buttons */}
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6, delay: 0.6 }}
//               viewport={{ once: true }}
//               className="flex flex-col sm:flex-row gap-4 justify-center items-center"
//             >
//               <motion.button
//                 onClick={() => navigate("/doctors")}
//                 whileHover={{
//                   scale: 1.05,
//                   boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.3)",
//                 }}
//                 whileTap={{ scale: 0.95 }}
//                 className="group bg-white text-purple-600 px-8 py-4 rounded-full text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center gap-2"
//               >
//                 <FaCalendarAlt className="group-hover:scale-110 transition-transform" />
//                 Book an Appointment
//                 <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
//               </motion.button>

//               <motion.button
//                 onClick={handleAssessmentClick}
//                 whileHover={{
//                   scale: 1.05,
//                   backgroundColor: "rgba(255, 255, 255, 0.2)",
//                 }}
//                 whileTap={{ scale: 0.95 }}
//                 className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white px-8 py-4 rounded-full text-lg font-semibold border-2 border-white/30 transition-all duration-300 flex items-center gap-2"
//               >
//                 Take Assessment
//                 <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
//               </motion.button>

//               {/* New Pay Now Button */}
//               <motion.button
//                 onClick={handlePayment}
//                 whileHover={{
//                   scale: 1.05,
//                   backgroundColor: "rgba(255, 255, 255, 0.2)",
//                 }}
//                 whileTap={{ scale: 0.95 }}
//                 className="bg-yellow-400 text-purple-700 px-8 py-4 rounded-full text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center gap-2"
//               >
//                 Pay Now
//                 <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
//               </motion.button>
//             </motion.div>

//             {/* Trust Indicators */}
//             <motion.div
//               initial={{ opacity: 0 }}
//               whileInView={{ opacity: 1 }}
//               transition={{ duration: 0.6, delay: 0.8 }}
//               viewport={{ once: true }}
//               className="mt-12 text-center"
//             >
//               <p className="text-purple-100 text-sm mb-4">
//                 Trusted by 500+ clients • 98% satisfaction rate • 24/7 support
//               </p>
//               <div className="flex justify-center items-center gap-8 text-purple-100">
//                 <div className="flex items-center gap-2">
//                   <FaShieldAlt className="text-green-300" />
//                   <span className="text-sm">HIPAA Compliant</span>
//                 </div>
//                 <div className="flex items-center gap-2">
//                   <FaUserMd className="text-green-300" />
//                   <span className="text-sm">Licensed Therapists</span>
//                 </div>
//                 <div className="flex items-center gap-2">
//                   <FaVideo className="text-green-300" />
//                   <span className="text-sm">Secure Video Calls</span>
//                 </div>
//               </div>
//             </motion.div>
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default BookAppointmentCTA;

// import React, { useContext } from "react";
// import { useNavigate } from "react-router-dom";
// import { AppContext } from "../context/AppContext";
// import { motion } from "framer-motion";
// import axios from "axios";
// import {
//   FaCalendarAlt,
//   FaUserMd,
//   FaVideo,
//   FaArrowRight,
//   FaHeart,
//   FaClock,
//   FaShieldAlt,
// } from "react-icons/fa";

// const BookAppointmentCTA = () => {
//   const navigate = useNavigate();
//   const { token, user } = useContext(AppContext); // make sure user info is in context

//   // 🔹 Handle Assessment Click
//   const handleAssessmentClick = () => {
//     if (!token) {
//       navigate("/login?type=login");
//     } else {
//       navigate("/assessments");
//     }
//   };

//   // 🔹 Handle Payment Click
//   const handlePayment = async () => {
//     if (!token) {
//       alert("Please login to pay!");
//       navigate("/login?type=login");
//       return;
//     }

//     try {
//       // 1️⃣ Call backend to create Razorpay order
//       // const { data } = await axios.post(
//       //   "https://mood-mantra-2.onrender.com/api/user/payment-razorpay",
//       //   { userId: user._id }
//       // );
//       const { data } = await axios.post(
//   `${import.meta.env.VITE_BACKEND_URL}/api/user/payment-razorpay`,
//   { userId: user._id },
//   {
//     headers: {
//       Authorization: `Bearer ${token}`,
//     },
//   }
// );
// console.log("User object:", user);
// console.log("Token:", token);

//       const order = data.order;

//       // 2️⃣ Razorpay checkout options
//       const options = {
//         key: order.key_id,
//         amount: order.amount,
//         currency: order.currency,
//         name: "Mood Mantra",
//         description: "Appointment Payment",
//         order_id: order.id,
//         handler: async function (response) {
//           // 3️⃣ Verify payment on backend
//           await axios.post("http://localhost:4000/api/payment/verify", response);
//           alert("Payment Successful! Your appointment is confirmed 🎉");
//         },
//         prefill: {
//           email: user.email,
//           name: user.name,
//         },
//         theme: {
//           color: "#2563EB",
//         },
//       };

//       const rzp = new window.Razorpay(options);
//       rzp.open();
//     } catch (err) {
//       console.error(err);
//       alert("Payment failed. Try again!");
//     }
//   };

//   // 🔹 Feature Cards
//   const features = [
//     {
//       icon: <FaUserMd className="text-2xl" />,
//       title: "Expert Therapists",
//       desc: "Licensed professionals with specialized training",
//     },
//     {
//       icon: <FaVideo className="text-2xl" />,
//       title: "Virtual Sessions",
//       desc: "Secure video consultations from anywhere",
//     },
//     {
//       icon: <FaClock className="text-2xl" />,
//       title: "Flexible Scheduling",
//       desc: "Book sessions at your convenience",
//     },
//     {
//       icon: <FaShieldAlt className="text-2xl" />,
//       title: "100% Confidential",
//       desc: "Your privacy is our top priority",
//     },
//   ];

//   return (
//     <section className="py-20 bg-gradient-to-br from-purple-50 to-indigo-100">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           viewport={{ once: true }}
//           className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-12 relative overflow-hidden shadow-2xl"
//         >
//           {/* Background Elements */}
//           <div className="absolute inset-0 overflow-hidden">
//             <motion.div
//               animate={{ scale: [1, 1.2, 1], rotate: [0, 180, 360] }}
//               transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
//               className="absolute top-10 right-10 w-32 h-32 bg-white/10 rounded-full"
//             />
//             <motion.div
//               animate={{ scale: [1.2, 1, 1.2], rotate: [360, 180, 0] }}
//               transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
//               className="absolute bottom-10 left-10 w-24 h-24 bg-white/10 rounded-full"
//             />
//           </div>

//           <div className="relative z-10">
//             {/* Header */}
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6, delay: 0.2 }}
//               viewport={{ once: true }}
//               className="text-center mb-12"
//             >
//               <motion.div
//                 initial={{ scale: 0.8, opacity: 0 }}
//                 whileInView={{ scale: 1, opacity: 1 }}
//                 transition={{ delay: 0.3, duration: 0.5 }}
//                 viewport={{ once: true }}
//                 className="inline-flex items-center bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full mb-8 border border-white/30"
//               >
//                 <FaHeart className="text-white text-xl mr-3" />
//                 <span className="text-white font-semibold">
//                   Start Your Healing Journey
//                 </span>
//               </motion.div>

//               <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
//                 Ready to Begin Your{" "}
//                 <span className="text-yellow-300">Healing Journey</span>?
//               </h2>

//               <p className="text-xl text-purple-100 max-w-3xl mx-auto leading-relaxed">
//                 Our compassionate team of licensed therapists is here to support
//                 you every step of the way. Take the first step towards better
//                 mental health today.
//               </p>
//             </motion.div>

//             {/* Features Grid */}
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6, delay: 0.4 }}
//               viewport={{ once: true }}
//               className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12"
//             >
//               {features.map((feature, index) => (
//                 <motion.div
//                   key={index}
//                   initial={{ opacity: 0, scale: 0.8 }}
//                   whileInView={{ opacity: 1, scale: 1 }}
//                   transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
//                   viewport={{ once: true }}
//                   whileHover={{ y: -5 }}
//                   className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/20"
//                 >
//                   <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-4 mx-auto">
//                     {feature.icon}
//                   </div>
//                   <h3 className="text-white font-semibold mb-2">{feature.title}</h3>
//                   <p className="text-purple-100 text-sm">{feature.desc}</p>
//                 </motion.div>
//               ))}
//             </motion.div>

//             {/* CTA Buttons */}
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6, delay: 0.6 }}
//               viewport={{ once: true }}
//               className="flex flex-col sm:flex-row gap-4 justify-center items-center"
//             >
//               {/* 🔹 Book Appointment triggers payment */}
//               <motion.button
//                 onClick={handlePayment}
//                 whileHover={{
//                   scale: 1.05,
//                   boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.3)",
//                 }}
//                 whileTap={{ scale: 0.95 }}
//                 className="group bg-white text-purple-600 px-8 py-4 rounded-full text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center gap-2"
//               >
//                 <FaCalendarAlt className="group-hover:scale-110 transition-transform" />
//                 Book an Appointment
//                 <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
//               </motion.button>

//               {/* Take Assessment */}
//               <motion.button
//                 onClick={handleAssessmentClick}
//                 whileHover={{
//                   scale: 1.05,
//                   backgroundColor: "rgba(255, 255, 255, 0.2)",
//                 }}
//                 whileTap={{ scale: 0.95 }}
//                 className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white px-8 py-4 rounded-full text-lg font-semibold border-2 border-white/30 transition-all duration-300 flex items-center gap-2"
//               >
//                 Take Assessment
//                 <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
//               </motion.button>
//             </motion.div>

//             {/* Trust Indicators */}
//             <motion.div
//               initial={{ opacity: 0 }}
//               whileInView={{ opacity: 1 }}
//               transition={{ duration: 0.6, delay: 0.8 }}
//               viewport={{ once: true }}
//               className="mt-12 text-center"
//             >
//               <p className="text-purple-100 text-sm mb-4">
//                 Trusted by 500+ clients • 98% satisfaction rate • 24/7 support
//               </p>
//               <div className="flex justify-center items-center gap-8 text-purple-100">
//                 <div className="flex items-center gap-2">
//                   <FaShieldAlt className="text-green-300" />
//                   <span className="text-sm">HIPAA Compliant</span>
//                 </div>
//                 <div className="flex items-center gap-2">
//                   <FaUserMd className="text-green-300" />
//                   <span className="text-sm">Licensed Therapists</span>
//                 </div>
//                 <div className="flex items-center gap-2">
//                   <FaVideo className="text-green-300" />
//                   <span className="text-sm">Secure Video Calls</span>
//                 </div>
//               </div>
//             </motion.div>
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default BookAppointmentCTA;











// import React, { useContext } from "react";
// import { useNavigate } from "react-router-dom";
// import { AppContext } from "../context/AppContext";
// import { motion } from "framer-motion";
// import axios from "axios";
// import {
//   FaCalendarAlt,
//   FaUserMd,
//   FaVideo,
//   FaArrowRight,
//   FaHeart,
//   FaClock,
//   FaShieldAlt,
// } from "react-icons/fa";

// const BookAppointmentCTA = () => {
//   const navigate = useNavigate();
//   const { token, user } = useContext(AppContext);

//   // 🔹 Handle Assessment Click
//   const handleAssessmentClick = () => {
//     if (!token) {
//       navigate("/login?type=login");
//     } else {
//       navigate("/assessments");
//     }
//   };

//   // 🔹 Handle Book Appointment - Redirect to booking flow
//   const handleBookAppointment = () => {
//     if (!token) {
//       alert("Please login to book an appointment!");
//       navigate("/login?type=login");
//       return;
//     }
    
//     // Redirect to the actual booking page where user selects doctor, slot, etc.
//     navigate("/book-appointment");
//   };

//   // 🔹 Handle Direct Payment (Optional - for quick booking)
//   const handlePayment = async () => {
//     if (!token) {
//       alert("Please login to pay!");
//       navigate("/login?type=login");
//       return;
//     }

//     try {
//       console.log("🔐 Payment - User ID:", user?._id);
//       console.log("🔐 Payment - Token:", token);

//       // Since this is a CTA, we need to create a temporary reservation first
//       // For now, redirect to proper booking flow
//       alert("Please use the booking flow to select a doctor and time slot first.");
//       navigate("/book-appointment");
//       return;

//       // Alternative: If you want direct payment, you'll need to:
//       // 1. First create a temporary reservation
//       // 2. Then proceed with payment
      
//     } catch (err) {
//       console.error("Payment error:", err);
//       console.error("Error details:", err.response?.data);
//       alert("Booking failed. " + (err.response?.data?.message || "Please try the booking flow."));
//     }
//   };

//   // 🔹 Feature Cards
//   const features = [
//     {
//       icon: <FaUserMd className="text-2xl" />,
//       title: "Expert Therapists",
//       desc: "Licensed professionals with specialized training",
//     },
//     {
//       icon: <FaVideo className="text-2xl" />,
//       title: "Virtual Sessions",
//       desc: "Secure video consultations from anywhere",
//     },
//     {
//       icon: <FaClock className="text-2xl" />,
//       title: "Flexible Scheduling",
//       desc: "Book sessions at your convenience",
//     },
//     {
//       icon: <FaShieldAlt className="text-2xl" />,
//       title: "100% Confidential",
//       desc: "Your privacy is our top priority",
//     },
//   ];

//   return (
//     <section className="py-20 bg-gradient-to-br from-purple-50 to-indigo-100">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           viewport={{ once: true }}
//           className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-12 relative overflow-hidden shadow-2xl"
//         >
//           {/* Background Elements */}
//           <div className="absolute inset-0 overflow-hidden">
//             <motion.div
//               animate={{ scale: [1, 1.2, 1], rotate: [0, 180, 360] }}
//               transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
//               className="absolute top-10 right-10 w-32 h-32 bg-white/10 rounded-full"
//             />
//             <motion.div
//               animate={{ scale: [1.2, 1, 1.2], rotate: [360, 180, 0] }}
//               transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
//               className="absolute bottom-10 left-10 w-24 h-24 bg-white/10 rounded-full"
//             />
//           </div>

//           <div className="relative z-10">
//             {/* Header */}
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6, delay: 0.2 }}
//               viewport={{ once: true }}
//               className="text-center mb-12"
//             >
//               <motion.div
//                 initial={{ scale: 0.8, opacity: 0 }}
//                 whileInView={{ scale: 1, opacity: 1 }}
//                 transition={{ delay: 0.3, duration: 0.5 }}
//                 viewport={{ once: true }}
//                 className="inline-flex items-center bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full mb-8 border border-white/30"
//               >
//                 <FaHeart className="text-white text-xl mr-3" />
//                 <span className="text-white font-semibold">
//                   Start Your Healing Journey
//                 </span>
//               </motion.div>

//               <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
//                 Ready to Begin Your{" "}
//                 <span className="text-yellow-300">Healing Journey</span>?
//               </h2>

//               <p className="text-xl text-purple-100 max-w-3xl mx-auto leading-relaxed">
//                 Our compassionate team of licensed therapists is here to support
//                 you every step of the way. Take the first step towards better
//                 mental health today.
//               </p>
//             </motion.div>

//             {/* Features Grid */}
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6, delay: 0.4 }}
//               viewport={{ once: true }}
//               className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12"
//             >
//               {features.map((feature, index) => (
//                 <motion.div
//                   key={index}
//                   initial={{ opacity: 0, scale: 0.8 }}
//                   whileInView={{ opacity: 1, scale: 1 }}
//                   transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
//                   viewport={{ once: true }}
//                   whileHover={{ y: -5 }}
//                   className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/20"
//                 >
//                   <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-4 mx-auto">
//                     {feature.icon}
//                   </div>
//                   <h3 className="text-white font-semibold mb-2">{feature.title}</h3>
//                   <p className="text-purple-100 text-sm">{feature.desc}</p>
//                 </motion.div>
//               ))}
//             </motion.div>

//             {/* CTA Buttons */}
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6, delay: 0.6 }}
//               viewport={{ once: true }}
//               className="flex flex-col sm:flex-row gap-4 justify-center items-center"
//             >
//               {/* 🔹 Book Appointment - Redirect to booking flow */}
//               <motion.button
//                 onClick={handleBookAppointment}
//                 whileHover={{
//                   scale: 1.05,
//                   boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.3)",
//                 }}
//                 whileTap={{ scale: 0.95 }}
//                 className="group bg-white text-purple-600 px-8 py-4 rounded-full text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center gap-2"
//               >
//                 <FaCalendarAlt className="group-hover:scale-110 transition-transform" />
//                 Book an Appointment
//                 <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
//               </motion.button>

//               {/* Take Assessment */}
//               <motion.button
//                 onClick={handleAssessmentClick}
//                 whileHover={{
//                   scale: 1.05,
//                   backgroundColor: "rgba(255, 255, 255, 0.2)",
//                 }}
//                 whileTap={{ scale: 0.95 }}
//                 className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white px-8 py-4 rounded-full text-lg font-semibold border-2 border-white/30 transition-all duration-300 flex items-center gap-2"
//               >
//                 Take Assessment
//                 <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
//               </motion.button>
//             </motion.div>

//             {/* Trust Indicators */}
//             <motion.div
//               initial={{ opacity: 0 }}
//               whileInView={{ opacity: 1 }}
//               transition={{ duration: 0.6, delay: 0.8 }}
//               viewport={{ once: true }}
//               className="mt-12 text-center"
//             >
//               <p className="text-purple-100 text-sm mb-4">
//                 Trusted by 500+ clients • 98% satisfaction rate • 24/7 support
//               </p>
//               <div className="flex justify-center items-center gap-8 text-purple-100">
//                 <div className="flex items-center gap-2">
//                   <FaShieldAlt className="text-green-300" />
//                   <span className="text-sm">HIPAA Compliant</span>
//                 </div>
//                 <div className="flex items-center gap-2">
//                   <FaUserMd className="text-green-300" />
//                   <span className="text-sm">Licensed Therapists</span>
//                 </div>
//                 <div className="flex items-center gap-2">
//                   <FaVideo className="text-green-300" />
//                   <span className="text-sm">Secure Video Calls</span>
//                 </div>
//               </div>
//             </motion.div>
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default BookAppointmentCTA;





























































































// import React, { useContext, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { AppContext } from "../context/AppContext";
// import { motion } from "framer-motion";
// import axios from "axios";
// import {
//   FaCalendarAlt,
//   FaUserMd,
//   FaVideo,
//   FaArrowRight,
//   FaHeart,
//   FaClock,
//   FaShieldAlt,
// } from "react-icons/fa";

// const BookAppointmentCTA = () => {
//   const navigate = useNavigate();
//   const { token, user } = useContext(AppContext);
//   const [loading, setLoading] = useState(false);
//   const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

//   // 🔹 Handle Assessment Click
//   const handleAssessmentClick = () => {
//     if (!token) {
//       navigate("/login?type=login");
//     } else {
//       navigate("/assessments");
//     }
//   };

//   // 🔹 Handle Payment Click
//   const handlePayment = async () => {
//     if (!token) {
//       alert("Please login to pay!");
//       navigate("/login?type=login");
//       return;
//     }

//     try {
//       setLoading(true);

//       // 1️⃣ Call backend to create Razorpay order
//       const { data } = await axios.post(
//         `${BACKEND_URL}/api/user/payment-razorpay`,
//         {}, // empty body
//         { headers: { Authorization: `Bearer ${token}` } }
//       );

//       const order = data.order;

//       // 2️⃣ Razorpay checkout options
//       const options = {
//         key: order.key_id,
//         amount: order.amount,
//         currency: order.currency,
//         name: "Mood Mantra",
//         description: "Appointment Payment",
//         order_id: order.id,
//         handler: async function (response) {
//           try {
//             // 3️⃣ Verify payment on backend
//             await axios.post(
//               `${BACKEND_URL}/api/payment/verify`,
//               response,
//               { headers: { Authorization: `Bearer ${token}` } }
//             );
//             alert("Payment Successful! Your appointment is confirmed 🎉");
//           } catch (verifyErr) {
//             console.error("Verification Error:", verifyErr.response?.data || verifyErr.message);
//             alert(
//               "Payment verification failed: " +
//                 (verifyErr.response?.data?.message || verifyErr.message)
//             );
//           }
//         },
//         prefill: {
//           email: user.email,
//           name: user.name,
//         },
//         theme: {
//           color: "#2563EB",
//         },
//       };

//       const rzp = new window.Razorpay(options);
//       rzp.open();
//     } catch (err) {
//       console.error("Payment Error:", err.response?.data || err.message);
//       alert(
//         "Payment failed: " + (err.response?.data?.message || err.message)
//       );
//     } finally {
//       setLoading(false);
//     }
//   };

//   // 🔹 Feature Cards
//   const features = [
//     {
//       icon: <FaUserMd className="text-2xl" />,
//       title: "Expert Therapists",
//       desc: "Licensed professionals with specialized training",
//     },
//     {
//       icon: <FaVideo className="text-2xl" />,
//       title: "Virtual Sessions",
//       desc: "Secure video consultations from anywhere",
//     },
//     {
//       icon: <FaClock className="text-2xl" />,
//       title: "Flexible Scheduling",
//       desc: "Book sessions at your convenience",
//     },
//     {
//       icon: <FaShieldAlt className="text-2xl" />,
//       title: "100% Confidential",
//       desc: "Your privacy is our top priority",
//     },
//   ];

//   return (
//     <section className="py-20 bg-gradient-to-br from-purple-50 to-indigo-100">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           viewport={{ once: true }}
//           className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-12 relative overflow-hidden shadow-2xl"
//         >
//           {/* Background Elements */}
//           <div className="absolute inset-0 overflow-hidden">
//             <motion.div
//               animate={{ scale: [1, 1.2, 1], rotate: [0, 180, 360] }}
//               transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
//               className="absolute top-10 right-10 w-32 h-32 bg-white/10 rounded-full"
//             />
//             <motion.div
//               animate={{ scale: [1.2, 1, 1.2], rotate: [360, 180, 0] }}
//               transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
//               className="absolute bottom-10 left-10 w-24 h-24 bg-white/10 rounded-full"
//             />
//           </div>

//           <div className="relative z-10">
//             {/* Header */}
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6, delay: 0.2 }}
//               viewport={{ once: true }}
//               className="text-center mb-12"
//             >
//               <motion.div
//                 initial={{ scale: 0.8, opacity: 0 }}
//                 whileInView={{ scale: 1, opacity: 1 }}
//                 transition={{ delay: 0.3, duration: 0.5 }}
//                 viewport={{ once: true }}
//                 className="inline-flex items-center bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full mb-8 border border-white/30"
//               >
//                 <FaHeart className="text-white text-xl mr-3" />
//                 <span className="text-white font-semibold">
//                   Start Your Healing Journey
//                 </span>
//               </motion.div>

//               <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
//                 Ready to Begin Your{" "}
//                 <span className="text-yellow-300">Healing Journey</span>?
//               </h2>

//               <p className="text-xl text-purple-100 max-w-3xl mx-auto leading-relaxed">
//                 Our compassionate team of licensed therapists is here to support
//                 you every step of the way. Take the first step towards better
//                 mental health today.
//               </p>
//             </motion.div>

//             {/* Features Grid */}
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6, delay: 0.4 }}
//               viewport={{ once: true }}
//               className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12"
//             >
//               {features.map((feature, index) => (
//                 <motion.div
//                   key={index}
//                   initial={{ opacity: 0, scale: 0.8 }}
//                   whileInView={{ opacity: 1, scale: 1 }}
//                   transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
//                   viewport={{ once: true }}
//                   whileHover={{ y: -5 }}
//                   className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/20"
//                 >
//                   <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-4 mx-auto">
//                     {feature.icon}
//                   </div>
//                   <h3 className="text-white font-semibold mb-2">{feature.title}</h3>
//                   <p className="text-purple-100 text-sm">{feature.desc}</p>
//                 </motion.div>
//               ))}
//             </motion.div>

//             {/* CTA Buttons */}
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6, delay: 0.6 }}
//               viewport={{ once: true }}
//               className="flex flex-col sm:flex-row gap-4 justify-center items-center"
//             >
//               {/* 🔹 Book Appointment triggers payment */}
//               <motion.button
//                 onClick={handlePayment}
//                 disabled={loading}
//                 whileHover={{
//                   scale: 1.05,
//                   boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.3)",
//                 }}
//                 whileTap={{ scale: 0.95 }}
//                 className={`group bg-white text-purple-600 px-8 py-4 rounded-full text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center gap-2 ${
//                   loading ? "opacity-50 cursor-not-allowed" : ""
//                 }`}
//               >
//                 <FaCalendarAlt className="group-hover:scale-110 transition-transform" />
//                 {loading ? "Processing..." : "Book an Appointment"}
//                 <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
//               </motion.button>

//               {/* Take Assessment */}
//               <motion.button
//                 onClick={handleAssessmentClick}
//                 whileHover={{
//                   scale: 1.05,
//                   backgroundColor: "rgba(255, 255, 255, 0.2)",
//                 }}
//                 whileTap={{ scale: 0.95 }}
//                 className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white px-8 py-4 rounded-full text-lg font-semibold border-2 border-white/30 transition-all duration-300 flex items-center gap-2"
//               >
//                 Take Assessment
//                 <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
//               </motion.button>
//             </motion.div>

//             {/* Trust Indicators */}
//             <motion.div
//               initial={{ opacity: 0 }}
//               whileInView={{ opacity: 1 }}
//               transition={{ duration: 0.6, delay: 0.8 }}
//               viewport={{ once: true }}
//               className="mt-12 text-center"
//             >
//               <p className="text-purple-100 text-sm mb-4">
//                 Trusted by 500+ clients • 98% satisfaction rate • 24/7 support
//               </p>
//               <div className="flex justify-center items-center gap-8 text-purple-100">
//                 <div className="flex items-center gap-2">
//                   <FaShieldAlt className="text-green-300" />
//                   <span className="text-sm">HIPAA Compliant</span>
//                 </div>
//                 <div className="flex items-center gap-2">
//                   <FaUserMd className="text-green-300" />
//                   <span className="text-sm">Licensed Therapists</span>
//                 </div>
//                 <div className="flex items-center gap-2">
//                   <FaVideo className="text-green-300" />
//                   <span className="text-sm">Secure Video Calls</span>
//                 </div>
//               </div>
//             </motion.div>
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default BookAppointmentCTA;























// import React, { useContext, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { AppContext } from "../context/AppContext";
// import { motion } from "framer-motion";
// import axios from "axios";
// import {
//   FaCalendarAlt,
//   FaUserMd,
//   FaVideo,
//   FaArrowRight,
//   FaHeart,
//   FaClock,
//   FaShieldAlt,
// } from "react-icons/fa";

// const BookAppointmentCTA = () => {
//   const navigate = useNavigate();
//   const { token, user } = useContext(AppContext);
//   const [loading, setLoading] = useState(false);
//   const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

//   // 🔹 Handle Assessment Click
//   const handleAssessmentClick = () => {
//     if (!token) {
//       navigate("/login?type=login");
//     } else {
//       navigate("/assessments");
//     }
//   };

//   // 🔹 Handle Payment & Appointment Booking
//   const handlePayment = async () => {
//     if (!token) {
//       alert("Please login to pay!");
//       navigate("/login?type=login");
//       return;
//     }

//     const reasonForVisit = prompt("Enter reason for visit:");
//     const sessionType = prompt("Enter session type (Online/Offline):");
//     const communicationMethod =
//       sessionType === "Online" ? prompt("Enter communication method (Zoom/Meet/Teams):") : "";
//     const briefNotes = prompt("Any brief notes?") || "";
//     const emergencyContact = prompt("Emergency contact?") || "";
//     const consentGiven = confirm("Do you give consent?");

//     if (!reasonForVisit || !sessionType || !consentGiven) {
//       alert("Please fill all required fields and give consent!");
//       return;
//     }

//     try {
//       setLoading(true);
//       const docId = "64f2c9a4b1234567890abcd";

//       // 1️⃣ Book temporary appointment
//       const bookRes = await axios.post(
//         `${BACKEND_URL}/api/user/book-appointment`,
//         {
//           docId,
//           reasonForVisit,
//           sessionType,
//           communicationMethod,
//           briefNotes,
//           emergencyContact,
//           consentGiven,
//         },
//         { headers: { Authorization: `Bearer ${token}` } }
//       );

//       const tempReservationId = bookRes.data.tempReservationId;
//       if (!tempReservationId) {
//         alert("Failed to book appointment!");
//         setLoading(false);
//         return;
//       }

//       // 2️⃣ Create Razorpay order
//       const { data } = await axios.post(
//         `${BACKEND_URL}/api/user/payment-razorpay`,
//         { tempReservationId },
//         { headers: { Authorization: `Bearer ${token}` } }
//       );

//       const order = data.order;

//       // 3️⃣ Razorpay checkout options
//       const options = {
//         key: order.key_id,
//         amount: order.amount,
//         currency: order.currency,
//         name: "Mood Mantra",
//         description: "Appointment Payment",
//         order_id: order.id,
//         handler: async function (response) {
//           try {
//             // Verify payment
//             await axios.post(
//               `${BACKEND_URL}/api/user/verify-razorpay`,
//               {
//                 razorpay_order_id: response.razorpay_order_id,
//                 razorpay_payment_id: response.razorpay_payment_id,
//               },
//               { headers: { Authorization: `Bearer ${token}` } }
//             );
//             alert("Payment Successful! Your appointment is confirmed 🎉");
//           } catch (verifyErr) {
//             console.error(
//               "Verification Error:",
//               verifyErr.response?.data || verifyErr.message
//             );
//             alert(
//               "Payment verification failed: " +
//                 (verifyErr.response?.data?.message || verifyErr.message)
//             );
//           }
//         },
//         prefill: {
//           email: user.email,
//           name: user.name,
//         },
//         theme: {
//           color: "#2563EB",
//         },
//       };

//       const rzp = new window.Razorpay(options);
//       rzp.open();
//     } catch (err) {
//       console.error("Payment Error:", err.response?.data || err.message);
//       alert("Payment failed: " + (err.response?.data?.message || err.message));
//     } finally {
//       setLoading(false);
//     }
//   };

//   // 🔹 Feature Cards
//   const features = [
//     {
//       icon: <FaUserMd className="text-2xl" />,
//       title: "Expert Therapists",
//       desc: "Licensed professionals with specialized training",
//     },
//     {
//       icon: <FaVideo className="text-2xl" />,
//       title: "Virtual Sessions",
//       desc: "Secure video consultations from anywhere",
//     },
//     {
//       icon: <FaClock className="text-2xl" />,
//       title: "Flexible Scheduling",
//       desc: "Book sessions at your convenience",
//     },
//     {
//       icon: <FaShieldAlt className="text-2xl" />,
//       title: "100% Confidential",
//       desc: "Your privacy is our top priority",
//     },
//   ];

//   return (
//     <section className="py-20 bg-gradient-to-br from-purple-50 to-indigo-100">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           viewport={{ once: true }}
//           className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-12 relative overflow-hidden shadow-2xl"
//         >
//           {/* Background Elements */}
//           <div className="absolute inset-0 overflow-hidden">
//             <motion.div
//               animate={{ scale: [1, 1.2, 1], rotate: [0, 180, 360] }}
//               transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
//               className="absolute top-10 right-10 w-32 h-32 bg-white/10 rounded-full"
//             />
//             <motion.div
//               animate={{ scale: [1.2, 1, 1.2], rotate: [360, 180, 0] }}
//               transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
//               className="absolute bottom-10 left-10 w-24 h-24 bg-white/10 rounded-full"
//             />
//           </div>

//           <div className="relative z-10">
//             {/* Header */}
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6, delay: 0.2 }}
//               viewport={{ once: true }}
//               className="text-center mb-12"
//             >
//               <motion.div
//                 initial={{ scale: 0.8, opacity: 0 }}
//                 whileInView={{ scale: 1, opacity: 1 }}
//                 transition={{ delay: 0.3, duration: 0.5 }}
//                 viewport={{ once: true }}
//                 className="inline-flex items-center bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full mb-8 border border-white/30"
//               >
//                 <FaHeart className="text-white text-xl mr-3" />
//                 <span className="text-white font-semibold">
//                   Start Your Healing Journey
//                 </span>
//               </motion.div>

//               <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
//                 Ready to Begin Your{" "}
//                 <span className="text-yellow-300">Healing Journey</span>?
//               </h2>

//               <p className="text-xl text-purple-100 max-w-3xl mx-auto leading-relaxed">
//                 Our compassionate team of licensed therapists is here to support
//                 you every step of the way. Take the first step towards better
//                 mental health today.
//               </p>
//             </motion.div>

//             {/* Features Grid */}
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6, delay: 0.4 }}
//               viewport={{ once: true }}
//               className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12"
//             >
//               {features.map((feature, index) => (
//                 <motion.div
//                   key={index}
//                   initial={{ opacity: 0, scale: 0.8 }}
//                   whileInView={{ opacity: 1, scale: 1 }}
//                   transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
//                   viewport={{ once: true }}
//                   whileHover={{ y: -5 }}
//                   className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/20"
//                 >
//                   <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-4 mx-auto">
//                     {feature.icon}
//                   </div>
//                   <h3 className="text-white font-semibold mb-2">{feature.title}</h3>
//                   <p className="text-purple-100 text-sm">{feature.desc}</p>
//                 </motion.div>
//               ))}
//             </motion.div>

//             {/* CTA Buttons */}
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6, delay: 0.6 }}
//               viewport={{ once: true }}
//               className="flex flex-col sm:flex-row gap-4 justify-center items-center"
//             >
//               {/* 🔹 Book Appointment triggers payment */}
//               <motion.button
//                 onClick={handlePayment}
//                 disabled={loading}
//                 whileHover={{
//                   scale: 1.05,
//                   boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.3)",
//                 }}
//                 whileTap={{ scale: 0.95 }}
//                 className={`group bg-white text-purple-600 px-8 py-4 rounded-full text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center gap-2 ${
//                   loading ? "opacity-50 cursor-not-allowed" : ""
//                 }`}
//               >
//                 <FaCalendarAlt className="group-hover:scale-110 transition-transform" />
//                 {loading ? "Processing..." : "Book an Appointment"}
//                 <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
//               </motion.button>

//               {/* Take Assessment */}
//               <motion.button
//                 onClick={handleAssessmentClick}
//                 whileHover={{
//                   scale: 1.05,
//                   backgroundColor: "rgba(255, 255, 255, 0.2)",
//                 }}
//                 whileTap={{ scale: 0.95 }}
//                 className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white px-8 py-4 rounded-full text-lg font-semibold border-2 border-white/30 transition-all duration-300 flex items-center gap-2"
//               >
//                 Take Assessment
//                 <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
//               </motion.button>
//             </motion.div>

//             {/* Trust Indicators */}
//             <motion.div
//               initial={{ opacity: 0 }}
//               whileInView={{ opacity: 1 }}
//               transition={{ duration: 0.6, delay: 0.8 }}
//               viewport={{ once: true }}
//               className="mt-12 text-center"
//             >
//               <p className="text-purple-100 text-sm mb-4">
//                 Trusted by 500+ clients • 98% satisfaction rate • 24/7 support
//               </p>
//               <div className="flex justify-center items-center gap-8 text-purple-100">
//                 <div className="flex items-center gap-2">
//                   <FaShieldAlt className="text-green-300" />
//                   <span className="text-sm">HIPAA Compliant</span>
//                 </div>
//                 <div className="flex items-center gap-2">
//                   <FaUserMd className="text-green-300" />
//                   <span className="text-sm">Licensed Therapists</span>
//                 </div>
//                 <div className="flex items-center gap-2">
//                   <FaVideo className="text-green-300" />
//                   <span className="text-sm">Secure Video Calls</span>
//                 </div>
//               </div>
//             </motion.div>
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default BookAppointmentCTA;














































































// import React, { useContext, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { AppContext } from "../context/AppContext";
// import { motion } from "framer-motion";
// import axios from "axios";
// import {
//   FaCalendarAlt,
//   FaUserMd,
//   FaVideo,
//   FaArrowRight,
//   FaHeart,
//   FaClock,
//   FaShieldAlt,
// } from "react-icons/fa";

// const BookAppointmentCTA = () => {
//   const navigate = useNavigate();
//   const { token, user } = useContext(AppContext);
//   const [loading, setLoading] = useState(false);
//   const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

//   // 🔹 Handle Assessment Click
//   const handleAssessmentClick = () => {
//     if (!token) {
//       navigate("/login?type=login");
//     } else {
//       navigate("/assessments");
//     }
//   };

//   // 🔹 Handle Payment Only
//   const handlePayment = async () => {
//     if (!token) {
//       alert("Please login to pay!");
//       navigate("/login?type=login");
//       return;
//     }

//     try {
//       setLoading(true);

//       // 🔹 Create Razorpay order from backend
//       const { data } = await axios.post(
//         `${BACKEND_URL}/api/user/payment-razorpay`,
//         {}, // no extra fields
//         { headers: { Authorization: `Bearer ${token}` } }
//       );

//       const order = data.order;

//       // 🔹 Razorpay checkout
//       const options = {
//         key: order.key_id,
//         amount: order.amount,
//         currency: order.currency,
//         name: "Mood Mantra",
//         description: "Appointment Payment",
//         order_id: order.id,
//         handler: async function (response) {
//           try {
//             // 🔹 Verify payment on backend
//             await axios.post(
//               `${BACKEND_URL}/api/user/verify-razorpay`,
//               {
//                 razorpay_order_id: response.razorpay_order_id,
//                 razorpay_payment_id: response.razorpay_payment_id,
//               },
//               { headers: { Authorization: `Bearer ${token}` } }
//             );
//             alert("Payment Successful! 🎉");
//           } catch (err) {
//             console.error("Verification Error:", err.response?.data || err.message);
//             alert("Payment verification failed!");
//           }
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
//       console.error("Payment Error:", err.response?.data || err.message);
//       alert("Payment failed!");
//     } finally {
//       setLoading(false);
//     }
//   };

//   // 🔹 Feature Cards
//   const features = [
//     { icon: <FaUserMd className="text-2xl" />, title: "Expert Therapists", desc: "Licensed professionals with specialized training" },
//     { icon: <FaVideo className="text-2xl" />, title: "Virtual Sessions", desc: "Secure video consultations from anywhere" },
//     { icon: <FaClock className="text-2xl" />, title: "Flexible Scheduling", desc: "Book sessions at your convenience" },
//     { icon: <FaShieldAlt className="text-2xl" />, title: "100% Confidential", desc: "Your privacy is our top priority" },
//   ];

//   return (
//     <section className="py-20 bg-gradient-to-br from-purple-50 to-indigo-100">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           viewport={{ once: true }}
//           className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-12 relative overflow-hidden shadow-2xl"
//         >
//           {/* Background Elements */}
//           <div className="absolute inset-0 overflow-hidden">
//             <motion.div
//               animate={{ scale: [1, 1.2, 1], rotate: [0, 180, 360] }}
//               transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
//               className="absolute top-10 right-10 w-32 h-32 bg-white/10 rounded-full"
//             />
//             <motion.div
//               animate={{ scale: [1.2, 1, 1.2], rotate: [360, 180, 0] }}
//               transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
//               className="absolute bottom-10 left-10 w-24 h-24 bg-white/10 rounded-full"
//             />
//           </div>

//           <div className="relative z-10">
//             {/* Header */}
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6, delay: 0.2 }}
//               viewport={{ once: true }}
//               className="text-center mb-12"
//             >
//               <motion.div
//                 initial={{ scale: 0.8, opacity: 0 }}
//                 whileInView={{ scale: 1, opacity: 1 }}
//                 transition={{ delay: 0.3, duration: 0.5 }}
//                 viewport={{ once: true }}
//                 className="inline-flex items-center bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full mb-8 border border-white/30"
//               >
//                 <FaHeart className="text-white text-xl mr-3" />
//                 <span className="text-white font-semibold">Start Your Healing Journey</span>
//               </motion.div>

//               <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
//                 Ready to Begin Your <span className="text-yellow-300">Healing Journey</span>?
//               </h2>

//               <p className="text-xl text-purple-100 max-w-3xl mx-auto leading-relaxed">
//                 Our compassionate team of licensed therapists is here to support you every step of the way.
//               </p>
//             </motion.div>

//             {/* Features Grid */}
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6, delay: 0.4 }}
//               viewport={{ once: true }}
//               className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12"
//             >
//               {features.map((feature, index) => (
//                 <motion.div
//                   key={index}
//                   initial={{ opacity: 0, scale: 0.8 }}
//                   whileInView={{ opacity: 1, scale: 1 }}
//                   transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
//                   viewport={{ once: true }}
//                   whileHover={{ y: -5 }}
//                   className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/20"
//                 >
//                   <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-4 mx-auto">
//                     {feature.icon}
//                   </div>
//                   <h3 className="text-white font-semibold mb-2">{feature.title}</h3>
//                   <p className="text-purple-100 text-sm">{feature.desc}</p>
//                 </motion.div>
//               ))}
//             </motion.div>

//             {/* CTA Buttons */}
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6, delay: 0.6 }}
//               viewport={{ once: true }}
//               className="flex flex-col sm:flex-row gap-4 justify-center items-center"
//             >
//               {/* Book Appointment */}
//               <motion.button
//                 onClick={handlePayment}
//                 disabled={loading}
//                 whileHover={{ scale: 1.05, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.3)" }}
//                 whileTap={{ scale: 0.95 }}
//                 className={`group bg-white text-purple-600 px-8 py-4 rounded-full text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center gap-2 ${
//                   loading ? "opacity-50 cursor-not-allowed" : ""
//                 }`}
//               >
//                 <FaCalendarAlt className="group-hover:scale-110 transition-transform" />
//                 {loading ? "Processing..." : "Book an Appointment"}
//                 <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
//               </motion.button>

//               {/* Take Assessment */}
//               <motion.button
//                 onClick={handleAssessmentClick}
//                 whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 255, 255, 0.2)" }}
//                 whileTap={{ scale: 0.95 }}
//                 className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white px-8 py-4 rounded-full text-lg font-semibold border-2 border-white/30 transition-all duration-300 flex items-center gap-2"
//               >
//                 Take Assessment
//                 <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
//               </motion.button>
//             </motion.div>

//             {/* Trust Indicators */}
//             <motion.div
//               initial={{ opacity: 0 }}
//               whileInView={{ opacity: 1 }}
//               transition={{ duration: 0.6, delay: 0.8 }}
//               viewport={{ once: true }}
//               className="mt-12 text-center"
//             >
//               <p className="text-purple-100 text-sm mb-4">
//                 Trusted by 500+ clients • 98% satisfaction rate • 24/7 support
//               </p>
//               <div className="flex justify-center items-center gap-8 text-purple-100">
//                 <div className="flex items-center gap-2">
//                   <FaShieldAlt className="text-green-300" />
//                   <span className="text-sm">HIPAA Compliant</span>
//                 </div>
//                 <div className="flex items-center gap-2">
//                   <FaUserMd className="text-green-300" />
//                   <span className="text-sm">Licensed Therapists</span>
//                 </div>
//                 <div className="flex items-center gap-2">
//                   <FaVideo className="text-green-300" />
//                   <span className="text-sm">Secure Video Calls</span>
//                 </div>
//               </div>
//             </motion.div>
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default BookAppointmentCTA;


























































// import React, { useContext, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { AppContext } from "../context/AppContext";
// import { motion } from "framer-motion";
// import axios from "axios";
// import { toast } from "react-toastify";
// import {
//   FaCalendarAlt,
//   FaUserMd,
//   FaVideo,
//   FaArrowRight,
//   FaHeart,
//   FaClock,
//   FaShieldAlt,
//   FaTimes,
// } from "react-icons/fa";

// const BookAppointmentCTA = () => {
//   const navigate = useNavigate();
//   const { token, userData, backendUrl } = useContext(AppContext);
//   const [loading, setLoading] = useState(false);
//   const [showBookingModal, setShowBookingModal] = useState(false);
  
//   // Booking form state
//   const [bookingData, setBookingData] = useState({
//     slotDate: '',
//     slotTime: '',
//     reasonForVisit: '',
//     sessionType: 'Online',
//     communicationMethod: 'Video Call',
//     briefNotes: '',
//     emergencyContact: '',
//     consentGiven: false
//   });

//   // Mock doctor for quick booking (you can make this dynamic later)
//   const defaultDoctor = {
//     _id: "1", // This should match one of your mock doctors
//     name: "Dr. Anjali Sharma",
//     fees: 700
//   };

//   // Generate available time slots
//   const generateTimeSlots = () => {
//     const slots = [];
//     for (let hour = 9; hour <= 17; hour++) {
//       slots.push(`${hour.toString().padStart(2, '0')}:00`);
//       if (hour !== 17) {
//         slots.push(`${hour.toString().padStart(2, '0')}:30`);
//       }
//     }
//     return slots;
//   };

//   // Generate next 30 days (excluding Sundays)
//   const generateAvailableDates = () => {
//     const dates = [];
//     const today = new Date();
//     let daysAdded = 0;
//     let dayOffset = 1;
    
//     while (daysAdded < 30) {
//       const date = new Date(today);
//       date.setDate(today.getDate() + dayOffset);
      
//       // Skip Sundays (0 = Sunday)
//       if (date.getDay() !== 0) {
//         dates.push({
//           value: date.toISOString().split('T')[0],
//           label: date.toLocaleDateString('en-IN', { 
//             weekday: 'short', 
//             month: 'short', 
//             day: 'numeric' 
//           })
//         });
//         daysAdded++;
//       }
//       dayOffset++;
//     }
//     return dates;
//   };

//   const timeSlots = generateTimeSlots();
//   const availableDates = generateAvailableDates();

//   // Handle Assessment Click
//   const handleAssessmentClick = () => {
//     if (!token) {
//       navigate("/login?type=login");
//     } else {
//       navigate("/assessments");
//     }
//   };

//   // Handle Quick Book (opens modal)
//   const handleQuickBook = () => {
//     if (!token) {
//       const loginConfirm = window.confirm(
//         "You need to login to book an appointment. Would you like to login now?"
//       );
//       if (loginConfirm) {
//         navigate("/login");
//       }
//       return;
//     }

//     if (!userData || !userData._id) {
//       toast.error("Please wait for your profile to load completely, then try again.");
//       return;
//     }

//     setShowBookingModal(true);
//     // Reset form
//     setBookingData({
//       slotDate: '',
//       slotTime: '',
//       reasonForVisit: '',
//       sessionType: 'Online',
//       communicationMethod: 'Video Call',
//       briefNotes: '',
//       emergencyContact: '',
//       consentGiven: false
//     });
//   };

//   // Handle Complete Booking with Payment
//   const handleCompleteBooking = async (e) => {
//     e.preventDefault();
    
//     // Validate required fields
//     if (!bookingData.slotDate || !bookingData.slotTime || !bookingData.reasonForVisit) {
//       toast.error("Please fill all required fields!");
//       return;
//     }

//     if (!bookingData.consentGiven) {
//       toast.error("Please give your consent to proceed with the booking.");
//       return;
//     }

//     setLoading(true);

//     try {
//       // Step 1: Create booking (temporary reservation)
//       console.log("Creating booking with data:", {
//         docId: defaultDoctor._id,
//         ...bookingData
//       });

//       const bookingResponse = await axios.post(
//         `${backendUrl}/api/user/book-appointment`,
//         {
//           docId: defaultDoctor._id,
//           ...bookingData
//         },
//         {
//           headers: {
//             token: token,
//             "Content-Type": "application/json",
//           }
//         }
//       );

//       console.log("Booking response:", bookingResponse.data);

//       if (bookingResponse.data.success) {
//         const tempReservationId = bookingResponse.data.tempReservationId;
        
//         // Step 2: Create payment order
//         console.log("Creating payment with tempReservationId:", tempReservationId);

//         const paymentResponse = await axios.post(
//           `${backendUrl}/api/user/payment-razorpay`,
//           {
//             tempReservationId: tempReservationId
//           },
//           {
//             headers: {
//               token: token,
//               "Content-Type": "application/json",
//             }
//           }
//         );

//         console.log("Payment response:", paymentResponse.data);

//         if (paymentResponse.data.success) {
//           const order = paymentResponse.data.order;

//           // Step 3: Initialize Razorpay payment
//           const options = {
//             key: order.key_id,
//             amount: order.amount,
//             currency: order.currency,
//             name: "Mood Mantra",
//             description: `Consultation with ${defaultDoctor.name}`,
//             order_id: order.id,
//             handler: async function (response) {
//               try {
//                 // Step 4: Verify payment
//                 const verifyResponse = await axios.post(
//                   `${backendUrl}/api/user/verify-razorpay`,
//                   {
//                     razorpay_order_id: response.razorpay_order_id,
//                     razorpay_payment_id: response.razorpay_payment_id,
//                     razorpay_signature: response.razorpay_signature,
//                   },
//                   {
//                     headers: {
//                       token: token,
//                       "Content-Type": "application/json",
//                     }
//                   }
//                 );

//                 if (verifyResponse.data.success) {
//                   toast.success("🎉 Payment Successful! Your appointment has been confirmed.");
//                   setShowBookingModal(false);
//                   navigate("/my-appointments");
//                 } else {
//                   toast.error("Payment verification failed. Please contact support.");
//                 }
//               } catch (verifyError) {
//                 console.error("Payment verification error:", verifyError);
//                 toast.error("Payment completed but verification failed. Please contact support with your payment ID: " + response.razorpay_payment_id);
//               }
//             },
//             prefill: {
//               name: userData.name || "",
//               email: userData.email || "",
//               contact: userData.phone || "",
//             },
//             theme: {
//               color: "#7C3AED",
//             },
//             modal: {
//               ondismiss: function () {
//                 setLoading(false);
//                 // Cancel the reservation when payment modal is closed
//                 axios.post(
//                   `${backendUrl}/api/user/cancel-payment`,
//                   { tempReservationId },
//                   { headers: { token } }
//                 ).catch(console.error);
//               },
//             },
//             retry: {
//               enabled: true,
//               max_count: 3,
//             },
//             timeout: 300, // 5 minutes
//           };

//           // Check if Razorpay is loaded
//           if (typeof window.Razorpay === "undefined") {
//             toast.error("Payment system is loading. Please refresh the page and try again.");
//             setLoading(false);
//             return;
//           }

//           const rzp = new window.Razorpay(options);

//           rzp.on("payment.failed", function (response) {
//             console.error("Payment failed:", response.error);
//             toast.error(`Payment failed: ${response.error.description}`);
//             setLoading(false);
//           });

//           rzp.open();
//         } else {
//           toast.error(paymentResponse.data.message || "Failed to create payment order");
//         }
//       } else {
//         toast.error(bookingResponse.data.message || "Failed to create booking");
//       }
//     } catch (error) {
//       console.error("Booking/Payment error:", error);
      
//       if (error.response) {
//         const status = error.response.status;
//         const message = error.response.data.message || "An error occurred";
        
//         if (status === 401) {
//           toast.error("Session expired. Please login again.");
//           navigate("/login");
//         } else {
//           toast.error(message);
//         }
//       } else if (error.request) {
//         toast.error("Network error. Please check your internet connection.");
//       } else {
//         toast.error("An unexpected error occurred. Please try again.");
//       }
//     } finally {
//       setLoading(false);
//     }
//   };

//   // Feature Cards
//   const features = [
//     { icon: <FaUserMd className="text-2xl" />, title: "Expert Therapists", desc: "Licensed professionals with specialized training" },
//     { icon: <FaVideo className="text-2xl" />, title: "Virtual Sessions", desc: "Secure video consultations from anywhere" },
//     { icon: <FaClock className="text-2xl" />, title: "Flexible Scheduling", desc: "Book sessions at your convenience" },
//     { icon: <FaShieldAlt className="text-2xl" />, title: "100% Confidential", desc: "Your privacy is our top priority" },
//   ];

//   return (
//     <>
//       <section className="py-20 bg-gradient-to-br from-purple-50 to-indigo-100">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//             viewport={{ once: true }}
//             className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-12 relative overflow-hidden shadow-2xl"
//           >
//             {/* Background Elements */}
//             <div className="absolute inset-0 overflow-hidden">
//               <motion.div
//                 animate={{ scale: [1, 1.2, 1], rotate: [0, 180, 360] }}
//                 transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
//                 className="absolute top-10 right-10 w-32 h-32 bg-white/10 rounded-full"
//               />
//               <motion.div
//                 animate={{ scale: [1.2, 1, 1.2], rotate: [360, 180, 0] }}
//                 transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
//                 className="absolute bottom-10 left-10 w-24 h-24 bg-white/10 rounded-full"
//               />
//             </div>

//             <div className="relative z-10">
//               {/* Header */}
//               <motion.div
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.6, delay: 0.2 }}
//                 viewport={{ once: true }}
//                 className="text-center mb-12"
//               >
//                 <motion.div
//                   initial={{ scale: 0.8, opacity: 0 }}
//                   whileInView={{ scale: 1, opacity: 1 }}
//                   transition={{ delay: 0.3, duration: 0.5 }}
//                   viewport={{ once: true }}
//                   className="inline-flex items-center bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full mb-8 border border-white/30"
//                 >
//                   <FaHeart className="text-white text-xl mr-3" />
//                   <span className="text-white font-semibold">Start Your Healing Journey</span>
//                 </motion.div>

//                 <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
//                   Ready to Begin Your <span className="text-yellow-300">Healing Journey</span>?
//                 </h2>

//                 <p className="text-xl text-purple-100 max-w-3xl mx-auto leading-relaxed">
//                   Our compassionate team of licensed therapists is here to support you every step of the way.
//                 </p>
//               </motion.div>

//               {/* Features Grid */}
//               <motion.div
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.6, delay: 0.4 }}
//                 viewport={{ once: true }}
//                 className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12"
//               >
//                 {features.map((feature, index) => (
//                   <motion.div
//                     key={index}
//                     initial={{ opacity: 0, scale: 0.8 }}
//                     whileInView={{ opacity: 1, scale: 1 }}
//                     transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
//                     viewport={{ once: true }}
//                     whileHover={{ y: -5 }}
//                     className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/20"
//                   >
//                     <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-4 mx-auto">
//                       {feature.icon}
//                     </div>
//                     <h3 className="text-white font-semibold mb-2">{feature.title}</h3>
//                     <p className="text-purple-100 text-sm">{feature.desc}</p>
//                   </motion.div>
//                 ))}
//               </motion.div>

//               {/* CTA Buttons */}
//               <motion.div
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.6, delay: 0.6 }}
//                 viewport={{ once: true }}
//                 className="flex flex-col sm:flex-row gap-4 justify-center items-center"
//               >
//                 {/* Book Appointment */}
//                 <motion.button
//                   onClick={handleQuickBook}
//                   disabled={loading}
//                   whileHover={{ scale: 1.05, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.3)" }}
//                   whileTap={{ scale: 0.95 }}
//                   className={`group bg-white text-purple-600 px-8 py-4 rounded-full text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center gap-2 ${
//                     loading ? "opacity-50 cursor-not-allowed" : ""
//                   }`}
//                 >
//                   <FaCalendarAlt className="group-hover:scale-110 transition-transform" />
//                   {loading ? "Processing..." : "Book an Appointment"}
//                   <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
//                 </motion.button>

//                 {/* Take Assessment */}
//                 <motion.button
//                   onClick={handleAssessmentClick}
//                   whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 255, 255, 0.2)" }}
//                   whileTap={{ scale: 0.95 }}
//                   className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white px-8 py-4 rounded-full text-lg font-semibold border-2 border-white/30 transition-all duration-300 flex items-center gap-2"
//                 >
//                   Take Assessment
//                   <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
//                 </motion.button>
//               </motion.div>

//               {/* Trust Indicators */}
//               <motion.div
//                 initial={{ opacity: 0 }}
//                 whileInView={{ opacity: 1 }}
//                 transition={{ duration: 0.6, delay: 0.8 }}
//                 viewport={{ once: true }}
//                 className="mt-12 text-center"
//               >
//                 <p className="text-purple-100 text-sm mb-4">
//                   Trusted by 500+ clients • 98% satisfaction rate • 24/7 support
//                 </p>
//                 <div className="flex justify-center items-center gap-8 text-purple-100">
//                   <div className="flex items-center gap-2">
//                     <FaShieldAlt className="text-green-300" />
//                     <span className="text-sm">HIPAA Compliant</span>
//                   </div>
//                   <div className="flex items-center gap-2">
//                     <FaUserMd className="text-green-300" />
//                     <span className="text-sm">Licensed Therapists</span>
//                   </div>
//                   <div className="flex items-center gap-2">
//                     <FaVideo className="text-green-300" />
//                     <span className="text-sm">Secure Video Calls</span>
//                   </div>
//                 </div>
//               </motion.div>
//             </div>
//           </motion.div>
//         </div>
//       </section>

//       {/* Booking Modal */}
//       {showBookingModal && (
//         <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4">
//           <motion.div
//             initial={{ opacity: 0, scale: 0.95 }}
//             animate={{ opacity: 1, scale: 1 }}
//             className="bg-white rounded-3xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
//           >
//             {/* Modal Header */}
//             <div className="flex items-center justify-between p-6 border-b border-gray-200">
//               <div className="flex items-center gap-4">
//                 <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
//                   <FaUserMd className="text-purple-600 text-xl" />
//                 </div>
//                 <div>
//                   <h3 className="text-xl font-bold text-gray-900">{defaultDoctor.name}</h3>
//                   <p className="text-purple-600 font-medium">Quick Booking</p>
//                 </div>
//               </div>
//               <button
//                 onClick={() => setShowBookingModal(false)}
//                 className="p-2 hover:bg-gray-100 rounded-full transition-colors"
//               >
//                 <FaTimes size={20} />
//               </button>
//             </div>

//             {/* Booking Form */}
//             <form onSubmit={handleCompleteBooking} className="p-6 space-y-6">
//               {/* Date Selection */}
//               <div>
//                 <label className="block text-sm font-semibold text-gray-700 mb-2">
//                   Select Date *
//                 </label>
//                 <select
//                   value={bookingData.slotDate}
//                   onChange={(e) => setBookingData({...bookingData, slotDate: e.target.value, slotTime: ''})}
//                   className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent"
//                   required
//                 >
//                   <option value="">Choose a date</option>
//                   {availableDates.map((date) => (
//                     <option key={date.value} value={date.value}>
//                       {date.label}
//                     </option>
//                   ))}
//                 </select>
//               </div>

//               {/* Time Selection */}
//               <div>
//                 <label className="block text-sm font-semibold text-gray-700 mb-2">
//                   Select Time *
//                 </label>
//                 <div className="grid grid-cols-3 gap-2">
//                   {timeSlots.map((time) => (
//                     <button
//                       key={time}
//                       type="button"
//                       onClick={() => setBookingData({...bookingData, slotTime: time})}
//                       className={`p-2 text-sm rounded-lg border transition-all ${
//                         bookingData.slotTime === time
//                           ? 'bg-purple-600 text-white border-purple-600'
//                           : 'bg-white text-gray-700 border-gray-300 hover:border-purple-300'
//                       }`}
//                       disabled={!bookingData.slotDate}
//                     >
//                       {time}
//                     </button>
//                   ))}
//                 </div>
//               </div>

//               {/* Session Type */}
//               <div>
//                 <label className="block text-sm font-semibold text-gray-700 mb-2">
//                   Session Type *
//                 </label>
//                 <div className="flex gap-4">
//                   {['Online', 'In-person'].map((type) => (
//                     <button
//                       key={type}
//                       type="button"
//                       onClick={() => setBookingData({...bookingData, sessionType: type})}
//                       className={`px-4 py-2 rounded-lg border transition-all ${
//                         bookingData.sessionType === type
//                           ? 'bg-purple-600 text-white border-purple-600'
//                           : 'bg-white text-gray-700 border-gray-300 hover:border-purple-300'
//                       }`}
//                     >
//                       {type}
//                     </button>
//                   ))}
//                 </div>
//               </div>

//               {/* Communication Method (for Online sessions) */}
//               {bookingData.sessionType === 'Online' && (
//                 <div>
//                   <label className="block text-sm font-semibold text-gray-700 mb-2">
//                     Communication Method
//                   </label>
//                   <select
//                     value={bookingData.communicationMethod}
//                     onChange={(e) => setBookingData({...bookingData, communicationMethod: e.target.value})}
//                     className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent"
//                   >
//                     <option value="Video Call">Video Call</option>
//                     <option value="Phone Call">Phone Call</option>
//                     <option value="Chat">Chat</option>
//                   </select>
//                 </div>
//               )}

//               {/* Reason for Visit */}
//               <div>
//                 <label className="block text-sm font-semibold text-gray-700 mb-2">
//                   Reason for Visit *
//                 </label>
//                 <textarea
//                   value={bookingData.reasonForVisit}
//                   onChange={(e) => setBookingData({...bookingData, reasonForVisit: e.target.value})}
//                   className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent"
//                   rows="3"
//                   placeholder="Please describe your concerns or reason for this appointment..."
//                   required
//                 />
//               </div>

//               {/* Consent Checkbox */}
//               <div className="flex items-start gap-3">
//                 <input
//                   type="checkbox"
//                   id="consent"
//                   checked={bookingData.consentGiven}
//                   onChange={(e) => setBookingData({...bookingData, consentGiven: e.target.checked})}
//                   className="mt-1 h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300 rounded"
//                   required
//                 />
//                 <label htmlFor="consent" className="text-sm text-gray-700">
//                   I consent to sharing this information with the healthcare provider and understand that this session will be conducted according to professional standards. I also agree to the payment terms and cancellation policy. *
//                 </label>
//               </div>

//               {/* Payment Summary */}
//               <div className="bg-purple-50 p-4 rounded-xl border border-purple-200">
//                 <div className="flex justify-between items-center">
//                   <span className="font-semibold text-gray-700">Consultation Fee:</span>
//                   <span className="text-2xl font-bold text-purple-700">₹{defaultDoctor.fees}</span>
//                 </div>
//                 <div className="flex items-center justify-center mt-2 text-sm text-gray-600">
//                   <FaShieldAlt className="mr-2" />
//                   Secure payment powered by Razorpay
//                 </div>
//               </div>

//               {/* Submit Button */}
//               <div className="flex gap-4">
//                 <button
//                   type="button"
//                   onClick={() => setShowBookingModal(false)}
//                   className="flex-1 py-3 px-4 border border-gray-300 text-gray-700 rounded-xl font-semibold hover:bg-gray-50 transition-colors"
//                 >
//                   Cancel
//                 </button>
//                 <button
//                   type="submit"
//                   disabled={loading || !bookingData.consentGiven}
//                   className={`flex-1 py-3 px-4 rounded-xl font-semibold transition-all flex items-center justify-center gap-2 ${
//                     loading
//                       ? 'bg-gray-400 cursor-not-allowed text-gray-700'
//                       : 'bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:shadow-lg'
//                   }`}
//                 >
//                   {loading ? (
//                     <>
//                       <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
//                       Processing...
//                     </>
//                   ) : (
//                     <>
//                       <FaCalendarAlt className="text-sm" />
//                       Pay ₹{defaultDoctor.fees} & Book
//                     </>
//                   )}
//                 </button>
//               </div>
//             </form>
//           </motion.div>
//         </div>
//       )}
//     </>
//   );
// };

// export default BookAppointmentCTA;
































































// import React, { useContext, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { AppContext } from "../context/AppContext";
// import { motion } from "framer-motion";
// import axios from "axios";
// import { toast } from "react-toastify";
// import {
//   FaCalendarAlt,
//   FaUserMd,
//   FaVideo,
//   FaArrowRight,
//   FaHeart,
//   FaClock,
//   FaShieldAlt,
//   FaTimes,
// } from "react-icons/fa";

// const BookAppointmentCTA = () => {
//   const navigate = useNavigate();
//   const { token, userData, backendUrl } = useContext(AppContext);
//   const [loading, setLoading] = useState(false);
//   const [showBookingModal, setShowBookingModal] = useState(false);
  
//   // Booking form state
//   const [bookingData, setBookingData] = useState({
//     slotDate: '',
//     slotTime: '',
//     reasonForVisit: '',
//     sessionType: 'Online',
//     communicationMethod: 'Video Call',
//     briefNotes: '',
//     emergencyContact: '',
//     consentGiven: false
//   });

//   // Mock doctor for quick booking (you can make this dynamic later)
//   const defaultDoctor = {
//     _id: "1", // This should match one of your mock doctors
//     name: "Dr. Anjali Sharma",
//     fees: 700
//   };

//   // Generate available time slots
//   const generateTimeSlots = () => {
//     const slots = [];
//     for (let hour = 9; hour <= 17; hour++) {
//       slots.push(`${hour.toString().padStart(2, '0')}:00`);
//       if (hour !== 17) {
//         slots.push(`${hour.toString().padStart(2, '0')}:30`);
//       }
//     }
//     return slots;
//   };

//   // Generate next 30 days (excluding Sundays)
//   const generateAvailableDates = () => {
//     const dates = [];
//     const today = new Date();
//     let daysAdded = 0;
//     let dayOffset = 1;
    
//     while (daysAdded < 30) {
//       const date = new Date(today);
//       date.setDate(today.getDate() + dayOffset);
      
//       // Skip Sundays (0 = Sunday)
//       if (date.getDay() !== 0) {
//         dates.push({
//           value: date.toISOString().split('T')[0],
//           label: date.toLocaleDateString('en-IN', { 
//             weekday: 'short', 
//             month: 'short', 
//             day: 'numeric' 
//           })
//         });
//         daysAdded++;
//       }
//       dayOffset++;
//     }
//     return dates;
//   };

//   const timeSlots = generateTimeSlots();
//   const availableDates = generateAvailableDates();

//   // Handle Assessment Click
//   const handleAssessmentClick = () => {
//     if (!token) {
//       navigate("/login?type=login");
//     } else {
//       navigate("/assessments");
//     }
//   };

//   // Handle Quick Book (opens modal)
//   const handleQuickBook = () => {
//     if (!token) {
//       const loginConfirm = window.confirm(
//         "You need to login to book an appointment. Would you like to login now?"
//       );
//       if (loginConfirm) {
//         navigate("/login");
//       }
//       return;
//     }

//     if (!userData || !userData._id) {
//       toast.error("Please wait for your profile to load completely, then try again.");
//       return;
//     }

//     setShowBookingModal(true);
//     // Reset form
//     setBookingData({
//       slotDate: '',
//       slotTime: '',
//       reasonForVisit: '',
//       sessionType: 'Online',
//       communicationMethod: 'Video Call',
//       briefNotes: '',
//       emergencyContact: '',
//       consentGiven: false
//     });
//   };

//   // Handle Complete Booking with Payment
//   const handleCompleteBooking = async (e) => {
//     e.preventDefault();
    
//     // Validate required fields
//     if (!bookingData.slotDate || !bookingData.slotTime || !bookingData.reasonForVisit) {
//       toast.error("Please fill all required fields!");
//       return;
//     }

//     if (!bookingData.consentGiven) {
//       toast.error("Please give your consent to proceed with the booking.");
//       return;
//     }

//     setLoading(true);

//     try {
//       // Step 1: Create booking (temporary reservation)
//       console.log("Creating booking with data:", {
//         docId: defaultDoctor._id,
//         ...bookingData
//       });

//       const bookingResponse = await axios.post(
//         `${backendUrl}/api/user/book-appointment`,
//         {
//           docId: defaultDoctor._id,
//           ...bookingData
//         },
//         {
//           headers: {
//             token: token,
//             "Content-Type": "application/json",
//           }
//         }
//       );

//       console.log("Booking response:", bookingResponse.data);

//       if (bookingResponse.data.success) {
//         const tempReservationId = bookingResponse.data.tempReservationId;
        
//         // Step 2: Create payment order
//         console.log("Creating payment with tempReservationId:", tempReservationId);

//         const paymentResponse = await axios.post(
//           `${backendUrl}/api/user/payment-razorpay`,
//           {
//             tempReservationId: tempReservationId
//           },
//           {
//             headers: {
//               token: token,
//               "Content-Type": "application/json",
//             }
//           }
//         );

//         console.log("Payment response:", paymentResponse.data);

//         if (paymentResponse.data.success) {
//           const order = paymentResponse.data.order;

//           // Step 3: Initialize Razorpay payment
//           const options = {
//             key: order.key_id,
//             amount: order.amount,
//             currency: order.currency,
//             name: "Mood Mantra",
//             description: `Consultation with ${defaultDoctor.name}`,
//             order_id: order.id,
//             handler: async function (response) {
//               try {
//                 // Step 4: Verify payment
//                 const verifyResponse = await axios.post(
//                   `${backendUrl}/api/user/verify-razorpay`,
//                   {
//                     razorpay_order_id: response.razorpay_order_id,
//                     razorpay_payment_id: response.razorpay_payment_id,
//                     razorpay_signature: response.razorpay_signature,
//                   },
//                   {
//                     headers: {
//                       token: token,
//                       "Content-Type": "application/json",
//                     }
//                   }
//                 );

//                 if (verifyResponse.data.success) {
//                   toast.success("🎉 Payment Successful! Your appointment has been confirmed.");
//                   setShowBookingModal(false);
//                   navigate("/my-appointments");
//                 } else {
//                   toast.error("Payment verification failed. Please contact support.");
//                 }
//               } catch (verifyError) {
//                 console.error("Payment verification error:", verifyError);
//                 toast.error("Payment completed but verification failed. Please contact support with your payment ID: " + response.razorpay_payment_id);
//               }
//             },
//             prefill: {
//               name: userData.name || "",
//               email: userData.email || "",
//               contact: userData.phone || "",
//             },
//             theme: {
//               color: "#7C3AED",
//             },
//             modal: {
//               ondismiss: function () {
//                 setLoading(false);
//                 // Cancel the reservation when payment modal is closed
//                 axios.post(
//                   `${backendUrl}/api/user/cancel-payment`,
//                   { tempReservationId },
//                   { headers: { token } }
//                 ).catch(console.error);
//               },
//             },
//             retry: {
//               enabled: true,
//               max_count: 3,
//             },
//             timeout: 300, // 5 minutes
//           };

//           // Check if Razorpay is loaded
//           if (typeof window.Razorpay === "undefined") {
//             toast.error("Payment system is loading. Please refresh the page and try again.");
//             setLoading(false);
//             return;
//           }

//           const rzp = new window.Razorpay(options);

//           rzp.on("payment.failed", function (response) {
//             console.error("Payment failed:", response.error);
//             toast.error(`Payment failed: ${response.error.description}`);
//             setLoading(false);
//           });

//           rzp.open();
//         } else {
//           toast.error(paymentResponse.data.message || "Failed to create payment order");
//         }
//       } else {
//         toast.error(bookingResponse.data.message || "Failed to create booking");
//       }
//     } catch (error) {
//       console.error("Booking/Payment error:", error);
      
//       if (error.response) {
//         const status = error.response.status;
//         const message = error.response.data.message || "An error occurred";
        
//         if (status === 401) {
//           toast.error("Session expired. Please login again.");
//           navigate("/login");
//         } else {
//           toast.error(message);
//         }
//       } else if (error.request) {
//         toast.error("Network error. Please check your internet connection.");
//       } else {
//         toast.error("An unexpected error occurred. Please try again.");
//       }
//     } finally {
//       setLoading(false);
//     }
//   };

//   // Feature Cards
//   const features = [
//     { icon: <FaUserMd className="text-2xl" />, title: "Expert Therapists", desc: "Licensed professionals with specialized training" },
//     { icon: <FaVideo className="text-2xl" />, title: "Virtual Sessions", desc: "Secure video consultations from anywhere" },
//     { icon: <FaClock className="text-2xl" />, title: "Flexible Scheduling", desc: "Book sessions at your convenience" },
//     { icon: <FaShieldAlt className="text-2xl" />, title: "100% Confidential", desc: "Your privacy is our top priority" },
//   ];

//   return (
//     <>
//       <section className="py-20 bg-gradient-to-br from-purple-50 to-indigo-100">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//             viewport={{ once: true }}
//             className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-12 relative overflow-hidden shadow-2xl"
//           >
//             {/* Background Elements */}
//             <div className="absolute inset-0 overflow-hidden">
//               <motion.div
//                 animate={{ scale: [1, 1.2, 1], rotate: [0, 180, 360] }}
//                 transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
//                 className="absolute top-10 right-10 w-32 h-32 bg-white/10 rounded-full"
//               />
//               <motion.div
//                 animate={{ scale: [1.2, 1, 1.2], rotate: [360, 180, 0] }}
//                 transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
//                 className="absolute bottom-10 left-10 w-24 h-24 bg-white/10 rounded-full"
//               />
//             </div>

//             <div className="relative z-10">
//               {/* Header */}
//               <motion.div
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.6, delay: 0.2 }}
//                 viewport={{ once: true }}
//                 className="text-center mb-12"
//               >
//                 <motion.div
//                   initial={{ scale: 0.8, opacity: 0 }}
//                   whileInView={{ scale: 1, opacity: 1 }}
//                   transition={{ delay: 0.3, duration: 0.5 }}
//                   viewport={{ once: true }}
//                   className="inline-flex items-center bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full mb-8 border border-white/30"
//                 >
//                   <FaHeart className="text-white text-xl mr-3" />
//                   <span className="text-white font-semibold">Start Your Healing Journey</span>
//                 </motion.div>

//                 <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
//                   Ready to Begin Your <span className="text-yellow-300">Healing Journey</span>?
//                 </h2>

//                 <p className="text-xl text-purple-100 max-w-3xl mx-auto leading-relaxed">
//                   Our compassionate team of licensed therapists is here to support you every step of the way.
//                 </p>
//               </motion.div>

//               {/* Features Grid */}
//               <motion.div
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.6, delay: 0.4 }}
//                 viewport={{ once: true }}
//                 className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12"
//               >
//                 {features.map((feature, index) => (
//                   <motion.div
//                     key={index}
//                     initial={{ opacity: 0, scale: 0.8 }}
//                     whileInView={{ opacity: 1, scale: 1 }}
//                     transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
//                     viewport={{ once: true }}
//                     whileHover={{ y: -5 }}
//                     className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/20"
//                   >
//                     <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-4 mx-auto">
//                       {feature.icon}
//                     </div>
//                     <h3 className="text-white font-semibold mb-2">{feature.title}</h3>
//                     <p className="text-purple-100 text-sm">{feature.desc}</p>
//                   </motion.div>
//                 ))}
//               </motion.div>

//               {/* CTA Buttons */}
//               <motion.div
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.6, delay: 0.6 }}
//                 viewport={{ once: true }}
//                 className="flex flex-col sm:flex-row gap-4 justify-center items-center"
//               >
//                 {/* Book Appointment with Payment */}
//                 <motion.button
//                   onClick={handleQuickBook}
//                   disabled={loading}
//                   whileHover={{ scale: 1.05, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.3)" }}
//                   whileTap={{ scale: 0.95 }}
//                   className={`group bg-white text-purple-600 px-8 py-4 rounded-full text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center gap-2 ${
//                     loading ? "opacity-50 cursor-not-allowed" : ""
//                   }`}
//                 >
//                   <FaCalendarAlt className="group-hover:scale-110 transition-transform" />
//                   {loading ? "Processing..." : "Pay & Book Appointment"}
//                   <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
//                 </motion.button>
                
//                 {/* Price indicator */}
//                 <div className="text-center text-white/80 text-sm mt-2">
//                   Starting from ₹{defaultDoctor.fees} • Secure Payment via Razorpay
//                 </div>

//                 {/* Take Assessment */}
//                 <motion.button
//                   onClick={handleAssessmentClick}
//                   whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 255, 255, 0.2)" }}
//                   whileTap={{ scale: 0.95 }}
//                   className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white px-8 py-4 rounded-full text-lg font-semibold border-2 border-white/30 transition-all duration-300 flex items-center gap-2"
//                 >
//                   Take Assessment
//                   <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
//                 </motion.button>
//               </motion.div>

//               {/* Trust Indicators */}
//               <motion.div
//                 initial={{ opacity: 0 }}
//                 whileInView={{ opacity: 1 }}
//                 transition={{ duration: 0.6, delay: 0.8 }}
//                 viewport={{ once: true }}
//                 className="mt-12 text-center"
//               >
//                 <p className="text-purple-100 text-sm mb-4">
//                   Trusted by 500+ clients • 98% satisfaction rate • 24/7 support
//                 </p>
//                 <div className="flex justify-center items-center gap-8 text-purple-100">
//                   <div className="flex items-center gap-2">
//                     <FaShieldAlt className="text-green-300" />
//                     <span className="text-sm">HIPAA Compliant</span>
//                   </div>
//                   <div className="flex items-center gap-2">
//                     <FaUserMd className="text-green-300" />
//                     <span className="text-sm">Licensed Therapists</span>
//                   </div>
//                   <div className="flex items-center gap-2">
//                     <FaVideo className="text-green-300" />
//                     <span className="text-sm">Secure Video Calls</span>
//                   </div>
//                 </div>
//               </motion.div>
//             </div>
//           </motion.div>
//         </div>
//       </section>

//       {/* Booking Modal */}
//       {showBookingModal && (
//         <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4">
//           <motion.div
//             initial={{ opacity: 0, scale: 0.95 }}
//             animate={{ opacity: 1, scale: 1 }}
//             className="bg-white rounded-3xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
//           >
//             {/* Modal Header */}
//             <div className="flex items-center justify-between p-6 border-b border-gray-200">
//               <div className="flex items-center gap-4">
//                 <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
//                   <FaUserMd className="text-purple-600 text-xl" />
//                 </div>
//                 <div>
//                   <h3 className="text-xl font-bold text-gray-900">{defaultDoctor.name}</h3>
//                   <p className="text-purple-600 font-medium">Quick Booking</p>
//                 </div>
//               </div>
//               <button
//                 onClick={() => setShowBookingModal(false)}
//                 className="p-2 hover:bg-gray-100 rounded-full transition-colors"
//               >
//                 <FaTimes size={20} />
//               </button>
//             </div>

//             {/* Booking Form */}
//             <form onSubmit={handleCompleteBooking} className="p-6 space-y-6">
//               {/* Date Selection */}
//               <div>
//                 <label className="block text-sm font-semibold text-gray-700 mb-2">
//                   Select Date *
//                 </label>
//                 <select
//                   value={bookingData.slotDate}
//                   onChange={(e) => setBookingData({...bookingData, slotDate: e.target.value, slotTime: ''})}
//                   className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent"
//                   required
//                 >
//                   <option value="">Choose a date</option>
//                   {availableDates.map((date) => (
//                     <option key={date.value} value={date.value}>
//                       {date.label}
//                     </option>
//                   ))}
//                 </select>
//               </div>

//               {/* Time Selection */}
//               <div>
//                 <label className="block text-sm font-semibold text-gray-700 mb-2">
//                   Select Time *
//                 </label>
//                 <div className="grid grid-cols-3 gap-2">
//                   {timeSlots.map((time) => (
//                     <button
//                       key={time}
//                       type="button"
//                       onClick={() => setBookingData({...bookingData, slotTime: time})}
//                       className={`p-2 text-sm rounded-lg border transition-all ${
//                         bookingData.slotTime === time
//                           ? 'bg-purple-600 text-white border-purple-600'
//                           : 'bg-white text-gray-700 border-gray-300 hover:border-purple-300'
//                       }`}
//                       disabled={!bookingData.slotDate}
//                     >
//                       {time}
//                     </button>
//                   ))}
//                 </div>
//               </div>

//               {/* Session Type */}
//               <div>
//                 <label className="block text-sm font-semibold text-gray-700 mb-2">
//                   Session Type *
//                 </label>
//                 <div className="flex gap-4">
//                   {['Online', 'In-person'].map((type) => (
//                     <button
//                       key={type}
//                       type="button"
//                       onClick={() => setBookingData({...bookingData, sessionType: type})}
//                       className={`px-4 py-2 rounded-lg border transition-all ${
//                         bookingData.sessionType === type
//                           ? 'bg-purple-600 text-white border-purple-600'
//                           : 'bg-white text-gray-700 border-gray-300 hover:border-purple-300'
//                       }`}
//                     >
//                       {type}
//                     </button>
//                   ))}
//                 </div>
//               </div>

//               {/* Communication Method (for Online sessions) */}
//               {bookingData.sessionType === 'Online' && (
//                 <div>
//                   <label className="block text-sm font-semibold text-gray-700 mb-2">
//                     Communication Method
//                   </label>
//                   <select
//                     value={bookingData.communicationMethod}
//                     onChange={(e) => setBookingData({...bookingData, communicationMethod: e.target.value})}
//                     className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent"
//                   >
//                     <option value="Video Call">Video Call</option>
//                     <option value="Phone Call">Phone Call</option>
//                     <option value="Chat">Chat</option>
//                   </select>
//                 </div>
//               )}

//               {/* Reason for Visit */}
//               <div>
//                 <label className="block text-sm font-semibold text-gray-700 mb-2">
//                   Reason for Visit *
//                 </label>
//                 <textarea
//                   value={bookingData.reasonForVisit}
//                   onChange={(e) => setBookingData({...bookingData, reasonForVisit: e.target.value})}
//                   className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent"
//                   rows="3"
//                   placeholder="Please describe your concerns or reason for this appointment..."
//                   required
//                 />
//               </div>

//               {/* Consent Checkbox */}
//               <div className="flex items-start gap-3">
//                 <input
//                   type="checkbox"
//                   id="consent"
//                   checked={bookingData.consentGiven}
//                   onChange={(e) => setBookingData({...bookingData, consentGiven: e.target.checked})}
//                   className="mt-1 h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300 rounded"
//                   required
//                 />
//                 <label htmlFor="consent" className="text-sm text-gray-700">
//                   I consent to sharing this information with the healthcare provider and understand that this session will be conducted according to professional standards. I also agree to the payment terms and cancellation policy. *
//                 </label>
//               </div>

//               {/* Payment Summary */}
//               <div className="bg-purple-50 p-4 rounded-xl border border-purple-200">
//                 <div className="flex justify-between items-center">
//                   <span className="font-semibold text-gray-700">Consultation Fee:</span>
//                   <span className="text-2xl font-bold text-purple-700">₹{defaultDoctor.fees}</span>
//                 </div>
//                 <div className="flex items-center justify-center mt-2 text-sm text-gray-600">
//                   <FaShieldAlt className="mr-2" />
//                   Secure payment powered by Razorpay
//                 </div>
//               </div>

//               {/* Submit Button */}
//               <div className="flex gap-4">
//                 <button
//                   type="button"
//                   onClick={() => setShowBookingModal(false)}
//                   className="flex-1 py-3 px-4 border border-gray-300 text-gray-700 rounded-xl font-semibold hover:bg-gray-50 transition-colors"
//                 >
//                   Cancel
//                 </button>
//                 <button
//                   type="submit"
//                   disabled={loading || !bookingData.consentGiven}
//                   className={`flex-1 py-3 px-4 rounded-xl font-semibold transition-all flex items-center justify-center gap-2 ${
//                     loading
//                       ? 'bg-gray-400 cursor-not-allowed text-gray-700'
//                       : 'bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:shadow-lg'
//                   }`}
//                 >
//                   {loading ? (
//                     <>
//                       <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
//                       Processing...
//                     </>
//                   ) : (
//                     <>
//                       <FaCalendarAlt className="text-sm" />
//                       Pay ₹{defaultDoctor.fees} & Book
//                     </>
//                   )}
//                 </button>
//               </div>
//             </form>
//           </motion.div>
//         </div>
//       )}
//     </>
//   );
// };

// export default BookAppointmentCTA;














import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import { motion } from "framer-motion";
import axios from "axios";
import { toast } from "react-toastify";
import {
  FaCalendarAlt,
  FaUserMd,
  FaVideo,
  FaArrowRight,
  FaHeart,
  FaClock,
  FaShieldAlt,
  FaTimes,
} from "react-icons/fa";

const BookAppointmentCTA = () => {
  const navigate = useNavigate();
  const { token, userData, backendUrl } = useContext(AppContext);
  const [loading, setLoading] = useState(false);
  const [showBookingModal, setShowBookingModal] = useState(false);
  
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

  // Mock doctor for quick booking (you can make this dynamic later)
  const defaultDoctor = {
    _id: "1", // This should match one of your mock doctors
    name: "Dr. Anjali Sharma",
    fees: 700
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

  const timeSlots = generateTimeSlots();
  const availableDates = generateAvailableDates();

  // Handle Assessment Click
  const handleAssessmentClick = () => {
    if (!token) {
      navigate("/login?type=login");
    } else {
      navigate("/assessments");
    }
  };

  // Handle Quick Book (opens modal)
  const handleQuickBook = () => {
    if (!token) {
      const loginConfirm = window.confirm(
        "You need to login to book an appointment. Would you like to login now?"
      );
      if (loginConfirm) {
        navigate("/login");
      }
      return;
    }

    if (!userData || !userData._id) {
      toast.error("Please wait for your profile to load completely, then try again.");
      return;
    }

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

  // Handle Complete Booking with Payment
  const handleCompleteBooking = async (e) => {
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

    setLoading(true);

    try {
      // Step 1: Create booking (temporary reservation)
      console.log("Creating booking with data:", {
        docId: defaultDoctor._id,
        ...bookingData
      });

      const bookingResponse = await axios.post(
        `${backendUrl}/api/user/book-appointment`,
        {
          docId: defaultDoctor._id,
          ...bookingData
        },
        {
          headers: {
            token: token,
            "Content-Type": "application/json",
          }
        }
      );

      console.log("Booking response:", bookingResponse.data);

      if (bookingResponse.data.success) {
        const tempReservationId = bookingResponse.data.tempReservationId;
        
        // Step 2: Create payment order
        console.log("Creating payment with tempReservationId:", tempReservationId);

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

        console.log("Payment response:", paymentResponse.data);

        if (paymentResponse.data.success) {
          const order = paymentResponse.data.order;

          // Step 3: Initialize Razorpay payment
          const options = {
            key: order.key_id,
            amount: order.amount,
            currency: order.currency,
            name: "Mood Mantra",
            description: `Consultation with ${defaultDoctor.name}`,
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
                setLoading(false);
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
            setLoading(false);
            return;
          }

          const rzp = new window.Razorpay(options);

          rzp.on("payment.failed", function (response) {
            console.error("Payment failed:", response.error);
            toast.error(`Payment failed: ${response.error.description}`);
            setLoading(false);
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
      setLoading(false);
    }
  };

  // Feature Cards
  const features = [
    { icon: <FaUserMd className="text-2xl" />, title: "Expert Therapists", desc: "Licensed professionals with specialized training" },
    { icon: <FaVideo className="text-2xl" />, title: "Virtual Sessions", desc: "Secure video consultations from anywhere" },
    { icon: <FaClock className="text-2xl" />, title: "Flexible Scheduling", desc: "Book sessions at your convenience" },
    { icon: <FaShieldAlt className="text-2xl" />, title: "100% Confidential", desc: "Your privacy is our top priority" },
  ];

  return (
    <>
      <section className="py-20 bg-gradient-to-br from-purple-50 to-indigo-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-12 relative overflow-hidden shadow-2xl"
          >
            {/* Background Elements */}
            <div className="absolute inset-0 overflow-hidden">
              <motion.div
                animate={{ scale: [1, 1.2, 1], rotate: [0, 180, 360] }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute top-10 right-10 w-32 h-32 bg-white/10 rounded-full"
              />
              <motion.div
                animate={{ scale: [1.2, 1, 1.2], rotate: [360, 180, 0] }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                className="absolute bottom-10 left-10 w-24 h-24 bg-white/10 rounded-full"
              />
            </div>

            <div className="relative z-10">
              {/* Header */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-center mb-12"
              >
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                  viewport={{ once: true }}
                  className="inline-flex items-center bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full mb-8 border border-white/30"
                >
                  <FaHeart className="text-white text-xl mr-3" />
                  <span className="text-white font-semibold">Start Your Healing Journey</span>
                </motion.div>

                <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                  Ready to Begin Your <span className="text-yellow-300">Healing Journey</span>?
                </h2>

                <p className="text-xl text-purple-100 max-w-3xl mx-auto leading-relaxed">
                  Our compassionate team of licensed therapists is here to support you every step of the way.
                </p>
              </motion.div>

              {/* Features Grid */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12"
              >
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -5 }}
                    className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/20"
                  >
                    <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-4 mx-auto">
                      {feature.icon}
                    </div>
                    <h3 className="text-white font-semibold mb-2">{feature.title}</h3>
                    <p className="text-purple-100 text-sm">{feature.desc}</p>
                  </motion.div>
                ))}
              </motion.div>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
                className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              >
                {/* Book Appointment with Payment */}
                <motion.button
                  onClick={handleQuickBook}
                  disabled={loading}
                  whileHover={{ scale: 1.05, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.3)" }}
                  whileTap={{ scale: 0.95 }}
                  className={`group bg-white text-purple-600 px-8 py-4 rounded-full text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center gap-2 ${
                    loading ? "opacity-50 cursor-not-allowed" : ""
                  }`}
                >
                  <FaCalendarAlt className="group-hover:scale-110 transition-transform" />
                  {loading ? "Processing..." : "Pay & Book Appointment"}
                  <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                </motion.button>
                
                {/* Price indicator */}
                <div className="text-center text-white/80 text-sm mt-2">
                  Starting from ₹{defaultDoctor.fees} • Secure Payment via Razorpay
                </div>

                {/* Take Assessment */}
                <motion.button
                  onClick={handleAssessmentClick}
                  whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 255, 255, 0.2)" }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white px-8 py-4 rounded-full text-lg font-semibold border-2 border-white/30 transition-all duration-300 flex items-center gap-2"
                >
                  Take Assessment
                  <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                </motion.button>
              </motion.div>

              {/* Trust Indicators */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                viewport={{ once: true }}
                className="mt-12 text-center"
              >
                <p className="text-purple-100 text-sm mb-4">
                  Trusted by 500+ clients • 98% satisfaction rate • 24/7 support
                </p>
                <div className="flex justify-center items-center gap-8 text-purple-100">
                  <div className="flex items-center gap-2">
                    <FaShieldAlt className="text-green-300" />
                    <span className="text-sm">HIPAA Compliant</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FaUserMd className="text-green-300" />
                    <span className="text-sm">Licensed Therapists</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FaVideo className="text-green-300" />
                    <span className="text-sm">Secure Video Calls</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Booking Modal */}
      {showBookingModal && (
        <div className="fixed inset-0 z-50 flex items-start justify-center bg-black bg-opacity-50 p-4 overflow-y-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-3xl shadow-2xl max-w-2xl w-full my-8 max-h-none"
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-200">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                  <FaUserMd className="text-purple-600 text-xl" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">{defaultDoctor.name}</h3>
                  <p className="text-purple-600 font-medium">Quick Booking</p>
                </div>
              </div>
              <button
                onClick={() => setShowBookingModal(false)}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <FaTimes size={20} />
              </button>
            </div>

            {/* Booking Form */}
            <div className="p-6 space-y-6 max-h-[70vh] overflow-y-auto">
              <form onSubmit={handleCompleteBooking} className="space-y-6">
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

              </form>
            </div>

            {/* Payment Summary & Submit - Fixed at bottom */}
            <div className="border-t border-gray-200 p-6 bg-gray-50 rounded-b-3xl">
              {/* Payment Summary */}
              <div className="bg-purple-50 p-4 rounded-xl border border-purple-200 mb-4">
                <div className="flex justify-between items-center">
                  <span className="font-semibold text-gray-700">Consultation Fee:</span>
                  <span className="text-2xl font-bold text-purple-700">₹{defaultDoctor.fees}</span>
                </div>
                <div className="flex items-center justify-center mt-2 text-sm text-gray-600">
                  <FaShieldAlt className="mr-2" />
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
                  onClick={handleCompleteBooking}
                  disabled={loading || !bookingData.consentGiven || !bookingData.slotDate || !bookingData.slotTime || !bookingData.reasonForVisit}
                  className={`flex-1 py-3 px-4 rounded-xl font-semibold transition-all flex items-center justify-center gap-2 ${
                    loading
                      ? 'bg-gray-400 cursor-not-allowed text-gray-700'
                      : 'bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:shadow-lg'
                  }`}
                >
                  {loading ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                      Processing...
                    </>
                  ) : (
                    <>
                      <FaCalendarAlt className="text-sm" />
                      Pay ₹{defaultDoctor.fees} & Book
                    </>
                  )}
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </>
  );
};

export default BookAppointmentCTA;