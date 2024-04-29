import React from "react";
import Image from "next/image";

const TopBanner: React.FC = () => {
  return (
    <div style={{ width: "100%" }}>
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        <div style={{ alignContent: "center" }}>
          <Image src="/skoolamLogo.png" alt="Image" width={200} height={200} />
        </div>
        <div style={{ alignContent: "center" }}>
          <button
            style={{
              background: "#680118",
              padding: 8,
              paddingRight: 16,
              paddingLeft: 16,
              color: "#ffffff",
              borderRadius: "8px",
            }}
          >
            Donate Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default TopBanner;
