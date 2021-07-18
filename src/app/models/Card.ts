import { BaseEntity, Column, CreateDateColumn, Entity, PrimaryColumn, UpdateDateColumn } from 'typeorm';
import { v4 } from 'uuid';

@Entity()
export class Cards extends BaseEntity {
  @PrimaryColumn()
  readonly id: string;

  @Column()
  titulo: string;

  @Column()
  conteudo: string;

  @Column()
  lista: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  constructor() {
    super();

    if (!this.id) this.id = v4();
  }
}
