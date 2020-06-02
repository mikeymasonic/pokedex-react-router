import React from 'react';
import NotFound from './NotFound';
import renderer from "react-test-renderer";
test('renders NotFound.js correctly', () => {
  const tree = renderer
  .create(<NotFound />)
  .toJSON();
  expect(tree).toMatchSnapshot();
});