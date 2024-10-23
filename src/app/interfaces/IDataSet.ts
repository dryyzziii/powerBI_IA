import { IUser } from "./IUser";

export interface IDataset {
  datasetID: number;
  userID: number;  // Foreign key to User
  user?: IUser;     // Optionally, the associated User object can be populated
  name: string;
  description?: string;
  sourceType: string;  // CSV, API, Manual, etc.
  createdAt: Date;
  updatedAt: Date;
  status: string;  // en cours, traité, erreur
}
