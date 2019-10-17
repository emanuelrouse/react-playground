import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import TheDate from './TheDate';

describe('TheDate component', () => {
  it('Renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<TheDate />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it.skip('Renders UI as expected', () => {
    const tree = renderer
        .create(<TheDate />)
        .toJSON();
    expect(tree).toMatchSnapshot();
  })
})