// import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, NgForm } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { UtilisateurService } from '../utilisateur.service';
import { Utilisateur } from './utilisateur';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
// export class InscriptionComponent implements OnInit {
export class InscriptionComponent {

  private readonly USER_API_URL='api/utilisateurs.json';
  private regForm:any;
   profileForm = this.fb.group({
     nom: ['', Validators.required],
     prenom: ['', Validators.required],
     addresse: ['', Validators.required],
     email: ['', Validators.required],
     posteAvant: ['', Validators.required],
     domaineRecherche: ['', Validators.required],
     statut: ['', Validators.required],
     numtelephone: ['', Validators.required],
     competences: ['', Validators.required],
   });

  constructor(private fb: FormBuilder, private http: HttpClient, private utilisateurService: UtilisateurService) { }
  
  public createUtilisateur(utilisateur: Utilisateur): Observable<Utilisateur>{
    return this.http.post<Utilisateur>(this.USER_API_URL, utilisateur);
  }
  

  onSubmit() {
    console.log(this.profileForm.value);
  }

  tab=[];

  nom: String = "";
  prenom: String= ""
  addresse: String=""
  email: String=""
  posteAvant: String=""
  domaineRecherche: String=""
  statut: String=""
  statutnumber: number=0
  numTelephone: String=""
  competences: String=""


  resultNom:String=""
  resultPrenom:String=""
  resultAddresse:String=""
  resultEmail:String=""
  resultPosteAvant:String=""
  resultNumeroTelephone:String=""
  resultCompetences:String=""
  resultDomaineRecherche:String=""
  resultStatut:String=""

  postData(){
    let url="http://httpbin.org/post"
    this.http.post(url, {
      nom:this.nom,
      prenom:this.prenom,
      addresse:this.addresse,
      email:this.email,
      posteAvant:this.posteAvant,
      numTelephone:this.numTelephone,
      competences:this.competences,
      domaineRecherche:this.domaineRecherche,
      statut:this.statut
    }).toPromise().then((data:any) =>{
      console.log(data)
      console.log(JSON.stringify(data.json.nom, data.json.prenom,data.json.addresse))
      console.log(JSON.stringify(data.json.email, data.json.posteAvant,data.json.numTelephone))
      console.log(JSON.stringify(data.json.competences, data.json.domaineRecherche, data.json.statut))
      this.resultNom=JSON.stringify(data.json.nom)
      this.resultPrenom=JSON.stringify(data.json.prenom)
      this.resultAddresse=JSON.stringify(data.json.addresse)
      this.resultEmail=JSON.stringify(data.json.email)
      this.resultPosteAvant=JSON.stringify(data.json.posteAvant)
      this.resultNumeroTelephone=JSON.stringify(data.json.numTelephone)
      this.resultCompetences=JSON.stringify(data.json.competences)
      this.resultDomaineRecherche=JSON.stringify(data.json.domaineRecherche)
      this.resultStatut=JSON.stringify(data.json.statut)
    } )
  }

  handleError(handleError: any): any {
    throw new Error('Method not implemented.');
  }
  private apiServerUrl=environment.apiBaseUrl;
  // public getUtilisateurs():Observable<Utilisateur[]>{
  //   return this.http.get<Utilisateur[]>('${this.apiServerUrl}/all');
  // }

  public addUtilisateur(utilisateur: Utilisateur):Observable<Utilisateur>{
    return this.http.post<Utilisateur>('${this.apiServerUrl}/inscription', utilisateur);
  }

  public updateUtilisateur(utilisateur: Utilisateur):Observable<Utilisateur>{
    return this.http.put<Utilisateur>('${this.apiServerUrl}/update', utilisateur);
  }
  public utilisateurs: Utilisateur[]=[];
  public getUtilisateurs():void{
    this.utilisateurService.getUtilisateurs().subscribe(
      (response: Utilisateur[]) =>{
        this.utilisateurs=response;
      },(error: HttpErrorResponse) =>{
        alert(error.message);
      }
    )
  }
  public onAddUtilisateur(addForm: NgForm):void{
    if (addForm.value.statut==="Recruteur"){
      addForm.value.statutnumber=1
    }else{
      addForm.value.statutnumber=2
    }
    this.utilisateurService.addUtilisateur(addForm.value).subscribe(
      (response: Utilisateur) => {
        console.log(response);
      },(error: HttpErrorResponse) => {
        alert(error.message);
      }
    )
  }

}
  

  
  // public title="Inscription";
  // constructor() { }

  // ngOnInit(): void {
  // }

  // public saveDate(){
    
  // }
