import {useReducer} from 'react'
interface State {
    count: number;
}
export default function Bai6() {
    // Định nghĩa kiểu dữ liệu cho action
   type Action = { type: 'decrease' };

   // Khởi tạo state ban đầu
   const initialState: State = { count: 10 };

   // Định nghĩa reducer function
   const reducer = (state: State, action: Action): State => {
       switch (action.type) {
          case 'decrease':
             return { count: Math.max(0, state.count - 1) };
          default:
             throw new Error('Unknown action type');
       }
   };
   const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div>Bai6
      <button onClick={() => dispatch({ type: 'decrease' })}>
        Decrease
      </button>
      <p>Current Value: {state.count}</p>
    </div>
  )
}
