import { Controller, Get, Post, Body } from '@nestjs/common'
import { Superheroe } from './types'

// Define a controller to handle requests to the API
@Controller('superheroes')
export class SuperheroesController {
  // Array to store the superhero team
  private superHeroesTeam: Superheroe[] = []

  // Handle GET requests to return the superhero sorted by descending humilityScore
  @Get()
  sendSuperheroe() {
    return this.superHeroesTeam.sort(
      (a, b) => b.humilityScore - a.humilityScore
    )
  }

  // Handle POST requests to add a new superhero
  @Post()
  addSuperheroe(@Body() body: Superheroe) {
    // Create a new superhero object from the request body
    const newHero: Superheroe = {
      name: body.name,
      superpower: body.superpower,
      humilityScore: body.humilityScore
    }

    // Push the new superhero to the superheroes array
    this.superHeroesTeam.push(newHero)

    return {
      message: 'Superhero added successfully.',
      superhero: newHero
    }
  }
}
