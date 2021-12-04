import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../login-service.service';
import { Storage } from '@ionic/storage-angular';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  user:string;
  password:string;

  
  constructor(private loginService: LoginService,
              private routing: Router,
              private storage: Storage,
              private alertController: AlertController) {
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Error al ingresar',
      subHeader: 'Credenciales:',
      message: 'El usuario o contraseña ingresados son incorrectos.',
      buttons: ['Volver']
    });

    await alert.present();
  }
  
  login()
  {
    this.loginService.login(this.user, this.password).subscribe(
      async res=>{
        console.log(res);
        if(res.Status == "Login Success")
        {
          await this.storage.set("email", this.user);
          this.routing.navigate(['/tabs/tab1']);
        }
        else{
          this.presentAlert();
        }
      },
      err=>{
        console.log(err);
      }
    )
  }

  async ngOnInit() {
    await this.storage.create();
  }

}
