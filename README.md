# NestJS Kafka-based Microservices

Please refer to https://github.com/nestjs/nest/issues/5701

## How to reproduce the bug ?

```bash
$ docker-compose up
```

```bash
$ curl http://localhost:3000/count/5
["i-1","i-2","i-3","i-5"]
```

```bash
$ curl http://localhost:3000/count/10
["i-1","i-2","i-3","i-4","i-5","i-6","i-7","i-8","i-10"]
```
