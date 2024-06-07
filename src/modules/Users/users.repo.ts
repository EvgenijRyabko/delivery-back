import { Injectable } from '@nestjs/common';
import { User } from '@prisma/client';
import { PrismaService } from 'src/database/prisma.service';

export interface IUsersRepo {
  getAllUsers(): Promise<User[]>;

  createUser(user: User): Promise<void>;
}

@Injectable()
export class UsersRepo {
  constructor(private readonly prisma: PrismaService) {}

  async getAllUsers(): Promise<User[]> {
    return await this.prisma.user.findMany();
  }

  async createUser(user: User): Promise<void> {
    await this.prisma.user.create({ data: user });
  }
}
