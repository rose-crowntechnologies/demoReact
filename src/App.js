import React, {Component} from 'react';
import './App.css';
import FamilyMember from './Family_Member'
import myFamily from './familyMember'
class App extends Component {
  render(){
    const myFamilyComponents = myFamily.map((e, i, a)=>{
        return <FamilyMember key={i} crap="My Crap" member={e}/>
    })

    return (
      <div className="App">
        {myFamilyComponents}
      </div>
    );
  }
}

export default App;
