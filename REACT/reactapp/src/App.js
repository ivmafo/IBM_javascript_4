import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props)
      console.log('Dentro del constructor')      
  }

  componentDidMount= () => {
    console.log('Dentro del componente componentDidMount')
  }
  render(){
    console.log('Desntro del metodo rentder')
    return (
      <div>el componente fue renderizado</div>
    )
  }
}

export default App;