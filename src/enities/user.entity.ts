import { BaseEntity } from 'src/common/base.entity';
import { Column, Entity } from 'typeorm';

@Entity('users')
export class Photo extends BaseEntity {
  @Column()
  fullName: string;

  @Column({ unique: true })
  username: string;

  @Column()
  password: string;
}
