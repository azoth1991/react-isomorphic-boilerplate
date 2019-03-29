import cheerio from 'cheerio'
import http from 'http'
let url = 'https://www.jianshu.com/';

async function spider(ctx, next) {
    await next()
}
export default spider
