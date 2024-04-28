import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module';

// patient
import { PatientController } from './controllers/patient.controller';
import { PatientService } from './services/patient.service';

// medical_center
import { MedicalCenterController } from './controllers/medical_center.controller';
import { MedicalCenterService } from './services/medical_center.service';

// authorization
import { AuthController } from './controllers/authentication.controller';
import { AuthService } from './services/authentication.service';

@Module({
  imports: [PrismaModule],
  controllers: [PatientController, MedicalCenterController, AuthController],
  providers: [PatientService, MedicalCenterService, AuthService],
})
export class AppModule {}
