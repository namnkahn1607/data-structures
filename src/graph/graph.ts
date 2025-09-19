/* data structure: Graph */

export class _Node {
    constructor(
        public val: number,
        public neighbors: _Node[] = []
    ) {}
}

export class Graphs {
    public static createGraph(adjList: number[][]): _Node | null {
        const N: number = adjList.length;

        if (N === 0) return null;

        if (this.validateAdjacentList(adjList, N))
            throw new Error("illegal argument exception: node value out of bound");

        const nodes = Array.from({ length: N }, (_, i) => new _Node(i + 1));

        for (let i = 0; i < N; ++i) {
            for (const val of adjList[i])
                nodes[i].neighbors.push(nodes[val - 1]);
        }

        return nodes[0];
    }

    private static validateAdjacentList(adjList: number[][], N: number): boolean {
        if (N < 0) return false;

        for (const list of adjList) {
            for (const val of list) {
                if (val <= 0 || val > N)
                    return false;
            }
        }

        return true;
    }
}