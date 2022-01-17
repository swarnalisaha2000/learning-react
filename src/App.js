
import './App.css';
import Greet from './components/Greet'
import Welcome from './components/Welcome'
import Message from './components/Message'
import Counter from './components/Counter'
import FunctionClick from './components/FunctionClick';


function App() {
    return ( 
        <div className = "App">
        <FunctionClick></FunctionClick>
        {/*<Greet name="riya" age="10">
        <p>This is a children and they are adults</p></Greet>
        <Greet name="rima" age="15">
    <button>Action</button></Greet>
        <Greet name="rohit" age="16" ></Greet>
        <Welcome name="riya" age="10"></Welcome>
       <Welcome name="rima" age="15"></Welcome>
        <Counter/>
<Message />*/}
        </div>
    );
}

export default App;