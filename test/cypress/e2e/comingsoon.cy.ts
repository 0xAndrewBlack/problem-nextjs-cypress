describe('Basic Test (Checks the page for visibility)', () => {
	beforeEach(() => {
		cy.visit('/');
	});

	it('displays the resources text', () => {
		cy.get('h1').contains('Welcome to my site!');
	});
	it('displays the coming soon text', () => {
		cy.get('code').contains('Coming Soon!');
	});
	it('renders the Netlify logo image', () => {
		cy.get('img')
			.should('be.visible')
			.and(($img) => {
				expect($img[0].naturalWidth).to.be.greaterThan(0);
			});
	});
});

export {};
