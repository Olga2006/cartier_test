import { Adress } from "./adress.model";

export class Partenaire {
  id!: number;
  raisonSocial!: string;
  siret!: string;
  siren!: string;
  adress!: Adress;
  majDate!: Date;
}
