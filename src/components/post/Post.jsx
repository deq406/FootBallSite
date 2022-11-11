import React from "react";
import styles from "./Post.module.scss";
import { useState } from "react";
import clsx from "clsx";
const Post = ({ imgSrc, headerText, Text, FullText }) => {
  const [isFullPost, setFullPost] = useState(false);

  const changePostState = () => {
    setFullPost(!isFullPost);
  };
  return (
    <article
      onClick={changePostState}
      className={clsx(styles.articleCont, {
        [styles.articleContFull]: isFullPost,
      })}
    >
      <aside>
        <img src={imgSrc}></img>
      </aside>
      <div
        className={clsx(styles.headerText, {
          [styles.headerTextFull]: isFullPost,
        })}
      >
        {headerText}
        {isFullPost ? (
          <p className={styles.innerTxt}>{Text + FullText}</p>
        ) : (
          <p className={styles.innerTxt}>{Text}</p>
        )}
      </div>
    </article>
  );
};

export default Post;
