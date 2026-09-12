import { render, screen } from '@testing-library/react';
import App from './App';

test('3 곱하기 5는 15가 나와야 해요', () => {
  expect(3 * 5).toBe(15);
});
