/**
 * Problem: 105. Construct Binary Tree from Preorder and Inorder Traversal
 * Source: https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/
 *
 * Given the preorder and inorder traversals
 * of the same binary tree, construct and
 * return the original binary tree.
 *
 * Example:
 * preorder = [3,9,20,15,7]
 * inorder = [9,3,15,20,7]
 *
 * Output:
 * [3,9,20,null,null,15,7]
 *
 * Idea:
 * Recursion + Hash Map
 *
 * Preorder:
 *     Root -> Left -> Right
 *
 * Inorder:
 *     Left -> Root -> Right
 *
 * 1. The first value in preorder is always
 *    the root of the current subtree.
 * 2. Find this root in inorder.
 * 3. Values to the left belong to the
 *    left subtree.
 * 4. Values to the right belong to the
 *    right subtree.
 * 5. Use a Hash Map to find the root's
 *    inorder index in O(1).
 *
 * Time Complexity:
 * O(n)
 *
 * Space Complexity:
 * O(n)
 *
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
    const inorderIndex = new Map();

    for (let i = 0; i < inorder.length; i++) {
        inorderIndex.set(inorder[i], i);
    }

    let preorderIndex = 0;

    const build = (left, right) => {
        if (left > right) {
            return null;
        }

        const rootValue = preorder[preorderIndex++];

        const root = new TreeNode(rootValue);

        const mid = inorderIndex.get(rootValue);

        root.left = build(left, mid - 1);
        root.right = build(mid + 1, right);

        return root;
    };

    return build(0, inorder.length - 1);
};
