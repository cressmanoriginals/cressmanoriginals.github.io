import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './component/main/main.component';
import { ContactComponent } from './component/contact/contact.component';

const routes: Routes = [
  //this is where you add the links to components/pages
  {path: '', component: MainComponent},
  {path: 'contact', component:ContactComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
