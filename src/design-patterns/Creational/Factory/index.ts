import {
  TransportTypes,
  transportTypes,
} from './interface/transport.interface';
import { TransportFactory } from './transport.factory.';

class Application {
  constructor(public vehicle: TransportTypes) {}
  start(): void {
    const transport = new TransportFactory().createTransport(this.vehicle);
    transport.deliver();
  }
}

new Application(transportTypes.car).start();
