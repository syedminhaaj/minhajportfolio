import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { filter } from 'rxjs';
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
isCollapsed:boolean=true;
typescript:boolean=false;
angular:boolean=false;
  constructor(private setTitle:Title,private userserviceService:UserserviceService){
    this.setTitle.setTitle("Syed - Portfolio");
    //this.projectCompData=this.userservice.
  }
  ngOnInit(): void {
    this.projects=this.userserviceService.getProjects();
  }

  filter(){
    let filterTags:TagDetails[]=[];
    if(this.typescript){
      filterTags.push(TagDetails.TYPESCRIPT)
    }
    if(this.angular){
      filterTags.push(TagDetails.ANGULAR)
    }
this.projects= this.userserviceService.getProjectsByFilter(filterTags)
  }
}
