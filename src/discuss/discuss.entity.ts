import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Discuss {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 5000 })
  content: string;

  @Column('text')
  articleId: string;

  @Column("simple-array")
  reply: string[];

}
