// Function to fetch API POST endpoint
export const sendSuperheroData = async (name: string, superpower: string, humilityScore: string) => {
  try {
    const response = await fetch('http://localhost:3000/superheroes', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name,
        superpower,
        humilityScore
      })
    })

    if (!response.ok) {
      throw new Error('Request failed')
    }

    const data = await response.json()
    console.log({ data })
  } catch (error) {
    console.error('Error:', error)
    throw new Error('There was an error submitting the form.')
  }
}

// Function to fetch API GET endpoint
export const getSuperheroData = async () => {
  try {
    const response = await fetch('http://localhost:3000/superheroes', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })

    if (!response.ok) {
      throw new Error('Request failed')
    }

    const data = await response.json()
    console.log({ data })
    return data
  } catch (error) {
    console.error('Error:', error)
    throw new Error('There was an error fetching the superhero data.')
  }
}