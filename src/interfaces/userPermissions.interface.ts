export interface IUserRole {
  id: string;
  name: string;
}

export const userPermissions: IUserRole[] = [{ id: "admin", name: "Admin" }];

export const genders = ["male", "famale"] as const;
