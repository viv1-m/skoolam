import React from "react";
import "./Projects.style.css";
import VideoPlayer from "./utils/VideoPlayer";

const Projects = () => {
  return (
    <div className="projects-container">
      <h1 className="projects-title">OUR PROJECTS</h1>
      <div className="projects-content">
        <div className="video-container">
          <VideoPlayer videoId={"JyFjRHBy7Ss"} />
        </div>
        <div className="quote-container">
          <blockquote className="quote">
            <p>In a lot of noise,</p>
            <p>I feel a silence.</p>
            <p>In a room of darkness,</p>
            <p>I see a ray of light.</p>
            <p>While my feet wander,</p>
            <p>My eyes are fixed on a goal.</p>
            <p>I see the autumn coming,</p>
            <p>The leaves are falling,</p>
            <p>but I see them blooming.</p>
          </blockquote>
        </div>
      </div>
      <p className="projects-description">
        SKOOLAM successfully launched its first project in Jaipur, Rajasthan.
        The initiative aims to provide regular classes to children and prevent
        school dropouts, which are most prevalent among students over the age of
        13. Located at Vaishali Nagar, the centre serves numerous families from
        Bihar, Calcutta, West Bengal, and Uttar Pradesh. Many adults in these
        families work as daily wage labourers, fruit vendors, or maids. Due to
        their low income, it is common for children to get married and start
        working as soon as they reach adolescence. Skoolam strives to raise
        awareness about education and bridge this educational gap.
      </p>
    </div>
  );
};

export default Projects;
