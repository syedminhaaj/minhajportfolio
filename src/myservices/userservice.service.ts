import { Injectable } from '@angular/core';
import { Project } from '../app/_models/project';
import { TagDetails } from '../app/_models/tagDetails';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {
  projects:Project[]=[
    {id:0,
    name:'Aspire Investor Broker',
    description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    summary:'Various Investor project profiles project',
    tags:[TagDetails.ANGULAR,TagDetails.TYPESCRIPT,TagDetails.HTML]

  },
  {id:1,
    name:'Asea Brown Boveri Project',
    description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    summary:'this is the short description about developement',
    tags:[TagDetails.ANGULAR,TagDetails.TYPESCRIPT,TagDetails.CSS]

  },
  {id:2,
    name:'Halliburton ',
    description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    summary:'Migrated Angular project to latest angular version 14',
    tags:[TagDetails.ANGULAR,TagDetails.HTML,TagDetails.NODEJS]

  },  {id:3,
    name:'GE Current',
    description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    summary:'Created interfaces for wac users for ioT Application',
    tags:[TagDetails.ANGULAR,TagDetails.TYPESCRIPT,TagDetails.HTML]

  }]
  constructor() { }

  getProjects(){
    return this.projects;
  }

  getProjectById(id:number){
   let projectIs= this.projects.find(proj=>proj.id===id);
   if(projectIs === undefined){
     throw new Error("there is no project with the id"+id);
   }
   return projectIs;
  }
}
