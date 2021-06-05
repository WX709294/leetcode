/*** 
 * 题目： 输入某二叉树的前序遍历和中序遍历的结果，请重建该二叉树。假设输入的前序遍历和中序遍历的结果中都不含重复的数字。
 * 前序遍历：[3, 9, 20, 15, 7]  根->左->右
 * 中序遍历：[9, 3, 15, 20, 7]  左->根->右
 * 返回如下二叉树：
 *   3
    / \
    9  20
      /  \
    15   7
 * 
***/


/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
    if(preorder.length === 0) return null
    const cur = new TreeNode(preorder[0])
    const index = inorder.indexOf(preorder[0])
    cur.left = buildTree(preorder.slice(1, index+1), inorder.slice(0, index))
    cur.right = buildTree(preorder.slice(index+1), inorder.slice(index+1))
    return cur
};