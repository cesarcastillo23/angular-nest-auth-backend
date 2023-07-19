import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { log } from 'console';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  //HABILITAR EL CORS
  app.enableCors()

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist:true,
      forbidNonWhitelisted:true,
    })
  )

  const PORT=process.env.PORT ?? 3000
  console.log(`App corriendo en puerto :${PORT}`);
  
  await app.listen(PORT);
}
bootstrap();
