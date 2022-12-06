import {put, takeEvery} from 'redux-saga/effects'
import { addCash, asyncAddCash, ASYNC_ADD_CASH } from '../store/cashReducer'

const delay = (ms) => new Promise(res => setTimeout(res, ms))

function* incrementWorker() {
    yield delay(1000)
    yield put(addCash())
}

function* decrementWorker() {

}

export function* countWatcher() {
    yield takeEvery(ASYNC_ADD_CASH, incrementWorker)
}