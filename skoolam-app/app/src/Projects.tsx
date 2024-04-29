import React from "react";
import VideoPlayer from "./utils/VideoPlayer";

const Projects: React.FC = () => {
  return (
    <div style={{ padding: "5%", paddingRight: "10%", paddingLeft: "10%" }}>
      <h1>OUR PROJECTS</h1>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "20px",
          alignItems: "center",
        }}
      >
        <div style={{ display: "flex", justifyContent: "center" }}>
          <VideoPlayer videoId={"mKZG_aaqc7c"} />
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            fontSize: "26px",
            fontWeight: "bold",
          }}
        >
          <p>
            <span style={{ fontSize: "2em" }}>“</span>
            In a lot of noise, I feel a silence.
            <br />
            In a room of darkness, I see a ray of light.
            <br />
            While my feet wander, My eyes are fixed on a goal.
            <br />
            I see the autumn coming, The leaves are falling,
            <br />
            but I see them blooming.
          </p>
        </div>
      </div>
      <div>
        <p>
          SKOOLAM successfully launched its first project in Jaipur, Rajasthan.
          The initiative aims to provide regular classes to children and prevent
          school dropouts, which are most prevalent among students over the age
          of 13. Located at Vaishali Nagar, the centre serves numerous families
          from Bihar, Calcutta, West Bengal, and Uttar Pradesh. Many adults in
          these families work as daily wage labourers, fruit vendors, or maids.
          Due to their low income, it is common for children to get married and
          start working as soon as they reach adolescence. Skoolam strives to
          raise awareness about education and bridge this educational gap.
        </p>
      </div>
    </div>
  );
};

export default Projects;
