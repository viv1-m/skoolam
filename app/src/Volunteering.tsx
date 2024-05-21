import React from "react";
import VolunteerBenefitTemplate from "./utils/VolunteerBenefitTemplate";
import volunteeringContent from "./utils/volunteeringContent.json";

const Volunteering = () => {
  return (
    <>
      <div
        style={{
          backgroundImage: 'url("/Volunteering.png")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          width: "100%",
          height: "80vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          alignItems: "center",
          padding: "20px",
          position: "relative",
        }}
      >
        <div
          style={{
            textAlign: "start",
            position: "absolute",
            top: "0",
            right: "0",
            color: "white",
            fontSize: "58px",
            maxWidth: "30%",
            padding: "20px 40px 0 0",
          }}
        >
          What is volunteering?
        </div>
        <div
          style={{
            textAlign: "center",
            color: "white",
            fontSize: "24px",
            width: "100%", // to ensure the child div takes full width
          }}
        >
          <p
            style={{
              marginLeft: "24%",
              marginRight: "24%",
              backgroundColor: "rgba(0, 0, 0, 0.5)",
              borderRadius: "8px",
            }}
          >
            By volunteering, one can unleash a vast potential for personal
            growth alongside the community. It provides a sense of fulfillment
            in working towards causes that align with your beliefs.
          </p>
        </div>
      </div>
      <div style={{ padding: "5%", paddingRight: "10%", paddingLeft: "10%" }}>
        <div
          style={{
            display: "grid", // This will arrange the child elements in a row
            gridTemplateColumns: "1fr 1fr 1fr", // This will create 3 columns
          }}
        >
          {volunteeringContent.map((item, index) => (
            <VolunteerBenefitTemplate
              key={index}
              image={item.image}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Volunteering;
