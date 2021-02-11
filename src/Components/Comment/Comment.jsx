import React from "react"

import { ProfilePicture } from "../ProfilePicture/ProfilePicture"
import styles from "./Comment.module.scss"

const Comment = ({ comment }) => {
  return (
    <div className={styles.container}>
      <ProfilePicture name={comment.name} />
      <div className={styles.grayBox}>
        <div className={styles.name}>{comment.name}</div>
        <div className={styles.email}>{comment.email}</div>

        <div className={styles.content}>
          {comment.body.split("\n").map((str, i) => (
            <div key={i}>{str}</div>
          ))}
        </div>
      </div>
    </div>
  )
}

export { Comment }
