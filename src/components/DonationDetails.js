import React from 'react';
import PropTypes from 'prop-types';
import { formatPrice } from '../helpers';

class DonationDetails extends React.Component {
  RaisedRef = React.createRef();

  static propTypes = {
    data: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
    percentageComplete: PropTypes.number
  };

  render() {
    const { raised, target } = this.props.data;
    const percent = this.props.percentageComplete;

    return (
      <section className="m-donate__content">
        <p>Help refugees rebuild their lives and communities in Manchester</p>
        <p>Manchester Refugee Support Network (MRSN)</p>
        <span className="m-donate__progressBar">
          <span
            className="m-donate__percentageComplete"
            style={{ width: `${percent}%` }}
          />
        </span>
        <p>
          Raised so far<br />
          {formatPrice(parseFloat(raised))}
        </p>
        <p>
          Target<br />
          {formatPrice(parseFloat(target))}
        </p>
      </section>
    );
  }
}

export default DonationDetails;
