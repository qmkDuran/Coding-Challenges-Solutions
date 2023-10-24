class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");
const e = new Node("e");
const f = new Node("f");

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

const depthFirstValues = (root) => {
  if (root === null) return [];

  const values = [];
  const stack = [root];

  while (stack.length > 0) {
    const node = stack.pop();
    values.push(node.val);

    if (node.right !== null) stack.push(node.right);

    if (node.left !== null) stack.push(node.left);
  }

  return values;
};

//      a
//    /   \
//   b     c
//  / \     \
// d   e     f

depthFirstValues(a);
//    -> ['a', 'b', 'd', 'e', 'c', 'f']

Initialization:

// EXPLANATION

// The tree starts with the root node a.
// The values array is initialized as an empty array.
// The stack is initialized with the root node a.
// First Iteration:

// stack: [a]
// The last node in the stack (a) is popped and its value is added to the values array.
// The right child of a (c) is pushed onto the stack, followed by the left child (b).
// values: [a]
// Second Iteration:

// stack: [c, b]
// The last node in the stack (b) is popped and its value is added to the values array.
// The right child of b (e) is pushed onto the stack, followed by the left child (d).
// values: [a, b]
// Third Iteration:

// stack: [c, e, d]
// The last node in the stack (d) is popped and its value is added to the values array.
// d has no children, so the stack remains unchanged.
// values: [a, b, d]
// Fourth Iteration:

// stack: [c, e]
// The last node in the stack (e) is popped and its value is added to the values array.
// e has no children, so the stack remains unchanged.
// values: [a, b, d, e]
// Fifth Iteration:

// stack: [c]
// The last node in the stack (c) is popped and its value is added to the values array.
// The right child of c (f) is pushed onto the stack. c has no left child.
// values: [a, b, d, e, c]
// Sixth Iteration:

// stack: [f]
// The last node in the stack (f) is popped and its value is added to the values array.
// f has no children, so the stack remains unchanged.
// values: [a, b, d, e, c, f]
// End of Traversal:

// The stack is now empty, so the while loop ends.
// The function returns the values array: [a, b, d, e, c, f].