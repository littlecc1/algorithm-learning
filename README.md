# 算法学习总结

## 1 递推与归纳

递归（recursive）定义是一种直接或间接引用自身的定义方法。
一个合法的递归定义包括两部分：基础情况（base case）和递归部分。

#### 例1-1  斐波那契数列

![斐波那契额递推公式](https://github.com/littlecc1/algorithm-learning/blob/master/assets/fib_recursive.png)

[核心代码传送门](https://github.com/littlecc1/algorithm-learning/blob/master/src/Fib.js)

![解空间树](https://github.com/littlecc1/algorithm-learning/blob/master/assets/fib_tree.png)

n为4的问题解空间树

#### 例1-2  汉诺塔问题（tower of Hanoi）

假定有三个塔座：X，Y，Z，在塔座X上有n个直径大小各不相同，按圆盘大小从小到大编号为1，2，…，n的圆盘。现要求将X塔座上n个圆盘移到塔座Y上，并仍按同样顺序叠排。
圆盘移动时必须遵循下列规则：
（1）每次只能移动一个圆盘；
（2）圆盘可以加到塔座X，Y，Z中任意一个上；
（3）任何时刻都不能将一个较大的圆盘放在较小的圆盘之上。

## 2 归纳证明

 证明：（归纳法证明）
 当n是1位数时，程序显然是正确的。
 假定函数PrintDigit对所有位数小于k（k＞1）的正整数都能正确运行，当n的位数为k位时，此时有n≥10，算法必定先执行语句cout<<n%10;然后执行语句if(n>=10) PrintDigit(n/10);
 由于n/10是n的前k-1位数字形成的数，归纳法假设函数调用PrintDigit(n/10)能够将它正确地（并在有限步内）按数字的逆序输出，那么，现在先执行语句输出个位数字（n%10），然后
 由于按逆序输出前k-1位数字的做法是能够正确按逆序输出全部k位数字的，所以程序1-5是正确的。

