describe("Calculator", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  })

  it('should have working number buttons', () => {
    cy.get('#number2').click();
    cy.get('.display').should('contain', '2')
  })
  it('should update the display of the running total', () => {
    cy.get('#number2').click();
    cy.get('#number1').click()
    cy.get('.display').should('contain', '21')
  })
  it('should do the arithmetical operations update the display with the result of the operation', () => {
    cy.get('#number2').click();
    cy.get('#operator-add').click();
    cy.get('#number1').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '3')

  })
  it('should multiple operations be chained together', () => {
    cy.get('#number2').click();
    cy.get('#operator-add').click();
    cy.get('#number1').click();
    cy.get('#operator-multiply').click();
    cy.get('#number7').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '21')

  })
  it('should output as expected for a negative number', () => {
    cy.get('#number5').click();
    cy.get('#operator-subtract').click();
    cy.get('#number9').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '-4')
    
  })
  it('should output as expected for a decimal number', () => {
    cy.get('#number5').click();
    cy.get('#operator-subtract').click();
    cy.get('#number2').click();
    cy.get('#decimal').click()
    cy.get('#number5').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '2.5')
    
  })
  it('should output as expected for a very large number', () => {
    cy.get('#number9').click();
    cy.get('#operator-multiply').click();
    cy.get('#number9').click();
    cy.get('#operator-multiply').click();
    cy.get('#number9').click();
    cy.get('#operator-multiply').click();
    cy.get('#number9').click();
    cy.get('#operator-multiply').click();
    cy.get('#number9').click();
    cy.get('#operator-multiply').click();
    cy.get('#number9').click();
    cy.get('#operator-multiply').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '4782969')
    
  })

  it('should test what does the code do in exceptional circumstances e.g if you divide by zero', () => {
    cy.get('#number9').click();
    cy.get('#operator-divide').click();
    cy.get('#number0').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', 'Error')
    
  })

})

// Do the number buttons update the display of the running total?
// Do the arithmetical operations update the display with the result of the operation?
// Can multiple operations be chained together?
// Is the output as expected for a range of numbers (for example, positive, negative, decimals and very large numbers)?
// What does the code do in exceptional circumstances? Specifically, if you divide by zero, what is the effect? Write a test to describe what you'd prefer to happen,
//  and then correct the code to make that test pass (you will need to modify the Calculator model to meet this requirement).