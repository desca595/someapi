import { ApiProperty } from '@nestjs/swagger';

export const isRequired = false;

export class CreateUserDto {
  @ApiProperty({ required: isRequired })
  name: string;
  @ApiProperty({ required: isRequired })
  bithDate: Date;
  @ApiProperty({ required: isRequired })
  email: string;
  @ApiProperty({ required: isRequired })
  phoneNumber: string;
}
