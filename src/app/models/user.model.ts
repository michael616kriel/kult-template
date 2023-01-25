import { Column, Entity } from 'typeorm';

@Entity()
export default class User {
  @Column({ primary: true })
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  filename: string;

  @Column()
  views: number;

  @Column()
  isPublished: boolean;
}
