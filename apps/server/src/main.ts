import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { Transport } from '@nestjs/microservices/enums';
import { MicroserviceOptions } from '@nestjs/microservices/interfaces/microservice-configuration.interface';
import { v4 as uuid } from 'uuid';
import { ServerModule } from './server.module';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    ServerModule,
    {
      transport: Transport.KAFKA,
      options: {
        client: {
          brokers: ['kafka:9093'],
        },
        consumer: {
          groupId: `user.${uuid()}`,
        },
      },
    },
  );

  await app.listen(() => Logger.log('Microservice is listening'));
}
bootstrap();
