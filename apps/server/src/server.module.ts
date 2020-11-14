import { Module } from '@nestjs/common';
import { ServerController } from './server.controller';

@Module({
  imports: [],
  controllers: [ServerController],
  providers: [],
})
export class ServerModule {}
