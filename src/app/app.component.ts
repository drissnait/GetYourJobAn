import { HttpErrorResponse } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Utilisateur } from "./inscription/utilisateur";
import { UtilisateurService } from "./utilisateur.service";

@Component({
  selector:'app-root',
  templateUrl: './app.component.html',
  styleUrls:[]
})

export class AppComponent{
  title: string="Get your job";
  public utilisateurs: Utilisateur[]=[];

  // constructor(private utilisateurService: UtilisateurService){}

  // ngOnInit(){
  //   this.getUtilisateurs();
  // }

  // public getUtilisateurs():void{
  //   this.utilisateurService.getUtilisateurs().subscribe(
  //     (response: Utilisateur[]) =>{
  //       this.utilisateurs=response;
  //     },(error: HttpErrorResponse) =>{
  //       alert(error.message);
  //     }
  //   )
  // }
  // public onAddUtilisateur(addForm: NgForm):void{

  // }
}