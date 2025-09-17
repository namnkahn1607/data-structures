/* 695. max area of island */
// #: graph dfs/bfs + disjoint set

class src695 {
    maxAreaOfIsland(grid: number[][]): number {
        const [row, col] = [grid.length, grid[0].length];
        const dirs = [[0, -1], [-1, 0], [0, 1], [1, 0]];

        const dfs = function(r: number, c: number): number {
            if (r === row || c === col ||
                Math.min(r, c) < 0 || grid[r][c] !== 1)
                return 0;

            grid[r][c] = 2;
            let area = 1;

            for (const [x, y] of dirs)
                area += dfs(r + x, c + y);

            return area;
        };

        let ans = 0;

        for (let r = 0; r < row; ++r) {
            for (let c = 0; c < col; ++c) {
                if (grid[r][c] === 1)
                    ans = Math.max(ans, dfs(r, c));
            }
        }

        return ans;
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
        let ans: number = new src695().maxAreaOfIsland(grid);
        console.log(ans);
    }
}

src695.main();

// linked problem: 200

// bfs + disjoint set: https://neetcode.io/solutions/max-area-of-island