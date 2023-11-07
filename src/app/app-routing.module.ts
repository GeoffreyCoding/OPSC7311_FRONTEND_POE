import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { BulletinboardCreateComponent } from './bulletinboard-create/bulletinboard-create.component';
import { BulletinboardDisplayComponent } from './bulletinboard-display/bulletinboard-display.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'add',component: BulletinboardCreateComponent},
  { path: 'sign-up', component: SignUpComponent },
  { path: '',component: BulletinboardDisplayComponent}
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
