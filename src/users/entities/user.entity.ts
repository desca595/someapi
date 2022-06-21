import { ApiProperty } from '@nestjs/swagger';

const isRequired = false;

export class City {
  @ApiProperty({ required: isRequired })
  zipCode: number;
}

export class AddressItem {
  @ApiProperty({ type: City, required: isRequired })
  city: City;
}

export class User {
  @ApiProperty({ required: isRequired })
  name: string;
  @ApiProperty({ required: isRequired })
  bithDate: Date;
  @ApiProperty({ required: isRequired })
  email: string;
  @ApiProperty({ required: isRequired })
  phoneNumber: string;
  @ApiProperty({ type: AddressItem, required: isRequired })
  home: AddressItem;
  @ApiProperty({ type: AddressItem, required: isRequired })
  work: AddressItem;
}
