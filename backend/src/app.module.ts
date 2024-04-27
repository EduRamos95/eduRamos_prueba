import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module';

// patient
import { PatientController } from './controllers/patient.controller';
import { PatientService } from './services/patient.service';

// medical_center
import { MedicalCenterController } from './controllers/medical_center.controller';
import { MedicalCenterService } from './services/medical_center.service';

@Module({
  imports: [PrismaModule],
  controllers: [PatientController, MedicalCenterController],
  providers: [PatientService, MedicalCenterService],
})
export class AppModule {}
