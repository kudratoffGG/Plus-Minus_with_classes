import React, {useState} from "react";
import Person from "./Person";
import './App.css';

/*
function App() {
  return (
    <div className="app">
      <h1> Hi I'm React </h1>
      
      <Person />
      <Person />
      <Person />

    </div>
  );
}

export default App;
*/

const App = props => {

  const [personState, setPersonState] = useState({
    person: [
      { name: 'Javohir', age: '27' },
      { name: 'Abdulloh', age: '21' },
      { name: 'Begzod', age: '22' }
    ]
  });

  const [otherState, setOtherState] = useState('some other value');

  console.log(personState, otherState);
  const switchNameHandler = () => {
    // personStat.person[0].name = "John";    -----bunaqa qilib bo'midi-----
    setPersonState({
      person: [
        { name: 'John', age: '27', },
        { name: 'Abdulloh', age: '21', },
        { name: 'Begzod', age: '22', }
      ]
    })
  }

  return (
    <div className="App">
      <h1> Hi I'm React </h1>
      <button className="btn btn-outline-secondary" onClick={switchNameHandler}>Switch Name</button>
      <Person name={personState.person[0].name} age={personState.person[0].age} />
      <Person name={personState.person[1].name} age={personState.person[1].age}>
        My hobbies: playing football
      </Person>
      <Person name={personState.person[2].name} age={personState.person[2].age} />

    </div>
  )
}

export default App;



