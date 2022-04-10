import { mount } from '@cypress/vue';
import MessageForm from './MessageForm.vue';

describe('MessageForm', () => {
  it('should emit "send" event', () => {
    mount(MessageForm);

    cy.get('[data-test="messageText"]').type('Hello World');

    cy.contains('send').click().then(() => {
      console.log('Cypress.vueWrapper.emitted :>> ', Cypress.vueWrapper.emitted);
      expect(Cypress.vueWrapper.emitted("send")[0]).toEqual(['Hello World']);
    })

    // cy.get('[data-test="messageText"]').should('have.value', '');

    // cy.contains('Hello World');
  });
})
