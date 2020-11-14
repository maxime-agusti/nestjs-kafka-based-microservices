import { Controller, Logger } from '@nestjs/common';
import { EventPattern, MessagePattern } from '@nestjs/microservices';
import { from, Observable } from 'rxjs';

@Controller()
export class ServerController {
  @MessagePattern('count')
  count(message: { value: { max: number } }): Observable<number> {
    const numbers = [];

    for (let i = 1; i <= message.value.max; i++) {
      numbers.push(`i-${i}`);
    }

    return from(numbers);
  }

  @EventPattern('count.reply')
  logReply(message: { value: number }): void {
    Logger.log(message.value);
  }
}
