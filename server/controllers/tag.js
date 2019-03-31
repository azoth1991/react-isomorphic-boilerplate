import tagModel from '../models/tagModel';
async function getTags(ctx) {
  await tagModel.find({}, {
    _id: 0,
  }, function (err,res) {
    ctx.body = {
      tags: res
    }
  });
}

export default {getTags}
