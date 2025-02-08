# Humble Superhero API 🦸🏻‍♀️
Welcome to Humble Superhero API, your solution to recruit the perfect humble team of superheroes!

**Technologies:** NestJS, React

## API Endpoints
- ### Get all superheroes

GET '/superheroes'

Response:  
```bash
[
  {
    "name": "Humbleman",
    "superpower": "Being the most humble man in the world (yeah that's it, he truly is humble)",
    "humilityScore": 10
  }
]
```

- ### Add a superheroe

POST '/superheroes'

Response:
```bash
{
    "message": "Superhero added successfully.",
    "superhero": {
        "name": "Humbleman",
        "superpower": "Being the most humble man in the world (yeah that's it, he truly is humble)",
        "humilityScore": 10
    }
}
```

## Further expansion of the API through Teamwork 🤝

To take this API further, the team can break down the responsibilities into distinct roles.
- **Frontend Developer**: One partner could focus on developing the frontend, ensuring that the user interface for interacting with the Superhero API is smooth, using React or another modern framework.
- **Backend Developer**: Another partner could be responsible for extending the backend API. This includes implementing and optimizing the API endpoints. One backend developer can be tasked with creating new API endpoints. For example, building endpoints to filter superheroes based on their humility scores (greater than or less than certain score), generating random superhero names or implementing pagination for large superhero datasets. It would also be a good idea to design a database, such as PostgreSQL and a toolkit like Prisma ORM ensuring powerful data handling. Adding authenthication reliying in AWS Cognito would also improve the API.
- **Scaling Testing**: As the application grows, it will be crucial to expand the test coverage, coding unit tests for new and existing endpoints (edge cases, validating inputs, ect).
- **Error Handling**: Another important task is to improve the error handling across the API.
- **Team Communication**: We can also regularly review each other's code, especially when it comes to new features, helping us keep the codebase working smoothly.

## If I had more time ⏰
If I had more time, I would add features like user authentication so that users could manage their own superheroes while also setting a database to store the superheroes rather than storing them in an array. I would also add more filtering options based on other attributes (like type of superpower). I’d work on improving error handling, adding more detailed messages and custom error codes. I would also improve the UI to make it more user-friendly. Finally, If I had more time, I would ensure that I follow the best practices for structuring the API and have a cleaner code since with frameworks like React and NestJS, it's important to organize the code into clear modules, services, controllers, ect for scalability and maintainability.
