import { Superhero } from "../Form/types"

// Define the type (array of superheroes) of the props 
type Props = {
  superheroes: Array<Superhero>
}

const List = ({ superheroes }: Props) => {
  return (
    <div className='list-container'>
      <h2>Superheroes Team</h2>
      <ul>
        {superheroes.length > 0 ? (
          // List each superheroe in the array
          superheroes.map((superhero, index) => (
            <li key={index}>
              <h3>{superhero.name}</h3>
              <strong>Superpower</strong>
              <p>{superhero.superpower}</p>
              <strong>Humility</strong>
              <p className="humility">{superhero.humilityScore}</p>
            </li>
          ))
        ) : (
          // Show a message when there are no superheroes results
          <p>There are no superheroes yet in the team. Create one!</p>
        )}
      </ul>
    </div>
  )
}

export default List
