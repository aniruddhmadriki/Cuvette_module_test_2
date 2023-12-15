import React from "react";
import homePageImage from "../assets/home.png";
import homeStyles from "./home.module.css";

const HomePage = () => {
  return (
    <div className={homeStyles.box}>
      <div className={homeStyles.image}>
        <img src={homePageImage} alt="" />
        <h1>Pocket Notes</h1>
        <p>
          Send and receive messages without keeping your phone online. <br />
          Use Pocket Notes on up to 4 linked devices and 1 mobile phone
        </p>
      </div>
      <div className={homeStyles.bottom}>🔒end-to-end encrypted</div>
    </div>
  );
};

export default HomePage;
