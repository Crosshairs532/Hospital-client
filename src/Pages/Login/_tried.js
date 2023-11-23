// const handlesignInwithpopup = (googleAndfacebook) => {
//     googleAndfacebook()
//         .then(res => {

//             const user = res.user;
//             console.log(user.email, "awfarfafafa");
//             if (user.email) {
//                 const emailCredential = auth.EmailAuthProvider.credential(user.email);
//                 user.linkWithRedirect(emailCredential)
//                     .then(() => { })
//                     .catch(er => { console.log(er) })
//             }
//             // goTo('/')
//             // console.log(res)
//         })
//         .catch(er => console.log(er))
// }
// change password



// chatgpt
// const handlesignInwithpopup = (googleAndfacebook) => {
//     googleAndfacebook()
//         .then(res => {
//             const user = res.user;
//             console.log(user.email, "awfarfafafa");
//             if (user.email) {
//                 const emailCredential = auth.EmailAuthProvider.credential(user.email);

//                 user.linkWithPopup(emailCredential)
//                     .then((linkedUser) => {
//                         console.log(linkedUser, "linked user ");
//                     })
//                     .catch(er => {
//                         console.log(er);
//                         if (er.code === 'auth/credential-already-in-use') {
//                             // Handle the case where the email is already associated with a different account
//                         }
//                     });
//             }
//         })
//         .catch(er => console.log(er));
// }
// chatgpt end






// function linkFacebookAccount() {
//     const user = auth.currentUser;
//     console.log(user, "linkefaceboo");
//     if (user) {
//         // Sign in with Facebook
//         signInWithFacebook()
//             .then((result) => {
//                 // Successfully signed in with Facebook
//                 // Link the Facebook credential to the existing account
//                 return user.linkWithPopup(result.credential);
//             })
//             .then(() => {
//                 // Successfully linked the Facebook account
//                 console.log("Facebook account linked");
//             })
//             .catch((error) => {
//                 // Handle any errors, e.g., if the Facebook account is already linked to another user
//                 console.error(error);
//             });
//     }
// }



// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// function App() {
//     const [medicines, setMedicines] = useState([]);

//     useEffect(() => {
//         // Fetch medicines from the backend
//         axios.get('http://localhost:5000/api/medicines')
//             .then(response => {
//                 setMedicines(response.data);

//                 // Display alerts for expired medicines
//                 displayAlertsForExpiredMedicines(response.data);
//             })
//             .catch(error => console.error('Error fetching medicines:', error));
//     }, []);

//     const displayAlertsForExpiredMedicines = (medicines) => {
//         // Display alerts for each expired medicine
//         const today = new Date();

//         medicines.forEach(medicine => {
//             if (new Date(medicine.expirationDate) < today) {
//                 alert(`ALERT: Medicine ${medicine.name} has expired!`);
//             }
//         });
//     };

//     return (
//         <div>
//             <h1>Medicines</h1>
//             <ul>
//                 {medicines.map(medicine => (
//                     <li key={medicine._id}>
//                         {medicine.name} - Expiration Date: {new Date(medicine.expirationDate).toLocaleDateString()}
//                     </li>
//                 ))}
//             </ul>
//         </div>
//     );
// }

// export default App;



// expiration trial
// const express = require('express');
// const mongoose = require('mongoose');
// const cron = require('node-cron');

// const app = express();
// const port = 3001;

// app.use(express.json());

// mongoose.connect('mongodb://localhost/medicineDB', { useNewUrlParser: true, useUnifiedTopology: true });

// const medicineSchema = new mongoose.Schema({
//     name: String,
//     expirationDate: Date,
//     status: String,
// });

// const Medicine = mongoose.model('Medicine', medicineSchema);

// // Schedule to run every day at midnight
// cron.schedule('0 0 * * *', async () => {
//     await checkMedicineExpiry();
//     console.log('Medicine expiration status updated.');
// });

// app.get('/medicines', async (req, res) => {
//     try {
//         const medicines = await Medicine.find();
//         res.json(medicines);
//     } catch (error) {
//         res.status(500).json({ error: 'Internal Server Error' });
//     }
// });

// app.listen(port, () => {
//     console.log(`Server is running on port ${port}`);
// });

// const checkMedicineExpiry = async () => {
//     try {
//         const medicines = await Medicine.find();
//         const currentDate = new Date();

//         medicines.forEach((medicine) => {
//             if (medicine.expirationDate < currentDate) {
//                 medicine.status = 'Expired';
//             } else if (medicine.expirationDate < new Date(currentDate.getTime() + 7 * 24 * 60 * 60 * 1000)) {
//                 medicine.status = 'Close to Expiry';
//             } else {
//                 medicine.status = 'Valid';
//             }

//             medicine.save();
//         });

//         console.log('Medicine expiration status updated successfully.');
//     } catch (error) {
//         console.error('Error updating medicine expiration status:', error);
//     }
// };





// nov - 23 
// const express = require('express');
// const http = require('http');
// const mongoose = require('mongoose');
// const cors = require('cors');
// const socketIO = require('socket.io');

// const app = express();
// const port = 3001;
// const server = http.createServer(app);
// const io = socketIO(server);

// ... (Previous code)
// 888888 server 
// WebSocket connection
// io.on('connection', (socket) => {
//     console.log('Client connected');

//     // Example: Send a notification to the client
//     socket.emit('notification', { message: 'Welcome to the Pharmacy Management System' });

//     socket.on('disconnect', () => {
//       console.log('Client disconnected');
//     });
//   });

//   // Check expiration dates and send notifications
//   setInterval(async () => {
//     const nearExpirationMedicines = await Medicine.find({
//       expirationDate: { $gte: new Date(), $lt: new Date(Date.now() + 24 * 60 * 60 * 1000 * 7) }, // Within the next 7 days
//     });

//     const expiredMedicines = await Medicine.find({ expirationDate: { $lt: new Date() } });

//     if (nearExpirationMedicines.length > 0) {
//       io.emit('notification', {
//         message: `Alert: ${nearExpirationMedicines.length} medicines are near expiration.`,
//       });
//     }

//     if (expiredMedicines.length > 0) {
//       io.emit('notification', {
//         message: `Alert: ${expiredMedicines.length} medicines have expired.`,
//       });
//     }
//   }, 24 * 60 * 60 * 1000); // Check every 24 hours

//   // ... (Remaining code)
// ***** using cron
// Schedule cron job with node-cron
// cron.schedule('0 0 * * *', async () => {
//     // Run this code every day at midnight (0:00)
//     const expiredMedicines = await Medicine.find({ expirationDate: { $lt: new Date() } });
//     if (expiredMedicines.length > 0) {
//       io.emit('notification', { message: `Alert: ${expiredMedicines.length} medicines have expired.` });
//     }
//   });
  




// CLient 
// 1. npm install react socket.io-client
// App.js
// 2.
// import React, { useEffect } from 'react';
// import io from 'socket.io-client';

// const socket = io('http://localhost:3001');

// const App = () => {
//   useEffect(() => {
//     // Listen for notifications from the server
//     socket.on('notification', (data) => {
//       alert(data.message); // You can use a more sophisticated notification library
//     });

//     return () => {
//       // Clean up the socket connection on component unmount
//       socket.disconnect();
//     };
//   }, []);

//   return (
//     <div>
//       <h1>Pharmacy Management System</h1>
//       {/* Your components go here */}
//     </div>
//   );
// };

// export default App;
