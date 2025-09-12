import mongoose from "mongoose";

class Database {
  private static instance: Database;
  private isConnected = false;

  private constructor() {}

  public static getInstance(): Database {
    if (!Database.instance) {
      Database.instance = new Database();
    }
    return Database.instance;
  }

  public async connect(): Promise<void> {
    if (this.isConnected) {
      console.log("Using existing MongoDB connection.");
      return;
    }



  public getConnection(): typeof mongoose {
    if (!this.isConnected) {
      throw new Error("MongoDB not connected. Call connect() first.");
    }
    return mongoose;
  }
}

export default Database;
