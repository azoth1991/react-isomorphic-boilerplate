import mongoose from './db.js';
let Schema = mongoose.Schema;

let articleModel = new Schema({
  articleId: {type: Number},                        //年龄
  title : { type: String },                    //用户账号
  content : { type: String}                       //最近登录时间
});
export default mongoose.model('article', articleModel)