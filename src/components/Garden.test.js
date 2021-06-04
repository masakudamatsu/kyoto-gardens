import React from 'react';
import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {axe} from 'jest-axe';

import Garden from './Garden';

const mockProps = {
  gardenName: {
    kanji: '龍安寺',
    latin: 'Ryoan-ji',
    lowercase: 'ryoanji',
  },
  image: {
    src: '/images/ryoanji-banner-spring-large.jpg',
    width: 1882,
    height: 1405,
    alt: 'A view of Ryoanji Rock Garden',
  },
  description: 'Reminding us of the principle of Zen',
  year: 'c.1499',
};

test('renders text as expected', () => {
  render(<Garden {...mockProps} />);
  expect(screen.getByText(mockProps.gardenName.kanji)).toBeVisible();
  expect(screen.getByText(mockProps.gardenName.latin)).toBeVisible();
  expect(screen.getByText(mockProps.description)).toBeVisible();
  expect(screen.getByText(mockProps.year)).toBeVisible();
});

test('renders the image', () => {
  render(<Garden {...mockProps} />);
  expect(screen.getByAltText(mockProps.image.alt)).toBeInTheDocument();
  // toBeVisible() won't work here, as Next.js won't render it but will transform it into an optimized version
});

test('disables the link to the current page', () => {
  render(
    <Garden {...mockProps} currentPage={mockProps.gardenName.lowercase} />,
  );
  expect(screen.getByText(mockProps.gardenName.latin)).not.toHaveAttribute(
    'href',
  );
});

test('is accessible', async () => {
  const {container} = render(<Garden {...mockProps} />);
  const results = await axe(container);
  expect(results).toHaveNoViolations();
});
