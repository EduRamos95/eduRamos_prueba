import { AuthExp } from 'src/dtos/userDto';
import { userEntity } from 'src/entities/userEntity';

export function userConvDto(userEntity: userEntity): AuthExp {
  const userDto: AuthExp = {
    id: Number(userEntity.pk_user),
    email: userEntity.email,
    name: userEntity.name ?? '',
  };

  return userDto;
}
