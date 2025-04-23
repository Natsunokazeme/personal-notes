画图推导过程,总结特征,规律与条件,推算出算法

quick find:生成数组,通过改变映射的数组来查找 unit,find 的时间复杂度 O(1),union 时间复杂度 O(n)
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

quick union:生成 tree,通过改变 root 实现 union,find 的时间复杂度 O(tree.height),union 时间复杂度 O(tree.height)
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

why Depth of any node x is at most lg N.
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

# 拓扑排序

拓扑排序是对有向无环图（DAG）进行排序的一种算法。它的基本思想是：从图中选择一个入度为 0 的节点，将其加入到排序结果中，然后将该节点从图中删除，重复执行上述操作，直到所有节点都被删除。拓扑排序的结果是一个线性序列，表示了节点之间的依赖关系。

总结：拓扑排序问题
根据依赖关系，构建邻接表、入度数组。
选取入度为 0 的数据，根据邻接表，减小依赖它的数据的入度。
找出入度变为 0 的数据，重复第 2 步。
直至所有数据的入度为 0，得到排序，如果还有数据的入度不为 0，说明图中存在环。

# 加密算法

sha-256

1. 获取数据,并转化为二进制
2. 计算需要填充的数据长度,使得数据长度为 512 的整数倍 例如：数据长度为 512,则不需要填充；数据长度为 513,则需要填充 1 个 1 和 512-(513/512)-1=510 个 0
3. 填充数据,使得数据长度为 512 的整数倍
4. 定义初始哈希值,一般是根据算法定义的常量
5. 数据分块,每块 512 位,每块分为 16 个 32 位的字
6. 根据初始哈希值,按块迭代计算并更新哈希值,得到和初始哈希值相同长度的哈希值,由 8 个 32 位的无符号数字组成,即 256 位二进制数字。
7. 再将初始哈希值与上一步得到的哈希值按特定规则计算,得到最终的哈希值,即 256 位二进制。最后表示成 64 位十六进制数字。每个 16 进制字符为 4 个二进制数字。(2 的 4 次方=16,即 4 位二进制数字可以表示 16 个字符。)
8. 文件越大，计算时间越长，但 sha-256 加密能达到几百甚至上千兆字节的速度。也可以对文件分块，分别计算，最后再将结果合并。

md5 算法和 sha-256 算法的区别

1. md5 算法生成的结果是 128 位的，sha-256 算法生成的结果是 256 位的。
2. md5 比 sha-256 快，但是 md5 已经不安全能被暴力破解了，sha-256 还是安全的。

# bitMap

1. 用一个 bit 位来存放某个数据是否出现过,如果出现过,则将对应的 bit 位置为 1,否则为 0
2. 因此,如果要表示 n 个数据,则需要 n 个 bit 位,即 n/8 个字节的空间
3. 优点:空间效率高,每个数据只需要 1bit,并且不需要额外的空间存储数据
4. 缺点:不能表示负数,不能排序,只能表示整数,且不适用于[10,99999999]这样的数据,因为浪费的空间太大
5. 使用场景:大数据量的去重,如海量日志中的 ip 去重,海量商品 id 去重

# 排序算法

1. 堆排序
   堆排序是一种完全二叉树,分为大顶堆和小顶堆,大顶堆的每个节点的值都大于等于其左右子节点的值,小顶堆的每个节点的值都小于等于其左右子节点的值。
   堆排序的基本思想是:将待排序的序列构造成一个基本的大顶堆(即父节点一定比子节点大，左右节点不比较大小),此时,整个序列的最大值就是堆顶的根节点,将它移走到末尾(其实就是将其与堆数组的末尾元素交换,此时末尾元素就是最大值),然后将剩余的 n-1 个序列重新构造成一个堆,这样就会得到 n 个元素中的次大值,重复执行直到最大值重新回到顶点,便能得到一个有序序列了(即父节点一定比子节点大，左节点一定比右节点大)。

2. 快速排序
   选取一个值作为基准值,将比基准值小的放在左边,比基准值大的放在右边,然后再对左右两边的数据进行同样的处理,直到左右不可分至多有 1 个元素并排好序,然后再左右 2 个排好序的数组相连，重复向上相连直至排好序。
   优点: 原地排序,不需要额外的存储空间;时间复杂度为 O(nlogn),最坏情况下为 O(n^2),但是概率很小;缺点:不稳定,因为在交换的时候可能会把相同的值交换了位置。

分治法
分治法的基本思想是将一个规模为 n 的问题分解为 k 个规模较小的子问题,这些子问题相互独立且与原问题性质相同,求出子问题的解,就可得到原问题的解。

3. 归并排序
   将一个数组分成多个数组,分别对多个数组进行排序,然后再将多个数组合并成一个有序数组.

4. 桶排序
   根据值的范围将数据分到不同的桶中,然后对每个桶中的数据进行排序,最后再将每个桶中的数据按顺序依次取出,即可得到有序序列。

5. 希尔排序
   希尔排序是插入排序的一种,它是将数据分成多个子序列,然后对每个子序列进行插入排序,最后再对整个序列进行插入排序。
   PS:虽然都将数据分成多个子序列，但希尔排序是插入排序的一种,归并排序是多个数组合并到一个临时数组里，类似选择排序。标准的归并是 2 分,多分的归并又称为多路归并。

6. 选择排序
   选择排序是将数据分成已排序区间和未排序区间,每次从未排序区间中找到最小的元素,将其放到已排序区间的末尾。

7. 冒泡排序
8. 插入排序

# B 树及其变种

一个节点最多能容纳的子节点个数称为 B 树的阶,通常用字母 m 表示,且 m>=2,则 B 树的阶至少为 3,因为根节点至少有 2 个子节点,且每个子节点至少有 1 个子节点。
涉及到树的操作,一般都是递归,因为树的结构就是递归的。

