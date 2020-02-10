/* eslint-disable no-undef */
describe('repo list UI', () => {
    it('should add a new repo', () => {
        cy.visit('http://localhost:3000')
        cy.get('[data-cy=input-test]').type('https://github.com/LuisMesquita/Tutorial-Sprite-kit')
        cy.get('[data-cy=btn-test]').click()
        cy.get('[data-cy=input-test]').type('https://github.com/thiagocossta/Stress-Monitor-Moodar')
        cy.get('[data-cy=btn-test]').click()
        cy.get('[data-cy=li-test]').should('to.have.length', 2)
        cy.contains('https://github.com/LuisMesquita/Tutorial-Sprite-kit').should('to.have.length', 1)
        cy.contains('https://github.com/thiagocossta/Stress-Monitor-Moodar').should('to.have.length', 1)
    })
})