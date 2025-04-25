interface CodeSnippets {
    [key: string]: {
        java: string;
        python: string;
    };
}

export const codeSnippets: CodeSnippets = {
    "Valid Parentheses": {
        java: `import java.util.Stack;

class Solution {

    private Map<Character, Character> getCharMap() {
        HashMap<Character, Character> charMap = new HashMap<>();
        charMap.put('}', '{');
        charMap.put(')', '(');
        charMap.put(']', '[');
        return charMap;
    }

    public boolean isValid(String s) {
        Stack stack = new Stack();
        Map<Character, Character> charMap = getCharMap();
        for (Character ch: s.toCharArray()) {
            if (!stack.isEmpty() && stack.peek() == charMap.get(ch)) {
                stack.pop();
            } else {
                stack.add(ch);
            }
        }

        return stack.isEmpty();
    }
}`,
        python: `class Solution:
    
    def isValid(self, s: str) -> bool:
        converseMap = {'}': '{', ')': '(', ']': '['}
        stack = []
        for character in s:
            if len(stack) == 0:
                stack.append(character)
            else:
                if stack[-1] == converseMap.get(character, ''):
                    stack.pop()
                else:
                    stack.append(character)
        if len(stack) == 0:
            return True
        return False`
    },
    "Find Minimum in Rotated Sorted Array": {
        java: `class Solution {
    public int findMin(int[] nums) {
        if (nums.length == 0) {
            return 0;  // default
        }

        int l = 0;
        int r = nums.length - 1;
        int res = nums[0];
        int mid = -1;

        while (l <= r) {
            if (nums[l] < nums[r]) {
                res = Math.min(nums[l], res);
                break;
            }

            mid = (l + r) / 2;
            res = Math.min(res, nums[mid]);
            if (nums[mid] >= nums[l]) {
                l = mid + 1;
            } else {
                r = mid - 1;
            }
        }

        return res;
    }
}`,
        python: ``
    },
    'Two Sum': {
        java: `import java.util.HashMap;
import java.util.Map;

class Solution {
    public int[] twoSum(int[] nums, int target) {
        Map<Integer, Integer> sumDiffMap = new HashMap<>();
        for (int i = 0; i < nums.length; i++) {
            int diff = target - nums[i];
            if (sumDiffMap.getOrDefault(nums[i], -1) != -1) {
                return new int[] {sumDiffMap.get(nums[i]), i};
            }
            sumDiffMap.put(diff, i);
        }

        return new int[] {-1, -1};
    }
}`,
        python: `class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        for i in range(len(nums)):
            for j in range(i + 1, len(nums)):
                if nums[j] == target - nums[i]:
                    return[i, j]
        return[]
`
    },
    'Valid Anagram': {
        java: `class Solution {
    public boolean isAnagram(String s, String t) {
        if (s.length() != t.length()) {
            return false;
        }

        int NUM_ALPHABETS = 26;
        int[] charMapSource = new int[] {0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0};
        int[] charMapTarget = new int[] {0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0};
        for (int i = 0; i < s.length(); i++) {
            charMapSource[s.charAt(i) - 'a'] += 1;
            charMapTarget[t.charAt(i) - 'a'] += 1;
        }

        for (int i = 0; i < NUM_ALPHABETS; i++) {
            if (charMapSource[i] != charMapTarget[i]) {
                return false;
            }
        }

        return true;
    }
}`,
        python: `class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        if len(s) != len(t):
            return False
        count_s = {}
        for char in s:
            if not char in count_s:
                count_s[char] = 0
            count_s[char] += 1

        for char in t:
            if not char in count_s:
                return False
            if count_s[char] == 0:
                return False
            count_s[char] -= 1

        return True`
    },
    'Valid Palindrome': {
        java: `class Solution {
    
    private boolean isSpecialChar(Character ch) {
        return !Character.isLetter(ch) && !Character.isDigit(ch);
    }
    
    public boolean isPalindrome(String s) {
        int i = 0;
        int j = s.length() - 1;
        while (i <= j) {
            Character left = Character.toLowerCase(s.charAt(i));
            Character right = Character.toLowerCase(s.charAt(j));
            if (left.equals(right)) {
                i++;
                j--;
            } else if (isSpecialChar(left)) {
                i++;
            } else if (isSpecialChar(right)) {
                j--;
            } else {
                return false;
            }
        }

        return true;   
    }
}`,
        python: `class Solution:
    def isPalindrome(self, s: str) -> bool:
        palindrome = True
        
        i = 0
        j = len(s) - 1
        if len(s) == 0:
            return palindrome
        
        while (i < j):
            if not s[i].isalnum():
                i += 1
            elif not s[j].isalnum():
                j -= 1
            elif s[i].lower() == s[j].lower():
                i += 1
                j -= 1
            else:
                palindrome = False
                break
                
        return palindrome`
    },
    'Merge Two Sorted Lists': {
        java: `/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode() {}
 *     ListNode(int val) { this.val = val; }
 *     ListNode(int val, ListNode next) { this.val = val; this.next = next; }
 * }
 */
class Solution {
    public ListNode mergeTwoLists(ListNode list1, ListNode list2) {
        ListNode dummy = new ListNode();
        ListNode tail = dummy;
        ListNode l = list1;
        ListNode r = list2;
        while (l != null && r != null) {
            if (l.val < r.val) {
                tail.next = l;
                l = l.next;
            } else {
                tail.next = r;
                r = r.next;
            }
            tail = tail.next;
        }

        if (l != null) {
            tail.next = l;
        } else if (r != null) {
            tail.next = r;
        }

        return dummy.next;
    }
}`,
    python: ``
    },
    'Best Time to Buy and Sell Stock': {
        java: `
class Solution {
    public int maxProfit(int[] prices) {
        int profit = 0;
        if (prices.length == 0) {
            return profit;
        }
        int minPrice = prices[0];

        for (int i = 1; i < prices.length; i++) {
            if (prices[i] < minPrice) {
                minPrice = prices[i];
            } else {
                profit = Math.max(profit, prices[i] - minPrice);
            }
        }

        return profit;
    }
}`,
        python: ``
    },
    'Invert Binary Tree': {
        java: `class Solution {
    public TreeNode invertTree(TreeNode root) {
        if(root == null) {
            return null;
        }

        TreeNode temp = root.left;
        root.left = root.right;
        root.right = temp;

        invertTree(root.right);
        invertTree(root.left);

        return root;
    }
}`,
        python: ``
    },
    'Binary Search': {
        java: `class Solution {
    public int search(int[] nums, int target) {
        int l = 0;
        int r = nums.length - 1;
        while (l <= r) {
            int mid = (l + r) / 2;
            if (target > nums[mid]) {
                l = mid + 1;
            } else if (target == nums[mid]) {
                return mid;
            } else {
                r = mid - 1;
            }
        }
        return -1;
    }
}`,
        python: ``
    },
    'Flood Fill': {
        java: `import java.util.HashSet;

class Pair {

    public int x;
    public int y;

    public Pair(int x, int y) {
        this.x = x;
        this.y = y;
    }

    @Override
    public int hashCode() {
        int hash = 17;
        hash = 31 * hash + this.x;
        return 31 * hash + this.y;
    }

    @Override
    public boolean equals(Object o) {
        if (o == null) {
            return false;
        } else if (!(o instanceof Pair)) {
            return false;
        }

        Pair incomingPair = (Pair) o;
        return this.x == incomingPair.x && this.y == incomingPair.y;
    }

}

class Solution {
    public int[][] floodFill(int[][] image, int sr, int sc, int color) {
        int initialColor = image[sr][sc];
        HashSet<Pair> visited = new HashSet<>();
        floodFillHelper(image, sr, sc, color, initialColor, visited);
        return image;
    }

    private void floodFillHelper(int[][] image, int sr, int sc, int color, int initialColor, HashSet<Pair> visited) {
        Pair currentPair = new Pair(sr, sc);
        if (sr >= 0 && sr < image.length && sc >= 0 && sc < image[0].length && image[sr][sc] == initialColor && !visited.contains(currentPair)) {
            image[sr][sc] = color;
            visited.add(currentPair);
            floodFillHelper(image, sr + 1, sc, color, initialColor, visited);
            floodFillHelper(image, sr - 1, sc, color, initialColor, visited);
            floodFillHelper(image, sr, sc + 1, color, initialColor, visited);
            floodFillHelper(image, sr, sc - 1, color, initialColor, visited);
        }
    }
}`,
    python: ``
    },
    'Lowest Common Ancestor of a Binary Search Tree': {
        java: `/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode(int x) { val = x; }
 * }
 */

class Solution {
    public TreeNode lowestCommonAncestor(TreeNode root, TreeNode p, TreeNode q) {
        if (p.val < root.val && q.val < root.val) {
            // search left subtree
            return lowestCommonAncestor(root.left, p, q);
        } else if (p.val > root.val && q.val > root.val) {
            return lowestCommonAncestor(root.right, p, q);
        } else {
            return root;
        }
    }
}`,
        python: ``
    },
    'Linked List Cycle': {
        java: `/**
 * Definition for singly-linked list.
 * class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode(int x) {
 *         val = x;
 *         next = null;
 *     }
 * }
 */
public class Solution {
    public boolean hasCycle(ListNode head) {
        ListNode slowPtr = head;
        ListNode fastPtr = head;
        while (slowPtr != null && fastPtr != null) {
            slowPtr = slowPtr.next;
            if (slowPtr == null) {
                return false;
            }
            fastPtr = fastPtr.next;
            if (fastPtr == null) {
                return false;
            }
            fastPtr = fastPtr.next;
            if (fastPtr == null) {
                return false;
            }
            if (slowPtr == fastPtr) {
                return true;
            }
        }
        return false;
    }
}`,
        python: ``
    },
    'Balanced Binary Tree': {
        java: `/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode() {}
 *     TreeNode(int val) { this.val = val; }
 *     TreeNode(int val, TreeNode left, TreeNode right) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

import java.lang.Math;

class Solution {
    public boolean isBalanced(TreeNode root) {
        if (root == null) {
            return true;
        }
        
        return Math.abs(heightTree(root.left) - heightTree(root.right)) < 2 && isBalanced(root.left) && isBalanced(root.right);
    }
    
    public int heightTree(TreeNode root) {
        if (root == null) {
            return -1;
        }
        
        return Math.max(heightTree(root.left), heightTree(root.right)) + 1; 
    }
}`,
        python: ``
    },
    'Implement Queue using Stacks': {
        java: `import java.util.Stack;

class MyQueue {
    
    private Stack<Integer> s1;
    private Stack<Integer> s2;

    public MyQueue() {
        s1 = new Stack<>();
        s2 = new Stack<>();
    }
    
    public void push(int x) {
        // empty contents of s2 onto s1 & then add
        s1.push(x);
    }
    
    public int pop() {
        // empty contents of s1 onto s2 & then pop
        while (s1.size() != 0) {
            int res = s1.pop();
            s2.push(res);
        }
        int val = s2.pop();
        while (s2.size() != 0) {
            int res = s2.pop();
            s1.push(res);
        }
        
        return val;
    }
    
    public int peek() {
        return s1.firstElement();
    }
    
    public boolean empty() {
        return s1.size() == 0 && s2.size() == 0;
    }
}

/**
 * Your MyQueue object will be instantiated and called as such:
 * MyQueue obj = new MyQueue();
 * obj.push(x);
 * int param_2 = obj.pop();
 * int param_3 = obj.peek();
 * boolean param_4 = obj.empty();
 */`,
        python: ``
    },
    'First Bad Version': {
        java: `/* The isBadVersion API is defined in the parent class VersionControl.
      boolean isBadVersion(int version); */

public class Solution extends VersionControl {
    public int firstBadVersion(int n) {
        int start = 1;
        int end = n;
        int partition = start + (end - start)/2;
        while (start <= end) {
            partition = start + (end - start)/2;
            if (isBadVersion(partition)) {
                end = partition - 1;
            } else {
                start = partition + 1;
            }
        }
        if (start == partition + 1) {
            return start;
        } else { // if end == partition
            return partition;
        }
    }
}`,
        python: ``
    },
    'Ransom Note': {
        java: `import java.util.HashMap;

class Solution {
    public boolean canConstruct(String ransomNote, String magazine) {
        HashMap<Character, Integer> magazineCharCount = new HashMap<>();
        for (Character ch: magazine.toCharArray()) {
            magazineCharCount.put(ch, magazineCharCount.getOrDefault(ch, 0) + 1);
        }

        for (Character ch: ransomNote.toCharArray()) {
            if (magazineCharCount.containsKey(ch)) {
                magazineCharCount.put(ch, magazineCharCount.get(ch) - 1);
                if (magazineCharCount.get(ch).equals(0)) {
                    magazineCharCount.remove(ch);
                }
            } else {
                return false;
            }
        }

        return true;
    }
}`,
        python: ``
    },
    'Maximum Subarray': {
        java: `import java.lang.Math;

class Solution {
    public int maxSubArray(int[] nums) {
        int currentSum = 0;
        int maxSum = nums[0];
        for (int i = 0; i < nums.length; i++) {
            currentSum = currentSum + nums[i];
            maxSum = Math.max(maxSum, currentSum);
            if (currentSum < 0) {
                currentSum = 0;
            }
        }
        return maxSum;
    }
}`,
        python: ``
    },
    'Insert Interval': {
        java: `import java.util.List;

class Solution {
    public int[][] insert(int[][] intervals, int[] newInterval) {
        List<int[]> updatedIntervals = new ArrayList<>();
        // indices of the first element and second element of the interval
        int left = 0;
        int right = 1;
        int currentIndex = 0;
        int[] intervalToProcess = new int[] {newInterval[left], newInterval[right]};
        for (int i = 0; i < intervals.length; i++) {
            if (intervalToProcess[right] < intervals[i][left]) {
                updatedIntervals.add(intervalToProcess);
                for (int j = i; j < intervals.length; j++) {
                    updatedIntervals.add(intervals[j]);
                }
                return updatedIntervals.stream().toArray(int[][]::new);
            } else if (intervalToProcess[left] > intervals[i][right]) {
                updatedIntervals.add(intervals[i]);
            } else {
                intervalToProcess[left] = Math.min(intervals[i][left], intervalToProcess[left]);
                intervalToProcess[right] = Math.max(intervals[i][right], intervalToProcess[right]);
            }
        }
        
        updatedIntervals.add(intervalToProcess);
        return updatedIntervals.stream().toArray(int[][]::new);
    }
}`,
        python: ``
    },
    '01 Matrix': {
        java: `class Solution {
    public int[][] updateMatrix(int[][] mat) {
        if (mat.length == 0 || mat[0].length == 0) {
            return mat;
        }
        
        int[][] distanceArr = new int[mat.length][mat[0].length];
        
        // initialize with infinite distance
        for (int i = 0; i < distanceArr.length; i++) {
            for (int j = 0; j < distanceArr[0].length; j++) {
                if (mat[i][j] == 0) {
                    distanceArr[i][j] = 0;
                } else {
                    distanceArr[i][j] = Integer.MAX_VALUE - 1;
                }
            }
        }
        
        // do a top to bottom scan loop
        for (int i = 0; i < distanceArr.length; i++) {
            for (int j = 0; j < distanceArr[0].length; j++) {
                if (i - 1 >= 0 && mat[i][j] != 0) { // left check
                    distanceArr[i][j] = Math.min(distanceArr[i][j], distanceArr[i-1][j] + 1);
                }
                if (j - 1 >= 0 && mat[i][j] != 0) { // top check
                    distanceArr[i][j] = Math.min(distanceArr[i][j], distanceArr[i][j-1] + 1);
                }
            }
        }
        
                
        // do a top to bottom scan loop
        for (int i = distanceArr.length - 1; i >= 0; i--) {
            for (int j = distanceArr[0].length - 1; j >= 0; j--) {
                if (i + 1 < distanceArr.length && mat[i][j] != 0) { // left check
                    distanceArr[i][j] = Math.min(distanceArr[i][j], distanceArr[i+1][j] + 1);
                }
                if (j + 1 < distanceArr[0].length && mat[i][j] != 0) { // top check
                    distanceArr[i][j] = Math.min(distanceArr[i][j], distanceArr[i][j+1] + 1);
                }
            }
        }
        
        return distanceArr;
    }
}`,
        python: ``
    },
    'K Closest Points to Origin': {
        java: `import java.util.PriorityQueue;

class Solution {
    
    private int distanceFromOrigin(int[] point) {
        return point[0] * point[0] + point[1] * point[1];
    }
    
    // put the K closests points
    // Then if there's more - add the new point and then remove the largest point
    public int[][] kClosest(int[][] points, int k) {
        // priorityQueue with euclidean distance
        PriorityQueue<int[]> minHeap = new PriorityQueue<int[]>(
            (a, b) -> distanceFromOrigin(a) - distanceFromOrigin(b)
        );
        for (int[] point: points) {
            minHeap.add(point);
        }
        
        int[][] result = new int[k][2];
        for (int i = 0; i < k; i++) {
            result[i] = minHeap.poll();
        }
        return result;
    }
}`,
        python: ``
    },
    'Longest Substring Without Repeating Characters': {
        java: `import java.util.HashMap;

class Solution {
    public int lengthOfLongestSubstring(String s) {
        int i = 0;
        int j = 1;
        int maxWindow = 0;
        if (s.length() <= 1) {
            return s.length();
        }

        HashMap<Character, Integer> charMap = new HashMap<>();
        charMap.put(s.charAt(i), i);
        while (j < s.length()) {
            Character currentChar = s.charAt(j);
            if (charMap.containsKey(currentChar)) {
                i = Math.max(i, charMap.get(currentChar) + 1);
                charMap.put(currentChar, j);
            }
            charMap.put(currentChar, j);
            maxWindow = Math.max(maxWindow, j - i + 1);
            j++;
        }

        return maxWindow;
    }
}`,
        python: ``
    },
    '3sum': {
        java: `import java.util.Arrays;
import java.util.HashSet;
import java.util.List;
import java.util.ArrayList;

class Solution {

    public List<List<Integer>> threeSum(int[] nums) {
        Arrays.sort(nums);
        HashSet<List<Integer>> triplets = new HashSet<>();

        for (int i = 0; i < nums.length; i++) {
            int leftIndex = 0;
            int rightIndex = nums.length - 1;
            while (leftIndex < i && rightIndex > i) {
                int sum = nums[leftIndex] + nums[rightIndex] + nums[i];
                if (sum == 0) {
                    triplets.add(List.of(nums[leftIndex], nums[i], nums[rightIndex]));
                    leftIndex++;
                    rightIndex--;
                } else if (sum < 0) {
                    leftIndex++;
                } else {
                    rightIndex--;
                }
            }
        }

        return triplets.stream().toList();
    }
}
`,
        python: ``
    },
    'Binary Tree Level Order Traversal': {
        java: `/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode() {}
 *     TreeNode(int val) { this.val = val; }
 *     TreeNode(int val, TreeNode left, TreeNode right) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */
import java.util.List;
import java.util.ArrayList;
import java.util.Deque;
import java.util.PriorityQueue;

class Solution {
    
    private int height(TreeNode root) {
        if (root == null) {
            return 0;
        }
        return Math.max(height(root.left), height(root.right)) + 1;
    }
    
    private List<Integer> levelOrderHelper(List<Integer> result, TreeNode root, int targetHeight, int currentHeight) {
        if (root == null) {
            return result;
        }
                
        if (targetHeight == currentHeight) {
            result.add(root.val);
            return result;
        } else if (currentHeight > targetHeight) {
            levelOrderHelper(result, root.left, targetHeight, currentHeight - 1);
            levelOrderHelper(result, root.right, targetHeight, currentHeight - 1);
        }
        
        return result;
    }
    
    public List<List<Integer>> levelOrder(TreeNode root) {
        List<List<Integer>> result = new ArrayList<>();
        
        // Iterative solution
        Deque<TreeNode> queue = new LinkedList<>();
        queue.add(root);
        
        while (!queue.isEmpty()) {
            int queueSize = queue.size();
            List<Integer> subresult = new ArrayList<>();
            for (int i = 0; i < queueSize; i++) {
                TreeNode temp = queue.pollFirst();
                if (temp != null) {
                    subresult.add(temp.val);
                    queue.addLast(temp.left);
                    queue.addLast(temp.right);   
                }
            }
            
            if (!(subresult.size() == 0 && queue.isEmpty())) {
                result.add(subresult);
            }

        }
        
        return result;
    }
}`,
        python: ``
    },
    'Clone Graph': {
        java: `/*
// Definition for a Node.
class Node {
    public int val;
    public List<Node> neighbors;
    public Node() {
        val = 0;
        neighbors = new ArrayList<Node>();
    }
    public Node(int _val) {
        val = _val;
        neighbors = new ArrayList<Node>();
    }
    public Node(int _val, ArrayList<Node> _neighbors) {
        val = _val;
        neighbors = _neighbors;
    }
}
*/

class Solution {

    private Node cloneGraphHelper(Node node, HashMap<Node, Node> nodeMap) {
        if (nodeMap.containsKey(node)) {
            return nodeMap.get(node);
        }

        Node clonedNode = new Node(node.val);
        clonedNode.neighbors = new ArrayList<>();
        nodeMap.put(node, clonedNode);
        for (Node neighbor: node.neighbors) {
            clonedNode.neighbors.add(cloneGraphHelper(neighbor, nodeMap));
        }

        return clonedNode;
    }

    public Node cloneGraph(Node node) {
        HashMap<Node, Node> nodeMap = new HashMap<>();
        return node != null ? cloneGraphHelper(node, nodeMap) : node;
    }
}`,
        python: ``
    }
};