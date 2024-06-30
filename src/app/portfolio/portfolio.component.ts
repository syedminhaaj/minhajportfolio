import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { UserserviceService } from '../../myservices/userservice.service';
import { Project } from '../_models/project';
import { TagDetails } from '../_models/tagDetails';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit{
projects={} as Project[];
  constructor(private setTitle:Title,private userserviceService:UserserviceService){
    this.setTitle.setTitle("Syed - Portfolio");
    //this.projectCompData=this.userservice.
  }
  ngOnInit(): void {
    this.projects=this.userserviceService.getProjects();
  }
}
