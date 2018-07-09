describe('Test nav on macbook', function() {
    it('Checks nav exists', function() {
        cy.viewport('macbook-13')

        cy.visit('https://andreobrien.me')

        cy.get('div .hamburger').should('not.be.visible')

        cy.contains('Work').click()
        cy.url().should('contain', '/work')

        cy.contains('About').click()
        cy.url().should('contain', '/about')

        cy.contains('Contact').click()
        cy.url().should('contain', '/contact')
    })
})

describe('Test nav on iphone-6', function() {
    it('Checks nav exists', function() {
        cy.viewport('iphone-6')

        cy.visit('https://andreobrien.me')

        cy.get('div .hamburger').should('be.visible').click()

        cy.contains('Work').should('be.visible').click()
        cy.url().should('contain', '/work')

        cy.get('div .hamburger').should('be.visible').click()

        cy.contains('About').should('be.visible').click()
        cy.url().should('contain', '/about')

        cy.get('div .hamburger').should('be.visible').click()

        cy.contains('Contact').should('be.visible').click()
        cy.url().should('contain', '/contact')
    })
})