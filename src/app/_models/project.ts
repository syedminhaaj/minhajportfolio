import { TagDetails } from "./tagDetails";

export interface Project{
    id:number;
    name:string;
    description:string;
    tags:TagDetails[];
    pictures?:string[];
    summary:string;
}