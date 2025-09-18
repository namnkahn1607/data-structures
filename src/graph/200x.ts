/* 200. number of islands */
// #: graph dfs/bfs + disjoint set

class src200 {
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

    public static main(): void {
        // add water & land grid
        const grid: string[][] = [
            ["1","1","0","0","1"],
            ["1","1","0","0","1"],
            ["0","0","1","0","0"],
            ["0","0","0","1","1"]
        ];

        // calculate number of islands
        let ans = new src200().numIslands(grid);
        console.log(ans);
    }
}

src200.main();

// linked problem: 695

// bfs + disjoint set: https://neetcode.io/solutions/number-of-islands