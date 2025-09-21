/* data structures: Graph */

import { Queue } from "datastructures-js";

export class _Node {
    constructor(
        public val: number = 0,
        public neighbors: _Node[] = []
    ) {}
}

export class Graphs {
    public static createGraph(adjList: number[][]): _Node | null {
        const N: number = adjList.length;

        if (N === 0) return null;

        if (!this.validateAdjacentList(adjList, N))
            throw new Error("illegal argument exception: node value out of bound");

        const nodes = Array.from({ length: N }, (_, i) => new _Node(i + 1));

        for (let i = 0; i < N; ++i) {
            for (const neighborVal of adjList[i])
                nodes[i].neighbors.push(nodes[neighborVal - 1]);
        }

        return nodes[0];
    }

    private static validateAdjacentList(adjList: number[][], N: number): boolean {
        if (N < 0) return false;

        for (const list of adjList) {
            for (const val of list) {
                if (val < 1 || val > N)
                    return false;
            }
        }

        return true;
    }

    public static printGraph(node: _Node | null, style: string = "bfs"): void {
        if (node === null) {
            console.log("empty");
            return;
        }

        const graphMap = new Map<_Node, _Node[]>();

        switch (style) {
            case "dfs":
                const dfs = function(node: _Node) {
                    graphMap.set(node, []);
                    const neighbors = graphMap.get(node)!;

                    for (const neighbor of node.neighbors) {
                        neighbors.push(neighbor);

                        if (!graphMap.has(neighbor))
                            dfs(neighbor);
                    }
                };

                dfs(node);
                break;

            case "bfs":
                const qu = new Queue<_Node>([node]);

                while (!qu.isEmpty()) {
                    const cur = qu.dequeue()!;
                    graphMap.set(cur, []);
                    const neighbors = graphMap.get(cur)!;

                    for (const neighbor of cur.neighbors) {
                        neighbors.push(neighbor);

                        if (!graphMap.has(neighbor))
                            qu.enqueue(neighbor);
                    }
                }

                break;

            default:
                throw new Error("No such style exist");
        }

        let ans = "";

        for (const list of graphMap.values())
            ans += list.map(node => { return node.val; }).join(",") + " ";

        console.log(ans);
    }
}