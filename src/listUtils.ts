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

    for(let i = 1; i < list.length; i++) {
        const difference = list[i] - list[i - 1];
        const sign = Math.sign(difference);

        if((sign !== previousSign) || Math.abs(difference) > limit) {
            return false;
        }

        previousSign = sign;
    }

    return true;
}
