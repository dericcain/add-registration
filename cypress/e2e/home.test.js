describe('Home', () => {
  it('should open the homepage and click the button', () => {
    cy.visit('/')
      .findByText(/has the button been clicked/i)
      .should('contain', 'No')
      .findByText(/click me/i)
      .click()
      .findByText(/has the button been clicked/i)
      .should('contain', 'Yes');
  });
});
