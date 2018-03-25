import { EnabledState } from "./enabledstate";

export interface Profile {
  uid: string;
  firstName?:string;
  lastName?:string;
  address1?: string;
  address2?: string;
  city?: string;
  state?: string;
  zip?: string;
  company?: string;
  website?: string;
  nmls?: string;
  enabledState? :EnabledState;
}
