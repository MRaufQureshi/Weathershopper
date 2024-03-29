export const Base= {
    landingPage: {
        temperature: '#temperature',
        moisturizerButton: '[href="/moisturizer"]',
        sunscreenButton: '[href="/sunscreen"]'
    },
    productCard: {
        allProducts: '.text-center.col-4',
        name: ".font-weight-bold",
        price: "> p:nth-child(3)",
        addButton: '.btn.btn-primary',
        cartButton: '#cart'
    },
    cart: {
        base: '.table',
        payButton: '.stripe-button-el',
        stripeIframe: 'iframe'
    },
    payment: {
        email: '#email',
        cardNumber: '#card_number',
        expiryDate: '#cc-exp',
        cvcCode: '#cc-csc',
        zipCode: '#billing-zip',
        submitButton: '#submitButton'
    },
    confirmation: {
        header: 'h2'
    }
}