/**
 * Problem: 106. Construct Binary Tree from Inorder and Postorder Traversal
 * Source: https://leetcode.com/problems/construct-binary-tree-from-inorder-and-postorder-traversal/
 *
 * Given the inorder and postorder traversals
 * of the same binary tree, construct and
 * return the original binary tree.
 *
 * Example:
 * inorder = [9,3,15,20,7]
 * postorder = [9,15,7,20,3]
 *
 * Output:
 * [3,9,20,null,null,15,7]
 *
 * Idea:
 * Recursion + Hash Map
 *
 * Inorder:
 *     Left -> Root -> Right
 *
 * Postorder:
 *     Left -> Right -> Root
 *
 * 1. The last value in postorder is always
 *    the root of the current subtree.
 * 2. Find this root in inorder.
 * 3. Values to the left belong to the
 *    left subtree.
 * 4. Values to the right belong to the
 *    right subtree.
 * 5. Since we process postorder from right
 *    to left, we must build the right subtree
 *    before the left subtree.
 *
 * Time Complexity:
 * O(n)
 *
 * Space Complexity:
 * O(n)
 *
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function(inorder, postorder) {
    const inorderIndex = new Map();

    for (let i = 0; i < inorder.length; i++) {
        inorderIndex.set(inorder[i], i);
    }

    let postorderIndex = postorder.length - 1;

    const build = (left, right) => {
        if (left > right) {
            return null;
        }

        const rootValue = postorder[postorderIndex--];

        const root = new TreeNode(rootValue);

        const mid = inorderIndex.get(rootValue);

        // Build the right subtree first because
        // postorder is processed from right to left.
        root.right = build(mid + 1, right);
        root.left = build(left, mid - 1);

        return root;
    };

    return build(0, inorder.length - 1);
};
