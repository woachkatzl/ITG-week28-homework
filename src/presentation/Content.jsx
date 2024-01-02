import React, { useState } from "react";

//Компоненты
import { CommentForm } from "./components/comment-form";

//Хуки
import { useLocalStorage } from "../infrastructure/hooks/useLocalStorage";

//Дополнительные функции
import { checkSpam } from "../infrastructure/checkSpam";

function Content() {
  const [comments, setComments] = useLocalStorage("comments", []);

  const [newComment, setNewComment] = useState("");

  const addComment = (e) => {
    e.preventDefault();

    const newId = comments.length
      ? parseInt(comments[comments.length - 1].id) + 1
      : 1;
    const commentToAdd = { id: newId, body: checkSpam(newComment) };
    const updatedComments = [...comments, commentToAdd];
    setComments(updatedComments);

    setNewComment("");
  };

  return (
    <div>
      <div>
        {comments.map((comment) => (
          <p key={comment.id}>{comment.body}</p>
        ))}
      </div>
      <CommentForm
        comment={newComment}
        setComment={setNewComment}
        onClickHandler={addComment}
      />
    </div>
  );
}

export { Content };
