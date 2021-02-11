import React, { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import axios from "axios"

import { ACTIONS } from "../../reducer"
import { Post } from "../../Components/Post/Post"
import { config } from "../../config"

import { Row, Col, Spinner } from "reactstrap"

import styles from "./Posts.module.scss"

const Posts = ({}) => {
  const posts = useSelector(state => state.posts) || []
  const comments = useSelector(state => state.comments) || []
  const dispatch = useDispatch()

  const [loader, setLoader] = useState(true)

  const getPosts = async () => {
    try {
      let url = `${config.apiUrl}/posts`

      const res = await axios.get(url)

      if (res && res.data) {
        dispatch({
          type: ACTIONS.LOAD_POSTS,
          payload: {
            posts: res.data
          }
        })
        setLoader(false)
      } else {
        alert("Unable to get posts (1)")
      }
    } catch (err) {
      alert(`Unable to get posts (2) : ${JSON.stringify(err)}`)
    }
  }

  const getComments = async () => {
    try {
      let url = `${config.apiUrl}/comments`

      const res = await axios.get(url)

      if (res && res.data) {
        dispatch({
          type: ACTIONS.LOAD_COMMENTS,
          payload: {
            comments: res.data
          }
        })
      } else {
        alert("Unable to get posts (1)")
      }
    } catch (err) {
      alert(`Unable to get posts (2) : ${JSON.stringify(err)}`)
    }
  }

  // on initial load, get posts and comments from the api
  useEffect(() => {
    getPosts()
    getComments()
  }, [])

  return (
    <Row className={styles.row}>
      <Col xs={12} md={12}>
        <div className="col-12">
          <section className="box ">
            <Col md={{ size: 6, offset: 3 }} sm={{ size: 12 }}>
              {(loader && (
                <div className={styles.spinner + " col-12"}>
                  <Spinner color="primary" />
                </div>
              )) ||
                posts.map(p => {
                  return (
                    <Post
                      key={p.id}
                      post={p}
                      comments={comments.filter(c => {
                        return c.postId === p.id
                      })}
                    />
                  )
                })}
            </Col>
          </section>
        </div>
      </Col>
    </Row>
  )
}

export { Posts }
