/* 1926. nearest exit from entrance in maze */
// #: graph bfs
import { Queue } from "datastructures-js";

class src1926 {
    nearestExit(maze: string[][], entrance: number[]): number {
        const [row, col] = [maze.length, maze[0].length];
        const dirs = [[0, -1], [-1, 0], [0, 1], [1, 0]];

        const qu = new Queue<number[]>([entrance]);
        let dist = 0;

        while (!qu.isEmpty()) {
            const len = qu.size();

            for (let i = 0; i < len; ++i) {
                const [R, C] = qu.dequeue();

                if ((R === 0 || R === row - 1 || C === 0 || C === col - 1) &&
                    (R !== entrance[0] || C !== entrance[1]))
                    return dist;

                for (const [dR, dC] of dirs) {
                    const [newR, newC] = [R + dR, C + dC];

                    if (newR === row || newC === col ||
                        Math.min(newR, newC) < 0 || maze[newR][newC] !== ".")
                        continue;

                    qu.enqueue([newR, newC]);
                    maze[newR][newC] = "+";
                }
            }

            ++dist;
        }

        return -1;
    }

    public static main(): void {
        // add maze
        const maze: string[][] = [
            ["+","+",".","+"],
            [".",".",".","+"],
            ["+","+","+","."]
        ];

        const entrance = [1, 2];

        // calculate distance to nearest exit
        let ans: number = new src1926().nearestExit(maze, entrance);
        console.log(ans);
    }
}

src1926.main();