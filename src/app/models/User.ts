export class User {
    constructor(
      public userID: number,
      public firstName: string,
      public lastName: string,
      public email: string,
      public passwordHash: string,
      public role: string,  // Admin, Utilisateur, etc.
      public createdAt: Date,
      public updatedAt: Date
    ) {}
  
    // Méthode pour changer le rôle d'un utilisateur
    changeRole(newRole: string): void {
      this.role = newRole;
    }
  
    // Méthode pour formater le nom complet de l'utilisateur
    getFullName(): string {
      return `${this.firstName} ${this.lastName}`;
    }
  }
  