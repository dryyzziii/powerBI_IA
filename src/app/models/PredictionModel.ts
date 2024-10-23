export class PredictionModel {
    constructor(
      public modelID: number,
      public modelName: string,
      public description: string,
      public createdAt: Date,
      public updatedAt: Date
    ) {}
  
    // Méthode pour mettre à jour la description du modèle
    updateDescription(newDescription: string): void {
      this.description = newDescription;
    }
  }
  