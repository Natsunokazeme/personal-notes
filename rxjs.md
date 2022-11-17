1 xxx.asObservable();将xxx转化为一个Observable对象，这个对象可以被订阅，从而获取到xxx的值。
2 BehaviorSubject是一个可订阅的对象，它可以存储一个值，并且可以通过订阅来获取这个值。
3.forkJoin()方法可以将多个Observable对象合并成一个Observable对象，它可以被订阅，从而获取到多个Observable对象的值。类似于promise.all()方法。
例如 forkJoin([obs1, obs2, obs3]) 将会返回一个Observable对象，它可以被订阅，从而获取到三个Observable对象的值。可对每个Observable对象进行pipe处理，也可在订阅后获取到所有结果再进行处理。
4.switchMap()方法可以将一个Observable对象转化为另一个Observable对象，它可以被订阅，从而获取到另一个Observable对象的值。
例如 obs1.pipe(switchMap((value1) => obs2)).subscribe((value2)) 将会返回一个新的Observable对象，它可以被订阅，从而获取到obs2的值。
5.销毁订阅，防止内存泄漏。 在pipe中使用takeUntil()方法，将一个Observable对象作为参数，当这个Observable对象发出值时，就会取消订阅。一般将一个空Subject对象(new Subject<void>();)作为参数，当这个Subject对象发出值时，就会取消订阅。
6.catchError()方法可以捕获错误，当Observable对象发生错误时，就会执行catchError()方法中的代码。写在pipe中。
7.of()方法可以将一个值转化为一个Observable对象，它可以被订阅，从而获取到这个值。
8.finalize()方法可以在Observable对象完成时执行一些代码，写在pipe中。相当于promise的finally()方法。
9.subject 对象是一个observable，它可以存储一个值，并且可以通过subscribe来获取这个值。它可以被订阅多次，每次订阅都会获取到最新的值。subject同时是一个observer，它可以通过next方法来存储一个值。
例如：const subject = new Subject(); subject.subscribe((value) => console.log(value)); subject.next(1); subject.next(2); subject.next(3); // 1 2 3
10.observable

