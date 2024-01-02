import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from 'typeorm'

export enum Types {
  CREDIT='credit',
  DEBIT='debit'
}

@Entity()
export class Transac {
  @PrimaryGeneratedColumn()
  id: string;

  @Column({ name: 'transaction' })
  transaction: string;

  @Column({ name: 'email' })
  email: string;
  
  @Column({ name: 'password' })
  password: string;

  @CreateDateColumn({ name: 'created_at' })
  created_at: string;

  @Column({ name: 'amount' })
  amount: number;

  @Column({ name: 'type' })
  type: Types
}
