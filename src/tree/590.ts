/* 590. n-ary tree postorder traversal */
// #: tree + dfs
import { NaryTree, Node } from "./nary tree";

class src590 {
    // 1. recursive DFS
    postorder(root: Node | null): number[] {
        const ans: number[] = [];
        this.dfs(root, ans);

        return ans;
    }

    private dfs(node: Node | null, ans: number[]): void {
        if (!node) return;

        for (const child of node.children)
            this.dfs(child, ans);

        ans.push(node.val);
    }

    // 2. iterative DFS
    postorder2(root: Node | null): number[] {
        const ans: number[] = [];

        if (!root) return ans;

        const stack: [Node, boolean][] = [[root, false]];

        while (stack.length > 0) {
            const [peek, visited] = stack.pop()!;

            if (visited)
                ans.push(peek.val);
            else {
                stack.push([peek, true]);

                for (let i = peek.children.length - 1; i >= 0; --i)
                    stack.push([peek.children[i], false]);
            }
        }

        return ans;
    }

    public static main(): void {
        // add n-ary tree
        const root: Node | null = NaryTree.createNaryTree([
            1, null, 2, 3, 4, 5, null, null, 6, 7, null, 8, null, 9,
            10, null, null, 11, null, 12, null, 13, null, null, 14
        ]);

        // postorder the n-ary tree
        const solution = new src590();

        let ans1: number[] = solution.postorder(root);
        console.log(ans1.join(" "));

        let ans2: number[] = solution.postorder2(root);
        console.log(ans2.join(" "));
    }
}

src590.main();