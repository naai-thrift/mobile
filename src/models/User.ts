export default interface User {
  id: string;

  firstName: string;
  lastName: string;
  profilePhoto: string;

  location: string;
  generalLocation: string;
}

export interface UserSnapshot
  extends Pick<
    User,
    'id' | 'firstName' | 'lastName' | 'profilePhoto' | 'generalLocation'
  > {}
