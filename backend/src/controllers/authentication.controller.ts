import {
  BadRequestException,
  Body,
  Controller,
  HttpCode,
  NotFoundException,
  Post,
} from '@nestjs/common';
import { userConvDto } from 'src/convertDto/userConvert';
import { Auth, AuthExp } from 'src/dtos/userDto';
import { userEntity } from 'src/entities/userEntity';
import { AuthService } from 'src/services/authentication.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  @HttpCode(200)
  async createPatient(@Body() data: Auth): Promise<AuthExp> {
    if (!data || !data.email || !data.password)
      throw new BadRequestException('Error no data');
    const result: userEntity = await this.authService.getUserByEmail(
      data.email,
    );
    if (!result || result.password != data.password)
      throw new NotFoundException('User not Found');
    const userDto: AuthExp = { ...userConvDto(result) };
    return userDto;
  }
}
