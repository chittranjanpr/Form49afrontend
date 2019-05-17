import React, { Component } from "react";
import "./Form1.css";
import "./Panmain.css";
import indicator from "./instuction.png";

class FourthComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isModalEnabled: false,
      isIndicatorEnabled: false,

      errors: {
        Gender: "",
        errorid: "1"
      },
      data: {
        Gender: "",
        dataid: "1"
      }
    };
  }
  handleGenderCheck = (e, name) => {
    for (var i = 11; i <= 13; i++) {
      document.getElementById(i).checked = false;
    }
    document.getElementById(e.target.id).checked = true;

    let errors1 = this.state.errors;
    let name4 = "Gender";
    this.setState(errors1);
    errors1[name4] = "";

    const check = this.state.data;
    check[name] = e.target.id;
    this.setState({ check });

    localStorage.setItem("localdata", JSON.stringify(this.state.data));
    localStorage.setItem("localerror", JSON.stringify(this.state.errors));
  };

  render() {
    return (
      <div>
        <div className="ColouredLabel">
          <label>
            &nbsp;&nbsp; 4 &nbsp; Gender (for Individual applicants only)
          </label>
          <input
            type="checkbox"
            className="Check "
            id="11"
            name="Gender[4][]"
            value="Male"
            onClick={e => this.handleGenderCheck(e, "Gender")}
          />
          <label className="Label_with_no_space"> Male</label>

          <input
            type="checkbox"
            className="Check "
            id="12"
            name="Gender[4][]"
            value="Female"
            onClick={e => this.handleGenderCheck(e, "Gender")}
          />
          <label className="Label_with_no_space"> Female</label>

          <input
            type="checkbox"
            className="Check "
            id="13"
            name="Gender[4][]"
            value="Transgender"
            onClick={e => this.handleGenderCheck(e, "Gender")}
          />
          <label className="Label_with_no_space"> Transgender</label>

          <label className="Label_with_no_space Move_End1">
            {" "}
            (please tick as applicable)
          </label>
          {this.state.isIndicatorEnabled === false ? (
            <span className="tooltip">
              <img
                src={indicator}
                alt="img"
                style={{
                  width: "2.1%",
                  height: "87%",
                  float: "right",
                  marginRight: "1%"
                }}
              />
              <label
                className="tooltiptext tooltiptextLabel tooltiptextGender"
                style={{
                  width: "450px",
                  height: "20px",
                  fontSize: "17px",
                  fontWeight: "inherit"
                }}
              >
                This field is mandatory for Individuals.
              </label>
            </span>
          ) : (
            ""
          )}
        </div>

        <span className="ErrorMsg">{this.state.errors.Gender}</span>
      </div>
    );
  }
}

export default FourthComponent;
