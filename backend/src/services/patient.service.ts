import { patient } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';
import { Injectable, NotFoundException } from '@nestjs/common';

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
    if (!data || Object.keys(data).length === 0) {
      throw new Error('Data is missing or empty');
    }
    try {
      data.updated_at = new Date();
      const id_valid = await this.prisma.patient.update({
        where: {
          pk_patient: id,
        },
        data,
      });
      return id_valid;
    } catch (error) {
      throw new NotFoundException(`Error: not found Patient`);
    }
  }

  async deletePatient(id: number): Promise<patient> {
    try {
      const id_valid = await this.prisma.patient.delete({
        where: {
          pk_patient: id,
        },
      });
      return id_valid;
    } catch (error) {
      throw new NotFoundException(`Error: not found Patient`);
    }
  }
}
