import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import { HomeComponent } from './home/home.component';

const NG4_SPRINGBOOT_ROUTES: Routes = [
  {path: '', component: HomeComponent, pathMatch: 'full'}
];

@NgModule({
    imports: [RouterModule.forRoot(NG4_SPRINGBOOT_ROUTES)],
    exports: [RouterModule]
})
export class AppRoutesModule {

}