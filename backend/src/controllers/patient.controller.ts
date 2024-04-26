import {
  BadRequestException,
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  NotFoundException,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { patient } from '@prisma/client';
import { PatientService } from 'src/services/patient.service';

@Controller('pacientes')
export class PatientController {
  constructor(private readonly patientService: PatientService) {}

  @Get()
  async getAllTasks() {
    const patients = await this.patientService.getAllPatients();
    // Convertir los BigInt a números antes de enviar la respuesta
    const patientsWithNumericIds = patients.map((patient) => ({
      ...patient,
      pk_patient: Number(patient.pk_patient),
    }));
    return patientsWithNumericIds;
  }

  @Get(':id')
  async getPatientById(@Param('id') id: string) {
    const result = await this.patientService.getPatientById(Number(id));
    if (!result) throw new NotFoundException('Patient does not exist');
    const patientFound = { ...result, pk_patient: Number(result.pk_patient) };
    return patientFound;
  }

  @Post()
  async createPatient(@Body() data: patient) {
    try {
      const result = await this.patientService.createPatient(data);
      // Convertir el BigInt a un número antes de enviar la respuesta
      const patient = { ...result, pk_patient: Number(result.pk_patient) };
      return patient;
    } catch (error) {
      throw new BadRequestException(`Error data: created Patient`);
    }
  }

  @Put(':id')
  @HttpCode(204)
  async updatePatient(@Param('id') id: string, @Body() data: patient) {
    try {
      await this.patientService.updatePatient(Number(id), data);
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw error; // Propaga la excepción NotFoundException
      } else {
        throw new BadRequestException(`Error validation data: updated patient`);
      }
    }
  }

  @Delete(':id')
  @HttpCode(204)
  async deletePatient(@Param('id') id: string) {
    try {
      await this.patientService.deletePatient(Number(id));
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw error; // Propaga la excepción NotFoundException
      } else {
        throw new BadRequestException(`Error: delete patient`);
      }
    }
  }
}
