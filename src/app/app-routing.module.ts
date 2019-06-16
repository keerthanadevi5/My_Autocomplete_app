import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { NewcompComponent } from './newcomp/newcomp.component';

const routes: Routes = [

  
    {
      path: 'newcomp', component: NewcompComponent
    }
  
];
  

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
  ],
  exports: [ RouterModule ],
  declarations: []
})
export class AppRoutingModule { }
