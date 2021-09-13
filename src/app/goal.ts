export class Goal {
    showDescription:Boolean;

    constructor ( public id: number,  public name: string, public details: string, public completionDate:Date)
    {
        this.showDescription=false;

    }
}
