import React, { Component } from 'react';
import Accordion from './state-drills/Accordion';
// import AddItemForm from './components/shopping-list/AddItemForm';
// import ShoppingList from './components/shopping-list/ShoppingList';
import './App.css';

const sections = [
  {
    title: 'Section 1',
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  },
  {
    title: 'Section 2',
    content: 'Cupiditate tenetur aliquam necessitatibus id distinctio quas nihil ipsam nisi modi!',
  },
  {
    title: 'Section 3',
    content: 'Animi amet cumque sint cupiditate officia ab voluptatibus libero optio et?',
  },
];

class App extends Component {
  // state = {
  //   shoppingItems: [
  //     { name: 'apples', checked: false },
  //     { name: 'oranges', checked: true },
  //     { name: 'bread', checked: false },
  //   ]
  // };

  render() {
    return (
      <div className="App">
        <Accordion sections={sections} />
      </div>
      // <>
      //   <header>
      //     <h1>Shopping List</h1>
      //   </header>
      //   <main>
      //     <section>
      //       <AddItemForm />
      //     </section>
      //     <section>
      //       <ShoppingList items={this.state.shoppingItems} />
      //     </section>
      //   </main>
      // </>
    )
  }
}

export default App;
