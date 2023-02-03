import React, { Component } from 'react';
import MyComponent from './component/MyComponent';

// class component
// class App extends Component {
//   render() {
//     return (
//       <MyComponent />
//     )
//   }
// }

// function component
const App = () => {
  return (
    <MyComponent
      name = {"My Name"}
      age = {32}
    />
  )
}

export default App;
