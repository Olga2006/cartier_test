import { Adress } from "./adress.model";

export class Partenaire {
  id!: number | null;
  raisonSocial!: string | null;
  personNom!: string | null;
  siret!: string | null;
  siren!: string | null;
  adress!: Adress | null;
  majDate!: Date | null;
  createDate!: Date | null;
  constructor(id: number | null,
    raisonSocial: string | null,
    personNom: string | null,
    siret: string | null,
    siren: string | null,
    adress: Adress | null,
    majDate: Date | null,
    createDate: Date | null) {
    this.id = id,
      this.raisonSocial = raisonSocial,
      this.personNom = personNom,
      this.siret = siret,
      this.siren = siren,
      this.adress = adress,
      this.majDate = majDate,
      this.createDate = createDate
  }
}
