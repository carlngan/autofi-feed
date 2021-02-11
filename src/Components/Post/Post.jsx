import React, { useState } from "react"

import styles from "./Post.module.scss"

import { Comment } from "../Comment/Comment"
import { CommentInput } from "../CommentInput/CommentInput"
import { ProfilePicture } from "../ProfilePicture/ProfilePicture"

const Post = ({ post, comments }) => {
  const [showComments, setShowComments] = useState(false)

  return (
    <div
      className={styles.container}
      onClick={() => {
        setShowComments(true)
      }}
    >
      <div className={styles.header}>
        <ProfilePicture name={post.userId} />
        <div
          style={{ postion: "relative", marginLeft: "8px", fontWeight: "bold" }}
        >
          {post.title}
        </div>
      </div>
      <div className={styles.body}>
        <div>
          {post.body.split("\n").map((str, i) => (
            <div key={i}>{str}</div>
          ))}
        </div>
      </div>
      <div className={styles.commentsDisp}>
        <button className={styles.button}>
          {comments.length} {comments.length > 1 ? "comments" : "comment"}
        </button>
        {showComments && (
          <>
            <span>&nbsp;&nbsp;&#183;&nbsp;&nbsp;</span>
            <button
              className={styles.button}
              onClick={e => {
                e.stopPropagation()
                setShowComments(false)
              }}
            >
              hide
            </button>
          </>
        )}
      </div>
      {showComments && (
        <>
          <CommentInput postId={post.id} />
          <div className={styles.mostRecent}>Most recent &darr;</div>
          <div className={styles.comments}>
            {comments.map(c => {
              return <Comment key={c.id} comment={c}></Comment>
            })}
          </div>
        </>
      )}
    </div>
  )
}

export { Post }
