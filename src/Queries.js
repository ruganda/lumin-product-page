import { gql } from '@apollo/client';


export const FETCH_PRODUCTS = gql`
  query FetchProducts($currency: Currency) {
    products{
      id
      title
      image_url
      price(currency: $currency)
      product_options{
        title
        prefix
        suffix
        options{
          id
          value
        }
      }

    }
  }
`;

export const FETCH_CURRENCIES = gql`
  query FetchCurrencies{
    currency
  }
`;