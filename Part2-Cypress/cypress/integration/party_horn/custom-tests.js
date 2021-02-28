describe('Party Horn Tests', () => {
  beforeEach(() => {
    cy.visit('http://127.0.0.1:5501/Part2-Cypress/');
  });

  it('First Test', () => {
    expect(true).to.equal(true);
  });

  it('Slider changes when volume input changes', () => {
    expect(true).to.equal(true);
    cy.get('#volume-number').clear().type('75');
    cy.get('#volume-slider').then(function($el){
      expect($el).to.have.value(75);
    });
  });

  it('Volume changes when slider input changes', () =>{
    cy.get('#volume-slider').invoke('val', '33').trigger('input');
    cy.get('#volume-number').then(function($el){
      expect($el).to.have.value(33);
    });
  });

  it('Audio changes when slider input changes', () =>{
    cy.get('#volume-slider').invoke('val', '33').trigger('input');
    cy.get('#horn-sound').then(function($el){
      expect($el).to.have.prop('volume',.33);
    });
  });

  it('auido src changes', () =>{
    cy.get('#radio-party-horn').check();
    cy.get('#horn-sound').then(function($el){
      expect($el).to.have.prop('src', 'http://127.0.0.1:5501/Part2-Cypress/assets/media/audio/party-horn.mp3');
      });
  });

  it('image src changes', () =>{
    cy.get('#radio-party-horn').check();
    cy.get('#sound-image').then(function($el){
      expect($el).to.have.prop('src', 'http://127.0.0.1:5501/Part2-Cypress/assets/media/images/party-horn.svg');
    });
  });

  it('Volume Icon smaller than 33', () =>{
    cy.get('#volume-number').clear().type('23');
    cy.get('#volume-image').then(function($el){
      expect($el).to.have.prop('src','http://127.0.0.1:5501/Part2-Cypress/assets/media/icons/volume-level-1.svg');
    });
  });

  it('Volume Icon smaller than 65 bigger than 33', () =>{
    cy.get('#volume-number').clear().type('53');
    cy.get('#volume-image').then(function($el){
      expect($el).to.have.prop('src','http://127.0.0.1:5501/Part2-Cypress/assets/media/icons/volume-level-2.svg');
    });
  });

  it('Volume Icon bigger than 65', () =>{
    cy.get('#volume-number').clear().type('73');
    cy.get('#volume-image').then(function($el){
      expect($el).to.have.prop('src','http://127.0.0.1:5501/Part2-Cypress/assets/media/icons/volume-level-3.svg');
    });
  });

  it('empty box check honk', () =>{
    cy.get('#volume-number').clear();
    cy.get('#honk-btn').then(function($el){
      expect($el).to.have.prop('disabled',true);
    });
  });

  it('non number check honk', () =>{
    cy.get('#volume-number').clear().type('randomletters');
    cy.get('#honk-btn').then(function($el){
      expect($el).to.have.prop('disabled',true);
    });
  });

  it('Less than Error', () =>{
    cy.get('#volume-number').clear().type('-1');
    cy.get('#volume-number:invalid').should('have.length', 1);
    cy.get('#volume-number').then(($el) => {
      expect($el[0].validationMessage).to.eq('Value must be greater than or equal to 0.')
    });
  });

  it('Greater than Error', () =>{
    cy.get('#volume-number').clear().type('101');
    cy.get('#volume-number:invalid').should('have.length', 1);
    cy.get('#volume-number').then(($el) => {
      expect($el[0].validationMessage).to.eq('Value must be less than or equal to 100.')
    });
  });

});
