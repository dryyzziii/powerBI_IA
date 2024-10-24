import { IDataset } from "./IDataSet";
import { IUser } from "./IUser";

export interface IPrediction {
  predictionID: number;
  datasetID: number;  // Foreign key to Dataset
  dataset?: IDataset;  // Optionally, the associated Dataset object
  userID: number;     // Foreign key to User
  user?: IUser;        // Optionally, the associated User object
  predictionResult: any;  // JSON object representing the prediction result
  createdAt: Date;
}
