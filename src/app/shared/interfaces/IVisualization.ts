import { IDataset } from "./IDataSet";
import { IUser } from "./IUser";

export interface IVisualization {
  visualizationID: number;
  userID: number;     // Foreign key to User
  user?: IUser;        // Optionally, the associated User object
  datasetID: number;  // Foreign key to Dataset
  dataset?: IDataset;  // Optionally, the associated Dataset object
  chartType: string;  // Bar, Line, Pie, etc.
  chartData: any;     // JSON object representing the chart data
  createdAt: Date;
}
