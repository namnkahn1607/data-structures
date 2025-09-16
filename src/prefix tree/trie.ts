/* data structure: Prefix Tree */

export class TrieNode {
    constructor(
        public children = new Map<string, TrieNode>,
        public terminal: boolean = false
    ) {}
}

export class Trie {
    constructor(
        protected root = new TrieNode()
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
}