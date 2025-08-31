/* 206. reverse linked list */
// #: llist + recursion
import { ListNode, SinglyLinkedList } from "./linked list";

class src206 {
    // 1. iteration
    reverseList(head: ListNode | null): ListNode | null {
        let [prv, cur]: [ListNode | null, ListNode | null] = [null, head];

        while (cur) {
            const nxtNode: ListNode = cur.next!;
            cur.next = prv;
            prv = cur;
            cur = nxtNode;
        }

        return prv;
    }

    // 2. recursion
    reverseList2(head: ListNode | null): ListNode | null {
        if (!head) return null;

        let newHead: ListNode | null = head;

        if (head.next) {
            newHead = this.reverseList2(head.next);
            head.next.next = head;
        }

        head.next = null;

        return newHead;
    }

    public static main(): void {
        // add linked list
        const head: ListNode | null = SinglyLinkedList.createSLList([0, 1, 2, 3, 4]);

        // reverse the order of linked list
        let ans1: ListNode | null = new src206().reverseList(head);
        SinglyLinkedList.printSLList(ans1);

        let ans2: ListNode | null = new src206().reverseList2(ans1);
        SinglyLinkedList.printSLList(ans2);
    }
}

src206.main();