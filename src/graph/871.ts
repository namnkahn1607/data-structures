/* 871. keys and rooms */
// #: graph dfs/bfs
import { Queue } from "datastructures-js";

class src871 {
    // 1. DFS
    canVisitAllRooms(rooms: number[][]): boolean {
        const visited = new Set<number>();

        const dfs = function(i: number): void {
            visited.add(i);

            for (const key of rooms[i]) {
                if (!visited.has(key))
                    dfs(key);
            }
        };

        dfs(0);

        return visited.size === rooms.length;
    }

    // 2. BFS
    canVisitAllRooms2(rooms: number[][]): boolean {
        const visited = new Set<number>();
        const qu = new Queue<number>([0]);

        while (!qu.isEmpty()) {
            const cur = qu.dequeue();
            visited.add(cur);

            for (const key of rooms[cur]) {
                if (!visited.has(key))
                    qu.enqueue(key);
            }
        }

        return visited.size === rooms.length;
    }

    public static main(): void {
        // add rooms with keys
        const rooms: number[][] = [
            [1, 3], [3, 0, 1], [2], [0]
        ];

        // check if can enter all rooms
        let ans1: boolean = new src871().canVisitAllRooms(rooms);
        let ans2: boolean = new src871().canVisitAllRooms2(rooms);

        console.log(ans1, ans2);
    }
}

src871.main();