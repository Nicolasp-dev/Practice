import { Transport } from '../interface/transport.interface';

export class DroneTransport implements Transport {
  deliver() {
    console.log('Drone delivery');
  }
}
