import React, { Component } from "react";
import "./Form1.css";
import "./Panmain.css";
import indicator from "./instuction.png";
import namefield from "./namefield.jpeg";
import $ from "jquery";

class FirstComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: ["Last Name / Surname", "First Name", "Middle Name"],

      isModalEnabled: false,
      isIndicatorEnabled: false,

      errors: {
        NameTitleOne: "",
        FirstName: "",
        LastName: "",
        MiddleName: "",
        errorid: "1"
      },
      data: {
        NameTitleOne: "",
        FirstName1: "",
        FirstName2: "",
        FirstName3: "",
        FirstName4: "",
        FirstName5: "",
        FirstName6: "",
        FirstName7: "",
        FirstName8: "",
        FirstName9: "",
        FirstName10: "",
        FirstName11: "",
        FirstName12: "",
        FirstName13: "",
        FirstName14: "",
        FirstName15: "",
        FirstName16: "",
        FirstName17: "",
        FirstName18: "",
        FirstName19: "",
        FirstName20: "",
        FirstName21: "",
        FirstName22: "",
        FirstName23: "",
        FirstName24: "",
        FirstName25: "",
        FirstName: "",
        LastName1: "",
        LastName2: "",
        LastName3: "",
        LastName4: "",
        LastName5: "",
        LastName6: "",
        LastName7: "",
        LastName8: "",
        LastName9: "",
        LastName10: "",
        LastName11: "",
        LastName12: "",
        LastName13: "",
        LastName14: "",
        LastName15: "",
        LastName16: "",
        LastName17: "",
        LastName18: "",
        LastName19: "",
        LastName20: "",
        LastName21: "",
        LastName22: "",
        LastName23: "",
        LastName24: "",
        LastName25: "",
        LastName: "",
        MiddleName1: "",
        MiddleName2: "",
        MiddleName3: "",
        MiddleName4: "",
        MiddleName5: "",
        MiddleName6: "",
        MiddleName7: "",
        MiddleName8: "",
        MiddleName9: "",
        MiddleName10: "",
        MiddleName11: "",
        MiddleName12: "",
        MiddleName13: "",
        MiddleName14: "",
        MiddleName15: "",
        MiddleName16: "",
        MiddleName17: "",
        MiddleName18: "",
        MiddleName19: "",
        MiddleName20: "",
        MiddleName21: "",
        MiddleName22: "",
        MiddleName23: "",
        MiddleName24: "",
        MiddleName25: "",
        MiddleName: "",
        dataid: "1"
      }
    };
  }

  handleNameTitleOneCheck = (e, name) => {
    for (var i = 1; i <= 4; i++) {
      document.getElementById(i).checked = false;
    }
    document.getElementById(e.target.id).checked = true;

    let errors1 = this.state.errors;
    let name4 = "NameTitleOne";
    this.setState(errors1);
    errors1[name4] = "";

    const check = this.state.data;
    check[name] = e.target.id;
    this.setState({ check });

    localStorage.setItem("localdata", JSON.stringify(this.state.data));
    localStorage.setItem("localerror", JSON.stringify(this.state.errors));
  };

  handleInput = event => {
    let temp = this.state.data;
    let { name, value } = event.target;
    temp[name] = value;
    this.setState({ temp });

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

  handleLastName1 = event => {
    this.handleInput(event);
    this.validateLastName(event);
    event.target.value === ""
      ? $("#LastName1").focus()
      : $("#LastName2").focus();
  };

  handleLastName2 = event => {
    this.handleInput(event);
    this.validateLastName(event);
    event.target.value === ""
      ? $("#LastName2").focus()
      : $("#LastName3").focus();
  };

  handleLastName3 = event => {
    this.handleInput(event);
    this.validateLastName(event);
    event.target.value === ""
      ? $("#LastName3").focus()
      : $("#LastName4").focus();
  };

  handleLastName4 = event => {
    this.handleInput(event);
    this.validateLastName(event);
    event.target.value === ""
      ? $("#LastName4").focus()
      : $("#LastName5").focus();
  };

  handleLastName5 = event => {
    this.handleInput(event);
    this.validateLastName(event);
    event.target.value === ""
      ? $("#LastName5").focus()
      : $("#LastName6").focus();
  };

  handleLastName6 = event => {
    this.handleInput(event);
    this.validateLastName(event);
    event.target.value === ""
      ? $("#LastName6").focus()
      : $("#LastName7").focus();
  };

  handleLastName7 = event => {
    this.handleInput(event);
    this.validateLastName(event);
    event.target.value === ""
      ? $("#LastName7").focus()
      : $("#LastName8").focus();
  };

  handleLastName8 = event => {
    this.handleInput(event);
    this.validateLastName(event);
    event.target.value === ""
      ? $("#LastName8").focus()
      : $("#LastName9").focus();
  };

  handleLastName9 = event => {
    this.handleInput(event);
    this.validateLastName(event);
    event.target.value === ""
      ? $("#LastName9").focus()
      : $("#LastName10").focus();
  };

  handleLastName10 = event => {
    this.handleInput(event);
    this.validateLastName(event);
    event.target.value === ""
      ? $("#LastName10").focus()
      : $("#LastName11").focus();
  };

  handleLastName11 = event => {
    this.handleInput(event);
    this.validateLastName(event);
    event.target.value === ""
      ? $("#LastName11").focus()
      : $("#LastName12").focus();
  };

  handleLastName12 = event => {
    this.handleInput(event);
    this.validateLastName(event);
    event.target.value === ""
      ? $("#LastName12").focus()
      : $("#LastName13").focus();
  };

  handleLastName13 = event => {
    this.handleInput(event);
    this.validateLastName(event);
    event.target.value === ""
      ? $("#LastName13").focus()
      : $("#LastName14").focus();
  };

  handleLastName14 = event => {
    this.handleInput(event);
    this.validateLastName(event);
    event.target.value === ""
      ? $("#LastName14").focus()
      : $("#LastName15").focus();
  };

  handleLastName15 = event => {
    this.handleInput(event);
    this.validateLastName(event);
    event.target.value === ""
      ? $("#LastName15").focus()
      : $("#LastName16").focus();
  };

  handleLastName16 = event => {
    this.handleInput(event);
    this.validateLastName(event);
    event.target.value === ""
      ? $("#LastName16").focus()
      : $("#LastName17").focus();
  };

  handleLastName17 = event => {
    this.handleInput(event);
    this.validateLastName(event);
    event.target.value === ""
      ? $("#LastName17").focus()
      : $("#LastName18").focus();
  };

  handleLastName18 = event => {
    this.handleInput(event);
    this.validateLastName(event);
    event.target.value === ""
      ? $("#LastName18").focus()
      : $("#LastName19").focus();
  };

  handleLastName19 = event => {
    this.handleInput(event);
    this.validateLastName(event);
    event.target.value === ""
      ? $("#LastName19").focus()
      : $("#LastName20").focus();
  };

  handleLastName20 = event => {
    this.handleInput(event);
    this.validateLastName(event);
    event.target.value === ""
      ? $("#LastName20").focus()
      : $("#LastName21").focus();
  };

  handleLastName21 = event => {
    this.handleInput(event);
    this.validateLastName(event);
    event.target.value === ""
      ? $("#LastName21").focus()
      : $("#LastName22").focus();
  };

  handleLastName22 = event => {
    this.handleInput(event);
    this.validateLastName(event);
    event.target.value === ""
      ? $("#LastName22").focus()
      : $("#LastName23").focus();
  };

  handleLastName23 = event => {
    this.handleInput(event);
    this.validateLastName(event);
    event.target.value === ""
      ? $("#LastName23").focus()
      : $("#LastName24").focus();
  };

  handleLastName24 = event => {
    this.handleInput(event);
    this.validateLastName(event);
    event.target.value === ""
      ? $("#LastName24").focus()
      : $("#LastName25").focus();
  };

  handleLastName25 = event => {
    this.handleInput(event);
    this.validateLastName(event);
    event.target.value === ""
      ? $("#LastName25").focus()
      : $("#LastName25").focus();
  };

  ResetLastNameError = () => {
    $("#LastName1").css({
      "border-top-color": "",
      "border-bottom-color": "",
      "border-left-color": ""
    });
    $("#LastName2").css({ "border-top-color": "", "border-bottom-color": "" });
    $("#LastName3").css({ "border-top-color": "", "border-bottom-color": "" });
    $("#LastName4").css({ "border-top-color": "", "border-bottom-color": "" });
    $("#LastName5").css({ "border-top-color": "", "border-bottom-color": "" });
    $("#LastName6").css({ "border-top-color": "", "border-bottom-color": "" });
    $("#LastName7").css({ "border-top-color": "", "border-bottom-color": "" });
    $("#LastName8").css({ "border-top-color": "", "border-bottom-color": "" });
    $("#LastName9").css({ "border-top-color": "", "border-bottom-color": "" });
    $("#LastName10").css({ "border-top-color": "", "border-bottom-color": "" });
    $("#LastName11").css({ "border-top-color": "", "border-bottom-color": "" });
    $("#LastName12").css({ "border-top-color": "", "border-bottom-color": "" });
    $("#LastName13").css({ "border-top-color": "", "border-bottom-color": "" });
    $("#LastName14").css({ "border-top-color": "", "border-bottom-color": "" });
    $("#LastName15").css({ "border-top-color": "", "border-bottom-color": "" });
    $("#LastName16").css({ "border-top-color": "", "border-bottom-color": "" });
    $("#LastName17").css({ "border-top-color": "", "border-bottom-color": "" });
    $("#LastName18").css({ "border-top-color": "", "border-bottom-color": "" });
    $("#LastName19").css({ "border-top-color": "", "border-bottom-color": "" });
    $("#LastName20").css({ "border-top-color": "", "border-bottom-color": "" });
    $("#LastName21").css({ "border-top-color": "", "border-bottom-color": "" });
    $("#LastName22").css({ "border-top-color": "", "border-bottom-color": "" });
    $("#LastName23").css({ "border-top-color": "", "border-bottom-color": "" });
    $("#LastName24").css({ "border-top-color": "", "border-bottom-color": "" });
    $("#LastName25").css({
      "border-top-color": "",
      "border-bottom-color": "",
      "border-right-color": ""
    });
  };

  HighlightLastNameError = () => {
    $("#LastName1").css({
      "border-top-color": "red",
      "border-bottom-color": "red",
      "border-left-color": "red"
    });
    $("#LastName2").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#LastName3").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#LastName4").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#LastName5").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#LastName6").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#LastName7").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#LastName8").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#LastName9").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#LastName10").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#LastName11").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#LastName12").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#LastName13").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#LastName14").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#LastName15").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#LastName16").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#LastName17").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#LastName18").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#LastName19").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#LastName20").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#LastName21").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#LastName22").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#LastName23").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#LastName24").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#LastName25").css({
      "border-top-color": "red",
      "border-bottom-color": "red",
      "border-right-color": "red"
    });
  };

  handleFirstName1 = event => {
    this.handleInput(event);
    this.validateFirstName(event);
    event.target.value === ""
      ? $("#FirstName1").focus()
      : $("#FirstName2").focus();
  };

  handleFirstName2 = event => {
    this.handleInput(event);
    this.validateFirstName(event);
    event.target.value === ""
      ? $("#FirstName2").focus()
      : $("#FirstName3").focus();
  };

  handleFirstName3 = event => {
    this.handleInput(event);
    this.validateFirstName(event);
    event.target.value === ""
      ? $("#FirstName3").focus()
      : $("#FirstName4").focus();
  };

  handleFirstName4 = event => {
    this.handleInput(event);
    this.validateFirstName(event);
    event.target.value === ""
      ? $("#FirstName4").focus()
      : $("#FirstName5").focus();
  };

  handleFirstName5 = event => {
    this.handleInput(event);
    this.validateFirstName(event);
    event.target.value === ""
      ? $("#FirstName5").focus()
      : $("#FirstName6").focus();
  };

  handleFirstName6 = event => {
    this.handleInput(event);
    this.validateFirstName(event);
    event.target.value === ""
      ? $("#FirstName6").focus()
      : $("#FirstName7").focus();
  };

  handleFirstName7 = event => {
    this.handleInput(event);
    this.validateFirstName(event);
    event.target.value === ""
      ? $("#FirstName7").focus()
      : $("#FirstName8").focus();
  };

  handleFirstName8 = event => {
    this.handleInput(event);
    this.validateFirstName(event);
    event.target.value === ""
      ? $("#FirstName8").focus()
      : $("#FirstName9").focus();
  };

  handleFirstName9 = event => {
    this.handleInput(event);
    this.validateFirstName(event);
    event.target.value === ""
      ? $("#FirstName9").focus()
      : $("#FirstName10").focus();
  };

  handleFirstName10 = event => {
    this.handleInput(event);
    this.validateFirstName(event);
    event.target.value === ""
      ? $("#FirstName10").focus()
      : $("#FirstName11").focus();
  };

  handleFirstName11 = event => {
    this.handleInput(event);
    this.validateFirstName(event);
    event.target.value === ""
      ? $("#FirstName11").focus()
      : $("#FirstName12").focus();
  };

  handleFirstName12 = event => {
    this.handleInput(event);
    this.validateFirstName(event);
    event.target.value === ""
      ? $("#FirstName12").focus()
      : $("#FirstName13").focus();
  };

  handleFirstName13 = event => {
    this.handleInput(event);
    this.validateFirstName(event);
    event.target.value === ""
      ? $("#FirstName13").focus()
      : $("#FirstName14").focus();
  };

  handleFirstName14 = event => {
    this.handleInput(event);
    this.validateFirstName(event);
    event.target.value === ""
      ? $("#FirstName14").focus()
      : $("#FirstName15").focus();
  };

  handleFirstName15 = event => {
    this.handleInput(event);
    this.validateFirstName(event);
    event.target.value === ""
      ? $("#FirstName15").focus()
      : $("#FirstName16").focus();
  };

  handleFirstName16 = event => {
    this.handleInput(event);
    this.validateFirstName(event);
    event.target.value === ""
      ? $("#FirstName16").focus()
      : $("#FirstName17").focus();
  };

  handleFirstName17 = event => {
    this.handleInput(event);
    this.validateFirstName(event);
    event.target.value === ""
      ? $("#FirstName17").focus()
      : $("#FirstName18").focus();
  };

  handleFirstName18 = event => {
    this.handleInput(event);
    this.validateFirstName(event);
    event.target.value === ""
      ? $("#FirstName18").focus()
      : $("#FirstName19").focus();
  };

  handleFirstName19 = event => {
    this.handleInput(event);
    this.validateFirstName(event);
    event.target.value === ""
      ? $("#FirstName19").focus()
      : $("#FirstName20").focus();
  };

  handleFirstName20 = event => {
    this.handleInput(event);
    this.validateFirstName(event);
    event.target.value === ""
      ? $("#FirstName20").focus()
      : $("#FirstName21").focus();
  };

  handleFirstName21 = event => {
    this.handleInput(event);
    this.validateFirstName(event);
    event.target.value === ""
      ? $("#FirstName21").focus()
      : $("#FirstName22").focus();
  };

  handleFirstName22 = event => {
    this.handleInput(event);
    this.validateFirstName(event);
    event.target.value === ""
      ? $("#FirstName22").focus()
      : $("#FirstName23").focus();
  };

  handleFirstName23 = event => {
    this.handleInput(event);
    this.validateFirstName(event);
    event.target.value === ""
      ? $("#FirstName23").focus()
      : $("#FirstName24").focus();
  };

  handleFirstName24 = event => {
    this.handleInput(event);
    this.validateFirstName(event);
    event.target.value === ""
      ? $("#FirstName24").focus()
      : $("#FirstName25").focus();
  };

  handleFirstName25 = event => {
    this.handleInput(event);
    this.validateFirstName(event);
    event.target.value === ""
      ? $("#FirstName25").focus()
      : $("#FirstName25").focus();
  };

  ResetFirstNameError = () => {
    $("#FirstName1").css({
      "border-top-color": "",
      "border-bottom-color": "",
      "border-left-color": ""
    });
    $("#FirstName2").css({ "border-top-color": "", "border-bottom-color": "" });
    $("#FirstName3").css({ "border-top-color": "", "border-bottom-color": "" });
    $("#FirstName4").css({ "border-top-color": "", "border-bottom-color": "" });
    $("#FirstName5").css({ "border-top-color": "", "border-bottom-color": "" });
    $("#FirstName6").css({ "border-top-color": "", "border-bottom-color": "" });
    $("#FirstName7").css({ "border-top-color": "", "border-bottom-color": "" });
    $("#FirstName8").css({ "border-top-color": "", "border-bottom-color": "" });
    $("#FirstName9").css({ "border-top-color": "", "border-bottom-color": "" });
    $("#FirstName10").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#FirstName11").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#FirstName12").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#FirstName13").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#FirstName14").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#FirstName15").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#FirstName16").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#FirstName17").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#FirstName18").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#FirstName19").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#FirstName20").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#FirstName21").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#FirstName22").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#FirstName23").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#FirstName24").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#FirstName25").css({
      "border-top-color": "",
      "border-bottom-color": "",
      "border-right-color": ""
    });
  };

  HighlightFirstNameError = () => {
    $("#FirstName1").css({
      "border-top-color": "red",
      "border-bottom-color": "red",
      "border-left-color": "red"
    });
    $("#FirstName2").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#FirstName3").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#FirstName4").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#FirstName5").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#FirstName6").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#FirstName7").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#FirstName8").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#FirstName9").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#FirstName10").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#FirstName11").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#FirstName12").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#FirstName13").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#FirstName14").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#FirstName15").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#FirstName16").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#FirstName17").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#FirstName18").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#FirstName19").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#FirstName20").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#FirstName21").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#FirstName22").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#FirstName23").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#FirstName24").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#FirstName25").css({
      "border-top-color": "red",
      "border-bottom-color": "red",
      "border-right-color": "red"
    });
  };

  handleMiddleName1 = event => {
    this.handleInput(event);
    this.validateMiddleName(event);
    event.target.value === ""
      ? $("#MiddleName1").focus()
      : $("#MiddleName2").focus();
  };

  handleMiddleName2 = event => {
    this.handleInput(event);
    this.validateMiddleName(event);
    event.target.value === ""
      ? $("#MiddleName2").focus()
      : $("#MiddleName3").focus();
  };

  handleMiddleName3 = event => {
    this.handleInput(event);
    this.validateMiddleName(event);
    event.target.value === ""
      ? $("#MiddleName3").focus()
      : $("#MiddleName4").focus();
  };

  handleMiddleName4 = event => {
    this.handleInput(event);
    this.validateMiddleName(event);
    event.target.value === ""
      ? $("#MiddleName4").focus()
      : $("#MiddleName5").focus();
  };

  handleMiddleName5 = event => {
    this.handleInput(event);
    this.validateMiddleName(event);
    event.target.value === ""
      ? $("#MiddleName5").focus()
      : $("#MiddleName6").focus();
  };

  handleMiddleName6 = event => {
    this.handleInput(event);
    this.validateMiddleName(event);
    event.target.value === ""
      ? $("#MiddleName6").focus()
      : $("#MiddleName7").focus();
  };

  handleMiddleName7 = event => {
    this.handleInput(event);
    this.validateMiddleName(event);
    event.target.value === ""
      ? $("#MiddleName7").focus()
      : $("#MiddleName8").focus();
  };

  handleMiddleName8 = event => {
    this.handleInput(event);
    this.validateMiddleName(event);
    event.target.value === ""
      ? $("#MiddleName8").focus()
      : $("#MiddleName9").focus();
  };

  handleMiddleName9 = event => {
    this.handleInput(event);
    this.validateMiddleName(event);
    event.target.value === ""
      ? $("#MiddleName9").focus()
      : $("#MiddleName10").focus();
  };

  handleMiddleName10 = event => {
    this.handleInput(event);
    this.validateMiddleName(event);
    event.target.value === ""
      ? $("#MiddleName10").focus()
      : $("#MiddleName11").focus();
  };

  handleMiddleName11 = event => {
    this.handleInput(event);
    this.validateMiddleName(event);
    event.target.value === ""
      ? $("#MiddleName11").focus()
      : $("#MiddleName12").focus();
  };

  handleMiddleName12 = event => {
    this.handleInput(event);
    this.validateMiddleName(event);
    event.target.value === ""
      ? $("#MiddleName12").focus()
      : $("#MiddleName13").focus();
  };

  handleMiddleName13 = event => {
    this.handleInput(event);
    this.validateMiddleName(event);
    event.target.value === ""
      ? $("#MiddleName13").focus()
      : $("#MiddleName14").focus();
  };

  handleMiddleName14 = event => {
    this.handleInput(event);
    this.validateMiddleName(event);
    event.target.value === ""
      ? $("#MiddleName14").focus()
      : $("#MiddleName15").focus();
  };

  handleMiddleName15 = event => {
    this.handleInput(event);
    this.validateMiddleName(event);
    event.target.value === ""
      ? $("#MiddleName15").focus()
      : $("#MiddleName16").focus();
  };

  handleMiddleName16 = event => {
    this.handleInput(event);
    this.validateMiddleName(event);
    event.target.value === ""
      ? $("#MiddleName16").focus()
      : $("#MiddleName17").focus();
  };

  handleMiddleName17 = event => {
    this.handleInput(event);
    this.validateMiddleName(event);
    event.target.value === ""
      ? $("#MiddleName17").focus()
      : $("#MiddleName18").focus();
  };

  handleMiddleName18 = event => {
    this.handleInput(event);
    this.validateMiddleName(event);
    event.target.value === ""
      ? $("#MiddleName18").focus()
      : $("#MiddleName19").focus();
  };

  handleMiddleName19 = event => {
    this.handleInput(event);
    this.validateMiddleName(event);
    event.target.value === ""
      ? $("#MiddleName19").focus()
      : $("#MiddleName20").focus();
  };

  handleMiddleName20 = event => {
    this.handleInput(event);
    this.validateMiddleName(event);
    event.target.value === ""
      ? $("#MiddleName20").focus()
      : $("#MiddleName21").focus();
  };

  handleMiddleName21 = event => {
    this.handleInput(event);
    this.validateMiddleName(event);
    event.target.value === ""
      ? $("#MiddleName21").focus()
      : $("#MiddleName22").focus();
  };

  handleMiddleName22 = event => {
    this.handleInput(event);
    this.validateMiddleName(event);
    event.target.value === ""
      ? $("#MiddleName22").focus()
      : $("#MiddleName23").focus();
  };

  handleMiddleName23 = event => {
    this.handleInput(event);
    this.validateMiddleName(event);
    event.target.value === ""
      ? $("#MiddleName23").focus()
      : $("#MiddleName24").focus();
  };

  handleMiddleName24 = event => {
    this.handleInput(event);
    this.validateMiddleName(event);
    event.target.value === ""
      ? $("#MiddleName24").focus()
      : $("#MiddleName25").focus();
  };

  handleMiddleName25 = event => {
    this.handleInput(event);
    this.validateMiddleName(event);
    event.target.value === ""
      ? $("#MiddleName25").focus()
      : $("#MiddleName25").focus();
  };

  ResetMiddleNameError = () => {
    $("#MiddleName1").css({
      "border-top-color": "",
      "border-bottom-color": "",
      "border-left-color": ""
    });
    $("#MiddleName2").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#MiddleName3").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#MiddleName4").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#MiddleName5").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#MiddleName6").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#MiddleName7").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#MiddleName8").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#MiddleName9").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#MiddleName10").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#MiddleName11").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#MiddleName12").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#MiddleName13").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#MiddleName14").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#MiddleName15").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#MiddleName16").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#MiddleName17").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#MiddleName18").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#MiddleName19").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#MiddleName20").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#MiddleName21").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#MiddleName22").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#MiddleName23").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#MiddleName24").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#MiddleName25").css({
      "border-top-color": "",
      "border-bottom-color": "",
      "border-right-color": ""
    });
  };

  HighlightMiddleNameError = () => {
    $("#MiddleName1").css({
      "border-top-color": "red",
      "border-bottom-color": "red",
      "border-left-color": "red"
    });
    $("#MiddleName2").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#MiddleName3").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#MiddleName4").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#MiddleName5").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#MiddleName6").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#MiddleName7").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#MiddleName8").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#MiddleName9").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#MiddleName10").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#MiddleName11").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#MiddleName12").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#MiddleName13").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#MiddleName14").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#MiddleName15").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#MiddleName16").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#MiddleName17").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#MiddleName18").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#MiddleName19").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#MiddleName20").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#MiddleName21").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#MiddleName22").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#MiddleName23").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#MiddleName24").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#MiddleName25").css({
      "border-top-color": "red",
      "border-bottom-color": "red",
      "border-right-color": "red"
    });
  };

  async validateLastName(event) {
    this.state.data.LastName =
      this.state.data.LastName1 +
      this.state.data.LastName2 +
      this.state.data.LastName3 +
      this.state.data.LastName4 +
      this.state.data.LastName5 +
      this.state.data.LastName6 +
      this.state.data.LastName7 +
      this.state.data.LastName8 +
      this.state.data.LastName9 +
      this.state.data.LastName10 +
      this.state.data.LastName11 +
      this.state.data.LastName12 +
      this.state.data.LastName13 +
      this.state.data.LastName14 +
      this.state.data.LastName15 +
      this.state.data.LastName16 +
      this.state.data.LastName17 +
      this.state.data.LastName18 +
      this.state.data.LastName19 +
      this.state.data.LastName20 +
      this.state.data.LastName21 +
      this.state.data.LastName22 +
      this.state.data.LastName23 +
      this.state.data.LastName24 +
      this.state.data.LastName25;

    let val = this.state.data.LastName;
    this.setState({ val });

    let errors = this.state.errors;
    let name = "LastName";
    this.setState(errors);
    errors[name] = "";

    this.ResetLastNameError();

    if (
      this.state.data.LastName === "" ||
      isNaN(this.state.data.LastName) === false
    ) {
      let errors = this.state.errors;
      let name = "LastName";
      this.setState(errors);
      errors[name] = "*Please enter your LastName";

      this.state.isModalEnabled = false;
      this.HighlightLastNameError();
    } else if (typeof this.state.data.LastName !== "undefined") {
      if (!this.state.data.LastName.match(/^[a-zA-Z ]*$/)) {
        let errors = this.state.errors;
        let name = "LastName";
        this.setState(errors);
        errors[name] = "*Please enter alphabet characters only.";

        this.state.isModalEnabled = false;
        this.HighlightLastNameError();
      }
    }

    localStorage.setItem("localdata", JSON.stringify(this.state.data));
    localStorage.setItem("localerror", JSON.stringify(this.state.errors));
  }

  async validateFirstName(event) {
    this.state.data.FirstName =
      this.state.data.FirstName1 +
      this.state.data.FirstName2 +
      this.state.data.FirstName3 +
      this.state.data.FirstName4 +
      this.state.data.FirstName5 +
      this.state.data.FirstName6 +
      this.state.data.FirstName7 +
      this.state.data.FirstName8 +
      this.state.data.FirstName9 +
      this.state.data.FirstName10 +
      this.state.data.FirstName11 +
      this.state.data.FirstName12 +
      this.state.data.FirstName13 +
      this.state.data.FirstName14 +
      this.state.data.FirstName15 +
      this.state.data.FirstName16 +
      this.state.data.FirstName17 +
      this.state.data.FirstName18 +
      this.state.data.FirstName19 +
      this.state.data.FirstName20 +
      this.state.data.FirstName21 +
      this.state.data.FirstName22 +
      this.state.data.FirstName23 +
      this.state.data.FirstName24 +
      this.state.data.FirstName25;

    let errors = this.state.errors;
    let name = "FirstName";
    this.setState(errors);
    errors[name] = "";
    this.ResetFirstNameError();

    if (
      this.state.data.FirstName === "" ||
      isNaN(this.state.data.FirstName) === false
    ) {
      let errors = this.state.errors;
      let name = "FirstName";
      this.setState(errors);
      errors[name] = "*Please enter your Firstname";
      this.state.isModalEnabled = false;
      this.HighlightFirstNameError();
    } else if (typeof this.state.data.FirstName !== "undefined") {
      if (!this.state.data.FirstName.match(/^[a-zA-Z ]*$/)) {
        let errors = this.state.errors;
        let name = "FirstName";
        this.setState(errors);
        errors[name] = "*Please enter alphabet characters only.";
        this.state.isModalEnabled = false;
        this.HighlightFirstNameError();
      }
    }

    localStorage.setItem("localdata", JSON.stringify(this.state.data));
    localStorage.setItem("localerror", JSON.stringify(this.state.errors));
  }

  async validateMiddleName(event) {
    this.state.data.MiddleName =
      this.state.data.MiddleName1 +
      this.state.data.MiddleName2 +
      this.state.data.MiddleName3 +
      this.state.data.MiddleName4 +
      this.state.data.MiddleName5 +
      this.state.data.MiddleName6 +
      this.state.data.MiddleName7 +
      this.state.data.MiddleName8 +
      this.state.data.MiddleName9 +
      this.state.data.MiddleName10 +
      this.state.data.MiddleName11 +
      this.state.data.MiddleName12 +
      this.state.data.MiddleName13 +
      this.state.data.MiddleName14 +
      this.state.data.MiddleName15 +
      this.state.data.MiddleName16 +
      this.state.data.MiddleName17 +
      this.state.data.MiddleName18 +
      this.state.data.MiddleName19 +
      this.state.data.MiddleName20 +
      this.state.data.MiddleName21 +
      this.state.data.MiddleName22 +
      this.state.data.MiddleName23 +
      this.state.data.MiddleName24 +
      this.state.data.MiddleName25;

    let errors = this.state.errors;
    let name = "MiddleName";
    this.setState(errors);
    errors[name] = "";
    this.ResetMiddleNameError();

    if (typeof this.state.data.MiddleName !== "undefined") {
      if (!this.state.data.MiddleName.match(/^[a-zA-Z ]*$/)) {
        let errors = this.state.errors;
        let name = "MiddleName";
        this.setState(errors);
        errors[name] = "*Please enter alphabet characters only.";

        this.state.isModalEnabled = false;
        this.HighlightMiddleNameError();
      }
    }

    localStorage.setItem("localdata", JSON.stringify(this.state.data));
    localStorage.setItem("localerror", JSON.stringify(this.state.errors));
  }

  render() {
    return (
      <div>
        <div className="ColouredLabel ">
          <label className="ColouredLabel">
            {" "}
            &nbsp; &nbsp; 1 &nbsp; Full Name (Full expanded name to be mentioned
            as appearing in proof of identity/date of birth/address documents:
            initials are not permitted)
          </label>
        </div>
        <br />
        <label className="FirstLabel"> Please select title,</label>
        <label className="Label_with_no_space"> as applicable</label>{" "}
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <input
          type="checkbox"
          className="Check Check_align"
          id="1"
          name="NameTitleOne[1][]"
          value="Shri"
          onClick={e => this.handleNameTitleOneCheck(e, "NameTitleOne")}
        />
        <label className="Label_with_no_space Check_align"> Shri</label>
        <input
          type="checkbox"
          className="Check Check_align"
          id="2"
          name="NameTitleOne[1][]"
          value="Smt."
          onClick={e => this.handleNameTitleOneCheck(e, "NameTitleOne")}
        />
        <label className="Label_with_no_space Check_align"> Smt.</label>
        <input
          type="checkbox"
          className="Check Check_align"
          id="3"
          name="NameTitleOne[1][]"
          value="Kumari"
          onClick={e => this.handleNameTitleOneCheck(e, "NameTitleOne")}
        />
        <label className="Label_with_no_space Check_align"> Kumari</label>
        <input
          type="checkbox"
          className="Check Check_align"
          id="4"
          name="NameTitleOne[1][]"
          value="M/s"
          onClick={e => this.handleNameTitleOneCheck(e, "NameTitleOne")}
        />
        <label className="Label_with_no_space Check_align"> M/s</label> <br />
        <table>
          <tbody>
            <tr>
              <td className="first_td">
                {this.state.name.map((data, index) => (
                  <label className="elements">
                    {" "}
                    {data} <br />{" "}
                  </label>
                ))}
              </td>
              <td className="secondtd">
                <div>
                  <input
                    type="text"
                    className="Name-control"
                    maxLength="1"
                    value={this.state.data.LastName1}
                    name="LastName1"
                    id="LastName1"
                    onKeyDown={event =>
                      this.handleBackspaceKey(event, "#LastName1", "#LastName1")
                    }
                    onChange={this.handleLastName1}
                  />

                  <input
                    type="text"
                    className="Name-control"
                    maxLength="1"
                    value={this.state.data.LastName2}
                    name="LastName2"
                    id="LastName2"
                    onKeyDown={event =>
                      this.handleBackspaceKey(event, "#LastName1", "#LastName2")
                    }
                    onChange={this.handleLastName2}
                  />

                  <input
                    type="text"
                    className="Name-control"
                    maxLength="1"
                    value={this.state.data.LastName3}
                    name="LastName3"
                    id="LastName3"
                    onKeyDown={event =>
                      this.handleBackspaceKey(event, "#LastName2", "#LastName3")
                    }
                    onChange={this.handleLastName3}
                  />

                  <input
                    type="text"
                    className="Name-control"
                    maxLength="1"
                    value={this.state.data.LastName4}
                    name="LastName4"
                    id="LastName4"
                    onKeyDown={event =>
                      this.handleBackspaceKey(event, "#LastName3", "#LastName4")
                    }
                    onChange={this.handleLastName4}
                  />

                  <input
                    type="text"
                    className="Name-control"
                    maxLength="1"
                    value={this.state.data.LastName5}
                    name="LastName5"
                    id="LastName5"
                    onKeyDown={event =>
                      this.handleBackspaceKey(event, "#LastName4", "#LastName5")
                    }
                    onChange={this.handleLastName5}
                  />

                  <input
                    type="text"
                    className="Name-control"
                    maxLength="1"
                    value={this.state.data.LastName6}
                    name="LastName6"
                    id="LastName6"
                    onKeyDown={event =>
                      this.handleBackspaceKey(event, "#LastName5", "#LastName6")
                    }
                    onChange={this.handleLastName6}
                  />

                  <input
                    type="text"
                    className="Name-control"
                    maxLength="1"
                    value={this.state.data.LastName7}
                    name="LastName7"
                    id="LastName7"
                    onKeyDown={event =>
                      this.handleBackspaceKey(event, "#LastName6", "#LastName7")
                    }
                    onChange={this.handleLastName7}
                  />

                  <input
                    type="text"
                    className="Name-control"
                    maxLength="1"
                    value={this.state.data.LastName8}
                    name="LastName8"
                    id="LastName8"
                    onKeyDown={event =>
                      this.handleBackspaceKey(event, "#LastName7", "#LastName8")
                    }
                    onChange={this.handleLastName8}
                  />

                  <input
                    type="text"
                    className="Name-control"
                    maxLength="1"
                    value={this.state.data.LastName9}
                    name="LastName9"
                    id="LastName9"
                    onKeyDown={event =>
                      this.handleBackspaceKey(event, "#LastName8", "#LastName9")
                    }
                    onChange={this.handleLastName9}
                  />

                  <input
                    type="text"
                    className="Name-control"
                    maxLength="1"
                    value={this.state.data.LastName10}
                    name="LastName10"
                    id="LastName10"
                    onKeyDown={event =>
                      this.handleBackspaceKey(
                        event,
                        "#LastName9",
                        "#LastName10"
                      )
                    }
                    onChange={this.handleLastName10}
                  />

                  <input
                    type="text"
                    className="Name-control"
                    maxLength="1"
                    value={this.state.data.LastName11}
                    name="LastName11"
                    id="LastName11"
                    onKeyDown={event =>
                      this.handleBackspaceKey(
                        event,
                        "#LastName10",
                        "#LastName11"
                      )
                    }
                    onChange={this.handleLastName11}
                  />

                  <input
                    type="text"
                    className="Name-control"
                    maxLength="1"
                    value={this.state.data.LastName12}
                    name="LastName12"
                    id="LastName12"
                    onKeyDown={event =>
                      this.handleBackspaceKey(
                        event,
                        "#LastName11",
                        "#LastName12"
                      )
                    }
                    onChange={this.handleLastName12}
                  />

                  <input
                    type="text"
                    className="Name-control"
                    maxLength="1"
                    value={this.state.data.LastName13}
                    name="LastName13"
                    id="LastName13"
                    onKeyDown={event =>
                      this.handleBackspaceKey(
                        event,
                        "#LastName12",
                        "#LastName13"
                      )
                    }
                    onChange={this.handleLastName13}
                  />

                  <input
                    type="text"
                    className="Name-control"
                    maxLength="1"
                    value={this.state.data.LastName14}
                    name="LastName14"
                    id="LastName14"
                    onKeyDown={event =>
                      this.handleBackspaceKey(
                        event,
                        "#LastName13",
                        "#LastName14"
                      )
                    }
                    onChange={this.handleLastName14}
                  />

                  <input
                    type="text"
                    className="Name-control"
                    maxLength="1"
                    value={this.state.data.LastName15}
                    name="LastName15"
                    id="LastName15"
                    onKeyDown={event =>
                      this.handleBackspaceKey(
                        event,
                        "#LastName14",
                        "#LastName15"
                      )
                    }
                    onChange={this.handleLastName15}
                  />

                  <input
                    type="text"
                    className="Name-control"
                    maxLength="1"
                    value={this.state.data.LastName16}
                    name="LastName16"
                    id="LastName16"
                    onKeyDown={event =>
                      this.handleBackspaceKey(
                        event,
                        "#LastName15",
                        "#LastName16"
                      )
                    }
                    onChange={this.handleLastName16}
                  />

                  <input
                    type="text"
                    className="Name-control"
                    maxLength="1"
                    value={this.state.data.LastName17}
                    name="LastName17"
                    id="LastName17"
                    onKeyDown={event =>
                      this.handleBackspaceKey(
                        event,
                        "#LastName16",
                        "#LastName17"
                      )
                    }
                    onChange={this.handleLastName17}
                  />

                  <input
                    type="text"
                    className="Name-control"
                    maxLength="1"
                    value={this.state.data.LastName18}
                    name="LastName18"
                    id="LastName18"
                    onKeyDown={event =>
                      this.handleBackspaceKey(
                        event,
                        "#LastName17",
                        "#LastName18"
                      )
                    }
                    onChange={this.handleLastName18}
                  />

                  <input
                    type="text"
                    className="Name-control"
                    maxLength="1"
                    value={this.state.data.LastName19}
                    name="LastName19"
                    id="LastName19"
                    onKeyDown={event =>
                      this.handleBackspaceKey(
                        event,
                        "#LastName18",
                        "#LastName19"
                      )
                    }
                    onChange={this.handleLastName19}
                  />

                  <input
                    type="text"
                    className="Name-control"
                    maxLength="1"
                    value={this.state.data.LastName20}
                    name="LastName20"
                    id="LastName20"
                    onKeyDown={event =>
                      this.handleBackspaceKey(
                        event,
                        "#LastName19",
                        "#LastName20"
                      )
                    }
                    onChange={this.handleLastName20}
                  />

                  <input
                    type="text"
                    className="Name-control"
                    maxLength="1"
                    value={this.state.data.LastName21}
                    name="LastName21"
                    id="LastName21"
                    onKeyDown={event =>
                      this.handleBackspaceKey(
                        event,
                        "#LastName20",
                        "#LastName21"
                      )
                    }
                    onChange={this.handleLastName21}
                  />

                  <input
                    type="text"
                    className="Name-control"
                    maxLength="1"
                    value={this.state.data.LastName22}
                    name="LastName22"
                    id="LastName22"
                    onKeyDown={event =>
                      this.handleBackspaceKey(
                        event,
                        "#LastName21",
                        "#LastName22"
                      )
                    }
                    onChange={this.handleLastName22}
                  />

                  <input
                    type="text"
                    className="Name-control"
                    maxLength="1"
                    value={this.state.data.LastName23}
                    name="LastName23"
                    id="LastName23"
                    onKeyDown={event =>
                      this.handleBackspaceKey(
                        event,
                        "#LastName22",
                        "#LastName23"
                      )
                    }
                    onChange={this.handleLastName23}
                  />

                  <input
                    type="text"
                    className="Name-control"
                    maxLength="1"
                    value={this.state.data.LastName24}
                    name="LastName24"
                    id="LastName24"
                    onKeyDown={event =>
                      this.handleBackspaceKey(
                        event,
                        "#LastName23",
                        "#LastName24"
                      )
                    }
                    onChange={this.handleLastName24}
                  />

                  <input
                    type="text"
                    className="Name-control"
                    maxLength="1"
                    value={this.state.data.LastName25}
                    name="LastName25"
                    id="LastName25"
                    onKeyDown={event =>
                      this.handleBackspaceKey(
                        event,
                        "#LastName24",
                        "#LastName25"
                      )
                    }
                    onChange={this.handleLastName25}
                  />

                  {this.state.isIndicatorEnabled === false ? (
                    <span className="tooltip">
                      <img
                        disabled={!this.state.isIndicatorEnabled}
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
                    value={this.state.data.FirstName1}
                    name="FirstName1"
                    id="FirstName1"
                    onKeyDown={event =>
                      this.handleBackspaceKey(
                        event,
                        "#FirstName1",
                        "#FirstName1"
                      )
                    }
                    onChange={this.handleFirstName1}
                  />

                  <input
                    type="text"
                    className="Name-control"
                    maxLength="1"
                    value={this.state.data.FirstName2}
                    name="FirstName2"
                    id="FirstName2"
                    onKeyDown={event =>
                      this.handleBackspaceKey(
                        event,
                        "#FirstName1",
                        "#FirstName2"
                      )
                    }
                    onChange={this.handleFirstName2}
                  />

                  <input
                    type="text"
                    className="Name-control"
                    maxLength="1"
                    value={this.state.data.FirstName3}
                    name="FirstName3"
                    id="FirstName3"
                    onKeyDown={event =>
                      this.handleBackspaceKey(
                        event,
                        "#FirstName2",
                        "#FirstName3"
                      )
                    }
                    onChange={this.handleFirstName3}
                  />

                  <input
                    type="text"
                    className="Name-control"
                    maxLength="1"
                    value={this.state.data.FirstName4}
                    name="FirstName4"
                    id="FirstName4"
                    onKeyDown={event =>
                      this.handleBackspaceKey(
                        event,
                        "#FirstName3",
                        "#FirstName4"
                      )
                    }
                    onChange={this.handleFirstName4}
                  />

                  <input
                    type="text"
                    className="Name-control"
                    maxLength="1"
                    value={this.state.data.FirstName5}
                    name="FirstName5"
                    id="FirstName5"
                    onKeyDown={event =>
                      this.handleBackspaceKey(
                        event,
                        "#FirstName4",
                        "#FirstName5"
                      )
                    }
                    onChange={this.handleFirstName5}
                  />

                  <input
                    type="text"
                    className="Name-control"
                    maxLength="1"
                    value={this.state.data.FirstName6}
                    name="FirstName6"
                    id="FirstName6"
                    onKeyDown={event =>
                      this.handleBackspaceKey(
                        event,
                        "#FirstName5",
                        "#FirstName6"
                      )
                    }
                    onChange={this.handleFirstName6}
                  />

                  <input
                    type="text"
                    className="Name-control"
                    maxLength="1"
                    value={this.state.data.FirstName7}
                    name="FirstName7"
                    id="FirstName7"
                    onKeyDown={event =>
                      this.handleBackspaceKey(
                        event,
                        "#FirstName6",
                        "#FirstName7"
                      )
                    }
                    onChange={this.handleFirstName7}
                  />

                  <input
                    type="text"
                    className="Name-control"
                    maxLength="1"
                    value={this.state.data.FirstName8}
                    name="FirstName8"
                    id="FirstName8"
                    onKeyDown={event =>
                      this.handleBackspaceKey(
                        event,
                        "#FirstName7",
                        "#FirstName8"
                      )
                    }
                    onChange={this.handleFirstName8}
                  />

                  <input
                    type="text"
                    className="Name-control"
                    maxLength="1"
                    value={this.state.data.FirstName9}
                    name="FirstName9"
                    id="FirstName9"
                    onKeyDown={event =>
                      this.handleBackspaceKey(
                        event,
                        "#FirstName8",
                        "#FirstName9"
                      )
                    }
                    onChange={this.handleFirstName9}
                  />

                  <input
                    type="text"
                    className="Name-control"
                    maxLength="1"
                    value={this.state.data.FirstName10}
                    name="FirstName10"
                    id="FirstName10"
                    onKeyDown={event =>
                      this.handleBackspaceKey(
                        event,
                        "#FirstName9",
                        "#FirstName10"
                      )
                    }
                    onChange={this.handleFirstName10}
                  />

                  <input
                    type="text"
                    className="Name-control"
                    maxLength="1"
                    value={this.state.data.FirstName11}
                    name="FirstName11"
                    id="FirstName11"
                    onKeyDown={event =>
                      this.handleBackspaceKey(
                        event,
                        "#FirstName10",
                        "#FirstName11"
                      )
                    }
                    onChange={this.handleFirstName11}
                  />

                  <input
                    type="text"
                    className="Name-control"
                    maxLength="1"
                    value={this.state.data.FirstName12}
                    name="FirstName12"
                    id="FirstName12"
                    onKeyDown={event =>
                      this.handleBackspaceKey(
                        event,
                        "#FirstName11",
                        "#FirstName12"
                      )
                    }
                    onChange={this.handleFirstName12}
                  />

                  <input
                    type="text"
                    className="Name-control"
                    maxLength="1"
                    value={this.state.data.FirstName13}
                    name="FirstName13"
                    id="FirstName13"
                    onKeyDown={event =>
                      this.handleBackspaceKey(
                        event,
                        "#FirstName12",
                        "#FirstName13"
                      )
                    }
                    onChange={this.handleFirstName13}
                  />

                  <input
                    type="text"
                    className="Name-control"
                    maxLength="1"
                    value={this.state.data.FirstName14}
                    name="FirstName14"
                    id="FirstName14"
                    onKeyDown={event =>
                      this.handleBackspaceKey(
                        event,
                        "#FirstName13",
                        "#FirstName14"
                      )
                    }
                    onChange={this.handleFirstName14}
                  />

                  <input
                    type="text"
                    className="Name-control"
                    maxLength="1"
                    value={this.state.data.FirstName15}
                    name="FirstName15"
                    id="FirstName15"
                    onKeyDown={event =>
                      this.handleBackspaceKey(
                        event,
                        "#FirstName14",
                        "#FirstName15"
                      )
                    }
                    onChange={this.handleFirstName15}
                  />

                  <input
                    type="text"
                    className="Name-control"
                    maxLength="1"
                    value={this.state.data.FirstName16}
                    name="FirstName16"
                    id="FirstName16"
                    onKeyDown={event =>
                      this.handleBackspaceKey(
                        event,
                        "#FirstName15",
                        "#FirstName16"
                      )
                    }
                    onChange={this.handleFirstName16}
                  />

                  <input
                    type="text"
                    className="Name-control"
                    maxLength="1"
                    value={this.state.data.FirstName17}
                    name="FirstName17"
                    id="FirstName17"
                    onKeyDown={event =>
                      this.handleBackspaceKey(
                        event,
                        "#FirstName16",
                        "#FirstName17"
                      )
                    }
                    onChange={this.handleFirstName17}
                  />

                  <input
                    type="text"
                    className="Name-control"
                    maxLength="1"
                    value={this.state.data.FirstName18}
                    name="FirstName18"
                    id="FirstName18"
                    onKeyDown={event =>
                      this.handleBackspaceKey(
                        event,
                        "#FirstName17",
                        "#FirstName18"
                      )
                    }
                    onChange={this.handleFirstName18}
                  />

                  <input
                    type="text"
                    className="Name-control"
                    maxLength="1"
                    value={this.state.data.FirstName19}
                    name="FirstName19"
                    id="FirstName19"
                    onKeyDown={event =>
                      this.handleBackspaceKey(
                        event,
                        "#FirstName18",
                        "#FirstName19"
                      )
                    }
                    onChange={this.handleFirstName19}
                  />

                  <input
                    type="text"
                    className="Name-control"
                    maxLength="1"
                    value={this.state.data.FirstName20}
                    name="FirstName20"
                    id="FirstName20"
                    onKeyDown={event =>
                      this.handleBackspaceKey(
                        event,
                        "#FirstName19",
                        "#FirstName20"
                      )
                    }
                    onChange={this.handleFirstName20}
                  />

                  <input
                    type="text"
                    className="Name-control"
                    maxLength="1"
                    value={this.state.data.FirstName21}
                    name="FirstName21"
                    id="FirstName21"
                    onKeyDown={event =>
                      this.handleBackspaceKey(
                        event,
                        "#FirstName20",
                        "#FirstName21"
                      )
                    }
                    onChange={this.handleFirstName21}
                  />

                  <input
                    type="text"
                    className="Name-control"
                    maxLength="1"
                    value={this.state.data.FirstName22}
                    name="FirstName22"
                    id="FirstName22"
                    onKeyDown={event =>
                      this.handleBackspaceKey(
                        event,
                        "#FirstName21",
                        "#FirstName22"
                      )
                    }
                    onChange={this.handleFirstName22}
                  />

                  <input
                    type="text"
                    className="Name-control"
                    maxLength="1"
                    value={this.state.data.FirstName23}
                    name="FirstName23"
                    id="FirstName23"
                    onKeyDown={event =>
                      this.handleBackspaceKey(
                        event,
                        "#FirstName22",
                        "#FirstName23"
                      )
                    }
                    onChange={this.handleFirstName23}
                  />

                  <input
                    type="text"
                    className="Name-control"
                    maxLength="1"
                    value={this.state.data.FirstName24}
                    name="FirstName24"
                    id="FirstName24"
                    onKeyDown={event =>
                      this.handleBackspaceKey(
                        event,
                        "#FirstName23",
                        "#FirstName24"
                      )
                    }
                    onChange={this.handleFirstName24}
                  />

                  <input
                    type="text"
                    className="Name-control"
                    maxLength="1"
                    value={this.state.data.FirstName25}
                    name="FirstName25"
                    id="FirstName25"
                    onKeyDown={event =>
                      this.handleBackspaceKey(
                        event,
                        "#FirstName24",
                        "#FirstName25"
                      )
                    }
                    onChange={this.handleFirstName25}
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
                    value={this.state.data.MiddleName1}
                    name="MiddleName1"
                    id="MiddleName1"
                    onKeyDown={event =>
                      this.handleBackspaceKey(
                        event,
                        "#MiddleName1",
                        "#MiddleName1"
                      )
                    }
                    onChange={this.handleMiddleName1}
                  />

                  <input
                    type="text"
                    className="Name-control"
                    maxLength="1"
                    value={this.state.data.MiddleName2}
                    name="MiddleName2"
                    id="MiddleName2"
                    onKeyDown={event =>
                      this.handleBackspaceKey(
                        event,
                        "#MiddleName1",
                        "#MiddleName2"
                      )
                    }
                    onChange={this.handleMiddleName2}
                  />

                  <input
                    type="text"
                    className="Name-control"
                    maxLength="1"
                    value={this.state.data.MiddleName3}
                    name="MiddleName3"
                    id="MiddleName3"
                    onKeyDown={event =>
                      this.handleBackspaceKey(
                        event,
                        "#MiddleName2",
                        "#MiddleName3"
                      )
                    }
                    onChange={this.handleMiddleName3}
                  />

                  <input
                    type="text"
                    className="Name-control"
                    maxLength="1"
                    value={this.state.data.MiddleName4}
                    name="MiddleName4"
                    id="MiddleName4"
                    onKeyDown={event =>
                      this.handleBackspaceKey(
                        event,
                        "#MiddleName3",
                        "#MiddleName4"
                      )
                    }
                    onChange={this.handleMiddleName4}
                  />

                  <input
                    type="text"
                    className="Name-control"
                    maxLength="1"
                    value={this.state.data.MiddleName5}
                    name="MiddleName5"
                    id="MiddleName5"
                    onKeyDown={event =>
                      this.handleBackspaceKey(
                        event,
                        "#MiddleName4",
                        "#MiddleName5"
                      )
                    }
                    onChange={this.handleMiddleName5}
                  />

                  <input
                    type="text"
                    className="Name-control"
                    maxLength="1"
                    value={this.state.data.MiddleName6}
                    name="MiddleName6"
                    id="MiddleName6"
                    onKeyDown={event =>
                      this.handleBackspaceKey(
                        event,
                        "#MiddleName5",
                        "#MiddleName6"
                      )
                    }
                    onChange={this.handleMiddleName6}
                  />

                  <input
                    type="text"
                    className="Name-control"
                    maxLength="1"
                    value={this.state.data.MiddleName7}
                    name="MiddleName7"
                    id="MiddleName7"
                    onKeyDown={event =>
                      this.handleBackspaceKey(
                        event,
                        "#MiddleName6",
                        "#MiddleName7"
                      )
                    }
                    onChange={this.handleMiddleName7}
                  />

                  <input
                    type="text"
                    className="Name-control"
                    maxLength="1"
                    value={this.state.data.MiddleName8}
                    name="MiddleName8"
                    id="MiddleName8"
                    onKeyDown={event =>
                      this.handleBackspaceKey(
                        event,
                        "#MiddleName7",
                        "#MiddleName8"
                      )
                    }
                    onChange={this.handleMiddleName8}
                  />

                  <input
                    type="text"
                    className="Name-control"
                    maxLength="1"
                    value={this.state.data.MiddleName9}
                    name="MiddleName9"
                    id="MiddleName9"
                    onKeyDown={event =>
                      this.handleBackspaceKey(
                        event,
                        "#MiddleName8",
                        "#MiddleName9"
                      )
                    }
                    onChange={this.handleMiddleName9}
                  />

                  <input
                    type="text"
                    className="Name-control"
                    maxLength="1"
                    value={this.state.data.MiddleName10}
                    name="MiddleName10"
                    id="MiddleName10"
                    onKeyDown={event =>
                      this.handleBackspaceKey(
                        event,
                        "#MiddleName9",
                        "#MiddleName10"
                      )
                    }
                    onChange={this.handleMiddleName10}
                  />

                  <input
                    type="text"
                    className="Name-control"
                    maxLength="1"
                    value={this.state.data.MiddleName11}
                    name="MiddleName11"
                    id="MiddleName11"
                    onKeyDown={event =>
                      this.handleBackspaceKey(
                        event,
                        "#MiddleName10",
                        "#MiddleName11"
                      )
                    }
                    onChange={this.handleMiddleName11}
                  />

                  <input
                    type="text"
                    className="Name-control"
                    maxLength="1"
                    value={this.state.data.MiddleName12}
                    name="MiddleName12"
                    id="MiddleName12"
                    onKeyDown={event =>
                      this.handleBackspaceKey(
                        event,
                        "#MiddleName11",
                        "#MiddleName12"
                      )
                    }
                    onChange={this.handleMiddleName12}
                  />

                  <input
                    type="text"
                    className="Name-control"
                    maxLength="1"
                    value={this.state.data.MiddleName13}
                    name="MiddleName13"
                    id="MiddleName13"
                    onKeyDown={event =>
                      this.handleBackspaceKey(
                        event,
                        "#MiddleName12",
                        "#MiddleName13"
                      )
                    }
                    onChange={this.handleMiddleName13}
                  />

                  <input
                    type="text"
                    className="Name-control"
                    maxLength="1"
                    value={this.state.data.MiddleName14}
                    name="MiddleName14"
                    id="MiddleName14"
                    onKeyDown={event =>
                      this.handleBackspaceKey(
                        event,
                        "#MiddleName13",
                        "#MiddleName14"
                      )
                    }
                    onChange={this.handleMiddleName14}
                  />

                  <input
                    type="text"
                    className="Name-control"
                    maxLength="1"
                    value={this.state.data.MiddleName15}
                    name="MiddleName15"
                    id="MiddleName15"
                    onKeyDown={event =>
                      this.handleBackspaceKey(
                        event,
                        "#MiddleName14",
                        "#MiddleName15"
                      )
                    }
                    onChange={this.handleMiddleName15}
                  />

                  <input
                    type="text"
                    className="Name-control"
                    maxLength="1"
                    value={this.state.data.MiddleName16}
                    name="MiddleName16"
                    id="MiddleName16"
                    onKeyDown={event =>
                      this.handleBackspaceKey(
                        event,
                        "#MiddleName15",
                        "#MiddleName16"
                      )
                    }
                    onChange={this.handleMiddleName16}
                  />

                  <input
                    type="text"
                    className="Name-control"
                    maxLength="1"
                    value={this.state.data.MiddleName17}
                    name="MiddleName17"
                    id="MiddleName17"
                    onKeyDown={event =>
                      this.handleBackspaceKey(
                        event,
                        "#MiddleName16",
                        "#MiddleName17"
                      )
                    }
                    onChange={this.handleMiddleName17}
                  />

                  <input
                    type="text"
                    className="Name-control"
                    maxLength="1"
                    value={this.state.data.MiddleName18}
                    name="MiddleName18"
                    id="MiddleName18"
                    onKeyDown={event =>
                      this.handleBackspaceKey(
                        event,
                        "#MiddleName17",
                        "#MiddleName18"
                      )
                    }
                    onChange={this.handleMiddleName18}
                  />

                  <input
                    type="text"
                    className="Name-control"
                    maxLength="1"
                    value={this.state.data.MiddleName19}
                    name="MiddleName19"
                    id="MiddleName19"
                    onKeyDown={event =>
                      this.handleBackspaceKey(
                        event,
                        "#MiddleName18",
                        "#MiddleName19"
                      )
                    }
                    onChange={this.handleMiddleName19}
                  />

                  <input
                    type="text"
                    className="Name-control"
                    maxLength="1"
                    value={this.state.data.MiddleName20}
                    name="MiddleName20"
                    id="MiddleName20"
                    onKeyDown={event =>
                      this.handleBackspaceKey(
                        event,
                        "#MiddleName19",
                        "#MiddleName20"
                      )
                    }
                    onChange={this.handleMiddleName20}
                  />

                  <input
                    type="text"
                    className="Name-control"
                    maxLength="1"
                    value={this.state.data.MiddleName21}
                    name="MiddleName21"
                    id="MiddleName21"
                    onKeyDown={event =>
                      this.handleBackspaceKey(
                        event,
                        "#MiddleName20",
                        "#MiddleName21"
                      )
                    }
                    onChange={this.handleMiddleName21}
                  />

                  <input
                    type="text"
                    className="Name-control"
                    maxLength="1"
                    value={this.state.data.MiddleName22}
                    name="MiddleName22"
                    id="MiddleName22"
                    onKeyDown={event =>
                      this.handleBackspaceKey(
                        event,
                        "#MiddleName21",
                        "#MiddleName22"
                      )
                    }
                    onChange={this.handleMiddleName22}
                  />

                  <input
                    type="text"
                    className="Name-control"
                    maxLength="1"
                    value={this.state.data.MiddleName23}
                    name="MiddleName23"
                    id="MiddleName23"
                    onKeyDown={event =>
                      this.handleBackspaceKey(
                        event,
                        "#MiddleName22",
                        "#MiddleName23"
                      )
                    }
                    onChange={this.handleMiddleName23}
                  />

                  <input
                    type="text"
                    className="Name-control"
                    maxLength="1"
                    value={this.state.data.MiddleName24}
                    name="MiddleName24"
                    id="MiddleName24"
                    onKeyDown={event =>
                      this.handleBackspaceKey(
                        event,
                        "#MiddleName23",
                        "#MiddleName24"
                      )
                    }
                    onChange={this.handleMiddleName24}
                  />

                  <input
                    type="text"
                    className="Name-control"
                    maxLength="1"
                    value={this.state.data.MiddleName25}
                    name="MiddleName25"
                    id="MiddleName25"
                    onKeyDown={event =>
                      this.handleBackspaceKey(
                        event,
                        "#MiddleName24",
                        "#MiddleName25"
                      )
                    }
                    onChange={this.handleMiddleName25}
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
                  <span className="ErrorMsg">
                    {this.state.errors.NameTitleOne}
                  </span>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default FirstComponent;
