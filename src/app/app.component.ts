import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TD1Ex2';

  imageUrl = "https://nodejs.org/static/images/logo.svg";

  nomClass = "rouge";

  isActif = false;

  clique() {
    console.log("Bouton cliqué");
  }

  utilisateurs = [
    {"nom":"Durand", "prenom":"Jean", "email":"d@j.fr", "tel":"0601214571", "age":50},
    {"nom":"Dupond", "prenom":"Marie", "email":"d@m.fr", "tel":"060125411", "age":70},
    {"nom":"Duqq", "prenom":"Paul", "email":"d@p.fr", "tel":"0601014571", "age":20},
    {"nom":"AHHH", "prenom":"OHH", "email":"a@o.fr", "tel":"0601210991", "age":10}
  ]

  
  isDetails = false;

  details() {
    this.isDetails = true;
  }

  cacherDetails() {
    this.isDetails = false  
  }

  msg = "";

  user:{nom:string, prenom:string, email:string, tel:string, age:number} = {"nom":"", "prenom":"", "email":"", "tel":"", "age":0};
  nom:string = "";
  prenom:string = "";
  email:string = "";
  tel:string = "";
  age:number = 0;

  ajoutUtilisateur() {
    this.user.nom = this.nom;
    this.user.prenom = this.prenom;
    this.user.email = this.email;
    this.user.tel = this.tel;
    this.user.age = this.age;
    this.utilisateurs.push(this.user);
  }
}
