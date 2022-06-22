import { ApiProperty, PartialType } from '@nestjs/swagger';
import { AddressItem } from '../entities/user.entity';
import { CreateUserDto } from './create-user.dto';

export const required = false;

export class UpdateUserDto extends PartialType(CreateUserDto) {
  @ApiProperty({ type: AddressItem, required })
  home: AddressItem;
  @ApiProperty({ type: AddressItem, required })
  work: AddressItem;
}
