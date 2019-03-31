import mongoose from './db.js';
import articleModel from './articleModel';
let Schema = mongoose.Schema;

let tagModel = new Schema({
  name : { type: String },                    //用户账号
});

export default mongoose.model('tag', tagModel)