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
      <form className="m-form" onSubmit={this.handleSubmit}>
        <label className="m-form__label" htmlFor="Donate">
          Donate to this project
        </label>
        <div className="m-form__inputWrapper">
          <input
            className="m-form__input"
            name="Donate"
            id="Donate"
            ref={this.RaisedRef}
            type="number"
            step=".01"
            required
          />
        </div>
        <button
          className="m-form__submit"
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
