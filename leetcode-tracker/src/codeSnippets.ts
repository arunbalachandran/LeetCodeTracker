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
    }
    // Add more problems here as needed
}; 