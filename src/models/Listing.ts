import Bid from './Bid';
import { Size } from './Size';
import Timestamp from './Timestamp';
import User, { UserSnapshot } from './User';

export default interface Listing {
  id: string;

  photos: string[];
  title: string;
  description: string;
  user: UserSnapshot;

  bids: Bid[];

  size: Size;
  uploadTimestamp: Timestamp;
  lastUpdatedTimestamp: Timestamp;
}
