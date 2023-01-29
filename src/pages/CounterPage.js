import { useReducer } from "react";
import Button from "../components/Button";
import Panel from "../components/Panel";

const INCREMENT_COUNT = "increment";
const DECREMENT_COUNT = "decrement";
const CHANGE_VALUE_TO_ADD = "change-value-to-add";
const SET_VALUE_TO_ADD = "set-value-to-add";

const reducer = (state, action) => {
  switch (action.type) {
    case INCREMENT_COUNT:
      state.count = state.count + 1;
      return;
    // return { ...state, count: state.count + 1 };
    case DECREMENT_COUNT:
      state.count = state.count - 1;
      return;
    // return { ...state, count: state.count - 1 };
    case CHANGE_VALUE_TO_ADD:
      state.valueToAdd = action.payload;
      return;
    //  return { ...state, valueToAdd: action.payload };
    case SET_VALUE_TO_ADD:
      state.count = state.count + state.valueToAdd;
      state.valueToAdd = action.payload;
      return;
    // return { ...state, count: state.count + state.valueToAdd, valueToAdd: 0 };
    default:
      return state;
  }
};

function CounterPage({ initialCount }) {
  //   const { count, increment } = useCounter(initialCount);

  // const [count, setCount] = useState(initialCount);
  // const [valueToAdd, setValueToAdd] = useState(0);

  const [state, dispatch] = useReducer(reducer, {
    count: initialCount,
    valueToAdd: 0,
  });

  const increment = () => {
    dispatch({ type: INCREMENT_COUNT });
  };

  const decrement = () => {
    dispatch({ type: DECREMENT_COUNT });
  };

  const handleChange = (event) => {
    // || 0 NaN durumunda 0 göstermeyi sağlar
    const value = parseInt(event.target.value) || 0;
    dispatch({
      type: CHANGE_VALUE_TO_ADD,
      payload: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    dispatch({ type: SET_VALUE_TO_ADD });

    // setCount(count + valueToAdd);
    // setValueToAdd(0);
  };

  return (
    <Panel className="m-3">
      <h1 className="text-lg">Count is {state.count}</h1>
      <div className="flex flex-row">
        <Button onClick={increment}>Increment</Button>
        <Button onClick={decrement}>Decrement</Button>
      </div>
      <form onSubmit={handleSubmit}>
        <label>Add a lot!</label>
        <input
          // || "" => yukarıda state'e NaN durumunda 0 yazmaya zorladığım için burda 0 durumunda "" yazdırdım
          value={state.valueToAdd || ""}
          onChange={handleChange}
          type="number"
          className="p-1 m-3 bg-gray-50 border border-gray-300"
        ></input>
        <Button>Add it</Button>
      </form>
    </Panel>
  );
}

export default CounterPage;
