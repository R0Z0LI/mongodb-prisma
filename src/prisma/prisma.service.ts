import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient {
  constructor() {
    super({
      datasources: {
        db: {
          url: 'mongodb://Rozoli2000:Rozoli2000@localhost:2717/mongoDB-prisma?authSource=admin',
        },
      },
    });
  }
}
