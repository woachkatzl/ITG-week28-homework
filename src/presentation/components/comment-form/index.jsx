import React from "react";

//компоненты
import { Button } from "../../ui-kit/button";

function CommentForm(props) {
  const { comment, setComment, onClickHandler } = props;

  const handleChange = (e) => {
    e.preventDefault();
    setComment(e.target.value);
  };

  return (
    <form>
      <textarea
        onChange={handleChange}
        value={comment}
        cols="30"
        rows="10"
      ></textarea>
      <Button name="Отправить" onClick={onClickHandler} />
    </form>
  );
}

export { CommentForm };
