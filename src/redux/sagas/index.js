import { all } from "redux-saga/effects";
import {getSessions} from "./saga";


export default function* rootSaga() {
  yield all([
    getSessions()
  ]);
}
