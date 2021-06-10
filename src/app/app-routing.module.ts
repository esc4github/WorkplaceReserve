import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SchedulerComponent } from './scheduler/scheduler.component';
import { RoomComponent } from './room/room.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'scheduler',component:SchedulerComponent},
  {path:'room',component:RoomComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
