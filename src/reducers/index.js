import * as types from "../actions/ActionTypes";
import number from "./number";
import color from "./color";
import { combineReducers } from "redux";
// 초기 상태를 정의합니다

const reducers = combineReducers({ numberData: number, colorData: color });

export default reducers;
