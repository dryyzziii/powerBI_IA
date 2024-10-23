export class DashboardWidget {
    widgetID: number;
    userID: number;
    type: string;
    title: string;
    dataSource: string;
    options: any;  // Options supplémentaires stockées en JSON ou en objet
    position: { x: number, y: number };
    size: { width: number, height: number };
    createdAt: Date;
    updatedAt: Date;
  
    constructor(
      widgetID: number,
      userID: number,
      type: string,
      title: string,
      dataSource: string,
      options: any,
      position: { x: number, y: number },
      size: { width: number, height: number }
    ) {
      this.widgetID = widgetID;
      this.userID = userID;
      this.type = type;
      this.title = title;
      this.dataSource = dataSource;
      this.options = options;
      this.position = position;
      this.size = size;
      this.createdAt = new Date();
      this.updatedAt = new Date();
    }
  
    // Méthode pour mettre à jour les options du widget
    updateOptions(newOptions: any): void {
      this.options = newOptions;
      this.updatedAt = new Date();
    }
  
    // Méthode pour mettre à jour la position du widget
    updatePosition(newX: number, newY: number): void {
      this.position = { x: newX, y: newY };
      this.updatedAt = new Date();
    }
  
    // Méthode pour redimensionner le widget
    resize(newWidth: number, newHeight: number): void {
      this.size = { width: newWidth, height: newHeight };
      this.updatedAt = new Date();
    }
  }
  