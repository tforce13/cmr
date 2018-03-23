import { StateEnabled } from "./stateenabled";

export interface Profile {
  uid?: string;
  displayName?: string;
  email?: string;
  firstName?:string;
  lastName?:string;
  address1?: string;
  address2?: string;
  city?: string;
  state?: string;
  zip?: string;
  company1?: string;
  website?: string;
  nmls?: string;
  photoUR?: string;
  stateEnabled? :StateEnabled;
  }
