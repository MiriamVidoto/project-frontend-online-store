import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class ProductCard extends React.Component {
  render() {
    const { title, thumbNail, price, id } = this.props;
    return (
      <Link
        to={ `/productdetails/${id}` }
        data-testid="product-detail-link"
        id={ id }
      >
        <div data-testid="product">
          <h3>{ title }</h3>
          <img src={ thumbNail } alt={ title } />
          <p>{ price }</p>
        </div>
      </Link>
    );
  }
}

ProductCard.propTypes = {
  title: PropTypes.string,
  thumbNail: PropTypes.string,
  price: PropTypes.number,
  id: PropTypes.string,
}.required;

export default ProductCard;
