import { Test, TestingModule } from '@nestjs/testing'
import { SuperheroesController } from './superheroes.controller'

describe('SuperheroesController', () => {
  let controller: SuperheroesController

  // Before each test, set up the testing module and initialize the controller
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SuperheroesController]
    }).compile()

    // Retrieve an instance of the controller
    controller = module.get<SuperheroesController>(SuperheroesController)
  })

  // Test case #1
  it('should return superheroes sorted by humilityScore (desc)', () => {
    controller.addSuperheroe({
      name: 'Hero One',
      superpower: 'Flight',
      humilityScore: 8
    })
    controller.addSuperheroe({
      name: 'Hero Two',
      superpower: 'Invisibility',
      humilityScore: 10
    })

    const superheroes = controller.sendSuperheroe()
    // Ensure there are at least two superheroes in the list (the ones mocked)
    expect(superheroes.length).toBeGreaterThanOrEqual(2)
    // Verify that the first superhero has a humility score greater than or equal to the second one (are sorted)
    expect(superheroes[0].humilityScore).toBeGreaterThanOrEqual(
      superheroes[1].humilityScore
    )
  })
})
