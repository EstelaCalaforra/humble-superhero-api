// Define the type of the form state
interface FormState {
    name: string
    superpower: string
    humilityScore: string
  }

// Define the types of actions that can be dispatched to update the form state
interface Action {
  type: 'SET_NAME' | 'SET_SUPERPOWER' | 'SET_HUMILITY' | 'RESET_FORM'
  payload?: string // Holds the new value for the corresponding field
  }

// Initialize the form state with empty values
const initialState: FormState = {
  name: '',
  superpower: '',
  humilityScore: ''
}

// Reducer function update state with the new value from the action payload
function formReducer(state: FormState, action: Action): FormState {
  switch (action.type) {
  case 'SET_NAME':
    return { ...state, name: action.payload! }
  case 'SET_SUPERPOWER':
    return { ...state, superpower: action.payload! }
  case 'SET_HUMILITY':
    return { ...state, humilityScore: action.payload! }
  case 'RESET_FORM':
    return initialState
  default:
    return state
  }
}

export { initialState, formReducer }