import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'
import { Counter } from './Counter'

test('should increment counter', () => {
  // Arrange
  render(<Counter />)

  const counter = screen.getByText('0')
  const incrementButton = screen.getByText('one up')
  // Act
  fireEvent.click(incrementButton)
  // Assert
  expect(counter.textContent).toEqual('1')
})
