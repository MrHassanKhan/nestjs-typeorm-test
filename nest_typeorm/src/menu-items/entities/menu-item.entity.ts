/* eslint-disable prettier/prettier */
import { Column, Entity, PrimaryGeneratedColumn, CreateDateColumn, Tree, TreeChildren, TreeParent, ManyToOne, OneToMany, JoinColumn, JoinTable} from 'typeorm';

@Entity()
export class MenuItem {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  url: string;

  @Column()
  parentId: number;

  @CreateDateColumn()
  createdAt: string;

  // @TreeParent()
  // parent: MenuItem

  // @TreeChildren()
  // children: MenuItem[]

  @ManyToOne(type => MenuItem, menuItem => menuItem.children)
  // @TreeParent()
  parent: MenuItem

  @OneToMany(type => MenuItem, menuItem => menuItem.parent)
  // @TreeChildren()
  children: MenuItem[]
}
