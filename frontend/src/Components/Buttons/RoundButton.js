import React from "react";
import "./RoundedButton.css"; // Assuming you're using an external CSS file for custom styles

export default function RoundedButton({ icon, text, onClick }) {
  return (
    <button className="rounded-btn" onClick={onClick}>
      <div className="icon-container">
        <img src={icon} alt="icon" className="icon" />
      </div>
      <span className="btn-text">{text}</span>
    </button>
  );
}
