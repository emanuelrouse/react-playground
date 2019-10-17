import React from 'react';

class RouletteGun extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      chamber: null,
      spinningTheChamber: false,
    }
  }

  static defaultProps = {
    bulletInChamber: 8,
  }

  // arrow function binding to fix undefined state inside event handler
  handleButtonClick = () => {
    this.setState({
      spinningTheChamber: true,
    })
    
    const milliseconds = 2000;
    this.timeout = setTimeout((e) => {
      const randomNumber = Math.ceil(Math.random() * 8);
      console.log(randomNumber);
      this.setState({
        chamber: randomNumber,
        spinningTheChamber: false,
      });
      console.log(`number in chamber is now ${this.state.chamber}`);
    }, milliseconds);
  }

  componentWillUnmount() {
    clearTimeout(this.timeout);
  }

  render() {
    const spinningTheChamber = this.state.spinningTheChamber;
    let renderedMessage;

    if (spinningTheChamber) {
      renderedMessage = 'spinning the chamber and pulling the trigger!...';
    } else if (this.state.chamber === this.props.bulletInChamber) {
      renderedMessage = 'BANG!!!!';
    } else {
      renderedMessage = 'you\'re safe';
    }

    return (
      <div>
        <p>
          { renderedMessage }
        </p>
        <button onClick={this.handleButtonClick}>Pull the trigger!</button>
      </div>
    );
  }
}




export default RouletteGun;