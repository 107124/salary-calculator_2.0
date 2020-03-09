import React, { Component } from "react";

export default class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      salaryInput: "",
      salary: 0.0,
      yearly: 0.0,
      monthly: 0.0,
      biweekly: 0.0,
      weekly: 0.0,
      daily: 0.0,
      hourly: 0.0,
      inputError: ""
    };
  }

  calculate = args => {
    let salary = args;
    let yearly = salary;
    let monthly = (salary / 12).toFixed(2);
    let biweekly = (salary / 24).toFixed(2);
    let weekly = (salary / 24 / 2).toFixed(2);
    let daily = (weekly / 5).toFixed(2);
    let hourly = (daily / 8).toFixed(2);
    this.setState({
      salaryInput: salary,
      salary: salary,
      yearly: yearly,
      monthly: monthly,
      biweekly: biweekly,
      weekly: weekly,
      daily: daily,
      hourly: hourly,
      inputError: ""
    });
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value,
      salary: event.target.value,
      errorText: ""
    });
    this.calculate(event.target.value);
  };

  toClear = () => {
    this.setState({
      salaryInput: "",
      salary: null,
      yearly: null,
      monthly: null,
      biweekly: null,
      weekly: null,
      daily: null,
      hourly: null,
      inputError: ""
    });
  };

  doNothing = event => {
    console.log("Enter attempted");
    event.preventDefault();
  };

  render() {
    return (
      <div className="calculator-container">
        <form onSubmit={this.doNothing}>
          <input
            type="number"
            name="salaryInput"
            placeholder="Enter a salary..."
            value={this.state.salaryInput}
            onChange={this.handleChange}
          />
          <div className="output">
            <div className="calculated">
              <span className="font-1">Yearly:</span>
              <span className="font-2"> $</span>
              {this.state.yearly}
            </div>
            <div className="calculated">
              <span className="font-1">Monthly:</span>
              <span className="font-2"> $</span>
              {this.state.monthly}
            </div>{" "}
            <div className="calculated">
              <span className="font-1">Bi-weekly:</span>
              <span className="font-2"> $</span>
              {this.state.biweekly}
            </div>{" "}
            <div className="calculated">
              <span className="font-1">Weekly:</span>
              <span className="font-2"> $</span>
              {this.state.weekly}
            </div>{" "}
            <div className="calculated">
              <span className="font-1">Daily:</span>
              <span className="font-2"> $</span>
              {this.state.daily}
            </div>{" "}
            <div className="calculated">
              <span className="font-1">Hourly:</span>
              <span className="font-2"> $</span>
              {this.state.hourly}
            </div>{" "}
            <div>
              <span className="divider">___________________</span>
            </div>
          </div>
        </form>
      </div>
    );
  }
}
