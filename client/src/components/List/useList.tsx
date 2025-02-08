import { useEffect, useState } from 'react'
import { getSuperheroData } from '../../services/superheroeService'
import { Superhero } from '../Form/types'

const useList = () => {
  const [superheroes, setSuperheroes] = useState<Array<Superhero>>([])

  // Function to add a new superhero sorted in descending order based on humilityScore
  const addSuperhero = (newSuperhero: Superhero) => {
    setSuperheroes(prevSuperheroes => {
      const updatedSuperheroes = [...prevSuperheroes, newSuperhero]
      return updatedSuperheroes.sort((a, b) => Number(b.humilityScore) - Number(a.humilityScore))
    })
  }

  // Get superheroes from the API GET endpoint when the component is mounted
  useEffect(() => {
    const fetchSuperheroes = async () => {
      try {
        const data = await getSuperheroData()
        setSuperheroes(data)
      } catch (error) {
        console.error('Error fetching superheroes:', error)
      }
    }

    fetchSuperheroes()
  }, [])

  return { superheroes, addSuperhero }
}

export default useList
