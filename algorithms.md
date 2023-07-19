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
