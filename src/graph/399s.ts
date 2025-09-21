/* 399. evaluate division */
// #: graph dfs/bfs

class src399 {
    // 1. DFS
    calcEquation(
        equations: string[][], values: number[], queries: string[][]
    ): number[] {
        const adjList = this.createAdjList(equations, values);
        const visited = new Set<string>();

        const dfs = function(num: string, den: string): number {
            if (!adjList.has(num) || !adjList.has(den))
                return -1;

            if (num === den)
                return 1;

            visited.add(num);

            for (const [nei, res] of adjList.get(num)!) {
                if (!visited.has(nei)) {
                    const check = dfs(nei, den);

                    if (check !== -1)
                        return res * check;
                }
            }

            visited.delete(num);
            return -1;
        };

        const ans: number[] = [];

        for (const [num, den] of queries) {
            visited.clear();
            ans.push(dfs(num, den));
        }

        return ans;
    }

    private createAdjList(
        equations: string[][], values: number[]
    ): Map<string, [string, number][]> {
        const size: number = values.length;
        const adjList = new Map<string, [string, number][]>();

        for (let i = 0; i < size; ++i) {
            const [num, den] = equations[i];
            const val = values[i];

            if (!adjList.has(num))
                adjList.set(num, []);

            if (!adjList.has(den))
                adjList.set(den, []);

            adjList.get(num)!.push([den, val]);
            adjList.get(den)!.push([num, 1 / val]);
        }

        return adjList;
    }

    public static main(): void {
        // add equations, values & queries
        const equations: string[][] = [["a","b"], ["b","c"], ["ab","bc"]];

        const values: number[] = [4.0, 1.0, 3.25];

        const queries: string[][] = [
            ["a","c"], ["b","a"], ["c","c"],
            ["ab","a"], ["d","d"], ["a", "a"]
        ];

        // evaluate given queries
        let ans1: number[] = new src399().calcEquation(
            equations, values, queries
        );

        console.log(ans1.join(" "));
    }
}

src399.main();

// more sols at: https://neetcode.io/solutions/evaluate-division