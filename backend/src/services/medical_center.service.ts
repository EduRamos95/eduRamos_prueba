import { medical_center } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';
import { Injectable } from '@nestjs/common';

@Injectable()
export class MedicalCenterService {
  constructor(private prisma: PrismaService) {}

  async getAllMedicalCenters(): Promise<medical_center[]> {
    return this.prisma.medical_center.findMany();
  }

  async getMedicalCenterById(id: number): Promise<medical_center> {
    return this.prisma.medical_center.findUnique({
      where: {
        pk_medical_center: id,
      },
    });
  }
}
