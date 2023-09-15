import {PrismaClient} from '@prisma/client';

export class PrismaDb {
  prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }
}
