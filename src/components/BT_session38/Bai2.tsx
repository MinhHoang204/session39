import {useMemo} from 'react'
interface User {
    id: number;
    name: string;
    age: number;
}
  
export default function Bai2() {
    const users: User[] = [
        { id: 1, name: 'Alice', age: 25 },
        { id: 2, name: 'Bob', age: 17 },
        { id: 3, name: 'Charlie', age: 20 },
        { id: 4, name: 'David', age: 15 },
        { id: 5, name: 'Eve', age: 22 },
    ];
    
    const usersOver18 = useMemo(() => {
        return users.filter(user => user.age > 18);
    }, [users]);
  return (
    <div>Bai2
        <h2>Users over 18</h2>
      <ul>
        {usersOver18.map(user => (
          <li key={user.id}>{user.name} ({user.age} years old)</li>
        ))}
      </ul>
    </div>
  )
}
