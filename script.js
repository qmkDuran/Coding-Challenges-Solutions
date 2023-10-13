var hasCycle = function (head) {
  let [slow, fast] = [head, head];

  while (fast && fast.next) {
    /* Time O(N) */
    slow = slow.next;
    fast = fast.next.next;

    const hasCycle = slow === fast;
    if (hasCycle) return true;
  }

  return false;
};

hasCycle()
