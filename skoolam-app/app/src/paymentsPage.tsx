/* eslint-disable react/no-unescaped-entities */
import React, { useState } from "react";
import "./paymentsPage.style.css";
import PaymentDetails from "./utils/paymentDetails";

const PaymentPage: React.FC = () => {
  return (
    <div
      style={{
        margin: "20px",
        padding: "5%",
        paddingLeft: "10%",
        paddingRight: "10%",
        width: "100%",
      }}
    >
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <div style={{ maxWidth: "25%" }}>
          <img src="paymentImage.png" alt="Children" />
        </div>
        <div style={{ maxWidth: "75%", minWidth: "70%" }}>
          <PaymentDetails />
        </div>
      </div>
      <div className="quote">
        <p>
          <span className="quote-symbol">"</span>
          If you see something wrong happening in the world, you can either do
          nothing or do something. And I already tried doing "Nothing."
        </p>
        <p className="author">- Malvika Agarwal, Trustee</p>
      </div>
    </div>
  );
};

export default PaymentPage;
