export class Visualization {
  constructor(
    public visualizationID: number,
    public userID: number,
    public datasetID: number,
    public chartType: string,
    public chartData: any,  // JSON
    public createdAt: Date
  ) {}

  // Méthode pour mettre à jour le type de graphique
  updateChartType(newType: string): void {
    this.chartType = newType;
  }

  // Méthode pour obtenir un aperçu du JSON des données du graphique
  previewChartData(): string {
    return JSON.stringify(this.chartData, null, 2);
  }
}
