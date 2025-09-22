/* 207. course schedule */
// #: graph dfs/bfs

class src207 {
    // 1. DFS
    canFinish(numCourses: number, prerequisites: number[][]): boolean {
        const adjList = this.createAdjList(numCourses, prerequisites);
        const colors = new Array<number>(numCourses).fill(0);

        const dfs = function(vertex: number): boolean {
            if (colors[vertex] === 1)
                return true;

            if (colors[vertex] === 2)
                return false;

            colors[vertex] = 1;

            for (const neigh of adjList[vertex]) {
                if (dfs(neigh))
                    return true;
            }

            colors[vertex] = 2;
            return false;
        };

        for (let i = 0; i < numCourses; ++i) {
            if (dfs(i)) return false;
        }

        return true;
    }

    private createAdjList(
        numCourses: number, prerequisites: number[][]
    ): number[][] {
        const adjList = Array.from({
            length: numCourses
        }, () => new Array<number>());

        for (const [dst, src] of prerequisites)
            adjList[src].push(dst);

        return adjList;
    }

    public static main(): void {
        // add prerequisites
        const requisites: number[][] = [
            [0, 10], [3, 18], [5, 5], [6, 11],
            [11, 14], [13, 1], [15, 1], [17, 4]
        ];

        const numCourse: number = 20;

        // check if possible to finish all
        let ans1: boolean = new src207().canFinish(numCourse, requisites);
        console.log(ans1);
    }
}

src207.main();

// Kahn's algorithm (BFS): https://neetcode.io/solutions/course-schedule