import { medicalCenterDto } from 'src/dtos/medicalCenterDto';
import { medicalCenterEntity } from 'src/entities/medicalCenterEntity';
import { formateDate } from 'src/utils/formatTime';

export function medicalCenterconvDto(
  medicalEntity: medicalCenterEntity,
): medicalCenterDto {
  const medicalCenter_Dto: medicalCenterDto = {
    id: Number(medicalEntity.pk_medical_center),
    name: medicalEntity.name,
    address: medicalEntity.address,
    created_at: formateDate(medicalEntity.created_at),
  };

  return medicalCenter_Dto;
}
