import './App.css';
import Navbar from './components/Navbar/Navbar';
import ToDo from './components/ToDo/ToDo';


let todos=[
  {title:'Ertalab yugurishga chiqish',
  checked:false},
  {title:'Uyga bozorlik qilish',
  checked:false},
  {title:'Ovqatlanish',
  checked:false}
]
function App() {
  return (
    <>
    <Navbar/>
    <ToDo todos={todos}/>
    </>
  );
}

export default App;
