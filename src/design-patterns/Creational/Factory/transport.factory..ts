import {
  Transport,
  TransportTypes,
  transportTypes,
} from './interface/transport.interface';
import { CarTransport } from './models/car.model';
import { DroneTransport } from './models/drone.model';
import { TruckTransport } from './models/truck.model';

export class TransportFactory {
  private transportMap: Map<TransportTypes, new () => Transport>;

  constructor() {
    this.transportMap = new Map<TransportTypes, new () => Transport>();
    this.transportMap.set(transportTypes.car, CarTransport);
    this.transportMap.set(transportTypes.drone, DroneTransport);
    this.transportMap.set(transportTypes.truck, TruckTransport);
  }

  public createTransport(transport: TransportTypes): Transport {
    const TransportConstructor = this.transportMap.get(transport);

    if (!TransportConstructor) {
      throw new Error('Transport not implemented');
    }

    return new TransportConstructor();
  }
}
