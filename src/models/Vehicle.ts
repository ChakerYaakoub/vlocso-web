export interface Vehicle {
  vehicleId?: number;
  type: string;
  mark: string;
  year: number;
  model: string;
  gearbox: string;
  climatisation: string;
  fuelType: string;
  transmission?: string;
  klm_counter: number;
  condition: string;
  description: string;
  createdAt?: Date;
  updatedAt?: Date;
  // getVehicle(): void;
  // createVehicle(): void;
  // updateVehicle(): void;
  // deleteVehicle(): void;
}
