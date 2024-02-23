import { Base } from "../objects/Base";

let minPrice = Number.MAX_VALUE;
let minPriceProduct;
export class Weathershopper {

    public static assertLeastExpensiveMositurizerWithAloe(){
        cy.get(Base.productCard.allProducts)
            .each(($product) => {
                const title = $product.find(Base.productCard.name).text();
                const price = parseFloat($product.find(Base.productCard.price).text().replace('Price: Rs. ', ''));

                if (title.includes('Aloe') && price < minPrice) {
                    minPrice = price;
                    minPriceProduct = $product;
                }
            })
            .then(() => {
                if (minPriceProduct) {
                    minPriceProduct.find(Base.productCard.addButton).click();
                } else {
                    throw new Error('No product containing Aloe found');
                }
            });
    }
    public static assertLeastExpensiveMositurizerWithAlmond(){
        cy.get(Base.productCard.allProducts)
            .each(($product) => {
                const title = $product.find(Base.productCard.name).text();
                const price = parseFloat($product.find(Base.productCard.price).text().replace('Price: Rs. ', ''));

                if (title.includes('Almond') && price < minPrice) {
                    minPrice = price;
                    minPriceProduct = $product;
                }
            })
            .then(() => {
                if (minPriceProduct) {
                    minPriceProduct.find(Base.productCard.addButton).click();
                } else {
                    throw new Error('No product containing Almond found');
                }
            });
    }
}