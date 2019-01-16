enum tower { A='X', B='Y', C='Z'};
void Move(int n,tower x,tower y)
{ //将第n个圆盘从塔座x移到塔座y的顶部
  cout << "The disk "<<n<<" is moved from "
  << char(x) << " to top of tower " << char(y)
  << endl;
}
void  Hanoi(int n, tower x, tower y, tower z)
{//将x上部的n个圆盘移到y上，顺序不变。
  if (n) {
    Hanoi(n-1, x, z, y);
    Move(n,x,y);
    Hanoi(n-1, z, y, x);
  }
}
