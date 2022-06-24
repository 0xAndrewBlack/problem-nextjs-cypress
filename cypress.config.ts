import { defineConfig } from 'cypress';

export default defineConfig({
	e2e: {
		baseUrl: 'http://localhost:3000/',
		specPattern: ['test/cypress/e2e/*.cy.ts', 'test/cypress/e2e/*.cy.js'],
		supportFile: false,
	},
});
