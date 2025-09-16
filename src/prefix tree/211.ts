/* 211. design add and search word data structure */
// #: prefix tree
import { TrieNode, Trie } from "./trie";

class WordDictionary extends Trie {
    addWord(word: string): void {
        let cur: TrieNode = this.root;

        for (const c of word) {
            if (!cur.children.has(c))
                cur.children.set(c, new TrieNode());

            cur = cur.children.get(c)!;
        }

        cur.terminal = true;
    }

    search(word: string): boolean {
        const searchFrom = function(cur: TrieNode, start: number): boolean {
            for (let i = start; i < word.length; ++i) {
                const c = word[i];

                if (c === '.') {
                    for (const child of cur.children.values()) {
                        if (searchFrom(child, i + 1))
                            return true;
                    }

                    return false;

                } else if (!cur.children.has(c))
                    return false;

                cur = cur.children.get(c)!;
            }

            return cur.terminal;
        };

        return searchFrom(this.root, 0);
    }

    public static main(): void {
        // add commands & arguments
        const args: string[] = [
            "day", "bay", "may", "say", "day", ".ay", "b.."
        ];

        const cmds: string[] = [
            "addWord", "addWord", "addWord", "search",
            "search", "search", "search"
        ]

        // initialize WordDictionary & operate
        const fig = new WordDictionary();
        const ans: string[] = ["null"];

        for (let i = 0; i < args.length; ++i) {
            switch (cmds[i]) {
                case "addWord":
                    fig.addWord(args[i]);
                    ans.push("null");
                    break;

                case "search":
                    ans.push(String(fig.search(args[i])));
                    break;

                default:
                    throw new Error("illegal argument exception");
            }
        }

        console.log(ans.join(" "));
    }
}

WordDictionary.main();