import Timestamp from './Timestamp';
import User from './User';

export default interface Bid {
  price: number;
  timestamp: Timestamp;
  user: User['id'];
}
