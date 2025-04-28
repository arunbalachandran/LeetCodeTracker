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
    'Search in Rotated Sorted Array': {
        java: `class Solution {
    public int search(int[] nums, int target) {
        int l = 0;
        int r = nums.length - 1;
        
        while (l <= r) {
            int mid = (l + r) / 2;
            // check if we're in the left sorted portion
            if (target == nums[mid]) {
                return mid;
            }
            
            if (nums[l] <= nums[mid]) {
                if (target < nums[l]) {
                    l = mid + 1;
                } else if (target > nums[mid]) {
                    l = mid + 1;
                } else {
                    r = mid - 1;
                }
            } else {
                if (target > nums[r]) {
                    r = mid - 1;
                } else if (target < nums[mid]) {
                    r = mid - 1;
                } else {
                    l = mid + 1;
                }
            }
        }
        
        return -1;
    }
}`,
        python: ``
    },
    'Two Sum': {
        java: `class Solution {
    public int[] twoSum(int[] nums, int target) {
        HashMap<Integer, Integer> invMap = new HashMap<>();
        int inverse = 0;
        for (int i = 0; i < nums.length; i++) {
            inverse = target - nums[i];
            if (invMap.containsKey(nums[i])) {
                return new int[] {invMap.get(nums[i]), i};
            }
            invMap.put(inverse, i);
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
        // base case
        if (s.length() != t.length()) {
            return false;
        }

        if (s == null && t == null) {
            return true;
        }

        if (s.equals("") && s.equals(t)) {
            return true;
        }

        HashMap<Character, Integer> charCountMap = new HashMap<>();
        // increment count for every character from source & decrement for every character at target
        for (int i = 0; i < s.length(); i++) {
            charCountMap.put(s.charAt(i), charCountMap.getOrDefault(s.charAt(i), 0) + 1);
            charCountMap.put(t.charAt(i), charCountMap.getOrDefault(t.charAt(i), 0) - 1);
        }

        return charCountMap.keySet().stream().allMatch(ch -> charCountMap.get(ch) == 0);
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
    'Group Anagrams': {
        java: `class Solution {

    String ALPHABETS = "abcdefghijklmnopqrstuvwxyz";
    // calculate the Run Length Encoding of a String
    // e.g.: abca => a2b1c1
    private String getRle(String src) {
        int[] countArr = new int[] {0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0};

        for (int i = 0; i < src.length(); i++) {
            countArr[src.charAt(i) - 'a'] += 1;
        }
        StringBuilder sb = new StringBuilder();
        for (int i = 0; i < ALPHABETS.length(); i++) {
            if (countArr[ALPHABETS.charAt(i) - 'a'] != 0) {
                sb.append(ALPHABETS.charAt(i));
                sb.append(countArr[ALPHABETS.charAt(i) - 'a']);
            }
        }
        return sb.toString();
    }
    

    public List<List<String>> groupAnagrams(String[] strs) {
        HashMap<String, List<String>> strMap = new HashMap<>();
        String rle = "";
        for (String str: strs) {
            rle = getRle(str);
            if (strMap.containsKey(rle)) {
                strMap.get(rle).add(str);
            } else {
                strMap.put(rle, new ArrayList<>());
                strMap.get(rle).add(str);
            }
        }

        return strMap.values().stream().toList();
    }
}`,
        python: ``
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
        if (root == null) {
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
        int largestWindow = 0;
        // use this to store the previous position of a character you've seen
        HashMap<Character, Integer> charMap = new HashMap<>();
        
        for (int j = 0; j < s.length(); j++) {
            char c = s.charAt(j);

            // if you've seen the character before (this will come in effect especially for a palindromic case)
            if (charMap.containsKey(c)) {
                i = Math.max(i, charMap.get(c) + 1);
            }
            largestWindow = Math.max(largestWindow, j - i + 1);
            charMap.put(c, j);
        }
        
        return largestWindow;
    }
}`,
        python: ``
    },
    '3Sum': {
        java: `import java.util.Arrays;
import java.util.HashSet;
import java.util.List;
import java.util.ArrayList;

class Solution {

    public List<List<Integer>> threeSum(int[] nums) {
        Arrays.sort(nums);
        HashSet<List<Integer>> triplets = new HashSet<>();

        for (int i = 0; i < nums.length; i++) {
            if (i > 0 && nums[i] == nums[i-1]) {
                continue;
            }

            int leftIndex = i + 1;
            int rightIndex = nums.length - 1;
            int sum = 0;
            while (leftIndex < rightIndex) {
                sum = nums[leftIndex] + nums[rightIndex] + nums[i];
                if (sum == 0) {
                    triplets.add(List.of(nums[leftIndex], nums[i], nums[rightIndex]));
                    leftIndex++;
                    while (nums[leftIndex] == nums[leftIndex - 1] && leftIndex < rightIndex) {
                        leftIndex++;
                    }
                } else if (sum < 0) {
                    leftIndex++;
                } else {
                    rightIndex--;
                }
            }
        }

        return triplets.stream().toList();
    }
}`,
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
    },
    'Top K Frequent Elements': {
        java: `import java.util.HashMap;
import java.util.List;
import java.util.ArrayList;

class Solution {
    public int[] topKFrequent(int[] nums, int k) {
        // create bucket to invert numbers by count
        List<List<Integer>> bucket = new ArrayList<>();
        HashMap<Integer, Integer> countMap = new HashMap<>();
        for (int i = 0; i < nums.length; i++) {
            int frequency = countMap.getOrDefault(nums[i], 0);
            countMap.put(nums[i], frequency + 1);
            bucket.add(new ArrayList<>());
        }
        // because lists are 0 indexed (frequency max is size of nums)
        bucket.add(new ArrayList<>());

        countMap.keySet().stream().forEach(
            key -> bucket.get(countMap.get(key)).add(key)
        );

        // now return the first k elements
        List<Integer> result = new ArrayList<>();
        for (int i = bucket.size() - 1; i >= 0; i--) {
            while (bucket.get(i).size() > 0 && result.size() < k) {
                result.add(bucket.get(i).get(0));
                bucket.get(i).remove(0);
            }
        }


        return result.stream().mapToInt(i -> i).toArray();
    }
}`,
        python: ``
    },
    'Encode and Decode Strings': {
        java: `import java.util.stream.Collectors;
import java.util.List;
import java.util.ArrayList;

public class Codec {

    public String rleString(String input) {
        return String.format("%s#", input.length());
    }

    // Encodes a list of strings to a single string.
    public String encode(List<String> strs) {
        return strs.stream().map(val -> rleString(val) + val).collect(Collectors.joining(""));
    }

    // i is starting position of string to consider from
    public Map<Integer, String> getRle(String s, int i) {
        StringBuilder sb = new StringBuilder();
        while (i < s.length() && Character.isDigit(s.charAt(i))) {
            sb.append(s.charAt(i));
            i++;
        }
        i++; // to go after the # symbol
        String rle = sb.toString();
        Integer rleLength = Integer.parseInt(rle);
        return Map.of(i + rleLength, s.substring(i, i + rleLength));
    }

    // Decodes a single string to a list of strings.
    public List<String> decode(String s) {
        // find pattern matching RLE (if no match, keep continuing) otherwise, find the count
        // of characters expected & verify that there are those many
        List<String> result = new ArrayList<>();
        System.out.println(s);
        int i = 0;
        while (i < s.length()) {
            Map<Integer, String> rleMatch = getRle(s, i);
            Integer newIndex = rleMatch.keySet().stream().findFirst().get();
            String matchedString = rleMatch.get(newIndex);
            result.add(matchedString);
            i = newIndex;
        }
i
        return result;
    }
}

// Your Codec object will be instantiated and called as such:
// Codec codec = new Codec();
// codec.decode(codec.encode(strs));`,
        python: ``
    },
    'Product of Array Except Self': {
        java: `class Solution {
    public int[] productExceptSelf(int[] nums) {
        int[] result = new int[nums.length];
        
        result[0] = 1;
        for (int i = 1; i < nums.length; i++) {
            result[i] = result[i-1] * nums[i-1];
        }
        
        int multiplier = 1;
        // now go in reverse to calculate sums the other way
        for (int j = nums.length - 1; j >= 0; j--) {
            result[j] = result[j] * multiplier;
            multiplier = multiplier * nums[j];
        }
        
        return result;
    }
}
`,
        python: ``
    },
    'Longest Consecutive Sequence': {
        java: `import java.util.HashSet;

class Solution {
    public int longestConsecutive(int[] nums) {
        
        if (nums.length == 0) {
            return 0;
        }
        
        HashSet<Integer> numSet = new HashSet<>();
        for (int i = 0; i < nums.length; i++) {
            numSet.add(nums[i]);
        }

        int maxStreak = 1;
        int currentStreak = 1;
        int currentNum = 0;
        for (int i = 0; i < nums.length; i++) {
            if (numSet.contains(nums[i] - 1)) {
                continue;   // this will be considered when you find the smaller number & calc streak
            }
            
            currentStreak = 1;
            currentNum = nums[i];
            while (numSet.contains(currentNum + 1)) {
                currentStreak++;
                currentNum++;
                maxStreak = Math.max(maxStreak, currentStreak);
            }
        }

        return maxStreak;
    }
}`,
        python: ``
    },
    'Container With Most Water': {
        java: `
class Solution {
    public int maxArea(int[] height) {
        int i = 0;
        int j = height.length - 1;
        int volume = 0;
        int maxVolume = 0;
        while (i < j) {
            volume = height[i] >= height[j] ? height[j] * (j - i) : height[i] * (j - i);
            maxVolume = Math.max(volume, maxVolume);
            if (height[i] >= height[j]) {
                j--;
            } else {
                i++;
            }
        }
        return maxVolume;
    }
}`,
        python: ``
    },
    'Longest Repeating Character Replacement': {
        java: `import java.util.HashMap;
import java.util.Map;

class Solution {
    public int characterReplacement(String s, int k) {
        int i = 0;   // left window
        int maxWindow = 0;
        int maxFreq = 0;
        Map<Character, Integer> countMap = new HashMap<>();
        
        for (int j = 0; j < s.length(); j++) {
            int currentCount = countMap.getOrDefault(s.charAt(j), 0);
            countMap.put(s.charAt(j), currentCount + 1);
            maxFreq = Math.max(maxFreq, countMap.get(s.charAt(j)));
            while ((j - i + 1) - maxFreq > k) {
                int charCount = countMap.get(s.charAt(i));
                countMap.put(s.charAt(i), charCount - 1);
                i++;
            }
            maxWindow = Math.max(maxWindow, j - i + 1);
        }

        return maxWindow;
    }
}`,
        python: ``
    },
    'Minimum Window Substring': {
        java: ``,
        python: ``
    },
    'Reverse Linked List': {
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
    public ListNode reverseList(ListNode head) {
        if (head == null || head.next == null) {
            return head;
        }
        
        ListNode current = head;
        ListNode next = current.next;
        ListNode backup = null;
        while (next != null) {
            backup = next.next;
            next.next = current;
            if (current == head) {
                current.next = null;
            }
            current = next;
            next = backup;
        }
        return current;
    }
}`,
        python: ``
    },
    'Reorder List': {
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
    public void reorderList(ListNode head) {
        // first let's find the second half of the list
        ListNode slow = head;
        ListNode fast = head;
        
        if (head == null || head.next == null) {
            return;
        }
        
        while (fast != null && fast.next != null) {
            slow = slow.next;
            fast = fast.next.next;
        }
        
        ListNode first = head;
        ListNode second = slow.next;
        slow.next = null;
        ListNode previous = null;
        ListNode temp = null;
        
        // reversal
        while (second != null) {
            temp = second.next;
            second.next = previous;
            previous = second;
            second = temp;
        }
        
        // now merge the original and reversed parts of the lists
        second = previous;
        while (second != null) { // assuming second can be smaller
            ListNode temp1 = first.next;
            ListNode temp2 = second.next;
            first.next = second;
            second.next = temp1;
            first = temp1;
            second = temp2;
        }
    }
}`,
        python: ``
    },
    'Remove Nth Node From End of List': {
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
    public ListNode removeNthFromEnd(ListNode head, int n) {
        ListNode ptr = head;
        ListNode offsetPtr = ptr;
        ListNode dummyHead = new ListNode();
        ListNode previous = dummyHead;
        dummyHead.next = head;
            
        for (int i = 0; i < n; i++) {
            offsetPtr = offsetPtr.next;
        }
        
        while (ptr != null && offsetPtr != null) {
            previous = ptr;
            ptr = ptr.next;
            offsetPtr = offsetPtr.next;
        }
        
        previous.next = ptr.next;
        return dummyHead.next;
    }
}`,
        python: ``
    },
    'Merge k Sorted Lists': {
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

import java.util.List;
import java.util.ArrayList;

class Solution {
    public ListNode mergeKLists(ListNode[] lists) {
        List<ListNode> arrayList = new ArrayList<>();
        for (ListNode listNode: lists) {
            arrayList.add(listNode);
        }
        
        while (arrayList.size() > 1) {
            int arrayListSize = arrayList.size();
            List<ListNode> temp = new ArrayList<>();
            for (int i = 0; i < arrayListSize; i += 2) {
                temp.add(merge2Lists(arrayList, i, i + 1));
            }
            arrayList = temp;
        }
        
        return arrayList.size() > 0 ? arrayList.get(0) : null;
    }
    
    private ListNode merge2Lists(List<ListNode> arrayList, int head1, int head2) {
        if (head2 >= arrayList.size()) {
            return arrayList.get(head1);
        }
        
        // assuming that head1 will never be null
        ListNode h1 = arrayList.get(head1);
        ListNode h2 = arrayList.get(head2);
        ListNode dummy = new ListNode();
        ListNode tail = dummy;
        
        while (h1 != null && h2 != null) {
            if (h1.val > h2.val) {
                tail.next = h2;
                h2 = h2.next;
            } else {
                tail.next = h1;
                h1 = h1.next;
            }
            tail = tail.next;
        }
        
        
        // add the remaining nodes to the other list (if one of the lists are done)
        if (h1 == null) {
            tail.next = h2;
        } else {
            tail.next = h1;
        }
        
        return dummy.next;
    }
}`,
        python: ``
    },
    'Maximum Depth of Binary Tree': {
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
class Solution {
    int maxDept = 0;
    public int maxDepth(TreeNode root) {
        if(root == null) {
            return 0;
        }

        int left = maxDepth(root.left);
        int right = maxDepth(root.right);

        return Math.max(left, right) + 1;
    }
}`,
        python: ``
    },
    'Same Tree': {
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
class Solution {
    public boolean isSameTree(TreeNode p, TreeNode q) {
        if(p == null && q == null) {
            return true;
        }

        if(p == null || q == null || p.val != q.val) {
            return false;
        }

        return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
    }
}`,
        python: ``
    },
    'Subtree of Another Tree': {
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
class Solution {
    public boolean isSubtree(TreeNode root, TreeNode subRoot) {
        if (root != null) {
            if (root.val == subRoot.val) {
                return checkSameTree(root, subRoot) || isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot);
            } else {
                return isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot);
            }
        }
        return false;
    }
    
    private boolean checkSameTree(TreeNode p, TreeNode q) {
        if (p == null && q == null) {
            return true;
        } else {
            if ((p != null && q == null) || (p == null && q != null)) {
                return false;
            } else {
                if (p.val == q.val) {
                    return checkSameTree(p.left, q.left) && checkSameTree(p.right, q.right);
                }
                return false;
            }
        }
    }
}`,
        python: ``
    },
    'Merge Intervals': {
        java: `class Solution {
    public int[][] merge(int[][] intervals) {
        ArrayList<int[]> intervalStore = new ArrayList<int[]>();
        
        Arrays.sort(intervals, (a, b) -> Integer.compare(a[0], b[0]));
        int[] newInterval = intervals[0];

        for (int i = 1; i < intervals.length; i++) {
            int[] currentInterval = intervals[i];
            if (currentInterval[1] < newInterval[0]) {
                intervalStore.add(currentInterval);
            } else if (currentInterval[0] > newInterval[1]) {
                intervalStore.add(newInterval);
                newInterval = currentInterval;
            } else {
                // this is where the merge needs to happen
                int intervalStart = Math.min(currentInterval[0], newInterval[0]);
                int intervalEnd = Math.max(currentInterval[1], newInterval[1]);
                newInterval[0] = intervalStart;
                newInterval[1] = intervalEnd;
            }
        }
        intervalStore.add(newInterval);
        
        // now convert it back to an array
        return intervalStore.toArray(new int[intervalStore.size()][]);        
    }
}`,
        python: ``
    },
    'Number of Islands': {
        java: `import java.util.List;
