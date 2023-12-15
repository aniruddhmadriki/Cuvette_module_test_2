import React from "react";
import styles from "./chat.module.css";

const Chat = ({ text, time, date }) => {
  const formattedDate = new Date(date).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <div className={styles.mainChat}>
      <div className={styles.box}>
        <p className={styles.text}>{text}</p>
        <h5>{formattedDate + " • " + time}</h5>
      </div>
    </div>
  );
};

export default Chat;
