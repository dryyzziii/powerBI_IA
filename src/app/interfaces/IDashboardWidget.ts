export interface IDashboardWidget {
    widgetID: number;        // Identifiant du widget
    userID: number;          // Identifiant de l'utilisateur
    type: string;            // Type de widget (bar, line, pie, etc.)
    title: string;           // Titre du widget
    dataSource: string;      // URL ou identifiant de la source des données
    options: any;            // Options supplémentaires (généralement un JSON)
    position: { x: number, y: number }; // Position du widget dans la grille
    size: { width: number, height: number }; // Taille du widget
    createdAt: Date;         // Date de création
    updatedAt: Date;         // Date de mise à jour
  }
  