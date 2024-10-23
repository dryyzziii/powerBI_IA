export class Log {
  constructor(
    public logID: number,
    public datasetID: number,
    public userID: number,
    public message: string,
    public logType: string,
    public createdAt: Date
  ) {}

  // Méthode pour changer le type de log
  changeLogType(newType: string): void {
    this.logType = newType;
  }

  // Méthode pour formater le message de log
  formatLog(): string {
    return `[${this.logType.toUpperCase()}] - ${this.message}`;
  }
}
