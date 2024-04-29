import React from "react";
import { FaCog, FaLightbulb, FaStar } from "react-icons/fa";

interface VolunteerBenefitTemplateProps {
  image: string;
  title: string;
  description: string;
}

const VolunteerBenefitTemplate: React.FC<VolunteerBenefitTemplateProps> = ({
  image,
  title,
  description,
}) => {
  return (
    <div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 4fr",
          alignItems: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "flex-start",
            height: "100%",
            paddingTop: "8px",
          }}
        >
          {image == "lightBulb" && (
            <FaLightbulb
              size={60}
              style={{
                color: "D6B13C",
              }}
            />
          )}
          {image == "star" && (
            <FaStar
              size={60}
              style={{
                color: "D6B13C",
              }}
            />
          )}
          {image == "settings" && (
            <FaCog
              size={60}
              style={{
                color: "D6B13C",
              }}
            />
          )}
        </div>
        <div style={{ marginTop: "40px", alignContent: "start" }}>
          <div
            style={{
              color: "#680118",
              fontSize: 43,
              fontWeight: "bold",
              lineHeight: "0.9",
            }}
          >
            {title}
          </div>
          <p style={{ marginTop: "4px", fontSize: 16, fontWeight: "normal" }}>
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default VolunteerBenefitTemplate;
