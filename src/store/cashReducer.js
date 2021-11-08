

const defaultState = { // создал state
    cash: 5,
  }

const ADD_CASH = "ADD_CASH"  // хорошая практика задавать значение екшена в переменную чтобы не ошибиться когда ниже его будешь вписывать
const GET_CASH = "GET_CASH"

export const cashReducer = (state = defaultState, action) => {  // создал редюсер. Первым параметром принимает state а вторым action
    // редюсер будет делать что-либо в зависимости от того какой тип экшена пришел
    switch (action.type) {
      case ADD_CASH:
        return {...state, cash: state.cash + action.payload} // state иммутабельный так что создаем новый объект в котором старый state и новое состояние какого-либо поля внутри стейта (например cash чтобы изменить надо вызвать его старое значение и прибавить к нему даннные из action.payload)
      case GET_CASH:
        return {...state, cash: state.cash - action.payload} // етот action уменьшает state на цифру указанную в payload (эту цифру можно указать при вызове dispatch)
      default:
        return state  // по дефолту редюсер всегда возвращает state
    }
  }