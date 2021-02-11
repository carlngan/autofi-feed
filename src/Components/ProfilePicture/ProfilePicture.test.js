import React from "react"
import { Provider } from "react-redux"
import { render, screen } from "@testing-library/react"
import "@testing-library/jest-dom/extend-expect"

import { ProfilePicture } from "./ProfilePicture"
import { createReduxStore, ACTIONS } from "../../reducer"

describe("Test ProfilePicture", () => {
  function renderProfilePicture(
    store = createReduxStore(),
    props = {
      name: "Carl"
    }
  ) {
    return render(
      <Provider store={store}>
        <ProfilePicture {...props} />
      </Provider>
    )
  }

  test("have the profile img with Carl when name is passed in", () => {
    const store = createReduxStore()
    renderProfilePicture(store)

    expect(
      screen.getByRole("img", { src: "https://ui-avatars.com/api/?name=Carl" })
    ).toBeDefined()
  })
})
