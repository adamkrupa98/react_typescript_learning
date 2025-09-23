import { Hello } from "./Hello";
import { UserCard } from "./UserCard";
function App() {
  let users = [{
    name: "Adam",
    age: 20,
    city: "Poznań"
  },
{
  name: "Filip",
  age: 30,
  city: "London"
}]
  return (
    <div>
     <Hello name="Adam"/>
     <Hello name="Adam" age={20} isStudent/>
     {users.map(u=><UserCard key={u.name} user={u}/>)}
    </div>
  )
}

export default App;