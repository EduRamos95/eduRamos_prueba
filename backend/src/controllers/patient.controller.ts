import {
  BadRequestException,
  Body,
  Controller,
  Delete,
  Get,
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
    if (!result) throw new BadRequestException('Patient does not exist');
    const patientFound = { ...result, pk_patient: Number(result.pk_patient) };
    return patientFound;
  }

  @Post()
  async createTask(@Body() data: patient) {
    const result = await this.patientService.createPatient(data);
    // Convertir el BigInt a un número antes de enviar la respuesta
    const patient = { ...result, pk_patient: Number(result.pk_patient) };
    return patient;
  }

  @Put(':id')
  async updatePatient(@Param('id') id: string, @Body() data: patient) {
    try {
      const result = await this.patientService.updatePatient(Number(id), data);
      const updPatient = { ...result, pk_patient: Number(result.pk_patient) };
      return updPatient;
    } catch (error) {
      throw new BadRequestException('Patient does not exist');
    }
  }

  @Delete(':id')
  async deletePatient(@Param('id') id: string) {
    try {
      const result = await this.patientService.deletePatient(Number(id));
      const delPatient = { ...result, pk_patient: Number(result.pk_patient) };
      return delPatient;
    } catch (error) {
      throw new BadRequestException('Patient does not exist');
    }
  }
}
