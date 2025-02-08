import { useReducer, useState } from 'react'
import { sendSuperheroData } from '../../services/superheroeService'
import { formReducer, initialState } from './formReducer'

const useForm = () => {
  const [state, dispatch] = useReducer(formReducer, initialState)
  const [error, setError] = useState<string | null>(null)
  const [successMessage, setSuccessMessage] = useState<string | null>(null)

  // Function to handle changes in input fields and update them
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target

    switch (name) {
    case 'name':
      dispatch({ type: 'SET_NAME', payload: value })
      break
    case 'superpower':
      dispatch({ type: 'SET_SUPERPOWER', payload: value })
      break
    case 'humilityScore':
      dispatch({ type: 'SET_HUMILITY', payload: value })
      break
    default:
      break
    }
  }

  // Function to validate that humilityScore it's a number between 1 and 10
  const validateHumility = (humilityScore: string): boolean => {
    const score = Number(humilityScore)
    return !isNaN(score) && humilityScore.trim() !== '' && score >= 1 && score <= 10
  }

  // Function to handle form submission
  const handleSubmit = async (e: React.FormEvent, addSuperhero: (newSuperhero: { name: string, superpower: string, humilityScore: string }) => void) => {
    e.preventDefault()

    if (!validateHumility(state.humilityScore)) {
      setError('Humility score must be a valid number between 1 and 10.')
      return
    }

    // Clear any previous error messages
    setError(null)

    try {
      // Send superhero data to the API POST endpoint
      const response = await sendSuperheroData(state.name, state.superpower, state.humilityScore)
      setSuccessMessage('A new superhero joined the team! 💫')
      const newSuperhero = {
        name: state.name,
        superpower: state.superpower,
        humilityScore: state.humilityScore
      }

      // Add the new superhero to the list
      addSuperhero(newSuperhero)

      // Clear form fields
      dispatch({ type: 'RESET_FORM' })
    } catch (error) {
      setError('There was an error submitting the form.')
      console.error('Error:', error)
    }
  }

  return {
    state,
    handleChange,
    handleSubmit,
    error,
    successMessage
  }
}

export default useForm