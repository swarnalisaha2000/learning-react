
import './App.css';
import Greet from './components/Greet'
import Welcome from './components/Welcome'
import Message from './components/Message'
import Counter from './components/Counter'
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';
import EventBind from './components/EventBind';
import ParentComponent from './components/ParentComponent';
import UserGreeting from './components/UserGreeting';
import NameList from './components/NameList';
import Stylesheets from './components/Stylesheets';
import Inline from './components/Inline';
import './components/AppStyles.css'
import styles from './components/AppStyles.module.css'
import Form from './components/Form';
import LifecycleA from './components/LifecycleA';
import Fragmentdemo from './components/Fragmentdemo';
import Tables from './components/Tables';
import PureComp from './components/PureComp';
import ParentComp from './components/ParentComp';
import RefsDemo from './components/RefsDemo';
import FocusInput from './components/FocusInput';
import FRParentInput from './FRParentInput';
import PortalDemo from './components/PortalDemo';
import Hero from './components/Hero';
import ErrorBoundary from './ErrorBoundary';

function App() {
    return ( 
        <div className = "App">
            <ErrorBoundary>
            <Hero heroname='Batman' />
            </ErrorBoundary>
            <ErrorBoundary>
            <Hero heroname='Spiderman' />
            </ErrorBoundary>
            <ErrorBoundary>
            <Hero heroname='Joker' />
            </ErrorBoundary>
            
        </div>

        // <PortalDemo/>
        // <FRParentInput />
        // <RefsDemo />
        //    <ParentComp />
          // <PureComp />
        //  <Fragmentdemo />
        //  <Tables />
        //<Form />
        //<LifecycleA />
        // <FunctionClick />
        //         <h2 className='error'>Error</h2>
        //     <h2 className= {styles.success} >Success</h2>
        // <ClassClick />
        // <EventBind />
        // <ParentComponent />
        // <UserGreeting />
        // <NameList />
        // <Inline />
        // <Stylesheets primary={true} />
        // <Greet name="riya" age="10">
        // <p>This is a children and they are adults</p></Greet>
        // <Greet name="rima" age="15">
        // <button>Action</button></Greet>
        // <Greet name="rohit" age="16" ></Greet>
        // <Welcome name="riya" age="10"></Welcome>
        // <Welcome name="rima" age="15"></Welcome>
        // <Counter/>
        // <Message />
    );
}

export default App;