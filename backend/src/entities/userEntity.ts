export interface userEntity {
  pk_user: bigint;
  email: string;
  name?: string;
  password: string;
  created_at: Date;
  updated_at: Date;
}
