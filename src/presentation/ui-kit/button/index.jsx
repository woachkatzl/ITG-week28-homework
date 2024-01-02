import React from "react";
import styles from "./button.module.scss";

function Button(props) {
  const { name, onClick } = props;

  return (
    <button className={styles.button} type="submit" onClick={onClick}>
      {name}
    </button>
  );
}

export { Button };
