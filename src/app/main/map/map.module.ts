import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapformComponent } from './mapform/mapform.component';
import { MaplistComponent } from './maplist/maplist.component';
import { RouterModule } from '@angular/router';
import { AgmCoreModule } from '@agm/core';
import {MatSidenavModule} from '@angular/material/sidenav'
import { MatIconModule } from "@angular/material";


const routes = [
  {
    path: "mapForm",
    component: MapformComponent,
    

  },
  {
    path: '**',
    component: MaplistComponent,

  }
];

@NgModule({
  declarations: [MapformComponent, MaplistComponent],
  imports: [
    RouterModule.forChild(routes),  
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyD2aNk7BXJ13EyVfPZXWRVqEcnfzfRVVIA'
    }),  
    CommonModule,
    MatSidenavModule,

    MatIconModule
  ]
})
export class MapModule { }
