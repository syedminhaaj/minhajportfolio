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
    description:'Worked with clients like betaCapital,Cetera, Safra, Stockcross, Siebert for login, registrations and dashboard pages implementations.',
    summary:'Developed application based on ADA compliance for all Broadridge Clients',
    tags:[TagDetails.ANGULAR,TagDetails.TYPESCRIPT,TagDetails.HTML],
    pictures:['assets/betacap-login.png','assets/betacapital-regis.png','assets/siebert-login.png'],
    projectLinks:['https://bcsec.investor.trading2.fast-trade.com/bcsecwealth/login.htm#/login','https://myaccount.iconnect2invest.com/bankr/login.do','https://stocx.investor.trading2.fast-trade.com/siebertnet/passwordrecoveryreset.do']

  },
  {id:1,
    name:'Asea Brown Boveri Project',
    description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    summary:'this is the short description about developement',
    tags:[TagDetails.ANGULAR,TagDetails.TYPESCRIPT,TagDetails.CSS],
    pictures:['assets/ABB-dashboard.png'],
    projectLinks:['https://sitemanager.ability.abb/#/auth/home'],
    videoLink:['https://www.youtube.com/watch?v=tRMY5VV4VpQ']
  },
  {id:2,
    name:'Halliburton ',
    description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    summary:'Migrated Angular project to latest angular version 14',
    tags:[TagDetails.ANGULAR,TagDetails.HTML,TagDetails.NODEJS]

  },  {id:3,
    name:'Daintree DCS',
    description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    summary:'Implemented new features and optimized the code for better performance',
    tags:[TagDetails.ANGULAR,TagDetails.TYPESCRIPT,TagDetails.AZURE],
    pictures:['assets/daintree-dashboard.png','assets/daintree-site.png','assets/daintree-addsite.png'],
    projectLinks:['https://www.led.com/controls-sensors/daintree-wireless-controls/daintree-controls-software','https://auth.st.daintree.io/login'],
    videoLink:['https://www.youtube.com/watch?v=-8IxIRnSU4o','https://www.youtube.com/watch?v=_LyNrJeX0U8']

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

  getProjectsByFilter(filterTags:TagDetails[]){
    let filteredProjects:Project[]=[];

    this.projects.forEach(function(project){
      let foundAll=true;

      filterTags.forEach(function(filterTag:any){
        if(project.tags.includes(filterTag) == false){
          foundAll=false;
        }
      })
      if(foundAll){
        filteredProjects.push(project);
      }
    })
    return filteredProjects;
  }
}
