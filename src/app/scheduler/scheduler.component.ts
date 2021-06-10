import { SelectorMatcher } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import {SharedService} from 'src/app/shared.service';
declare var $: any;

@Component({
  selector: 'app-scheduler',
  templateUrl: './scheduler.component.html',
  styleUrls: ['./scheduler.component.css']
})

export class SchedulerComponent implements OnInit {

  

  AvailRoomIsShown: boolean = false ;
  ReservedRoomIsShown: boolean = false ;
  constructor(private service:SharedService) { }

  clickSave : boolean = false;

  reservedRoomShow() {

//alert($('input[name=radiogroup]:checked').attr("id"));

    var roomIsSelected : boolean = true;
    

    if ($('input[name=radiogroup]:checked').attr("id") == undefined) {
      roomIsSelected = false;
    }

    if (roomIsSelected == true) {

    this.clickSave = this.clickSave;

    sessionStorage.setItem('LocationID', $('input[name=radiogroup]:checked').attr("id"));
    //alert('Trying to INSERT!');
    
    this.insertScheduleRoom();

    setTimeout(() =>{
      this.refreshReservedRoom();
      this.ReservedRoomIsShown = true;
  },1000);
 
    }
  }

 
  RoomListingList:any=[];
  ReservedRoomList:any=[]; 
  searchDate : any = new Date();
  searchName : any;
  searchEmail : any;
  searchPurpose : any;
  searchStarttime : any;
  searchEndtime : any;
  StartDateTime : any;
  EndDateTime : any; 
  ErrorMsgDate : any;
  ErrorMsgName : any;
  ErrorMsgEmail : any;
  ErrorMsgPurpose : any;
  ErrorMsgStartTime : any;
  ErrorMsgEndTime : any;
  valid : Boolean = false;
  //firstLoad : number = 0;

  deleteErrorMsg() {
    this.ErrorMsgDate = '';
    this.ErrorMsgName = '';
    this.ErrorMsgEmail = '';
    this.ErrorMsgPurpose = '';
    this.ErrorMsgStartTime = '';
    this.ErrorMsgEndTime = '';
  }

