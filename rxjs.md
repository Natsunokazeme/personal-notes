1 xxx.asObservable();将xxx转化为一个Observable对象，这个对象可以被订阅，从而获取到xxx的值。
2 BehaviorSubject是一个可订阅的对象，它可以存储一个值，并且可以通过订阅来获取这个值。
3.forkJoin()方法可以将多个Observable对象合并成一个Observable对象，它可以被订阅，从而获取到多个Observable对象的值。类似于promise.all()方法。
例如 forkJoin([obs1, obs2, obs3]) 将会返回一个Observable对象，它可以被订阅，从而获取到三个Observable对象的值。可对每个Observable对象进行pipe处理，也可在订阅后获取到所有结果再进行处理。
