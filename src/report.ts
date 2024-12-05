export class Report {
    levels:number[] = []

    constructor(levels:string) {
        this.levels = levels.split(" ").map(Number);
    }

    isSafe(): boolean {
        let safe:boolean = false;

        if(this.levels.length <= 1) {
            return safe;
        }

        const direction:number = Math.sign(this.levels[1] - this.levels[0]);

        safe = this.levels.every((level:number, index) => {
            const previousLevel:number = this.levels[index - 1];
            
            if((previousLevel === undefined) ||
                (((direction === 1) && (level > previousLevel)) ||
                ((direction === -1) && (level < previousLevel))) &&
                ((Math.abs(level - previousLevel) <= 3))
                ) {
                return true;
            }

            return false;
        });
        
        return safe;
    }
}