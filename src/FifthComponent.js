import React, { Component } from "react";
import "./Form1.css";
import "./Panmain.css";
import $ from "jquery";
import indicator from "./instuction.png";
import datefield from "./datefield.jpeg";

class FifthComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isModalEnabled: false,
      isIndicatorEnabled: false,

      errors: {
        Day: "",
        Month: "",
        Year: "",
        errorid: "1"
      },
      data: {
        Day1: "",
        Day2: "",
        Day: "",
        Month1: "",
        Month2: "",
        Month: "",
        Year1: "",
        Year2: "",
        Year3: "",
        Year4: "",
        Year: "",
        dataid: "1"
      }
    };
  }

  handleBackspaceKey = (event, backFocus, onFocus) => {
    const key = event.key;
    if (
      (key === "Backspace" || key === "Delete") &&
      event.target.value === ""
    ) {
      $(`${backFocus}`).focus();
    } else {
      $(`${onFocus}`).focus();
    }
  };

  handleInput = event => {
    let temp = this.state.data;
    let { name, value } = event.target;
    temp[name] = value;
    this.setState({ temp });

    localStorage.setItem("localdata", JSON.stringify(this.state.data));
    localStorage.setItem("localerror", JSON.stringify(this.state.errors));
  };

  handleDay1 = event => {
    this.handleInput(event);
    this.validateDay(event);
    event.target.value === "" ? $("#Day1").focus() : $("#Day2").focus();
  };

  handleDay2 = event => {
    this.handleInput(event);
    this.validateDay(event);
    event.target.value === "" ? $("#Day1").focus() : $("#Day2").focus();
  };

  ResetDayError = () => {
    $("#Day1").css({
      "border-top-color": "",
      "border-bottom-color": "",
      "border-left-color": ""
    });
    $("#Day2").css({
      "border-top-color": "",
      "border-bottom-color": "",
      "border-right-color": ""
    });
  };

  HighlightDayError = () => {
    $("#Day1").css({
      "border-top-color": "red",
      "border-bottom-color": "red",
      "border-left-color": "red"
    });
    $("#Day2").css({
      "border-top-color": "red",
      "border-bottom-color": "red",
      "border-right-color": "red"
    });
  };

  handleMonth1 = event => {
    this.handleInput(event);
    this.validateMonth(event);
    event.target.value === "" ? $("#Month1").focus() : $("#Month2").focus();
  };

  handleMonth2 = event => {
    this.handleInput(event);
    this.validateMonth(event);
    event.target.value === "" ? $("#Month1").focus() : $("#Month2").focus();
  };

  ResetMonthError = () => {
    $("#Month1").css({
      "border-top-color": "",
      "border-bottom-color": "",
      "border-left-color": ""
    });
    $("#Month2").css({
      "border-top-color": "",
      "border-bottom-color": "",
      "border-right-color": ""
    });
  };

  HighlightMonthError = () => {
    $("#Month1").css({
      "border-top-color": "red",
      "border-bottom-color": "red",
      "border-left-color": "red"
    });
    $("#Month2").css({
      "border-top-color": "red",
      "border-bottom-color": "red",
      "border-right-color": "red"
    });
  };

  handleYear1 = event => {
    this.handleInput(event);
    this.validateYear(event);
    event.target.value === "" ? $("#Year1").focus() : $("#Year2").focus();
  };

  handleYear2 = event => {
    this.handleInput(event);
    this.validateYear(event);
    event.target.value === "" ? $("#Year2").focus() : $("#Year3").focus();
  };

  handleYear3 = event => {
    this.handleInput(event);
    this.validateYear(event);
    event.target.value === "" ? $("#Year3").focus() : $("#Year4").focus();
  };

  handleYear4 = event => {
    this.handleInput(event);
    this.validateYear(event);
    event.target.value === "" ? $("#Year4").focus() : $("#Year4").focus();
  };

  ResetYearError = () => {
    $("#Year1").css({
      "border-top-color": "",
      "border-bottom-color": "",
      "border-left-color": ""
    });
    $("#Year2").css({
      "border-top-color": "",
      "border-bottom-color": "",
      "border-right-color": ""
    });
    $("#Year3").css({
      "border-top-color": "",
      "border-bottom-color": "",
      "border-left-color": ""
    });
    $("#Year4").css({
      "border-top-color": "",
      "border-bottom-color": "",
      "border-right-color": ""
    });
  };

  HighlightYearError = () => {
    $("#Year1").css({
      "border-top-color": "red",
      "border-bottom-color": "red",
      "border-left-color": "red"
    });
    $("#Year2").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#Year3").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#Year4").css({
      "border-top-color": "red",
      "border-bottom-color": "red",
      "border-right-color": "red"
    });
  };

  async validateDay(event) {
    this.state.data.Day = this.state.data.Day1 + this.state.data.Day2;

    let errors = this.state.errors;
    let name = "Day";
    this.setState(errors);
    errors[name] = "";

    this.ResetDayError();

    if (this.state.data.Day === "") {
      let errors = this.state.errors;
      let name = "Day";
      this.setState(errors);
      errors[name] = "*Please enter your Birth Day";

      this.state.isModalEnabled = false;
      this.HighlightDayError();
    } else if (typeof this.state.data.Day !== "undefined") {
      if (!this.state.data.Day.match(/^(0?[1-9]|[12][0-9]|3[01])$/)) {
        let errors = this.state.errors;
        let name = "Day";
        this.setState(errors);
        errors[name] = "*Please enter valid Day";

        this.state.isModalEnabled = false;
        this.HighlightDayError();
      }
    }

    localStorage.setItem("localdata", JSON.stringify(this.state.data));
    localStorage.setItem("localerror", JSON.stringify(this.state.errors));
  }

  async validateMonth(event) {
    this.state.data.Month = this.state.data.Month1 + this.state.data.Month2;

    let errors = this.state.errors;
    let name = "Month";
    this.setState(errors);
    errors[name] = "";

    this.ResetMonthError();

    if (this.state.data.Month === "") {
      let errors = this.state.errors;
      let name = "Month";
      this.setState(errors);
      errors[name] = "*Please enter your Birth Month";

      this.state.isModalEnabled = false;
      this.HighlightMonthError();
    } else if (typeof this.state.data.Month !== "undefined") {
      if (!this.state.data.Month.match(/^(0[1-9]|1[0-2])$/)) {
        let errors = this.state.errors;
        let name = "Month";
        this.setState(errors);
        errors[name] = "*Please enter valid month";

        this.state.isModalEnabled = false;
        this.HighlightMonthError();
      }
    }

    localStorage.setItem("localdata", JSON.stringify(this.state.data));
    localStorage.setItem("localerror", JSON.stringify(this.state.errors));
  }

  async validateYear(event) {
    this.state.data.Year =
      this.state.data.Year1 +
      this.state.data.Year2 +
      this.state.data.Year3 +
      this.state.data.Year4;

    let errors = this.state.errors;
    let name = "Year";
    this.setState(errors);
    errors[name] = "";

    this.ResetYearError();

    if (this.state.data.Year === "") {
      let errors = this.state.errors;
      let name = "Year";
      this.setState(errors);
      errors[name] = "*Please enter your Birth Year";

      this.state.isModalEnabled = false;
      this.HighlightYearError();
    } else if (typeof this.state.data.Year !== "undefined") {
      if (!this.state.data.Year.match(/^(19|20)\d{2}$/)) {
        let errors = this.state.errors;
        let name = "Year";
        this.setState(errors);
        errors[name] = "*Please enter valid Year";

        this.state.isModalEnabled = false;
        this.HighlightYearError();
      }
    }

    localStorage.setItem("localdata", JSON.stringify(this.state.data));
    localStorage.setItem("localerror", JSON.stringify(this.state.errors));
  }

  render() {
    return (
      <div>
        <div className="ColouredLabel Top_space">
          <label className="ColouredLabel">
            {" "}
            &nbsp;&nbsp; 5 &nbsp; Date of
            Birth/Incorporation/Agreement/Partnership or Trust Deed/ Formation
            of Body of individuals or Association of Persons
          </label>
        </div>

        <div className="divfive">
          <label className="Day">Day </label>
          <label className="Month">Month</label>
          <label className="Year">Year</label> <br />
          <input
            type="text"
            className="Day-control"
            maxLength="1"
            value={this.state.data.Day1}
            name="Day1"
            id="Day1"
            onKeyDown={event =>
              this.handleBackspaceKey(event, "#Day1", "#Day1")
            }
            onChange={this.handleDay1}
          />
          <input
            type="text"
            className="Day-control"
            maxLength="1"
            value={this.state.data.Day2}
            name="Day2"
            id="Day2"
            onKeyDown={event =>
              this.handleBackspaceKey(event, "#Day1", "#Day2")
            }
            onChange={this.handleDay2}
          />
          <input
            type="text"
            className="Month-control"
            maxLength="1"
            value={this.state.data.Month1}
            name="Month1"
            id="Month1"
            style={{ marginLeft: "2%" }}
            onKeyDown={event =>
              this.handleBackspaceKey(event, "#Month1", "#Month1")
            }
            onChange={this.handleMonth1}
          />
          <input
            type="text"
            className="Month-control"
            maxLength="1"
            value={this.state.data.Month2}
            name="Month2"
            id="Month2"
            onKeyDown={event =>
              this.handleBackspaceKey(event, "#Month1", "#Month2")
            }
            onChange={this.handleMonth2}
          />
          <input
            type="text"
            className="Year-control"
            maxLength="1"
            value={this.state.data.Year1}
            style={{ marginLeft: "2%" }}
            name="Year1"
            id="Year1"
            onKeyDown={event =>
              this.handleBackspaceKey(event, "#Year1", "#Year1")
            }
            onChange={this.handleYear1}
          />
          <input
            type="text"
            className="Year-control"
            maxLength="1"
            value={this.state.data.Year2}
            name="Year2"
            id="Year2"
            onKeyDown={event =>
              this.handleBackspaceKey(event, "#Year1", "#Year2")
            }
            onChange={this.handleYear2}
          />
          <input
            type="text"
            className="Year-control"
            maxLength="1"
            value={this.state.data.Year3}
            name="Year3"
            id="Year3"
            onKeyDown={event =>
              this.handleBackspaceKey(event, "#Year2", "#Year3")
            }
            onChange={this.handleYear3}
          />
          <input
            type="text"
            className="Year-control"
            maxLength="1"
            value={this.state.data.Year4}
            name="Year4"
            id="Year4"
            onKeyDown={event =>
              this.handleBackspaceKey(event, "#Year3", "#Year4")
            }
            onChange={this.handleYear4}
          />
          {this.state.isIndicatorEnabled === false ? (
            <span className="tooltip">
              <img
                src={indicator}
                alt="img"
                style={{
                  width: "2.2%",
                  height: "2%",
                  float: "right",
                  marginRight: "1%"
                }}
              />
              <img
                src={datefield}
                alt="img"
                className="tooltiptext tooltiptextDate"
                style={{ width: "600px", height: "200px" }}
              />
            </span>
          ) : (
            ""
          )}
        </div>
      </div>
    );
  }
}

export default FifthComponent;
