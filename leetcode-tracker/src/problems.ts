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
    labels: ['Grind 23', 'Blind 75', 'Meta']
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
    labels: ['Grind 23', 'Blind 75', 'Meta']
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
    link: 'https://leetcode.com/problems/group-anagrams/',
    linkTitle: 'Group Anagrams',
    notes: 
    `Calculate the RLE for each string. Hash the string using the RLE and store all the strings with the same RLE under the same key.
    Return the list of all values in the Map.
    `,
    difficulty: 2,
    category: 'Arrays & Map',
    labels: ['Blind 75', 'Meta']
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
    labels: ['Blind 75', 'Revisit', 'Meta']
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
    labels: ['Grind 23', 'Blind 75', 'Meta']
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
    timeComplexity: 'O(n²)',
    spaceComplexity: 'O(1)',
    link: 'https://leetcode.com/problems/4sum/',
    linkTitle: '4Sum',
    notes: 'Find all unique quadruplets that sum to target using two pointers approach.',
    difficulty: 2,
    category: 'Two Pointers',
    labels: ['Meta']
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
    labels: ['Grind 23', 'Blind 75', 'Meta']
  },
  {
    timeComplexity: 'O(log(n))',
    spaceComplexity: 'O(1)',
    link: 'https://leetcode.com/problems/binary-search/',
    linkTitle: 'Binary Search',
    notes: 'Use 2 ptrs to mark the left and right boundary. Find the mid and check if element matches, otherwise, change the limit.',
    difficulty: 1,
    category: 'Binary Search',
    labels: ['Grind 23', 'Meta']
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
    labels: ['Grind 23', 'Blind 75', 'Revisit', 'Meta']
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
    labels: ['Grind 23', 'Blind 75', 'Meta']
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
    labels: ['Grind 23', 'Blind 75', 'Revisit', 'Meta']
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
    labels: ['Grind 23', 'Meta']
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
  // Meta Problems - Strings
  {
    timeComplexity: 'O(n)',
    spaceComplexity: 'O(1)',
    link: 'https://leetcode.com/problems/valid-palindrome/',
    linkTitle: 'Valid Palindrome',
    notes: 'Check if a string is a palindrome by comparing characters from both ends, ignoring non-alphanumeric characters.',
    difficulty: 1,
    category: 'Strings',
    labels: ['Meta']
  },
  {
    timeComplexity: 'O(n)',
    spaceComplexity: 'O(n)',
    link: 'https://leetcode.com/problems/goat-latin/',
    linkTitle: 'Goat Latin',
    notes: 'Convert words to Goat Latin based on vowel/consonant rules and add "ma" + "a" repeated i+1 times.',
    difficulty: 1,
    category: 'Strings',
    labels: ['Meta']
  },
  {
    timeComplexity: 'O(n)',
    spaceComplexity: 'O(1)',
    link: 'https://leetcode.com/problems/check-if-two-string-arrays-are-equivalent/',
    linkTitle: 'Check If Two String Arrays are Equivalent',
    notes: 'Concatenate all strings in both arrays and compare the results.',
    difficulty: 1,
    category: 'Strings',
    labels: ['Meta']
  },
  {
    timeComplexity: 'O(max(n,m))',
    spaceComplexity: 'O(max(n,m))',
    link: 'https://leetcode.com/problems/add-strings/',
    linkTitle: 'Add Strings',
    notes: 'Add two strings representing numbers digit by digit, handling carry.',
    difficulty: 1,
    category: 'Strings',
    labels: ['Meta']
  },
  {
    timeComplexity: 'O(S)',
    spaceComplexity: 'O(1)',
    link: 'https://leetcode.com/problems/longest-common-prefix/',
    linkTitle: 'Longest Common Prefix',
    notes: 'Find the longest common prefix among all strings by comparing characters at each position.',
    difficulty: 1,
    category: 'Strings',
    labels: ['Meta']
  },
  {
    timeComplexity: 'O(n)',
    spaceComplexity: 'O(1)',
    link: 'https://leetcode.com/problems/valid-word-abbreviation/',
    linkTitle: 'Valid Word Abbreviation',
    notes: 'Check if an abbreviation is valid by parsing numbers and comparing with the original word.',
    difficulty: 1,
    category: 'Strings',
    labels: ['Meta']
  },
  {
    timeComplexity: 'O(n)',
    spaceComplexity: 'O(1)',
    link: 'https://leetcode.com/problems/reverse-vowels-of-a-string/',
    linkTitle: 'Reverse Vowels of a String',
    notes: 'Reverse only the vowels in a string while keeping consonants in their original positions.',
    difficulty: 1,
    category: 'Strings',
    labels: ['Meta']
  },
  {
    timeComplexity: 'O(n)',
    spaceComplexity: 'O(n)',
    link: 'https://leetcode.com/problems/zigzag-conversion/',
    linkTitle: 'Zigzag Conversion',
    notes: 'Convert string to zigzag pattern by placing characters in rows and reading row by row.',
    difficulty: 2,
    category: 'Strings',
    labels: ['Meta']
  },
  {
    timeComplexity: 'O(n)',
    spaceComplexity: 'O(1)',
    link: 'https://leetcode.com/problems/string-to-integer-atoi/',
    linkTitle: 'String to Integer (atoi)',
    notes: 'Parse string to integer, handling whitespace, signs, and overflow conditions.',
    difficulty: 2,
    category: 'Strings',
    labels: ['Meta']
  },
  {
    timeComplexity: 'O(n)',
    spaceComplexity: 'O(n)',
    link: 'https://leetcode.com/problems/repeated-string-match/',
    linkTitle: 'Repeated String Match',
    notes: 'Find minimum number of times to repeat string A so that string B becomes a substring.',
    difficulty: 2,
    category: 'Strings',
    labels: ['Meta']
  },
  {
    timeComplexity: 'O(n)',
    spaceComplexity: 'O(n)',
    link: 'https://leetcode.com/problems/custom-sort-string/',
    linkTitle: 'Custom Sort String',
    notes: 'Sort string based on custom order defined by another string.',
    difficulty: 2,
    category: 'Strings',
    labels: ['Meta']
  },
  {
    timeComplexity: 'O(n)',
    spaceComplexity: 'O(n)',
    link: 'https://leetcode.com/problems/remove-all-adjacent-duplicates-in-string-ii/',
    linkTitle: 'Remove All Adjacent Duplicates in String II',
    notes: 'Remove k adjacent duplicates from string using stack to track character counts.',
    difficulty: 2,
    category: 'Strings',
    labels: ['Meta']
  },
  {
    timeComplexity: 'O(n)',
    spaceComplexity: 'O(1)',
    link: 'https://leetcode.com/problems/string-compression/',
    linkTitle: 'String Compression',
    notes: 'Compress string by counting consecutive characters and replacing with character + count.',
    difficulty: 2,
    category: 'Strings',
    labels: ['Meta']
  },
  {
    timeComplexity: 'O(n)',
    spaceComplexity: 'O(1)',
    link: 'https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/',
    linkTitle: 'Find the Index of the First Occurrence in a String',
    notes: 'Find first occurrence of needle in haystack using KMP algorithm or built-in methods.',
    difficulty: 2,
    category: 'Strings',
    labels: ['Meta']
  },
  {
    timeComplexity: 'O(mn)',
    spaceComplexity: 'O(mn)',
    link: 'https://leetcode.com/problems/wildcard-matching/',
    linkTitle: 'Wildcard Matching',
    notes: 'Match string against pattern with wildcards * and ? using dynamic programming.',
    difficulty: 3,
    category: 'Strings',
    labels: ['Meta']
  },
  {
    timeComplexity: 'O(4^n)',
    spaceComplexity: 'O(n)',
    link: 'https://leetcode.com/problems/expression-add-operators/',
    linkTitle: 'Expression Add Operators',
    notes: 'Add operators between digits to evaluate to target using backtracking.',
    difficulty: 3,
    category: 'Strings',
    labels: ['Meta']
  },
  {
    timeComplexity: 'O(n)',
    spaceComplexity: 'O(1)',
    link: 'https://leetcode.com/problems/valid-number/',
    linkTitle: 'Valid Number',
    notes: 'Validate if string represents a valid number with decimal, exponent, and sign.',
    difficulty: 3,
    category: 'Strings',
    labels: ['Meta']
  },
  // Meta Problems - Math & Bit Manipulation
  {
    timeComplexity: 'O(log n)',
    spaceComplexity: 'O(1)',
    link: 'https://leetcode.com/problems/palindrome-number/',
    linkTitle: 'Palindrome Number',
    notes: 'Check if number is palindrome by reversing half of the digits.',
    difficulty: 1,
    category: 'Math & Bit Manipulation',
    labels: ['Meta']
  },
  {
    timeComplexity: 'O(1)',
    spaceComplexity: 'O(1)',
    link: 'https://leetcode.com/problems/reverse-bits/',
    linkTitle: 'Reverse Bits',
    notes: 'Reverse the bits of a 32-bit unsigned integer.',
    difficulty: 1,
    category: 'Math & Bit Manipulation',
    labels: ['Meta']
  },
  {
    timeComplexity: 'O(log n)',
    spaceComplexity: 'O(1)',
    link: 'https://leetcode.com/problems/powx-n/',
    linkTitle: 'Pow(x, n)',
    notes: 'Implement pow(x, n) using fast exponentiation with binary representation.',
    difficulty: 2,
    category: 'Math & Bit Manipulation',
    labels: ['Meta']
  },
  {
    timeComplexity: 'O(log n)',
    spaceComplexity: 'O(1)',
    link: 'https://leetcode.com/problems/maximum-swap/',
    linkTitle: 'Maximum Swap',
    notes: 'Swap two digits to get maximum number by finding rightmost largest digit.',
    difficulty: 2,
    category: 'Math & Bit Manipulation',
    labels: ['Meta']
  },
  {
    timeComplexity: 'O(1)',
    spaceComplexity: 'O(1)',
    link: 'https://leetcode.com/problems/integer-to-roman/',
    linkTitle: 'Integer to Roman',
    notes: 'Convert integer to Roman numeral using greedy approach with predefined values.',
    difficulty: 2,
    category: 'Math & Bit Manipulation',
    labels: ['Meta']
  },
  {
    timeComplexity: 'O(log n)',
    spaceComplexity: 'O(1)',
    link: 'https://leetcode.com/problems/reverse-integer/',
    linkTitle: 'Reverse Integer',
    notes: 'Reverse digits of integer, handling overflow conditions.',
    difficulty: 2,
    category: 'Math & Bit Manipulation',
    labels: ['Meta']
  },
  {
    timeComplexity: 'O(log(m+n))',
    spaceComplexity: 'O(1)',
    link: 'https://leetcode.com/problems/median-of-two-sorted-arrays/',
    linkTitle: 'Median of Two Sorted Arrays',
    notes: 'Find median of two sorted arrays using binary search on partition points.',
    difficulty: 3,
    category: 'Math & Bit Manipulation',
    labels: ['Meta']
  },
  {
    timeComplexity: 'O(n)',
    spaceComplexity: 'O(1)',
    link: 'https://leetcode.com/problems/sum-of-k-mirror-numbers/',
    linkTitle: 'Sum of k-Mirror Numbers',
    notes: 'Find sum of k numbers that are palindromes in both decimal and k-ary representations.',
    difficulty: 3,
    category: 'Math & Bit Manipulation',
    labels: ['Meta']
  },
  // Meta Problems - Binary Search
  {
    timeComplexity: 'O(log n)',
    spaceComplexity: 'O(1)',
    link: 'https://leetcode.com/problems/kth-missing-positive-number/',
    linkTitle: 'Kth Missing Positive Number',
    notes: 'Find kth missing positive number in sorted array using binary search.',
    difficulty: 2,
    category: 'Binary Search',
    labels: ['Meta']
  },
  {
    timeComplexity: 'O(log n)',
    spaceComplexity: 'O(1)',
    link: 'https://leetcode.com/problems/peak-index-in-a-mountain-array/',
    linkTitle: 'Peak Index in a Mountain Array',
    notes: 'Find peak index in mountain array using binary search.',
    difficulty: 2,
    category: 'Binary Search',
    labels: ['Meta']
  },
  {
    timeComplexity: 'O(log n)',
    spaceComplexity: 'O(1)',
    link: 'https://leetcode.com/problems/find-peak-element/',
    linkTitle: 'Find Peak Element',
    notes: 'Find any peak element in array using binary search.',
    difficulty: 2,
    category: 'Binary Search',
    labels: ['Meta']
  },
  {
    timeComplexity: 'O(log n)',
    spaceComplexity: 'O(1)',
    link: 'https://leetcode.com/problems/search-in-rotated-sorted-array/',
    linkTitle: 'Search in Rotated Sorted Array',
    notes: 'Search in rotated sorted array using binary search with rotation detection.',
    difficulty: 2,
    category: 'Binary Search',
    labels: ['Meta']
  },
  {
    timeComplexity: 'O(log n)',
    spaceComplexity: 'O(1)',
    link: 'https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/',
    linkTitle: 'Find First and Last Position of Element in Sorted Array',
    notes: 'Find first and last occurrence using two binary searches.',
    difficulty: 2,
    category: 'Binary Search',
    labels: ['Meta']
  },
  {
    timeComplexity: 'O(n log n)',
    spaceComplexity: 'O(1)',
    link: 'https://leetcode.com/problems/kth-smallest-element-in-a-sorted-matrix/',
    linkTitle: 'Kth Smallest Element in a Sorted Matrix',
    notes: 'Find kth smallest element in sorted matrix using binary search on value range.',
    difficulty: 2,
    category: 'Binary Search',
    labels: ['Meta']
  },
  {
    timeComplexity: 'O(log n)',
    spaceComplexity: 'O(1)',
    link: 'https://leetcode.com/problems/missing-element-in-sorted-array/',
    linkTitle: 'Missing Element in Sorted Array',
    notes: 'Find missing element in sorted array using binary search.',
    difficulty: 2,
    category: 'Binary Search',
    labels: ['Meta']
  },
  // Meta Problems - Arrays
  {
    timeComplexity: 'O(n)',
    spaceComplexity: 'O(1)',
    link: 'https://leetcode.com/problems/remove-duplicates-from-sorted-array/',
    linkTitle: 'Remove Duplicates from Sorted Array',
    notes: 'Remove duplicates in-place using two pointers.',
    difficulty: 1,
    category: 'Arrays & Map',
    labels: ['Meta']
  },
  {
    timeComplexity: 'O(n²)',
    spaceComplexity: 'O(1)',
    link: 'https://leetcode.com/problems/pascals-triangle/',
    linkTitle: 'Pascal\'s Triangle',
    notes: 'Generate Pascal\'s triangle using dynamic programming.',
    difficulty: 1,
    category: 'Arrays & Map',
    labels: ['Meta']
  },
  {
    timeComplexity: 'O(n)',
    spaceComplexity: 'O(1)',
    link: 'https://leetcode.com/problems/move-zeroes/',
    linkTitle: 'Move Zeroes',
    notes: 'Move all zeroes to end while maintaining relative order of non-zero elements.',
    difficulty: 1,
    category: 'Arrays & Map',
    labels: ['Meta']
  },
  {
    timeComplexity: 'O(1)',
    spaceComplexity: 'O(1)',
    link: 'https://leetcode.com/problems/range-sum-query-immutable/',
    linkTitle: 'Range Sum Query - Immutable',
    notes: 'Precompute prefix sums for O(1) range sum queries.',
    difficulty: 1,
    category: 'Arrays & Map',
    labels: ['Meta']
  },
  {
    timeComplexity: 'O(n)',
    spaceComplexity: 'O(1)',
    link: 'https://leetcode.com/problems/find-missing-and-repeated-values/',
    linkTitle: 'Find Missing and Repeated Values',
    notes: 'Find missing and repeated values in array using mathematical approach.',
    difficulty: 1,
    category: 'Arrays & Map',
    labels: ['Meta']
  },
  {
    timeComplexity: 'O(n log n)',
    spaceComplexity: 'O(1)',
    link: 'https://leetcode.com/problems/find-subsequence-of-length-k-with-the-largest-sum/',
    linkTitle: 'Find Subsequence of Length K With the Largest Sum',
    notes: 'Find k largest elements and maintain their relative order.',
    difficulty: 1,
    category: 'Arrays & Map',
    labels: ['Meta']
  },
  {
    timeComplexity: 'O(n)',
    spaceComplexity: 'O(1)',
    link: 'https://leetcode.com/problems/find-all-k-distant-indices-in-an-array/',
    linkTitle: 'Find All K-Distant Indices in an Array',
    notes: 'Find all indices that are at most k distance from any index with value key.',
    difficulty: 1,
    category: 'Arrays & Map',
    labels: ['Meta']
  },
  {
    timeComplexity: 'O(n)',
    spaceComplexity: 'O(1)',
    link: 'https://leetcode.com/problems/max-consecutive-ones-iii/',
    linkTitle: 'Max Consecutive Ones III',
    notes: 'Find longest subarray with at most k zeros using sliding window.',
    difficulty: 2,
    category: 'Arrays & Map',
    labels: ['Meta']
  },
  {
    timeComplexity: 'O(n log n)',
    spaceComplexity: 'O(1)',
    link: 'https://leetcode.com/problems/diagonal-traverse/',
    linkTitle: 'Diagonal Traverse',
    notes: 'Traverse matrix diagonally using direction changes and boundary checks.',
    difficulty: 2,
    category: 'Arrays & Map',
    labels: ['Meta']
  },
  {
    timeComplexity: 'O(n log n)',
    spaceComplexity: 'O(n)',
    link: 'https://leetcode.com/problems/diagonal-traverse-ii/',
    linkTitle: 'Diagonal Traverse II',
    notes: 'Traverse 2D array diagonally using sorting by row+col sum.',
    difficulty: 2,
    category: 'Arrays & Map',
    labels: ['Meta']
  },
  {
    timeComplexity: 'O(n)',
    spaceComplexity: 'O(1)',
    link: 'https://leetcode.com/problems/buildings-with-an-ocean-view/',
    linkTitle: 'Buildings With an Ocean View',
    notes: 'Find buildings that have ocean view by checking if they are taller than all buildings to the right.',
    difficulty: 2,
    category: 'Arrays & Map',
    labels: ['Meta']
  },
  {
    timeComplexity: 'O(n log n)',
    spaceComplexity: 'O(1)',
    link: 'https://leetcode.com/problems/sort-colors/',
    linkTitle: 'Sort Colors',
    notes: 'Sort array of 0s, 1s, and 2s using Dutch National Flag algorithm.',
    difficulty: 2,
    category: 'Arrays & Map',
    labels: ['Meta']
  },
  {
    timeComplexity: 'O(mn)',
    spaceComplexity: 'O(1)',
    link: 'https://leetcode.com/problems/set-matrix-zeroes/',
    linkTitle: 'Set Matrix Zeroes',
    notes: 'Set entire row and column to zero if element is zero using first row/col as markers.',
    difficulty: 2,
    category: 'Arrays & Map',
    labels: ['Meta']
  },
  {
    timeComplexity: 'O(n)',
    spaceComplexity: 'O(n)',
    link: 'https://leetcode.com/problems/subarray-sum-equals-k/',
    linkTitle: 'Subarray Sum Equals K',
    notes: 'Find subarrays with sum k using prefix sum and hash map.',
    difficulty: 2,
    category: 'Arrays & Map',
    labels: ['Meta']
  },
  {
    timeComplexity: 'O(n)',
    spaceComplexity: 'O(n)',
    link: 'https://leetcode.com/problems/continuous-subarray-sum/',
    linkTitle: 'Continuous Subarray Sum',
    notes: 'Check if array has subarray with sum multiple of k using modulo arithmetic.',
    difficulty: 2,
    category: 'Arrays & Map',
    labels: ['Meta']
  },
  {
    timeComplexity: 'O(n log n)',
    spaceComplexity: 'O(1)',
    link: 'https://leetcode.com/problems/interval-list-intersections/',
    linkTitle: 'Interval List Intersections',
    notes: 'Find intersections of two interval lists using two pointers.',
    difficulty: 2,
    category: 'Arrays & Map',
    labels: ['Meta']
  },
  {
    timeComplexity: 'O(n)',
    spaceComplexity: 'O(n)',
    link: 'https://leetcode.com/problems/sum-of-subarray-minimums/',
    linkTitle: 'Sum of Subarray Minimums',
    notes: 'Find sum of minimums of all subarrays using monotonic stack.',
    difficulty: 2,
    category: 'Arrays & Map',
    labels: ['Meta']
  },
  {
    timeComplexity: 'O(n)',
    spaceComplexity: 'O(1)',
    link: 'https://leetcode.com/problems/product-of-two-run-length-encoded-arrays/',
    linkTitle: 'Product of Two Run-Length Encoded Arrays',
    notes: 'Multiply two run-length encoded arrays efficiently.',
    difficulty: 2,
    category: 'Arrays & Map',
    labels: ['Meta']
  },
  {
    timeComplexity: 'O(n)',
    spaceComplexity: 'O(n)',
    link: 'https://leetcode.com/problems/sliding-window-maximum/',
    linkTitle: 'Sliding Window Maximum',
    notes: 'Find maximum in sliding window using monotonic deque.',
    difficulty: 3,
    category: 'Arrays & Map',
    labels: ['Meta']
  },
  {
    timeComplexity: 'O(n)',
    spaceComplexity: 'O(1)',
    link: 'https://leetcode.com/problems/minimum-window-substring/',
    linkTitle: 'Minimum Window Substring',
    notes: 'Find minimum window containing all characters of target using sliding window.',
    difficulty: 3,
    category: 'Arrays & Map',
    labels: ['Meta']
  },
  // Meta Problems - Linked Lists
  {
    timeComplexity: 'O(n)',
    spaceComplexity: 'O(1)',
    link: 'https://leetcode.com/problems/middle-of-the-linked-list/',
    linkTitle: 'Middle of the Linked List',
    notes: 'Find middle node using fast and slow pointer technique.',
    difficulty: 1,
    category: 'Linked Lists',
    labels: ['Meta']
  },
  {
    timeComplexity: 'O(n)',
    spaceComplexity: 'O(1)',
    link: 'https://leetcode.com/problems/insert-into-a-sorted-circular-linked-list/',
    linkTitle: 'Insert into a Sorted Circular Linked List',
    notes: 'Insert node into sorted circular linked list maintaining order.',
    difficulty: 2,
    category: 'Linked Lists',
    labels: ['Meta']
  },
  {
    timeComplexity: 'O(max(n,m))',
    spaceComplexity: 'O(max(n,m))',
    link: 'https://leetcode.com/problems/add-two-numbers/',
    linkTitle: 'Add Two Numbers',
    notes: 'Add two linked lists representing numbers digit by digit.',
    difficulty: 2,
    category: 'Linked Lists',
    labels: ['Meta']
  },
  {
    timeComplexity: 'O(n)',
    spaceComplexity: 'O(1)',
    link: 'https://leetcode.com/problems/reverse-linked-list-ii/',
    linkTitle: 'Reverse Linked List II',
    notes: 'Reverse portion of linked list from position m to n.',
    difficulty: 2,
    category: 'Linked Lists',
    labels: ['Meta']
  },
  {
    timeComplexity: 'O(n)',
    spaceComplexity: 'O(1)',
    link: 'https://leetcode.com/problems/odd-even-linked-list/',
    linkTitle: 'Odd Even Linked List',
    notes: 'Group odd and even nodes together maintaining relative order.',
    difficulty: 2,
    category: 'Linked Lists',
    labels: ['Meta']
  },
  {
    timeComplexity: 'O(n)',
    spaceComplexity: 'O(n)',
    link: 'https://leetcode.com/problems/copy-list-with-random-pointer/',
    linkTitle: 'Copy List with Random Pointer',
    notes: 'Deep copy linked list with random pointers using hash map or interleaving.',
    difficulty: 2,
    category: 'Linked Lists',
    labels: ['Meta']
  },
  {
    timeComplexity: 'O(n)',
    spaceComplexity: 'O(1)',
    link: 'https://leetcode.com/problems/reverse-nodes-in-k-group/',
    linkTitle: 'Reverse Nodes in k-Group',
    notes: 'Reverse nodes in groups of k using iterative approach.',
    difficulty: 3,
    category: 'Linked Lists',
    labels: ['Meta']
  },
  // Meta Problems - Trees
  {
    timeComplexity: 'O(n)',
    spaceComplexity: 'O(h)',
    link: 'https://leetcode.com/problems/range-sum-of-bst/',
    linkTitle: 'Range Sum of BST',
    notes: 'Calculate sum of all nodes within range using inorder traversal.',
    difficulty: 1,
    category: 'Trees',
    labels: ['Meta']
  },
  {
    timeComplexity: 'O(n)',
    spaceComplexity: 'O(h)',
    link: 'https://leetcode.com/problems/minimum-depth-of-binary-tree/',
    linkTitle: 'Minimum Depth of Binary Tree',
    notes: 'Find minimum depth using BFS or DFS with early termination.',
    difficulty: 1,
    category: 'Trees',
    labels: ['Meta']
  },
  {
    timeComplexity: 'O(n)',
    spaceComplexity: 'O(w)',
    link: 'https://leetcode.com/problems/binary-tree-right-side-view/',
    linkTitle: 'Binary Tree Right Side View',
    notes: 'Get rightmost node at each level using BFS.',
    difficulty: 2,
    category: 'Trees',
    labels: ['Meta']
  },
  {
    timeComplexity: 'O(n)',
    spaceComplexity: 'O(h)',
    link: 'https://leetcode.com/problems/sum-root-to-leaf-numbers/',
    linkTitle: 'Sum Root to Leaf Numbers',
    notes: 'Calculate sum of all root-to-leaf paths using DFS.',
    difficulty: 2,
    category: 'Trees',
    labels: ['Meta']
  },
  {
    timeComplexity: 'O(n)',
    spaceComplexity: 'O(h)',
    link: 'https://leetcode.com/problems/diameter-of-binary-tree/',
    linkTitle: 'Diameter of Binary Tree',
    notes: 'Find longest path between any two nodes using DFS with height calculation.',
    difficulty: 2,
    category: 'Trees',
    labels: ['Meta']
  },
  {
    timeComplexity: 'O(n)',
    spaceComplexity: 'O(w)',
    link: 'https://leetcode.com/problems/binary-tree-vertical-order-traversal/',
    linkTitle: 'Binary Tree Vertical Order Traversal',
    notes: 'Traverse tree vertically using BFS with column tracking.',
    difficulty: 2,
    category: 'Trees',
    labels: ['Meta']
  },
  {
    timeComplexity: 'O(n)',
    spaceComplexity: 'O(w)',
    link: 'https://leetcode.com/problems/count-nodes-equal-to-average-of-subtree/',
    linkTitle: 'Count Nodes Equal to Average of Subtree',
    notes: 'Count nodes where value equals average of subtree using postorder traversal.',
    difficulty: 2,
    category: 'Trees',
    labels: ['Meta']
  },
  {
    timeComplexity: 'O(h)',
    spaceComplexity: 'O(1)',
    link: 'https://leetcode.com/problems/closest-binary-search-tree-value/',
    linkTitle: 'Closest Binary Search Tree Value',
    notes: 'Find closest value in BST using binary search traversal.',
    difficulty: 2,
    category: 'Trees',
    labels: ['Meta']
  },
  {
    timeComplexity: 'O(n)',
    spaceComplexity: 'O(h)',
    link: 'https://leetcode.com/problems/convert-binary-search-tree-to-sorted-doubly-linked-list/',
    linkTitle: 'Convert Binary Search Tree to Sorted Doubly Linked List',
    notes: 'Convert BST to sorted doubly linked list using inorder traversal.',
    difficulty: 2,
    category: 'Trees',
    labels: ['Meta']
  },
  {
    timeComplexity: 'O(n)',
    spaceComplexity: 'O(w)',
    link: 'https://leetcode.com/problems/maximum-width-of-binary-tree/',
    linkTitle: 'Maximum Width of Binary Tree',
    notes: 'Find maximum width of tree using BFS with position indexing.',
    difficulty: 2,
    category: 'Trees',
    labels: ['Meta']
  },
  {
    timeComplexity: 'O(n)',
    spaceComplexity: 'O(w)',
    link: 'https://leetcode.com/problems/populating-next-right-pointers-in-each-node/',
    linkTitle: 'Populating Next Right Pointers in Each Node',
    notes: 'Connect each node to its next right node using level-by-level traversal.',
    difficulty: 2,
    category: 'Trees',
    labels: ['Meta']
  },
  {
    timeComplexity: 'O(n)',
    spaceComplexity: 'O(n)',
    link: 'https://leetcode.com/problems/all-nodes-distance-k-in-binary-tree/',
    linkTitle: 'All Nodes Distance K in Binary Tree',
    notes: 'Find all nodes at distance k from target using BFS with parent tracking.',
    difficulty: 2,
    category: 'Trees',
    labels: ['Meta']
  },
  {
    timeComplexity: 'O(n)',
    spaceComplexity: 'O(w)',
    link: 'https://leetcode.com/problems/check-completeness-of-a-binary-tree/',
    linkTitle: 'Check Completeness of Binary Tree',
    notes: 'Check if binary tree is complete using BFS with null detection.',
    difficulty: 2,
    category: 'Trees',
    labels: ['Meta']
  },
  {
    timeComplexity: 'O(n log n)',
    spaceComplexity: 'O(n)',
    link: 'https://leetcode.com/problems/vertical-order-traversal-of-a-binary-tree/',
    linkTitle: 'Vertical Order Traversal of Binary Tree',
    notes: 'Traverse tree vertically with sorting at each position.',
    difficulty: 3,
    category: 'Trees',
    labels: ['Meta']
  },
  {
    timeComplexity: 'O(n²)',
    spaceComplexity: 'O(n)',
    link: 'https://leetcode.com/problems/shortest-distance-from-all-buildings/',
    linkTitle: 'Shortest Distance from All Buildings',
    notes: 'Find shortest distance from all buildings using BFS from each building.',
    difficulty: 3,
    category: 'Trees',
    labels: ['Meta']
  },
  {
    timeComplexity: 'O(n)',
    spaceComplexity: 'O(n)',
    link: 'https://leetcode.com/problems/collect-coins-in-a-tree/',
    linkTitle: 'Collect Coins in a Tree',
    notes: 'Collect coins from tree nodes using greedy approach with pruning.',
    difficulty: 3,
    category: 'Trees',
    labels: ['Meta']
  },
  // Meta Problems - Recursion & Backtracking
  {
    timeComplexity: 'O(n!)',
    spaceComplexity: 'O(n)',
    link: 'https://leetcode.com/problems/subsets/',
    linkTitle: 'Subsets',
    notes: 'Generate all subsets using backtracking with inclusion/exclusion.',
    difficulty: 2,
    category: 'Recursion & Backtracking',
    labels: ['Meta']
  },
  {
    timeComplexity: 'O(n)',
    spaceComplexity: 'O(n)',
    link: 'https://leetcode.com/problems/decode-ways/',
    linkTitle: 'Decode Ways',
    notes: 'Count ways to decode string using dynamic programming.',
    difficulty: 2,
    category: 'Recursion & Backtracking',
    labels: ['Meta']
  },
  {
    timeComplexity: 'O(n²)',
    spaceComplexity: 'O(n)',
    link: 'https://leetcode.com/problems/unique-binary-search-trees/',
    linkTitle: 'Unique Binary Search Trees',
    notes: 'Count unique BSTs using Catalan numbers and dynamic programming.',
    difficulty: 2,
    category: 'Recursion & Backtracking',
    labels: ['Meta']
  },
  // Meta Problems - Stack & Monotonic Stack
  {
    timeComplexity: 'O(n)',
    spaceComplexity: 'O(n)',
    link: 'https://leetcode.com/problems/simplify-path/',
    linkTitle: 'Simplify Path',
    notes: 'Simplify Unix path using stack to handle directory operations.',
    difficulty: 2,
    category: 'Stack & Monotonic Stack',
    labels: ['Meta']
  },
  {
    timeComplexity: 'O(n)',
    spaceComplexity: 'O(n)',
    link: 'https://leetcode.com/problems/basic-calculator-ii/',
    linkTitle: 'Basic Calculator II',
    notes: 'Evaluate expression with +, -, *, / using stack and precedence handling.',
    difficulty: 2,
    category: 'Stack & Monotonic Stack',
    labels: ['Meta']
  },
  {
    timeComplexity: 'O(n)',
    spaceComplexity: 'O(n)',
    link: 'https://leetcode.com/problems/sliding-window-median/',
    linkTitle: 'Sliding Window Median',
    notes: 'Find median in sliding window using two heaps.',
    difficulty: 3,
    category: 'Stack & Monotonic Stack',
    labels: ['Meta']
  },
  {
    timeComplexity: 'O(n)',
    spaceComplexity: 'O(n)',
    link: 'https://leetcode.com/problems/minimum-remove-to-make-valid-parentheses/',
    linkTitle: 'Minimum Remove to Make Valid Parentheses',
    notes: 'Remove minimum parentheses to make string valid using stack.',
    difficulty: 3,
    category: 'Stack & Monotonic Stack',
    labels: ['Meta']
  },
  {
    timeComplexity: 'O(n)',
    spaceComplexity: 'O(n)',
    link: 'https://leetcode.com/problems/largest-rectangle-in-histogram/',
    linkTitle: 'Largest Rectangle in Histogram',
    notes: 'Find largest rectangle in histogram using monotonic stack.',
    difficulty: 3,
    category: 'Stack & Monotonic Stack',
    labels: ['Meta']
  },
  {
    timeComplexity: 'O(V + E)',
    spaceComplexity: 'O(V)',
    link: 'https://leetcode.com/problems/course-schedule/',
    linkTitle: 'Course Schedule',
    notes: 'Check if graph is acyclic using topological sort.',
    difficulty: 2,
    category: 'Graphs',
    labels: ['Meta']
  },
  {
    timeComplexity: 'O(mn)',
    spaceComplexity: 'O(mn)',
    link: 'https://leetcode.com/problems/the-maze/',
    linkTitle: 'The Maze',
    notes: 'Find path in maze using BFS or DFS with wall detection.',
    difficulty: 2,
    category: 'Graphs',
    labels: ['Meta']
  },
  {
    timeComplexity: 'O(mn)',
    spaceComplexity: 'O(mn)',
    link: 'https://leetcode.com/problems/rotting-oranges/',
    linkTitle: 'Rotting Oranges',
    notes: 'Simulate rotting process using BFS with time tracking.',
    difficulty: 2,
    category: 'Graphs',
    labels: ['Meta']
  },
  {
    timeComplexity: 'O(1)',
    spaceComplexity: 'O(1)',
    link: 'https://leetcode.com/problems/design-tic-tac-toe/',
    linkTitle: 'Design Tic-Tac-Toe',
    notes: 'Design Tic-Tac-Toe game with win detection.',
    difficulty: 2,
    category: 'Graphs',
    labels: ['Meta']
  },
  {
    timeComplexity: 'O(mn)',
    spaceComplexity: 'O(mn)',
    link: 'https://leetcode.com/problems/robot-room-cleaner/',
    linkTitle: 'Robot Room Cleaner',
    notes: 'Clean room using DFS with backtracking and direction tracking.',
    difficulty: 2,
    category: 'Graphs',
    labels: ['Meta']
  },
  {
    timeComplexity: 'O(mn)',
    spaceComplexity: 'O(mn)',
    link: 'https://leetcode.com/problems/walls-and-gates/',
    linkTitle: 'Walls and Gates',
    notes: 'Find shortest distance to gates using BFS from each gate.',
    difficulty: 3,
    category: 'Graphs',
    labels: ['Meta']
  },
  {
    timeComplexity: 'O(mn)',
    spaceComplexity: 'O(mn)',
    link: 'https://leetcode.com/problems/shortest-bridge/',
    linkTitle: 'Shortest Bridge',
    notes: 'Find shortest bridge between islands using BFS and DFS.',
    difficulty: 3,
    category: 'Graphs',
    labels: ['Meta']
  },
  // Meta Problems - Design & Data Structures
  {
    timeComplexity: 'O(1)',
    spaceComplexity: 'O(1)',
    link: 'https://leetcode.com/problems/moving-average-from-data-stream/',
    linkTitle: 'Moving Average from Data Stream',
    notes: 'Calculate moving average using circular buffer or queue.',
    difficulty: 2,
    category: 'Design & Data Structures',
    labels: ['Meta']
  },
  {
    timeComplexity: 'O(1)',
    spaceComplexity: 'O(capacity)',
    link: 'https://leetcode.com/problems/lru-cache/',
    linkTitle: 'LRU Cache',
    notes: 'Implement LRU cache using hash map and doubly linked list.',
    difficulty: 2,
    category: 'Design & Data Structures',
    labels: ['Meta']
  },
  {
    timeComplexity: 'O(log n)',
    spaceComplexity: 'O(n)',
    link: 'https://leetcode.com/problems/random-pick-with-weight/',
    linkTitle: 'Random Pick with Weight',
    notes: 'Pick random element with weighted probability using prefix sum.',
    difficulty: 2,
    category: 'Design & Data Structures',
    labels: ['Meta']
  },
  {
    timeComplexity: 'O(1)',
    spaceComplexity: 'O(n)',
    link: 'https://leetcode.com/problems/random-pick-index/',
    linkTitle: 'Random Pick Index',
    notes: 'Pick random index of target value using reservoir sampling.',
    difficulty: 2,
    category: 'Design & Data Structures',
    labels: ['Meta']
  },
  {
    timeComplexity: 'O(1)',
    spaceComplexity: 'O(h)',
    link: 'https://leetcode.com/problems/binary-search-tree-iterator/',
    linkTitle: 'Binary Search Tree Iterator',
    notes: 'Implement iterator for BST using stack-based inorder traversal.',
    difficulty: 2,
    category: 'Design & Data Structures',
    labels: ['Meta']
  },
  {
    timeComplexity: 'O(1)',
    spaceComplexity: 'O(1)',
    link: 'https://leetcode.com/problems/exclusive-time-of-functions/',
    linkTitle: 'Exclusive Time of Functions',
    notes: 'Calculate exclusive execution time using stack.',
    difficulty: 2,
    category: 'Design & Data Structures',
    labels: ['Meta']
  },
  {
    timeComplexity: 'O(log n)',
    spaceComplexity: 'O(n)',
    link: 'https://leetcode.com/problems/find-median-from-data-stream/',
    linkTitle: 'Find Median from Data Stream',
    notes: 'Find median using two heaps (max heap + min heap).',
    difficulty: 3,
    category: 'Design & Data Structures',
    labels: ['Meta']
  },
  // Meta Problems - Greedy / Intervals / Scheduling
  {
    timeComplexity: 'O(n log n)',
    spaceComplexity: 'O(n)',
    link: 'https://leetcode.com/problems/maximum-number-of-events-that-can-be-attended/',
    linkTitle: 'Maximum Number of Events That Can Be Attended',
    notes: 'Attend maximum events using greedy approach with sorting.',
    difficulty: 2,
    category: 'Greedy / Intervals / Scheduling',
    labels: ['Meta']
  },
  {
    timeComplexity: 'O(n log n)',
    spaceComplexity: 'O(n)',
    link: 'https://leetcode.com/problems/car-pooling/',
    linkTitle: 'Car Pooling',
    notes: 'Check if car can accommodate all passengers using sweep line algorithm.',
    difficulty: 2,
    category: 'Greedy / Intervals / Scheduling',
    labels: ['Meta']
  },
  {
    timeComplexity: 'O(n)',
    spaceComplexity: 'O(1)',
    link: 'https://leetcode.com/problems/best-time-to-buy-and-sell-stock-iii/',
    linkTitle: 'Best Time to Buy and Sell Stock III',
    notes: 'Find maximum profit with at most two transactions using dynamic programming.',
    difficulty: 2,
    category: 'Greedy / Intervals / Scheduling',
    labels: ['Meta']
  },
  {
    timeComplexity: 'O(n)',
    spaceComplexity: 'O(1)',
    link: 'https://leetcode.com/problems/next-permutation/',
    linkTitle: 'Next Permutation',
    notes: 'Find next lexicographically greater permutation in-place.',
    difficulty: 2,
    category: 'Greedy / Intervals / Scheduling',
    labels: ['Meta']
  },
  // Meta Problems - Miscellaneous / Database
  {
    timeComplexity: 'O(n)',
    spaceComplexity: 'O(n)',
    link: 'https://leetcode.com/problems/group-shifted-strings/',
    linkTitle: 'Group Shifted Strings',
    notes: 'Group strings that can be shifted to each other using hash map.',
    difficulty: 2,
    category: 'Miscellaneous / Database',
    labels: ['Meta']
  },
  {
    timeComplexity: 'O(n)',
    spaceComplexity: 'O(n)',
    link: 'https://leetcode.com/problems/repeated-dna-sequences/',
    linkTitle: 'Repeated DNA Sequences',
    notes: 'Find repeated DNA sequences using hash map with sliding window.',
    difficulty: 2,
    category: 'Miscellaneous / Database',
    labels: ['Meta']
  },
  {
    timeComplexity: 'O(n)',
    spaceComplexity: 'O(1)',
    link: 'https://leetcode.com/problems/find-the-k-th-character-in-string-game-i/',
    linkTitle: 'Find the K-th Character in String Game I',
    notes: 'Find k-th character after applying transformation rules.',
    difficulty: 3,
    category: 'Miscellaneous / Database',
    labels: ['Meta']
  }
];
export default problems; 