import { createReadStream } from 'node:fs';
import { once } from 'node:events'
import { createInterface } from 'node:readline/promises';

export const readToArray = async (filePath: string): Promise<string[]> => {
    const lines:string[] = [];
    const rl = createInterface({
        input: createReadStream(filePath),
        crlfDelay: Infinity
    });

    rl.on('line', (line) => {
        lines.push(line);
    })

    await once(rl, 'close');
    
    return lines;
} 
