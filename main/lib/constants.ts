import img1 from "@/assets/images/module11.jpg";
import img2 from "@/assets/images/module31.jpg";
import img3 from "@/assets/images/comp2.png";
import img4 from "@/assets/images/module41.jpg";
import img5 from "@/assets/images/cyb1.png";
import img6 from "@/assets/images/cyb2.png";
import img7 from "@/assets/images/comp1.png";
import img21 from "@/assets/images/11673.jpg";
import review1 from "@/assets/images/review1.jpg";
import review2 from "@/assets/images/review2.jpg";
import review3 from "@/assets/images/review3.jpg";
import review4 from "@/assets/images/review4.jpg";
import review5 from "@/assets/images/review5.jpg";
import boy1 from "@/assets/images/boy1.jpg";
import boy2 from "@/assets/images/boy2.jpg";
import girl1 from "@/assets/images/girl1.jpg";
import girl2 from "@/assets/images/girl2.jpg";

export const modules = [
  {
    title: "Greedy Algorithms",
    category: "Algorithmic Paradigms",
    description:
      "Techniques that make locally optimal choices at each step to achieve a global optimum, often used in optimization problems like scheduling or Huffman coding.",
    img: img1,
    hours: 2,
    lectures: 4,
  },
  {
    title: "Searching Algorithms",
    category: "Search Algorithms",
    description:
      "Methods for finding specific elements or values in data structures, such as linear search, binary search, or more advanced variants like interpolation search.",
    img: img2,
    hours: 2.5,
    lectures: 4,
  },
  {
    title: "Trees Data Structure",
    category: "Tree Data Structure",
    description:
      "A hierarchical data structure consisting of nodes with parent-child relationships, forming an acyclic connected graph, commonly used in file systems or binary search trees.",
    img: img3,
    hours: 4,
    lectures: 5,
  },
  {
    title: "Graphs Data Structure",
    category: "Graph-Related Topics",
    description:
      "A collection of nodes (vertices) connected by edges, used to model relationships in networks, social connections, or maps.",
    img: img4,
    hours: 1.5,
    lectures: 3,
  },
  {
    title: "Sparse Tables Data Structure",
    category: "Advanced Techniques",
    description:
      "A preprocessing technique for efficient range queries (e.g., minimum or maximum in an array segment) in static arrays, achieving O(1) query time after O(n log n) buildup.",
    img: img5,
    hours: 3,
    lectures: 4,
  },
  {
    title: "Bor's Algorithm",
    category: "Graph-Related Topics",
    description:
      "Likely referring to Borůvka's algorithm, a method for finding the minimum spanning tree in a graph by iteratively merging components with the cheapest edges.",
    img: img7,
    hours: 3,
    lectures: 2,
  },
  {
    title: "Dynamic Programming",
    category: "Algorithmic Paradigms",
    description:
      "An optimization approach that solves complex problems by breaking them into overlapping subproblems and storing results to avoid recomputation, like in knapsack or Fibonacci sequences.",
    img: img6,
    hours: 2,
    lectures: 4,
  },
  {
    title: "Mo's Algorithm",
    category: "Advanced Techniques",
    description:
      "An offline query processing technique for handling range queries on arrays by sorting them in blocks to minimize pointer movements, efficient for problems like frequency counts in subarrays.",
    img: img21,
    hours: 2,
    lectures: 2,
  },
];

export const reviews = [
  {
    name: "Priya Sharma",
    occupation: "Data Scientist",
    review:
      "I was really struggling with understanding complex algorithms until I discovered this platform. The clear, step-by-step explanations combined with hands-on practice sessions made even the most challenging concepts incredibly easy to grasp and apply in real-world scenarios.",
    rating: 5,
    img: review2,
  },
  {
    name: "Rajesh Patel",
    occupation: "Software Engineer",
    review:
      "This platform completely transformed my competitive programming skills from average to exceptional. The well-structured curriculum, along with exposure to real contest problems and detailed solutions, played a crucial role in helping me secure my dream job at a top-tier tech company.",
    rating: 5,
    img: review1,
  },
  {
    name: "Michael Chen",
    occupation: "Student",
    review:
      "The community on this platform is truly amazing and supportive, and participating in the timed contests has really prepared me for actual competitions. Thanks to consistent practice, I've seen a significant improvement in my rating and problem-solving speed in just three months.",
    rating: 4,
    img: review3,
  },
  {
    name: "Sophia Rodriguez",
    occupation: "Backend Developer",
    review:
      "This has been the best investment I've ever made for advancing my career. The personalized mentorship, advanced problem-solving strategies, and mock interview sessions I experienced here directly contributed to me acing multiple technical interviews at leading companies.",
    rating: 5,
    img: review4,
  },
  {
    name: "Arjun Kapoor",
    occupation: "Computer Science Student",
    review:
      "This is a great platform for building a strong foundation in Data Structures and Algorithms. The interactive lessons, coupled with instant feedback loops and progress tracking, have made the entire learning process both highly effective and genuinely enjoyable for me.",
    rating: 4,
    img: review5,
  },
  {
    name: "Arjun Kapoor",
    occupation: "Computer Science Student",
    review:
      "This is a great platform for building a strong foundation in Data Structures and Algorithms. The interactive lessons, coupled with instant feedback loops and progress tracking, have made the entire learning process both highly effective and genuinely enjoyable for me.",
    rating: 4,
    img: review5,
  },
];

