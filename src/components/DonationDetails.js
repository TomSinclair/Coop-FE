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
        <h1>Help refugees rebuild their lives and communities in Manchester</h1>
        <h2>Manchester Refugee Support Network (MRSN)</h2>
        <span className="m-donate__progressBar">
          <span
            className="m-donate__percentageComplete"
            style={{ width: `${percent}%` }}
          />
        </span>
        <div className="m-splitContent">
          <div className="m-splitContent__col">
            <p>
              Raised so far
              <span className="oversized">
                {formatPrice(parseFloat(raised))}
              </span>
            </p>
          </div>
          <div className="m-splitContent__col">
            <p>
              Target
              <span className="oversized">
                {formatPrice(parseFloat(target))}
              </span>
            </p>
          </div>
        </div>
      </section>
    );
  }
}

export default DonationDetails;
