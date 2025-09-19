/* 200. number of islands */
// #: graph dfs/bfs + disjoint set
import { Queue } from "datastructures-js";
import _ from "lodash";

class src200 {
    // 1. DFS
    numIslands(grid: string[][]): number {
        const [row, col] = [grid.length, grid[0].length];
        const dirs = [[0, -1], [-1, 0], [0, 1], [1, 0]];

        const dfs = function(R: number, C: number): void {
            if (R === row || C === col ||
                Math.min(R, C) < 0 || grid[R][C] !== "1")
                return;

            grid[R][C] = "#";

            for (const [dR, dC] of dirs)
                dfs(R + dR, C + dC);
        };

        let ans = 0;

        for (let R = 0; R < row; ++R) {
            for (let C = 0; C < col; ++C) {
                if (grid[R][C] === "1") {
                    dfs(R, C);
                    ++ans;
                }
            }
        }

        return ans;
    }

    // 2. BFS
    numIslands2(grid: string[][]): number {
        const [row, col] = [grid.length, grid[0].length];
        const dirs = [[0, -1], [-1, 0], [0, 1], [1, 0]];

        const qu = new Queue<number[]>();
        let island = 0;

        for (let r = 0; r < row; ++r) {
            for (let c = 0; c < col; ++c) {
                if (grid[r][c] === "1") {
                    qu.enqueue([r, c]);
                    grid[r][c] = "#";
                    ++island;

                    while (!qu.isEmpty()) {
                        const [R, C] = qu.dequeue();

                        for (const [dR, dC] of dirs) {
                            const [newR, newC] = [R + dR, C + dC];

                            if (newR === row || newC === col ||
                                Math.min(newR, newC) < 0 || grid[newR][newC] !== "1")
                                continue;

                            qu.enqueue([newR, newC]);
                            grid[newR][newC] = "#";
                        }
                    }
                }
            }
        }

        return island;
    }

    public static main(): void {
        // add water & land grid
        const grid: string[][] = [
            ["1","1","0","0","1"],
            ["1","1","0","0","1"],
            ["0","0","1","0","0"],
            ["0","0","0","1","1"]
        ];

        // calculate number of islands
        let ans1 = new src200().numIslands(_.cloneDeep(grid));
        let ans2 = new src200().numIslands2(grid);

        console.log(ans1, ans2);
    }
}

src200.main();

// linked problem: 695

// disjoint set: https://neetcode.io/solutions/number-of-islands