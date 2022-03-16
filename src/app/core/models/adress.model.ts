export class Adress {
  id!: number | null;
  adress!: string | null;
  ville!: string | null;
  codePostal!: string | null;
  constructor(id: number | null,
    adress: string | null,
    ville: string | null,
    codePostal: string | null) {
    this.id = id,
    this.adress = adress,
    this.ville = ville,
    this.codePostal = codePostal
  }
}