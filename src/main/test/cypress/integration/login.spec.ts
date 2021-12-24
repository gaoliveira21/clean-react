describe('Login', () => {
  it('Should load with correct initial state', () => {
    console.log('baseUrl', Cypress.config('baseUrl'))
    cy.visit('/login')
  })
})
