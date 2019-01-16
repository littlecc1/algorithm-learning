# 算法学习总结

## 1 递推与归纳

递归（recursive）定义是一种直接或间接引用自身的定义方法。
一个合法的递归定义包括两部分：基础情况（base case）和递归部分。

#### 例1-1  斐波那契数列

![斐波那契额递推公式](https://github.com/littlecc1/algorithm-learning/blob/master/assets/fib_recursive.png)

[核心算法传送门](https://github.com/littlecc1/algorithm-learning/blob/master/src/fib.js)

![解空间树](https://github.com/littlecc1/algorithm-learning/blob/master/assets/fib_tree.png)

n为4的问题解空间树

#### 例1-2  汉诺塔问题（tower of Hanoi）

假定有三个塔座：X，Y，Z，在塔座X上有n个直径大小各不相同，按圆盘大小从小到大编号为1，2，…，n的圆盘。现要求将X塔座上n个圆盘移到塔座Y上，并仍按同样顺序叠排。
圆盘移动时必须遵循下列规则：
（1）每次只能移动一个圆盘；
（2）圆盘可以加到塔座X，Y，Z中任意一个上；
（3）任何时刻都不能将一个较大的圆盘放在较小的圆盘之上。

![汉诺塔](https://github.com/littlecc1/algorithm-learning/blob/master/assets/hanoi.png)

[核心算法传送门](https://github.com/littlecc1/algorithm-learning/blob/master/src/hanoiAlgorithm.js)

[实现代码传送门](https://github.com/littlecc1/algorithm-learning/blob/master/src/hanoi.js)

## 2 归纳证明

 证明：（归纳法证明）

[证明程序传送门](https://github.com/littlecc1/algorithm-learning/blob/master/src/toBeProve.js)

 当n是1位数时，程序显然是正确的。

 假定函数PrintDigit对所有位数小于k（k＞1）的正整数都能正确运行，当n的位数为k位时，此时有n≥10，算法必定先执行语句cout<<n%10;然后执行语句if(n>=10) PrintDigit(n/10);
 由于n/10是n的前k-1位数字形成的数，归纳法假设函数调用PrintDigit(n/10)能够将它正确地（并在有限步内）按数字的逆序输出，那么，现在先执行语句输出个位数字（n%10），然后
 由于按逆序输出前k-1位数字的做法是能够正确按逆序输出全部k位数字的，所以程序是正确的。

 ## 2 分治法

 分治法：将一个复杂的问题分解成若干个规模较小、相互独立，但类型相同的子问题求解；然后再将各子问题的解组合成原始问题的一个完整答案，这样的问题求解策略就叫分治法

 例如：快速排序算法，归并排序算法，二分搜索算法，还有汉诺塔问题等都是用分治法求解的。

 例2-1 求最大最小元

 在一个元素集合中寻找最大元素和最小元素的问题，即在互不相同的n个数{x1, x2, …, xn}中，找出最大和最小的数。

 [核心算法传送门](https://github.com/littlecc1/algorithm-learning/blob/master/src/maxOrMin.js)





