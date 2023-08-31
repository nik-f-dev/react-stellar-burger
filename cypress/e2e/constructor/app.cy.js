
describe('service is available', function() {
  before(function() {
    cy.visit('/');
    cy.location().should((location) => {
      expect(location.pathname).to.eq('/');
    })
    cy.intercept('GET', '/api/ingredients', {fixture: 'ingredients.json'});
  });

  it('should be available on localhost:3000', function() {
    cy.get('[class^=burger-ingredient_element]').contains('Краторная булка N-200i').should('exist').as('bunElement');
    cy.get('p[class^=burger-constructor_fieldPrice]').should('exist').contains('0').as('totalPrice');
    cy.get('[class^=burger-constructor_section]').should('exist').as('dropContainer');

    cy.get('@bunElement').click();
    cy.get('[class^=modal_closeButton]').should('exist').as('exitButton');
    cy.get('@exitButton').click();

    cy.get('@bunElement').trigger('dragstart');
    cy.get('@dropContainer').trigger('drop');
    cy.get('@totalPrice').contains('2510');

    cy.get('button').contains('Оформить заказ').should('exist').click();

    cy.location().should((location) => {
      expect(location.pathname).to.eq('/login');
    })

    cy.get('input[type^=email]').should('exist').as('emailInput');
    cy.get('@emailInput').type('nikita@mail.ru');
    cy.get('@emailInput').should('have.value', 'nikita@mail.ru');

    cy.get('input[type^=password]').should('exist').as('passwordInput');
    cy.get('@passwordInput').type('1111{enter}');
    cy.get('@passwordInput').should('have.value', '1111');

    cy.intercept('POST', '/api/auth/login', {fixture: 'login.json'});
    cy.intercept('GET', '/api/auth/user', {fixture: 'auth.json'});

    cy.location().should((location) => {
      expect(location.pathname).to.eq('/');
    })

    cy.get('button').contains('Оформить заказ').should('exist').click();

    cy.location().should((location) => {
      expect(location.pathname).to.eq('/order-modal');
    })

    cy.get('div[class^=modal_modalBody]').should('exist');

    cy.intercept('POST', '/api/orders', {fixture: 'order.json'});

    cy.get('button[class^=modal_closeButton]').should('exist').click();

    cy.location().should((location) => {
      expect(location.pathname).to.eq('/');
    })
  });
});
