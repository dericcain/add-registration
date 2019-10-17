import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { axe } from 'jest-axe';

import { Home } from 'Routes/home';

describe('<Home />', () => {
  // Here, we use jest-axe to check that the code hos no accessibility violations
  it('should be accessibility friendly', async () => {
    const { container } = render(<Home appVersion="1" />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it('should toggle "Yes" and "No" when the button has been clicked', () => {
    const { getByText } = render(<Home appVersion="1" />);
    const text = getByText(/has the button been clicked/i);
    const button = getByText(/click me/i);

    expect(text).toHaveTextContent(/no/i);

    fireEvent.click(button);

    expect(text).toHaveTextContent(/yes/i);
  });
});
