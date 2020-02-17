import React from 'react';
import List from './List';
import renderer from "react-test-renderer";
test('renders List.js correctly', () => {
  const tree = renderer
  .create(<List />)
  .toJSON();
  expect(tree).toMatchSnapshot();
});