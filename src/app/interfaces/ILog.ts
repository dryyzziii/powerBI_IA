import { IDataset } from "./IDataSet";
import { IUser } from "./IUser";

export interface ILog {
  logID: number;
  datasetID: number;  // Foreign key to Dataset
  dataset?: IDataset;  // Optionally, the associated Dataset object
  userID: number;     // Foreign key to User
  user?: IUser;        // Optionally, the associated User object
  message: string;
  logType: string;    // Info, Erreur, Avertissement, etc.
  createdAt: Date;
}
