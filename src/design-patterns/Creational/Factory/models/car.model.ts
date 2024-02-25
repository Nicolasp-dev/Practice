import { Transport } from '../interface/transport.interface';

export class CarTransport implements Transport {
  deliver() {
    console.log('Car delivery');
  }
}
