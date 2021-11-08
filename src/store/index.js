import {createStore, combineReducers, applyMiddleware} from "redux"; // импортировал createStore для создания стора. Для объединения нескольких редюсеров использую combineReducers. Подключаем applyMiddleware чтобы пользоваться redux-thunk (он является middleware)
import { cashReducer } from "./cashReducer";
import { customerReducer } from "./customerReducer";
import {composeWithDevTools } from 'redux-devtools-extension'; // подключаю redux devtools
import thunk from "redux-thunk";

const rootReducer = combineReducers ( { // объединил несколько редюсеров
    cash: cashReducer,
    customers: customerReducer,
})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk))) // создал store и передаю туда reducer (несколько редюсеров в одном). composeWithDevTools для отладки в браузере. Тут подключаю redux-thunk