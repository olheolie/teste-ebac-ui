/// <reference types= "cypress"/>

describe('Funcionalidade: login', () => {
    
    it ('Deve fazer login com sucesso', () =>{
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
        cy.get('#username').type('olie.olhe@teste.com')
        cy.get('#password').type('teste123')
        cy.get('.woocommerce-form > .button').click()

        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá, olie.olhe (não é olie.olhe? Sair)')

    }) 
});