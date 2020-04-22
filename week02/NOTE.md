# 每周总结可以写在这里

## 编程语言通识

- 非形式语言
  - 中文
- 形式语言
  - 0型: 无限制文法
    - 等号左边不止一个 <a><b> ::= "c"
  - 1型: 上下文相关文法
    - "a"<b>"c"::="a""x""c"
  - 2型: 上下文无关文法
    - js, 大部分情况是上下文无关
  - 3型: 正则文法
    - 限制表达能力

### 图灵完备性

- 所有编程语言都有图灵完备性，html、css都不具备图灵完备

- 命令式 --- 图灵机：凡是可计算的都是图灵机
  - goto
  - if/while
- 声明式 --- lambda
  - 递归

### 动态与静态语言

- 动态
  - 在用户的设备/在线服务器上
  - 产品实际运行时
  - Runtime（运行时）
- 静态
  - 在程序员的设备上
  - 产品开发时
  - Compiletime（编译时）

### 类型系统

- 动态类型系统与静态类型系统
- 强类型与弱类型（有隐式转换）
  - String + Number
  - String == Boolean
- 复合类型
  - 结构体
  - 函数签名：由参数列表和返回值组成
- 子类型
  - 逆变/协变（js无相关概念）



### 一般命令式编程语言

- Atom
  - Identifier：标识符
  - Literal：字面量 eg：3.14
- Expression
  - Atom
  - Operator
  - Punctuator：标点符号
- Statement
  - Expression
  - Keyword
  - Punctuator
- Structure
  - Function
  - Class
  - Process
  - Namespace
  - ...
- Program
  - Program
  - Module(后三个都是差不多)
  - Package
  - Library

## 词法|类型

### Unicode

- Basic latin（ascii） 码 0 - 128
  - cjk: U+4E00 - U+9FFF  中日韩的文字
- undefined是全局的变量，全局不能修改，局部下可以修改（function）

### InputElement

- WhiteSpace
- LineTerminator
- Comment
- Token
  - Punctuator
  - IdentifierName
    - keywords
    - identifier
    - fureture reserve keywords：enum
  - Literal





## TIPS

- 命名空间是一个容器，它允许开发人员在一个独特的，特定于应用程序的名称下捆绑所有的功能。 **在JavaScript中，命名空间只是另一个包含方法，属性，对象的对象。**
- 创造的JavaScript命名空间背后的想法很简单：一个全局对象（eg：window）被创建，所有的变量，方法和功能成为该对象的属性。使用命名空间也最大程度地减少应用程序的名称冲突的可能性。
- toString: 97..toString(2)
- 怎么去理解文法
- 技术选型
  - 产品强需求：比如支持ie
  - 考虑内部生态，外部生态，比如必须使用内部组件
  - 团队的人适合用什么的东西，怎么实现最方便
- 计算机网络、操作系统（线程：操作系统的提供、信号量、锁）、算法、数据结构比较有用的课，如果不理解上层就没办法深入，理解不透彻。
- 参与开源项目的步骤
  1. 写文档
  2. 解决bug
  3. 做需求