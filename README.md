# Weathershopper

🔔 Hi there,

<img width="600" alt="XXX" src="https://www.monkeyuser.com/2022/unit-tests/248-unit-tests.png" class="center">

### Introduction

Test cases are written using Cypress Framework with Typescript and CICD actions over Circle CI with Docker and Github actions for Weathershopper website which has test task defined in the tooltip.

---

# Getting Started

To install the dependencies you're gonna need to authenticate your npm client.
After cloning the repo, In the command line, install the package dependencies using the command `npm install` or `npm i`

# Testing Framework
Cypress

# Local Setup
UnZip this file locally and/or clone the repo & open it in IDE

# Running E2E tests locally

Run the tests using the command `npm run test`. This brings the Cypress runner. You can now run the tests.

# Github action

yml file has been added and github actions are running successfully

# Circle CI with Docker (iOS and Android included)

yml file has been added but Circle CI actions are *not* running successfully because I have ran out of free credits to test it properly.
You may set your own Circle CI actions accordingly using yml file in this repo.


***Side note for understanding***

**1. LandingPage.spec.ts**
The script assesses the website's landing page, leveraging the weather data exhibited to determine the appropriate direction. If the temperature falls below 19 degrees, it directs to the moisturizer shop; if above 34 degrees, to the sunscreen shop.

**2. SunscreenPage.spec.ts**
The script examines the sunscreen product page on the website. It gathers information on all sunscreen products and identifies the least expensive SPF-50 and SPF-30 items. Subsequently, it places these selected products into the shopping cart. In case no suitable product meeting the criteria is discovered, an appropriate message is recorded.

**3. MoisturizerPage.spec.ts**
This script verifies the moisturizer product page of the website. It retrieves all moisturizer product elements and identifies the least expensive moisturizers containing aloe and almond ingredients. These selected products are subsequently added to the cart. If no such product is discovered, a corresponding message is logged.

**4. CartPage.spec.ts**
This script verifies the functionality of the cart and payment pages on the website. It adds two products, one with 'SPF-30' and another with 'SPF-50', to the cart. After verifying the items in the cart, the script proceeds to the payment page. It fills out the card details, submits the form, and finally verifies if the payment was successful.

**Base.ts**

The Base.ts file contains the CSS selectors that build upon Page Object Model (POM). The selectors are categorized into distinct groups according to the pages they correspond to.

**Weathershopper.ts**

The Weathershopper.ts This class provides functions designed to aid assertions within the Weather Shopper application.
