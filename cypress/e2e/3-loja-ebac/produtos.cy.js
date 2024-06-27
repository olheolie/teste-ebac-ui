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

    it('Deve buscar um produto com sucesso', () => {
        let produto = 'Aero Daily Fitness Tee'
        produtosPage.buscarProduto(produto)
        cy.get('.product_title').should('contain', produto)
    });
    
    it('|Deve visitar a página do produto', () => {
        produtosPage.visitarProduto('Aether Gym Pant')
        cy.get('.product_title').should('contain', 'Aether Gym Pant')
    });

    it('Deve adicionar produto ao carrinho', () => {
        let qtd = 4
        produtosPage.visitarProduto('Aether Gym Pant')
        produtosPage.addProdutoCarrinho('32', 'Blue', qtd)
        cy.get('.woocommerce-message').should('contain', qtd + ' × “Aether Gym Pant” foram adicionados no seu carrinho.')

    });
    it.only('Deve adicionar produto ao carrinho', () => {
        cy.fixture('produtos').then(dados => {
            produtosPage.visitarProduto(dados[0].nomeProduto)
            produtosPage.addProdutoCarrinho(
                dados[0].tamanho,
                dados[0].cor,
                dados[0].quantidade)
            cy.get('.woocommerce-message').should('contain', dados[0].nomeProduto)
    })

       

    });
});