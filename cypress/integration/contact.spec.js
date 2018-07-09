import { make } from './lib/Make'

describe('Test contact form on macbook', function() {
    it('Checks text is correct', function() {
        cy.viewport('macbook-13')
        cy.visit('https://andreobrien.me/contact')
        cy.contains('Contact').should('be.visible').click()
        // cy.visit('https://andreobrien.me/contact') // !! cant load page via URL due to Nginx bug

        cy.contains('Get in touch').should('be.visible')

        cy.contains('You can also find out more about me through').should('be.visible')
    })

    it('Fills in contact form', function() {
        cy.viewport('macbook-13')

        cy.get('#name').click().type( make.string(1) )

        cy.get('#email').click().type( make.string(1) )

        cy.get('#memo').click().type( make.string(1) )

        cy.get('form .send').click()
    })
})

describe('Test contact form on iphone-6', function() {
    it('Checks text is correct', function() {
        cy.visit('https://andreobrien.me/contact')
        cy.viewport('iphone-6')
        cy.get('div .hamburger').should('be.visible').click()
        cy.contains('Contact').click()
        // cy.visit('https://andreobrien.me/contact')

        cy.contains('Get in touch').should('be.visible') // !! typography is off (line spacing)

        cy.contains('You can also find out more about me through').should('be.visible')
    })

    it('Fills in contact form', function() {
        cy.viewport('iphone-6')

        cy.get('#name').click().type( make.string(1) )

        cy.get('#email').click().type( make.string(1) )

        cy.get('#memo').click().type( make.string(1) )

        cy.get('form .send').click()
    })
})