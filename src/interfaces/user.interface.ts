import { Document } from "mongoose";
import userToken from "./userToken.interface";

export interface User extends Document {
  name: string;
  email: string;
  createdAt: Date;
  updatedAt: Date;
  __v?: number;
  tokens?: userToken[];
  isVerified?:boolean;
}
}