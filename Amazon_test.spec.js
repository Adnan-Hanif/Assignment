const { waitForDebugger } = require("inspector")
const { hasUncaughtExceptionCaptureCallback } = require("process")


describe("Amazon",()=>{
    it('Base Link',()=>{
        cy.visit('https://www.amazon.de/')
        cy.get("[id='sp-cc-accept']").click()
        
    })
    it("test 1",()=>{
        cy.get("[id='twotabsearchtextbox']").type("Shoes").type('{enter}')
        cy.wait(1500)
        cy.get("[id='sp-cc-accept']").click()
        cy.get("[class='a-section a-spacing-small a-spacing-top-small']>span[class='a-color-state a-text-bold']").should('contain','Shoes')
        cy.get('[class="a-section a-spacing-none a-spacing-top-small s-title-instructions-style"]>h2').contains('Herren Zipflex M Hiking Shoe').click()
       
        })
    })

       

