import React from "react"
import { Provider } from "react-redux"
import { render, screen, fireEvent } from "@testing-library/react"
import "@testing-library/jest-dom/extend-expect"

import { Post } from "./Post"
import { createReduxStore, ACTIONS } from "../../reducer"

describe("Test Post", () => {
  function renderPost(
    store = createReduxStore(),
    props = {
      post: {
        userId: 1,
        id: 1,
        title: "Amazing Post",
        body: "This is the body of an amazing post"
      },
      comments: [
        {
          postId: 1,
          id: 1,
          name: "Carl Ngan",
          email: "carl@carlngan.com",
          body: "Welcome to this demo"
        }
      ]
    }
  ) {
    return render(
      <Provider store={store}>
        <Post {...props} />
      </Provider>
    )
  }

  test("properly display title", () => {
    const store = createReduxStore()
    renderPost(store)

    expect(screen.getByText("Amazing Post")).toBeDefined()
  })

  test("properly display body", () => {
    const store = createReduxStore()
    renderPost(store)

    expect(
      screen.getByText("This is the body of an amazing post")
    ).toBeDefined()
  })
})
