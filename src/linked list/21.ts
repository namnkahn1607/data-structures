/* 21. merge 2 sorted lists */
// #: llist + recursion

import { createSLList, ListNode, printSLList } from "./linked list";

class src21 {
    static mergeTwoLists(l1: ListNode | null, l2: ListNode | null): ListNode | null {
        if (!l1) return l2;

        if (!l2) return l1;

        if (l1.val <= l2.val) {
            l1.next = src21.mergeTwoLists(l1.next, l2);
            return l1;
        } else {
            l2.next = src21.mergeTwoLists(l1, l2.next);
            return l2;
        }
    }

    static mergeTwoLists2(l1: ListNode | null, l2: ListNode | null): ListNode | null {
        let dummy: ListNode = new ListNode();
        let cur: ListNode = dummy;

        while (l1 || l2) {
            if (!l2 || (l1 && l1.val <= l2.val)) {
                cur.next = l1;
                l1 = l1!.next;
            } else {
                cur.next = l2;
                l2 = l2.next;
            }

            cur = cur.next!;
        }

        return dummy.next;
    }

    public static main(): void {
        // add 2 linked lists
        const l1: ListNode | null = createSLList([2, 4, 6, 8, 10]);
        const l2: ListNode | null = createSLList([1, 3]);

        const l3: ListNode | null = createSLList([1, 3, 5]);
        const l4: ListNode | null = createSLList([2, 4, 6]);

        // merge 2 lists into one
        let ans1 = src21.mergeTwoLists(l1, l2);
        printSLList(ans1);

        let ans2 = src21.mergeTwoLists2(l3, l4);
        printSLList(ans2);
    }
}

src21.main();