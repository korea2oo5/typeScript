import { createStore, applyMiddleware, combineReducers } from 'redux'
import { HYDRATE, createWrapper } from 'next-redux-wrapper'
import thunkMiddleware from 'redux-thunk'
import notice from '../modules/notice'

function bindMiddleware(middleware){
    if (process.env.NODE_ENV !== 'production') {
        const { composeWithDevTools } = require('redux-devtools-extension')
        return composeWithDevTools(applyMiddleware(...middleware))
    }
    return applyMiddleware(...middleware)
}
const combinedReducer = combineReducers({
    notice
})
function reducer(state, action) {
    if (action.type === HYDRATE) {
        const nextState = {
            ...state,
            ...action.payload,
        };
        if (state.data) nextState.data = state.data
        return nextState
    } else {
        return combinedReducer(state, action)
    }
}
function initStore() {
    return createStore(reducer, bindMiddleware([thunkMiddleware]))
}
export const wrapper = createWrapper(initStore)

function WraapedApp({ Component, pageProps}){
    return <Component {...pageProps} />
}
export default wrapper.withRedux(WraapedApp)