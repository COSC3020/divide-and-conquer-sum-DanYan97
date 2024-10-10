# Divide and Conquer Sum

In the lectures, we've covered merge sort, which uses a divide-and-conquer
approach to sort an array of values. There are many more algorithms that take
such an approach. Implement a function that computes the sum of an array of
integers using divide and conquer, using the template in `code.js`. Test your
new function; I've provided some basic testing code that uses
[jsverify](https://jsverify.github.io/) in `code.test.js`.

The recursive calls sum up the numbers in the base case, and "merges" the sums
of the recursive calls otherwise. For example, the return value for the array `a
= [1,5,-1,4]` is `9`.

To make it a bit more interesting, instead of splitting into two sub-arrays like
in merge sort, I want you to split into *three* sub-arrays at each divide step.

Hint: Like in the implementation of merge sort, you may need a helper function
that does the actual recursion.

## Runtime Analysis

What is the runtime of the algorithm that you implemented? Provide a recurrence
relation for $T(n)$ as we did for merge sort (you can ignore constant factors)
and solve it as we did in the lectures. Give the final $\Theta$ complexity.

Describe your reasoning and the conclusion you've come to. Your reasoning is the
most important part. Add your answer to this markdown file.

The relation can be represent as $T(n)=3T(\frac{n}{3})+C$, whereas the C represents a constent, which is the summation of the three parts(O(1)), and the $3T(\frac{n}{3})$ represents the array which devided into 3 parts, and each part have n/3 elements, then sum each part recursivly.

Using the substitution method to solve this relation:
1. Substituing into the original equation: $T(n)=3[3T(\frac{n}{9})+C]+C=9T(\frac{n}{9})+4C$
2. Do substitution again: $T(n)=9T(\frac{n}{9})+4C=3[9T(\frac{n}{27})+4C]+C=27T(\frac{n}{27})+13C$
3. Find the pattern: $T(n)=3^iT(\frac{n}{3^i})+ \sum_{k=0}^{i-1} 3^k C$
4. To make $\frac{n}{3^i}=1$, $i=log_3n$, So that $T(n)=3^{\log_3n}T(1)+ \sum_{k=0}^{i-1} 3^k C$
5. Simplifing and ignoring the constant: $T(n)=3^{\log_3n}T(1)+ \sum_{k=0}^{i-1} 3^k C=n$

Therefore, $T(n)=n\in\Theta(n)$

“I certify that I have listed all sources used to complete this exercise, including the use of any Large Language Models. All of the work is my own, except where stated otherwise. I am aware that plagiarism carries severe penalties and that if plagiarism is suspected, charges may be filed against me without prior notice.” --Doris Yan
