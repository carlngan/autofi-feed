import React, { useState, useEffect } from "react"
import { useDispatch } from "react-redux"

import { ACTIONS } from "../../reducer"

import { ProfilePicture } from "../ProfilePicture/ProfilePicture"

import styles from "./CommentInput.module.scss"

// Shows a box that allows a user to type in a comment
const CommentInput = ({ postId }) => {
  const dispatch = useDispatch()

  const [comment, setComment] = useState("")

  // show button to post only when the comment box has at least 1 character
  const [showPostButton, setShowPostButton] = useState(false)

  const postComment = () => {
    dispatch({
      type: ACTIONS.SUBMIT_COMMENT,
      payload: {
        postId,
        name: "Me",
        email: "me@me.com",
        body: comment
      }
    })
    setComment("")
  }

  useEffect(() => {
    if (comment && comment.length > 0) {
      setShowPostButton(true)
    } else {
      setShowPostButton(false)
    }
  }, [comment])

  return (
    <div className={styles.container}>
      <ProfilePicture name={"Me"} />
      <div className={styles.commentBox}>
        <input
          value={comment}
          onChange={e => {
            setComment(e.target.value)
          }}
          onKeyPress={e => {
            if (e.key === "Enter") {
              postComment()
            }
          }}
          type="text"
          placeholder="Add a comment..."
        />
        {showPostButton && (
          <div style={{ marginTop: "15px" }}>
            <button
              className={styles.postButton}
              onClick={() => {
                postComment()
              }}
            >
              Post
            </button>
            <span className={styles.poweredBy}>
              Powered By <img src="/favicon.ico" />
            </span>
          </div>
        )}
      </div>
    </div>
  )
}

export { CommentInput }
