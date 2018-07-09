describe('Test homepage on macbook', function() {
    it('Checks heading is correct', function() {
        cy.viewport('macbook-13')

        cy.visit('https://andreobrien.me')

        cy.contains('Andre OBrien Web Developer').should('be.visible') 
    })

    it('Cheacks subheading is correct', function() {
        cy.viewport('macbook-13')

        cy.contains('Full-Stack Developer | JavaScript Specialist').should('be.visible') 
    })
})

describe('Test homepage on iphone-6', function() {
    it('Checks heading is correct', function() {
        cy.viewport('iphone-6')

        cy.visit('https://andreobrien.me')

        cy.contains('Andre OBrien Web Developer').should('be.visible') 
    })

    it('Cheacks subheading is correct', function() {
        cy.viewport('iphone-6')
        
        cy.contains('Full-Stack Developer | JavaScript Specialist').should('be.visible') 
    })
})