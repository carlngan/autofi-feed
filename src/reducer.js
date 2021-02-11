import { createStore } from "redux"

export const ACTIONS = {
  LOAD_POSTS: "LOAD_POSTS",
  LOAD_COMMENTS: "LOAD_COMMENTS",
  SUBMIT_COMMENT: "SUBMIT_COMMENT",
  CHANGE_DIET: "CHANGE_DIET",
  LOAD_MENU: "LOAD_MENU",
  ADD_TO_CART: "ADD_TO_CART",
  REMOVE_FROM_CART: "REMOVE_FROM_CART"
}

const initialState = {
  posts: [],
  diet: "all",
  menuById: {},
  menuIdList: {
    all: [],
    veg: []
  },
  cartByIds: {}
}

function feedReducer(state = initialState, action) {
  switch (action.type) {
    case ACTIONS.LOAD_POSTS: {
      const { posts } = action.payload
      return {
        ...state,
        posts
      }
    }
    case ACTIONS.LOAD_COMMENTS: {
      const { comments } = action.payload
      return {
        ...state,
        comments
      }
    }
    case ACTIONS.SUBMIT_COMMENT: {
      const { postId, name, email, body } = action.payload
      const newId = state.comments.length + 1
      const comments = [
        { id: newId, postId, name, email, body },
        ...state.comments
      ]
      return {
        ...state,
        comments
      }
    }
    case ACTIONS.CHANGE_DIET: {
      const { diet } = state
      const newDiet = diet === "veg" ? "all" : "veg"

      return {
        ...state,
        diet: newDiet,
        cartByIds: {}
      }
    }
    case ACTIONS.LOAD_MENU: {
      const { menu } = action.payload

      const menuById = {}
      menu.forEach(item => {
        menuById[item.id] = item
      })
      const allMenuId = menu.map(item => item.id)
      const vegMenuId = menu
        .filter(item => item.diet === "veg")
        .map(item => item.id)

      return {
        ...state,
        menuById,
        menuIdList: {
          all: allMenuId,
          veg: vegMenuId
        }
      }
    }
    case ACTIONS.ADD_TO_CART: {
      const { itemId } = action.payload
      const { cartByIds } = state

      const cartItem = cartByIds[itemId] || {
        quantity: 0
      }

      cartItem.quantity += 1

      const newCart = {
        ...cartByIds,
        [itemId]: cartItem
      }

      return {
        ...state,
        cartByIds: newCart
      }
    }
    case ACTIONS.REMOVE_FROM_CART: {
      const { itemId } = action.payload
      const { cartByIds } = state

      const cartItem = cartByIds[itemId]

      if (!cartItem) {
        return state
      }

      cartItem.quantity -= 1

      const newCart = {
        ...cartByIds,
        [itemId]: cartItem
      }

      return {
        ...state,
        cartByIds: newCart
      }
    }
    default:
      return state
  }
}

export function createReduxStore() {
  const store = createStore(feedReducer)
  return store
}
