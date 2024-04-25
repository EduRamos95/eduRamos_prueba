import { patient } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';
import { Injectable } from '@nestjs/common';

@Injectable()
export class PatientService {
  constructor(private prisma: PrismaService) {}

  async getAllPatients(): Promise<patient[]> {
    return this.prisma.patient.findMany();
  }

  async getPatientById(id: number): Promise<patient> {
    return this.prisma.patient.findUnique({
      where: {
        pk_patient: id,
      },
    });
  }

  async createPatient(data: patient): Promise<patient> {
    return this.prisma.patient.create({
      data,
    });
  }

  async updatePatient(id: number, data: patient): Promise<patient> {
    return this.prisma.patient.update({
      where: {
        pk_patient: id,
      },
      data,
    });
  }

  async deletePatient(id: number): Promise<patient> {
    return this.prisma.patient.delete({
      where: {
        pk_patient: id,
      },
    });
  }
}