export const faqs = [
  {
    question: "What exactly is Competitive Programming?",
    answer:
      "Think of it as a sport where the equipment is your brain and a keyboard. You are given a set of algorithmic problems (puzzles) and must write computer programs to solve them. Your solution is judged automatically based on two things: accuracy (does it produce the right answer?) and efficiency (does it run fast enough?).",
  },
  {
    question: "Do I need to be a math genius to start?",
    answer:
      "Not at all! To get started, you only need basic high-school math like algebra and simple logic. As you advance to harder problems, you will naturally pick up concepts from number theory or combinatorics, but you don't need to know them all before you begin.",
  },
  {
    question: "Which programming language should I use?",
    answer:
      "The 'Big Three' are C++, Java, and Python. C++ is the most popular choice among top competitors because it is extremely fast and gives you control over memory. Java is also great and widely used. Python is beginner-friendly and easy to write, but it can sometimes be too slow for very advanced problems with strict time limits.",
  },
  {
    question:
      "I submitted my code, but I got a 'TLE' error. What does that mean?",
    answer:
      "TLE stands for 'Time Limit Exceeded'. It means your logic is correct, but your code is too slow! In competitive programming, every problem has a time limit (usually 1-2 seconds). If your program takes longer than that to run, you get a TLE. This is where you need to improve your algorithm's 'time complexity' (make it more efficient).",
  },
  {
    question:
      "What is the difference between 'Wrong Answer' (WA) and 'Runtime Error' (RTE)?",
    answer:
      "WA (Wrong Answer) means your program ran successfully but printed the incorrect output for one of the test cases. RTE (Runtime Error) means your program crashed while running—this usually happens if you try to divide by zero or access an array index that doesn't exist.",
  },
  // {
  //   question: "How is this different from building apps or websites?",
  //   answer:
  //     "Building apps (Development) focuses on creating software for users, dealing with databases, and making things look good. Competitive Programming focuses purely on 'Algorithmic Intelligence'—solving hard logic problems with minimal code. It trains the muscle in your brain that figures out *how* to solve a problem efficiently.",
  // },
  // {
  //   question: "What should I do if I get stuck on a problem?",
  //   answer:
  //     "Getting stuck is part of the learning process! Try to think about the problem for 20-30 minutes. If you still have no clue, look at the problem's 'Editorial' (the official solution explanation) or ask in the community forum. The key is to 'upsolve'—which means solving a problem *after* a contest is over, using what you learned.",
  // },
  // {
  //   question: "Will this help me get a job or get into college?",
  //   answer:
  //     "Absolutely. Major tech companies (like Google, Facebook, and Amazon) use problems very similar to competitive programming during their job interviews. Colleges also value the critical thinking and problem-solving skills you develop. It shows you have strong fundamentals in Computer Science.",
  // },
];

export const actionPeople = [
  boy1,
  girl1,
  review2,
  review1,
  boy2,
  review3,
  girl2,
  review4,
  review5,
  boy1,
];

