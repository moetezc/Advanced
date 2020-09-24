import React from 'react';
import './App.css';
import PropTypes from 'prop-types'

const ProductTable = ({props}) => (
   
    <table className="table">
      <thead>
        <tr>
          <th scope="col">Category</th>
          <th scope="col">Name</th>
          <th scope="col">Price</th>
        </tr>
      </thead>
      <tbody>
        { props.map(product => <tr>
        <td>{product.category}</td>
        <td>{product.name}</td>
        <td>{`${product.price} $`}</td>
        </tr>)}
      </tbody>
    </table>
    )
    ProductTable.propTypes={elem:PropTypes.exact({
        name:PropTypes.string.isRequired,
        price:PropTypes.number.isRequired,
        category:PropTypes.string.isRequired
    })

    }
export default ProductTable ;
