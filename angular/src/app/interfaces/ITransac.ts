export interface ITransac{
  id?: string;
  transaction: string;
  email: string;
  password: string;
  created_at?: string;
  amount: number;
  type: string;
}