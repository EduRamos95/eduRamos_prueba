import {
  BadRequestException,
  Controller,
  Get,
  NotFoundException,
  Param,
} from '@nestjs/common';
import { medicalCenterconvDto } from 'src/convertDto/medicalCenterConvert';
import { medicalCenterEntity } from 'src/entities/medicalCenterEntity';

/* 
Body,
Delete,
HttpCode,
Post,
Put,
*/

// import { medical_center } from '@prisma/client';
import { MedicalCenterService } from 'src/services/medical_center.service';

@Controller('centrosmedicos')
export class MedicalCenterController {
  constructor(private readonly medicalCenterService: MedicalCenterService) {}

  @Get()
  async getAllMedicalCenters() {
    const result = await this.medicalCenterService.getAllMedicalCenters();
    // Convertir los BigInt a números antes de enviar la respuesta
    const medicalCenterDtos = result.map(
      (medicalCenter: medicalCenterEntity) => ({
        ...medicalCenterconvDto(medicalCenter),
      }),
    );
    return medicalCenterDtos;
  }

  @Get(':id')
  async getMedicalCenterById(@Param('id') id: string) {
    try {
      const result = await this.medicalCenterService.getMedicalCenterById(
        Number(id),
      );

      if (!result)
        throw new NotFoundException(`Error: not found medical_center`);

      const medicalCenterFound = {
        ...medicalCenterconvDto(result),
      };

      return medicalCenterFound;
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw error; // Propaga la excepción NotFoundException
      } else {
        throw new BadRequestException(`Error: medical_center`);
      }
    }
  }
}
