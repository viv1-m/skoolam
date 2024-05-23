import React from "react";
import Link from "next/link";

const TopBanner: React.FC = () => {
  return (
    <div
      style={{
        width: "100%",
        boxShadow: "0px 3px 6px #CCCCCC",
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        <div style={{ alignContent: "center" }}>
          <Link href="/">
            <img src="/skoolamLogo.png" alt="Image" width={200} height={200} />
          </Link>
        </div>
        <div style={{ alignContent: "center" }}>
          <Link href="/payment">
            <button
              style={{
                background: "#680118",
                padding: 8,
                paddingRight: 24,
                paddingLeft: 24,
                color: "#ffffff",
                borderRadius: "8px",
                fontSize: "24px",
              }}
            >
              Donate Now
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TopBanner;
