async function getTags(ctx) {
  ctx.body = {
    tags: [{
      name: '前端',
      num: 1,
      router: 'qd',
    }]
  }
}

export default {getTags}
