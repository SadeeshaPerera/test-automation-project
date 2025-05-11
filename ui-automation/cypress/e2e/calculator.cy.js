describe('Calculator Tests', () => {
    beforeEach(() => {
      cy.visit('http://localhost:5173')
    })
  
    it('should add two numbers correctly', () => {
      cy.get('[data-test=val1]').type('100')
      cy.wait(1000);
      cy.get('[data-test=operation]').select('add')
      cy.wait(1000);
      cy.get('[data-test=val2]').type('200')
      cy.wait(1000);
      cy.get('[data-test=calculate]').click()
      cy.wait(1000);
      cy.get('[data-test=result]').should('contain', '300')
      cy.wait(1000);
    })
  
    it('should subtract two numbers correctly', () => {
      cy.get('[data-test=val1]').type('200')
      cy.wait(1000);
      cy.get('[data-test=operation]').select('subtract')
      cy.wait(1000);
      cy.get('[data-test=val2]').type('50')
      cy.wait(1000);
      cy.get('[data-test=calculate]').click()
      cy.wait(1000);
      cy.get('[data-test=result]').should('contain', '150')
      cy.wait(1000);
    })
  
    it('should multiply two numbers correctly', () => {
      cy.get('[data-test=val1]').type('12')
      cy.wait(1000);
      cy.get('[data-test=operation]').select('multiply')
      cy.wait(1000);
      cy.get('[data-test=val2]').type('5')
      cy.wait(1000);
      cy.get('[data-test=calculate]').click()
      cy.wait(1000);
      cy.get('[data-test=result]').should('contain', '60')
      cy.wait(1000);
    })
  
    it('should handle invalid inputs', () => {
      cy.get('[data-test=calculate]').click()
      cy.wait(1000);
      cy.get('[data-test=result]').should('contain', '0')
      cy.wait(1000);
    })
  })
  