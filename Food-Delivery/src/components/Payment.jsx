// import React, { useContext } from 'react'
// import { storeContext } from '../context/StoreContext'

// const Payment = () => {
//     const{gettoalcartAmpunt,discount}=useContext(storeContext)
//     const totalAmount = gettoalcartAmpunt();
//   const deliveryFee = totalAmount === 0 ? 0 : 2;
//   const discountAmount = totalAmount * discount;
//   const finalTotal = totalAmount - discountAmount + deliveryFee;
//   const handlePayment = () => {
//     const options = {
//       key: "rzp_test_BkPuVhFTbH4Y03",
//       amount: finalTotal * 100,
//       currency: "INR",
//       name: "Sourasish's Shop",
//       description: "Geekathon",
//       image: "./assets/logo.png",
//       handler: function (response) {
//         savetoDB(response);
//         alert("Payment successful!");
//       },
//       prefill: {
//         name: "Your Name",
//         email: "youremail@example.com",
//         contact: "9999999999",
//       },
//       notes: {
//         address: "note value",
//       },
//       theme: {
//         color: "#000000",
//       },
//     };

//     const propay = new window.Razorpay(options);
//     propay.open();
//   };

//   const savetoDB = (response) => {
//     // Logic to save the payment details to your database
//     console.log(response);
//   };

//   return (
//     <div>
//           <h2>Proceed to Payment</h2>
//           <button onClick={handlePayment}>Pay ${finalTotal.toFixed(2)}</button>

//     </div>
//   )
// }

// export default Payment
import React from 'react'

function Payment() {
  return (
    <div>Payment</div>
  )
}

export default Payment