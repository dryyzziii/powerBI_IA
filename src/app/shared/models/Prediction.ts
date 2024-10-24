export class Prediction {
  constructor(
    public predictionID: number,
    public datasetID: number,
    public userID: number,
    public predictionResult: any,  // JSON
    public createdAt: Date
  ) {}

  // Méthode pour formater le résultat de la prédiction
  formatPrediction(): string {
    return JSON.stringify(this.predictionResult, null, 2);
  }

  // Méthode pour ajouter un champ au résultat de la prédiction
  addResultField(fieldName: string, value: any): void {
    this.predictionResult[fieldName] = value;
  }
}
