
export enum ChargerType {
  AC = 'AC',
  DC = 'DC',
  ALL = 'All'
}

export enum DemandLevel {
  LOW = 'Low',
  MEDIUM = 'Medium',
  HIGH = 'High',
  ANY = 'Any'
}

export enum StationStatus {
  AVAILABLE = 'Available',
  BUSY = 'Busy',
  OFFLINE = 'Offline'
}

export interface EVStation {
  id: string;
  name: string;
  address: string;
  lat: number;
  lng: number;
  distance: number; // in km
  predictedWait: number; // in minutes
  demandLevel: DemandLevel;
  chargerType: ChargerType;
  status: StationStatus;
  pricePerKwh: number; // in Rupees
  recommended?: boolean;
}

export interface User {
  username: string;
  isLoggedIn: boolean;
}

export interface AppState {
  view: 'landing' | 'login' | 'dashboard';
  user: User | null;
}
