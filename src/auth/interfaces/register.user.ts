import { User } from "../entities/user.entity";



export interface RegisterUser{

  user:User;
  token:string;
}