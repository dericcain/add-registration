import { Chance } from 'chance';
import db from '../../db.json';

const c = new Chance();

describe('/register', () => {
  it('should be able to register a user', () => {
    cy.fillRegistration({
      firstName: c.first(),
      lastName: c.last(),
      email: c.email(),
      password: c.string(),
    })
      .findByText(/submit/i)
      .click()
      .findByText(/home/i)
      .should('exist');
  });

  it('should show an alert if the user exists', () => {
    const { email } = db.users[0];
    cy.fillRegistration({
      firstName: c.first(),
      lastName: c.last(),
      email,
      password: c.string(),
    })
      .findByText(/submit/i)
      .click()
      .findByText(/exists/i)
      .should('exist');
  });
});
