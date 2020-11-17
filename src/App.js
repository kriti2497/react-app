import React from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import Hello from './components/Hello';
import Message from './components/Message'
import Counter from './components/Counter';
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';
import EventBind from './components/EventBind';
import ParentComponent from './components/ParentComponent';
import UserGreeting from './components/UserGreeting';
import NameList from './components/NameList';
import Stylesheets from './components/Stylesheets';
import Inline from './components/Inline';
import './appStyles.css';
import styles from './appStyles.module.css';
import Form from './components/Form';
import LifecycleA from './components/LifecycleA';
import FragmentDemo from './components/FragmentDemo';
import Tables from './components/Tables';
import PureComp from './components/PureComp';
import ParentComp from './components/ParentComp';
import RefsDemo from './components/RefsDemo';
import FocusInput from './components/FocusInput';
import FRParentInput from './components/FRParentInput';
import PortalDemo from './components/PortalDemo';
import Hero from './components/Hero';
import ErrorBoundary from './components/ErrorBoundary';
import ClickCounter from './components/ClickCounter';
import HoverCounter from './components/HoverCounter';
import ClickCounterTwo from './components/ClickCounterTwo';
import HoverCounterTwo from './components/HoverCounterTwo';
import User from './components/User';
import CounterTwo from './components/CounterTwo';


function App() {
  return (
    <div className="App">
      {/* <ClickCounterTwo/>
      <HoverCounterTwo/>
      <User render={ (isLoggedIn) => isLoggedIn? 'Kritika': 'Guest' }/> */}
      {/* Method 1 */}
      {/* <CounterTwo render={(count, incrementCount)=>( 
        <ClickCounterTwo count={count} incrementCount={incrementCount}/> 
      )}/>
      <CounterTwo render={(count, incrementCount)=>( 
        <HoverCounterTwo count={count} incrementCount={incrementCount}/> 
      )}/> */}
      <CounterTwo>
      {(count, incrementCount)=>( 
        <ClickCounterTwo count={count} incrementCount={incrementCount}/> 
      )}
      </CounterTwo>
      <CounterTwo>
      {(count, incrementCount)=>( 
        <HoverCounterTwo count={count} incrementCount={incrementCount}/> 
      )}
      </CounterTwo>

      {/* <ClickCounter name="Kritika"/>
      <HoverCounter/> */}
      {/* <ErrorBoundary><Hero heroName="Batman"></Hero></ErrorBoundary>
      <ErrorBoundary><Hero heroName="Superman"></Hero></ErrorBoundary>
      <ErrorBoundary><Hero heroName="Joker"></Hero></ErrorBoundary> */}
      
      {/* <PortalDemo/> */}
      {/* <FRParentInput/> */}
      {/* <FocusInput/> */}
      {/* <RefsDemo/> */}
      {/* <ParentComp/> */}
      {/* <Tables/> */}
      {/* <FragmentDemo/> */}
      {/* <LifecycleA/> */}
      {/* <Form/> */}
      {/* <h1 className='error'>Error</h1>
      <h1 className={styles.success}>Success</h1>
      <Inline/> */}
      {/* <Stylesheets primary={true}/> */}
      {/* <NameList/> */}
      {/* <UserGreeting/> */}
      {/* <ParentComponent/> */}
      {/* <EventBind/> */}
      {/* <ClassClick/> */}
      {/* <FunctionClick/> */}
      {/* <Counter/> */}
      {/* <Message/> */}
      {/* <Greet name="Kritika" heroName="kritz">
        <p>This is a child prop</p>
      </Greet> */}
      {/* <Greet name="Snehal" heroName="sneh">
        <button>
          Action
        </button>
      </Greet> */}
      {/* <Welcome name="Kritika" heroName="kritz"/>
      <Welcome name="Snehal" heroName="sneh"/>  */}
      {/* <Hello/> */}
    </div>
  );
}

export default App;
