import types from '../constants/actionTypes'

function userInfo(state = null, action) {
    switch (action.type) {
        case types.GET_TAGS:
            return action.tags
        case types.CLEAR_USER_INFO:
            return null
        default:
            return state
    }
}

export default userInfo
