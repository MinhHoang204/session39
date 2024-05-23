import React, {useReducer} from 'react'
interface State {
    text: string;
}
export default function Bai7() {
    // Định nghĩa kiểu dữ liệu cho action
   type Action = { type: 'setText', payload: string };

   // Khởi tạo state ban đầu
   const initialState: State = { text: '' };

   // Định nghĩa reducer function
   const reducer = (state: State, action: Action): State => {
       switch (action.type) {
          case 'setText':
            return { ...state, text: action.payload };
          default:
            throw new Error('Unknown action type');
       }
   };
   const [state, dispatch] = useReducer(reducer, initialState);

   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
     dispatch({ type: 'setText', payload: e.target.value });
   };


  return (
    <div>Bai7
      <input type="text" value={state.text} onChange={handleChange} />
      <p>Input Change: {state.text}</p>
    </div>
  )
}