## B 树

2-3 node tree
父节点有 2-3 个子节点；当有 3 个子节点时,节点是一个区间的开头和结尾,比父节点小的在左边,比父节点大的在右边,中间的在中间；所有子节点高度保持一致。
当节点插入值时,如果节点已有两个值,那么就提升中间值到父节点,并将原节点拆成两个节点,此时若父节点也有两个值,那么就继续提升中间值到父节点,直到父节点没有两个值,或者父节点没有父节点为止。

## B+ 树

非叶子节点不储存数据，只储存索引。数据都在叶子节点
数据和索引都按照从小到大的顺序排列,右子树的最小值大于等于父节点,左子树的最大值小于父节点。
叶子节点之间通过指针相连,形成一个有序链表,可以按照顺序遍历所有数据。
父节点存有右子树第一节点的指针,这样可以快速找到右子树的第一个节点。

# 二叉搜索树

二叉搜索树是一种特殊的二叉树,它的每个节点的值都大于其左子树的所有节点的值,小于其右子树的所有节点的值。

## 从有序数组构建二叉搜索树

1. 选取数组中间的值作为根节点
2. 将数组分成左右两个子数组,分别构建左右子树
3. 递归执行上述步骤(分治)

# 线索二叉树

线索二叉树是一种特殊的二叉树,所有原本为空的右子节点指针改为指向该节点在中序序列中的后继，所有原本为空的左子节点指针改为指向该节点的中序序列的前驱。因此线索二叉树能线性遍历二叉树。
![https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Threaded_tree.svg/800px-Threaded_tree.svg.png
]

# 数位 dp

foo(i,mask,limit)

# 图

1. 有向图，无向图，连通图，非连通图，加权图，非加权图，循环图，非循环图
2. 树是一个无向连通非循环图
3. prim'S 算法最小生成树 从已连接的节点开始，每次加入权重最小且不达成循环图的节点
4. kruskal'S 算法最小生成树 将所有可相连节点间的权重进行排序，依次加入权重最小且不达成循环图的节点

# KMP 算法

KMP（Knuth-Morris-Pratt ）算法是一种 高效的字符串匹配算法，用于在一个主字符串（text）中查找一个子字符串（pattern）的出现位置。
它的核心思想是 利用已匹配的信息避免不必要的回溯，将时间复杂度从朴素算法的 O(n×m) 优化到 O(n + m)（其中 n 是主字符串长度，m 是子字符串长度）。
通过 预处理子字符串，构建一个 部分匹配表（Partial Match Table, PMT）（也称为 next 数组），记录 pattern 自身的 最长相同前后缀，从而在匹配失败时 跳过不必要的比较。
当 text[i] 和 pattern[j] 不匹配 时：KMP 算法 利用 PMT[j-1] 直接 跳过 pattern 前面 PMT[j-1] 个字符，继续匹配：j = PMT[j-1]（避免 i 回退）。

```javascript
function computePMT(pattern) {
  const pmt = [0] // PMT[0] = 0,第一个字符没有相同前后缀
  let len = 0 // 当前最长公共前后缀长度

  for (let i = 1; i < pattern.length; ) {
    if (pattern[i] === pattern[len]) {
      // 匹配成功
      len++
      pmt[i] = len
      i++
    } else {
      if (len !== 0) {
        len = pmt[len - 1] // 回退到前一个匹配点
      } else {
        pmt[i] = 0
        i++
      }
    }
  }
  return pmt
}
function KMP(text, pattern) {
  const pmt = computePMT(pattern)
  let i = 0 // text 的指针
  let j = 0 // pattern 的指针

  while (i < text.length) {
    if (text[i] === pattern[j]) {
      i++
      j++
      if (j === pattern.length) {
        return i - j // 匹配成功，返回起始位置
      }
    } else {
      if (j > 0) {
        j = pmt[j - 1] // 跳过已匹配的部分,回退到前一个匹配点
      } else {
        i++ // 第一个字符就不匹配，直接移动 i
      }
    }
  }

  return -1 // 未找到
}
```

# 最大堆最小堆

最大堆是一个完全二叉树,每个节点的值都大于等于其左右子节点的值,最小堆是一个完全二叉树,每个节点的值都小于等于其左右子节点的值。注意的是，上层节点的值不一定大于下层节点的值。只能保证父节点的值大于等于子节点的值，舅节点的值不一定大于等于子节点的值。

根节点为最大值，取出根节点后，最后一个节点放到根节点的位置，然后将根节点与子节点交换下沉到合适的位置。下沉的过程是将当前节点与左右子节点中较大的一个进行交换，直到当前节点大于等于左右子节点的值为止。
每次取值的时间复杂度为 O(log n)，空间复杂度为 O(1)。

```javascript
function heapify(arr, n, i) {
  let largest = i // 初始化最大值为根节点
  const left = 2 * i + 1 // 左子节点
  const right = 2 * i + 2 // 右子节点

  if (left < n && arr[left] > arr[largest]) {
    largest = left
  }

  if (right < n && arr[right] > arr[largest]) {
    largest = right
  }

  if (largest !== i) {
    ;[arr[i], arr[largest]] = [arr[largest], arr[i]] // 交换
    heapify(arr, n, largest) // 递归下沉
  }
}

function heapSort(arr) {
  const n = arr.length

  // 构建最大堆
  for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
    heapify(arr, n, i)
  }

  // 提取元素
  for (let i = n - 1; i > 0; i--) {
    ;[arr[0], arr[i]] = [arr[i], arr[0]] // 将当前根节点与最后一个节点交换
    heapify(arr, i, 0) // 下沉
  }
}
```
