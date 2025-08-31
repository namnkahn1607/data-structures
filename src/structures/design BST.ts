/* data structures: Design Binary Tree */

class TreeNode {
    constructor(
        public val: [number, number],
        public left: TreeNode | null = null,
        public right: TreeNode | null = null
    ) {}
}

class TreeMap {
    constructor(private root: TreeNode | null = null) {}

    insert(key: number, val: number): void {
        if (!this.root) {
            this.root = new TreeNode([key, val]);
            return;
        }

        let [prev, cur]: [TreeNode | null, TreeNode | null] = [null, this.root];

        while (cur) {
            prev = cur;

            if (key > cur.val[0])
                cur = cur.right;
            else if (key < cur.val[0])
                cur = cur.left;
            else {
                cur.val[1] = val;
                return;
            }
        }

        const newNode: TreeNode | null = new TreeNode([key, val]);

        if (!prev) return;

        if (key < prev.val[0])
            prev.left = newNode;
        else
            prev.right = newNode;
    }

    get(key: number): number {
        let cur: TreeNode | null = this.root;

        while (cur) {
            if (key > cur.val[0])
                cur = cur.right;
            else if (key < cur.val[0])
                cur = cur.left;
            else
                return cur.val[1];
        }

        return -1;
    }

    getMin(): number {
        let cur: TreeNode | null = this.root;

        if (!cur) return -1;

        while (cur.left)
            cur = cur.left;

        return cur.val[1];
    }

    getMax(): number {
        let cur: TreeNode | null = this.root;

        if (!cur) return -1;

        while (cur.right)
            cur = cur.right;

        return cur.val[1];
    }

    remove(key: number): void {
        const deleteNode = function(node: TreeNode | null, key: number): TreeNode | null {
            if (!node) return null;

            if (key < node.val[0]) {
                node.left = deleteNode(node.left, key);
                return node;
            } else if (key > node.val[0]) {
                node.right = deleteNode(node.right, key);
                return node;
            }

            if (!node.right)
                return node.left;

            let cur: TreeNode = node.right;

            while (cur.left)
                cur = cur.left;

            cur.left = node.left;

            return node.right;
        };

        this.root = deleteNode(this.root, key);
    }

    getInorderKeys(): number[] {
        const ans: number[] = [];

        const dfs = function(node: TreeNode | null): void {
            if (!node) return;

            dfs(node.left);
            ans.push(node.val[0]);
            dfs(node.right);
        };

        dfs(this.root);

        return ans;
    }

    private static evaluate(treemap: TreeMap, cmds: string[], args: number[][]): string {
        const ans: string[] = [];
        const m: number = cmds.length;
        let j = 0;

        for (let i = 0; i < m; ++i) {
            switch(cmds[i]) {
                case "insert": {
                    const [key, val] = args[j++];
                    treemap.insert(key, val);
                    ans.push("null");
                    break;
                }

                case "get": {
                    const [key] = args[j++];
                    ans.push(String(treemap.get(key)));
                    break;
                }

                case "getMin":
                    ans.push(String(treemap.getMin()));
                    break;

                case "getMax":
                    ans.push(String(treemap.getMax()));
                    break;

                case "remove": {
                    const [key] = args[j++];
                    treemap.remove(key);
                    ans.push("null");
                    break;
                }

                case "getInorderKeys":
                    ans.push(treemap.getInorderKeys().join(" "));
                    break;

                default:
                    throw new Error("invalid command");
            }
        }

        return ans.join(", ");
    }

    public static main(): void {
        // create BST
        let tree = new TreeMap();

        // add commands & arguments
        const cmds1: string[] = [
            "insert", "get", "insert", "getMin", "getMax"
        ];
        const args1: number[][] = [
            [1, 2], [1], [4, 0]
        ];

        const cmds2: string[] = [
            "insert", "insert", "insert", "insert", "getInorderKeys", "remove", "getInorderKeys"
        ];
        const args2: number[][] = [
            [1, 2], [4, 2], [3, 7], [2, 1], [1]
        ];

        // evaluate commands & arguments
        console.log(this.evaluate(tree, cmds1, args1));
        tree = new TreeMap();
        console.log(this.evaluate(tree, cmds2, args2));
    }
}

TreeMap.main();