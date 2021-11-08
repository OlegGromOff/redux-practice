

const defaultState = {
    customers: []
}

const ADD_CUSTOMER = "ADD_CUSTOMER" // хорошая практика задавать значение екшена в переменную чтобы не ошибиться когда ниже его будешь вписывать
const ADD_MANY_CUSTOMERS = "ADD_MANY_CUSTOMERS"
const REMOVE_CUSTOMERS = "REMOVE_CUSTOMERS"

export const customerReducer = (state = defaultState, action) => {  // еще один reducer
  
    switch (action.type) {
      case ADD_MANY_CUSTOMERS:
        return {...state, customers: [...state.customers, ...action.payload]}
      case ADD_CUSTOMER:
        return {...state, customers:[...state.customers, action.payload]} 
      case REMOVE_CUSTOMERS:
        return {...state, customers: state.customers.filter(customer => customer.id !== action.payload)}  // вернуть массив клиентов кроме того клиента на которого нажали
      default:
        return state  
    }
  }

export const addCustomerAction = (payload) => ({type: ADD_CUSTOMER, payload}) //action-creator
export const addManyCustomersAction = (payload) => ({type: ADD_MANY_CUSTOMERS, payload})
export const removeCustomerAction = (payload) => ({type: REMOVE_CUSTOMERS, payload})