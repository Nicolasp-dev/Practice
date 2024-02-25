import { Transport } from '../interface/transport.interface';

export class TruckTransport implements Transport {
  deliver() {
    console.log('Truck delivery');
  }
}
