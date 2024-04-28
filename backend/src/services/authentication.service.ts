import { users } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
  constructor(private prisma: PrismaService) {}

  async getUserByEmail(email: string): Promise<users | null> {
    return this.prisma.users.findUnique({
      where: {
        email: email,
      },
    });
  }
}
