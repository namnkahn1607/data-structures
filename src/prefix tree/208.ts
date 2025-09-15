/* 208. implement prefix tree */
// data structure: Trie

import { TrieNode } from "./trie node";

class PrefixTree {
    constructor(
        public root = new TrieNode()
    ) {}

    insert(word: string): void {
        let cur: TrieNode = this.root;

        for (const c of word) {
            if (!cur.children.has(c))
                cur.children.set(c, new TrieNode());

            cur = cur.children.get(c)!;
        }

        cur.terminal = true;
    }

    search(word: string): boolean {
        let cur: TrieNode = this.root;

        for (const c of word) {
            if (!cur.children.has(c))
                return false;

            cur = cur.children.get(c)!;
        }

        return cur.terminal;
    }

    startsWith(prefix: string): boolean {
        let cur: TrieNode = this.root;

        for (const c of prefix) {
            if (!cur.children.has(c))
                return false;

            cur = cur.children.get(c)!;
        }

        return true;
    }

    public static main(): void {
        // add commands & arguments
        const args: string[] = [
            "apple", "apple", "app", "app", "app", "app"
        ];

        const cmds: string[] = [
            "insert", "search", "search", "startsWith", "insert", "search"
        ];

        // initialize Prefix Tree & operate
        const fig = new PrefixTree();
        const ans: string[] = ["null"];

        for (let i = 0; i < args.length; ++i) {
            switch (cmds[i]) {
                case "insert":
                    fig.insert(args[i]);
                    ans.push("null");
                    break;

                case "search":
                    ans.push(String(fig.search(args[i])));
                    break;

                case "startsWith":
                    ans.push(String(fig.startsWith(args[i])));
                    break;

                default:
                    throw new Error("illegal arguments exception");
            }
        }

        console.log(ans.join(" "));
    }
}

PrefixTree.main();