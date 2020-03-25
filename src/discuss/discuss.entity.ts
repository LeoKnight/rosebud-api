import { Column, Entity, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, VersionColumn } from 'typeorm';

@Entity()
export class Discuss {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 5000 })
  content: string;

  @Column('text')
  articleId: string;

  @Column({
    type:"simple-array",
  })
  reply: string[];

  @CreateDateColumn()
  createTime: Date;

  @UpdateDateColumn()
  updateTime: Date;

  @VersionColumn()
  version: number;

}
