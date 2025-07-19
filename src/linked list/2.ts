/* 2. add 2 numbers */
// #: llist + recursion
import { createSLList, ListNode, printSLList } from "./linked list";

class src2 {
    private static add(l1: ListNode | null, l2: ListNode | null, rem: number): ListNode | null {
        if (!l1 && !l2 && rem === 0)
            return null;

        const val1: number = (l1) ? l1.val : 0;
        const val2: number = (l2) ? l2.val : 0;

        let sum = val1 + val2 + rem;
        rem = Math.trunc(sum / 10);
        sum %= 10;

        return new ListNode(sum, this.add(
            (l1) ? l1.next : null,
            (l2) ? l2.next : null,
            rem
        ));
    }

    // 1. recursion
    static addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
        return this.add(l1, l2, 0);
    }

    // 2. iterative
    static addTwoNumbers2(l1: ListNode | null, l2: ListNode | null): ListNode | null {
        let dummy: ListNode = new ListNode();
        let cur: ListNode = dummy;
        let rem = 0;

        while (l1 || l2 || rem !== 0) {
            const val1: number = (l1) ? l1.val : 0;
            const val2: number = (l2) ? l2.val : 0;

            let sum = val1 + val2 + rem;
            rem = Math.trunc(sum / 10);
            sum %= 10;

            cur.next = new ListNode(sum);
            cur = cur.next;

            l1 = (l1) ? l1.next : null;
            l2 = (l2) ? l2.next : null;
        }

        return dummy.next;
    }

    public static main(): void {
        // add 2 linked lists
        const l1: ListNode | null = createSLList([1, 2, 3]);
        const l2: ListNode | null = createSLList([7, 8, 9]);

        const l3: ListNode | null = createSLList([2, 4, 6]);
        const l4: ListNode | null = createSLList([1, 3, 5]);

        // add 2 numbers into one
        let ans1: ListNode | null = src2.addTwoNumbers(l1, l2);
        printSLList(ans1);

        let ans2: ListNode | null = src2.addTwoNumbers2(l3, l4);
        printSLList(ans2);
    }
}

src2.main();