/* data structures: Design Graph */

import { Queue } from "datastructures-js";

class Graph {
    constructor(private adjList = new Map<number, number[]>()) {}

    addEdge(src: number, dst: number): void {
        const graph = this.adjList;

        const initNode = function(val: number): void {
            if (!graph.has(val))
                graph.set(val, []);
        };

        initNode(src);
        initNode(dst);

        graph.get(src)!.push(dst);
    }

    removeEdge(src: number, dst: number): boolean {
        const graph = this.adjList;

        if (!graph.has(src) || !graph.has(dst))
            return false;

        const newNeighbor = [];

        for (const neighbor of graph.get(src)!) {
            if (neighbor === dst) continue;

            newNeighbor.push(neighbor);
        }

        graph.set(src, newNeighbor);
        return true;
    }

    // 1. BFS
    hasPath(src: number, dst: number): boolean {
        const graph = this.adjList;
        const visited = new Set<number>();
        const qu = new Queue<number>([src]);

        while (!qu.isEmpty()) {
            const val = qu.dequeue();

            if (val === dst)
                return true;

            for (const neighbor of graph.get(val)!) {
                if (!visited.has(neighbor)) {
                    qu.push(neighbor);
                    visited.add(neighbor);
                }
            }
        }

        return false;
    }

    // 2. DFS
    hasPath2(src: number, dst: number): boolean {
        const graph = this.adjList;
        const visited = new Set<number>([src]);

        const dfs = function(src: number, dst: number): boolean {
            if (src === dst)
                return true;

            visited.add(src);

            for (const neighbor of graph.get(src)!) {
                if (!visited.has(neighbor) && dfs(neighbor, dst))
                    return true;
            }

            return false;
        };

        return dfs(src, dst);
    }

    public static main(): void {
        // add arguments & commands
        const args: number[][] = [
            [1, 2], [2, 3], [3, 1], [1, 3], [3, 1]
        ];

        const cmds: string[] = [
            "addEdge", "addEdge", "addEdge", "hasPath", "hasPath"
        ];

        // initialize Graph & operate
        const graph = new Graph();
        const ans: string[] = [];

        for (let i = 0; i < args.length; ++i) {
            if (args[i].length < 2)
                throw new Error("illegal argument exception");

            const [src, dst] = args[i];
            
            switch (cmds[i]) {
                case "addEdge":
                    ans.push("null");
                    graph.addEdge(src, dst);
                    break;

                case "removeEdge":
                    ans.push(String(graph.removeEdge(src, dst)));
                    break;

                case "hasPath":
                    const bfsRes = graph.hasPath(src, dst);

                    if (bfsRes !== graph.hasPath2(src, dst))
                        throw new Error("logic error occurred");

                    ans.push(String(bfsRes));
                    break;
            }
        }

        console.log(ans.join(" "));
    }
}

Graph.main();