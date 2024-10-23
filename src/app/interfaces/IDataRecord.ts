import { IDataset } from "./IDataSet";

export interface IDataRecord {
  recordID: number;
  datasetID: number;  // Foreign key to Dataset
  dataset?: IDataset;  // Optionally, the associated Dataset object can be populated
  data: any;          // JSON format for storing the actual data
  createdAt: Date;
}
