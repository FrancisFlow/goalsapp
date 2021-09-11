export class Goal {
    showDescription:Boolean;

    constructor ( public id: number,  public name: string, public details: string)
    {
        this.showDescription=false;

    }
}