  getSearchValues(value: any) {
    
    this.valid = true;
    this.searchDate = value.searchDate;
    this.searchName = value.searchName;
    this.searchEmail = value.searchEmail;
    this.searchPurpose = value.searchPurpose
    this.searchStarttime = value.searchStarttime;
    this.searchEndtime = value.searchEndtime;

    const dateStart = value.searchDate+' '+value.searchStarttime;
    const dStart = new Date(dateStart);
    dStart.setDate(dStart.getDate());
    const date1 = dStart.toLocaleDateString();
    const time1 = dStart.toLocaleTimeString().replace(/(.*)\D\d+/, '$1');
    this.StartDateTime = (date1+' '+time1);

    const dateEnd = value.searchDate+' '+value.searchEndtime;
    const dEnd = new Date(dateEnd);
    dEnd.setDate(dEnd.getDate());
    const date2 = dEnd.toLocaleDateString();
    const time2 = dEnd.toLocaleTimeString().replace(/(.*)\D\d+/, '$1');
    this.EndDateTime = (date2+' '+time2);

    let ds : any = '';
    let ts : any = '';
    ds = value.searchDate;
    ts = this.StartDateTime;

    var tomorrow = new Date(ds);
    tomorrow.setDate(tomorrow.getDate());
    tomorrow.setHours(tomorrow.getHours()+5);

    // if (new Date() >= new Date(ts) && new Date().toDateString() == new Date(tomorrow).toDateString()) {
    //   this.ErrorMsgStartTime = 'Please enter time.  Start Time must be later than the time now';
    //   this.valid = false;
    // }

    // else if (new Date(ts) < new Date() || value.searchDate == '') {
    //   this.ErrorMsgDate = 'Please enter date.  Date must be today or date after today';
    //   this.valid = false;
    // }

    // else if (Date.parse(this.EndDateTime) <= Date.parse(this.StartDateTime)) {
    //   this.ErrorMsgStartTime = 'Please enter time.  End Time must be greater than Start Time';
    //   this.valid = false;
    // }

    if (value.searchDate == null || value.searchDate =='') {
      this.ErrorMsgDate = 'Please enter a date';
      this.valid = false
    }
    else if (value.searchName == null || value.searchName =='') {
      this.ErrorMsgName = 'Please enter your name';
      this.valid = false
    }
    else if (value.searchEmail == null || value.searchEmail =='') {
      this.ErrorMsgEmail = 'Please enter your email';
      this.valid = false
    }
    else if (value.searchPurpose == null || value.searchPurpose =='') {
      this.ErrorMsgPurpose = 'Please enter Meeting Purpose';

      this.valid = false
    }
    else if (value.searchStarttime == null || value.searchStarttime =='') {
      this.ErrorMsgStartTime = 'Please enter a Start Time';
      this.valid = false
    }
    else if (value.searchEndtime == null || value.searchEndtime =='') {
      this.ErrorMsgEndTime = 'Please enter a End Time';
      this.valid = false
    }
    else if (new Date() >= new Date(ts) && new Date().toDateString() == new Date(tomorrow).toDateString()) {
      this.ErrorMsgStartTime = 'Please enter time.  Start Time must be later than the time now';
      this.valid = false;
    }

    else if (new Date(ts) < new Date() || value.searchDate == '') {
      this.ErrorMsgDate = 'Please enter date.  Date must be today or date after today';
      this.valid = false;
    }

    else if (Date.parse(this.EndDateTime) <= Date.parse(this.StartDateTime)) {
      this.ErrorMsgEndTime = 'Please enter time.  End Time must be greater than Start Time';
      this.valid = false;
    }

    // const dateStart = value.searchDate+' '+value.searchStarttime;
    // const dStart = new Date(dateStart);
    // dStart.setDate(dStart.getDate());
    // const date1 = dStart.toLocaleDateString();
    // const time1 = dStart.toLocaleTimeString().replace(/(.*)\D\d+/, '$1');
    // this.StartDateTime = (date1+' '+time1);

    // const dateEnd = value.searchDate+' '+value.searchEndtime;
    // const dEnd = new Date(dateEnd);
    // dEnd.setDate(dEnd.getDate());
    // const date2 = dEnd.toLocaleDateString();
    // const time2 = dEnd.toLocaleTimeString().replace(/(.*)\D\d+/, '$1');
    // this.EndDateTime = (date2+' '+time2);

    // let ds : any = '';
    // let ts : any = '';
    // ds = value.searchDate;
    // ts = this.StartDateTime;

    // var tomorrow = new Date(ds);
    // tomorrow.setDate(tomorrow.getDate());
    // tomorrow.setHours(tomorrow.getHours()+5);

    // if (new Date() >= new Date(ts) && new Date().toDateString() == new Date(tomorrow).toDateString()) {
    //   this.ErrorMsg = 'Please enter time.  Start Time must be later than the time now';
    //   this.valid = false;
    // }

    // else if (new Date(ts) < new Date() || value.searchDate == '') {
    //   this.ErrorMsg = 'Please enter date.  Date must be today or date after today';
    //   this.valid = false;
    // }

    // else if (Date.parse(this.EndDateTime) <= Date.parse(this.StartDateTime)) {
    //   this.ErrorMsg = 'Please enter time.  End Time must be greater than Start Time';
    //   this.valid = false;
    // }

    sessionStorage.setItem('searchName', this.searchName);
    sessionStorage.setItem('searchEmail', this.searchEmail);
    sessionStorage.setItem('searchPurpose', this.searchPurpose);
    sessionStorage.setItem('startDateTime', this.StartDateTime);
    sessionStorage.setItem('endDateTime', this.EndDateTime);

    if (this.valid == false) {
      this.AvailRoomIsShown = false;
    } else {
      this.AvailRoomIsShown = true;
      this.refreshRoomListing();
    }

    // this.refreshRoomListing();

 }


  ngOnInit(): void {

    //this.refreshRoomListing();
  
  }

  refreshRoomListing(){
    this.service.getRoomListingList(this.StartDateTime, this.EndDateTime).subscribe(data=>{
      this.RoomListingList=data
    })
  }

  refreshReservedRoom(){
    this.service.getReservedRoomList(this.searchName, this.searchPurpose, this.StartDateTime, this.EndDateTime).subscribe(data=>{
      this.ReservedRoomList=data
    })
  }

  insertScheduleRoom(){
    
    this.service.addScheduleRoom().subscribe(data=>{
      this.ReservedRoomList=data
    })
  }

}

