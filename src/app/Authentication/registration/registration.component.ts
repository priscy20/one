import { Component, OnInit } from '@angular/core';

interface Data {
firstName: string;
otherName: string;
password: string;
tel: number;
location: string;
gps: string;
}

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  hide = true;
  data = {firstName: '', otherName: '', password: '', telephone: '', location: '', gpsAddress: ''};


  constructor() { }
  registrationData(fName, oName, pass, Tel, loc, gps){
    this.data.firstName = fName;
    this.data.otherName = oName;
    this.data.password = pass;
    this.data.telephone = Tel;
    this.data.location = loc;
    this.data.gpsAddress = gps;
    console.log(this.data);
  }

  ngOnInit() {
  }

}
