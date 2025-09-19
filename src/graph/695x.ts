/* 695. max area of island */
// #: graph dfs/bfs + disjoint set
import { Queue } from "datastructures-js";
import _ from "lodash";

class src695 {
    // 1. DFS
    maxAreaOfIsland(grid: number[][]): number {
        const [row, col] = [grid.length, grid[0].length];
        const dirs = [[0, -1], [-1, 0], [0, 1], [1, 0]];

        const dfs = function(R: number, C: number): number {
            if (R === row || C === col ||
                Math.min(R, C) < 0 || grid[R][C] !== 1)
                return 0;

            grid[R][C] = 2;
            let area = 1;

            for (const [dR, dC] of dirs)
                area += dfs(R + dR, C + dC);

            return area;
        };

        let ans = 0;

        for (let R = 0; R < row; ++R) {
            for (let C = 0; C < col; ++C) {
                if (grid[R][C] === 1)
                    ans = Math.max(ans, dfs(R, C));
            }
        }

        return ans;
    }

    // 2. BFS
    maxAreaOfIsland2(grid: number[][]): number {
        const [row, col] = [grid.length, grid[0].length];
        const dirs = [[0, -1], [-1, 0], [0, 1], [1, 0]];

        const qu = new Queue<number[]>();
        let maxArea = 0;

        for (let r = 0; r < row; ++r) {
            for (let c = 0; c < col; ++c) {
                if (grid[r][c] === 1) {
                    qu.enqueue([r, c]);
                    grid[r][c] = 2;
                    let area = 1;

                    while (!qu.isEmpty()) {
                        const [R, C] = qu.dequeue();

                        for (const [dR, dC] of dirs) {
                            const [newR, newC] = [R + dR, C + dC];

                            if (newR === row || newC === col ||
                                Math.min(newR, newC) < 0 || grid[newR][newC] !== 1)
                                continue;

                            qu.enqueue([newR, newC]);
                            grid[newR][newC] = 2;
                            ++area;
                        }
                    }

                    maxArea = Math.max(maxArea, area);
                }
            }
        }

        return maxArea;
    }

    public static main(): void {
        // add islands & water
        const grid: number[][] = [
            [0, 1, 1, 0, 1],
            [1, 0, 1, 0, 1],
            [0, 1, 1, 0, 1],
            [0, 1, 0, 0, 1]
        ];

        // calculate maxima island area
        let ans1: number = new src695().maxAreaOfIsland(_.cloneDeep(grid));
        let ans2: number = new src695().maxAreaOfIsland2(grid);

        console.log(ans1, ans2);
    }
}

src695.main();

// linked problem: 200

// disjoint set: https://neetcode.io/solutions/max-area-of-island