import { Merchant } from "./merchant";

export class BusinessProfile{
  constructor(
    public active_merchant: Merchant,
    public code: string,
    public amount: number
  ) { }
}



