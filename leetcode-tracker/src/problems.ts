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
    link: 'https://leetcode.com/problems/valid-parentheses/',
    linkTitle: 'Valid Parentheses',
    notes: 'Use a stack to store the characters & store the mirror image in a Map. Peek the stack while and compare with the mirror image mapping in the map.',
    difficulty: 2,
    category: 'Stack',
    labels: ['Grind 75']
  },
  {
    timeComplexity: 'O(log(n))',
    spaceComplexity: 'O(1)',
    link: 'https://leetcode.com/problems/find-minimum-in-rotated-sorted-array',
    linkTitle: 'Find Minimum in Rotated Sorted Array',
    notes: 'Regular binary search, moving the l & r pointers based on the minimum value found in the middle.',
    difficulty: 2,
    category: 'Binary Search',
    labels: ['Grind 75']
  },
  {
    timeComplexity: 'O(n)',
    spaceComplexity: '',
    link: 'https://leetcode.com/problems/two-sum/',
    linkTitle: 'Two Sum',
    notes: 'Use a hash map to store the value and index of the elements. Check if the complement of the current element exists in the map.',
    difficulty: 2,
    category: 'Arrays & Map',
    labels: ['Grind 75']
  },
  {
    timeComplexity: 'O(n)',
    spaceComplexity: '',
    link: 'https://leetcode.com/problems/valid-palindrome/',
    linkTitle: 'Valid Palindrome',
    notes: 'Use two pointers to check if the string is a palindrome. Skip the non-alphanumeric characters.',
    difficulty: 2,
    category: 'Two Pointers',
    labels: ['Grind 75']
  },
  {
    timeComplexity: 'O(n)',
    spaceComplexity: '',
    link: 'https://leetcode.com/problems/valid-anagram/',
    linkTitle: 'Valid Anagram',
    notes: 'Keep track of the number of times the character appeared for both strings. Match the counts.',
    difficulty: 1,
    category: 'Arrays & Map',
    labels: ['Grind 75']
  },
  {
    timeComplexity: 'O(n)',
    spaceComplexity: '',
    link: 'https://leetcode.com/problems/merge-two-sorted-lists/',
    linkTitle: 'Merge Two Sorted Lists',
    notes: 'Use 2 ptrs to track the left & right lists, adding to a dummy list as you iterate through them.',
    difficulty: 1,
    category: 'Two Pointers',
    labels: ['Grind 75']
  },
  {
    timeComplexity: 'O(n)',
    spaceComplexity: '',
    link: 'https://leetcode.com/problems/best-time-to-buy-and-sell-stock/',
    linkTitle: 'Best Time to Buy and Sell Stock',
    notes: 'Keep track of the minimum in a variable. Keep moving forward and updating profit as the values are higher than the currentProfit. If the new value exceeds the minimum, then change the minimum.',
    difficulty: 1,
    category: 'Arrays & Map',
    labels: ['Grind 75']
  },
  {
    timeComplexity: 'O(n)',
    spaceComplexity: '',
    link: 'https://leetcode.com/problems/invert-binary-tree/',
    linkTitle: 'Invert Binary Tree',
    notes: 'Recursively call invertBinaryTree on left & right nodes, which should swap the nodes.',
    difficulty: 1,
    category: 'Trees',
    labels: ['Grind 75']
  },
  {
    timeComplexity: 'O(log(n))',
    spaceComplexity: 'O(1)',
    link: 'https://leetcode.com/problems/binary-search/',
    linkTitle: 'Binary Search',
    notes: 'Use 2 ptrs to mark the left and right boundary. Find the mid and check if element matches, otherwise, change the limit.',
    difficulty: 1,
    category: 'Binary Search',
    labels: ['Grind 75']
  },
  {
    timeComplexity: 'O(n)',
    spaceComplexity: 'O(n)',
    link: 'https://leetcode.com/problems/flood-fill/',
    linkTitle: 'Flood Fill',
    notes: 'Create a pair to store visited coordinates. Recursively go to all 4 directions and try to flood fill (DFS) - excluding already visited Pairs & respecting the boundaries of the array.',
    difficulty: 1,
    category: 'Recursion',
    labels: ['Grind 75']
  },
  {
    timeComplexity: 'O(log(n))',
    spaceComplexity: 'O(n)',
    link: 'https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/',
    linkTitle: 'Lowest Common Ancestor of a Binary Search Tree',
    notes: 'If both values less than root, go to the left subtree, else if both are greater than the root, go to the right subtree. Else, return root.',
    difficulty: 2,
    category: 'Recursion',
    labels: ['Grind 75']
  },
  {
    timeComplexity: 'O(n)',
    spaceComplexity: 'O(1)',
    link: 'https://leetcode.com/problems/linked-list-cycle/',
    linkTitle: 'Linked List Cycle',
    notes: 'Slow ptr & fast ptr starting on the same node. Do null checks & a while loop to continuously increment the slow & fast ptr & check if they are equal (cycle).',
    difficulty: 1,
    category: 'Two Pointers',
    labels: ['Grind 75']
  },
  {
    timeComplexity: 'O(n)',
    spaceComplexity: 'O(n)',
    link: 'https://leetcode.com/problems/balanced-binary-tree/',
    linkTitle: 'Balanced Binary Tree',
    notes: 'Write helper to find the height of nodes. Check that the abs(left branch - right branch) < 2 & that both branches are also balanced.',
    difficulty: 2,
    category: 'Recursion',
    labels: ['Grind 75']
  },
  {
    timeComplexity: 'O(1) for push, O(n) for pop & O(1) for peek',
    spaceComplexity: 'O(n)',
    link: 'https://leetcode.com/problems/implement-queue-using-stacks/',
    linkTitle: 'Implement Queue using Stacks',
    notes: 'Take 2 stacks and move items between them.',
    difficulty: 1,
    category: 'Heap, Queue & Stacks',
    labels: ['Grind 75']
  },
  {
    timeComplexity: 'O(log(n))',
    spaceComplexity: 'O(1)',
    link: 'https://leetcode.com/problems/first-bad-version/',
    linkTitle: 'First Bad Version',
    notes: 'Binary search but you need track the window by keeping a start and end. Check whether the mid of the window is a bad version and slide the window accordingly.',
    difficulty: 1,
    category: 'Binary Search',
    labels: ['Grind 75']
  },
  {
    timeComplexity: 'O(n)',
    spaceComplexity: 'O(n)',
    link: 'https://leetcode.com/problems/ransom-note/',
    linkTitle: 'Ransom Note',
    notes: 'Use a hashmap to count the number of characters in magazine. Subtract the counts of characters from ransomNote & check whether all the characters were found.',
    difficulty: 1,
    category: 'Arrays & Map',
    labels: ['Grind 75']
  },
  {
    timeComplexity: 'O(n)',
    spaceComplexity: 'O(n)',
    link: 'https://leetcode.com/problems/maximum-subarray/',
    linkTitle: 'Maximum Subarray',
    notes: 'Track the current sum & max sum. Loop through the array & update the sum as we go through the list.',
    difficulty: 1,
    category: 'Arrays & Map',
    labels: ['Grind 75']
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
    difficulty: 1,
    category: 'Arrays & Map',
    labels: ['Grind 75']
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
    labels: ['Grind 75']
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
    labels: ['Grind 75']
  },
  {
    timeComplexity: 'O(n)',
    spaceComplexity: 'O(n)',
    link: 'https://leetcode.com/problems/longest-substring-without-repeating-characters/',
    linkTitle: 'Longest Substring Without Repeating Characters',
    notes: `
    ...
    `,
    difficulty: 2,
    category: 'Two Pointers',
    labels: ['Grind 75', 'Revisit']
  },
  {
    timeComplexity: 'O(n^2)',
    spaceComplexity: 'O(n)',
    link: 'https://leetcode.com/problems/3sum/',
    linkTitle: '3sum',
    notes: `
    ...
    `,
    difficulty: 2,
    category: 'Two Pointers',
    labels: ['Grind 75', 'Revisit']
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
    labels: ['Grind 75', 'Revisit']
  },
  {
    timeComplexity: 'O(n)',
    spaceComplexity: 'O(n)',
    link: 'https://leetcode.com/problems/clone-graph/',
    linkTitle: 'Clone Graph',
    notes: `
    Craete a helper for cloning the graph. Create a hashmap to track previously visited nodes.
    Recursively clone the graph and visit the neighbors and start closing them. Use the previously created hashmap so that previously visited
    neighbors can be looked up without recloning them.
    `,
    difficulty: 2,
    category: 'Trees',
    labels: ['Grind 75']
  }
];
export default problems; 