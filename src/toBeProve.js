/*逆序输出正整数的各位数*/
void PrintDigit(unsigned int n)
{
  cout<<n%10;	//输出最后一位数dk
  if(n>=10) PrintDigit(n/10);						         //以逆序输出前k-1位数
}