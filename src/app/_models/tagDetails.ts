export class TagDetails{

    static readonly ANGULAR= new TagDetails('Angular','red');
    static readonly TYPESCRIPT= new TagDetails('Typescript','BurlyWood');
    static readonly JAVASCRIPT= new TagDetails('Javascript','orange');
    static readonly HTML= new TagDetails('Html','Sienna');
    static readonly CSS= new TagDetails('CSS','darkblue');
    static readonly REACT= new TagDetails('React','purple');
    static readonly NODEJS= new TagDetails('NodeJS','green');
    static readonly AZURE= new TagDetails('Azure','lightSalmon');
    static readonly JIRA= new TagDetails('Jira','Magenta');
    private constructor(private readonly name:string,public readonly color:string){

    }

    toString(){
        return this.name
    }
}