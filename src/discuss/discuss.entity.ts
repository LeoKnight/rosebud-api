import { Column, Entity, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, VersionColumn } from 'typeorm';

@Entity()
export class Discuss {
  @PrimaryGeneratedColumn()
  id: string;

  @Column({
    type:'text',
    nullable:true
  })
  replyId: string

  @Column({ length: 5000 })
  content: string;

  @Column('text')
  articleId: string;

  @Column({
    type:"simple-array",
  })
  reply: string[];

  replyEtities: Discuss[]

  @Column({
    type:"bit",
    default:false
  })
  isHtml: Boolean;

  @Column({
    type:"bit",
    default:false
  })
  deleted: Boolean;

  @CreateDateColumn()
  createTime: Date;

  @UpdateDateColumn()
  updateTime: Date;

  @VersionColumn()
  version: number;

}
