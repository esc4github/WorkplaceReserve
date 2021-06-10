import { Component, OnInit } from '@angular/core';
import {SharedService} from 'src/app/shared.service';
import { Router } from '@angular/router';
declare var $: any;


@Component({
  selector: 'app-edit-del-room',
  templateUrl: './edit-del-room.component.html',
  styleUrls: ['./edit-del-room.component.css']
})


export class EditDelRoomComponent implements OnInit {
  router: any;

  constructor(private service: SharedService) { }

  ModalTitle:string = '';
  ActivateEditDelRoom:boolean=true;
  ReservedRoomList:any=[];
  room:any;
  RoomId: any;
  RoomNumber: any;
  Purpose: any;
  Date: any;
  StartTime: any;
  EndTime: any;
  Email : any;
  DefaultEmail : any;
  searchEmail : any;
  
  // this.searchEmail = value.searchEmail;

  getEmail(value: any) {
    sessionStorage.setItem('searchEmail', value.searchEmail);
    if (sessionStorage.getItem('searchEmail') == '') {
      alert('Please input an email');
    } else {
    this.refreshReservedRoomList();
    }
  }

  ngOnInit(): void {

    //this.DefaultEmail = sessionStorage.getItem('searchEmail');

    this.service.deleteRoom(this.RoomNumber).subscribe(data=>{
    })
    this.refreshReservedRoomList()
  }

  deleteClick(dataitem: { room_id: any; }){
    if(confirm('Are you sure you want to delete this record?')){
      this.service.deleteRoom(dataitem.room_id).subscribe(data=>{
        this.refreshReservedRoomList();
      })
    }
  }

  // editClick(dataitem: any){
  //   this.room = dataitem;
  //   this.room.room_id = dataitem.room_id;
  //   this.room.location_id = dataitem.location_id;
  //   this.room.name = dataitem.name;
  //   this.room.email = dataitem.email;
  //   this.room.purpose = dataitem.purpose;
  //   this.room.date = dataitem.begin;
  //   this.room.begin = dataitem.begin;
  //   this.room.end = dataitem.end;
  //   alert(this.room.room_id);
  //   alert(this.room.location_id);
  //   alert(this.room.name);
  //   alert(this.room.email);  
  //   alert(this.room.purpose);
  //   alert(this.room.date);
  //   alert(this.room.begin);
  //   alert(this.room.end);
    
  //   this.router.navigate(['./scheduler']);
  // }

//  this.searchEmail = value.searchEmail;



  refreshReservedRoomList() {
    this.service.getAllReservedRooms(this.Email).subscribe(data=>{
      this.ReservedRoomList=data;
    })
  }
}