export const courseSections = [
  {
    title: "Section 1 — Introduction to DSA & C++",
    chapters: [
      { title: "Course overview and setup (C++ toolchain)", readTime: "6 min", done: true },
      { title: "Basic C++ syntax refresher", readTime: "8 min", done: true },
      { title: "Variables, types and I/O in C++", readTime: "7 min", done: true },
      { title: "Control flow: loops and conditionals", readTime: "6 min", done: false },
      { title: "Basic problem-solving patterns", readTime: "10 min", done: false },
    ],
    questions: [
      { text: "What are the essential tools to set up a C++ competitive environment?", done: false },
      { text: "How do you read input and write output efficiently in C++?", done: false },
    ],
  },
  {
    title: "Section 2 — Arrays & Strings",
    chapters: [
      { title: "Static and dynamic arrays", readTime: "8 min", done: true },
      { title: "Two-pointer technique", readTime: "7 min", done: true },
      { title: "Common string operations", readTime: "9 min", done: false },
      { title: "Sliding window patterns", readTime: "8 min", done: false },
      {
        title: "Practice problems: subarrays and substrings",
        readTime: "12 min",
        done: false,
      },
      { title: "Memory layout and performance tips", readTime: "6 min", done: false },
    ],
    questions: [
      { text: "When is the two-pointer technique useful?", done: false },
      { text: "How do sliding windows reduce complexity for subarray problems?", done: false },
    ],
  },
  {
    title: "Section 3 — Linked Lists",
    chapters: [
      { title: "Singly and doubly linked lists", readTime: "7 min", done: false },
      { title: "Pointer manipulation and pitfalls", readTime: "9 min", done: false },
      {
        title: "Common operations: reverse, merge, detect cycle",
        readTime: "10 min",
        done: false,
      },
      { title: "Memory management in C++ (new/delete)", readTime: "8 min", done: false },
      { title: "Practice problems and edge cases", readTime: "11 min", done: false },
    ],
    questions: [
      { text: "How do you detect a cycle in a linked list?", done: false },
      { text: "Why are pointers trickier in linked list manipulations?", done: false },
    ],
  },
  {
    title: "Section 4 — Stacks, Queues & Deques",
    chapters: [
      {
        title: "Stack ADT and application (DFS, parentheses)",
        readTime: "7 min",
        done: false,
      },
      { title: "Queue ADT and BFS fundamentals", readTime: "7 min", done: false },
      { title: "Double-ended queues and sliding window", readTime: "8 min", done: false },
      { title: "Implementations using STL containers", readTime: "6 min", done: false },
      {
        title: "Practice problems: monotonic stacks/queues",
        readTime: "10 min",
        done: false,
      },
    ],
    questions: [
      { text: "When is a deque preferred over a queue?", done: false },
      { text: "Give an example use-case for monotonic stack.", done: false },
    ],
  },
  {
    title: "Section 5 — Trees & Binary Trees",
    chapters: [
      { title: "Tree terminology and representations", readTime: "8 min", done: false },
      { title: "Binary trees and traversals (DFS/BFS)", readTime: "9 min", done: false },
      { title: "Binary search trees (BST) basics", readTime: "10 min", done: false },
      { title: "Balanced trees overview (AVL, RB)", readTime: "11 min", done: false },
      {
        title: "Practice: lowest common ancestor & tree DP",
        readTime: "12 min",
        done: false,
      },
    ],
    questions: [
      { text: "What is the difference between a binary tree and a BST?", done: false },
      { text: "How does tree height affect complexity of operations?", done: false },
    ],
  },
  {
    title: "Section 6 — Graphs & Traversals",
    chapters: [
      {
        title: "Graph representations: adjacency list/matrix",
        readTime: "8 min",
        done: false,
      },
      {
        title: "BFS and shortest paths in unweighted graphs",
        readTime: "9 min",
        done: false,
      },
      {
        title: "DFS, backtracking and connected components",
        readTime: "8 min",
        done: false,
      },
      { title: "Dijkstra and shortest paths (weighted)", readTime: "12 min", done: false },
      { title: "Topological sort and DAGs", readTime: "9 min", done: false },
      { title: "Practice problems: cycles and bridges", readTime: "12 min", done: false },
    ],
    questions: [
      { text: "When should you use adjacency list vs matrix?", done: false },
      { text: "What is the purpose of topological sorting?", done: false },
    ],
  },
  {
    title: "Section 7 — Sorting, Searching & Complexity",
    chapters: [
      { title: "Complexity analysis and Big-O notation", readTime: "8 min", done: false },
      { title: "Basic sorts: selection, insertion, bubble", readTime: "7 min", done: false },
      { title: "Efficient sorts: merge sort, quicksort", readTime: "10 min", done: false },
      { title: "Binary search and search patterns", readTime: "8 min", done: false },
      { title: "Lower/upper bound and STL utilities", readTime: "7 min", done: false },
      { title: "Practice: sorting-related problems", readTime: "11 min", done: false },
    ],
    questions: [
      { text: "Why is quicksort average-case fast but worst-case bad?", done: false },
      { text: "How does binary search apply to non-sorted problems?", done: false },
    ],
  },
  {
    title: "Section 8 — Dynamic Programming & Problem Solving",
    chapters: [
      {
        title: "DP fundamentals: memoization vs tabulation",
        readTime: "9 min",
        done: false,
      },
      { title: "0/1 Knapsack and common DP patterns", readTime: "11 min", done: false },
      { title: "DP on sequences: LIS and edit distance", readTime: "12 min", done: false },
      { title: "Greedy vs DP: when to choose which", readTime: "8 min", done: false },
      { title: "Practice contest: timed problem set", readTime: "15 min", done: false },
      {
        title: "Capstone: end-to-end problem solving strategy",
        readTime: "10 min",
        done: false,
      },
    ],
    questions: [
      { text: "How do you decide the state and transition for a DP solution?", done: false },
      { text: "Give an example where greedy fails but DP succeeds.", done: false },
    ],
  },
];
