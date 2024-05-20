import React, { useState } from "react";
import "./paymentDetails.style.css";
import axios from "axios";
import { useSearchParams } from "next/navigation";

const loadRazorpayScript = () => {
  return new Promise((resolve) => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.onload = () => resolve(true);
    script.onerror = () => resolve(false);
    document.body.appendChild(script);
  });
};

const PaymentDetails: React.FC = () => {
  const searchParams = useSearchParams();
  const initialAmount = searchParams.get("amount");
  console.log(initialAmount);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    address: "",
    city: "",
    state: "",
    pincode: "",
    panCard: "",
    aadharCard: "",
    amount: !!initialAmount ? initialAmount : "",
  });
  const [loading, setLoading] = useState(false);
  const [paymentStatus, setPaymentStatus] = useState<
    "success" | "failure" | null
  >(null);

  const handlePayment = async (event: React.FormEvent) => {
    event.preventDefault();
    setLoading(true);
    try {
      const { data } = await axios.post("/api/paymentRazorpay", {
        amount: formData.amount, // amount in INR
        currency: "INR",
      });

      const options: RazorpayOptions = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID!,
        amount: data.amount,
        currency: data.currency,
        name: "SKOOLAM",
        description: "Donation",
        order_id: data.id,
        handler: function (response: any) {
          setPaymentStatus("success");
          alert(`Payment ID: ${response.razorpay_payment_id}`);
          alert(`Order ID: ${response.razorpay_order_id}`);
          alert(`Signature: ${response.razorpay_signature}`);
        },
        prefill: {
          name: formData.name,
          email: formData.email,
          contact: formData.phoneNumber,
        },
        theme: {
          color: "#3399cc",
        },
        modal: {
          ondismiss: () => {
            setPaymentStatus("failure");
          },
        },
      };

      const isRazorpayLoaded = await loadRazorpayScript();

      if (!isRazorpayLoaded) {
        alert(
          "Failed to load Razorpay SDK. Please check your internet connection."
        );
        setLoading(false);
        return;
      }

      const rzp = new Razorpay(options);
      rzp.open();
    } catch (error) {
      console.error("Error processing payment", error);
      alert("There was an error processing your payment. Please try again.");
    }
    setLoading(false);
  };

  const handleChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    console.log(formData);
  };

  //   const handleSubmit = (e: React.FormEvent) => {
  //     e.preventDefault();
  //     console.log(formData);
  //     // Handle form submission logic here
  //   };

  return (
    <>
      {paymentStatus === "success" && (
        <div
          style={{
            color: "white",
            backgroundColor: "green",
            padding: "10px",
            margin: "10px 0",
            textAlign: "center",
            borderRadius: "5px",
          }}
        >
          Payment Successful
        </div>
      )}
      {paymentStatus === "failure" && (
        <div
          style={{
            color: "white",
            backgroundColor: "red",
            padding: "10px",
            margin: "10px 0",
            textAlign: "center",
            borderRadius: "5px",
          }}
        >
          Payment Failed
        </div>
      )}
      <form onSubmit={handlePayment} className="form-container">
        <h2>FILL YOUR DETAILS</h2>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <input
            type="text"
            name="name"
            placeholder="Enter Name"
            value={formData.name}
            onChange={handleChange}
            style={{ width: "50%", marginRight: "20px" }}
          />
          <div style={{ width: "50%", marginRight: "20px" }}></div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <input
            type="email"
            name="email"
            placeholder="Enter Email"
            value={formData.email}
            onChange={handleChange}
            style={{ width: "50%", marginRight: "20px" }}
          />
          <input
            type="text"
            name="panCard"
            placeholder="Pan Card No."
            value={formData.panCard}
            onChange={handleChange}
            style={{ width: "50%", marginRight: "20px" }}
          />
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <input
            type="text"
            name="phoneNumber"
            placeholder="Phone Number"
            value={formData.phoneNumber}
            onChange={handleChange}
            style={{ width: "50%", marginRight: "20px" }}
          />
          <input
            type="text"
            name="aadharCard"
            placeholder="Aadhar Card No."
            value={formData.aadharCard}
            onChange={handleChange}
            style={{ width: "50%", marginRight: "20px" }}
          />
        </div>
        <div
          style={{
            width: "100%",
            paddingRight: "20px",
          }}
        >
          <textarea
            name="address"
            placeholder="Enter Address"
            value={formData.address}
            onChange={handleChange}
            rows={1}
            style={{ width: "100%", resize: "none" }}
          />
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "flex-start",
            width: "100%",
          }}
        >
          <input
            type="text"
            name="city"
            placeholder="City"
            value={formData.city}
            onChange={handleChange}
            style={{ width: "30%", marginRight: "20px" }}
          />
          <input
            type="text"
            name="state"
            placeholder="State"
            value={formData.state}
            onChange={handleChange}
            style={{ width: "30%", marginRight: "20px" }}
          />
        </div>
        <input
          type="text"
          name="pincode"
          placeholder="Pincode"
          value={formData.pincode}
          onChange={handleChange}
        />

        <input
          type="number"
          name="amount"
          placeholder="Amount"
          value={formData.amount}
          onChange={handleChange}
        />
        <button>Proceed</button>
      </form>
    </>
  );
};

export default PaymentDetails;
