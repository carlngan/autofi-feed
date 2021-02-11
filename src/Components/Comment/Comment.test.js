import React from "react"
import { Provider } from "react-redux"
import { render, screen, fireEvent } from "@testing-library/react"
import "@testing-library/jest-dom/extend-expect"

import { Comment } from "./Comment"
import { createReduxStore, ACTIONS } from "../../reducer"

describe("Test Comment", () => {
  function renderComment(
    store = createReduxStore(),
    props = {
      comment: {
        postId: 1,
        id: 1,
        name: "Carl Ngan",
        email: "carl@carlngan.com",
        body: "Welcome to this demo"
      }
    }
  ) {
    return render(
      <Provider store={store}>
        <Comment {...props} />
      </Provider>
    )
  }

  test("properly display name", () => {
    const store = createReduxStore()
    renderComment(store)

    expect(screen.getByText("Carl Ngan")).toBeDefined()
  })

  test("properly display email", () => {
    const store = createReduxStore()
    renderComment(store)

    expect(screen.getByText("carl@carlngan.com")).toBeDefined()
  })
  test("properly display body", () => {
    const store = createReduxStore()
    renderComment(store)

    expect(screen.getByText("Welcome to this demo")).toBeDefined()
  })
})
