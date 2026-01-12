
import { ChargerType, DemandLevel, EVStation, StationStatus } from './types';

export const GREATER_NOIDA_CENTER = { lat: 28.4744, lng: 77.5040 };

export const MOCK_STATIONS: EVStation[] = [
  {
    id: '1',
    name: 'GNIOT Campus EV Hub',
    address: 'Knowledge Park II, Greater Noida',
    lat: 28.4608,
    lng: 77.4912,
    distance: 1.2,
    predictedWait: 5,
    demandLevel: DemandLevel.LOW,
    chargerType: ChargerType.DC,
    status: StationStatus.AVAILABLE,
    pricePerKwh: 18.5,
    recommended: true
  },
  {
    id: '2',
    name: 'Metro Station Fast Charge',
    address: 'Pari Chowk Metro, Greater Noida',
    lat: 28.4682,
    lng: 77.5113,
    distance: 3.8,
    predictedWait: 18,
    demandLevel: DemandLevel.MEDIUM,
    chargerType: ChargerType.DC,
    status: StationStatus.BUSY,
    pricePerKwh: 22.0
  },
  {
    id: '3',
    name: 'City Mall EV Point',
    address: 'Alpha 1 Commercial Belt, Greater Noida',
    lat: 28.4754,
    lng: 77.5090,
    distance: 6.1,
    predictedWait: 35,
    demandLevel: DemandLevel.HIGH,
    chargerType: ChargerType.AC,
    status: StationStatus.BUSY,
    pricePerKwh: 15.0
  },
  {
    id: '4',
    name: 'Expo Mart Power Zone',
    address: 'Knowledge Park II, Greater Noida',
    lat: 28.4630,
    lng: 77.5030,
    distance: 2.5,
    predictedWait: 10,
    demandLevel: DemandLevel.LOW,
    chargerType: ChargerType.DC,
    status: StationStatus.AVAILABLE,
    pricePerKwh: 20.5
  },
  {
    id: '5',
    name: 'Delta 1 Metro Chargers',
    address: 'Delta 1 Sector, Greater Noida',
    lat: 28.4890,
    lng: 77.5180,
    distance: 8.4,
    predictedWait: 0,
    demandLevel: DemandLevel.LOW,
    chargerType: ChargerType.AC,
    status: StationStatus.OFFLINE,
    pricePerKwh: 14.5
  }
];
