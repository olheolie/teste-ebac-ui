/// <reference types= "cypress"/>
const perfil = require('../../fixtures/perfil.json')
describe('Funcionalidade: login', () => {
    
    beforeEach(() => {
        cy.visit('minha-conta/')
    });

    afterEach(() => {
        cy.screenshot()
    });
    it ('Deve fazer login com sucesso', () =>{
        cy.get('#username').type('olie.olhe@teste.com')
        cy.get('#password').type('teste123')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá, olie.olhe (não é olie.olhe? Sair)')

    }) 

    it('deve exibir uma mensagem de erro ao inserir usuário inválido', () => {
        
        cy.get('#username').type('oliveroliveira@teste.com')
        cy.get('#password').type('teste123')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-error').should('exist')
    });

    it('deve exibir uma mensagem de erro ao inserir senha inválida', () => {
        
        cy.get('#username').type('olie.olhe@teste.com')
        cy.get('#password').type('testeeee3')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-error').should('contain', 'Erro: A senha fornecida para o e-mail olie.olhe@teste.com está incorreta. Perdeu a senha?')
        cy.get('.woocommerce-error').should('exist')
    });
    it('Deve fazer login com sucesso - Usando massa de dados', () => {
        cy.get('#username').type(perfil.usuario)
        cy.get('#password').type(perfil.senha)
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá, olie.olhe (não é olie.olhe? Sair)')
    });
    it.only('Deve fazer login com sucesso - Usando Fixture', () => {
        cy.fixture('perfil').then(dados => {
            cy.get('#username').type(dados.usuario , {log: false})
            cy.get('#password').type(dados.senha , {log: false})
            cy.get('.woocommerce-form > .button').click()
            cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá, olie.olhe (não é olie.olhe? Sair)')
        })
        
       
    });
});