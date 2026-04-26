export interface Enseignants {
  numens: number;
  nom : string;
  nbheures: number;
  tauxhoraire: number;
}

export interface ExtendEns extends Enseignants {
  salaire: number;
}