import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // Multi-tenant, RBAC, CORS, etc. setup here
  await app.listen(3000);
}
bootstrap();
