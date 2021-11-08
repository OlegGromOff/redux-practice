import logo from './logo.svg';
import './App.css';
import {useDispatch, useSelector} from "react-redux"; // использую  хук useDispatch чтобы использовать dispatch внутри компоненты
// useSelector хук для получения state
import { addCustomerAction } from './store/customerReducer'; // импортирую actioncreator
import { removeCustomerAction } from './store/customerReducer'; // импортирую actioncreator
import { fetchCustomers } from './asyncActions/customers';

function App() {

  const dispatch = useDispatch(); // чтобы изменить state создаю dispatch
  const cash = useSelector(state => state.cash.cash); // получаю state(данные из state) с помощью useSelector, (передаю его в параметры). Тут через точку после state пиши название редюсера если их больше одного state.cash и еще через точку знаечние редюсера к которому обращаешься state.cash.cash
  const customers = useSelector(state => state.customers.customers);

  const addCash = (cash) => {
    dispatch({type:"ADD_CASH", payload: cash}) // вызываю dispatch и передаю ему в параметры action и payload(данные)
  }

  const getCash = (cash) => {
    dispatch({type:"GET_CASH", payload: cash}) // этот dispatch уменьшит state на число указанное в payload(этот функционал задан внутри редюсера). Это число можно указать при вызове функции
  }

  const addCustomer = (name) =>{ // функция создания нового клиента
    const customer = { // обект клиента
      name,
      id: Date.now(), // чтобы id был уникальный пусть это будет текущее время
    }
    dispatch(addCustomerAction(customer)) // передаю в редюсер объект нового клиента с помощью екшенкриейтора
  }

  const removeCustomer = (customer) => {
    dispatch(removeCustomerAction(customer.id))// передал в payload id customer с помощью екшенкриейтора removeCustomerAction
  }

  return (
    <div className="App">
      <div style={{fontSize:"3rem"}}>{cash}</div> 
      <div style={{display:"flex"}}>
        <button onClick={() => addCash(Number(prompt()))}>Пополнить счет</button>
        <button onClick={() => getCash(Number(prompt()))}>Снять со счета</button>
        <button onClick={() => addCustomer(prompt())}>Добавить клиента</button>
        <button onClick={() => dispatch(fetchCustomers())}>Получать клиентов из базы</button>
        
      </div>
      {customers.length > 0 ?
        <div>
          {customers.map(customer =>
            <div onClick={()=> removeCustomer(customer)} style={{fontSize: "2rem", border:"1px solid black", padding:"10px", marginTop: 5}}>
              {customer.name}
            </div>
            )}
        </div>
        :
        <div style={{fontSize:"2rem", marginTop:20}}>
          Клиенты отсутствуют
        </div>
      }
    </div>
  );
}

export default App;
