import React from "react";
import DonationCard from "./utils/DonationCard";
import donationCardContent from "./utils/donationCardContent.json";

const Donation: React.FC = () => {
  return (
    <div style={{ backgroundColor: "#FFD960", padding: 16 }}>
      {/* Your component content goes here */}
      <div style={{ padding: "5%", paddingRight: "10%", paddingLeft: "10%" }}>
        <div
          style={{
            display: "grid", // This will arrange the child elements in a row
            gridTemplateColumns: "1fr 1fr 1fr", // This will create 3 columns
          }}
        >
          {donationCardContent.map((item, index) => (
            <DonationCard
              key={index}
              imagePath={item.imagePath}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Donation;
