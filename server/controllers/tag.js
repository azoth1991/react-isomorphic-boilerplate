async function getTags(ctx) {
  ctx.body = {
    tags: [{
      name: 'vue2x源码分析',
      num: 1,
      tagid: '1',
    }, {
        name: '前端',
        num: 1,
        tagid: '1',
    }, {
        name: '函数式编程',
        num: 1,
        tagid: '1',
    }, {
        name: 'egret',
        num: 1,
        tagid: '1',
    }, {
        name: 'javascript框架设计',
        num: 1,
        tagid: '1',
    }, {
        name: 'css',
        num: 1,
        tagid: '1',
    }, {
        name: '面试题整理',
        num: 1,
        tagid: '1',
    }, {
        name: 'nodejs',
        num: 1,
        tagid: '1',
    }, {
        name: 'JavaScript高级编程学习笔记',
        num: 1,
        tagid: '1',
    }, {
        name: 'react',
        num: 1,
        tagid: '1',
    }]
  }
}

export default {getTags}
