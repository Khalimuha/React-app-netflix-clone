import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import "./Footer.css";

const Footer = () => {
  return (
    <div>
      <div className="footer-outer-container">
        <div className="footer-inner-container">
          <div className="footer-icons">
            <FacebookIcon />
            <InstagramIcon />
            <YouTubeIcon />
          </div>

          <div className="footer-data pb-2">
            <div>
              <ul>
                <li>Audio Description</li>
                <li>Investor Relations</li>
                <li>Legal Notice</li>
              </ul>
            </div>

            <div>
              <ul>
                <li>Help Center</li>
                <li>Jobs</li>
                <li>Cookies References</li>
              </ul>
            </div>

            <div>
              <ul>
                <li>Gift Cards</li>
                <li>Terms of Use</li>
                <li>Corporate Informations</li>
              </ul>
            </div>

            <div>
              <ul>
                <li>Media Center</li>
                <li>Privacy</li>
                <li>Contact Us</li>
              </ul>
            </div>
          </div>

          <div>
            <p className="service-code">Service Code</p>
            <p> &copy; 1997-2025 Netflix, inc.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
