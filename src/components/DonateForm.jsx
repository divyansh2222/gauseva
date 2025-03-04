import React from "react";
import payment1 from "../assets/payment1.png";
import payment2 from "../assets/payment2.png";
import paymenticon1 from "../assets/paymenticon1.png";
import paymenticon2 from "../assets/paymenticon2.png";
const DonateForm = () => {
  return (
    <div className="bg-[#F3D4B780] min-h-screen flex flex-col items-center py-10 px-4">
      {/* Header */}
      <h3 className="text-2xl md:text-6xl font-bold text-green-700 flex items-center gap-2">
        <img src={payment1} alt="icon" className="h-4 md:h-8" />
        Donate
        <img src={payment2} alt="icon" className="h-4 md:h-8" />
      </h3>

      {/* Form Container */}
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-3xl border border-gray-300 mt-6">
        <form className="space-y-6 text-[#148F50]">
          {/* Personal Details */}
          <fieldset className="space-y-4">
            <legend className="text-xl font-bold  pb-2">
              Details
            </legend>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {["Name", "Phone", "Email", "PAN Card"].map((field, index) => (
                <div key={index}>
                  <label className="block ">{field}*</label>
                  <input
                    type={field === "Email" ? "email" : "text"}
                    placeholder={`Enter ${field}`}
                    className="input-field border-b font-bold text-[#148F50]"
                    required
                  />
                </div>
              ))}
            </div>
          </fieldset>

          {/* Address */}
          <fieldset className="space-y-4">
            <legend className="text-xl font-bold  pb-2">
              Address
            </legend>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {["Country", "Pin Code", "City", "State"].map((field, index) => (
                <div key={index}>
                  <label className="block ">{field}*</label>
                  <input
                    type="text"
                    placeholder={`Enter ${field}`}
                    className="input-field border-b font-bold text-[#148F50]"
                    required
                  />
                </div>
              ))}
            </div>
          </fieldset>

          {/* Payment Method */}
          <fieldset className="space-y-4">
            <legend className="text-xl font-bold text-green-700 pb-2">
              Payment Method
            </legend>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block font-semibold">Payment Method*</label>
                <div className="flex items-center space-x-3">
                  <img
                    src={paymenticon1}
                    alt="Card Icon"
                    className="w-12 h-12"
                  />
                  <img
                    src={paymenticon2}
                    alt="Other Icon"
                    className="w-12 h-12"
                  />
                </div>
                <span className="ml-10"></span>
              </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {["Cardholder Name", "Card Number", "Exp Date", "CVC"].map(
                (field, index) => (
                  <div key={index}>
                    <label className="block ">{field}*</label>
                    <input
                      type="text"
                      placeholder={`Enter ${field}`}
                      className="input-field border-b font-bold text-[#148F50]"
                      required
                    />
                  </div>
                )
              )}
            </div>
          </fieldset>
        </form>
      </div>

      {/* Proceed Button (Outside Form) */}
      <button
        type="button"
        className="mt-6 w-full max-w-xl bg-green-700 text-white py-2 rounded-lg font-bold text-lg hover:bg-green-800 transition"
      >
        Proceed
      </button>
    </div>
  );
};

export default DonateForm;

// Tailwind CSS Utility Class
// .input-field {
//   @apply w-full p-2 border-b-2 border-gray-300 focus:outline-none focus:border-green-500;
// }
