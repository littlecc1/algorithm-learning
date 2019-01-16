template <class T>
void SortableList<T>::MaxMin(int i, int j,
T& max, T& min) const
  {   T min1, max1;
if (i==j) max=min=l[i];
else if (i==j-1)
  if (l[i]<l[j])
  {   max=l[j]; min=l[i];
  }
  else
  {   max=l[i]; min=l[j];
  }
else
{ 	int m=(i+j)/2;
  MaxMin(i, m, max, min);
  MaxMin(m+1, j, max1, min1);
  if (max<max1) max=max1;
  if (min>min1) min=min1;
}
}
