import React from 'react';
import './Accordion.css'

class Accordion extends React.Component {
  static defaultProps = {
    sections: [],
  };

  state = {
    currentSectionIndex: 0,
  };

  handleButtonClick = (idx) => {
    console.log(`button: ${idx} clicked`);
    this.setState({
      currentSectionIndex: idx,
    })
  }

  render() {
    const currentSection = this.state.currentSectionIndex;
    
    const sections = this.props.sections.map((section, idx) => {
      const currentContent = (currentSection === idx) ? <p>{section.content}</p> : '';
      return (
        <li key={idx}>
          <button onClick={() => this.handleButtonClick(idx)}>
            {section.title}
          </button>
          {currentContent}
        </li>
      )
    });

    return (
      <ul>
        {sections}
      </ul>
    )
  }
}

export default Accordion;