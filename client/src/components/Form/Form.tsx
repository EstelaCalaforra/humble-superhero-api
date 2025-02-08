import useForm from './useForm'
import './Form.css'

// Define the type of the prop function to add a new superhero to the list 
type Props = {
  addSuperhero: (newSuperhero: { name: string, superpower: string, humilityScore: string }) => void
}

const Form = ({ addSuperhero }: Props) => {
  const { state, handleChange, handleSubmit, error, successMessage } = useForm()

  return (
    <form onSubmit={(e) => handleSubmit(e, addSuperhero)}>
      <div>
        <label htmlFor="name">Epic name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={state.name}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <label htmlFor="superpower">Superpower:</label>
        <input
          type="text"
          id="superpower"
          name="superpower"
          value={state.superpower}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <label htmlFor="humilityScore">Humility score:</label>
        <input
          type="text"
          id="humilityScore"
          name="humilityScore"
          value={state.humilityScore}
          onChange={handleChange}
          required
        />
      </div>

      {/* Show error message if validation fails */}
      {error && <p style={{ color: 'red' }}>{error}</p>}

      {/* Show success message if validation succeds */}
      {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}

      <button type="submit">Create</button>
    </form>
  )
}

export default Form