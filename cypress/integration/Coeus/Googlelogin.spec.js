describe('Visit the landingpage', function () {

    it('it visits the URL', function () {
        cy.visit("https://accounts.google.com/o/oauth2/auth/oauthchooseaccount?redirect_uri=storagerelay%3A%2F%2Fhttp%2Flocalhost%3A3000%3Fid%3Dauth435210&response_type=permission%20id_token&scope=email%20profile%20openid&openid.realm&client_id=372908462482-gicrn8r4bg3t2j0fs9vt5av62agmvlq8.apps.googleusercontent.com&ss_domain=http%3A%2F%2Flocalhost%3A3000&prompt&fetch_basic_profile=true&gsiwebsdk=2&flowName=GeneralOAuthFlow");

    })

    it('Find the Heading', function () {
        cy.get('#headingText').contains('Sign in')

    })

    it('Find the Textbox and enter the Email id', function () {
        cy.get('.CxRgyd').type('sharada.telkar1988@gmail.com')

    })
    it('click on the Next', function () {
        cy.get('#identifierNext > .VfPpkd-dgl2Hf-ppHlrf-sM5MNb > .VfPpkd-LgbsSe > .VfPpkd-RLmnJb').click();
        
    })

})