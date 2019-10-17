import React from 'react';

class HelloWorld extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      who: 'world',
    }
  }

  handleButtonClick = (e) => {
    console.log(e.target.innerText);
    if (e.target.innerText === 'World'){
      this.setState({
        who: 'world',
      })
    }
    if (e.target.innerText === 'Friend'){
      this.setState({
        who: 'friend',
      })
    }
    if (e.target.innerText === 'React'){
      this.setState({
        who: 'React',
      })
    }
  }

  render() {
    const buttonsArr = ['World', 'Friend','React'];
    const buttons = buttonsArr.map((button, i) => <button key={i} onClick={this.handleButtonClick}>{button}</button>);

    return (
      <div>
        <p>Hello, {this.state.who}!</p>
        {buttons}
      </div>
    );
  }
}

export default HelloWorld;