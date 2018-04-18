import React from 'react';
import PropTypes from 'prop-types';

class DonateForm extends React.Component {
  RaisedRef = React.createRef();

  static propTypes = {
    data: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
    targetReached: PropTypes.bool
  };

  handleSubmit = event => {
    const donation = parseFloat(this.RaisedRef.value.value);
    event.preventDefault();

    this.props.donateMoney('raised', donation);
    event.currentTarget.reset();
  };

  render() {
    return (
      <form className="a-form" onSubmit={this.handleSubmit}>
        <label htmlFor="Donate">Donate to this project</label>
        <input
          className="a-form__input"
          name="Donate"
          id="Donate"
          ref={this.RaisedRef}
          type="number"
          step=".01"
          required
        />
        <button
          className="a-form__submit"
          disabled={this.props.targetReached ? 'disabled' : ''}
          type="submit"
        >
          Donate
        </button>
      </form>
    );
  }
}

export default DonateForm;
