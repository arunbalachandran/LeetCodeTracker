interface Problem {
  timeComplexity: string;
  spaceComplexity: string;
  link: string;
  linkTitle: string;
  notes: string;
  difficulty: number;
  category: string;
  labels?: string[];
}

// TODO: validate the time & space complexity
const problems: Problem[] = [
  {
    timeComplexity: 'O(n)',
    spaceComplexity: 'O(n)',
    link: 'https://leetcode.com/problems/contains-duplicate/',
    linkTitle: 'Contains Duplicate',
    notes: `
    Store the data in a set. If you've already seen the value, it is a duplicate.
    `,
    difficulty: 1,
    category: 'Arrays & Map',
    labels: ['Blind 75']
  },
  {
    timeComplexity: 'O(n)',
    spaceComplexity: 'O(n) but if you consider the additional table as part of the output array, then the complexity is O(1).',
    link: 'https://leetcode.com/problems/valid-anagram/',
    linkTitle: 'Valid Anagram',
    notes: 'Keep track of the number of times the character appeared for both strings. Match the counts.',
    difficulty: 1,
    category: 'Arrays & Map',
    labels: ['Grind 23', 'Blind 75']
  },
  {
    timeComplexity: 'O(n)',
    spaceComplexity: 'O(n)',
    link: 'https://leetcode.com/problems/two-sum/',
    linkTitle: 'Two Sum',
    notes: `
    Use a hash map to store the value and index of the elements. Check if the value of the current element exists in the map.
    If not, store the complement & its index in the map.
    `,
    difficulty: 1,
    category: 'Arrays & Map',
    labels: ['Grind 23', 'Blind 75']
  },
  {
    timeComplexity: 'O(n)',
    spaceComplexity: 'O(n)',
    link: 'https://leetcode.com/problems/ransom-note/',
    linkTitle: 'Ransom Note',
    notes: 'Use a hashmap to count the number of characters in magazine. Subtract the counts of characters from ransomNote & check whether all the characters were found.',
    difficulty: 1,
    category: 'Arrays & Map',
    labels: ['Grind 23']
  },
  {
    timeComplexity: 'O(m * n) where m is the number of strings & n is the avg. length of the strings',
    spaceComplexity: 'O(n) to store all the string in the map',
    link: 'https://leetcode.com/problems/group-anagram/',
    linkTitle: 'Group Anagrams',
    notes: 
    `Calculate the RLE for each string. Hash the string using the RLE and store all the strings with the same RLE under the same key.
    Return the list of all values in the Map.
    `,
    difficulty: 2,
    category: 'Arrays & Map',
    labels: ['Blind 75']
  },
  {
    timeComplexity: 'O(n)',
    spaceComplexity: 'O(n)',
    link: 'https://leetcode.com/problems/top-k-frequent-elements/',
    linkTitle: 'Top K Frequent Elements',
    notes: `
    Using bucket based sort. Store the frequency using a count hashmap.
    Create buckets for each count and store the elements with that count in the map.
    `,
    difficulty: 2,
    category: 'Arrays & Map',
    labels: ['Blind 75', 'Revisit']
  },
  {
    timeComplexity: 'O(m * n) where m is the avg number of characters per String & n is the size of the input',
    spaceComplexity: 'O(1) no additional complexity, just storage of the encoded string',
    link: 'https://leetcode.com/problems/encode-and-decode-strings/',
    linkTitle: 'Encode and Decode Strings',
    notes: `
    Create RLE (e.g.: ["5#hello", "2#hi"]) of the strings. Combine the RLEs into a single string & then decode them.
    `,
    difficulty: 2,
    category: 'Arrays & Map',
    labels: ['Blind 75', 'Revisit']
  },
  {
    timeComplexity: 'O(n)',
    spaceComplexity: 'O(n)',
    link: 'https://leetcode.com/problems/product-of-array-except-self/',
    linkTitle: 'Product of Array Except Self',
    notes: `
    `,
    difficulty: 2,
    category: 'Arrays & Map',
    labels: ['Blind 75', 'Revisit']
  },
  {
    timeComplexity: 'O(n)',
    spaceComplexity: 'O(n)',
    link: 'https://leetcode.com/problems/longest-consecutive-sequence/',
    linkTitle: 'Longest Consecutive Sequence',
    notes: `
    Create a set & add all the elements in the set.
    Loop through all the numbers. If num - 1 exists in the hashset, skip. Else, try finding the highest streak in increasing order.
    `,
    difficulty: 2,
    category: 'Arrays & Map',
    labels: ['Blind 75', 'Revisit']
  },
  {
    timeComplexity: 'O(n)',
    spaceComplexity: '',
    link: 'https://leetcode.com/problems/valid-palindrome/',
    linkTitle: 'Valid Palindrome',
    notes: 'Use two pointers to check if the string is a palindrome. Skip the non-alphanumeric characters.',
    difficulty: 1,
    category: 'Two Pointers',
    labels: ['Grind 23', 'Blind 75']
  },
  {
    timeComplexity: 'O(n^2)',
    spaceComplexity: 'O(n)',
    link: 'https://leetcode.com/problems/3sum/',
    linkTitle: '3Sum',
    notes: `
    Keep one ptr at the left mode node. Now keep 2 more ptrs to establish a window on the right.
    Keep searching for combinations that match the target sum in that window.
    Once you find a match, move the left ptr within the window, ignoring dupes of it if they exist.
    `,
    difficulty: 2,
    category: 'Two Pointers',
    labels: ['Grind 23', 'Blind 75', 'Revisit']
  },
  {
    timeComplexity: 'O(n)',
    spaceComplexity: 'O(n)',
    link: 'https://leetcode.com/problems/container-with-most-water/',
    linkTitle: 'Container With Most Water',
    notes: `
    Put a leftPtr & rightPtr at the start and end of the list. Get the volume (diff heights * distance between them).
    Track the max volume & every iteration, move the ptr based on whether leftPtr is smaller in height or rightPtr.
    `,
    difficulty: 2,
    category: 'Two Pointers',
    labels: ['Blind 75', 'Revisit']
  },
  {
    timeComplexity: 'O(n)',
    spaceComplexity: 'O(1)',
    link: 'https://leetcode.com/problems/best-time-to-buy-and-sell-stock/',
    linkTitle: 'Best Time to Buy and Sell Stock',
    notes: 'Keep track of the minimum in a variable. Keep moving forward and updating profit as the values are higher than the currentProfit. If the new value exceeds the minimum, then change the minimum.',
    difficulty: 1,
    category: 'Sliding Window',
    labels: ['Grind 23', 'Blind 75', 'Revisit']
  },
  {
    timeComplexity: 'O(n)',
    spaceComplexity: 'O(n)',
    link: 'https://leetcode.com/problems/longest-substring-without-repeating-characters/',
    linkTitle: 'Longest Substring Without Repeating Characters',
    notes: `
    Use a left ptr & right ptr with the left starting at the start of the array & the right just next to it.
    Slide the window as you pass unique characters, tracking their last seen positions in a map.
    If a character is repeated, consider the max of (leftPtr, last seen position of the character + 1) & move the left ptr to that position.
    `,
    difficulty: 2,
    category: 'Sliding Window',
    labels: ['Grind 23', 'Revisit']
  },
  {
    timeComplexity: 'O(n)',
    spaceComplexity: 'O(m) where m is the number of unique characters. If all characters are english characters -> we can upper bound it to O(1)',
    link: 'https://leetcode.com/problems/longest-repeating-character-replacement/',
    linkTitle: 'Longest Repeating Character Replacement',
    notes: `
    `,
    difficulty: 2,
    category: 'Sliding Window',
    labels: ['Blind 75', 'Revisit']
  },
  {
    timeComplexity: '',
    spaceComplexity: '',
    link: 'https://leetcode.com/problems/minimum-window-substring/',
    linkTitle: 'Minimum Window Substring',
    notes: `
    `,
    difficulty: 3,
    category: 'Sliding Window',
    labels: ['Blind 75', 'Revisit']
  },
  {
    timeComplexity: 'O(n)',
    spaceComplexity: 'O(n)',
    link: 'https://leetcode.com/problems/valid-parentheses/',
    linkTitle: 'Valid Parentheses',
    notes: 'Use a stack to store the characters & store the mirror image in a Map. Peek the stack while and compare with the mirror image mapping in the map.',
    difficulty: 2,
    category: 'Stack',
    labels: ['Grind 23', 'Blind 75']
  },
  {
    timeComplexity: 'O(log(n))',
    spaceComplexity: 'O(1)',
    link: 'https://leetcode.com/problems/binary-search/',
    linkTitle: 'Binary Search',
    notes: 'Use 2 ptrs to mark the left and right boundary. Find the mid and check if element matches, otherwise, change the limit.',
    difficulty: 1,
    category: 'Binary Search',
    labels: ['Grind 23']
  },
  {
    timeComplexity: 'O(log(n))',
    spaceComplexity: 'O(1)',
    link: 'https://leetcode.com/problems/first-bad-version/',
    linkTitle: 'First Bad Version',
    notes: 
    `Binary search with a left & right ptr. Check whether the mid of the window is a bad version and change the left & right ptrs accordingly.
    Important that if the bad version is found, right changes to mid instead of mid - 1.
    `,
    difficulty: 1,
    category: 'Binary Search',
    labels: ['Grind 23']
  },
  {
    timeComplexity: 'O(log(n))',
    spaceComplexity: 'O(1)',
    link: 'https://leetcode.com/problems/find-minimum-in-rotated-sorted-array',
    linkTitle: 'Find Minimum in Rotated Sorted Array',
    notes: 'Regular binary search, moving the l & r pointers based on the minimum value found in the middle.',
    difficulty: 2,
    category: 'Binary Search',
    labels: ['Blind 75']
  },
  {
    timeComplexity: '',
    spaceComplexity: '',
    link: 'https://leetcode.com/problems/search-in-rotated-sorted-array',
    linkTitle: 'Search in Rotated Sorted Array',
    notes: '',
    difficulty: 2,
    category: 'Binary Search',
    labels: ['Blind 75']
  },
  {
    timeComplexity: 'O(n)',
    spaceComplexity: 'O(1)',
    link: 'https://leetcode.com/problems/merge-two-sorted-lists/',
    linkTitle: 'Merge Two Sorted Lists',
    notes: 'Use 2 ptrs to track the left & right lists, adding to a dummy list as you iterate through them.',
    difficulty: 1,
    category: 'Linked List',
    labels: ['Grind 23', 'Blind 75', 'Revisit']
  },
  {
    timeComplexity: 'O(n)',
    spaceComplexity: 'O(n)',
    link: 'https://leetcode.com/problems/balanced-binary-tree/',
    linkTitle: 'Balanced Binary Tree',
    notes: 'Write helper to find the height of nodes. Check that the abs(left branch - right branch) < 2 & that both branches are also balanced.',
    difficulty: 1,
    category: 'Trees',
    labels: ['Grind 23']
  },
  {
    timeComplexity: 'O(n)',
    spaceComplexity: 'O(n) i.e. where n is the height of the tree (the number of recursive calls put on the stack)',
    link: 'https://leetcode.com/problems/invert-binary-tree/',
    linkTitle: 'Invert Binary Tree',
    notes: 'Recursively call invertBinaryTree on left & right nodes, which should swap the nodes.',
    difficulty: 1,
    category: 'Trees',
    labels: ['Grind 23', 'Blind 75']
  },
  {
    timeComplexity: '',
    spaceComplexity: '',
    link: 'https://leetcode.com/problems/maximum-depth-of-binary-tree/',
    linkTitle: 'Maximum Depth of Binary Tree',
    notes: `
    `,
    difficulty: 1,
    category: 'Trees',
    labels: ['Blind 75', 'Revisit']
  },
  {
    timeComplexity: '',
    spaceComplexity: '',
    link: 'https://leetcode.com/problems/same-tree/',
    linkTitle: 'Same Tree',
    notes: `
    `,
    difficulty: 1,
    category: 'Trees',
    labels: ['Blind 75', 'Revisit']
  },
  {
    timeComplexity: '',
    spaceComplexity: '',
    link: 'https://leetcode.com/problems/subtree-of-another-tree/',
    linkTitle: 'Subtree of Another Tree',
    notes: `
    `,
    difficulty: 1,
    category: 'Trees',
    labels: ['Blind 75', 'Revisit']
  },
  {
    timeComplexity: 'O(log(n))',
    spaceComplexity: 'O(n)',
    link: 'https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/',
    linkTitle: 'Lowest Common Ancestor of a Binary Search Tree',
    notes: 'If both values less than root, go to the left subtree, else if both are greater than the root, go to the right subtree. Else, return root.',
    difficulty: 2,
    category: 'Trees',
    labels: ['Grind 23']
  },
  {
    timeComplexity: 'O(n^2)',
    spaceComplexity: 'O(n)',
    link: 'https://leetcode.com/problems/binary-tree-level-order-traversal/',
    linkTitle: 'Binary Tree Level Order Traversal',
    notes: `
    ...
    `,
    difficulty: 2,
    category: 'Trees',
    labels: ['Grind 23', 'Revisit']
  },
  {
    timeComplexity: 'O(n)',
    spaceComplexity: 'O(n)',
    link: 'https://leetcode.com/problems/flood-fill/',
    linkTitle: 'Flood Fill',
    notes: 'Create a pair to store visited coordinates. Recursively go to all 4 directions and try to flood fill (DFS) - excluding already visited Pairs & respecting the boundaries of the array.',
    difficulty: 1,
    category: 'Recursion',
    labels: ['Grind 23']
  },
  {
    timeComplexity: 'O(n)',
    spaceComplexity: 'O(1)',
    link: 'https://leetcode.com/problems/linked-list-cycle/',
    linkTitle: 'Linked List Cycle',
    notes: 'Slow ptr & fast ptr starting on the same node. Do null checks & a while loop to continuously increment the slow & fast ptr & check if they are equal (cycle).',
    difficulty: 1,
    category: 'Linked List',
    labels: ['Grind 23', 'Blind 75', 'Revisit']
  },
  {
    timeComplexity: 'O(1) for push, O(n) for pop & O(1) for peek',
    spaceComplexity: 'O(n)',
    link: 'https://leetcode.com/problems/implement-queue-using-stacks/',
    linkTitle: 'Implement Queue using Stacks',
    notes: 'Take 2 stacks and move items between them.',
    difficulty: 1,
    category: 'Heap, Queue & Stacks',
    labels: ['Grind 23']
  },
  {
    timeComplexity: '',
    spaceComplexity: '',
    link: 'https://leetcode.com/problems/combination-sum/',
    linkTitle: 'Combination Sum',
    notes: `
    `,
    difficulty: 2,
    category: 'Backtracking',
    labels: ['Blind 75', 'Revisit']
  },
  {
    timeComplexity: '',
    spaceComplexity: '',
    link: 'https://leetcode.com/problems/word-search/',
    linkTitle: 'Word Search',
    notes: `
    `,
    difficulty: 2,
    category: 'Backtracking',
    labels: ['Blind 75', 'Revisit']
  },
  {
    timeComplexity: '',
    spaceComplexity: '',
    link: 'https://leetcode.com/problems/number-of-islands/',
    linkTitle: 'Number of Islands',
    notes: `
    `,
    difficulty: 2,
    category: 'Graphs',
    labels: ['Blind 75', 'Revisit']
  },
  {
    timeComplexity: 'O(n)',
    spaceComplexity: 'O(n)',
    link: 'https://leetcode.com/problems/clone-graph/',
    linkTitle: 'Clone Graph',
    notes: `
    Create a helper for cloning the graph. Create a hashmap to track previously visited nodes.
    Recursively clone the graph and visit the neighbors and start closing them. Use the previously created hashmap so that previously visited
    neighbors can be looked up without recloning them.
    `,
    difficulty: 2,
    category: 'Graphs',
    labels: ['Grind 23']
  },
  {
    timeComplexity: 'O(n^2)',
    spaceComplexity: 'O(n^2)',
    link: 'https://leetcode.com/problems/01-matrix/',
    linkTitle: '01 Matrix',
    notes: `
    First create a 2d array to record distances, the ones with 0 having 0 distance and others being initialized to infinity.
    Then scan the left from the top left to right, row by row, while checking the left and top entry to see whether the distance needs to be updated.
    Then scan from right to left starting at the bottom, row by row to the top, while checking the right and bottom entry to see whether the distance needs to be updated.
    `,
    difficulty: 2,
    category: 'Dynamic Programming',
    labels: ['Grind 23']
  },
  {
    timeComplexity: 'O(n)',
    spaceComplexity: 'O(1)',
    link: 'https://leetcode.com/problems/maximum-subarray/',
    linkTitle: 'Maximum Subarray',
    notes: 'Track the current sum & max sum. Loop through the array & update the sum as we go through the list.',
    difficulty: 1,
    category: 'Greedy',
    labels: ['Grind 23', 'Blind 75', 'Revisit']
  },
  {
    timeComplexity: 'O(n)',
    spaceComplexity: 'O(n)',
    link: 'https://leetcode.com/problems/maximum-subarray/',
    linkTitle: 'Insert Interval',
    notes: `
    3 cases.
    
    Loop through the intervals.
    If the interval to insert is smaller than the current interval, add all the intervals to the right & return new list.
    If the interval to insert is larger than the current interval, insert the current interval and keep moving ahead.
    If the interval to insert overlaps the current interval, take the min of left window & the max of the right window
    & merge the current & inserted interval -> the newly created interval is the one that's considered while continuing through the loop.'
    `,
    difficulty: 2,
    category: 'Intervals',
    labels: ['Grind 23', 'Blind 75', 'Revisit']
  },
  {
    timeComplexity: 'O(n log (n))',
    spaceComplexity: 'O(n)',
    link: 'https://leetcode.com/problems/k-closest-points-to-origin/',
    linkTitle: 'K Closests Points to Origin',
    notes: `
    Create a priority queue (min heap) & heapify all the elements in the source array using a custom comparator.
    Return the k smallest elements.
    `,
    difficulty: 2,
    category: 'Heap, Queue & Stacks',
    labels: ['Grind 23']
  },
  {
    timeComplexity: 'O(n)',
    spaceComplexity: 'O(1)',
    link: 'https://leetcode.com/problems/reverse-linked-list/',
    linkTitle: 'Reverse Linked List',
    notes: `
    `,
    difficulty: 2,
    category: 'Linked List',
    labels: ['Blind 75', 'Revisit']
  },
  {
    timeComplexity: 'O(n)',
    spaceComplexity: 'O(1)',
    link: 'https://leetcode.com/problems/reorder-list/',
    linkTitle: 'Reorder List',
    notes: `
    `,
    difficulty: 2,
    category: 'Linked List',
    labels: ['Blind 75', 'Revisit']
  },
  {
    timeComplexity: 'O(n)',
    spaceComplexity: 'O(1)',
    link: 'https://leetcode.com/problems/remove-nth-node-from-end-of-list/',
    linkTitle: 'Remove Nth Node From End of List',
    notes: `
    `,
    difficulty: 2,
    category: 'Linked List',
    labels: ['Blind 75', 'Revisit']
  },
  {
    timeComplexity: '',
    spaceComplexity: '',
    link: 'https://leetcode.com/problems/merge-k-sorted-lists/',
    linkTitle: 'Merge k Sorted Lists',
    notes: `
    `,
    difficulty: 3,
    category: 'Linked List',
    labels: ['Blind 75', 'Revisit']
  },
  {
    timeComplexity: '',
    spaceComplexity: '',
    link: 'https://leetcode.com/problems/merge-intervals/',
    linkTitle: 'Merge Intervals',
    notes: `
    `,
    difficulty: 2,
    category: 'Intervals',
    labels: ['Blind 75', 'Revisit']
  },
];
export default problems; 