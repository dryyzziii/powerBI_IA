export class Dataset {
  constructor(
    public datasetID: number,
    public userID: number,
    public name: string,
    public description: string,
    public sourceType: string,
    public createdAt: Date,
    public updatedAt: Date,
    public status: string
  ) {}

  // Méthode pour mettre à jour le statut du dataset
  updateStatus(newStatus: string): void {
    this.status = newStatus;
  }

  // Méthode pour vérifier si le dataset est traité
  isProcessed(): boolean {
    return this.status === 'traité';
  }
}
