import types from '../constants/actionTypes'
import utils from '../../shared/utils'

function replaceUserInfo(userInfo) {
  return {
    type: types.REPLACE_USER_INFO,
    userInfo
  }
}


function clearUserInfo() {
  return {type: types.CLEAR_USER_INFO}
}

function fetchUserInfo() {
  return dispatch => {
    utils.ajax({
      url: '/api/user/getUserInfo',
      type: 'get'
    }).then(res => {
      dispatch(replaceUserInfo(res))
    })
  }
}

function fetchTags() {
  return dispatch => {
    utils.ajax({
      url: '/api/tag/get',
      type: 'get'
    }).then(res => {
      dispatch({
        type: types.GET_TAGS,
        tags: res
      })
    })
  }
}

export default {
  replaceUserInfo,
  fetchUserInfo,
  clearUserInfo,
  fetchTags
}
