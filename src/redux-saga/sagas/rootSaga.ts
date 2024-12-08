import { all } from "redux-saga/effects";
import { productsSaga } from "./productsSaga";

function* rootSaga(){
    yield all([productsSaga()]);
}
export default rootSaga;