import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';
import { HttpParams } from "@angular/common/http";
import { stringify } from '@angular/compiler/src/util';
import { ThrowStmt } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

readonly APIUrl="http://localhost:65274/api"

  constructor(private http:HttpClient) {}

  updateRoom(val:any){
    return this.http.put(this.APIUrl + 'room', val);
  }

  deleteRoom(val:any){
    return this.http.delete(this.APIUrl+'/Room/'+val)
  }

  getAllReservedRooms(Email:string):Observable<any[]>{

    let email : any = '';

    email = sessionStorage.getItem('searchEmail');

    const params = new HttpParams()
    .set('Email', email);

    return this.http.get<any[]>(this.APIUrl+'/room/GetAllReservedRooms/', {params});
  }

  getRoomListingList(StartDateTime:string, EndDateTime: string):Observable<any[]>{

    let ds : any = '';
    let de : any = '';

    ds = StartDateTime;
    de = EndDateTime;

    const params = new HttpParams()
    // .set('StartDateTime', '5/6/2019 6:00:00 AM')
    // .set('EndDateTime', '5/6/2019 20:00:00 PM');
    .set('StartDateTime', ds)
    .set('EndDateTime', de);   

    return this.http.get<any>(this.APIUrl+'/RoomListing/', {params});
  }

  getReservedRoomList(Name:string, Purpose:string, StartDateTime:string, EndDateTime: string):Observable<any[]>{

    let name : any = '';
    let purpose : any = '';
    let ds : any = '';
    let de : any = '';

    name = Name;
    purpose = Purpose;
    ds = StartDateTime;
    de = EndDateTime;

    const params = new HttpParams()
    .set('Name', name)
    .set('Purpose', purpose)
    .set('StartDateTime', ds)
    .set('EndDateTime', de);

    return this.http.get<any>(this.APIUrl+'/ReservedRoom/', {params});
  }

  addScheduleRoom():Observable<any[]>{

    let name : any = '';
    let email : any = '';
    let purpose : any = '';
    let ds : any = '';
    let de : any = '';
    let li : any = '';

    name = sessionStorage.getItem('searchName');
    email = sessionStorage.getItem('searchEmail');
    purpose = sessionStorage.getItem('searchPurpose');
    ds = sessionStorage.getItem('startDateTime');
    de = sessionStorage.getItem('endDateTime');
    li = sessionStorage.getItem('LocationID');

    let room={
      Name: name,
      Email: email,
      Purpose: purpose,
      Key: li,
      Begin: ds,
      End: de
   }; 
   
   let body=new HttpParams({fromObject:room})
    return this.http.post<any>(this.APIUrl+'/ReservedRoom/', body);
  }
}
