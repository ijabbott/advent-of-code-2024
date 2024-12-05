export const splitList = (list: string[], separator: string): string[][] => {
    const list1: string[] = [];
    const list2: string[] = [];
    
    list.forEach((item) => {
        const parts = item.split(new RegExp(separator));

        list1.push(parts[0]);
        list2.push(parts[1]);
    })

    return [list1, list2];
}

export const stringsToNumbers = (list: string[]): number[][] => {
    return list.map((item) => item.split(" ").map(Number))
}

export const listSimilarity = (list1: number[], list2: number[]): number => {
    const map1: Map<number, number> = new Map();
    let similarity: number = 0;
    
    list1.forEach((item: number) => {
        const itemCount: number | undefined = map1.get(item);
        if(itemCount) {
            map1.set(item, itemCount + 1);
        } else {
            map1.set(item, 1);
        }
    });

    list2.forEach((item: number) => {
        const itemCount: number | undefined = map1.get(item);

        if(itemCount) {
            similarity += itemCount * item;
        }
    })

    return similarity;
};

export const isDirectionalSequenceWithLimit = (list: number[], limit: number): boolean => {
    let previousSign = Math.sign(list[1] - list[0]);
    let previousNumber = list[0];
    let errorCount = 0;
    for(let i = 1; i < list.length; i++) {
        const difference = list[i] - previousNumber;
        const sign = Math.sign(difference);
        // //     51,51,55,56,59
        // console.log("Current: " + list[i]);
        // console.log("Previous: " + previousNumber)
        // console.log("Difference: " + difference);
        // console.log("Sign: " + sign)
        if((sign !== previousSign) || Math.abs(difference) > limit || difference === 0) {

            if (errorCount === 1) {
                return false;
            } else if(i === list.length - 1) {
                return true;
            } else {
                errorCount++;
                
            }

            if(i !== 1) {
                previousNumber = list[i - 2];
                previousSign = Math.sign(list[i] - list[i - 2])
                i--
            } else {
                previousNumber = list[1];
                previousSign = Math.sign(list[2] - list[1])
            }
        } else {
            previousSign = sign;
            previousNumber = list[i];
        }

        
    }

    return true;
}
