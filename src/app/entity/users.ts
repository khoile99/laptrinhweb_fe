export interface User {
  address: string;
  birthday: string;
  email: string;
  isBlocked: boolean | null;
  phoneNumber: string;
  userName: string;
  userType: number | null;
}

export interface UserWithId {
  id: number;
  address: string;
  birthday: string;
  email: string;
  isBlocked: boolean | null;
  phoneNumber: string;
  userName: string;
  userType: number | null;
}

export interface Admin {
  id: number;
  userName: string;
  email: string;
}
