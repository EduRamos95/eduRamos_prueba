// import { Module } from '@nestjs/common';
// import { AppController } from './app.controller';
// import { AppService } from './app.service';

// @Module({
//   imports: [],
//   controllers: [AppController],
//   providers: [AppService],
// })
// export class AppModule {}

import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module';
import { PatientController } from './controllers/patient.controller';
import { PatientService } from './services/patient.service';

@Module({
  imports: [PrismaModule],
  controllers: [PatientController],
  providers: [PatientService],
})
export class AppModule {}
