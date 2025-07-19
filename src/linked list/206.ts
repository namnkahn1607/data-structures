/* 206. reverse linked list */
// #: llist
import { createSLList, ListNode, printSLList } from "./linked list";

class src206 {
    static reverseList(head: ListNode | null): ListNode | null {
        let cur: ListNode | null = head,
            prv: ListNode | null = null;

        while (cur) {
            const nxtNode: ListNode = cur.next;
            cur.next = prv;
            prv = cur;
            cur = nxtNode;
        }

        return prv;
    }

    public static main(): void {
        // add linked list
        const head: ListNode | null = createSLList([0, 1, 2, 3, 4]);

        // reverse the order of linked list
        let ans: ListNode | null = src206.reverseList(head);

        printSLList(ans);
    }
}

src206.main();