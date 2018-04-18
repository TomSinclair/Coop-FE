import React from 'react';
import DonateForm from './DonateForm';
import DonationDetails from './DonationDetails';

class App extends React.Component {
  state = {
    data: {
      raised: 0,
      target: 0
    },
    percentage: 0,
    targetReached: false
  };

  componentDidMount() {
    fetch('https://coop-mock-test-api.herokuapp.com/')
      .then(response => response.json())
      .then(data => {
        this.setState({ data }, this.checkTotal);
      });
  }

  donateMoney = (key, donation) => {
    const data = { ...this.state.data };

    data[key] = data[key] + donation;
    this.setState({ data });
    this.checkTotal(donation);
  };

  checkTotal = (donation = 0) => {
    const data = { ...this.state.data };
    const percentage = Math.round((data.raised + donation) / data.target * 100);
    let targetReached = this.state.targetReached;

    if (percentage >= 100) {
      targetReached = true;
      this.setState({ targetReached });
    }

    this.setState({ percentage });
  };

  render() {
    return (
      <section className="m-donate">
        <DonationDetails
          data={this.state.data}
          percentageComplete={this.state.percentage}
        />
        <DonateForm
          data={this.state.data}
          donateMoney={this.donateMoney}
          checkTotal={this.checkTotal}
          targetReached={this.state.targetReached}
        />
        <footer className="m-donate__footer">
          <a className="m-donate__footerLink" href="/">
            Learn more about causes local to you
          </a>
        </footer>
      </section>
    );
  }
}

export default App;
