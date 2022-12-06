
export const INCREMENT = "INCREMENT"
export const DECREMENT = "DECREMENT"
export const ADD_TODO = "ADD_TODO"
export const REMOVE_LAST_TODO = "REMOVE_LAST_TODO"

const initialState = {
    count: 0,
    todos: ['take a video', 'mount video', 'talk about toolkit']
}

export const mainReducer = (state = initialState, action) => {
    switch (action.type) {

        case INCREMENT:
            return {
                ...state,
                cash: state.count + 1
            }
        case DECREMENT:
            return {
                ...state,
                cash: state.count - 1
            }

        case ADD_TODO:
            return {
                ...state,
                todos: [...state.todos, action.payload]
            }

        case REMOVE_LAST_TODO:
            return {
                ...state,
                todos: [...state.todos.slice(0, state.todos.length - 1)]
            }


        default:
            return state
    }
}

export const increment = () => ({ type: INCREMENT })
export const decrement = () => ({ type: DECREMENT })
export const addTodo = (payload) => ({ type: ADD_TODO, payload })
export const removeLastTodo = () => ({ type: REMOVE_LAST_TODO })
