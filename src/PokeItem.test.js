import React from 'react';
import PokeItem from './PokeItem';
import renderer from "react-test-renderer";
test('renders PokeItem.js correctly', () => {
  const tree = renderer
  .create(<PokeItem pokemon={[]} />)
  .toJSON();
  expect(tree).toMatchSnapshot();
});