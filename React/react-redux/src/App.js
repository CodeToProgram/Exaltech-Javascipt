// import logo from './logo.svg';
import './App.css';
import {useSelector} from "react-redux";

function App() {
  const data=useSelector((store)=>store.FirstReducer)
  return (
    <div className="App">
     {data.map((item)=>{
      return(
        <section>
          <h1>{item.name}</h1>
          <p>{item.add}</p>
          <small>{item.profesion}</small>
        </section>
      )
     })}
    </div>
  );
}

export default App;
