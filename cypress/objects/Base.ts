export const Base= {
    landingPage: {
        temperature: '#temperature',
        moisturizerButton: '[href="/moisturizer"]',
        sunscreenButton: '[href="/sunscreen"]'
    },
    productCard: {
        allProducts: ".text-center.col-4",
        name: ".text-center.col-4 .font-weight-bold",
        price: ".text-center.col-4 > p:nth-child(3)",
        addButton: '.btn',
        cartButton: '#cart'
    },
    cart: {
        base: '.table',
        payButton: '.stripe-button-el',
        stripeIframe: '//iframe'
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