import React from "react";
import Image from "next/image";
import Link from "next/link";

const TopBanner: React.FC = () => {
  // const history = useHistory();

  // const handleDonateClick = () => {
  //   history.push("/payment");
  // };

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
            <Image
              src="/skoolamLogo.png"
              alt="Image"
              width={200}
              height={200}
            />
          </Link>
        </div>
        <div style={{ alignContent: "center" }}>
          <Link href="/payment">
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
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TopBanner;
