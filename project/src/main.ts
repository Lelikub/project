import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { AppModule } from './app.module';
import { join } from 'path';
import { ChimInterceptor } from './chim/chim.interceptor';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.useStaticAssets(join(__dirname, '..', 'public'));
  app.setBaseViewsDir(join(__dirname, '..', 'views'));
  app.useGlobalInterceptors(new ChimInterceptor());
  app.setViewEngine('hbs');
  app.enableShutdownHooks();
  await app.listen(3000);
  console.log(`Application is running on: ${await app.getUrl()}`)
}
bootstrap();
