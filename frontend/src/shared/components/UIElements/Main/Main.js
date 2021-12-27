import React from "react";
import "./Main.css";
const Main = (props) => {
  const styles = {
    maxWidth: props.full ? "initial" : " var(--pageMaxWidth)",
  };
  return (
    <main id="down">
      <div style={styles} className="main-wrapper">
        {props.children}
      </div>
    </main>
  );
};

export default Main;
