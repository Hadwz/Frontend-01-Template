# 每周总结可以写在这里

## 找出 JavaScript 标准里所有的对象，分析有哪些对象是我们无法实现出来的，这些对象都有哪些特性

- Date
- RegExp 
- Symbol
- WeakMap
- Math

## 笔记

### 简单语句

- Expression
- Empty
- Debugger
- Throw
- Continue
- Break
- Return

### 复合语句

- BlockStatement： { ... }
- Iteration
  - while()
  - do{}while
  - for(xx in xx)
  - for(xx of xx) => Iterator => Generator/Array

- LabelledStatament: break label;

### 声明

- Function
- Generation
- AsyncFunction
- AsynGenerator
- Variable
- Class
- Lexical



### Object

世间万物的统称

对象三要素

1. 状态
2. 行为
3. 唯一性



设计class时我们不应该收到语言描述的干扰。在设计对象的状态和行为时，我们总是遵循“行为改变状态”的原则。


js用属性来统一抽象对象状态和行为

一般来说：数据属性用来描述状态，防蚊器属性则用来描述行为，数据属性中如果存储函数，也可以用于描述行为。

## Tips

- 作用域和上下文的区别
  - 作用域指的是源代码文本的范围，
  - 上下文指的是在用户的电脑上，js引擎的内存存变量的地方的对象

- 作用域：指声明有效的文本范围
- Generator与异步编程没关系，只是其结构可以模拟await，标准的generator的用法：产生无尽的序列、函数分步返回值
- 架构上的概念
  - 封装：封装得好，让别人不容易犯错
  - 复用：粒度合适，抽象合理，总能用上
  - 解耦：不同模块的关联性较弱