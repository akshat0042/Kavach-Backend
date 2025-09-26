import {  Types } from "mongoose";

export default interface userToken{
    _id:string;
    super: string;
    createdAt:Date;
    updatedAt:Date;
    __v?:number;
}