export class TagDetails{
    static readonly ANGULAR= new TagDetails('Angular','red');
    static readonly TYPESCRIPT= new TagDetails('Typescript','blue');
    static readonly JAVASCRIPT= new TagDetails('Javascript','orange');
    static readonly HTML= new TagDetails('Html','grey');
    static readonly CSS= new TagDetails('CSS','darkblue');
    static readonly REACT= new TagDetails('React','purple');
    static readonly NODEJS= new TagDetails('NodeJS','green');
    private constructor(private readonly name:string,public readonly color:string){

    }

    toString(){
        return this.name
    }
}