/* 200. number of islands */
// #: graph dfs/bfs + disjoint set

class src200 {
    numIslands(grid: string[][]): number {
        const [row, col] = [grid.length, grid[0].length];
        const dirs = [[0, -1], [-1, 0], [0, 1], [1, 0]];

        const dfs = function(r: number, c: number): void {
            if (r === row || c === col ||
                Math.min(r, c) < 0 || grid[r][c] !== "1")
                return;

            grid[r][c] = "#";

            for (const [x, y] of dirs)
                dfs(r + x, c + y);
        };

        let ans = 0;

        for (let r = 0; r < row; ++r) {
            for (let c = 0; c < col; ++c) {
                if (grid[r][c] === "1") {
                    dfs(r, c);
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