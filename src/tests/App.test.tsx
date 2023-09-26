import React from 'react';
import { render, screen } from '@testing-library/react';
const add = require('./math'); // Adjust the path based on your project structure

test('adds 1 + 2 to equal 3', () => {
  expect(add(1, 2)).toBe(3);
});
