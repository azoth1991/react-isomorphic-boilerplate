import Koa from 'koa'
import json from 'koa-json'
import bodyParser from 'koa-bodyparser'
import logger from 'koa-logger'
import session from 'koa-session'
import compress from 'koa-compress'
import convert from 'koa-convert'
import spider from './spider'

const app = new Koa()

app.keys = ['this is a fucking secret']
app.use(convert(session(app)))
app.use(compress())
app.use(bodyParser())
app.use(json())
app.use(logger())
app.use(spider)

export default app