import java.util.ArrayList;
import java.util.Deque;
import java.util.LinkedList;
import java.util.HashSet;

class Pair {

    public int x;
    public int y;

    public Pair(int x, int y) {
        this.x = x;
        this.y = y;
    }

    @Override
    public int hashCode() {
        int hashcode = 17;
        hashcode = hashcode * 31 + this.x;
        return hashcode * 31 + this.y;
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

    private static final List<List<Integer>> directions = new ArrayList<List<Integer>>();

    static {
        directions.add(List.of(0, -1));  // down
        directions.add(List.of(0, 1));   // up
        directions.add(List.of(-1, 0));  // left
        directions.add(List.of(1, 0));   // right
    }

    private void bfs(Pair currentNode, HashSet<Pair> visited, int numRows, int numCols, char[][] grid) {
        Deque<Pair> deque = new LinkedList<Pair>();
        deque.add(currentNode);
        visited.add(currentNode);
        while (!deque.isEmpty()) {
            Pair node = deque.pollFirst();  // gives us the first node from the left in the Deque
            for (int k = 0; k < directions.size(); k++) {
                int offsetRow = directions.get(k).get(0) + node.x;
                int offsetCol = directions.get(k).get(1) + node.y;
                boolean validCoordinates = (offsetRow >= 0 && offsetRow < numRows && offsetCol >= 0 && offsetCol < numCols);
                Pair offsetPair = new Pair(offsetRow, offsetCol);
                if (validCoordinates && !visited.contains(offsetPair) && grid[offsetRow][offsetCol] == '1') {
                    deque.add(offsetPair);
                    visited.add(offsetPair);
                }
            }
        }
    }

    public int numIslands(char[][] grid) {
        int numIslands = 0;
        int numRows = grid.length;
        if (numRows == 0) {
            return numIslands;
        }

        int numCols = grid[0].length;
        if (numCols == 0) {
            return numIslands;
        }

        HashSet<Pair> visited = new HashSet<>();
        for (int i = 0; i < numRows; i++) {
            for (int j = 0; j < numCols; j++) {
                Pair currentPair = new Pair(i, j);
                if (grid[i][j] == '1' && !visited.contains(currentPair)) {
                    bfs(currentPair, visited, numRows, numCols, grid); // explore the island that starts at this node using BFS
                    numIslands++;
                }
            }
        }

        return numIslands;
    }
}`,
        python: ``
    },
    'Combination Sum': {
        java: `import java.util.ArrayList;

class Solution {
    public List<List<Integer>> combinationSum(int[] candidates, int target) {
        List<Integer> currentSub = new ArrayList<>();
        List<List<Integer>> result = new ArrayList<>();
        return combinationSumHelper(candidates, target, currentSub, 0, 0, result);
    }
    
