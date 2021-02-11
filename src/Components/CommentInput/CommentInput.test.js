import React from "react"
import { Provider } from "react-redux"
import { render, screen, fireEvent } from "@testing-library/react"
import "@testing-library/jest-dom/extend-expect"

import { CommentInput } from "./CommentInput"
import { createReduxStore, ACTIONS } from "../../reducer"

describe("Test CommentInput", () => {
  function renderCommentInput(
    store = createReduxStore(),
    props = {
      postId: 99
    }
  ) {
    return render(
      <Provider store={store}>
        <CommentInput {...props} />
      </Provider>
    )
  }

  test("properly display a comment box and profile image", () => {
    const store = createReduxStore()
    renderCommentInput(store)

    expect(screen.getByRole("textbox", { type: "type" })).toBeDefined()
    expect(
      screen.getByRole("img", { src: "https://ui-avatars.com/api/?name=Me" })
    ).toBeDefined()
  })
  test("comment box properly accepting comments", () => {
    const store = createReduxStore()

    renderCommentInput(store)

    const input = screen.getByRole("textbox")
    fireEvent.change(input, { target: { value: "abc" } })
    expect(input.value).toBe("abc")
  })
})
