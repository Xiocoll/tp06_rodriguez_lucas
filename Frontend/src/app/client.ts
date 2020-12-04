export class Client {

  constructor(public nom:string,  public prenom:string, public adresse:string, public codePostal:string, public ville:string, public telephone:string, public mail:string, public civilite:string, public login:string, public password:string, public password2:string)
  {
    this.nom = nom;
    this.prenom = prenom;
    this.adresse = adresse;
    this.codePostal = codePostal;
    this.ville = ville;
    this.telephone = telephone;
    this.mail = mail;
    this.civilite = civilite;
    this.login = login;
    this.password = password;
    this.password2 = password2;
  }
}