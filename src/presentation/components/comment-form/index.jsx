import React from "react";

//Стили
import styles from "./form.module.scss";

//компоненты
import { Button } from "../../ui-kit/button";

function CommentForm(props) {
  const { comment, setComment, onClickHandler } = props;

  const handleChange = (e) => {
    e.preventDefault();
    setComment(e.target.value);
  };

  return (
    <form className={styles.form}>
      <textarea
        className={styles.window}
        onChange={handleChange}
        value={comment}
      ></textarea>
      <Button name="Отправить" onClick={onClickHandler} />
    </form>
  );
}

export { CommentForm };
