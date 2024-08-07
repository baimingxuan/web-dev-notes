# 进程和线程，以及它们的区别！



## 一、进程

**进程**（Process）是计算机中的程序关于某数据集合上的一次运行活动，是系统进行资源分配和调度的基本单位，是操作系统结构的基础。

操作系统的其他所有内容都是围绕着进程展开的，负责执行这些任务的是`CPU`。

![img](https://static.vue-js.com/3ff146b0-02f6-11ec-8e64-91fdec0f05a1.png)

进程是一种抽象的概念，从来没有统一的标准定义看，一般由程序、数据集合和进程控制块三部分组成：

- 程序用于描述进程要完成的功能，是控制进程执行的指令集
- 数据集合是程序在执行时所需要的数据和工作区
- 程序控制块，包含进程的描述信息和控制信息，是进程存在的唯一标志



## 二、线程

**线程**（thread）是操作系统能够进行运算调度的最小单位，它被包含在进程之中，其是进程中的实际运作单位（控制单元），负责当前进程中程序的执行。

一个进程可以包含一个或多个线程，这些线程共享进程的资源，如内存空间和文件句柄。线程拥有自己的执行栈和局部变量，但访问进程的全局变量。由于多个线程可以并发执行，它们能够在同一进程内执行不同的任务，从而实现程序的高效并发运行。线程可以在不同的处理器上并行执行，从而提高程序的运行速度和响应性。

![img](https://static.vue-js.com/63de34c0-02f6-11ec-a752-75723a64e8f5.png)



## 三、区别

- **根本区别**：进程是操作系统资源分配的基本单位，而线程是任务调度和执行的基本单位。
- **资源开销**：每个进程都有独立的代码和数据空间（程序上下文），程序之间的切换会有较大的开销；线程可以看做轻量级的进程，同一类线程共享代码和数据空间，每个线程都有自己独立的运行栈和程序计数器（PC），线程之间切换的开销小。
- **包含关系**：进程中包含了线程，线程属于进程。一个进程可以有很多线程，每条线程并行执行不同的任务。一条线程指的是进程中一个单一顺序的控制流，一个进程中可以并发多个线程，每条线程并行执行不同的任务。
- **内存分配**：同一进程的线程共享本进程的地址空间和资源，而进程之间的地址空间和资源是相互独立的。
- **影响关系**：子进程无法影响父进程，而子线程可以影响父线程，如果主线程发生异常会影响其所在进程和子线程。与进程相对应，线程与资源分配无关，它属于某一个进程，并与进程内的其他线程一起共享进程的资源。
- **执行过程**：每个独立的进程有程序运行的入口、顺序执行序列和程序出口。但是线程不能独立执行，必须依存在应用程序中，由应用程序提供多个线程执行控制，两者均可并发执行。



举个例子：进程=火车，线程=车厢

- 线程在进程下行进（单纯的车厢无法运行）
- 一个进程可以包含多个线程（一辆火车可以有多个车厢）
- 不同进程间数据很难共享（一辆火车上的乘客很难换到另外一辆火车，比如站点换乘）
- 同一进程下不同线程间数据很易共享（A车厢换到B车厢很容易）
- 进程要比线程消耗更多的计算机资源（采用多列火车相比多个车厢更耗资源）
- 进程间不会相互影响，一个线程挂掉将导致整个进程挂掉（一列火车不会影响到另外一列火车，但是如果一列火车上中间的一节车厢着火了，将影响到所有车厢）

##  