    // Assumptions:
    // 1. sum fits in the 'int' variable
    // 2. doesn't matter if the array is sorted or not
    public List<List<Integer>> combinationSumHelper(
        int[] candidates,
        int target,
        List<Integer> currentSub,
        int i,
        int total,
        List<List<Integer>> result) {
        if (total == target) {
            result.add(new ArrayList<>(currentSub));
            return result;
        }
        
        if (i >= candidates.length || total > target) {
            return result;
        }
        
        // choose this candidate e.g.: [2] choosen out of [2, 3, 6, 7]
        currentSub.add(candidates[i]);
        // with [2] choosen, keep the same index (index 0) out of [2, 3, 6, 7]
        combinationSumHelper(candidates, target, currentSub, i, total + candidates[i], result);
        currentSub.remove(currentSub.size() - 1); // remove the most recently added element
        // after 'unchoosing [2]' choose the other elements e.g.: [3, 6, 7]
        combinationSumHelper(candidates, target, currentSub, i + 1, total, result);
        return result;
    }
}`,
        python: ``
    },
    'Backtracking': {
        java: `import java.util.HashSet;

class Pair {
    
    private int x;
    private int y;
    
    public Pair(int x, int y) {
        this.x = x;
        this.y = y;
    }
    
    public int getx() {
        return this.x;
    }
    
