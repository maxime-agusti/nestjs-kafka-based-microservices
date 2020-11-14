import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { v4 as uuid } from 'uuid';
import { SERVER } from './client.constants';
import { ClientController } from './client.controller';

@Module({
  imports: [
    ClientsModule.register([
      {
        transport: Transport.KAFKA,
        name: SERVER,
        options: {
          client: {
            brokers: ['kafka:9093'],
          },
          consumer: {
            groupId: `user.${uuid()}`,
          },
        },
      },
    ]),
  ],
  controllers: [ClientController],
})
export class ClientModule {}
