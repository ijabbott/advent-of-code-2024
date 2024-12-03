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