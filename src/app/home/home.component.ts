import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { UserserviceService } from '../../myservices/userservice.service';
import { Project } from '../_models/project';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  featureProject ={} as Project;
  constructor(private setTitle:Title,private userserviceService:UserserviceService){
    this.setTitle.setTitle("Syed - Home")
  }
  ngOnInit(): void {
   this.featureProject=this.userserviceService.getProjectById(0);
  }

}
