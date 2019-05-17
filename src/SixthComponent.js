import React, { Component } from "react";
import "./Form1.css";
import "./Panmain.css";
import $ from "jquery";
import indicator from "./instuction.png";
import namefield from "./namefield.jpeg";
import parentname from "./parentname.jpeg";

class SixthComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: ["Last Name / Surname", "First Name", "Middle Name"],

      isModalEnabled: false,
      isIndicatorEnabled: false,

      errors: {
        ParentName: "",
        FatherFirstName: "",
        FatherMiddleName: "",
        FatherLastName: "",
        MotherFirstName: "",
        MotherMiddleName: "",
        MotherLastName: "",
        errorid: "1"
      },
      data: {
        ParentName: "",
        FatherFirstName1: "",
        FatherFirstName2: "",
        FatherFirstName3: "",
        FatherFirstName4: "",
        FatherFirstName5: "",
        FatherFirstName6: "",
        FatherFirstName7: "",
        FatherFirstName8: "",
        FatherFirstName9: "",
        FatherFirstName10: "",
        FatherFirstName11: "",
        FatherFirstName12: "",
        FatherFirstName13: "",
        FatherFirstName14: "",
        FatherFirstName15: "",
        FatherFirstName16: "",
        FatherFirstName17: "",
        FatherFirstName18: "",
        FatherFirstName19: "",
        FatherFirstName20: "",
        FatherFirstName21: "",
        FatherFirstName22: "",
        FatherFirstName23: "",
        FatherFirstName24: "",
        FatherFirstName25: "",
        FatherFirstName: "",
        FatherMiddleName1: "",
        FatherMiddleName2: "",
        FatherMiddleName3: "",
        FatherMiddleName4: "",
        FatherMiddleName5: "",
        FatherMiddleName6: "",
        FatherMiddleName7: "",
        FatherMiddleName8: "",
        FatherMiddleName9: "",
        FatherMiddleName10: "",
        FatherMiddleName11: "",
        FatherMiddleName12: "",
        FatherMiddleName13: "",
        FatherMiddleName14: "",
        FatherMiddleName15: "",
        FatherMiddleName16: "",
        FatherMiddleName17: "",
        FatherMiddleName18: "",
        FatherMiddleName19: "",
        FatherMiddleName20: "",
        FatherMiddleName21: "",
        FatherMiddleName22: "",
        FatherMiddleName23: "",
        FatherMiddleName24: "",
        FatherMiddleName25: "",
        FatherMiddleName: "",
        FatherLastName1: "",
        FatherLastName2: "",
        FatherLastName3: "",
        FatherLastName4: "",
        FatherLastName5: "",
        FatherLastName6: "",
        FatherLastName7: "",
        FatherLastName8: "",
        FatherLastName9: "",
        FatherLastName10: "",
        FatherLastName11: "",
        FatherLastName12: "",
        FatherLastName13: "",
        FatherLastName14: "",
        FatherLastName15: "",
        FatherLastName16: "",
        FatherLastName17: "",
        FatherLastName18: "",
        FatherLastName19: "",
        FatherLastName20: "",
        FatherLastName21: "",
        FatherLastName22: "",
        FatherLastName23: "",
        FatherLastName24: "",
        FatherLastName25: "",
        FatherLastName: "",
        MotherFirstName1: "",
        MotherFirstName2: "",
        MotherFirstName3: "",
        MotherFirstName4: "",
        MotherFirstName5: "",
        MotherFirstName6: "",
        MotherFirstName7: "",
        MotherFirstName8: "",
        MotherFirstName9: "",
        MotherFirstName10: "",
        MotherFirstName11: "",
        MotherFirstName12: "",
        MotherFirstName13: "",
        MotherFirstName14: "",
        MotherFirstName15: "",
        MotherFirstName16: "",
        MotherFirstName17: "",
        MotherFirstName18: "",
        MotherFirstName19: "",
        MotherFirstName20: "",
        MotherFirstName21: "",
        MotherFirstName22: "",
        MotherFirstName23: "",
        MotherFirstName24: "",
        MotherFirstName25: "",
        MotherFirstName: "",
        MotherMiddleName1: "",
        MotherMiddleName2: "",
        MotherMiddleName3: "",
        MotherMiddleName4: "",
        MotherMiddleName5: "",
        MotherMiddleName6: "",
        MotherMiddleName7: "",
        MotherMiddleName8: "",
        MotherMiddleName9: "",
        MotherMiddleName10: "",
        MotherMiddleName11: "",
        MotherMiddleName12: "",
        MotherMiddleName13: "",
        MotherMiddleName14: "",
        MotherMiddleName15: "",
        MotherMiddleName16: "",
        MotherMiddleName17: "",
        MotherMiddleName18: "",
        MotherMiddleName19: "",
        MotherMiddleName20: "",
        MotherMiddleName21: "",
        MotherMiddleName22: "",
        MotherMiddleName23: "",
        MotherMiddleName24: "",
        MotherMiddleName25: "",
        MotherMiddleName: "",
        MotherLastName1: "",
        MotherLastName2: "",
        MotherLastName3: "",
        MotherLastName4: "",
        MotherLastName5: "",
        MotherLastName6: "",
        MotherLastName7: "",
        MotherLastName8: "",
        MotherLastName9: "",
        MotherLastName10: "",
        MotherLastName11: "",
        MotherLastName12: "",
        MotherLastName13: "",
        MotherLastName14: "",
        MotherLastName15: "",
        MotherLastName16: "",
        MotherLastName17: "",
        MotherLastName18: "",
        MotherLastName19: "",
        MotherLastName20: "",
        MotherLastName21: "",
        MotherLastName22: "",
        MotherLastName23: "",
        MotherLastName24: "",
        MotherLastName25: "",
        MotherLastName: "",
        dataid: "1"
      }
    };
  }

  handleParentNameCheck = (e, name) => {
    for (var i = 14; i <= 15; i++) {
      document.getElementById(i).checked = false;
    }
    document.getElementById(e.target.id).checked = true;

    let errors1 = this.state.errors;
    let name4 = "ParentName";
    this.setState(errors1);
    errors1[name4] = "";

    const check = this.state.data;
    check[name] = e.target.id;
    this.setState({ check });

    if (this.state.data.ParentName === "14") {
      if (this.state.errors.MotherLastName === "*Please enter Mother's name") {
        let errors1 = this.state.errors;
        let name4 = "MotherLastName";
        this.setState(errors1);
        errors1[name4] = "";
        this.ResetMotherLastNameError();
      }

      if (this.state.errors.MotherFirstName === "*Please enter Mother's name") {
        let errors1 = this.state.errors;
        let name4 = "MotherFirstName";
        this.setState(errors1);
        errors1[name4] = "";
        this.ResetMotherFirstNameError();
      }
    } else {
      if (
        this.state.data.MotherLastName === "" ||
        isNaN(this.state.data.MotherLastName) === false
      ) {
        let errors1 = this.state.errors;
        let name4 = "MotherLastName";
        this.setState(errors1);
        errors1[name4] = "*Please enter Mother's name";
        this.HighlightMotherLastNameError();
      }

      if (
        this.state.data.MotherFirstName === "" ||
        isNaN(this.state.data.MotherFirstName) === false
      ) {
        let errors1 = this.state.errors;
        let name4 = "MotherFirstName";
        this.setState(errors1);
        errors1[name4] = "*Please enter Mother's name";
        this.HighlightMotherFirstNameError();
      }
    }

    localStorage.setItem("localdata", JSON.stringify(this.state.data));
    localStorage.setItem("localerror", JSON.stringify(this.state.errors));
  };

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

  handleFatherLastName1 = event => {
    this.handleInput(event);
    this.validateFatherLastName(event);
    event.target.value === ""
      ? $("#FatherLastName1").focus()
      : $("#FatherLastName2").focus();
  };

  handleFatherLastName2 = event => {
    this.handleInput(event);
    this.validateFatherLastName(event);
    event.target.value === ""
      ? $("#FatherLastName2").focus()
      : $("#FatherLastName3").focus();
  };

  handleFatherLastName3 = event => {
    this.handleInput(event);
    this.validateFatherLastName(event);
    event.target.value === ""
      ? $("#FatherLastName3").focus()
      : $("#FatherLastName4").focus();
  };

  handleFatherLastName4 = event => {
    this.handleInput(event);
    this.validateFatherLastName(event);
    event.target.value === ""
      ? $("#FatherLastName4").focus()
      : $("#FatherLastName5").focus();
  };

  handleFatherLastName5 = event => {
    this.handleInput(event);
    this.validateFatherLastName(event);
    event.target.value === ""
      ? $("#FatherLastName5").focus()
      : $("#FatherLastName6").focus();
  };

  handleFatherLastName6 = event => {
    this.handleInput(event);
    this.validateFatherLastName(event);
    event.target.value === ""
      ? $("#FatherLastName6").focus()
      : $("#FatherLastName7").focus();
  };

  handleFatherLastName7 = event => {
    this.handleInput(event);
    this.validateFatherLastName(event);
    event.target.value === ""
      ? $("#FatherLastName7").focus()
      : $("#FatherLastName8").focus();
  };

  handleFatherLastName8 = event => {
    this.handleInput(event);
    this.validateFatherLastName(event);
    event.target.value === ""
      ? $("#FatherLastName8").focus()
      : $("#FatherLastName9").focus();
  };

  handleFatherLastName9 = event => {
    this.handleInput(event);
    this.validateFatherLastName(event);
    event.target.value === ""
      ? $("#FatherLastName9").focus()
      : $("#FatherLastName10").focus();
  };

  handleFatherLastName10 = event => {
    this.handleInput(event);
    this.validateFatherLastName(event);
    event.target.value === ""
      ? $("#FatherLastName10").focus()
      : $("#FatherLastName11").focus();
  };

  handleFatherLastName11 = event => {
    this.handleInput(event);
    this.validateFatherLastName(event);
    event.target.value === ""
      ? $("#FatherLastName11").focus()
      : $("#FatherLastName12").focus();
  };

  handleFatherLastName12 = event => {
    this.handleInput(event);
    this.validateFatherLastName(event);
    event.target.value === ""
      ? $("#FatherLastName12").focus()
      : $("#FatherLastName13").focus();
  };

  handleFatherLastName13 = event => {
    this.handleInput(event);
    this.validateFatherLastName(event);
    event.target.value === ""
      ? $("#FatherLastName13").focus()
      : $("#FatherLastName14").focus();
  };

  handleFatherLastName14 = event => {
    this.handleInput(event);
    this.validateFatherLastName(event);
    event.target.value === ""
      ? $("#FatherLastName14").focus()
      : $("#FatherLastName15").focus();
  };

  handleFatherLastName15 = event => {
    this.handleInput(event);
    this.validateFatherLastName(event);
    event.target.value === ""
      ? $("#FatherLastName15").focus()
      : $("#FatherLastName16").focus();
  };

  handleFatherLastName16 = event => {
    this.handleInput(event);
    this.validateFatherLastName(event);
    event.target.value === ""
      ? $("#FatherLastName16").focus()
      : $("#FatherLastName17").focus();
  };

  handleFatherLastName17 = event => {
    this.handleInput(event);
    this.validateFatherLastName(event);
    event.target.value === ""
      ? $("#FatherLastName17").focus()
      : $("#FatherLastName18").focus();
  };

  handleFatherLastName18 = event => {
    this.handleInput(event);
    this.validateFatherLastName(event);
    event.target.value === ""
      ? $("#FatherLastName18").focus()
      : $("#FatherLastName19").focus();
  };

  handleFatherLastName19 = event => {
    this.handleInput(event);
    this.validateFatherLastName(event);
    event.target.value === ""
      ? $("#FatherLastName19").focus()
      : $("#FatherLastName20").focus();
  };

  handleFatherLastName20 = event => {
    this.handleInput(event);
    this.validateFatherLastName(event);
    event.target.value === ""
      ? $("#FatherLastName20").focus()
      : $("#FatherLastName21").focus();
  };

  handleFatherLastName21 = event => {
    this.handleInput(event);
    this.validateFatherLastName(event);
    event.target.value === ""
      ? $("#FatherLastName21").focus()
      : $("#FatherLastName22").focus();
  };

  handleFatherLastName22 = event => {
    this.handleInput(event);
    this.validateFatherLastName(event);
    event.target.value === ""
      ? $("#FatherLastName22").focus()
      : $("#FatherLastName23").focus();
  };

  handleFatherLastName23 = event => {
    this.handleInput(event);
    this.validateFatherLastName(event);
    event.target.value === ""
      ? $("#FatherLastName23").focus()
      : $("#FatherLastName24").focus();
  };

  handleFatherLastName24 = event => {
    this.handleInput(event);
    this.validateFatherLastName(event);
    event.target.value === ""
      ? $("#FatherLastName24").focus()
      : $("#FatherLastName25").focus();
  };

  handleFatherLastName25 = event => {
    this.handleInput(event);
    this.validateFatherLastName(event);
    event.target.value === ""
      ? $("#FatherLastName25").focus()
      : $("#FatherLastName25").focus();
  };

  ResetFatherLastNameError = () => {
    $("#FatherLastName1").css({
      "border-top-color": "",
      "border-bottom-color": "",
      "border-left-color": ""
    });
    $("#FatherLastName2").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#FatherLastName3").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#FatherLastName4").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#FatherLastName5").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#FatherLastName6").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#FatherLastName7").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#FatherLastName8").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#FatherLastName9").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#FatherLastName10").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#FatherLastName11").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#FatherLastName12").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#FatherLastName13").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#FatherLastName14").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#FatherLastName15").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#FatherLastName16").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#FatherLastName17").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#FatherLastName18").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#FatherLastName19").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#FatherLastName20").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#FatherLastName21").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#FatherLastName22").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#FatherLastName23").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#FatherLastName24").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#FatherLastName25").css({
      "border-top-color": "",
      "border-bottom-color": "",
      "border-right-color": ""
    });
  };

  HighlightFatherLastNameError = () => {
    $("#FatherLastName1").css({
      "border-top-color": "red",
      "border-bottom-color": "red",
      "border-left-color": "red"
    });
    $("#FatherLastName2").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#FatherLastName3").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#FatherLastName4").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#FatherLastName5").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#FatherLastName6").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#FatherLastName7").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#FatherLastName8").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#FatherLastName9").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#FatherLastName10").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#FatherLastName11").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#FatherLastName12").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#FatherLastName13").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#FatherLastName14").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#FatherLastName15").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#FatherLastName16").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#FatherLastName17").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#FatherLastName18").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#FatherLastName19").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#FatherLastName20").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#FatherLastName21").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#FatherLastName22").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#FatherLastName23").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#FatherLastName24").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#FatherLastName25").css({
      "border-top-color": "red",
      "border-bottom-color": "red",
      "border-right-color": "red"
    });
  };

  handleFatherFirstName1 = event => {
    this.handleInput(event);
    this.validateFatherFirstName(event);
    event.target.value === ""
      ? $("#FatherFirstName1").focus()
      : $("#FatherFirstName2").focus();
  };

  handleFatherFirstName2 = event => {
    this.handleInput(event);
    this.validateFatherFirstName(event);
    event.target.value === ""
      ? $("#FatherFirstName2").focus()
      : $("#FatherFirstName3").focus();
  };

  handleFatherFirstName3 = event => {
    this.handleInput(event);
    this.validateFatherFirstName(event);
    event.target.value === ""
      ? $("#FatherFirstName3").focus()
      : $("#FatherFirstName4").focus();
  };

  handleFatherFirstName4 = event => {
    this.handleInput(event);
    this.validateFatherFirstName(event);
    event.target.value === ""
      ? $("#FatherFirstName4").focus()
      : $("#FatherFirstName5").focus();
  };

  handleFatherFirstName5 = event => {
    this.handleInput(event);
    this.validateFatherFirstName(event);
    event.target.value === ""
      ? $("#FatherFirstName5").focus()
      : $("#FatherFirstName6").focus();
  };

  handleFatherFirstName6 = event => {
    this.handleInput(event);
    this.validateFatherFirstName(event);
    event.target.value === ""
      ? $("#FatherFirstName6").focus()
      : $("#FatherFirstName7").focus();
  };

  handleFatherFirstName7 = event => {
    this.handleInput(event);
    this.validateFatherFirstName(event);
    event.target.value === ""
      ? $("#FatherFirstName7").focus()
      : $("#FatherFirstName8").focus();
  };

  handleFatherFirstName8 = event => {
    this.handleInput(event);
    this.validateFatherFirstName(event);
    event.target.value === ""
      ? $("#FatherFirstName8").focus()
      : $("#FatherFirstName9").focus();
  };

  handleFatherFirstName9 = event => {
    this.handleInput(event);
    this.validateFatherFirstName(event);
    event.target.value === ""
      ? $("#FatherFirstName9").focus()
      : $("#FatherFirstName10").focus();
  };

  handleFatherFirstName10 = event => {
    this.handleInput(event);
    this.validateFatherFirstName(event);
    event.target.value === ""
      ? $("#FatherFirstName10").focus()
      : $("#FatherFirstName11").focus();
  };

  handleFatherFirstName11 = event => {
    this.handleInput(event);
    this.validateFatherFirstName(event);
    event.target.value === ""
      ? $("#FatherFirstName11").focus()
      : $("#FatherFirstName12").focus();
  };

  handleFatherFirstName12 = event => {
    this.handleInput(event);
    this.validateFatherFirstName(event);
    event.target.value === ""
      ? $("#FatherFirstName12").focus()
      : $("#FatherFirstName13").focus();
  };

  handleFatherFirstName13 = event => {
    this.handleInput(event);
    this.validateFatherFirstName(event);
    event.target.value === ""
      ? $("#FatherFirstName13").focus()
      : $("#FatherFirstName14").focus();
  };

  handleFatherFirstName14 = event => {
    this.handleInput(event);
    this.validateFatherFirstName(event);
    event.target.value === ""
      ? $("#FatherFirstName14").focus()
      : $("#FatherFirstName15").focus();
  };

  handleFatherFirstName15 = event => {
    this.handleInput(event);
    this.validateFatherFirstName(event);
    event.target.value === ""
      ? $("#FatherFirstName15").focus()
      : $("#FatherFirstName16").focus();
  };

  handleFatherFirstName16 = event => {
    this.handleInput(event);
    this.validateFatherFirstName(event);
    event.target.value === ""
      ? $("#FatherFirstName16").focus()
      : $("#FatherFirstName17").focus();
  };

  handleFatherFirstName17 = event => {
    this.handleInput(event);
    this.validateFatherFirstName(event);
    event.target.value === ""
      ? $("#FatherFirstName17").focus()
      : $("#FatherFirstName18").focus();
  };

  handleFatherFirstName18 = event => {
    this.handleInput(event);
    this.validateFatherFirstName(event);
    event.target.value === ""
      ? $("#FatherFirstName18").focus()
      : $("#FatherFirstName19").focus();
  };

  handleFatherFirstName19 = event => {
    this.handleInput(event);
    this.validateFatherFirstName(event);
    event.target.value === ""
      ? $("#FatherFirstName19").focus()
      : $("#FatherFirstName20").focus();
  };

  handleFatherFirstName20 = event => {
    this.handleInput(event);
    this.validateFatherFirstName(event);
    event.target.value === ""
      ? $("#FatherFirstName20").focus()
      : $("#FatherFirstName21").focus();
  };

  handleFatherFirstName21 = event => {
    this.handleInput(event);
    this.validateFatherFirstName(event);
    event.target.value === ""
      ? $("#FatherFirstName21").focus()
      : $("#FatherFirstName22").focus();
  };

  handleFatherFirstName22 = event => {
    this.handleInput(event);
    this.validateFatherFirstName(event);
    event.target.value === ""
      ? $("#FatherFirstName22").focus()
      : $("#FatherFirstName23").focus();
  };

  handleFatherFirstName23 = event => {
    this.handleInput(event);
    this.validateFatherFirstName(event);
    event.target.value === ""
      ? $("#FatherFirstName23").focus()
      : $("#FatherFirstName24").focus();
  };

  handleFatherFirstName24 = event => {
    this.handleInput(event);
    this.validateFatherFirstName(event);
    event.target.value === ""
      ? $("#FatherFirstName24").focus()
      : $("#FatherFirstName25").focus();
  };

  handleFatherFirstName25 = event => {
    this.handleInput(event);
    this.validateFatherFirstName(event);
    event.target.value === ""
      ? $("#FatherFirstName25").focus()
      : $("#FatherFirstName25").focus();
  };

  ResetFatherFirstNameError = () => {
    $("#FatherFirstName1").css({
      "border-top-color": "",
      "border-bottom-color": "",
      "border-left-color": ""
    });
    $("#FatherFirstName2").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#FatherFirstName3").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#FatherFirstName4").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#FatherFirstName5").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#FatherFirstName6").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#FatherFirstName7").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#FatherFirstName8").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#FatherFirstName9").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#FatherFirstName10").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#FatherFirstName11").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#FatherFirstName12").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#FatherFirstName13").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#FatherFirstName14").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#FatherFirstName15").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#FatherFirstName16").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#FatherFirstName17").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#FatherFirstName18").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#FatherFirstName19").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#FatherFirstName20").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#FatherFirstName21").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#FatherFirstName22").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#FatherFirstName23").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#FatherFirstName24").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#FatherFirstName25").css({
      "border-top-color": "",
      "border-bottom-color": "",
      "border-right-color": ""
    });
  };

  HighlightFatherFirstNameError = () => {
    $("#FatherFirstName1").css({
      "border-top-color": "red",
      "border-bottom-color": "red",
      "border-left-color": "red"
    });
    $("#FatherFirstName2").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#FatherFirstName3").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#FatherFirstName4").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#FatherFirstName5").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#FatherFirstName6").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#FatherFirstName7").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#FatherFirstName8").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#FatherFirstName9").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#FatherFirstName10").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#FatherFirstName11").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#FatherFirstName12").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#FatherFirstName13").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#FatherFirstName14").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#FatherFirstName15").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#FatherFirstName16").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#FatherFirstName17").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#FatherFirstName18").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#FatherFirstName19").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#FatherFirstName20").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#FatherFirstName21").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#FatherFirstName22").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#FatherFirstName23").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#FatherFirstName24").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#FatherFirstName25").css({
      "border-top-color": "red",
      "border-bottom-color": "red",
      "border-right-color": "red"
    });
  };

  handleFatherMiddleName1 = event => {
    this.handleInput(event);
    this.validateFatherMiddleName(event);
    event.target.value === ""
      ? $("#FatherMiddleName1").focus()
      : $("#FatherMiddleName2").focus();
  };

  handleFatherMiddleName2 = event => {
    this.handleInput(event);
    this.validateFatherMiddleName(event);
    event.target.value === ""
      ? $("#FatherMiddleName2").focus()
      : $("#FatherMiddleName3").focus();
  };

  handleFatherMiddleName3 = event => {
    this.handleInput(event);
    this.validateFatherMiddleName(event);
    event.target.value === ""
      ? $("#FatherMiddleName3").focus()
      : $("#FatherMiddleName4").focus();
  };

  handleFatherMiddleName4 = event => {
    this.handleInput(event);
    this.validateFatherMiddleName(event);
    event.target.value === ""
      ? $("#FatherMiddleName4").focus()
      : $("#FatherMiddleName5").focus();
  };

  handleFatherMiddleName5 = event => {
    this.handleInput(event);
    this.validateFatherMiddleName(event);
    event.target.value === ""
      ? $("#FatherMiddleName5").focus()
      : $("#FatherMiddleName6").focus();
  };

  handleFatherMiddleName6 = event => {
    this.handleInput(event);
    this.validateFatherMiddleName(event);
    event.target.value === ""
      ? $("#FatherMiddleName6").focus()
      : $("#FatherMiddleName7").focus();
  };

  handleFatherMiddleName7 = event => {
    this.handleInput(event);
    this.validateFatherMiddleName(event);
    event.target.value === ""
      ? $("#FatherMiddleName7").focus()
      : $("#FatherMiddleName8").focus();
  };

  handleFatherMiddleName8 = event => {
    this.handleInput(event);
    this.validateFatherMiddleName(event);
    event.target.value === ""
      ? $("#FatherMiddleName8").focus()
      : $("#FatherMiddleName9").focus();
  };

  handleFatherMiddleName9 = event => {
    this.handleInput(event);
    this.validateFatherMiddleName(event);
    event.target.value === ""
      ? $("#FatherMiddleName9").focus()
      : $("#FatherMiddleName10").focus();
  };

  handleFatherMiddleName10 = event => {
    this.handleInput(event);
    this.validateFatherMiddleName(event);
    event.target.value === ""
      ? $("#FatherMiddleName10").focus()
      : $("#FatherMiddleName11").focus();
  };

  handleFatherMiddleName11 = event => {
    this.handleInput(event);
    this.validateFatherMiddleName(event);
    event.target.value === ""
      ? $("#FatherMiddleName11").focus()
      : $("#FatherMiddleName12").focus();
  };

  handleFatherMiddleName12 = event => {
    this.handleInput(event);
    this.validateFatherMiddleName(event);
    event.target.value === ""
      ? $("#FatherMiddleName12").focus()
      : $("#FatherMiddleName13").focus();
  };

  handleFatherMiddleName13 = event => {
    this.handleInput(event);
    this.validateFatherMiddleName(event);
    event.target.value === ""
      ? $("#FatherMiddleName13").focus()
      : $("#FatherMiddleName14").focus();
  };

  handleFatherMiddleName14 = event => {
    this.handleInput(event);
    this.validateFatherMiddleName(event);
    event.target.value === ""
      ? $("#FatherMiddleName14").focus()
      : $("#FatherMiddleName15").focus();
  };

  handleFatherMiddleName15 = event => {
    this.handleInput(event);
    this.validateFatherMiddleName(event);
    event.target.value === ""
      ? $("#FatherMiddleName15").focus()
      : $("#FatherMiddleName16").focus();
  };

  handleFatherMiddleName16 = event => {
    this.handleInput(event);
    this.validateFatherMiddleName(event);
    event.target.value === ""
      ? $("#FatherMiddleName16").focus()
      : $("#FatherMiddleName17").focus();
  };

  handleFatherMiddleName17 = event => {
    this.handleInput(event);
    this.validateFatherMiddleName(event);
    event.target.value === ""
      ? $("#FatherMiddleName17").focus()
      : $("#FatherMiddleName18").focus();
  };

  handleFatherMiddleName18 = event => {
    this.handleInput(event);
    this.validateFatherMiddleName(event);
    event.target.value === ""
      ? $("#FatherMiddleName18").focus()
      : $("#FatherMiddleName19").focus();
  };

  handleFatherMiddleName19 = event => {
    this.handleInput(event);
    this.validateFatherMiddleName(event);
    event.target.value === ""
      ? $("#FatherMiddleName19").focus()
      : $("#FatherMiddleName20").focus();
  };

  handleFatherMiddleName20 = event => {
    this.handleInput(event);
    this.validateFatherMiddleName(event);
    event.target.value === ""
      ? $("#FatherMiddleName20").focus()
      : $("#FatherMiddleName21").focus();
  };

  handleFatherMiddleName21 = event => {
    this.handleInput(event);
    this.validateFatherMiddleName(event);
    event.target.value === ""
      ? $("#FatherMiddleName21").focus()
      : $("#FatherMiddleName22").focus();
  };

  handleFatherMiddleName22 = event => {
    this.handleInput(event);
    this.validateFatherMiddleName(event);
    event.target.value === ""
      ? $("#FatherMiddleName22").focus()
      : $("#FatherMiddleName23").focus();
  };

  handleFatherMiddleName23 = event => {
    this.handleInput(event);
    this.validateFatherMiddleName(event);
    event.target.value === ""
      ? $("#FatherMiddleName23").focus()
      : $("#FatherMiddleName24").focus();
  };

  handleFatherMiddleName24 = event => {
    this.handleInput(event);
    this.validateFatherMiddleName(event);
    event.target.value === ""
      ? $("#FatherMiddleName24").focus()
      : $("#FatherMiddleName25").focus();
  };

  handleFatherMiddleName25 = event => {
    this.handleInput(event);
    this.validateFatherMiddleName(event);
    event.target.value === ""
      ? $("#FatherMiddleName25").focus()
      : $("#FatherMiddleName25").focus();
  };

  ResetFatherMiddleNameError = () => {
    $("#FatherMiddleName1").css({
      "border-top-color": "",
      "border-bottom-color": "",
      "border-left-color": ""
    });
    $("#FatherMiddleName2").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#FatherMiddleName3").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#FatherMiddleName4").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#FatherMiddleName5").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#FatherMiddleName6").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#FatherMiddleName7").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#FatherMiddleName8").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#FatherMiddleName9").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#FatherMiddleName10").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#FatherMiddleName11").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#FatherMiddleName12").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#FatherMiddleName13").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#FatherMiddleName14").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#FatherMiddleName15").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#FatherMiddleName16").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#FatherMiddleName17").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#FatherMiddleName18").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#FatherMiddleName19").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#FatherMiddleName20").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#FatherMiddleName21").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#FatherMiddleName22").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#FatherMiddleName23").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#FatherMiddleName24").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#FatherMiddleName25").css({
      "border-top-color": "",
      "border-bottom-color": "",
      "border-right-color": ""
    });
  };

  HighlightFatherMiddleNameError = () => {
    $("#FatherMiddleName1").css({
      "border-top-color": "red",
      "border-bottom-color": "red",
      "border-left-color": "red"
    });
    $("#FatherMiddleName2").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#FatherMiddleName3").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#FatherMiddleName4").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#FatherMiddleName5").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#FatherMiddleName6").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#FatherMiddleName7").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#FatherMiddleName8").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#FatherMiddleName9").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#FatherMiddleName10").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#FatherMiddleName11").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#FatherMiddleName12").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#FatherMiddleName13").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#FatherMiddleName14").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#FatherMiddleName15").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#FatherMiddleName16").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#FatherMiddleName17").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#FatherMiddleName18").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#FatherMiddleName19").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#FatherMiddleName20").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#FatherMiddleName21").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#FatherMiddleName22").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#FatherMiddleName23").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#FatherMiddleName24").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#FatherMiddleName25").css({
      "border-top-color": "red",
      "border-bottom-color": "red",
      "border-right-color": "red"
    });
  };

  handleMotherLastName1 = event => {
    this.handleInput(event);
    this.validateMotherLastName(event);
    event.target.value === ""
      ? $("#MotherLastName1").focus()
      : $("#MotherLastName2").focus();
  };

  handleMotherLastName2 = event => {
    this.handleInput(event);
    this.validateMotherLastName(event);
    event.target.value === ""
      ? $("#MotherLastName2").focus()
      : $("#MotherLastName3").focus();
  };

  handleMotherLastName3 = event => {
    this.handleInput(event);
    this.validateMotherLastName(event);
    event.target.value === ""
      ? $("#MotherLastName3").focus()
      : $("#MotherLastName4").focus();
  };

  handleMotherLastName4 = event => {
    this.handleInput(event);
    this.validateMotherLastName(event);
    event.target.value === ""
      ? $("#MotherLastName4").focus()
      : $("#MotherLastName5").focus();
  };

  handleMotherLastName5 = event => {
    this.handleInput(event);
    this.validateMotherLastName(event);
    event.target.value === ""
      ? $("#MotherLastName5").focus()
      : $("#MotherLastName6").focus();
  };

  handleMotherLastName6 = event => {
    this.handleInput(event);
    this.validateMotherLastName(event);
    event.target.value === ""
      ? $("#MotherLastName6").focus()
      : $("#MotherLastName7").focus();
  };

  handleMotherLastName7 = event => {
    this.handleInput(event);
    this.validateMotherLastName(event);
    event.target.value === ""
      ? $("#MotherLastName7").focus()
      : $("#MotherLastName8").focus();
  };

  handleMotherLastName8 = event => {
    this.handleInput(event);
    this.validateMotherLastName(event);
    event.target.value === ""
      ? $("#MotherLastName8").focus()
      : $("#MotherLastName9").focus();
  };

  handleMotherLastName9 = event => {
    this.handleInput(event);
    this.validateMotherLastName(event);
    event.target.value === ""
      ? $("#MotherLastName9").focus()
      : $("#MotherLastName10").focus();
  };

  handleMotherLastName10 = event => {
    this.handleInput(event);
    this.validateMotherLastName(event);
    event.target.value === ""
      ? $("#MotherLastName10").focus()
      : $("#MotherLastName11").focus();
  };

  handleMotherLastName11 = event => {
    this.handleInput(event);
    this.validateMotherLastName(event);
    event.target.value === ""
      ? $("#MotherLastName11").focus()
      : $("#MotherLastName12").focus();
  };

  handleMotherLastName12 = event => {
    this.handleInput(event);
    this.validateMotherLastName(event);
    event.target.value === ""
      ? $("#MotherLastName12").focus()
      : $("#MotherLastName13").focus();
  };

  handleMotherLastName13 = event => {
    this.handleInput(event);
    this.validateMotherLastName(event);
    event.target.value === ""
      ? $("#MotherLastName13").focus()
      : $("#MotherLastName14").focus();
  };

  handleMotherLastName14 = event => {
    this.handleInput(event);
    this.validateMotherLastName(event);
    event.target.value === ""
      ? $("#MotherLastName14").focus()
      : $("#MotherLastName15").focus();
  };

  handleMotherLastName15 = event => {
    this.handleInput(event);
    this.validateMotherLastName(event);
    event.target.value === ""
      ? $("#MotherLastName15").focus()
      : $("#MotherLastName16").focus();
  };

  handleMotherLastName16 = event => {
    this.handleInput(event);
    this.validateMotherLastName(event);
    event.target.value === ""
      ? $("#MotherLastName16").focus()
      : $("#MotherLastName17").focus();
  };

  handleMotherLastName17 = event => {
    this.handleInput(event);
    this.validateMotherLastName(event);
    event.target.value === ""
      ? $("#MotherLastName17").focus()
      : $("#MotherLastName18").focus();
  };

  handleMotherLastName18 = event => {
    this.handleInput(event);
    this.validateMotherLastName(event);
    event.target.value === ""
      ? $("#MotherLastName18").focus()
      : $("#MotherLastName19").focus();
  };

  handleMotherLastName19 = event => {
    this.handleInput(event);
    this.validateMotherLastName(event);
    event.target.value === ""
      ? $("#MotherLastName19").focus()
      : $("#MotherLastName20").focus();
  };

  handleMotherLastName20 = event => {
    this.handleInput(event);
    this.validateMotherLastName(event);
    event.target.value === ""
      ? $("#MotherLastName20").focus()
      : $("#MotherLastName21").focus();
  };

  handleMotherLastName21 = event => {
    this.handleInput(event);
    this.validateMotherLastName(event);
    event.target.value === ""
      ? $("#MotherLastName21").focus()
      : $("#MotherLastName22").focus();
  };

  handleMotherLastName22 = event => {
    this.handleInput(event);
    this.validateMotherLastName(event);
    event.target.value === ""
      ? $("#MotherLastName22").focus()
      : $("#MotherLastName23").focus();
  };

  handleMotherLastName23 = event => {
    this.handleInput(event);
    this.validateMotherLastName(event);
    event.target.value === ""
      ? $("#MotherLastName23").focus()
      : $("#MotherLastName24").focus();
  };

  handleMotherLastName24 = event => {
    this.handleInput(event);
    this.validateMotherLastName(event);
    event.target.value === ""
      ? $("#MotherLastName24").focus()
      : $("#MotherLastName25").focus();
  };

  handleMotherLastName25 = event => {
    this.handleInput(event);
    this.validateMotherLastName(event);
    event.target.value === ""
      ? $("#MotherLastName25").focus()
      : $("#MotherLastName25").focus();
  };

  ResetMotherLastNameError = () => {
    $("#MotherLastName1").css({
      "border-top-color": "",
      "border-bottom-color": "",
      "border-left-color": ""
    });
    $("#MotherLastName2").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#MotherLastName3").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#MotherLastName4").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#MotherLastName5").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#MotherLastName6").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#MotherLastName7").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#MotherLastName8").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#MotherLastName9").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#MotherLastName10").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#MotherLastName11").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#MotherLastName12").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#MotherLastName13").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#MotherLastName14").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#MotherLastName15").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#MotherLastName16").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#MotherLastName17").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#MotherLastName18").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#MotherLastName19").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#MotherLastName20").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#MotherLastName21").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#MotherLastName22").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#MotherLastName23").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#MotherLastName24").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#MotherLastName25").css({
      "border-top-color": "",
      "border-bottom-color": "",
      "border-right-color": ""
    });
  };

  HighlightMotherLastNameError = () => {
    $("#MotherLastName1").css({
      "border-top-color": "red",
      "border-bottom-color": "red",
      "border-left-color": "red"
    });
    $("#MotherLastName2").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#MotherLastName3").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#MotherLastName4").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#MotherLastName5").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#MotherLastName6").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#MotherLastName7").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#MotherLastName8").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#MotherLastName9").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#MotherLastName10").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#MotherLastName11").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#MotherLastName12").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#MotherLastName13").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#MotherLastName14").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#MotherLastName15").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#MotherLastName16").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#MotherLastName17").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#MotherLastName18").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#MotherLastName19").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#MotherLastName20").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#MotherLastName21").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#MotherLastName22").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#MotherLastName23").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#MotherLastName24").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#MotherLastName25").css({
      "border-top-color": "red",
      "border-bottom-color": "red",
      "border-right-color": "red"
    });
  };

  handleMotherFirstName1 = event => {
    this.handleInput(event);
    this.validateMotherFirstName(event);
    event.target.value === ""
      ? $("#MotherFirstName1").focus()
      : $("#MotherFirstName2").focus();
  };

  handleMotherFirstName2 = event => {
    this.handleInput(event);
    this.validateMotherFirstName(event);
    event.target.value === ""
      ? $("#MotherFirstName2").focus()
      : $("#MotherFirstName3").focus();
  };

  handleMotherFirstName3 = event => {
    this.handleInput(event);
    this.validateMotherFirstName(event);
    event.target.value === ""
      ? $("#MotherFirstName3").focus()
      : $("#MotherFirstName4").focus();
  };

  handleMotherFirstName4 = event => {
    this.handleInput(event);
    this.validateMotherFirstName(event);
    event.target.value === ""
      ? $("#MotherFirstName4").focus()
      : $("#MotherFirstName5").focus();
  };

  handleMotherFirstName5 = event => {
    this.handleInput(event);
    this.validateMotherFirstName(event);
    event.target.value === ""
      ? $("#MotherFirstName5").focus()
      : $("#MotherFirstName6").focus();
  };

  handleMotherFirstName6 = event => {
    this.handleInput(event);
    this.validateMotherFirstName(event);
    event.target.value === ""
      ? $("#MotherFirstName6").focus()
      : $("#MotherFirstName7").focus();
  };

  handleMotherFirstName7 = event => {
    this.handleInput(event);
    this.validateMotherFirstName(event);
    event.target.value === ""
      ? $("#MotherFirstName7").focus()
      : $("#MotherFirstName8").focus();
  };

  handleMotherFirstName8 = event => {
    this.handleInput(event);
    this.validateMotherFirstName(event);
    event.target.value === ""
      ? $("#MotherFirstName8").focus()
      : $("#MotherFirstName9").focus();
  };

  handleMotherFirstName9 = event => {
    this.handleInput(event);
    this.validateMotherFirstName(event);
    event.target.value === ""
      ? $("#MotherFirstName9").focus()
      : $("#MotherFirstName10").focus();
  };

  handleMotherFirstName10 = event => {
    this.handleInput(event);
    this.validateMotherFirstName(event);
    event.target.value === ""
      ? $("#MotherFirstName10").focus()
      : $("#MotherFirstName11").focus();
  };

  handleMotherFirstName11 = event => {
    this.handleInput(event);
    this.validateMotherFirstName(event);
    event.target.value === ""
      ? $("#MotherFirstName11").focus()
      : $("#MotherFirstName12").focus();
  };

  handleMotherFirstName12 = event => {
    this.handleInput(event);
    this.validateMotherFirstName(event);
    event.target.value === ""
      ? $("#MotherFirstName12").focus()
      : $("#MotherFirstName13").focus();
  };

  handleMotherFirstName13 = event => {
    this.handleInput(event);
    this.validateMotherFirstName(event);
    event.target.value === ""
      ? $("#MotherFirstName13").focus()
      : $("#MotherFirstName14").focus();
  };

  handleMotherFirstName14 = event => {
    this.handleInput(event);
    this.validateMotherFirstName(event);
    event.target.value === ""
      ? $("#MotherFirstName14").focus()
      : $("#MotherFirstName15").focus();
  };

  handleMotherFirstName15 = event => {
    this.handleInput(event);
    this.validateMotherFirstName(event);
    event.target.value === ""
      ? $("#MotherFirstName15").focus()
      : $("#MotherFirstName16").focus();
  };

  handleMotherFirstName16 = event => {
    this.handleInput(event);
    this.validateMotherFirstName(event);
    event.target.value === ""
      ? $("#MotherFirstName16").focus()
      : $("#MotherFirstName17").focus();
  };

  handleMotherFirstName17 = event => {
    this.handleInput(event);
    this.validateMotherFirstName(event);
    event.target.value === ""
      ? $("#MotherFirstName17").focus()
      : $("#MotherFirstName18").focus();
  };

  handleMotherFirstName18 = event => {
    this.handleInput(event);
    this.validateMotherFirstName(event);
    event.target.value === ""
      ? $("#MotherFirstName18").focus()
      : $("#MotherFirstName19").focus();
  };

  handleMotherFirstName19 = event => {
    this.handleInput(event);
    this.validateMotherFirstName(event);
    event.target.value === ""
      ? $("#MotherFirstName19").focus()
      : $("#MotherFirstName20").focus();
  };

  handleMotherFirstName20 = event => {
    this.handleInput(event);
    this.validateMotherFirstName(event);
    event.target.value === ""
      ? $("#MotherFirstName20").focus()
      : $("#MotherFirstName21").focus();
  };

  handleMotherFirstName21 = event => {
    this.handleInput(event);
    this.validateMotherFirstName(event);
    event.target.value === ""
      ? $("#MotherFirstName21").focus()
      : $("#MotherFirstName22").focus();
  };

  handleMotherFirstName22 = event => {
    this.handleInput(event);
    this.validateMotherFirstName(event);
    event.target.value === ""
      ? $("#MotherFirstName22").focus()
      : $("#MotherFirstName23").focus();
  };

  handleMotherFirstName23 = event => {
    this.handleInput(event);
    this.validateMotherFirstName(event);
    event.target.value === ""
      ? $("#MotherFirstName23").focus()
      : $("#MotherFirstName24").focus();
  };

  handleMotherFirstName24 = event => {
    this.handleInput(event);
    this.validateMotherFirstName(event);
    event.target.value === ""
      ? $("#MotherFirstName24").focus()
      : $("#MotherFirstName25").focus();
  };

  handleMotherFirstName25 = event => {
    this.handleInput(event);
    this.validateMotherFirstName(event);
    event.target.value === ""
      ? $("#MotherFirstName25").focus()
      : $("#MotherFirstName25").focus();
  };

  ResetMotherFirstNameError = () => {
    $("#MotherFirstName1").css({
      "border-top-color": "",
      "border-bottom-color": "",
      "border-left-color": ""
    });
    $("#MotherFirstName2").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#MotherFirstName3").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#MotherFirstName4").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#MotherFirstName5").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#MotherFirstName6").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#MotherFirstName7").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#MotherFirstName8").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#MotherFirstName9").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#MotherFirstName10").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#MotherFirstName11").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#MotherFirstName12").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#MotherFirstName13").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#MotherFirstName14").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#MotherFirstName15").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#MotherFirstName16").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#MotherFirstName17").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#MotherFirstName18").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#MotherFirstName19").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#MotherFirstName20").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#MotherFirstName21").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#MotherFirstName22").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#MotherFirstName23").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#MotherFirstName24").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#MotherFirstName25").css({
      "border-top-color": "",
      "border-bottom-color": "",
      "border-right-color": ""
    });
  };

  HighlightMotherFirstNameError = () => {
    $("#MotherFirstName1").css({
      "border-top-color": "red",
      "border-bottom-color": "red",
      "border-left-color": "red"
    });
    $("#MotherFirstName2").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#MotherFirstName3").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#MotherFirstName4").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#MotherFirstName5").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#MotherFirstName6").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#MotherFirstName7").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#MotherFirstName8").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#MotherFirstName9").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#MotherFirstName10").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#MotherFirstName11").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#MotherFirstName12").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#MotherFirstName13").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#MotherFirstName14").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#MotherFirstName15").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#MotherFirstName16").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#MotherFirstName17").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#MotherFirstName18").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#MotherFirstName19").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#MotherFirstName20").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#MotherFirstName21").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#MotherFirstName22").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#MotherFirstName23").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#MotherFirstName24").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#MotherFirstName25").css({
      "border-top-color": "red",
      "border-bottom-color": "red",
      "border-right-color": "red"
    });
  };

  handleMotherMiddleName1 = event => {
    this.handleInput(event);
    this.validateMotherMiddleName(event);
    event.target.value === ""
      ? $("#MotherMiddleName1").focus()
      : $("#MotherMiddleName2").focus();
  };

  handleMotherMiddleName2 = event => {
    this.handleInput(event);
    this.validateMotherMiddleName(event);
    event.target.value === ""
      ? $("#MotherMiddleName2").focus()
      : $("#MotherMiddleName3").focus();
  };

  handleMotherMiddleName3 = event => {
    this.handleInput(event);
    this.validateMotherMiddleName(event);
    event.target.value === ""
      ? $("#MotherMiddleName3").focus()
      : $("#MotherMiddleName4").focus();
  };

  handleMotherMiddleName4 = event => {
    this.handleInput(event);
    this.validateMotherMiddleName(event);
    event.target.value === ""
      ? $("#MotherMiddleName4").focus()
      : $("#MotherMiddleName5").focus();
  };

  handleMotherMiddleName5 = event => {
    this.handleInput(event);
    this.validateMotherMiddleName(event);
    event.target.value === ""
      ? $("#MotherMiddleName5").focus()
      : $("#MotherMiddleName6").focus();
  };

  handleMotherMiddleName6 = event => {
    this.handleInput(event);
    this.validateMotherMiddleName(event);
    event.target.value === ""
      ? $("#MotherMiddleName6").focus()
      : $("#MotherMiddleName7").focus();
  };

  handleMotherMiddleName7 = event => {
    this.handleInput(event);
    this.validateMotherMiddleName(event);
    event.target.value === ""
      ? $("#MotherMiddleName7").focus()
      : $("#MotherMiddleName8").focus();
  };

  handleMotherMiddleName8 = event => {
    this.handleInput(event);
    this.validateMotherMiddleName(event);
    event.target.value === ""
      ? $("#MotherMiddleName8").focus()
      : $("#MotherMiddleName9").focus();
  };

  handleMotherMiddleName9 = event => {
    this.handleInput(event);
    this.validateMotherMiddleName(event);
    event.target.value === ""
      ? $("#MotherMiddleName9").focus()
      : $("#MotherMiddleName10").focus();
  };

  handleMotherMiddleName10 = event => {
    this.handleInput(event);
    this.validateMotherMiddleName(event);
    event.target.value === ""
      ? $("#MotherMiddleName10").focus()
      : $("#MotherMiddleName11").focus();
  };

  handleMotherMiddleName11 = event => {
    this.handleInput(event);
    this.validateMotherMiddleName(event);
    event.target.value === ""
      ? $("#MotherMiddleName11").focus()
      : $("#MotherMiddleName12").focus();
  };

  handleMotherMiddleName12 = event => {
    this.handleInput(event);
    this.validateMotherMiddleName(event);
    event.target.value === ""
      ? $("#MotherMiddleName12").focus()
      : $("#MotherMiddleName13").focus();
  };

  handleMotherMiddleName13 = event => {
    this.handleInput(event);
    this.validateMotherMiddleName(event);
    event.target.value === ""
      ? $("#MotherMiddleName13").focus()
      : $("#MotherMiddleName14").focus();
  };

  handleMotherMiddleName14 = event => {
    this.handleInput(event);
    this.validateMotherMiddleName(event);
    event.target.value === ""
      ? $("#MotherMiddleName14").focus()
      : $("#MotherMiddleName15").focus();
  };

  handleMotherMiddleName15 = event => {
    this.handleInput(event);
    this.validateMotherMiddleName(event);
    event.target.value === ""
      ? $("#MotherMiddleName15").focus()
      : $("#MotherMiddleName16").focus();
  };

  handleMotherMiddleName16 = event => {
    this.handleInput(event);
    this.validateMotherMiddleName(event);
    event.target.value === ""
      ? $("#MotherMiddleName16").focus()
      : $("#MotherMiddleName17").focus();
  };

  handleMotherMiddleName17 = event => {
    this.handleInput(event);
    this.validateMotherMiddleName(event);
    event.target.value === ""
      ? $("#MotherMiddleName17").focus()
      : $("#MotherMiddleName18").focus();
  };

  handleMotherMiddleName18 = event => {
    this.handleInput(event);
    this.validateMotherMiddleName(event);
    event.target.value === ""
      ? $("#MotherMiddleName18").focus()
      : $("#MotherMiddleName19").focus();
  };

  handleMotherMiddleName19 = event => {
    this.handleInput(event);
    this.validateMotherMiddleName(event);
    event.target.value === ""
      ? $("#MotherMiddleName19").focus()
      : $("#MotherMiddleName20").focus();
  };

  handleMotherMiddleName20 = event => {
    this.handleInput(event);
    this.validateMotherMiddleName(event);
    event.target.value === ""
      ? $("#MotherMiddleName20").focus()
      : $("#MotherMiddleName21").focus();
  };

  handleMotherMiddleName21 = event => {
    this.handleInput(event);
    this.validateMotherMiddleName(event);
    event.target.value === ""
      ? $("#MotherMiddleName21").focus()
      : $("#MotherMiddleName22").focus();
  };

  handleMotherMiddleName22 = event => {
    this.handleInput(event);
    this.validateMotherMiddleName(event);
    event.target.value === ""
      ? $("#MotherMiddleName22").focus()
      : $("#MotherMiddleName23").focus();
  };

  handleMotherMiddleName23 = event => {
    this.handleInput(event);
    this.validateMotherMiddleName(event);
    event.target.value === ""
      ? $("#MotherMiddleName23").focus()
      : $("#MotherMiddleName24").focus();
  };

  handleMotherMiddleName24 = event => {
    this.handleInput(event);
    this.validateMotherMiddleName(event);
    event.target.value === ""
      ? $("#MotherMiddleName24").focus()
      : $("#MotherMiddleName25").focus();
  };

  handleMotherMiddleName25 = event => {
    this.handleInput(event);
    this.validateMotherMiddleName(event);
    event.target.value === ""
      ? $("#MotherMiddleName25").focus()
      : $("#MotherMiddleName25").focus();
  };

  ResetMotherMiddleNameError = () => {
    $("#MotherMiddleName1").css({
      "border-top-color": "",
      "border-bottom-color": "",
      "border-left-color": ""
    });
    $("#MotherMiddleName2").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#MotherMiddleName3").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#MotherMiddleName4").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#MotherMiddleName5").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#MotherMiddleName6").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#MotherMiddleName7").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#MotherMiddleName8").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#MotherMiddleName9").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#MotherMiddleName10").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#MotherMiddleName11").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#MotherMiddleName12").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#MotherMiddleName13").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#MotherMiddleName14").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#MotherMiddleName15").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#MotherMiddleName16").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#MotherMiddleName17").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#MotherMiddleName18").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#MotherMiddleName19").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#MotherMiddleName20").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#MotherMiddleName21").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#MotherMiddleName22").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#MotherMiddleName23").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#MotherMiddleName24").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#MotherMiddleName25").css({
      "border-top-color": "",
      "border-bottom-color": "",
      "border-right-color": ""
    });
  };

  HighlightMotherMiddleNameError = () => {
    $("#MotherMiddleName1").css({
      "border-top-color": "red",
      "border-bottom-color": "red",
      "border-left-color": "red"
    });
    $("#MotherMiddleName2").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#MotherMiddleName3").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#MotherMiddleName4").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#MotherMiddleName5").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#MotherMiddleName6").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#MotherMiddleName7").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#MotherMiddleName8").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#MotherMiddleName9").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#MotherMiddleName10").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#MotherMiddleName11").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#MotherMiddleName12").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#MotherMiddleName13").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#MotherMiddleName14").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#MotherMiddleName15").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#MotherMiddleName16").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#MotherMiddleName17").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#MotherMiddleName18").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#MotherMiddleName19").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#MotherMiddleName20").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#MotherMiddleName21").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#MotherMiddleName22").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#MotherMiddleName23").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#MotherMiddleName24").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#MotherMiddleName25").css({
      "border-top-color": "red",
      "border-bottom-color": "red",
      "border-right-color": "red"
    });
  };

  async validateFatherFirstName(event) {
    this.state.data.FatherFirstName =
      this.state.data.FatherFirstName1 +
      this.state.data.FatherFirstName2 +
      this.state.data.FatherFirstName3 +
      this.state.data.FatherFirstName4 +
      this.state.data.FatherFirstName5 +
      this.state.data.FatherFirstName6 +
      this.state.data.FatherFirstName7 +
      this.state.data.FatherFirstName8 +
      this.state.data.FatherFirstName9 +
      this.state.data.FatherFirstName10 +
      this.state.data.FatherFirstName11 +
      this.state.data.FatherFirstName12 +
      this.state.data.FatherFirstName13 +
      this.state.data.FatherFirstName14 +
      this.state.data.FatherFirstName15 +
      this.state.data.FatherFirstName16 +
      this.state.data.FatherFirstName17 +
      this.state.data.FatherFirstName18 +
      this.state.data.FatherFirstName19 +
      this.state.data.FatherFirstName20 +
      this.state.data.FatherFirstName21 +
      this.state.data.FatherFirstName22 +
      this.state.data.FatherFirstName23 +
      this.state.data.FatherFirstName24 +
      this.state.data.FatherFirstName25;

    let errors = this.state.errors;
    let name = "FatherFirstName";
    this.setState(errors);
    errors[name] = "";
    this.ResetFatherFirstNameError();

    if (
      this.state.data.FatherFirstName === "" ||
      isNaN(this.state.data.FatherFirstName) === false
    ) {
      let errors = this.state.errors;
      let name = "FatherFirstName";
      this.setState(errors);
      errors[name] = "*Please enter your Father's FirstName";

      this.state.isModalEnabled = false;
      this.HighlightFatherFirstNameError();
    } else if (typeof this.state.data.FatherFirstName !== "undefined") {
      if (!this.state.data.FatherFirstName.match(/^[a-zA-Z ]*$/)) {
        let errors = this.state.errors;
        let name = "FatherFirstName";
        this.setState(errors);
        errors[name] = "*Please enter alphabet characters only.";

        this.state.isModalEnabled = false;
        this.HighlightFatherFirstNameError();
      }
    }

    localStorage.setItem("localdata", JSON.stringify(this.state.data));
    localStorage.setItem("localerror", JSON.stringify(this.state.errors));
  }

  async validateFatherLastName(event) {
    this.state.data.FatherLastName =
      this.state.data.FatherLastName1 +
      this.state.data.FatherLastName2 +
      this.state.data.FatherLastName3 +
      this.state.data.FatherLastName4 +
      this.state.data.FatherLastName5 +
      this.state.data.FatherLastName6 +
      this.state.data.FatherLastName7 +
      this.state.data.FatherLastName8 +
      this.state.data.FatherLastName9 +
      this.state.data.FatherLastName10 +
      this.state.data.FatherLastName11 +
      this.state.data.FatherLastName12 +
      this.state.data.FatherLastName13 +
      this.state.data.FatherLastName14 +
      this.state.data.FatherLastName15 +
      this.state.data.FatherLastName16 +
      this.state.data.FatherLastName17 +
      this.state.data.FatherLastName18 +
      this.state.data.FatherLastName19 +
      this.state.data.FatherLastName20 +
      this.state.data.FatherLastName21 +
      this.state.data.FatherLastName22 +
      this.state.data.FatherLastName23 +
      this.state.data.FatherLastName24 +
      this.state.data.FatherLastName25;

    let errors = this.state.errors;
    let name = "FatherLastName";
    this.setState(errors);
    errors[name] = "";

    this.ResetFatherLastNameError();

    if (
      this.state.data.FatherLastName === "" ||
      isNaN(this.state.data.FatherLastName) === false
    ) {
      let errors = this.state.errors;
      let name = "FatherLastName";
      this.setState(errors);
      errors[name] = "*Please enter your Father's LastName";

      this.state.isModalEnabled = false;
      this.HighlightFatherLastNameError();
    } else if (typeof this.state.data.FatherLastName !== "undefined") {
      if (!this.state.data.FatherLastName.match(/^[a-zA-Z ]*$/)) {
        let errors = this.state.errors;
        let name = "FatherLastName";
        this.setState(errors);
        errors[name] = "*Please enter alphabet characters only.";

        this.state.isModalEnabled = false;
        this.HighlightFatherLastNameError();
      }
    }

    localStorage.setItem("localdata", JSON.stringify(this.state.data));
    localStorage.setItem("localerror", JSON.stringify(this.state.errors));
  }

  async validateFatherMiddleName(event) {
    this.state.data.FatherMiddleName =
      this.state.data.FatherMiddleName1 +
      this.state.data.FatherMiddleName2 +
      this.state.data.FatherMiddleName3 +
      this.state.data.FatherMiddleName4 +
      this.state.data.FatherMiddleName5 +
      this.state.data.FatherMiddleName6 +
      this.state.data.FatherMiddleName7 +
      this.state.data.FatherMiddleName8 +
      this.state.data.FatherMiddleName9 +
      this.state.data.FatherMiddleName10 +
      this.state.data.FatherMiddleName11 +
      this.state.data.FatherMiddleName12 +
      this.state.data.FatherMiddleName13 +
      this.state.data.FatherMiddleName14 +
      this.state.data.FatherMiddleName15 +
      this.state.data.FatherMiddleName16 +
      this.state.data.FatherMiddleName17 +
      this.state.data.FatherMiddleName18 +
      this.state.data.FatherMiddleName19 +
      this.state.data.FatherMiddleName20 +
      this.state.data.FatherMiddleName21 +
      this.state.data.FatherMiddleName22 +
      this.state.data.FatherMiddleName23 +
      this.state.data.FatherMiddleName24 +
      this.state.data.FatherMiddleName25;

    let errors = this.state.errors;
    let name = "FatherMiddleName";
    this.setState(errors);
    errors[name] = "";

    this.ResetFatherMiddleNameError();

    if (typeof this.state.data.FatherMiddleName !== "undefined") {
      if (!this.state.data.FatherMiddleName.match(/^[a-zA-Z ]*$/)) {
        let errors = this.state.errors;
        let name = "FatherMiddleName";
        this.setState(errors);
        errors[name] = "*Please enter alphabet characters only.";

        this.state.isModalEnabled = false;
        this.HighlightFatherMiddleNameError();
      }
    }

    localStorage.setItem("localdata", JSON.stringify(this.state.data));
    localStorage.setItem("localerror", JSON.stringify(this.state.errors));
  }

  async validateMotherFirstName(event) {
    this.state.data.MotherFirstName =
      this.state.data.MotherFirstName1 +
      this.state.data.MotherFirstName2 +
      this.state.data.MotherFirstName3 +
      this.state.data.MotherFirstName4 +
      this.state.data.MotherFirstName5 +
      this.state.data.MotherFirstName6 +
      this.state.data.MotherFirstName7 +
      this.state.data.MotherFirstName8 +
      this.state.data.MotherFirstName9 +
      this.state.data.MotherFirstName10 +
      this.state.data.MotherFirstName11 +
      this.state.data.MotherFirstName12 +
      this.state.data.MotherFirstName13 +
      this.state.data.MotherFirstName14 +
      this.state.data.MotherFirstName15 +
      this.state.data.MotherFirstName16 +
      this.state.data.MotherFirstName17 +
      this.state.data.MotherFirstName18 +
      this.state.data.MotherFirstName19 +
      this.state.data.MotherFirstName20 +
      this.state.data.MotherFirstName21 +
      this.state.data.MotherFirstName22 +
      this.state.data.MotherFirstName23 +
      this.state.data.MotherFirstName24 +
      this.state.data.MotherFirstName25;

    let errors = this.state.errors;
    let name = "MotherFirstName";
    this.setState(errors);
    errors[name] = "";

    this.ResetMotherFirstNameError();

    if (this.state.data.ParentName === "15") {
      if (
        this.state.data.MotherFirstName === "" ||
        isNaN(this.state.data.MotherFirstName) === false
      ) {
        let errors = this.state.errors;
        let name = "MotherFirstName";
        this.setState(errors);
        errors[name] = "*Please enter Mother's name";

        this.state.isModalEnabled = false;
        this.HighlightMotherFirstNameError();
      }
      if (typeof this.state.data.MotherFirstName !== "undefined") {
        if (!this.state.data.MotherFirstName.match(/^[a-zA-Z ]*$/)) {
          let errors = this.state.errors;
          let name = "MotherFirstName";
          this.setState(errors);
          errors[name] = "*Please enter alphabet characters only.";

          this.state.isModalEnabled = false;
          this.HighlightMotherFirstNameError();
        }
      }
    } else if (typeof this.state.data.MotherFirstName !== "undefined") {
      if (!this.state.data.MotherFirstName.match(/^[a-zA-Z ]*$/)) {
        let errors = this.state.errors;
        let name = "MotherFirstName";
        this.setState(errors);
        errors[name] = "*Please enter alphabet characters only.";

        this.state.isModalEnabled = false;
        this.HighlightMotherFirstNameError();
      }
    }

    localStorage.setItem("localdata", JSON.stringify(this.state.data));
    localStorage.setItem("localerror", JSON.stringify(this.state.errors));
  }

  async validateMotherLastName(event) {
    this.state.data.MotherLastName =
      this.state.data.MotherLastName1 +
      this.state.data.MotherLastName2 +
      this.state.data.MotherLastName3 +
      this.state.data.MotherLastName4 +
      this.state.data.MotherLastName5 +
      this.state.data.MotherLastName6 +
      this.state.data.MotherLastName7 +
      this.state.data.MotherLastName8 +
      this.state.data.MotherLastName9 +
      this.state.data.MotherLastName10 +
      this.state.data.MotherLastName11 +
      this.state.data.MotherLastName12 +
      this.state.data.MotherLastName13 +
      this.state.data.MotherLastName14 +
      this.state.data.MotherLastName15 +
      this.state.data.MotherLastName16 +
      this.state.data.MotherLastName17 +
      this.state.data.MotherLastName18 +
      this.state.data.MotherLastName19 +
      this.state.data.MotherLastName20 +
      this.state.data.MotherLastName21 +
      this.state.data.MotherLastName22 +
      this.state.data.MotherLastName23 +
      this.state.data.MotherLastName24 +
      this.state.data.MotherLastName25;

    let errors = this.state.errors;
    let name = "MotherLastName";
    this.setState(errors);
    errors[name] = "";

    this.ResetMotherLastNameError();

    if (this.state.data.ParentName === "15") {
      
      if (
        this.state.data.MotherLastName === "" ||
        isNaN(this.state.data.MotherLastName) === false
      ) {
        let errors = this.state.errors;
        let name = "MotherLastName";
        this.setState(errors);
        errors[name] = "*Please enter Mother's name";

        this.state.isModalEnabled = false;
        this.HighlightMotherLastNameError();
      }
      if (typeof this.state.data.MotherLastName !== "undefined") {
        if (!this.state.data.MotherLastName.match(/^[a-zA-Z ]*$/)) {
          let errors = this.state.errors;
          let name = "MotherLastName";
          this.setState(errors);
          errors[name] = "*Please enter alphabet characters only.";

          this.state.isModalEnabled = false;
          this.HighlightMotherLastNameError();
        }
      }
    } else if (typeof this.state.data.MotherLastName !== "undefined") {
      if (!this.state.data.MotherLastName.match(/^[a-zA-Z ]*$/)) {
        let errors = this.state.errors;
        let name = "MotherLastName";
        this.setState(errors);
        errors[name] = "*Please enter alphabet characters only.";

        this.state.isModalEnabled = false;
        this.HighlightMotherLastNameError();
      }
    }

    localStorage.setItem("localdata", JSON.stringify(this.state.data));
    localStorage.setItem("localerror", JSON.stringify(this.state.errors));
  }

  async validateMotherMiddleName(event) {
    this.state.data.MotherMiddleName =
      this.state.data.MotherMiddleName1 +
      this.state.data.MotherMiddleName2 +
      this.state.data.MotherMiddleName3 +
      this.state.data.MotherMiddleName4 +
      this.state.data.MotherMiddleName5 +
      this.state.data.MotherMiddleName6 +
      this.state.data.MotherMiddleName7 +
      this.state.data.MotherMiddleName8 +
      this.state.data.MotherMiddleName9 +
      this.state.data.MotherMiddleName10 +
      this.state.data.MotherMiddleName11 +
      this.state.data.MotherMiddleName12 +
      this.state.data.MotherMiddleName13 +
      this.state.data.MotherMiddleName14 +
      this.state.data.MotherMiddleName15 +
      this.state.data.MotherMiddleName16 +
      this.state.data.MotherMiddleName17 +
      this.state.data.MotherMiddleName18 +
      this.state.data.MotherMiddleName19 +
      this.state.data.MotherMiddleName20 +
      this.state.data.MotherMiddleName21 +
      this.state.data.MotherMiddleName22 +
      this.state.data.MotherMiddleName23 +
      this.state.data.MotherMiddleName24 +
      this.state.data.MotherMiddleName25;

    let errors = this.state.errors;
    let name = "MotherMiddleName";
    this.setState(errors);
    errors[name] = "";

    this.ResetMotherMiddleNameError();

    if (typeof this.state.data.MotherMiddleName !== "undefined") {
      if (!this.state.data.MotherMiddleName.match(/^[a-zA-Z ]*$/)) {
        let errors = this.state.errors;
        let name = "MotherMiddleName";
        this.setState(errors);
        errors[name] = "*Please enter alphabet characters only.";

        this.state.isModalEnabled = false;
        this.HighlightMotherMiddleNameError();
      }
    }

    localStorage.setItem("localdata", JSON.stringify(this.state.data));
    localStorage.setItem("localerror", JSON.stringify(this.state.errors));
  }

  render() {
    return (
      <div>
        <div className="ColouredLabel">
          <label className="ColouredLabel">
            &nbsp;&nbsp; 6 &nbsp; Details of Parents (applicable only for
            individual applicants)
          </label>
        </div>
        <label className="FirstLabel Bold">
          Father’s Name (Mandatory. Even married women should fill in father’s
          name only)
        </label>
        <br />
        <table>
          <tbody>
            <tr>
              <td className="first_td">
                {this.state.name.map((data, index) => (
                  <label className="elements">
                    {" "}
                    {data} <br />
                  </label>
                ))}
              </td>

              <td className="secondtd">
                <div>
                  <input
                    type="text"
                    className="Name-control"
                    maxLength="1"
                    value={this.state.data.FatherLastName1}
                    name="FatherLastName1"
                    id="FatherLastName1"
                    onKeyDown={event =>
                      this.handleBackspaceKey(
                        event,
                        "#FatherLastName1",
                        "#FatherLastName1"
                      )
                    }
                    onChange={this.handleFatherLastName1}
                  />

                  <input
                    type="text"
                    className="Name-control"
                    maxLength="1"
                    value={this.state.data.FatherLastName2}
                    name="FatherLastName2"
                    id="FatherLastName2"
                    onKeyDown={event =>
                      this.handleBackspaceKey(
                        event,
                        "#FatherLastName1",
                        "#FatherLastName2"
                      )
                    }
                    onChange={this.handleFatherLastName2}
                  />

                  <input
                    type="text"
                    className="Name-control"
                    maxLength="1"
                    value={this.state.data.FatherLastName3}
                    name="FatherLastName3"
                    id="FatherLastName3"
                    onKeyDown={event =>
                      this.handleBackspaceKey(
                        event,
                        "#FatherLastName2",
                        "#FatherLastName3"
                      )
                    }
                    onChange={this.handleFatherLastName3}
                  />

                  <input
                    type="text"
                    className="Name-control"
                    maxLength="1"
                    value={this.state.data.FatherLastName4}
                    name="FatherLastName4"
                    id="FatherLastName4"
                    onKeyDown={event =>
                      this.handleBackspaceKey(
                        event,
                        "#FatherLastName3",
                        "#FatherLastName4"
                      )
                    }
                    onChange={this.handleFatherLastName4}
                  />

                  <input
                    type="text"
                    className="Name-control"
                    maxLength="1"
                    value={this.state.data.FatherLastName5}
                    name="FatherLastName5"
                    id="FatherLastName5"
                    onKeyDown={event =>
                      this.handleBackspaceKey(
                        event,
                        "#FatherLastName4",
                        "#FatherLastName5"
                      )
                    }
                    onChange={this.handleFatherLastName5}
                  />

                  <input
                    type="text"
                    className="Name-control"
                    maxLength="1"
                    value={this.state.data.FatherLastName6}
                    name="FatherLastName6"
                    id="FatherLastName6"
                    onKeyDown={event =>
                      this.handleBackspaceKey(
                        event,
                        "#FatherLastName5",
                        "#FatherLastName6"
                      )
                    }
                    onChange={this.handleFatherLastName6}
                  />

                  <input
                    type="text"
                    className="Name-control"
                    maxLength="1"
                    value={this.state.data.FatherLastName7}
                    name="FatherLastName7"
                    id="FatherLastName7"
                    onKeyDown={event =>
                      this.handleBackspaceKey(
                        event,
                        "#FatherLastName6",
                        "#FatherLastName7"
                      )
                    }
                    onChange={this.handleFatherLastName7}
                  />

                  <input
                    type="text"
                    className="Name-control"
                    maxLength="1"
                    value={this.state.data.FatherLastName8}
                    name="FatherLastName8"
                    id="FatherLastName8"
                    onKeyDown={event =>
                      this.handleBackspaceKey(
                        event,
                        "#FatherLastName7",
                        "#FatherLastName8"
                      )
                    }
                    onChange={this.handleFatherLastName8}
                  />

                  <input
                    type="text"
                    className="Name-control"
                    maxLength="1"
                    value={this.state.data.FatherLastName9}
                    name="FatherLastName9"
                    id="FatherLastName9"
                    onKeyDown={event =>
                      this.handleBackspaceKey(
                        event,
                        "#FatherLastName8",
                        "#FatherLastName9"
                      )
                    }
                    onChange={this.handleFatherLastName9}
                  />

                  <input
                    type="text"
                    className="Name-control"
                    maxLength="1"
                    value={this.state.data.FatherLastName10}
                    name="FatherLastName10"
                    id="FatherLastName10"
                    onKeyDown={event =>
                      this.handleBackspaceKey(
                        event,
                        "#FatherLastName9",
                        "#FatherLastName10"
                      )
                    }
                    onChange={this.handleFatherLastName10}
                  />

                  <input
                    type="text"
                    className="Name-control"
                    maxLength="1"
                    value={this.state.data.FatherLastName11}
                    name="FatherLastName11"
                    id="FatherLastName11"
                    onKeyDown={event =>
                      this.handleBackspaceKey(
                        event,
                        "#FatherLastName10",
                        "#FatherLastName11"
                      )
                    }
                    onChange={this.handleFatherLastName11}
                  />

                  <input
                    type="text"
                    className="Name-control"
                    maxLength="1"
                    value={this.state.data.FatherLastName12}
                    name="FatherLastName12"
                    id="FatherLastName12"
                    onKeyDown={event =>
                      this.handleBackspaceKey(
                        event,
                        "#FatherLastName11",
                        "#FatherLastName12"
                      )
                    }
                    onChange={this.handleFatherLastName12}
                  />

                  <input
                    type="text"
                    className="Name-control"
                    maxLength="1"
                    value={this.state.data.FatherLastName13}
                    name="FatherLastName13"
                    id="FatherLastName13"
                    onKeyDown={event =>
                      this.handleBackspaceKey(
                        event,
                        "#FatherLastName12",
                        "#FatherLastName13"
                      )
                    }
                    onChange={this.handleFatherLastName13}
                  />

                  <input
                    type="text"
                    className="Name-control"
                    maxLength="1"
                    value={this.state.data.FatherLastName14}
                    name="FatherLastName14"
                    id="FatherLastName14"
                    onKeyDown={event =>
                      this.handleBackspaceKey(
                        event,
                        "#FatherLastName13",
                        "#FatherLastName14"
                      )
                    }
                    onChange={this.handleFatherLastName14}
                  />

                  <input
                    type="text"
                    className="Name-control"
                    maxLength="1"
                    value={this.state.data.FatherLastName15}
                    name="FatherLastName15"
                    id="FatherLastName15"
                    onKeyDown={event =>
                      this.handleBackspaceKey(
                        event,
                        "#FatherLastName14",
                        "#FatherLastName15"
                      )
                    }
                    onChange={this.handleFatherLastName15}
                  />

                  <input
                    type="text"
                    className="Name-control"
                    maxLength="1"
                    value={this.state.data.FatherLastName16}
                    name="FatherLastName16"
                    id="FatherLastName16"
                    onKeyDown={event =>
                      this.handleBackspaceKey(
                        event,
                        "#FatherLastName15",
                        "#FatherLastName16"
                      )
                    }
                    onChange={this.handleFatherLastName16}
                  />

                  <input
                    type="text"
                    className="Name-control"
                    maxLength="1"
                    value={this.state.data.FatherLastName17}
                    name="FatherLastName17"
                    id="FatherLastName17"
                    onKeyDown={event =>
                      this.handleBackspaceKey(
                        event,
                        "#FatherLastName16",
                        "#FatherLastName17"
                      )
                    }
                    onChange={this.handleFatherLastName17}
                  />

                  <input
                    type="text"
                    className="Name-control"
                    maxLength="1"
                    value={this.state.data.FatherLastName18}
                    name="FatherLastName18"
                    id="FatherLastName18"
                    onKeyDown={event =>
                      this.handleBackspaceKey(
                        event,
                        "#FatherLastName17",
                        "#FatherLastName18"
                      )
                    }
                    onChange={this.handleFatherLastName18}
                  />

                  <input
                    type="text"
                    className="Name-control"
                    maxLength="1"
                    value={this.state.data.FatherLastName19}
                    name="FatherLastName19"
                    id="FatherLastName19"
                    onKeyDown={event =>
                      this.handleBackspaceKey(
                        event,
                        "#FatherLastName18",
                        "#FatherLastName19"
                      )
                    }
                    onChange={this.handleFatherLastName19}
                  />

                  <input
                    type="text"
                    className="Name-control"
                    maxLength="1"
                    value={this.state.data.FatherLastName20}
                    name="FatherLastName20"
                    id="FatherLastName20"
                    onKeyDown={event =>
                      this.handleBackspaceKey(
                        event,
                        "#FatherLastName19",
                        "#FatherLastName20"
                      )
                    }
                    onChange={this.handleFatherLastName20}
                  />

                  <input
                    type="text"
                    className="Name-control"
                    maxLength="1"
                    value={this.state.data.FatherLastName21}
                    name="FatherLastName21"
                    id="FatherLastName21"
                    onKeyDown={event =>
                      this.handleBackspaceKey(
                        event,
                        "#FatherLastName20",
                        "#FatherLastName21"
                      )
                    }
                    onChange={this.handleFatherLastName21}
                  />

                  <input
                    type="text"
                    className="Name-control"
                    maxLength="1"
                    value={this.state.data.FatherLastName22}
                    name="FatherLastName22"
                    id="FatherLastName22"
                    onKeyDown={event =>
                      this.handleBackspaceKey(
                        event,
                        "#FatherLastName21",
                        "#FatherLastName22"
                      )
                    }
                    onChange={this.handleFatherLastName22}
                  />

                  <input
                    type="text"
                    className="Name-control"
                    maxLength="1"
                    value={this.state.data.FatherLastName23}
                    name="FatherLastName23"
                    id="FatherLastName23"
                    onKeyDown={event =>
                      this.handleBackspaceKey(
                        event,
                        "#FatherLastName22",
                        "#FatherLastName23"
                      )
                    }
                    onChange={this.handleFatherLastName23}
                  />

                  <input
                    type="text"
                    className="Name-control"
                    maxLength="1"
                    value={this.state.data.FatherLastName24}
                    name="FatherLastName24"
                    id="FatherLastName24"
                    onKeyDown={event =>
                      this.handleBackspaceKey(
                        event,
                        "#FatherLastName23",
                        "#FatherLastName24"
                      )
                    }
                    onChange={this.handleFatherLastName24}
                  />

                  <input
                    type="text"
                    className="Name-control"
                    maxLength="1"
                    value={this.state.data.FatherLastName25}
                    name="FatherLastName25"
                    id="FatherLastName25"
                    onKeyDown={event =>
                      this.handleBackspaceKey(
                        event,
                        "#FatherLastName24",
                        "#FatherLastName25"
                      )
                    }
                    onChange={this.handleFatherLastName25}
                  />

                  {this.state.isIndicatorEnabled === false ? (
                    <span className="tooltip">
                      <img
                        src={indicator}
                        alt="img"
                        style={{
                          width: "3%",
                          height: "3%",
                          float: "right",
                          marginRight: "1%"
                        }}
                      />
                      <img
                        src={namefield}
                        alt="img"
                        className="tooltiptext"
                        style={{ width: "600px", height: "150px" }}
                      />
                    </span>
                  ) : (
                    ""
                  )}
                  <br />
                </div>

                <div>
                  <input
                    type="text"
                    className="Name-control"
                    maxLength="1"
                    value={this.state.data.FatherFirstName1}
                    name="FatherFirstName1"
                    id="FatherFirstName1"
                    onKeyDown={event =>
                      this.handleBackspaceKey(
                        event,
                        "#FatherFirstName1",
                        "#FatherFirstName1"
                      )
                    }
                    onChange={this.handleFatherFirstName1}
                  />

                  <input
                    type="text"
                    className="Name-control"
                    maxLength="1"
                    value={this.state.data.FatherFirstName2}
                    name="FatherFirstName2"
                    id="FatherFirstName2"
                    onKeyDown={event =>
                      this.handleBackspaceKey(
                        event,
                        "#FatherFirstName1",
                        "#FatherFirstName2"
                      )
                    }
                    onChange={this.handleFatherFirstName2}
                  />

                  <input
                    type="text"
                    className="Name-control"
                    maxLength="1"
                    value={this.state.data.FatherFirstName3}
                    name="FatherFirstName3"
                    id="FatherFirstName3"
                    onKeyDown={event =>
                      this.handleBackspaceKey(
                        event,
                        "#FatherFirstName2",
                        "#FatherFirstName3"
                      )
                    }
                    onChange={this.handleFatherFirstName3}
                  />

                  <input
                    type="text"
                    className="Name-control"
                    maxLength="1"
                    value={this.state.data.FatherFirstName4}
                    name="FatherFirstName4"
                    id="FatherFirstName4"
                    onKeyDown={event =>
                      this.handleBackspaceKey(
                        event,
                        "#FatherFirstName3",
                        "#FatherFirstName4"
                      )
                    }
                    onChange={this.handleFatherFirstName4}
                  />

                  <input
                    type="text"
                    className="Name-control"
                    maxLength="1"
                    value={this.state.data.FatherFirstName5}
                    name="FatherFirstName5"
                    id="FatherFirstName5"
                    onKeyDown={event =>
                      this.handleBackspaceKey(
                        event,
                        "#FatherFirstName4",
                        "#FatherFirstName5"
                      )
                    }
                    onChange={this.handleFatherFirstName5}
                  />

                  <input
                    type="text"
                    className="Name-control"
                    maxLength="1"
                    value={this.state.data.FatherFirstName6}
                    name="FatherFirstName6"
                    id="FatherFirstName6"
                    onKeyDown={event =>
                      this.handleBackspaceKey(
                        event,
                        "#FatherFirstName5",
                        "#FatherFirstName6"
                      )
                    }
                    onChange={this.handleFatherFirstName6}
                  />

                  <input
                    type="text"
                    className="Name-control"
                    maxLength="1"
                    value={this.state.data.FatherFirstName7}
                    name="FatherFirstName7"
                    id="FatherFirstName7"
                    onKeyDown={event =>
                      this.handleBackspaceKey(
                        event,
                        "#FatherFirstName6",
                        "#FatherFirstName7"
                      )
                    }
                    onChange={this.handleFatherFirstName7}
                  />

                  <input
                    type="text"
                    className="Name-control"
                    maxLength="1"
                    value={this.state.data.FatherFirstName8}
                    name="FatherFirstName8"
                    id="FatherFirstName8"
                    onKeyDown={event =>
                      this.handleBackspaceKey(
                        event,
                        "#FatherFirstName7",
                        "#FatherFirstName8"
                      )
                    }
                    onChange={this.handleFatherFirstName8}
                  />

                  <input
                    type="text"
                    className="Name-control"
                    maxLength="1"
                    value={this.state.data.FatherFirstName9}
                    name="FatherFirstName9"
                    id="FatherFirstName9"
                    onKeyDown={event =>
                      this.handleBackspaceKey(
                        event,
                        "#FatherFirstName8",
                        "#FatherFirstName9"
                      )
                    }
                    onChange={this.handleFatherFirstName9}
                  />

                  <input
                    type="text"
                    className="Name-control"
                    maxLength="1"
                    value={this.state.data.FatherFirstName10}
                    name="FatherFirstName10"
                    id="FatherFirstName10"
                    onKeyDown={event =>
                      this.handleBackspaceKey(
                        event,
                        "#FatherFirstName9",
                        "#FatherFirstName10"
                      )
                    }
                    onChange={this.handleFatherFirstName10}
                  />

                  <input
                    type="text"
                    className="Name-control"
                    maxLength="1"
                    value={this.state.data.FatherFirstName11}
                    name="FatherFirstName11"
                    id="FatherFirstName11"
                    onKeyDown={event =>
                      this.handleBackspaceKey(
                        event,
                        "#FatherFirstName10",
                        "#FatherFirstName11"
                      )
                    }
                    onChange={this.handleFatherFirstName11}
                  />

                  <input
                    type="text"
                    className="Name-control"
                    maxLength="1"
                    value={this.state.data.FatherFirstName12}
                    name="FatherFirstName12"
                    id="FatherFirstName12"
                    onKeyDown={event =>
                      this.handleBackspaceKey(
                        event,
                        "#FatherFirstName11",
                        "#FatherFirstName12"
                      )
                    }
                    onChange={this.handleFatherFirstName12}
                  />

                  <input
                    type="text"
                    className="Name-control"
                    maxLength="1"
                    value={this.state.data.FatherFirstName13}
                    name="FatherFirstName13"
                    id="FatherFirstName13"
                    onKeyDown={event =>
                      this.handleBackspaceKey(
                        event,
                        "#FatherFirstName12",
                        "#FatherFirstName13"
                      )
                    }
                    onChange={this.handleFatherFirstName13}
                  />

                  <input
                    type="text"
                    className="Name-control"
                    maxLength="1"
                    value={this.state.data.FatherFirstName14}
                    name="FatherFirstName14"
                    id="FatherFirstName14"
                    onKeyDown={event =>
                      this.handleBackspaceKey(
                        event,
                        "#FatherFirstName13",
                        "#FatherFirstName14"
                      )
                    }
                    onChange={this.handleFatherFirstName14}
                  />

                  <input
                    type="text"
                    className="Name-control"
                    maxLength="1"
                    value={this.state.data.FatherFirstName15}
                    name="FatherFirstName15"
                    id="FatherFirstName15"
                    onKeyDown={event =>
                      this.handleBackspaceKey(
                        event,
                        "#FatherFirstName14",
                        "#FatherFirstName15"
                      )
                    }
                    onChange={this.handleFatherFirstName15}
                  />

                  <input
                    type="text"
                    className="Name-control"
                    maxLength="1"
                    value={this.state.data.FatherFirstName16}
                    name="FatherFirstName16"
                    id="FatherFirstName16"
                    onKeyDown={event =>
                      this.handleBackspaceKey(
                        event,
                        "#FatherFirstName15",
                        "#FatherFirstName16"
                      )
                    }
                    onChange={this.handleFatherFirstName16}
                  />

                  <input
                    type="text"
                    className="Name-control"
                    maxLength="1"
                    value={this.state.data.FatherFirstName17}
                    name="FatherFirstName17"
                    id="FatherFirstName17"
                    onKeyDown={event =>
                      this.handleBackspaceKey(
                        event,
                        "#FatherFirstName16",
                        "#FatherFirstName17"
                      )
                    }
                    onChange={this.handleFatherFirstName17}
                  />

                  <input
                    type="text"
                    className="Name-control"
                    maxLength="1"
                    value={this.state.data.FatherFirstName18}
                    name="FatherFirstName18"
                    id="FatherFirstName18"
                    onKeyDown={event =>
                      this.handleBackspaceKey(
                        event,
                        "#FatherFirstName17",
                        "#FatherFirstName18"
                      )
                    }
                    onChange={this.handleFatherFirstName18}
                  />

                  <input
                    type="text"
                    className="Name-control"
                    maxLength="1"
                    value={this.state.data.FatherFirstName19}
                    name="FatherFirstName19"
                    id="FatherFirstName19"
                    onKeyDown={event =>
                      this.handleBackspaceKey(
                        event,
                        "#FatherFirstName18",
                        "#FatherFirstName19"
                      )
                    }
                    onChange={this.handleFatherFirstName19}
                  />

                  <input
                    type="text"
                    className="Name-control"
                    maxLength="1"
                    value={this.state.data.FatherFirstName20}
                    name="FatherFirstName20"
                    id="FatherFirstName20"
                    onKeyDown={event =>
                      this.handleBackspaceKey(
                        event,
                        "#FatherFirstName19",
                        "#FatherFirstName20"
                      )
                    }
                    onChange={this.handleFatherFirstName20}
                  />

                  <input
                    type="text"
                    className="Name-control"
                    maxLength="1"
                    value={this.state.data.FatherFirstName21}
                    name="FatherFirstName21"
                    id="FatherFirstName21"
                    onKeyDown={event =>
                      this.handleBackspaceKey(
                        event,
                        "#FatherFirstName20",
                        "#FatherFirstName21"
                      )
                    }
                    onChange={this.handleFatherFirstName21}
                  />

                  <input
                    type="text"
                    className="Name-control"
                    maxLength="1"
                    value={this.state.data.FatherFirstName22}
                    name="FatherFirstName22"
                    id="FatherFirstName22"
                    onKeyDown={event =>
                      this.handleBackspaceKey(
                        event,
                        "#FatherFirstName21",
                        "#FatherFirstName22"
                      )
                    }
                    onChange={this.handleFatherFirstName22}
                  />

                  <input
                    type="text"
                    className="Name-control"
                    maxLength="1"
                    value={this.state.data.FatherFirstName23}
                    name="FatherFirstName23"
                    id="FatherFirstName23"
                    onKeyDown={event =>
                      this.handleBackspaceKey(
                        event,
                        "#FatherFirstName22",
                        "#FatherFirstName23"
                      )
                    }
                    onChange={this.handleFatherFirstName23}
                  />

                  <input
                    type="text"
                    className="Name-control"
                    maxLength="1"
                    value={this.state.data.FatherFirstName24}
                    name="FatherFirstName24"
                    id="FatherFirstName24"
                    onKeyDown={event =>
                      this.handleBackspaceKey(
                        event,
                        "#FatherFirstName23",
                        "#FatherFirstName24"
                      )
                    }
                    onChange={this.handleFatherFirstName24}
                  />

                  <input
                    type="text"
                    className="Name-control"
                    maxLength="1"
                    value={this.state.data.FatherFirstName25}
                    name="FatherFirstName25"
                    id="FatherFirstName25"
                    onKeyDown={event =>
                      this.handleBackspaceKey(
                        event,
                        "#FatherFirstName24",
                        "#FatherFirstName25"
                      )
                    }
                    onChange={this.handleFatherFirstName25}
                  />
                  {this.state.isIndicatorEnabled === false ? (
                    <span className="tooltip">
                      <img
                        src={indicator}
                        alt="img"
                        style={{
                          width: "3%",
                          height: "3%",
                          float: "right",
                          marginRight: "1%"
                        }}
                      />
                      <img
                        src={namefield}
                        alt="img"
                        className="tooltiptext"
                        style={{ width: "600px", height: "150px" }}
                      />
                    </span>
                  ) : (
                    ""
                  )}
                  <br />
                </div>

                <div>
                  <input
                    type="text"
                    className="Name-control"
                    maxLength="1"
                    value={this.state.data.FatherMiddleName1}
                    name="FatherMiddleName1"
                    id="FatherMiddleName1"
                    onKeyDown={event =>
                      this.handleBackspaceKey(
                        event,
                        "#FatherMiddleName1",
                        "#FatherMiddleName1"
                      )
                    }
                    onChange={this.handleFatherMiddleName1}
                  />

                  <input
                    type="text"
                    className="Name-control"
                    maxLength="1"
                    value={this.state.data.FatherMiddleName2}
                    name="FatherMiddleName2"
                    id="FatherMiddleName2"
                    onKeyDown={event =>
                      this.handleBackspaceKey(
                        event,
                        "#FatherMiddleName1",
                        "#FatherMiddleName2"
                      )
                    }
                    onChange={this.handleFatherMiddleName2}
                  />

                  <input
                    type="text"
                    className="Name-control"
                    maxLength="1"
                    value={this.state.data.FatherMiddleName3}
                    name="FatherMiddleName3"
                    id="FatherMiddleName3"
                    onKeyDown={event =>
                      this.handleBackspaceKey(
                        event,
                        "#FatherMiddleName2",
                        "#FatherMiddleName3"
                      )
                    }
                    onChange={this.handleFatherMiddleName3}
                  />

                  <input
                    type="text"
                    className="Name-control"
                    maxLength="1"
                    value={this.state.data.FatherMiddleName4}
                    name="FatherMiddleName4"
                    id="FatherMiddleName4"
                    onKeyDown={event =>
                      this.handleBackspaceKey(
                        event,
                        "#FatherMiddleName3",
                        "#FatherMiddleName4"
                      )
                    }
                    onChange={this.handleFatherMiddleName4}
                  />

                  <input
                    type="text"
                    className="Name-control"
                    maxLength="1"
                    value={this.state.data.FatherMiddleName5}
                    name="FatherMiddleName5"
                    id="FatherMiddleName5"
                    onKeyDown={event =>
                      this.handleBackspaceKey(
                        event,
                        "#FatherMiddleName4",
                        "#FatherMiddleName5"
                      )
                    }
                    onChange={this.handleFatherMiddleName5}
                  />

                  <input
                    type="text"
                    className="Name-control"
                    maxLength="1"
                    value={this.state.data.FatherMiddleName6}
                    name="FatherMiddleName6"
                    id="FatherMiddleName6"
                    onKeyDown={event =>
                      this.handleBackspaceKey(
                        event,
                        "#FatherMiddleName5",
                        "#FatherMiddleName6"
                      )
                    }
                    onChange={this.handleFatherMiddleName6}
                  />

                  <input
                    type="text"
                    className="Name-control"
                    maxLength="1"
                    value={this.state.data.FatherMiddleName7}
                    name="FatherMiddleName7"
                    id="FatherMiddleName7"
                    onKeyDown={event =>
                      this.handleBackspaceKey(
                        event,
                        "#FatherMiddleName6",
                        "#FatherMiddleName7"
                      )
                    }
                    onChange={this.handleFatherMiddleName7}
                  />

                  <input
                    type="text"
                    className="Name-control"
                    maxLength="1"
                    value={this.state.data.FatherMiddleName8}
                    name="FatherMiddleName8"
                    id="FatherMiddleName8"
                    onKeyDown={event =>
                      this.handleBackspaceKey(
                        event,
                        "#FatherMiddleName7",
                        "#FatherMiddleName8"
                      )
                    }
                    onChange={this.handleFatherMiddleName8}
                  />

                  <input
                    type="text"
                    className="Name-control"
                    maxLength="1"
                    value={this.state.data.FatherMiddleName9}
                    name="FatherMiddleName9"
                    id="FatherMiddleName9"
                    onKeyDown={event =>
                      this.handleBackspaceKey(
                        event,
                        "#FatherMiddleName8",
                        "#FatherMiddleName9"
                      )
                    }
                    onChange={this.handleFatherMiddleName9}
                  />

                  <input
                    type="text"
                    className="Name-control"
                    maxLength="1"
                    value={this.state.data.FatherMiddleName10}
                    name="FatherMiddleName10"
                    id="FatherMiddleName10"
                    onKeyDown={event =>
                      this.handleBackspaceKey(
                        event,
                        "#FatherMiddleName9",
                        "#FatherMiddleName10"
                      )
                    }
                    onChange={this.handleFatherMiddleName10}
                  />

                  <input
                    type="text"
                    className="Name-control"
                    maxLength="1"
                    value={this.state.data.FatherMiddleName11}
                    name="FatherMiddleName11"
                    id="FatherMiddleName11"
                    onKeyDown={event =>
                      this.handleBackspaceKey(
                        event,
                        "#FatherMiddleName10",
                        "#FatherMiddleName11"
                      )
                    }
                    onChange={this.handleFatherMiddleName11}
                  />

                  <input
                    type="text"
                    className="Name-control"
                    maxLength="1"
                    value={this.state.data.FatherMiddleName12}
                    name="FatherMiddleName12"
                    id="FatherMiddleName12"
                    onKeyDown={event =>
                      this.handleBackspaceKey(
                        event,
                        "#FatherMiddleName11",
                        "#FatherMiddleName12"
                      )
                    }
                    onChange={this.handleFatherMiddleName12}
                  />

                  <input
                    type="text"
                    className="Name-control"
                    maxLength="1"
                    value={this.state.data.FatherMiddleName13}
                    name="FatherMiddleName13"
                    id="FatherMiddleName13"
                    onKeyDown={event =>
                      this.handleBackspaceKey(
                        event,
                        "#FatherMiddleName12",
                        "#FatherMiddleName13"
                      )
                    }
                    onChange={this.handleFatherMiddleName13}
                  />

                  <input
                    type="text"
                    className="Name-control"
                    maxLength="1"
                    value={this.state.data.FatherMiddleName14}
                    name="FatherMiddleName14"
                    id="FatherMiddleName14"
                    onKeyDown={event =>
                      this.handleBackspaceKey(
                        event,
                        "#FatherMiddleName13",
                        "#FatherMiddleName14"
                      )
                    }
                    onChange={this.handleFatherMiddleName14}
                  />

                  <input
                    type="text"
                    className="Name-control"
                    maxLength="1"
                    value={this.state.data.FatherMiddleName15}
                    name="FatherMiddleName15"
                    id="FatherMiddleName15"
                    onKeyDown={event =>
                      this.handleBackspaceKey(
                        event,
                        "#FatherMiddleName14",
                        "#FatherMiddleName15"
                      )
                    }
                    onChange={this.handleFatherMiddleName15}
                  />

                  <input
                    type="text"
                    className="Name-control"
                    maxLength="1"
                    value={this.state.data.FatherMiddleName16}
                    name="FatherMiddleName16"
                    id="FatherMiddleName16"
                    onKeyDown={event =>
                      this.handleBackspaceKey(
                        event,
                        "#FatherMiddleName15",
                        "#FatherMiddleName16"
                      )
                    }
                    onChange={this.handleFatherMiddleName16}
                  />

                  <input
                    type="text"
                    className="Name-control"
                    maxLength="1"
                    value={this.state.data.FatherMiddleName17}
                    name="FatherMiddleName17"
                    id="FatherMiddleName17"
                    onKeyDown={event =>
                      this.handleBackspaceKey(
                        event,
                        "#FatherMiddleName16",
                        "#FatherMiddleName17"
                      )
                    }
                    onChange={this.handleFatherMiddleName17}
                  />

                  <input
                    type="text"
                    className="Name-control"
                    maxLength="1"
                    value={this.state.data.FatherMiddleName18}
                    name="FatherMiddleName18"
                    id="FatherMiddleName18"
                    onKeyDown={event =>
                      this.handleBackspaceKey(
                        event,
                        "#FatherMiddleName17",
                        "#FatherMiddleName18"
                      )
                    }
                    onChange={this.handleFatherMiddleName18}
                  />

                  <input
                    type="text"
                    className="Name-control"
                    maxLength="1"
                    value={this.state.data.FatherMiddleName19}
                    name="FatherMiddleName19"
                    id="FatherMiddleName19"
                    onKeyDown={event =>
                      this.handleBackspaceKey(
                        event,
                        "#FatherMiddleName18",
                        "#FatherMiddleName19"
                      )
                    }
                    onChange={this.handleFatherMiddleName19}
                  />

                  <input
                    type="text"
                    className="Name-control"
                    maxLength="1"
                    value={this.state.data.FatherMiddleName20}
                    name="FatherMiddleName20"
                    id="FatherMiddleName20"
                    onKeyDown={event =>
                      this.handleBackspaceKey(
                        event,
                        "#FatherMiddleName19",
                        "#FatherMiddleName20"
                      )
                    }
                    onChange={this.handleFatherMiddleName20}
                  />

                  <input
                    type="text"
                    className="Name-control"
                    maxLength="1"
                    value={this.state.data.FatherMiddleName21}
                    name="FatherMiddleName21"
                    id="FatherMiddleName21"
                    onKeyDown={event =>
                      this.handleBackspaceKey(
                        event,
                        "#FatherMiddleName20",
                        "#FatherMiddleName21"
                      )
                    }
                    onChange={this.handleFatherMiddleName21}
                  />

                  <input
                    type="text"
                    className="Name-control"
                    maxLength="1"
                    value={this.state.data.FatherMiddleName22}
                    name="FatherMiddleName22"
                    id="FatherMiddleName22"
                    onKeyDown={event =>
                      this.handleBackspaceKey(
                        event,
                        "#FatherMiddleName21",
                        "#FatherMiddleName22"
                      )
                    }
                    onChange={this.handleFatherMiddleName22}
                  />

                  <input
                    type="text"
                    className="Name-control"
                    maxLength="1"
                    value={this.state.data.FatherMiddleName23}
                    name="FatherMiddleName23"
                    id="FatherMiddleName23"
                    onKeyDown={event =>
                      this.handleBackspaceKey(
                        event,
                        "#FatherMiddleName22",
                        "#FatherMiddleName23"
                      )
                    }
                    onChange={this.handleFatherMiddleName23}
                  />

                  <input
                    type="text"
                    className="Name-control"
                    maxLength="1"
                    value={this.state.data.FatherMiddleName24}
                    name="FatherMiddleName24"
                    id="FatherMiddleName24"
                    onKeyDown={event =>
                      this.handleBackspaceKey(
                        event,
                        "#FatherMiddleName23",
                        "#FatherMiddleName24"
                      )
                    }
                    onChange={this.handleFatherMiddleName24}
                  />

                  <input
                    type="text"
                    className="Name-control"
                    maxLength="1"
                    value={this.state.data.FatherMiddleName25}
                    name="FatherMiddleName25"
                    id="FatherMiddleName25"
                    onKeyDown={event =>
                      this.handleBackspaceKey(
                        event,
                        "#FatherMiddleName24",
                        "#FatherMiddleName25"
                      )
                    }
                    onChange={this.handleFatherMiddleName25}
                  />
                  {this.state.isIndicatorEnabled === false ? (
                    <span className="tooltip">
                      <img
                        src={indicator}
                        alt="img"
                        style={{
                          width: "3%",
                          height: "3%",
                          float: "right",
                          marginRight: "1%"
                        }}
                      />
                      <img
                        src={namefield}
                        alt="img"
                        className="tooltiptext"
                        style={{ width: "600px", height: "150px" }}
                      />
                    </span>
                  ) : (
                    ""
                  )}
                  <br />
                </div>
              </td>
            </tr>
          </tbody>
        </table>
        <label className="FirstLabel Bold">Mother’s Name (optional)</label>
        <br />
        <table>
          <tbody>
            <tr>
              <td className="first_td">
                {this.state.name.map((data, index) => (
                  <label className="elements">
                    {" "}
                    {data} <br />
                  </label>
                ))}
              </td>

              <td className="secondtd">
                <div>
                  <input
                    type="text"
                    className="Name-control"
                    maxLength="1"
                    value={this.state.data.MotherLastName1}
                    name="MotherLastName1"
                    id="MotherLastName1"
                    onKeyDown={event =>
                      this.handleBackspaceKey(
                        event,
                        "#MotherLastName1",
                        "#MotherLastName1"
                      )
                    }
                    onChange={this.handleMotherLastName1}
                  />

                  <input
                    type="text"
                    className="Name-control"
                    maxLength="1"
                    value={this.state.data.MotherLastName2}
                    name="MotherLastName2"
                    id="MotherLastName2"
                    onKeyDown={event =>
                      this.handleBackspaceKey(
                        event,
                        "#MotherLastName1",
                        "#MotherLastName2"
                      )
                    }
                    onChange={this.handleMotherLastName2}
                  />

                  <input
                    type="text"
                    className="Name-control"
                    maxLength="1"
                    value={this.state.data.MotherLastName3}
                    name="MotherLastName3"
                    id="MotherLastName3"
                    onKeyDown={event =>
                      this.handleBackspaceKey(
                        event,
                        "#MotherLastName2",
                        "#MotherLastName3"
                      )
                    }
                    onChange={this.handleMotherLastName3}
                  />

                  <input
                    type="text"
                    className="Name-control"
                    maxLength="1"
                    value={this.state.data.MotherLastName4}
                    name="MotherLastName4"
                    id="MotherLastName4"
                    onKeyDown={event =>
                      this.handleBackspaceKey(
                        event,
                        "#MotherLastName3",
                        "#MotherLastName4"
                      )
                    }
                    onChange={this.handleMotherLastName4}
                  />

                  <input
                    type="text"
                    className="Name-control"
                    maxLength="1"
                    value={this.state.data.MotherLastName5}
                    name="MotherLastName5"
                    id="MotherLastName5"
                    onKeyDown={event =>
                      this.handleBackspaceKey(
                        event,
                        "#MotherLastName4",
                        "#MotherLastName5"
                      )
                    }
                    onChange={this.handleMotherLastName5}
                  />

                  <input
                    type="text"
                    className="Name-control"
                    maxLength="1"
                    value={this.state.data.MotherLastName6}
                    name="MotherLastName6"
                    id="MotherLastName6"
                    onKeyDown={event =>
                      this.handleBackspaceKey(
                        event,
                        "#MotherLastName5",
                        "#MotherLastName6"
                      )
                    }
                    onChange={this.handleMotherLastName6}
                  />

                  <input
                    type="text"
                    className="Name-control"
                    maxLength="1"
                    value={this.state.data.MotherLastName7}
                    name="MotherLastName7"
                    id="MotherLastName7"
                    onKeyDown={event =>
                      this.handleBackspaceKey(
                        event,
                        "#MotherLastName6",
                        "#MotherLastName7"
                      )
                    }
                    onChange={this.handleMotherLastName7}
                  />

                  <input
                    type="text"
                    className="Name-control"
                    maxLength="1"
                    value={this.state.data.MotherLastName8}
                    name="MotherLastName8"
                    id="MotherLastName8"
                    onKeyDown={event =>
                      this.handleBackspaceKey(
                        event,
                        "#MotherLastName7",
                        "#MotherLastName8"
                      )
                    }
                    onChange={this.handleMotherLastName8}
                  />

                  <input
                    type="text"
                    className="Name-control"
                    maxLength="1"
                    value={this.state.data.MotherLastName9}
                    name="MotherLastName9"
                    id="MotherLastName9"
                    onKeyDown={event =>
                      this.handleBackspaceKey(
                        event,
                        "#MotherLastName8",
                        "#MotherLastName9"
                      )
                    }
                    onChange={this.handleMotherLastName9}
                  />

                  <input
                    type="text"
                    className="Name-control"
                    maxLength="1"
                    value={this.state.data.MotherLastName10}
                    name="MotherLastName10"
                    id="MotherLastName10"
                    onKeyDown={event =>
                      this.handleBackspaceKey(
                        event,
                        "#MotherLastName9",
                        "#MotherLastName10"
                      )
                    }
                    onChange={this.handleMotherLastName10}
                  />

                  <input
                    type="text"
                    className="Name-control"
                    maxLength="1"
                    value={this.state.data.MotherLastName11}
                    name="MotherLastName11"
                    id="MotherLastName11"
                    onKeyDown={event =>
                      this.handleBackspaceKey(
                        event,
                        "#MotherLastName10",
                        "#MotherLastName11"
                      )
                    }
                    onChange={this.handleMotherLastName11}
                  />

                  <input
                    type="text"
                    className="Name-control"
                    maxLength="1"
                    value={this.state.data.MotherLastName12}
                    name="MotherLastName12"
                    id="MotherLastName12"
                    onKeyDown={event =>
                      this.handleBackspaceKey(
                        event,
                        "#MotherLastName11",
                        "#MotherLastName12"
                      )
                    }
                    onChange={this.handleMotherLastName12}
                  />

                  <input
                    type="text"
                    className="Name-control"
                    maxLength="1"
                    value={this.state.data.MotherLastName13}
                    name="MotherLastName13"
                    id="MotherLastName13"
                    onKeyDown={event =>
                      this.handleBackspaceKey(
                        event,
                        "#MotherLastName12",
                        "#MotherLastName13"
                      )
                    }
                    onChange={this.handleMotherLastName13}
                  />

                  <input
                    type="text"
                    className="Name-control"
                    maxLength="1"
                    value={this.state.data.MotherLastName14}
                    name="MotherLastName14"
                    id="MotherLastName14"
                    onKeyDown={event =>
                      this.handleBackspaceKey(
                        event,
                        "#MotherLastName13",
                        "#MotherLastName14"
                      )
                    }
                    onChange={this.handleMotherLastName14}
                  />

                  <input
                    type="text"
                    className="Name-control"
                    maxLength="1"
                    value={this.state.data.MotherLastName15}
                    name="MotherLastName15"
                    id="MotherLastName15"
                    onKeyDown={event =>
                      this.handleBackspaceKey(
                        event,
                        "#MotherLastName14",
                        "#MotherLastName15"
                      )
                    }
                    onChange={this.handleMotherLastName15}
                  />

                  <input
                    type="text"
                    className="Name-control"
                    maxLength="1"
                    value={this.state.data.MotherLastName16}
                    name="MotherLastName16"
                    id="MotherLastName16"
                    onKeyDown={event =>
                      this.handleBackspaceKey(
                        event,
                        "#MotherLastName15",
                        "#MotherLastName16"
                      )
                    }
                    onChange={this.handleMotherLastName16}
                  />

                  <input
                    type="text"
                    className="Name-control"
                    maxLength="1"
                    value={this.state.data.MotherLastName17}
                    name="MotherLastName17"
                    id="MotherLastName17"
                    onKeyDown={event =>
                      this.handleBackspaceKey(
                        event,
                        "#MotherLastName16",
                        "#MotherLastName17"
                      )
                    }
                    onChange={this.handleMotherLastName17}
                  />

                  <input
                    type="text"
                    className="Name-control"
                    maxLength="1"
                    value={this.state.data.MotherLastName18}
                    name="MotherLastName18"
                    id="MotherLastName18"
                    onKeyDown={event =>
                      this.handleBackspaceKey(
                        event,
                        "#MotherLastName17",
                        "#MotherLastName18"
                      )
                    }
                    onChange={this.handleMotherLastName18}
                  />

                  <input
                    type="text"
                    className="Name-control"
                    maxLength="1"
                    value={this.state.data.MotherLastName19}
                    name="MotherLastName19"
                    id="MotherLastName19"
                    onKeyDown={event =>
                      this.handleBackspaceKey(
                        event,
                        "#MotherLastName18",
                        "#MotherLastName19"
                      )
                    }
                    onChange={this.handleMotherLastName19}
                  />

                  <input
                    type="text"
                    className="Name-control"
                    maxLength="1"
                    value={this.state.data.MotherLastName20}
                    name="MotherLastName20"
                    id="MotherLastName20"
                    onKeyDown={event =>
                      this.handleBackspaceKey(
                        event,
                        "#MotherLastName19",
                        "#MotherLastName20"
                      )
                    }
                    onChange={this.handleMotherLastName20}
                  />

                  <input
                    type="text"
                    className="Name-control"
                    maxLength="1"
                    value={this.state.data.MotherLastName21}
                    name="MotherLastName21"
                    id="MotherLastName21"
                    onKeyDown={event =>
                      this.handleBackspaceKey(
                        event,
                        "#MotherLastName20",
                        "#MotherLastName21"
                      )
                    }
                    onChange={this.handleMotherLastName21}
                  />

                  <input
                    type="text"
                    className="Name-control"
                    maxLength="1"
                    value={this.state.data.MotherLastName22}
                    name="MotherLastName22"
                    id="MotherLastName22"
                    onKeyDown={event =>
                      this.handleBackspaceKey(
                        event,
                        "#MotherLastName21",
                        "#MotherLastName22"
                      )
                    }
                    onChange={this.handleMotherLastName22}
                  />

                  <input
                    type="text"
                    className="Name-control"
                    maxLength="1"
                    value={this.state.data.MotherLastName23}
                    name="MotherLastName23"
                    id="MotherLastName23"
                    onKeyDown={event =>
                      this.handleBackspaceKey(
                        event,
                        "#MotherLastName22",
                        "#MotherLastName23"
                      )
                    }
                    onChange={this.handleMotherLastName23}
                  />

                  <input
                    type="text"
                    className="Name-control"
                    maxLength="1"
                    value={this.state.data.MotherLastName24}
                    name="MotherLastName24"
                    id="MotherLastName24"
                    onKeyDown={event =>
                      this.handleBackspaceKey(
                        event,
                        "#MotherLastName23",
                        "#MotherLastName24"
                      )
                    }
                    onChange={this.handleMotherLastName24}
                  />

                  <input
                    type="text"
                    className="Name-control"
                    maxLength="1"
                    value={this.state.data.MotherLastName25}
                    name="MotherLastName25"
                    id="MotherLastName25"
                    onKeyDown={event =>
                      this.handleBackspaceKey(
                        event,
                        "#MotherLastName24",
                        "#MotherLastName25"
                      )
                    }
                    onChange={this.handleMotherLastName25}
                  />

                  {this.state.isIndicatorEnabled === false ? (
                    <span className="tooltip">
                      <img
                        src={indicator}
                        alt="img"
                        style={{
                          width: "3%",
                          height: "3%",
                          float: "right",
                          marginRight: "1%"
                        }}
                      />
                      <img
                        src={namefield}
                        alt="img"
                        className="tooltiptext"
                        style={{ width: "600px", height: "150px" }}
                      />
                    </span>
                  ) : (
                    ""
                  )}
                  <br />
                </div>

                <div>
                  <input
                    type="text"
                    className="Name-control"
                    maxLength="1"
                    value={this.state.data.MotherFirstName1}
                    name="MotherFirstName1"
                    id="MotherFirstName1"
                    onKeyDown={event =>
                      this.handleBackspaceKey(
                        event,
                        "#MotherFirstName1",
                        "#MotherFirstName1"
                      )
                    }
                    onChange={this.handleMotherFirstName1}
                  />

                  <input
                    type="text"
                    className="Name-control"
                    maxLength="1"
                    value={this.state.data.MotherFirstName2}
                    name="MotherFirstName2"
                    id="MotherFirstName2"
                    onKeyDown={event =>
                      this.handleBackspaceKey(
                        event,
                        "#MotherFirstName1",
                        "#MotherFirstName2"
                      )
                    }
                    onChange={this.handleMotherFirstName2}
                  />

                  <input
                    type="text"
                    className="Name-control"
                    maxLength="1"
                    value={this.state.data.MotherFirstName3}
                    name="MotherFirstName3"
                    id="MotherFirstName3"
                    onKeyDown={event =>
                      this.handleBackspaceKey(
                        event,
                        "#MotherFirstName2",
                        "#MotherFirstName3"
                      )
                    }
                    onChange={this.handleMotherFirstName3}
                  />

                  <input
                    type="text"
                    className="Name-control"
                    maxLength="1"
                    value={this.state.data.MotherFirstName4}
                    name="MotherFirstName4"
                    id="MotherFirstName4"
                    onKeyDown={event =>
                      this.handleBackspaceKey(
                        event,
                        "#MotherFirstName3",
                        "#MotherFirstName4"
                      )
                    }
                    onChange={this.handleMotherFirstName4}
                  />

                  <input
                    type="text"
                    className="Name-control"
                    maxLength="1"
                    value={this.state.data.MotherFirstName5}
                    name="MotherFirstName5"
                    id="MotherFirstName5"
                    onKeyDown={event =>
                      this.handleBackspaceKey(
                        event,
                        "#MotherFirstName4",
                        "#MotherFirstName5"
                      )
                    }
                    onChange={this.handleMotherFirstName5}
                  />

                  <input
                    type="text"
                    className="Name-control"
                    maxLength="1"
                    value={this.state.data.MotherFirstName6}
                    name="MotherFirstName6"
                    id="MotherFirstName6"
                    onKeyDown={event =>
                      this.handleBackspaceKey(
                        event,
                        "#MotherFirstName5",
                        "#MotherFirstName6"
                      )
                    }
                    onChange={this.handleMotherFirstName6}
                  />

                  <input
                    type="text"
                    className="Name-control"
                    maxLength="1"
                    value={this.state.data.MotherFirstName7}
                    name="MotherFirstName7"
                    id="MotherFirstName7"
                    onKeyDown={event =>
                      this.handleBackspaceKey(
                        event,
                        "#MotherFirstName6",
                        "#MotherFirstName7"
                      )
                    }
                    onChange={this.handleMotherFirstName7}
                  />

                  <input
                    type="text"
                    className="Name-control"
                    maxLength="1"
                    value={this.state.data.MotherFirstName8}
                    name="MotherFirstName8"
                    id="MotherFirstName8"
                    onKeyDown={event =>
                      this.handleBackspaceKey(
                        event,
                        "#MotherFirstName7",
                        "#MotherFirstName8"
                      )
                    }
                    onChange={this.handleMotherFirstName8}
                  />

                  <input
                    type="text"
                    className="Name-control"
                    maxLength="1"
                    value={this.state.data.MotherFirstName9}
                    name="MotherFirstName9"
                    id="MotherFirstName9"
                    onKeyDown={event =>
                      this.handleBackspaceKey(
                        event,
                        "#MotherFirstName8",
                        "#MotherFirstName9"
                      )
                    }
                    onChange={this.handleMotherFirstName9}
                  />

                  <input
                    type="text"
                    className="Name-control"
                    maxLength="1"
                    value={this.state.data.MotherFirstName10}
                    name="MotherFirstName10"
                    id="MotherFirstName10"
                    onKeyDown={event =>
                      this.handleBackspaceKey(
                        event,
                        "#MotherFirstName9",
                        "#MotherFirstName10"
                      )
                    }
                    onChange={this.handleMotherFirstName10}
                  />

                  <input
                    type="text"
                    className="Name-control"
                    maxLength="1"
                    value={this.state.data.MotherFirstName11}
                    name="MotherFirstName11"
                    id="MotherFirstName11"
                    onKeyDown={event =>
                      this.handleBackspaceKey(
                        event,
                        "#MotherFirstName10",
                        "#MotherFirstName11"
                      )
                    }
                    onChange={this.handleMotherFirstName11}
                  />

                  <input
                    type="text"
                    className="Name-control"
                    maxLength="1"
                    value={this.state.data.MotherFirstName12}
                    name="MotherFirstName12"
                    id="MotherFirstName12"
                    onKeyDown={event =>
                      this.handleBackspaceKey(
                        event,
                        "#MotherFirstName11",
                        "#MotherFirstName12"
                      )
                    }
                    onChange={this.handleMotherFirstName12}
                  />

                  <input
                    type="text"
                    className="Name-control"
                    maxLength="1"
                    value={this.state.data.MotherFirstName13}
                    name="MotherFirstName13"
                    id="MotherFirstName13"
                    onKeyDown={event =>
                      this.handleBackspaceKey(
                        event,
                        "#MotherFirstName12",
                        "#MotherFirstName13"
                      )
                    }
                    onChange={this.handleMotherFirstName13}
                  />

                  <input
                    type="text"
                    className="Name-control"
                    maxLength="1"
                    value={this.state.data.MotherFirstName14}
                    name="MotherFirstName14"
                    id="MotherFirstName14"
                    onKeyDown={event =>
                      this.handleBackspaceKey(
                        event,
                        "#MotherFirstName13",
                        "#MotherFirstName14"
                      )
                    }
                    onChange={this.handleMotherFirstName14}
                  />

                  <input
                    type="text"
                    className="Name-control"
                    maxLength="1"
                    value={this.state.data.MotherFirstName15}
                    name="MotherFirstName15"
                    id="MotherFirstName15"
                    onKeyDown={event =>
                      this.handleBackspaceKey(
                        event,
                        "#MotherFirstName14",
                        "#MotherFirstName15"
                      )
                    }
                    onChange={this.handleMotherFirstName15}
                  />

                  <input
                    type="text"
                    className="Name-control"
                    maxLength="1"
                    value={this.state.data.MotherFirstName16}
                    name="MotherFirstName16"
                    id="MotherFirstName16"
                    onKeyDown={event =>
                      this.handleBackspaceKey(
                        event,
                        "#MotherFirstName15",
                        "#MotherFirstName16"
                      )
                    }
                    onChange={this.handleMotherFirstName16}
                  />

                  <input
                    type="text"
                    className="Name-control"
                    maxLength="1"
                    value={this.state.data.MotherFirstName17}
                    name="MotherFirstName17"
                    id="MotherFirstName17"
                    onKeyDown={event =>
                      this.handleBackspaceKey(
                        event,
                        "#MotherFirstName16",
                        "#MotherFirstName17"
                      )
                    }
                    onChange={this.handleMotherFirstName17}
                  />

                  <input
                    type="text"
                    className="Name-control"
                    maxLength="1"
                    value={this.state.data.MotherFirstName18}
                    name="MotherFirstName18"
                    id="MotherFirstName18"
                    onKeyDown={event =>
                      this.handleBackspaceKey(
                        event,
                        "#MotherFirstName17",
                        "#MotherFirstName18"
                      )
                    }
                    onChange={this.handleMotherFirstName18}
                  />

                  <input
                    type="text"
                    className="Name-control"
                    maxLength="1"
                    value={this.state.data.MotherFirstName19}
                    name="MotherFirstName19"
                    id="MotherFirstName19"
                    onKeyDown={event =>
                      this.handleBackspaceKey(
                        event,
                        "#MotherFirstName18",
                        "#MotherFirstName19"
                      )
                    }
                    onChange={this.handleMotherFirstName19}
                  />

                  <input
                    type="text"
                    className="Name-control"
                    maxLength="1"
                    value={this.state.data.MotherFirstName20}
                    name="MotherFirstName20"
                    id="MotherFirstName20"
                    onKeyDown={event =>
                      this.handleBackspaceKey(
                        event,
                        "#MotherFirstName19",
                        "#MotherFirstName20"
                      )
                    }
                    onChange={this.handleMotherFirstName20}
                  />

                  <input
                    type="text"
                    className="Name-control"
                    maxLength="1"
                    value={this.state.data.MotherFirstName21}
                    name="MotherFirstName21"
                    id="MotherFirstName21"
                    onKeyDown={event =>
                      this.handleBackspaceKey(
                        event,
                        "#MotherFirstName20",
                        "#MotherFirstName21"
                      )
                    }
                    onChange={this.handleMotherFirstName21}
                  />

                  <input
                    type="text"
                    className="Name-control"
                    maxLength="1"
                    value={this.state.data.MotherFirstName22}
                    name="MotherFirstName22"
                    id="MotherFirstName22"
                    onKeyDown={event =>
                      this.handleBackspaceKey(
                        event,
                        "#MotherFirstName21",
                        "#MotherFirstName22"
                      )
                    }
                    onChange={this.handleMotherFirstName22}
                  />

                  <input
                    type="text"
                    className="Name-control"
                    maxLength="1"
                    value={this.state.data.MotherFirstName23}
                    name="MotherFirstName23"
                    id="MotherFirstName23"
                    onKeyDown={event =>
                      this.handleBackspaceKey(
                        event,
                        "#MotherFirstName22",
                        "#MotherFirstName23"
                      )
                    }
                    onChange={this.handleMotherFirstName23}
                  />

                  <input
                    type="text"
                    className="Name-control"
                    maxLength="1"
                    value={this.state.data.MotherFirstName24}
                    name="MotherFirstName24"
                    id="MotherFirstName24"
                    onKeyDown={event =>
                      this.handleBackspaceKey(
                        event,
                        "#MotherFirstName23",
                        "#MotherFirstName24"
                      )
                    }
                    onChange={this.handleMotherFirstName24}
                  />

                  <input
                    type="text"
                    className="Name-control"
                    maxLength="1"
                    value={this.state.data.MotherFirstName25}
                    name="MotherFirstName25"
                    id="MotherFirstName25"
                    onKeyDown={event =>
                      this.handleBackspaceKey(
                        event,
                        "#MotherFirstName24",
                        "#MotherFirstName25"
                      )
                    }
                    onChange={this.handleMotherFirstName25}
                  />
                  {this.state.isIndicatorEnabled === false ? (
                    <span className="tooltip">
                      <img
                        src={indicator}
                        alt="img"
                        style={{
                          width: "3%",
                          height: "3%",
                          float: "right",
                          marginRight: "1%"
                        }}
                      />
                      <img
                        src={namefield}
                        alt="img"
                        className="tooltiptext"
                        style={{ width: "600px", height: "150px" }}
                      />
                    </span>
                  ) : (
                    ""
                  )}
                  <br />
                </div>

                <div>
                  <input
                    type="text"
                    className="Name-control"
                    maxLength="1"
                    value={this.state.data.MotherMiddleName1}
                    name="MotherMiddleName1"
                    id="MotherMiddleName1"
                    onKeyDown={event =>
                      this.handleBackspaceKey(
                        event,
                        "#MotherMiddleName1",
                        "#MotherMiddleName1"
                      )
                    }
                    onChange={this.handleMotherMiddleName1}
                  />

                  <input
                    type="text"
                    className="Name-control"
                    maxLength="1"
                    value={this.state.data.MotherMiddleName2}
                    name="MotherMiddleName2"
                    id="MotherMiddleName2"
                    onKeyDown={event =>
                      this.handleBackspaceKey(
                        event,
                        "#MotherMiddleName1",
                        "#MotherMiddleName2"
                      )
                    }
                    onChange={this.handleMotherMiddleName2}
                  />

                  <input
                    type="text"
                    className="Name-control"
                    maxLength="1"
                    value={this.state.data.MotherMiddleName3}
                    name="MotherMiddleName3"
                    id="MotherMiddleName3"
                    onKeyDown={event =>
                      this.handleBackspaceKey(
                        event,
                        "#MotherMiddleName2",
                        "#MotherMiddleName3"
                      )
                    }
                    onChange={this.handleMotherMiddleName3}
                  />

                  <input
                    type="text"
                    className="Name-control"
                    maxLength="1"
                    value={this.state.data.MotherMiddleName4}
                    name="MotherMiddleName4"
                    id="MotherMiddleName4"
                    onKeyDown={event =>
                      this.handleBackspaceKey(
                        event,
                        "#MotherMiddleName3",
                        "#MotherMiddleName4"
                      )
                    }
                    onChange={this.handleMotherMiddleName4}
                  />

                  <input
                    type="text"
                    className="Name-control"
                    maxLength="1"
                    value={this.state.data.MotherMiddleName5}
                    name="MotherMiddleName5"
                    id="MotherMiddleName5"
                    onKeyDown={event =>
                      this.handleBackspaceKey(
                        event,
                        "#MotherMiddleName4",
                        "#MotherMiddleName5"
                      )
                    }
                    onChange={this.handleMotherMiddleName5}
                  />

                  <input
                    type="text"
                    className="Name-control"
                    maxLength="1"
                    value={this.state.data.MotherMiddleName6}
                    name="MotherMiddleName6"
                    id="MotherMiddleName6"
                    onKeyDown={event =>
                      this.handleBackspaceKey(
                        event,
                        "#MotherMiddleName5",
                        "#MotherMiddleName6"
                      )
                    }
                    onChange={this.handleMotherMiddleName6}
                  />

                  <input
                    type="text"
                    className="Name-control"
                    maxLength="1"
                    value={this.state.data.MotherMiddleName7}
                    name="MotherMiddleName7"
                    id="MotherMiddleName7"
                    onKeyDown={event =>
                      this.handleBackspaceKey(
                        event,
                        "#MotherMiddleName6",
                        "#MotherMiddleName7"
                      )
                    }
                    onChange={this.handleMotherMiddleName7}
                  />

                  <input
                    type="text"
                    className="Name-control"
                    maxLength="1"
                    value={this.state.data.MotherMiddleName8}
                    name="MotherMiddleName8"
                    id="MotherMiddleName8"
                    onKeyDown={event =>
                      this.handleBackspaceKey(
                        event,
                        "#MotherMiddleName7",
                        "#MotherMiddleName8"
                      )
                    }
                    onChange={this.handleMotherMiddleName8}
                  />

                  <input
                    type="text"
                    className="Name-control"
                    maxLength="1"
                    value={this.state.data.MotherMiddleName9}
                    name="MotherMiddleName9"
                    id="MotherMiddleName9"
                    onKeyDown={event =>
                      this.handleBackspaceKey(
                        event,
                        "#MotherMiddleName8",
                        "#MotherMiddleName9"
                      )
                    }
                    onChange={this.handleMotherMiddleName9}
                  />

                  <input
                    type="text"
                    className="Name-control"
                    maxLength="1"
                    value={this.state.data.MotherMiddleName10}
                    name="MotherMiddleName10"
                    id="MotherMiddleName10"
                    onKeyDown={event =>
                      this.handleBackspaceKey(
                        event,
                        "#MotherMiddleName9",
                        "#MotherMiddleName10"
                      )
                    }
                    onChange={this.handleMotherMiddleName10}
                  />

                  <input
                    type="text"
                    className="Name-control"
                    maxLength="1"
                    value={this.state.data.MotherMiddleName11}
                    name="MotherMiddleName11"
                    id="MotherMiddleName11"
                    onKeyDown={event =>
                      this.handleBackspaceKey(
                        event,
                        "#MotherMiddleName10",
                        "#MotherMiddleName11"
                      )
                    }
                    onChange={this.handleMotherMiddleName11}
                  />

                  <input
                    type="text"
                    className="Name-control"
                    maxLength="1"
                    value={this.state.data.MotherMiddleName12}
                    name="MotherMiddleName12"
                    id="MotherMiddleName12"
                    onKeyDown={event =>
                      this.handleBackspaceKey(
                        event,
                        "#MotherMiddleName11",
                        "#MotherMiddleName12"
                      )
                    }
                    onChange={this.handleMotherMiddleName12}
                  />

                  <input
                    type="text"
                    className="Name-control"
                    maxLength="1"
                    value={this.state.data.MotherMiddleName13}
                    name="MotherMiddleName13"
                    id="MotherMiddleName13"
                    onKeyDown={event =>
                      this.handleBackspaceKey(
                        event,
                        "#MotherMiddleName12",
                        "#MotherMiddleName13"
                      )
                    }
                    onChange={this.handleMotherMiddleName13}
                  />

                  <input
                    type="text"
                    className="Name-control"
                    maxLength="1"
                    value={this.state.data.MotherMiddleName14}
                    name="MotherMiddleName14"
                    id="MotherMiddleName14"
                    onKeyDown={event =>
                      this.handleBackspaceKey(
                        event,
                        "#MotherMiddleName13",
                        "#MotherMiddleName14"
                      )
                    }
                    onChange={this.handleMotherMiddleName14}
                  />

                  <input
                    type="text"
                    className="Name-control"
                    maxLength="1"
                    value={this.state.data.MotherMiddleName15}
                    name="MotherMiddleName15"
                    id="MotherMiddleName15"
                    onKeyDown={event =>
                      this.handleBackspaceKey(
                        event,
                        "#MotherMiddleName14",
                        "#MotherMiddleName15"
                      )
                    }
                    onChange={this.handleMotherMiddleName15}
                  />

                  <input
                    type="text"
                    className="Name-control"
                    maxLength="1"
                    value={this.state.data.MotherMiddleName16}
                    name="MotherMiddleName16"
                    id="MotherMiddleName16"
                    onKeyDown={event =>
                      this.handleBackspaceKey(
                        event,
                        "#MotherMiddleName15",
                        "#MotherMiddleName16"
                      )
                    }
                    onChange={this.handleMotherMiddleName16}
                  />

                  <input
                    type="text"
                    className="Name-control"
                    maxLength="1"
                    value={this.state.data.MotherMiddleName17}
                    name="MotherMiddleName17"
                    id="MotherMiddleName17"
                    onKeyDown={event =>
                      this.handleBackspaceKey(
                        event,
                        "#MotherMiddleName16",
                        "#MotherMiddleName17"
                      )
                    }
                    onChange={this.handleMotherMiddleName17}
                  />

                  <input
                    type="text"
                    className="Name-control"
                    maxLength="1"
                    value={this.state.data.MotherMiddleName18}
                    name="MotherMiddleName18"
                    id="MotherMiddleName18"
                    onKeyDown={event =>
                      this.handleBackspaceKey(
                        event,
                        "#MotherMiddleName17",
                        "#MotherMiddleName18"
                      )
                    }
                    onChange={this.handleMotherMiddleName18}
                  />

                  <input
                    type="text"
                    className="Name-control"
                    maxLength="1"
                    value={this.state.data.MotherMiddleName19}
                    name="MotherMiddleName19"
                    id="MotherMiddleName19"
                    onKeyDown={event =>
                      this.handleBackspaceKey(
                        event,
                        "#MotherMiddleName18",
                        "#MotherMiddleName19"
                      )
                    }
                    onChange={this.handleMotherMiddleName19}
                  />

                  <input
                    type="text"
                    className="Name-control"
                    maxLength="1"
                    value={this.state.data.MotherMiddleName20}
                    name="MotherMiddleName20"
                    id="MotherMiddleName20"
                    onKeyDown={event =>
                      this.handleBackspaceKey(
                        event,
                        "#MotherMiddleName19",
                        "#MotherMiddleName20"
                      )
                    }
                    onChange={this.handleMotherMiddleName20}
                  />

                  <input
                    type="text"
                    className="Name-control"
                    maxLength="1"
                    value={this.state.data.MotherMiddleName21}
                    name="MotherMiddleName21"
                    id="MotherMiddleName21"
                    onKeyDown={event =>
                      this.handleBackspaceKey(
                        event,
                        "#MotherMiddleName20",
                        "#MotherMiddleName21"
                      )
                    }
                    onChange={this.handleMotherMiddleName21}
                  />

                  <input
                    type="text"
                    className="Name-control"
                    maxLength="1"
                    value={this.state.data.MotherMiddleName22}
                    name="MotherMiddleName22"
                    id="MotherMiddleName22"
                    onKeyDown={event =>
                      this.handleBackspaceKey(
                        event,
                        "#MotherMiddleName21",
                        "#MotherMiddleName22"
                      )
                    }
                    onChange={this.handleMotherMiddleName22}
                  />

                  <input
                    type="text"
                    className="Name-control"
                    maxLength="1"
                    value={this.state.data.MotherMiddleName23}
                    name="MotherMiddleName23"
                    id="MotherMiddleName23"
                    onKeyDown={event =>
                      this.handleBackspaceKey(
                        event,
                        "#MotherMiddleName22",
                        "#MotherMiddleName23"
                      )
                    }
                    onChange={this.handleMotherMiddleName23}
                  />

                  <input
                    type="text"
                    className="Name-control"
                    maxLength="1"
                    value={this.state.data.MotherMiddleName24}
                    name="MotherMiddleName24"
                    id="MotherMiddleName24"
                    onKeyDown={event =>
                      this.handleBackspaceKey(
                        event,
                        "#MotherMiddleName23",
                        "#MotherMiddleName24"
                      )
                    }
                    onChange={this.handleMotherMiddleName24}
                  />

                  <input
                    type="text"
                    className="Name-control"
                    maxLength="1"
                    value={this.state.data.MotherMiddleName25}
                    name="MotherMiddleName25"
                    id="MotherMiddleName25"
                    onKeyDown={event =>
                      this.handleBackspaceKey(
                        event,
                        "#MotherMiddleName24",
                        "#MotherMiddleName25"
                      )
                    }
                    onChange={this.handleMotherMiddleName25}
                  />
                  {this.state.isIndicatorEnabled === false ? (
                    <span className="tooltip">
                      <img
                        src={indicator}
                        alt="img"
                        style={{
                          width: "3%",
                          height: "3%",
                          float: "right",
                          marginRight: "1%"
                        }}
                      />
                      <img
                        src={namefield}
                        alt="img"
                        className="tooltiptext"
                        style={{ width: "600px", height: "150px" }}
                      />
                    </span>
                  ) : (
                    ""
                  )}
                  <br />
                </div>
              </td>
            </tr>
          </tbody>
        </table>
        <label className="FirstLabel">
          {" "}
          Select the name of either father or mother which you may like to be
          printed on PAN card (Select one only)
        </label>
        <br />
        <label className="FirstLabel">
          (In case no option is provided then PAN card will be issued with
          father’s name)
        </label>
        <br />
        <input
          type="checkbox"
          className="Check Center_space"
          id="14"
          name="ParentName[5][]"
          value="Father's name"
          onClick={e => this.handleParentNameCheck(e, "ParentName")}
        />
        <label className="Label_with_no_space">Father’s name</label>
        <input
          type="checkbox"
          className="Check Left_space"
          id="15"
          value="Mother's name"
          name="ParentName[5][]"
          onClick={e => this.handleParentNameCheck(e, "ParentName")}
        />
        <label className="Label_with_no_space">Mother’s name</label>
        <label className="Italic_text">(Please tick as applicable)</label>
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
              src={parentname}
              alt="img"
              className="tooltiptext"
              style={{ width: "600px", height: "150px" }}
            />
          </span>
        ) : (
          ""
        )}
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <span className="ErrorMsg">{this.state.errors.ParentName}</span>
      </div>
    );
  }
}

export default SixthComponent;
