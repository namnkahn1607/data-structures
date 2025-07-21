/* data structures: Binary Tree */

export class TreeNode {
    constructor(public val: number, public left: TreeNode | null = null, public right: TreeNode | null = null) {}
}

export class Trees {
    public static createBinaryTree(arr: (number | null)[]): TreeNode | null {
        if (arr === null || arr.length === 0 || arr[0] === null)
            return null;

        const root: TreeNode = new TreeNode(arr[0]);

        const queue: TreeNode[] = [root];
        let i = 0, j = 1;

        while (i < queue.length && j < arr.length) {
            const cur: TreeNode = queue[i++];

            if (arr[j] !== null) {
                cur.left = new TreeNode(arr[j]!);
                queue.push(cur.left);
            }

            ++j;

            if (j < arr.length && arr[j] !== null) {
                cur.right = new TreeNode(arr[j]!);
                queue.push(cur.right);
            }

            ++j;
        }

        return root;
    }

    public static convertToArray(root: TreeNode | null): (number | null)[] {
        if (!root) return [null];

        const ans: (number | null)[] = [];
        const queue: (TreeNode | null)[] = [root];
        let i = 0;

        while (i < queue.length) {
            const cur = queue[i++];

            if (cur) {
                ans.push(cur.val);
                queue.push(cur.left);
                queue.push(cur.right);
            } else {
                ans.push(null);
            }
        }

        while (ans.length > 0 && ans[ans.length - 1] === null)
            ans.pop();

        return ans;
    }
}

export function preorderTraverse(root: TreeNode | null): void {
    const arr: number[] = [];

    function preorder(node: TreeNode | null, arr: number[]): void {
        if (!node) return;

        arr.push(node.val);
        preorder(node.left, arr);
        preorder(node.right, arr);
    }

    preorder(root, arr);

    console.log(arr.join(" "));
}

export function inorderTraverse(root: TreeNode | null): void {
    const arr: number[] = [];

    function inorder(node: TreeNode | null, arr: number[]): void {
        if (!node) return;

        inorder(node.left, arr);
        arr.push(node.val);
        inorder(node.right, arr);
    }

    inorder(root, arr);

    console.log(arr.join(" "));
}

export function postorderTraverse(root: TreeNode | null): void {
    const arr: number[] = [];

    function postorder(node: TreeNode | null, arr: number[]): void {
        if (!node) return;

        postorder(node.left, arr);
        postorder(node.right, arr);
        arr.push(node.val);
    }

    postorder(root, arr);

    console.log(arr.join(" "));
}