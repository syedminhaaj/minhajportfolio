import { Injectable } from '@angular/core';
import { Project } from '../app/_models/project';
import { TagDetails } from '../app/_models/tagDetails';

@Injectable({
  providedIn: 'root',
})
export class UserserviceService {
  projects: Project[] = [
    {
      id: 0,
      name: 'Aspire Investor Broker',
      description:
        'Worked with clients like betaCapital,Cetera, Safra, Stockcross, Siebert for login, registrations and dashboard pages implementations.',
      summary:
        'Developed application based on ADA compliance for all Broadridge Clients',
      tags: [TagDetails.ANGULAR, TagDetails.TYPESCRIPT, TagDetails.HTML],
      pictures: [
        'assets/betacap-login.png',
        'assets/betacapital-regis.png',
        'assets/siebert-login.png',
      ],
      projectLinks: [
        'https://bcsec.investor.trading2.fast-trade.com/bcsecwealth/login.htm#/login',
        'https://myaccount.iconnect2invest.com/bankr/login.do',
        'https://stocx.investor.trading2.fast-trade.com/siebertnet/passwordrecoveryreset.do',
      ],
    },
    {
      id: 1,
      name: 'Asea Brown Boveri Project',
      description:
        'Implemented new features for connectivity of devices using the micro front end architecture for devices and buildings, Where user can CRUD operations on the sites and devices page',
      summary:
        'Created dynamic reactive forms that are generated based on backend responses',
      tags: [TagDetails.ANGULAR, TagDetails.TYPESCRIPT, TagDetails.CSS],
      pictures: ['assets/ABB-dashboard.png'],
      projectLinks: ['https://sitemanager.ability.abb/#/auth/home'],
      videoLink: ['https://www.youtube.com/watch?v=tRMY5VV4VpQ'],
    },
    {
      id: 2,
      name: 'Halliburton RTS DEX',
      description:
        'Implemented new features in RTX DEX and upgraded to Angular material library removed ngPrime. Upated Angular version of the project from Angular 8 to Angular 14 by updating all dependencies.',
      summary:
        'Worked in a data exchange solution (RTS DEX) and new database (RTS Core)',
      tags: [TagDetails.ANGULAR, TagDetails.HTML, TagDetails.NODEJS],
      projectLinks: ['https://www.halliburton.com/'],
    },
    {
      id: 3,
      name: 'Daintree DCS',
      description:
        'Developed an alerts feature for DCS, enabling user notifications via email and SMS when specific devices reach threshold values.Participated in code reviews, identified and resolved major issues, and optimized code for better performance and efficiency',
      summary:
        'Implemented new features and optimized the code for better performance',
      tags: [TagDetails.ANGULAR, TagDetails.TYPESCRIPT, TagDetails.AZURE],
      pictures: [
        'assets/daintree-dashboard.png',
        'assets/daintree-site.png',
        'assets/daintree-addsite.png',
      ],
      projectLinks: [
        'https://www.led.com/controls-sensors/daintree-wireless-controls/daintree-controls-software',
        'https://auth.st.daintree.io/login',
      ],
      videoLink: [
        'https://www.youtube.com/watch?v=-8IxIRnSU4o',
        'https://www.youtube.com/watch?v=_LyNrJeX0U8',
      ],
    },
    {
      id: 4,
      name: 'Social Media App - Feta',
      description:
        'Developed Social Media project in ReactJS ,NodeJS and MySql, Where user can register using Email OTP, log in then add post, like, comment on post',
      summary:
        'Social Media Application to add post, comment and like and unlike the post',
      tags: [TagDetails.REACT, TagDetails.NODEJS, TagDetails.MYSQL],
      pictures: ['assets/addPost.png', 'assets/ViewPost.png'],
      projectLinks: ['https://reactnodesocialmedia-fe.onrender.com'],
    },
  ];
  constructor() {}

  getProjects() {
    return this.projects;
  }

  getProjectById(id: number) {
    let projectIs = this.projects.find((proj) => proj.id === id);
    if (projectIs === undefined) {
      throw new Error('there is no project with the id' + id);
    }
    return projectIs;
  }

  getProjectsByFilter(filterTags: TagDetails[]) {
    let filteredProjects: Project[] = [];

    this.projects.forEach(function (project) {
      let foundAll = true;

      filterTags.forEach(function (filterTag: any) {
        if (project.tags.includes(filterTag) == false) {
          foundAll = false;
        }
      });
      if (foundAll) {
        filteredProjects.push(project);
      }
    });
    return filteredProjects;
  }
}
