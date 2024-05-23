import React, {useReducer} from 'react'
interface State {
    gender: string;
}
export default function Bai8() {
    // Định nghĩa kiểu dữ liệu cho action
    type Action = { type: 'setGender', payload: string };

    // Khởi tạo state ban đầu
    const initialState: State = { gender: '' };

    // Định nghĩa reducer function
    const reducer = (state: State, action: Action): State => {
       switch (action.type) {
          case 'setGender':
            return { ...state, gender: action.payload };
          default:
            throw new Error('Unknown action type');
       }
    };
    const [state, dispatch] = useReducer(reducer, initialState);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      dispatch({ type: 'setGender', payload: e.target.value });
    };
  return (
    <div>Bai8
      <div>
        <input 
          type="radio" 
          id="male" 
          name="gender" 
          value="Male" 
          checked={state.gender === 'Male'} 
          onChange={handleChange} 
        />
        <label htmlFor="male">Nam</label>
      </div>
      <div>
        <input 
          type="radio" 
          id="female" 
          name="gender" 
          value="Female" 
          checked={state.gender === 'Female'} 
          onChange={handleChange} 
        />
        <label htmlFor="female">Nữ</label>
      </div>
      <div>
        <input 
          type="radio" 
          id="other" 
          name="gender" 
          value="Other" 
          checked={state.gender === 'Other'} 
          onChange={handleChange} 
        />
        <label htmlFor="other">Khác</label>
      </div>
      <p>Selected Gender: {state.gender}</p>
    </div>
  )
}
