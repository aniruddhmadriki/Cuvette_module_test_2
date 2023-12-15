import React from "react";
import styles from "./color.module.css";
import tick from "../assets/tick.svg";

const Colors = ({ changeInput }) => {
  const colors = [
    "#B38BFA",
    "#FF79F2",
    "#43E6FC",
    "#F19576",
    "#0047FF",
    "#6691FF",
  ];

  return (
    <div className={styles.radio_input}>
      {colors.map((it) => (
        <div key={it}>
          <input
            id={it}
            name="color"
            value={it}
            type="radio"
            onChange={(e) => changeInput(e.target.name, e.target.value)}
          />
          <label htmlFor={it}>
            <span style={{ backgroundColor: it }}>
              <img src={tick} alt="" />
            </span>
          </label>
        </div>
      ))}
    </div>
  );
};

export default Colors;
