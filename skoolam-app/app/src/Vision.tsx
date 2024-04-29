import React from "react";
import Image from "next/image";

const Vision: React.FC = () => {
  const VisionText = () => {
    return (
      <div>
        <h1>LEARN TO BE FREE</h1>
        <p>
          SKOOLAM teaches students to be free from physical, mental, emotional,
          societal, economical, financial, cultural and psychological barriers.
          The only way to achieve this freedom is to learn every step of the
          way.
        </p>
        <h2>Vision/Mission</h2>
        <p>
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
        gridTemplateColumns: "1fr 1fr",
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
