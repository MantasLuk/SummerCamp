import { Component, OnInit } from '@angular/core';
import { NatureClub } from 'src/app/models/natureClub';
import { RegistrationService } from 'src/app/services/registration.service';

@Component({
  selector: 'app-nature-club',
  templateUrl: './nature-club.component.html',
  styleUrls: ['./nature-club.component.css']
})
export class NatureClubComponent implements OnInit {

  public clubMembers:NatureClub[]=[];
  constructor( private regService:RegistrationService) {   }

  ngOnInit(): void {
    this.regService.getNaturalistClubReg().subscribe((response)=>{
      this.clubMembers=response
    });

  }

}
