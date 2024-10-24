export interface IUser {
    userID: number;
    firstName: string;
    lastName: string;
    email: string;
    passwordHash: string;
    role: string;  // Admin, Utilisateur, etc.
    createdAt: Date;
    updatedAt: Date;
  }
  