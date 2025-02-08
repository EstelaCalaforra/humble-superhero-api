import './App.css'
import Form from './components/Form/Form'
import List from './components/List/List'
import useList from './components/List/useList'

function App() {
  const { superheroes, addSuperhero } = useList()

  return (
    <main>
      <h1>🦸Humble Superheroes Factory🦸🏻‍♀️</h1>
      <p>It's time to recruit the next hero who will join our incredible and humble team!</p>
      <Form addSuperhero={addSuperhero} />
      <List superheroes={superheroes} />
    </main>
  )
}

export default App

