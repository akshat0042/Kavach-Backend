import { ObjectId } from "mongoose";

export default interface AuditLog {
  action: string; // e.g., "Crime Verified", "User Deactivated"
  performedBy: ObjectId; // User who performed the action
  targetResource: string; // e.g., "CrimeReport", "User"
  targetId?: ObjectId; // ID of the affected document
}
