import { Controller, Get, Inject, OnModuleInit, Param } from '@nestjs/common';
import { ClientKafka } from '@nestjs/microservices';
import { Observable } from 'rxjs';
import { toArray } from 'rxjs/operators';
import { SERVER } from './client.constants';

@Controller()
export class ClientController implements OnModuleInit {
  @Inject(SERVER)
  protected readonly serverClient: ClientKafka;

  async onModuleInit() {
    this.serverClient.subscribeToResponseOf('count');
    await this.serverClient.connect();
  }

  @Get('/count/:max')
  count(@Param('max') max: string): Observable<number[]> {
    return this.serverClient
      .send<number>('count', { max: Number(max) })
      .pipe(toArray());
  }
}
