import React from "react";

function Button(props) {
  const { name, onClick } = props;

  return (
    <button type="submit" onClick={onClick}>
      {name}
    </button>
  );
}

export { Button };
