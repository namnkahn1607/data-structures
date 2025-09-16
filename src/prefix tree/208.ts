/* 208. implement prefix tree */
// #: prefix tree
import { Trie } from "./trie";

class PrefixTree extends Trie {
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