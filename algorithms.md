画图推导过程,总结特征,规律与条件,推算出算法

quick find:生成数组,通过改变映射的数组来查找unit,find的时间复杂度O(1),union时间复杂度O(n)
public class QuickFindUF
{
 private int[] id;
 public QuickFindUF(int N)
 {
 id = new int[N];
 for (int i = 0; i < N; i++)
 id[i] = i;
 }
 public boolean connected(int p, int q)
 { return id[p] == id[q]; }
 public void union(int p, int q)
 {
 int pid = id[p];
 int qid = id[q];
 for (int i = 0; i < id.length; i++)
 if (id[i] == pid) id[i] = qid;
 }
}

quick union:生成tree,通过改变root实现union,find的时间复杂度O(tree.height),union时间复杂度O(tree.height)
public class QuickUnionUF
{
 private int[] id;
 public QuickUnionUF(int N)
 {
 id = new int[N];
 for (int i = 0; i < N; i++) id[i] = i;
 }
 private int root(int i)
 {
 while (i != id[i]) i = id[i];
 return i;
 }
 public boolean connected(int p, int q)
 {
 return root(p) == root(q);
 }
 public void union(int p, int q)
 {
 int i = root(p);
 int j = root(q);
 id[i] = j;
 }
}

weighted quick union = quick union optimization: create lower tree
1. record the size of root node;
2. if the size of two trees is not equal, union the smaller tree into the bigger tree

why  Depth of any node x is at most lg N.
Because the depth of smaller tree increases by 1 as the tree contains x nodes is merged into the larger tree,and the merged tree at least contains 2x nodes. so when the size is N, the depth is at most lg N.

weighted quick union with path compression=WQUPC:
1. when finding the root of a node, we should always go through the path to the root
2. if the path is longer than 1, we should compress the path

applications:
・Percolation.
・Games (Go, Hex).
. Dynamic connectivity.
・Least common ancestor.
・Equivalence of finite state automata.
・Hoshen-Kopelman algorithm in physics.
・Hinley-Milner polymorphic type inference.
・Kruskal's minimum spanning tree algorithm.
・Compiling equivalence statements in Fortran.
・Morphological attribute openings and closings.
・Matlab's bwlabel() function in image processing

NxN sites the possibility of connectivity is 0.593.

2-3 node tree
父节点有2-3个子节点；当有3个子节点时,节点是一个区间的开头和结尾,比父节点小的在左边,比父节点大的在右边,中间的在中间；所有子节点高度保持一致。
当节点插入值时,如果节点已有两个值,那么就提升中间值到父节点,并将原节点拆成两个节点,此时若父节点也有两个值,那么就继续提升中间值到父节点,直到父节点没有两个值,或者父节点没有父节点为止。

sha-256
1. 获取数据,并转化为二进制
2. 计算需要填充的数据长度,使得数据长度为512的整数倍 例如：数据长度为512,则不需要填充；数据长度为513,则需要填充1个1和512-(513/512)-1=510个0
3. 填充数据,使得数据长度为512的整数倍
4. 定义初始哈希值,一般是根据算法定义的常量
5. 数据分块,每块512位,每块分为16个32位的字
6. 根据初始哈希值,按块迭代计算并更新哈希值,得到和初始哈希值相同长度的哈希值,由8个32位的无符号数字组成,即256位二进制数字。
7. 再将初始哈希值与上一步得到的哈希值按特定规则计算,得到最终的哈希值,即256位二进制。最后表示成64位十六进制数字。每个16进制字符为4个二进制数字。(2的4次方=16,即4位二进制数字可以表示16个字符。)
8. 文件越大，计算时间越长，但sha-256加密能达到几百甚至上千兆字节的速度。也可以对文件分块，分别计算，最后再将结果合并。

md5算法和sha-256算法的区别
1. md5算法生成的结果是128位的，sha-256算法生成的结果是256位的。
2. md5比sha-256快，但是md5已经不安全能被暴力破解了，sha-256还是安全的。

bitMap
1. 用一个bit位来存放某个数据是否出现过,如果出现过,则将对应的bit位置为1,否则为0
2. 因此,如果要表示n个数据,则需要n个bit位,即n/8个字节的空间
3. 优点:空间效率高,每个数据只需要1bit,并且不需要额外的空间存储数据
4. 缺点:不能表示负数,不能排序,只能表示整数,且不适用于[10,99999999]这样的数据,因为浪费的空间太大
5. 使用场景:大数据量的去重,如海量日志中的ip去重,海量商品id去重


排序算法
1. 堆排序
堆排序是一种完全二叉树,分为大顶堆和小顶堆,大顶堆的每个节点的值都大于等于其左右子节点的值,小顶堆的每个节点的值都小于等于其左右子节点的值。
堆排序的基本思想是:将待排序的序列构造成一个基本的大顶堆(即父节点一定比子节点大，左右节点不比较大小),此时,整个序列的最大值就是堆顶的根节点,将它移走到末尾(其实就是将其与堆数组的末尾元素交换,此时末尾元素就是最大值),然后将剩余的n-1个序列重新构造成一个堆,这样就会得到n个元素中的次大值,重复执行直到最大值重新回到顶点,便能得到一个有序序列了(即父节点一定比子节点大，左节点一定比右节点大)。

2. 快速排序
选取一个值作为基准值,将比基准值小的放在左边,比基准值大的放在右边,然后再对左右两边的数据进行同样的处理,直到左右不可分至多有1个元素并排好序,然后再左右2个排好序的数组相连，重复向上相连直至排好序。
优点: 原地排序,不需要额外的存储空间;时间复杂度为O(nlogn),最坏情况下为O(n^2),但是概率很小;缺点:不稳定,因为在交换的时候可能会把相同的值交换了位置。

分治法
分治法的基本思想是将一个规模为n的问题分解为k个规模较小的子问题,这些子问题相互独立且与原问题性质相同,求出子问题的解,就可得到原问题的解。

3. 归并排序
将一个数组分成多个数组,分别对多个数组进行排序,然后再将多个数组合并成一个有序数组.

4. 桶排序
根据值的范围将数据分到不同的桶中,然后对每个桶中的数据进行排序,最后再将每个桶中的数据按顺序依次取出,即可得到有序序列。

5. 希尔排序
希尔排序是插入排序的一种,它是将数据分成多个子序列,然后对每个子序列进行插入排序,最后再对整个序列进行插入排序。
PS:虽然都将数据分成多个子序列，但希尔排序是插入排序的一种,归并排序是多个数组合并到一个临时数组里，类似选择排序。标准的归并是2分,多分的归并又称为多路归并。

6. 选择排序
选择排序是将数据分成已排序区间和未排序区间,每次从未排序区间中找到最小的元素,将其放到已排序区间的末尾。

7. 冒泡排序
8. 插入排序