import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faFacebook,
  faLinkedin,
  faTwitter,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";

const Footer: React.FC = () => {
  return (
    <>
      <footer style={styles.footer}>
        <div style={styles.container}>
          <div style={styles.left}>
            <img
              src="/footerSkoolamLogo.png"
              alt="Skoolam Logo"
              style={styles.logo}
            />
            <div style={styles.address}>
              <h3 style={styles.title}>Registered Office</h3>
              <p style={styles.text}>
                C-802, Symphonia, Plot no 4. Kuber complex, Gandi path, Vaishali
                Nagar, Near Melodia Building, Jaipur- 302021
              </p>
            </div>
            <div style={styles.address}>
              <h3 style={styles.title}>Jaipur Center Address</h3>
              <p style={styles.text}>
                B-208, Amrapali Marg, Ganga Sagar-B, B Block, Vaishali Nagar,
                Jaipur, Rajasthan 302021
              </p>
            </div>
          </div>
          <div style={styles.right}>
            <h3 style={styles.followUs}>Follow us</h3>
            <div style={styles.socialIcons}>
              <a
                href="https://www.instagram.com/skoolam/"
                target="_blank"
                rel="noopener noreferrer"
                style={styles.icon}
              >
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61552692749375"
                target="_blank"
                rel="noopener noreferrer"
                style={styles.icon}
              >
                <FontAwesomeIcon icon={faFacebook} />
              </a>
              <a
                href="https://www.linkedin.com/company/skoolam/"
                target="_blank"
                rel="noopener noreferrer"
                style={styles.icon}
              >
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
              <a
                href="https://x.com/skoolam?t=60DU_-zJnwD1C1g71gtUdA&s=08"
                target="_blank"
                rel="noopener noreferrer"
                style={styles.icon}
              >
                <FontAwesomeIcon icon={faTwitter} />
              </a>
              <a
                href="https://wa.me/919216703670"
                target="_blank"
                rel="noopener noreferrer"
                style={styles.icon}
              >
                <FontAwesomeIcon icon={faWhatsapp} />
              </a>
            </div>
          </div>
        </div>
      </footer>
      <div style={styles.footerBottom}>
        <p style={styles.footerText}>© 2024 SKOOLAM - ALL RIGHTS RESERVED</p>
      </div>
    </>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  footer: {
    backgroundColor: "#660000",
    color: "#FFFFFF",
    padding: "20px",
    fontFamily: "Arial, sans-serif",
  },
  container: {
    display: "flex",
    justifyContent: "left",
    alignItems: "center",
    flexWrap: "wrap",
    maxWidth: "1200px",
    margin: "0 auto",
  },
  left: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    width: "50%",
  },
  logo: {
    height: "60px",
    marginBottom: "20px",
  },
  address: {
    marginBottom: "20px",
  },
  title: {
    fontSize: "32px",
    marginBottom: "10px",
    textAlign: "left",
    fontWeight: "bolder",
  },
  text: {
    fontSize: "20px",
    lineHeight: "1.5",
    margin: 0,
    textAlign: "left",
  },
  right: {
    textAlign: "left",
    justifyContent: "left",
    paddingLeft: "100px",
  },
  followUs: {
    fontSize: "32px",
    marginBottom: "10px",
    fontWeight: "bolder",
    textAlign: "left",
  },
  socialIcons: {
    display: "flex",
    justifyContent: "left",
  },
  icon: {
    margin: "0 10px",
    color: "#FFFFFF",
    fontSize: "32px",
    textDecoration: "none",
  },
  footerBottom: {
    textAlign: "center",
    backgroundColor: "#FFFFFF",
    padding: "10px",
  },
  footerText: {
    fontSize: "14px",
    margin: 0,
    textAlign: "end",
    color: "#000000",
    fontWeight: "bold",
  },
};

export default Footer;
