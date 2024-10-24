export class DataRecord {
  constructor(
    public recordID: number,
    public datasetID: number,
    public data: any,  // JSON
    public createdAt: Date
  ) {}

  // Méthode pour récupérer un champ spécifique du JSON
  getFieldValue(fieldName: string): any {
    return this.data[fieldName];
  }

  // Méthode pour ajouter un champ dans le JSON
  addField(fieldName: string, value: any): void {
    this.data[fieldName] = value;
  }
}
