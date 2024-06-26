/// <reference types= "cypress"/>
import produtosPage from "../../support/page-objects/produtos.page";
describe('Funcionalidade: Produtos', () => {
    
    before(() => {
        produtosPage.visitarUrl()
    });

    it('Deve selecionar um produto da lista ', () => {
      produtosPage.buscarProdutoLista('Abominable Hoodie')
        cy.get('#tab-title-description > a').should('contain', 'Descrição')

    });

    it.only('Deve buscar um produto com sucesso', () => {
        let produto = 'Aero Daily Fitness Tee'
        produtosPage.buscarProduto(produto)
        cy.get('#tab-title-description > a').should('contain', produto)

    });

    it('Deve adicionar produto ao carrinho', () => {
        
    });
});