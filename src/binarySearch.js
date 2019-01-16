template<class T>
int SortableList<T>:BSearch(const T& x)const
  {
    int m,left=0,right=n-1;
while (left<=right){
  m = (left+right)/2;		//对半分割
  if (x<l[m]) right=m-1;		//搜索左半子表
  else if (x>l[m]) left=m+1;	//搜索右半子表
  else return m;		//搜索成功
}
return -1;				//搜索失败
}
