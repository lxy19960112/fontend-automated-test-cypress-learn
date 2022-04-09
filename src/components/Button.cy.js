import Button from './Button.vue';
import { mount } from '@cypress/vue';

describe("Button", () => {
  it("init", () => {
    mount(Button)
    cy.contains("click").click()
  })
})
