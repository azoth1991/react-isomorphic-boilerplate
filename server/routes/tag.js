import Router from 'koa-router'
import tag from '../controllers/tag'

const router = new Router({prefix: '/tag'})

router.get('/getTags', tag.getTags)

export default router
