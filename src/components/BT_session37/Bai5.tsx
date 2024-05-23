import {useReducer} from 'react'
// Định nghĩa kiểu dữ liệu cho state
interface State {
    count: number;
}
export default function Bai5() {
  // Định nghĩa kiểu dữ liệu cho action
  type Action = { type: 'increase' };
  
  // Khởi tạo state ban đầu
  const initialState: State = { count: 0 };
  
  // Định nghĩa reducer function
  const reducer = (state: State, action: Action): State => {
    switch (action.type) {
      case 'increase':
        return { count: state.count + 1 };
      default:
        throw new Error('Unknown action type');
    }
  };
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div>Bai5
      <button onClick={() => dispatch({ type: 'increase' })}>
        Increase
      </button>
      <p>Current Value: {state.count}</p>
    </div>
  )
}
