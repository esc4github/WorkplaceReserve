import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SchedulerComponent } from './scheduler/scheduler.component';
import { SharedService } from './shared.service';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { RoomComponent } from './room/room.component';
import { EditDelRoomComponent } from './room/edit-del-room/edit-del-room.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SchedulerComponent,
    RoomComponent,
    EditDelRoomComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
