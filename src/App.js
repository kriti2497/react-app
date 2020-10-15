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


function App() {
  return (
    <div className="App">
      <UserGreeting/>
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
