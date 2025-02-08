import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'

async function bootstrap() {
  try {
    // Create a new NestJS application using the AppModule
    const app = await NestFactory.create(AppModule)
    // Enable Cross-Origin Resource Sharing (CORS) to allow frontend applications hosted at origin to make requests to the backend
    app.enableCors({
      origin: 'http://localhost:5173',
      methods: 'GET,POST,PUT,DELETE',
      allowedHeaders: 'Content-Type'
    })

    // Starts the server and listens on the provided port (default port 3000)
    await app.listen(process.env.PORT ?? 3000)

    console.log('Server started successfully.')
  } catch (error) {
    console.error('Error during server startup:', error)
  }
}

bootstrap()
