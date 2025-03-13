const problems = [
  {
    complexity: 'O(n)',
    link: 'https://leetcode.com/problems/valid-parentheses/',
    linkTitle: 'Valid Parentheses',
    notes: 'Use a stack to store the characters & store the mirror image in a Map. Peek the stack while and compare with the mirror image mapping in the map.',
    difficulty: 2,
    category: 'Stack'
  },
  {
    complexity: 'O(log(n))',
    link: 'https://leetcode.com/problems/find-minimum-in-rotated-sorted-array',
    linkTitle: 'Find Minimum in Rotated Sorted Array',
    notes: 'Regular binary search, moving the l & r pointers based on the minimum value found in the middle.',
    difficulty: 3,
    category: 'Binary Search'
  },
  {
    complexity: 'O(n)',
    link: 'https://leetcode.com/problems/two-sum/',
    linkTitle: 'Two Sum',
    notes: 'Use a hash map to store the value and index of the elements. Check if the complement of the current element exists in the map.',
    difficulty: 1,
    category: 'Array'
  },
  {
    complexity: 'O(n)',
    link: 'https://leetcode.com/problems/best-time-to-buy-and-sell-stock/',
    linkTitle: 'Best Time to Buy & Sell Stock',
    notes: 'Use two pointers to find the maximum profit. The left pointer is the minimum price and the right pointer is the maximum price.',
    difficulty: 1,
    category: 'Array'
  }
];

export default problems; 