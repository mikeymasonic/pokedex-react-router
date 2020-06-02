import React from 'react';
import Detail from './Detail';
import renderer from "react-test-renderer";
test('renders Detail.js correctly', () => {
  const tree = renderer
  .create(<Detail pokeDex={[]}/>)
  .toJSON();
  expect(tree).toMatchSnapshot();
});