生成随机数据，语法规则如下
'name|min-max': value
'name|count': value
'name|min-max.dmin-dmax': value
'name|min-max.dcount': value
'name|count.dmin-dmax': value
'name|count.dcount': value
'name|+step': value
当value是string时，min-max、count都表string重复次数
当value是number时，number只确定类型，dmin-dmax表随机生成的小数位数
'name|+1':number 
当value是boolean时，min-max表随机生成true|false的概率
'name|1':boolean 55开 
当value是object时，从属性中随机抽取count或者min-max个属性
当value是array时，'name|1':array表随机抽取一个元素
'name|+1':array表顺序抽取一个元素
min-max|count表array重复次数

‘name’：function{

return 

}	//可返回任意数据并且每次调用都返回不一样的数据