
describe('Visit wordpress Admin site', () => {

  
    
  it('Login user and verify if the backend was properly reached', () => {

      //Visit wordpress admin panel    
      cy.visit('http://localhost/cypress-wordpress/wp-admin/index.php')
      //Get username field selector and type username 
      cy.get('#user_login')
      .clear()
      .invoke('val','Admin')
      .should("have.value", 'Admin');
      //Get password field selector and type password
      cy.get('#user_pass')
      .clear()
      .invoke('val','Admin@123')
      .should("have.value", 'Admin@123');
      //Click on login button
      cy.get('#wp-submit')
      .click()
      //Verfy Welcome to wordpress! text
      cy.get('.welcome-panel-header > h2')
      .should('contain.text','Welcome to WordPress!')
      //Verify if the Advanced Ads is visible in the side bar
      cy.get('#toplevel_page_advanced-ads > .wp-has-submenu > .wp-menu-name')
      .should('contain.text', 'Advanced Ads')
      .click()

      //Click on Ads
      cy.get('#toplevel_page_advanced-ads > .wp-submenu > :nth-child(3) > a')
      .should('contain.text','Ads')
      .click()
      //Verify text "No Ads found" if there is Ads
      cy.get('.colspanchange')
      .should('contain.text','No Ads found')
      //verify text "Ads"
      cy.get('.wp-heading-inline')
      .should('contain.text', 'Ads')
      
      //Verify if New Ad button is visible
      cy.get('.page-title-action')
      .should('be.visible')
      .click()
      //Type dummay title
      cy.get('#title')
      .type('Dummay ads')
      //Select dummay radia button
      cy.get('.advanced-ads-type-list-dummy > label')
      .should('be.visible')
      .click()
      //click on Add description button
      cy.get('#advads-ad-description > button')
      .should('be.visible')
      .click()
      //Type description
      cy.get('#advads-ad-description > textarea')
      .type('Dummay description')
      //Click on publish button
      cy.get('#publish')
      .should('be.visible')
      .click()

      //Click again on Ads in navbar and verify if ads added succesfully
      //Click on Ads
      cy.get('#toplevel_page_advanced-ads > .wp-submenu > :nth-child(3) > a')
      .should('contain.text','Ads')
      .click()
      //Verify if the "Dummay ads" title is present
      cy.get('.row-title')
      .should('contain.text', 'Dummay ads')
      //Verify ad details
      cy.get('.advads-ad-type')
      .should('contain.text', "Dummy")

      //Delete Ads
      //Select ads
      cy.get('#cb').should('be.visible').click()
      //Click on Bulk Action button 
      cy.get('#bulk-action-selector-bottom')
      .select('Move to Trash')

      // //click on Apply button
      cy.get('#doaction2')
      .should('be.visible')
      .click()
 });


});