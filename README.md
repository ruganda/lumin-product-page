[![Build Status](https://travis-ci.org/ruganda/lumin-product-page.svg?branch=main)](https://travis-ci.org/ruganda/lumin-product-page)


# Project overview
- This is project challenge where I have recreating the luminskin.com product page and cart using a [GraphQL API](https://pangaea-interviews.now.sh/api/graphql)
- Much focus hab been put on the functionality rather than UI
- It is built with reactJs
- I have bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
- I have used a graphql client library such as [Apollo Client](https://www.apollographql.com/docs/react/)


# Product Page Reqiurements
- Each item should display the image, title, price and a "Add to Cart" button.
- For screens wider than 768px, it should show grid of 3 items, for less than 768px wide it should show a grid of two wide.

# Cart Reqiurements
- When a user clicks "Add to Cart" on an item it should open the cart sidebar and add the item in.
- If the item already exists it should increment the quantity.
- Clicking the + or - buttons will increase or descrease the quantity, if the quantity is 1 and the "-" button is pressed it should remove the item.
- In the top left there is a currency select, doing so should requery the GraphQL api with a new currency and update the prices.
- It should sum the items in the cart and display them in the correct selected currency.

# To run the Project
- clone the repo
- npm install
- npm start

# To run the tests
-  npm run test
