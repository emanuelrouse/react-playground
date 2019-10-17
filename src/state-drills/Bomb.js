import React from 'react';

class Bomb extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    }
  }

  componentDidMount() {
    console.log('componentDidMount');
    
    this.interval = setInterval(() => {
      this.setState({
        count: this.state.count + 1,
      })

    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    let count;
    
    if(this.state.count % 2 === 0){
      count = <p>tick</p>;
    }

    if (this.state.count % 2 !== 0) {
      count = <p>tock</p>;
    }

    if (this.state.count >= 8) {
      count = <p>BOOM!!!!</p>
    }
    return (
      <div>
        {count}
      </div>
    );
  } 
}

export default Bomb;