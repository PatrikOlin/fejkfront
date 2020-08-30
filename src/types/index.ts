export interface Person {
  name: string;
  email: string;
  pin: string;
  phone: string;
  password: string;
  address: string;
}

export interface Company {
  companyName: string;
  orgNum: string;
  vatCode: string;
  address: string;
  bankgiro: string;
  contact: string;
  contactEmail: string;
  contactPhone: string;
}

export interface Article {
  id: string;
  description: string;
  vatCode: number;
  price: string;
  unit: string;
}
