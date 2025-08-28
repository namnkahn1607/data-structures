/* 150b. evaluate reverse polish notation */
// #: tree

class src150b {
    evaluateRPN(tokens: string[]): number {
        if (tokens.length === 0) return NaN;

        const dfs = function(): number {
            const token = tokens.pop()!;

            if (!"+-*/".includes(token))
                return Number(token);

            const [right, left] = [dfs(), dfs()];

            switch (token) {
                case "+": return left + right;
                case "-": return left - right;
                case "*": return left * right;
                case "/": return Math.trunc(left / right);
                default: return NaN;
            }
        }

        return dfs();
    }

    public static main(): void {
        // add tokens
        const tokens: string[] = ["1", "2", "+", "3", "*", "4", "-"];

        // evaluate RPN
        let ans: number = new src150b().evaluateRPN(tokens);
        console.log(ans);
    }
}

src150b.main();