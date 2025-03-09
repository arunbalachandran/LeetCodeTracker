const problems = [
  {
    complexity: 'O(n)',
    link: 'https://leetcode.com/problems/valid-parentheses/',
    linkTitle: 'Valid Parentheses',
    notes: 'Use a stack to store the characters & store the mirror image in a Map. Peek the stack while and compare with the mirror image mapping in the map.'
  },
  {
    complexity: 'O(log(n))',
    link: 'https://leetcode.com/problems/find-minimum-in-rotated-sorted-array',
    linkTitle: 'Find Minimum in Rotated Sorted Array',
    notes: 'Regular binary search, moving the l & r pointers based on the minimum value found in the middle.'
  }
];

export default problems; 