Cypress.Commands.add('fillMandatoryFieldsAndSubmit',function(){
    cy.get('#firstName').type('Mateus')
    cy.get('#lastName').type('Morais')
    cy.get('#email').type('mateusmoraais@gmail.com')
    cy.get('#phone').type('13996150093')
    cy.get('#open-text-area').type('Teste')
   // cy.get('button[type="submit"').click()
   cy.contains('button','Enviar').click()

})