import React from "react";
import Image from "next/image";

const Vision: React.FC = () => {
  const VisionText = () => {
    return (
      <div>
        <div
          style={{
            color: "#680118",
            fontSize: "58px",
            margin: "0 0 20px 0",
            fontWeight: "bolder",
          }}
        >
          LEARN TO BE FREE
        </div>
        <p style={{ fontSize: "16px", margin: "0 0 40px 0" }}>
          SKOOLAM teaches students to be free from physical, mental, emotional,
          societal, economical, financial, cultural and psychological barriers.
          The only way to achieve this freedom is to learn every step of the
          way.
        </p>
        <div
          style={{
            color: "#680118",
            fontSize: "32px",
            margin: "0 0 20px 0",
            fontWeight: "bolder",
          }}
        >
          Vision & Mission
        </div>
        <p style={{ fontSize: "16px", margin: "0 0 40px 0" }}>
          The goal of SKOOLAM is to build educational centers that provide a
          quality education that prepares students for their future challenges,
          not only for their careers but also for their personal lives. As a
          result, our mission is to achieve or be capable of providing society
          with such great personalities who can benefit them in numerous ways.
          In addition, we aim to revolutionize the Indian education system to
          reduce the growing confusion and dissatisfaction among teenagers and
          youths.
        </p>
      </div>
    );
  };

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "2fr 3fr",
        padding: "5%",
        paddingRight: "10%",
        paddingLeft: "10%",
        gap: "20px",
        alignItems: "center",
      }}
    >
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Image src="/Vision.png" alt="Image" width={400} height={450} />
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <VisionText />
      </div>
    </div>
  );
};

export default Vision;

// import React from "react";
// import "./Vision.style.css";
// import Image from "next/image";

// const Vision = () => {
//   return (
//     <div className="vision-container">
//       <div className="content-wrapper">
//         <div className="image-container">
//           <Image
//             src="/Vision.png"
//             alt="Image"
//             width={400}
//             height={450}
//             className="vision-image"
//           />
//         </div>
//         <div className="text-content">
//           <h1 className="vision-title">LEARN TO BE FREE</h1>
//           <p className="vision-description">
//             SKOOLAM teaches students to be free from physical, mental,
//             emotional, societal, economical, financial, cultural, and
//             psychological barriers. The only way to achieve this freedom is to
//             learn every step of the way.
//           </p>
//           <h2 className="vision-subtitle">Vision & Mission</h2>
//           <p className="vision-description">
//             The goal of SKOOLAM is to build educational centers that provide a
//             quality education that prepares students for their future
//             challenges, not only for their careers but also for their personal
//             lives. As a result, our mission is to achieve or be capable of
//             providing society with such great personalities who can benefit them
//             in numerous ways. In addition, we aim to revolutionize the Indian
//             education system to reduce the growing confusion and dissatisfaction
//             among teenagers and youths.
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Vision;
