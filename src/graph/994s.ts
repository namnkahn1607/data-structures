/* 994. rotten fruits */
// #: graph bfs
import { Queue } from "datastructures-js";

class src994 {
    fruitRotting(grid: number[][]): number {
        const [row, col] = [grid.length, grid[0].length];
        const dirs = [[0, -1], [-1, 0], [0, 1], [1, 0]];

        const qu = new Queue<number[]>();
        let [fresh, time] = [0, 0];

        for (let R = 0; R < row; ++R) {
            for (let C = 0; C < col; ++C) {
                switch (grid[R][C]) {
                    case 1: ++fresh; break;
                    case 2: qu.enqueue([R, C]); break;
                }
            }
        }

        while (fresh > 0 && !qu.isEmpty()) {
            const len = qu.size();

            for (let i = 0; i < len; ++i) {
                const [R, C] = qu.dequeue();

                for (const [dR, dC] of dirs) {
                    const [newR, newC] = [R + dR, C + dC];

                    if (newR === row || newC === col ||
                        Math.min(newR, newC) < 0 || grid[newR][newC] !== 1)
                        continue;

                    --fresh;
                    qu.enqueue([newR, newC]);
                    grid[newR][newC] = 2;
                }
            }

            ++time;
        }

        return (fresh === 0) ? time : -1;
    }

    public static main(): void {
        // add fruit table
        const grid: number[][] = [
            [1, 1, 0],
            [0, 1, 1],
            [0, 1, 2]
        ];

        // elapsed time till all fruits are rotten
        let ans: number = new src994().fruitRotting(grid);
        console.log(ans);
    }
}

src994.main();

// bfs without queue?!: https://neetcode.io/solutions/rotting-oranges