/* 133. clone graph */
// #: graph dfs/bfs
import { Graphs, _Node } from "./graph";
import { Queue } from "datastructures-js";
import _ from "lodash";

class src133 {
    // 1. DFS
    cloneGraph(node: _Node | null): _Node | null {
        if (!node) return null;

        const graphMap = new Map<number, _Node>();

        const dfs = function(node: _Node): _Node {
            const val = node.val;

            if (graphMap.has(val))
                return graphMap.get(val)!;

            const clone = new _Node(val);
            graphMap.set(val, clone);

            for (const nei of node.neighbors)
                clone.neighbors.push(dfs(nei));

            return clone;
        };

        return dfs(node);
    }

    // 2. BFS
    cloneGraph2(node: _Node | null): _Node | null {
        if (!node) return null;

        const cloneDict = new Map<_Node, _Node>();
        cloneDict.set(node, new _Node(node.val));
        const qu = new Queue<_Node>([node]);

        while (!qu.isEmpty()) {
            const cur = qu.dequeue();
            const curClone = cloneDict.get(cur)!;

            for (const nei of cur.neighbors) {
                if (!cloneDict.has(nei)) {
                    cloneDict.set(nei, new _Node(nei.val));
                    qu.enqueue(nei);
                }

                const neiClone = cloneDict.get(nei)!;
                curClone.neighbors.push(neiClone);
            }
        }

        return cloneDict.get(node)!;
    }

    public static main(): void {
        // add graph
        const node: _Node | null = Graphs.createGraph([
            [2, 4], [1, 3], [2, 4], [1, 3]
        ]);

        // clone & print the new graph
        let ans1: _Node | null = new src133().cloneGraph(node);
        Graphs.printGraph(ans1);

        let ans2: _Node | null = new src133().cloneGraph2(node);
        Graphs.printGraph(ans2);

        Graphs.printGraph(_.cloneDeep(node));
    }
}

src133.main();