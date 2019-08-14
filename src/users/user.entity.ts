import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

enum Sex {
  MALE = 'MALE',
  FEMALE = 'FEMALE',
  OTHER = 'OTHER',
  UNKOWN = 'UNKOWN',
}

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 500 })
  name: string;

  @Column({ length: 20 })
  password: string;

  @Column(
    {
      type: 'enum',
      enum: Sex,
      default: Sex.UNKOWN,
    },
  )
  sex: Sex;

  @Column(
    {
      type: 'boolean',
      default : false,
    },
  )
  deleted: boolean;

  @Column('text')
  description: string;

}