    public int gety() {
        return this.y;
    }
    
    @Override
    public int hashCode() {
        int hashcode = 17;
        hashcode = hashcode * 31 + this.x;
        hashcode = hashcode * 31 + this.y;
        return hashcode;
    }
    
    @Override
    public boolean equals(Object o) {
        
        if (o == null) {
            return false;
        }
        
        if (!(o instanceof Pair)) {
            return false;
        }
        
        Pair incomingPair = (Pair) o;
        return incomingPair.getx() == this.x && incomingPair.gety() == this.y;
    }
}

class Solution {
    
    private boolean dfs(int wordIndex, String word, int i, int j, char[][] board, HashSet<Pair> visited) {
        if (wordIndex == word.length()) {
            return true;
        }
        
        Pair currentPair = new Pair(i, j);
        boolean validrow = (i >= 0 && i < board.length);
        boolean validcol = (j >= 0 && j < board[0].length);
        if (!validrow || !validcol || !(board[i][j] == word.charAt(wordIndex)) || visited.contains(currentPair)) {
            return false;
        }
            
        visited.add(currentPair);
        boolean result = dfs(wordIndex + 1, word, i - 1, j, board, visited) ||
               dfs(wordIndex + 1, word, i + 1, j, board, visited) ||
               dfs(wordIndex + 1, word, i, j - 1, board, visited) ||
               dfs(wordIndex + 1, word, i, j + 1, board, visited);
        visited.remove(currentPair);
        return result;
        
    }
    
    public boolean exist(char[][] board, String word) {
        int numRows = board.length;
        int numCols = board[0].length;
        if (word.length() > numRows * numCols) {
            return false;
        }
        
        HashSet<Pair> visited = new HashSet<>();
        for (int i = 0; i < numRows; i++) {
            for (int j = 0; j < numCols; j++) {
                if (dfs(0, word, i, j, board, visited)) {
                    return true;
                }
            }
        }
        
        return false;
    }
}`,
        python: ``
    }
};