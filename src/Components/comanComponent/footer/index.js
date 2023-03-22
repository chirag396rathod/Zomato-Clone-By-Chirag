import React from "react";
import "./index.css";

const footer = () => {
  return (
    <footer>
      <div className="max-width">
        <div className="header">
          <img
            src={
              "https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png?fit=around|198:42&crop=198:42;*,*"
            }
            alt="zomato"
          />
        </div>
        <div className="bottom-links">
          <div className="row">
            <div className="title">About Zomato</div>
            <div className="link">Who We Are</div>
            <div className="link">Blog</div>
            <div className="link">Work With Us</div>
            <div className="link">Investor Relations</div>
            <div className="link">Report Fraud</div>
            <div className="link">Contact Us</div>
          </div>
          <div className="row">
            <div className="title">ZOMAVERSE</div>
            <div className="link">Zomato</div>
            <div className="link">Blinkit</div>
            <div className="link">Feeding India</div>
            <div className="link">Hyperpure</div>
            <div className="link">Zomaland</div>
          </div>
          <div className="row">
            <div className="title">FOR RESTAURANTS</div>
            <div className="link">Partner With Us</div>
            <div className="link">Apps For You</div>
          </div>
          <div className="row">
            <div className="title">LEARN MORE</div>
            <div className="link">Privacy</div>
            <div className="link">Security</div>
            <div className="link">Terms</div>
            <div className="link">Sitemap</div>
          </div>
        </div>
        <div className="info">
          By continuing past this page, you agree to our Terms of Service,
          Cookie Policy, Privacy Policy and Content Policies. All trademarks are
          properties of their respective owners. 2008-2023 © Zomato™ Ltd. All
          rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default footer;
