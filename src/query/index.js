import { gql } from "@apollo/client";

export const GET_CATEGORIES_AND_PRODUCTS = gql`
  query{
    categories{
      name
      products{
        id, 
        name, 
        category, 
        inStock, 
        description,
        brand, 
        gallery, 
        prices{currency{label, symbol}, amount}
        attributes{id,name,type,items{id, value, displayValue}}
      }
    }
  }
`

export const GET_CURRENCIES = gql`
  query{
    currencies{
      label
      symbol
    }
  }
`
export const GET_CATEGORIES = gql`
query{
  categories{
    name
  }
}
`