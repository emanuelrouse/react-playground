import React from 'react';

class AddItemForm extends React.Component {
  render() {
    /* TODO: need to wire up the form to add items in App*/
    return (
      <form >
        <input 
          type='text'
          placeholder='carrots'
          aria-label='Shopping list item'
        />
        <button type='submit'>Add Item</button>
      </form>
    )
  }
}

export default AddItemForm;