import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import * as cookieParser from "cookie-parser";
import * as dotenv from "dotenv";

async function bootstrap() {
  dotenv.config();
  const app = await NestFactory.create(AppModule);
  app.use(cookieParser()); // CSRF 토큰을 위해 쿠키 파서 사용
  app.enableCors();
  await app.listen(7778);
}
bootstrap();
