import React, { Component } from "react";
import "./Form1.css";
import "./Panmain.css";
import $ from "jquery";
import indicator from "./instuction.png";
import namefield from "./namefield.jpeg";

class ThirdComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: ["Last Name / Surname", "First Name", "Middle Name"],
      isModalEnabled: false,
      isIndicatorEnabled: false,
      officeEnabled: false,

      errors: {
        OtherName: "",
        OtherFirstName: "",
        OtherLastName: "",
        OtherMiddleName: "",
        errorid: "1"
      },
      data: {
        OtherName: "",
        OtherFirstName1: "",
        OtherFirstName2: "",
        OtherFirstName3: "",
        OtherFirstName4: "",
        OtherFirstName5: "",
        OtherFirstName6: "",
        OtherFirstName7: "",
        OtherFirstName8: "",
        OtherFirstName9: "",
        OtherFirstName10: "",
        OtherFirstName11: "",
        OtherFirstName12: "",
        OtherFirstName13: "",
        OtherFirstName14: "",
        OtherFirstName15: "",
        OtherFirstName16: "",
        OtherFirstName17: "",
        OtherFirstName18: "",
        OtherFirstName19: "",
        OtherFirstName20: "",
        OtherFirstName21: "",
        OtherFirstName22: "",
        OtherFirstName23: "",
        OtherFirstName24: "",
        OtherFirstName25: "",
        OtherFirstName: "",
        OtherLastName1: "",
        OtherLastName2: "",
        OtherLastName3: "",
        OtherLastName4: "",
        OtherLastName5: "",
        OtherLastName6: "",
        OtherLastName7: "",
        OtherLastName8: "",
        OtherLastName9: "",
        OtherLastName10: "",
        OtherLastName11: "",
        OtherLastName12: "",
        OtherLastName13: "",
        OtherLastName14: "",
        OtherLastName15: "",
        OtherLastName16: "",
        OtherLastName17: "",
        OtherLastName18: "",
        OtherLastName19: "",
        OtherLastName20: "",
        OtherLastName21: "",
        OtherLastName22: "",
        OtherLastName23: "",
        OtherLastName24: "",
        OtherLastName25: "",
        OtherLastName: "",
        OtherMiddleName1: "",
        OtherMiddleName2: "",
        OtherMiddleName3: "",
        OtherMiddleName4: "",
        OtherMiddleName5: "",
        OtherMiddleName6: "",
        OtherMiddleName7: "",
        OtherMiddleName8: "",
        OtherMiddleName9: "",
        OtherMiddleName10: "",
        OtherMiddleName11: "",
        OtherMiddleName12: "",
        OtherMiddleName13: "",
        OtherMiddleName14: "",
        OtherMiddleName15: "",
        OtherMiddleName16: "",
        OtherMiddleName17: "",
        OtherMiddleName18: "",
        OtherMiddleName19: "",
        OtherMiddleName20: "",
        OtherMiddleName21: "",
        OtherMiddleName22: "",
        OtherMiddleName23: "",
        OtherMiddleName24: "",
        OtherMiddleName25: "",
        OtherMiddleName: "",
        dataid: "1"
      }
    };
  }

  componentDidMount() {
    $("#5").change(function() {
      if (this.checked) {
        $("#OtherNameDiv").show();
      }
    });

    $("#6").change(function() {
      if (this.checked) {
        $("#OtherNameDiv").hide();
      }
    });
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

  handleOtherNameCheck = (e, name) => {
    for (var i = 5; i <= 6; i++) {
      document.getElementById(i).checked = false;
    }
    document.getElementById(e.target.id).checked = true;

    let errors1 = this.state.errors;
    let name4 = "OtherName";
    this.setState(errors1);
    errors1[name4] = "";

    const check = this.state.data;
    check[name] = e.target.id;
    this.setState({ check });

    if (e.target.id === "6") {
      this.ResetOtherFirstNameError();
      let data1 = this.state.data;
      let name1 = "OtherFirstName";
      this.setState(data1);
      data1[name1] = "";

      this.ResetOtherLastNameError();
      let data2 = this.state.data;
      let name2 = "OtherLastName";
      this.setState(data2);
      data2[name2] = "";

      this.ResetOtherMiddleNameError();
      let data3 = this.state.data;
      let name3 = "OtherMiddleName";
      this.setState(data3);
      data3[name3] = "";

      let data4 = this.state.data;
      let name4 = "NameTitleTwo";
      this.setState(data4);
      data4[name4] = "";

      let errors1 = this.state.errors;
      let name5 = "OtherLastName";
      this.setState(errors1);
      errors1[name5] = "";
      this.ResetOtherLastNameError();

      let errors2 = this.state.errors;
      let name6 = "OtherFirstName";
      this.setState(errors2);
      errors2[name6] = "";
      this.ResetOtherFirstNameError();

      let errors3 = this.state.errors;
      let name7 = "OtherMiddleName";
      this.setState(errors3);
      errors3[name7] = "";
      this.ResetOtherMiddleNameError();

      let errors4 = this.state.errors;
      let name8 = "NameTitleTwo";
      this.setState(errors4);
      errors4[name8] = "";

      for (var j = 7; j <= 10; j++) {
        document.getElementById(j).checked = false;
      }
    }

    localStorage.setItem("localdata", JSON.stringify(this.state.data));
    localStorage.setItem("localerror", JSON.stringify(this.state.errors));
  };

handleNameTitleTwoCheck = (e, name) => {
    for (var i = 7; i <= 10; i++) {
      document.getElementById(i).checked = false;
    }
    document.getElementById(e.target.id).checked = true;

    let errors1 = this.state.errors;
    let name4 = "NameTitleTwo";
    this.setState(errors1);
    errors1[name4] = "";

    const check = this.state.data;
    check[name] = e.target.id;
    this.setState({ check });

    localStorage.setItem("localdata", JSON.stringify(this.state.data));
    localStorage.setItem("localerror", JSON.stringify(this.state.errors));
  };

  handleOtherLastName1 = event => {
    this.handleInput(event);
    this.validateOtherLastName(event);
    event.target.value === ""
      ? $("#OtherLastName1").focus()
      : $("#OtherLastName2").focus();
  };

  handleOtherLastName2 = event => {
    this.handleInput(event);
    this.validateOtherLastName(event);
    event.target.value === ""
      ? $("#OtherLastName2").focus()
      : $("#OtherLastName3").focus();
  };

  handleOtherLastName3 = event => {
    this.handleInput(event);
    this.validateOtherLastName(event);
    event.target.value === ""
      ? $("#OtherLastName3").focus()
      : $("#OtherLastName4").focus();
  };

  handleOtherLastName4 = event => {
    this.handleInput(event);
    this.validateOtherLastName(event);
    event.target.value === ""
      ? $("#OtherLastName4").focus()
      : $("#OtherLastName5").focus();
  };

  handleOtherLastName5 = event => {
    this.handleInput(event);
    this.validateOtherLastName(event);
    event.target.value === ""
      ? $("#OtherLastName5").focus()
      : $("#OtherLastName6").focus();
  };

  handleOtherLastName6 = event => {
    this.handleInput(event);
    this.validateOtherLastName(event);
    event.target.value === ""
      ? $("#OtherLastName6").focus()
      : $("#OtherLastName7").focus();
  };

  handleOtherLastName7 = event => {
    this.handleInput(event);
    this.validateOtherLastName(event);
    event.target.value === ""
      ? $("#OtherLastName7").focus()
      : $("#OtherLastName8").focus();
  };

  handleOtherLastName8 = event => {
    this.handleInput(event);
    this.validateOtherLastName(event);
    event.target.value === ""
      ? $("#OtherLastName8").focus()
      : $("#OtherLastName9").focus();
  };

  handleOtherLastName9 = event => {
    this.handleInput(event);
    this.validateOtherLastName(event);
    event.target.value === ""
      ? $("#OtherLastName9").focus()
      : $("#OtherLastName10").focus();
  };

  handleOtherLastName10 = event => {
    this.handleInput(event);
    this.validateOtherLastName(event);
    event.target.value === ""
      ? $("#OtherLastName10").focus()
      : $("#OtherLastName11").focus();
  };

  handleOtherLastName11 = event => {
    this.handleInput(event);
    this.validateOtherLastName(event);
    event.target.value === ""
      ? $("#OtherLastName11").focus()
      : $("#OtherLastName12").focus();
  };

  handleOtherLastName12 = event => {
    this.handleInput(event);
    this.validateOtherLastName(event);
    event.target.value === ""
      ? $("#OtherLastName12").focus()
      : $("#OtherLastName13").focus();
  };

  handleOtherLastName13 = event => {
    this.handleInput(event);
    this.validateOtherLastName(event);
    event.target.value === ""
      ? $("#OtherLastName13").focus()
      : $("#OtherLastName14").focus();
  };

  handleOtherLastName14 = event => {
    this.handleInput(event);
    this.validateOtherLastName(event);
    event.target.value === ""
      ? $("#OtherLastName14").focus()
      : $("#OtherLastName15").focus();
  };

  handleOtherLastName15 = event => {
    this.handleInput(event);
    this.validateOtherLastName(event);
    event.target.value === ""
      ? $("#OtherLastName15").focus()
      : $("#OtherLastName16").focus();
  };

  handleOtherLastName16 = event => {
    this.handleInput(event);
    this.validateOtherLastName(event);
    event.target.value === ""
      ? $("#OtherLastName16").focus()
      : $("#OtherLastName17").focus();
  };

  handleOtherLastName17 = event => {
    this.handleInput(event);
    this.validateOtherLastName(event);
    event.target.value === ""
      ? $("#OtherLastName17").focus()
      : $("#OtherLastName18").focus();
  };

  handleOtherLastName18 = event => {
    this.handleInput(event);
    this.validateOtherLastName(event);
    event.target.value === ""
      ? $("#OtherLastName18").focus()
      : $("#OtherLastName19").focus();
  };

  handleOtherLastName19 = event => {
    this.handleInput(event);
    this.validateOtherLastName(event);
    event.target.value === ""
      ? $("#OtherLastName19").focus()
      : $("#OtherLastName20").focus();
  };

  handleOtherLastName20 = event => {
    this.handleInput(event);
    this.validateOtherLastName(event);
    event.target.value === ""
      ? $("#OtherLastName20").focus()
      : $("#OtherLastName21").focus();
  };

  handleOtherLastName21 = event => {
    this.handleInput(event);
    this.validateOtherLastName(event);
    event.target.value === ""
      ? $("#OtherLastName21").focus()
      : $("#OtherLastName22").focus();
  };

  handleOtherLastName22 = event => {
    this.handleInput(event);
    this.validateOtherLastName(event);
    event.target.value === ""
      ? $("#OtherLastName22").focus()
      : $("#OtherLastName23").focus();
  };

  handleOtherLastName23 = event => {
    this.handleInput(event);
    this.validateOtherLastName(event);
    event.target.value === ""
      ? $("#OtherLastName23").focus()
      : $("#OtherLastName24").focus();
  };

  handleOtherLastName24 = event => {
    this.handleInput(event);
    this.validateOtherLastName(event);
    event.target.value === ""
      ? $("#OtherLastName24").focus()
      : $("#OtherLastName25").focus();
  };

  handleOtherLastName25 = event => {
    this.handleInput(event);
    this.validateOtherLastName(event);
    event.target.value === ""
      ? $("#OtherLastName25").focus()
      : $("#OtherLastName25").focus();
  };

  ResetOtherLastNameError = () => {
    $("#OtherLastName1").css({
      "border-top-color": "",
      "border-bottom-color": "",
      "border-left-color": ""
    });
    $("#OtherLastName2").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#OtherLastName3").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#OtherLastName4").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#OtherLastName5").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#OtherLastName6").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#OtherLastName7").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#OtherLastName8").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#OtherLastName9").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#OtherLastName10").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#OtherLastName11").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#OtherLastName12").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#OtherLastName13").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#OtherLastName14").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#OtherLastName15").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#OtherLastName16").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#OtherLastName17").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#OtherLastName18").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#OtherLastName19").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#OtherLastName20").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#OtherLastName21").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#OtherLastName22").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#OtherLastName23").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#OtherLastName24").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#OtherLastName25").css({
      "border-top-color": "",
      "border-bottom-color": "",
      "border-right-color": ""
    });
  };

  HighlightOtherLastNameError = () => {
    $("#OtherLastName1").css({
      "border-top-color": "red",
      "border-bottom-color": "red",
      "border-left-color": "red"
    });
    $("#OtherLastName2").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#OtherLastName3").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#OtherLastName4").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#OtherLastName5").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#OtherLastName6").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#OtherLastName7").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#OtherLastName8").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#OtherLastName9").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#OtherLastName10").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#OtherLastName11").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#OtherLastName12").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#OtherLastName13").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#OtherLastName14").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#OtherLastName15").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#OtherLastName16").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#OtherLastName17").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#OtherLastName18").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#OtherLastName19").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#OtherLastName20").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#OtherLastName21").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#OtherLastName22").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#OtherLastName23").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#OtherLastName24").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#OtherLastName25").css({
      "border-top-color": "red",
      "border-bottom-color": "red",
      "border-right-color": "red"
    });
  };

  handleOtherFirstName1 = event => {
    this.handleInput(event);
    this.validateOtherFirstName(event);
    event.target.value === ""
      ? $("#OtherFirstName1").focus()
      : $("#OtherFirstName2").focus();
  };

  handleOtherFirstName2 = event => {
    this.handleInput(event);
    this.validateOtherFirstName(event);
    event.target.value === ""
      ? $("#OtherFirstName2").focus()
      : $("#OtherFirstName3").focus();
  };

  handleOtherFirstName3 = event => {
    this.handleInput(event);
    this.validateOtherFirstName(event);
    event.target.value === ""
      ? $("#OtherFirstName3").focus()
      : $("#OtherFirstName4").focus();
  };

  handleOtherFirstName4 = event => {
    this.handleInput(event);
    this.validateOtherFirstName(event);
    event.target.value === ""
      ? $("#OtherFirstName4").focus()
      : $("#OtherFirstName5").focus();
  };

  handleOtherFirstName5 = event => {
    this.handleInput(event);
    this.validateOtherFirstName(event);
    event.target.value === ""
      ? $("#OtherFirstName5").focus()
      : $("#OtherFirstName6").focus();
  };

  handleOtherFirstName6 = event => {
    this.handleInput(event);
    this.validateOtherFirstName(event);
    event.target.value === ""
      ? $("#OtherFirstName6").focus()
      : $("#OtherFirstName7").focus();
  };

  handleOtherFirstName7 = event => {
    this.handleInput(event);
    this.validateOtherFirstName(event);
    event.target.value === ""
      ? $("#OtherFirstName7").focus()
      : $("#OtherFirstName8").focus();
  };

  handleOtherFirstName8 = event => {
    this.handleInput(event);
    this.validateOtherFirstName(event);
    event.target.value === ""
      ? $("#OtherFirstName8").focus()
      : $("#OtherFirstName9").focus();
  };

  handleOtherFirstName9 = event => {
    this.handleInput(event);
    this.validateOtherFirstName(event);
    event.target.value === ""
      ? $("#OtherFirstName9").focus()
      : $("#OtherFirstName10").focus();
  };

  handleOtherFirstName10 = event => {
    this.handleInput(event);
    this.validateOtherFirstName(event);
    event.target.value === ""
      ? $("#OtherFirstName10").focus()
      : $("#OtherFirstName11").focus();
  };

  handleOtherFirstName11 = event => {
    this.handleInput(event);
    this.validateOtherFirstName(event);
    event.target.value === ""
      ? $("#OtherFirstName11").focus()
      : $("#OtherFirstName12").focus();
  };

  handleOtherFirstName12 = event => {
    this.handleInput(event);
    this.validateOtherFirstName(event);
    event.target.value === ""
      ? $("#OtherFirstName12").focus()
      : $("#OtherFirstName13").focus();
  };

  handleOtherFirstName13 = event => {
    this.handleInput(event);
    this.validateOtherFirstName(event);
    event.target.value === ""
      ? $("#OtherFirstName13").focus()
      : $("#OtherFirstName14").focus();
  };

  handleOtherFirstName14 = event => {
    this.handleInput(event);
    this.validateOtherFirstName(event);
    event.target.value === ""
      ? $("#OtherFirstName14").focus()
      : $("#OtherFirstName15").focus();
  };

  handleOtherFirstName15 = event => {
    this.handleInput(event);
    this.validateOtherFirstName(event);
    event.target.value === ""
      ? $("#OtherFirstName15").focus()
      : $("#OtherFirstName16").focus();
  };

  handleOtherFirstName16 = event => {
    this.handleInput(event);
    this.validateOtherFirstName(event);
    event.target.value === ""
      ? $("#OtherFirstName16").focus()
      : $("#OtherFirstName17").focus();
  };

  handleOtherFirstName17 = event => {
    this.handleInput(event);
    this.validateOtherFirstName(event);
    event.target.value === ""
      ? $("#OtherFirstName17").focus()
      : $("#OtherFirstName18").focus();
  };

  handleOtherFirstName18 = event => {
    this.handleInput(event);
    this.validateOtherFirstName(event);
    event.target.value === ""
      ? $("#OtherFirstName18").focus()
      : $("#OtherFirstName19").focus();
  };

  handleOtherFirstName19 = event => {
    this.handleInput(event);
    this.validateOtherFirstName(event);
    event.target.value === ""
      ? $("#OtherFirstName19").focus()
      : $("#OtherFirstName20").focus();
  };

  handleOtherFirstName20 = event => {
    this.handleInput(event);
    this.validateOtherFirstName(event);
    event.target.value === ""
      ? $("#OtherFirstName20").focus()
      : $("#OtherFirstName21").focus();
  };

  handleOtherFirstName21 = event => {
    this.handleInput(event);
    this.validateOtherFirstName(event);
    event.target.value === ""
      ? $("#OtherFirstName21").focus()
      : $("#OtherFirstName22").focus();
  };

  handleOtherFirstName22 = event => {
    this.handleInput(event);
    this.validateOtherFirstName(event);
    event.target.value === ""
      ? $("#OtherFirstName22").focus()
      : $("#OtherFirstName23").focus();
  };

  handleOtherFirstName23 = event => {
    this.handleInput(event);
    this.validateOtherFirstName(event);
    event.target.value === ""
      ? $("#OtherFirstName23").focus()
      : $("#OtherFirstName24").focus();
  };

  handleOtherFirstName24 = event => {
    this.handleInput(event);
    this.validateOtherFirstName(event);
    event.target.value === ""
      ? $("#OtherFirstName24").focus()
      : $("#OtherFirstName25").focus();
  };

  handleOtherFirstName25 = event => {
    this.handleInput(event);
    this.validateOtherFirstName(event);
    event.target.value === ""
      ? $("#OtherFirstName25").focus()
      : $("#OtherFirstName25").focus();
  };

  ResetOtherFirstNameError = () => {
    $("#OtherFirstName1").css({
      "border-top-color": "",
      "border-bottom-color": "",
      "border-left-color": ""
    });
    $("#OtherFirstName2").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#OtherFirstName3").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#OtherFirstName4").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#OtherFirstName5").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#OtherFirstName6").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#OtherFirstName7").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#OtherFirstName8").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#OtherFirstName9").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#OtherFirstName10").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#OtherFirstName11").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#OtherFirstName12").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#OtherFirstName13").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#OtherFirstName14").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#OtherFirstName15").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#OtherFirstName16").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#OtherFirstName17").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#OtherFirstName18").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#OtherFirstName19").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#OtherFirstName20").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#OtherFirstName21").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#OtherFirstName22").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#OtherFirstName23").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#OtherFirstName24").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#OtherFirstName25").css({
      "border-top-color": "",
      "border-bottom-color": "",
      "border-right-color": ""
    });
  };

  HighlightOtherFirstNameError = () => {
    $("#OtherFirstName1").css({
      "border-top-color": "red",
      "border-bottom-color": "red",
      "border-left-color": "red"
    });
    $("#OtherFirstName2").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#OtherFirstName3").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#OtherFirstName4").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#OtherFirstName5").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#OtherFirstName6").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#OtherFirstName7").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#OtherFirstName8").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#OtherFirstName9").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#OtherFirstName10").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#OtherFirstName11").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#OtherFirstName12").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#OtherFirstName13").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#OtherFirstName14").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#OtherFirstName15").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#OtherFirstName16").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#OtherFirstName17").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#OtherFirstName18").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#OtherFirstName19").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#OtherFirstName20").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#OtherFirstName21").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#OtherFirstName22").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#OtherFirstName23").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#OtherFirstName24").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#OtherFirstName25").css({
      "border-top-color": "red",
      "border-bottom-color": "red",
      "border-right-color": "red"
    });
  };

  handleOtherMiddleName1 = event => {
    this.handleInput(event);
    this.validateOtherMiddleName(event);
    event.target.value === ""
      ? $("#OtherMiddleName1").focus()
      : $("#OtherMiddleName2").focus();
  };

  handleOtherMiddleName2 = event => {
    this.handleInput(event);
    this.validateOtherMiddleName(event);
    event.target.value === ""
      ? $("#OtherMiddleName2").focus()
      : $("#OtherMiddleName3").focus();
  };

  handleOtherMiddleName3 = event => {
    this.handleInput(event);
    this.validateOtherMiddleName(event);
    event.target.value === ""
      ? $("#OtherMiddleName3").focus()
      : $("#OtherMiddleName4").focus();
  };

  handleOtherMiddleName4 = event => {
    this.handleInput(event);
    this.validateOtherMiddleName(event);
    event.target.value === ""
      ? $("#OtherMiddleName4").focus()
      : $("#OtherMiddleName5").focus();
  };

  handleOtherMiddleName5 = event => {
    this.handleInput(event);
    this.validateOtherMiddleName(event);
    event.target.value === ""
      ? $("#OtherMiddleName5").focus()
      : $("#OtherMiddleName6").focus();
  };

  handleOtherMiddleName6 = event => {
    this.handleInput(event);
    this.validateOtherMiddleName(event);
    event.target.value === ""
      ? $("#OtherMiddleName6").focus()
      : $("#OtherMiddleName7").focus();
  };

  handleOtherMiddleName7 = event => {
    this.handleInput(event);
    this.validateOtherMiddleName(event);
    event.target.value === ""
      ? $("#OtherMiddleName7").focus()
      : $("#OtherMiddleName8").focus();
  };

  handleOtherMiddleName8 = event => {
    this.handleInput(event);
    this.validateOtherMiddleName(event);
    event.target.value === ""
      ? $("#OtherMiddleName8").focus()
      : $("#OtherMiddleName9").focus();
  };

  handleOtherMiddleName9 = event => {
    this.handleInput(event);
    this.validateOtherMiddleName(event);
    event.target.value === ""
      ? $("#OtherMiddleName9").focus()
      : $("#OtherMiddleName10").focus();
  };

  handleOtherMiddleName10 = event => {
    this.handleInput(event);
    this.validateOtherMiddleName(event);
    event.target.value === ""
      ? $("#OtherMiddleName10").focus()
      : $("#OtherMiddleName11").focus();
  };

  handleOtherMiddleName11 = event => {
    this.handleInput(event);
    this.validateOtherMiddleName(event);
    event.target.value === ""
      ? $("#OtherMiddleName11").focus()
      : $("#OtherMiddleName12").focus();
  };

  handleOtherMiddleName12 = event => {
    this.handleInput(event);
    this.validateOtherMiddleName(event);
    event.target.value === ""
      ? $("#OtherMiddleName12").focus()
      : $("#OtherMiddleName13").focus();
  };

  handleOtherMiddleName13 = event => {
    this.handleInput(event);
    this.validateOtherMiddleName(event);
    event.target.value === ""
      ? $("#OtherMiddleName13").focus()
      : $("#OtherMiddleName14").focus();
  };

  handleOtherMiddleName14 = event => {
    this.handleInput(event);
    this.validateOtherMiddleName(event);
    event.target.value === ""
      ? $("#OtherMiddleName14").focus()
      : $("#OtherMiddleName15").focus();
  };

  handleOtherMiddleName15 = event => {
    this.handleInput(event);
    this.validateOtherMiddleName(event);
    event.target.value === ""
      ? $("#OtherMiddleName15").focus()
      : $("#OtherMiddleName16").focus();
  };

  handleOtherMiddleName16 = event => {
    this.handleInput(event);
    this.validateOtherMiddleName(event);
    event.target.value === ""
      ? $("#OtherMiddleName16").focus()
      : $("#OtherMiddleName17").focus();
  };

  handleOtherMiddleName17 = event => {
    this.handleInput(event);
    this.validateOtherMiddleName(event);
    event.target.value === ""
      ? $("#OtherMiddleName17").focus()
      : $("#OtherMiddleName18").focus();
  };

  handleOtherMiddleName18 = event => {
    this.handleInput(event);
    this.validateOtherMiddleName(event);
    event.target.value === ""
      ? $("#OtherMiddleName18").focus()
      : $("#OtherMiddleName19").focus();
  };

  handleOtherMiddleName19 = event => {
    this.handleInput(event);
    this.validateOtherMiddleName(event);
    event.target.value === ""
      ? $("#OtherMiddleName19").focus()
      : $("#OtherMiddleName20").focus();
  };

  handleOtherMiddleName20 = event => {
    this.handleInput(event);
    this.validateOtherMiddleName(event);
    event.target.value === ""
      ? $("#OtherMiddleName20").focus()
      : $("#OtherMiddleName21").focus();
  };

  handleOtherMiddleName21 = event => {
    this.handleInput(event);
    this.validateOtherMiddleName(event);
    event.target.value === ""
      ? $("#OtherMiddleName21").focus()
      : $("#OtherMiddleName22").focus();
  };

  handleOtherMiddleName22 = event => {
    this.handleInput(event);
    this.validateOtherMiddleName(event);
    event.target.value === ""
      ? $("#OtherMiddleName22").focus()
      : $("#OtherMiddleName23").focus();
  };

  handleOtherMiddleName23 = event => {
    this.handleInput(event);
    this.validateOtherMiddleName(event);
    event.target.value === ""
      ? $("#OtherMiddleName23").focus()
      : $("#OtherMiddleName24").focus();
  };

  handleOtherMiddleName24 = event => {
    this.handleInput(event);
    this.validateOtherMiddleName(event);
    event.target.value === ""
      ? $("#OtherMiddleName24").focus()
      : $("#OtherMiddleName25").focus();
  };

  handleOtherMiddleName25 = event => {
    this.handleInput(event);
    this.validateOtherMiddleName(event);
    event.target.value === ""
      ? $("#OtherMiddleName25").focus()
      : $("#OtherMiddleName25").focus();
  };

  ResetOtherMiddleNameError = () => {
    $("#OtherMiddleName1").css({
      "border-top-color": "",
      "border-bottom-color": "",
      "border-left-color": ""
    });
    $("#OtherMiddleName2").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#OtherMiddleName3").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#OtherMiddleName4").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#OtherMiddleName5").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#OtherMiddleName6").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#OtherMiddleName7").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#OtherMiddleName8").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#OtherMiddleName9").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#OtherMiddleName10").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#OtherMiddleName11").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#OtherMiddleName12").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#OtherMiddleName13").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#OtherMiddleName14").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#OtherMiddleName15").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#OtherMiddleName16").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#OtherMiddleName17").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#OtherMiddleName18").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#OtherMiddleName19").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#OtherMiddleName20").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#OtherMiddleName21").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#OtherMiddleName22").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#OtherMiddleName23").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#OtherMiddleName24").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#OtherMiddleName25").css({
      "border-top-color": "",
      "border-bottom-color": "",
      "border-right-color": ""
    });
  };

  HighlightOtherMiddleNameError = () => {
    $("#OtherMiddleName1").css({
      "border-top-color": "red",
      "border-bottom-color": "red",
      "border-left-color": "red"
    });
    $("#OtherMiddleName2").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#OtherMiddleName3").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#OtherMiddleName4").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#OtherMiddleName5").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#OtherMiddleName6").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#OtherMiddleName7").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#OtherMiddleName8").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#OtherMiddleName9").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#OtherMiddleName10").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#OtherMiddleName11").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#OtherMiddleName12").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#OtherMiddleName13").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#OtherMiddleName14").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#OtherMiddleName15").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#OtherMiddleName16").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#OtherMiddleName17").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#OtherMiddleName18").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#OtherMiddleName19").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#OtherMiddleName20").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#OtherMiddleName21").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#OtherMiddleName22").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#OtherMiddleName23").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#OtherMiddleName24").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#OtherMiddleName25").css({
      "border-top-color": "red",
      "border-bottom-color": "red",
      "border-right-color": "red"
    });
  };

  async validateOtherLastName(event) {
    this.state.data.OtherLastName =
      this.state.data.OtherLastName1 +
      this.state.data.OtherLastName2 +
      this.state.data.OtherLastName3 +
      this.state.data.OtherLastName4 +
      this.state.data.OtherLastName5 +
      this.state.data.OtherLastName6 +
      this.state.data.OtherLastName7 +
      this.state.data.OtherLastName8 +
      this.state.data.OtherLastName9 +
      this.state.data.OtherLastName10 +
      this.state.data.OtherLastName11 +
      this.state.data.OtherLastName12 +
      this.state.data.OtherLastName13 +
      this.state.data.OtherLastName14 +
      this.state.data.OtherLastName15 +
      this.state.data.OtherLastName16 +
      this.state.data.OtherLastName17 +
      this.state.data.OtherLastName18 +
      this.state.data.OtherLastName19 +
      this.state.data.OtherLastName20 +
      this.state.data.OtherLastName21 +
      this.state.data.OtherLastName22 +
      this.state.data.OtherLastName23 +
      this.state.data.OtherLastName24 +
      this.state.data.OtherLastName25;

    let errors = this.state.errors;
    let name = "OtherLastName";
    this.setState(errors);
    errors[name] = "";

    this.ResetOtherLastNameError();

    if (
      this.state.data.OtherLastName === "" ||
      isNaN(this.state.data.OtherLastName) === false
    ) {
      let errors = this.state.errors;
      let name = "OtherLastName";
      this.setState(errors);
      errors[name] = "*Please enter your Other LastName";

      this.state.isModalEnabled = false;
      this.HighlightOtherLastNameError();
    } else if (typeof this.state.data.OtherLastName !== "undefined") {
      if (!this.state.data.OtherLastName.match(/^[a-zA-Z ]*$/)) {
        let errors = this.state.errors;
        let name = "OtherLastName";
        this.setState(errors);
        errors[name] = "*Please enter alphabet characters only.";

        this.state.isModalEnabled = false;
        this.HighlightOtherLastNameError();
      }
    }

    localStorage.setItem("localdata", JSON.stringify(this.state.data));
    localStorage.setItem("localerror", JSON.stringify(this.state.errors));
  }

  async validateOtherFirstName(event) {
    this.state.data.OtherFirstName =
      this.state.data.OtherFirstName1 +
      this.state.data.OtherFirstName2 +
      this.state.data.OtherFirstName3 +
      this.state.data.OtherFirstName4 +
      this.state.data.OtherFirstName5 +
      this.state.data.OtherFirstName6 +
      this.state.data.OtherFirstName7 +
      this.state.data.OtherFirstName8 +
      this.state.data.OtherFirstName9 +
      this.state.data.OtherFirstName10 +
      this.state.data.OtherFirstName11 +
      this.state.data.OtherFirstName12 +
      this.state.data.OtherFirstName13 +
      this.state.data.OtherFirstName14 +
      this.state.data.OtherFirstName15 +
      this.state.data.OtherFirstName16 +
      this.state.data.OtherFirstName17 +
      this.state.data.OtherFirstName18 +
      this.state.data.OtherFirstName19 +
      this.state.data.OtherFirstName20 +
      this.state.data.OtherFirstName21 +
      this.state.data.OtherFirstName22 +
      this.state.data.OtherFirstName23 +
      this.state.data.OtherFirstName24 +
      this.state.data.OtherFirstName25;

    let errors = this.state.errors;
    let name = "OtherFirstName";
    this.setState(errors);
    errors[name] = "";
    this.ResetOtherFirstNameError();

    if (
      this.state.data.OtherFirstName === "" ||
      isNaN(this.state.data.OtherFirstName) === false
    ) {
      let errors = this.state.errors;
      let name = "OtherFirstName";
      this.setState(errors);
      errors[name] = "*Please enter your Other FirstName";

      this.state.isModalEnabled = false;
      this.HighlightOtherFirstNameError();
    } else if (typeof this.state.data.OtherFirstName !== "undefined") {
      if (!this.state.data.OtherFirstName.match(/^[a-zA-Z ]*$/)) {
        let errors = this.state.errors;
        let name = "OtherFirstName";
        this.setState(errors);
        errors[name] = "*Please enter alphabet characters only.";

        this.state.isModalEnabled = false;
        this.HighlightOtherFirstNameError();
      }
    }

    localStorage.setItem("localdata", JSON.stringify(this.state.data));
    localStorage.setItem("localerror", JSON.stringify(this.state.errors));
  }

  async validateOtherMiddleName(event) {
    this.state.data.OtherMiddleName =
      this.state.data.OtherMiddleName1 +
      this.state.data.OtherMiddleName2 +
      this.state.data.OtherMiddleName3 +
      this.state.data.OtherMiddleName4 +
      this.state.data.OtherMiddleName5 +
      this.state.data.OtherMiddleName6 +
      this.state.data.OtherMiddleName7 +
      this.state.data.OtherMiddleName8 +
      this.state.data.OtherMiddleName9 +
      this.state.data.OtherMiddleName10 +
      this.state.data.OtherMiddleName11 +
      this.state.data.OtherMiddleName12 +
      this.state.data.OtherMiddleName13 +
      this.state.data.OtherMiddleName14 +
      this.state.data.OtherMiddleName15 +
      this.state.data.OtherMiddleName16 +
      this.state.data.OtherMiddleName17 +
      this.state.data.OtherMiddleName18 +
      this.state.data.OtherMiddleName19 +
      this.state.data.OtherMiddleName20 +
      this.state.data.OtherMiddleName21 +
      this.state.data.OtherMiddleName22 +
      this.state.data.OtherMiddleName23 +
      this.state.data.OtherMiddleName24 +
      this.state.data.OtherMiddleName25;

    let errors = this.state.errors;
    let name = "OtherMiddleName";
    this.setState(errors);
    errors[name] = "";

    this.ResetOtherMiddleNameError();

    if (typeof this.state.data.OtherMiddleName !== "undefined") {
      if (!this.state.data.OtherMiddleName.match(/^[a-zA-Z ]*$/)) {
        let errors = this.state.errors;
        let name = "OtherMiddleName";
        this.setState(errors);
        errors[name] = "*Please enter alphabet characters only.";

        this.state.isModalEnabled = false;
        this.HighlightOtherMiddleNameError();
      }
    }

    localStorage.setItem("localdata", JSON.stringify(this.state.data));
    localStorage.setItem("localerror", JSON.stringify(this.state.errors));
  }

  render() {
    return (
      <div>
        <div className="ColouredLabel">
          <label className="ColouredLabelSuper">
            {" "}
            &nbsp; &nbsp;3 &nbsp; Have you ever been known by any other name?{" "}
          </label>
          &nbsp; &nbsp;
          <input
            type="checkbox"
            className="Check ColouredLabelCheck"
            id="5"
            name="OtherName[2][]"
            value="Yes"
            onClick={e => this.handleOtherNameCheck(e, "OtherName")}
          />
          <label className="Label_with_no_space"> Yes</label>
          &nbsp; &nbsp;
          <input
            type="checkbox"
            className="Check ColouredLabelCheck"
            id="6"
            name="OtherName[2][]"
            value="No"
            onClick={e => this.handleOtherNameCheck(e, "OtherName")}
          />
          <label className="Label_with_no_space"> No</label>
          <label className="Label_with_no_space Move_End">
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
                className="tooltiptext tooltiptextLabel tooltiptextOtherName"
                style={{
                  width: "450px",
                  height: "20px",
                  fontSize: "17px",
                  fontWeight: "inherit"
                }}
              >
                Please tick as applicable
              </label>
            </span>
          ) : (
            ""
          )}
        </div>

        <div id="OtherNameDiv">
          <label className="FirstLabel small_font">
            {" "}
            If yes, please give that other name
          </label>{" "}
          <br />
          <label className="FirstLabel"> Please select title,</label>
          <label className="Label_with_no_space"> as applicable</label>{" "}
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <input
            type="checkbox"
            className="Check"
            id="7"
            name="NameTitleTwo[3][]"
            value="1Shri"
            onClick={e => this.handleNameTitleTwoCheck(e, "NameTitleTwo")}
          />
          <label className="Label_with_no_space"> Shri</label>
          <input
            type="checkbox"
            className="Check"
            id="8"
            name="NameTitleTwo[3][]"
            value="1Smt.1"
            onClick={e => this.handleNameTitleTwoCheck(e, "NameTitleTwo")}
          />
          <label className="Label_with_no_space"> Smt.</label>
          <input
            type="checkbox"
            className="Check"
            id="9"
            name="NameTitleTwo[3][]"
            value="1Kumari"
            onClick={e => this.handleNameTitleTwoCheck(e, "NameTitleTwo")}
          />
          <label className="Label_with_no_space"> Kumari</label>
          <input
            type="checkbox"
            className="Check"
            id="10"
            name="NameTitleTwo[3][]"
            value="1M/s"
            onClick={e => this.handleNameTitleTwoCheck(e, "NameTitleTwo")}
          />
          <label className="Label_with_no_space"> M/s</label> <br />
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
                      value={this.state.data.OtherLastName1}
                      name="OtherLastName1"
                      id="OtherLastName1"
                      onKeyDown={event =>
                        this.handleBackspaceKey(
                          event,
                          "#OtherLastName1",
                          "#OtherLastName1"
                        )
                      }
                      onChange={this.handleOtherLastName1}
                    />

                    <input
                      type="text"
                      className="Name-control"
                      maxLength="1"
                      value={this.state.data.OtherLastName2}
                      name="OtherLastName2"
                      id="OtherLastName2"
                      onKeyDown={event =>
                        this.handleBackspaceKey(
                          event,
                          "#OtherLastName1",
                          "#OtherLastName2"
                        )
                      }
                      onChange={this.handleOtherLastName2}
                    />

                    <input
                      type="text"
                      className="Name-control"
                      maxLength="1"
                      value={this.state.data.OtherLastName3}
                      name="OtherLastName3"
                      id="OtherLastName3"
                      onKeyDown={event =>
                        this.handleBackspaceKey(
                          event,
                          "#OtherLastName2",
                          "#OtherLastName3"
                        )
                      }
                      onChange={this.handleOtherLastName3}
                    />

                    <input
                      type="text"
                      className="Name-control"
                      maxLength="1"
                      value={this.state.data.OtherLastName4}
                      name="OtherLastName4"
                      id="OtherLastName4"
                      onKeyDown={event =>
                        this.handleBackspaceKey(
                          event,
                          "#OtherLastName3",
                          "#OtherLastName4"
                        )
                      }
                      onChange={this.handleOtherLastName4}
                    />

                    <input
                      type="text"
                      className="Name-control"
                      maxLength="1"
                      value={this.state.data.OtherLastName5}
                      name="OtherLastName5"
                      id="OtherLastName5"
                      onKeyDown={event =>
                        this.handleBackspaceKey(
                          event,
                          "#OtherLastName4",
                          "#OtherLastName5"
                        )
                      }
                      onChange={this.handleOtherLastName5}
                    />

                    <input
                      type="text"
                      className="Name-control"
                      maxLength="1"
                      value={this.state.data.OtherLastName6}
                      name="OtherLastName6"
                      id="OtherLastName6"
                      onKeyDown={event =>
                        this.handleBackspaceKey(
                          event,
                          "#OtherLastName5",
                          "#OtherLastName6"
                        )
                      }
                      onChange={this.handleOtherLastName6}
                    />

                    <input
                      type="text"
                      className="Name-control"
                      maxLength="1"
                      value={this.state.data.OtherLastName7}
                      name="OtherLastName7"
                      id="OtherLastName7"
                      onKeyDown={event =>
                        this.handleBackspaceKey(
                          event,
                          "#OtherLastName6",
                          "#OtherLastName7"
                        )
                      }
                      onChange={this.handleOtherLastName7}
                    />

                    <input
                      type="text"
                      className="Name-control"
                      maxLength="1"
                      value={this.state.data.OtherLastName8}
                      name="OtherLastName8"
                      id="OtherLastName8"
                      onKeyDown={event =>
                        this.handleBackspaceKey(
                          event,
                          "#OtherLastName7",
                          "#OtherLastName8"
                        )
                      }
                      onChange={this.handleOtherLastName8}
                    />

                    <input
                      type="text"
                      className="Name-control"
                      maxLength="1"
                      value={this.state.data.OtherLastName9}
                      name="OtherLastName9"
                      id="OtherLastName9"
                      onKeyDown={event =>
                        this.handleBackspaceKey(
                          event,
                          "#OtherLastName8",
                          "#OtherLastName9"
                        )
                      }
                      onChange={this.handleOtherLastName9}
                    />

                    <input
                      type="text"
                      className="Name-control"
                      maxLength="1"
                      value={this.state.data.OtherLastName10}
                      name="OtherLastName10"
                      id="OtherLastName10"
                      onKeyDown={event =>
                        this.handleBackspaceKey(
                          event,
                          "#OtherLastName9",
                          "#OtherLastName10"
                        )
                      }
                      onChange={this.handleOtherLastName10}
                    />

                    <input
                      type="text"
                      className="Name-control"
                      maxLength="1"
                      value={this.state.data.OtherLastName11}
                      name="OtherLastName11"
                      id="OtherLastName11"
                      onKeyDown={event =>
                        this.handleBackspaceKey(
                          event,
                          "#OtherLastName10",
                          "#OtherLastName11"
                        )
                      }
                      onChange={this.handleOtherLastName11}
                    />

                    <input
                      type="text"
                      className="Name-control"
                      maxLength="1"
                      value={this.state.data.OtherLastName12}
                      name="OtherLastName12"
                      id="OtherLastName12"
                      onKeyDown={event =>
                        this.handleBackspaceKey(
                          event,
                          "#OtherLastName11",
                          "#OtherLastName12"
                        )
                      }
                      onChange={this.handleOtherLastName12}
                    />

                    <input
                      type="text"
                      className="Name-control"
                      maxLength="1"
                      value={this.state.data.OtherLastName13}
                      name="OtherLastName13"
                      id="OtherLastName13"
                      onKeyDown={event =>
                        this.handleBackspaceKey(
                          event,
                          "#OtherLastName12",
                          "#OtherLastName13"
                        )
                      }
                      onChange={this.handleOtherLastName13}
                    />

                    <input
                      type="text"
                      className="Name-control"
                      maxLength="1"
                      value={this.state.data.OtherLastName14}
                      name="OtherLastName14"
                      id="OtherLastName14"
                      onKeyDown={event =>
                        this.handleBackspaceKey(
                          event,
                          "#OtherLastName13",
                          "#OtherLastName14"
                        )
                      }
                      onChange={this.handleOtherLastName14}
                    />

                    <input
                      type="text"
                      className="Name-control"
                      maxLength="1"
                      value={this.state.data.OtherLastName15}
                      name="OtherLastName15"
                      id="OtherLastName15"
                      onKeyDown={event =>
                        this.handleBackspaceKey(
                          event,
                          "#OtherLastName14",
                          "#OtherLastName15"
                        )
                      }
                      onChange={this.handleOtherLastName15}
                    />

                    <input
                      type="text"
                      className="Name-control"
                      maxLength="1"
                      value={this.state.data.OtherLastName16}
                      name="OtherLastName16"
                      id="OtherLastName16"
                      onKeyDown={event =>
                        this.handleBackspaceKey(
                          event,
                          "#OtherLastName15",
                          "#OtherLastName16"
                        )
                      }
                      onChange={this.handleOtherLastName16}
                    />

                    <input
                      type="text"
                      className="Name-control"
                      maxLength="1"
                      value={this.state.data.OtherLastName17}
                      name="OtherLastName17"
                      id="OtherLastName17"
                      onKeyDown={event =>
                        this.handleBackspaceKey(
                          event,
                          "#OtherLastName16",
                          "#OtherLastName17"
                        )
                      }
                      onChange={this.handleOtherLastName17}
                    />

                    <input
                      type="text"
                      className="Name-control"
                      maxLength="1"
                      value={this.state.data.OtherLastName18}
                      name="OtherLastName18"
                      id="OtherLastName18"
                      onKeyDown={event =>
                        this.handleBackspaceKey(
                          event,
                          "#OtherLastName17",
                          "#OtherLastName18"
                        )
                      }
                      onChange={this.handleOtherLastName18}
                    />

                    <input
                      type="text"
                      className="Name-control"
                      maxLength="1"
                      value={this.state.data.OtherLastName19}
                      name="OtherLastName19"
                      id="OtherLastName19"
                      onKeyDown={event =>
                        this.handleBackspaceKey(
                          event,
                          "#OtherLastName18",
                          "#OtherLastName19"
                        )
                      }
                      onChange={this.handleOtherLastName19}
                    />

                    <input
                      type="text"
                      className="Name-control"
                      maxLength="1"
                      value={this.state.data.OtherLastName20}
                      name="OtherLastName20"
                      id="OtherLastName20"
                      onKeyDown={event =>
                        this.handleBackspaceKey(
                          event,
                          "#OtherLastName19",
                          "#OtherLastName20"
                        )
                      }
                      onChange={this.handleOtherLastName20}
                    />

                    <input
                      type="text"
                      className="Name-control"
                      maxLength="1"
                      value={this.state.data.OtherLastName21}
                      name="OtherLastName21"
                      id="OtherLastName21"
                      onKeyDown={event =>
                        this.handleBackspaceKey(
                          event,
                          "#OtherLastName20",
                          "#OtherLastName21"
                        )
                      }
                      onChange={this.handleOtherLastName21}
                    />

                    <input
                      type="text"
                      className="Name-control"
                      maxLength="1"
                      value={this.state.data.OtherLastName22}
                      name="OtherLastName22"
                      id="OtherLastName22"
                      onKeyDown={event =>
                        this.handleBackspaceKey(
                          event,
                          "#OtherLastName21",
                          "#OtherLastName22"
                        )
                      }
                      onChange={this.handleOtherLastName22}
                    />

                    <input
                      type="text"
                      className="Name-control"
                      maxLength="1"
                      value={this.state.data.OtherLastName23}
                      name="OtherLastName23"
                      id="OtherLastName23"
                      onKeyDown={event =>
                        this.handleBackspaceKey(
                          event,
                          "#OtherLastName22",
                          "#OtherLastName23"
                        )
                      }
                      onChange={this.handleOtherLastName23}
                    />

                    <input
                      type="text"
                      className="Name-control"
                      maxLength="1"
                      value={this.state.data.OtherLastName24}
                      name="OtherLastName24"
                      id="OtherLastName24"
                      onKeyDown={event =>
                        this.handleBackspaceKey(
                          event,
                          "#OtherLastName23",
                          "#OtherLastName24"
                        )
                      }
                      onChange={this.handleOtherLastName24}
                    />

                    <input
                      type="text"
                      className="Name-control"
                      maxLength="1"
                      value={this.state.data.OtherLastName25}
                      name="OtherLastName25"
                      id="OtherLastName25"
                      onKeyDown={event =>
                        this.handleBackspaceKey(
                          event,
                          "#OtherLastName24",
                          "#OtherLastName25"
                        )
                      }
                      onChange={this.handleOtherLastName25}
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
                      value={this.state.data.OtherFirstName1}
                      name="OtherFirstName1"
                      id="OtherFirstName1"
                      onKeyDown={event =>
                        this.handleBackspaceKey(
                          event,
                          "#OtherFirstName1",
                          "#OtherFirstName1"
                        )
                      }
                      onChange={this.handleOtherFirstName1}
                    />

                    <input
                      type="text"
                      className="Name-control"
                      maxLength="1"
                      value={this.state.data.OtherFirstName2}
                      name="OtherFirstName2"
                      id="OtherFirstName2"
                      onKeyDown={event =>
                        this.handleBackspaceKey(
                          event,
                          "#OtherFirstName1",
                          "#OtherFirstName2"
                        )
                      }
                      onChange={this.handleOtherFirstName2}
                    />

                    <input
                      type="text"
                      className="Name-control"
                      maxLength="1"
                      value={this.state.data.OtherFirstName3}
                      name="OtherFirstName3"
                      id="OtherFirstName3"
                      onKeyDown={event =>
                        this.handleBackspaceKey(
                          event,
                          "#OtherFirstName2",
                          "#OtherFirstName3"
                        )
                      }
                      onChange={this.handleOtherFirstName3}
                    />

                    <input
                      type="text"
                      className="Name-control"
                      maxLength="1"
                      value={this.state.data.OtherFirstName4}
                      name="OtherFirstName4"
                      id="OtherFirstName4"
                      onKeyDown={event =>
                        this.handleBackspaceKey(
                          event,
                          "#OtherFirstName3",
                          "#OtherFirstName4"
                        )
                      }
                      onChange={this.handleOtherFirstName4}
                    />

                    <input
                      type="text"
                      className="Name-control"
                      maxLength="1"
                      value={this.state.data.OtherFirstName5}
                      name="OtherFirstName5"
                      id="OtherFirstName5"
                      onKeyDown={event =>
                        this.handleBackspaceKey(
                          event,
                          "#OtherFirstName4",
                          "#OtherFirstName5"
                        )
                      }
                      onChange={this.handleOtherFirstName5}
                    />

                    <input
                      type="text"
                      className="Name-control"
                      maxLength="1"
                      value={this.state.data.OtherFirstName6}
                      name="OtherFirstName6"
                      id="OtherFirstName6"
                      onKeyDown={event =>
                        this.handleBackspaceKey(
                          event,
                          "#OtherFirstName5",
                          "#OtherFirstName6"
                        )
                      }
                      onChange={this.handleOtherFirstName6}
                    />

                    <input
                      type="text"
                      className="Name-control"
                      maxLength="1"
                      value={this.state.data.OtherFirstName7}
                      name="OtherFirstName7"
                      id="OtherFirstName7"
                      onKeyDown={event =>
                        this.handleBackspaceKey(
                          event,
                          "#OtherFirstName6",
                          "#OtherFirstName7"
                        )
                      }
                      onChange={this.handleOtherFirstName7}
                    />

                    <input
                      type="text"
                      className="Name-control"
                      maxLength="1"
                      value={this.state.data.OtherFirstName8}
                      name="OtherFirstName8"
                      id="OtherFirstName8"
                      onKeyDown={event =>
                        this.handleBackspaceKey(
                          event,
                          "#OtherFirstName7",
                          "#OtherFirstName8"
                        )
                      }
                      onChange={this.handleOtherFirstName8}
                    />

                    <input
                      type="text"
                      className="Name-control"
                      maxLength="1"
                      value={this.state.data.OtherFirstName9}
                      name="OtherFirstName9"
                      id="OtherFirstName9"
                      onKeyDown={event =>
                        this.handleBackspaceKey(
                          event,
                          "#OtherFirstName8",
                          "#OtherFirstName9"
                        )
                      }
                      onChange={this.handleOtherFirstName9}
                    />

                    <input
                      type="text"
                      className="Name-control"
                      maxLength="1"
                      value={this.state.data.OtherFirstName10}
                      name="OtherFirstName10"
                      id="OtherFirstName10"
                      onKeyDown={event =>
                        this.handleBackspaceKey(
                          event,
                          "#OtherFirstName9",
                          "#OtherFirstName10"
                        )
                      }
                      onChange={this.handleOtherFirstName10}
                    />

                    <input
                      type="text"
                      className="Name-control"
                      maxLength="1"
                      value={this.state.data.OtherFirstName11}
                      name="OtherFirstName11"
                      id="OtherFirstName11"
                      onKeyDown={event =>
                        this.handleBackspaceKey(
                          event,
                          "#OtherFirstName10",
                          "#OtherFirstName11"
                        )
                      }
                      onChange={this.handleOtherFirstName11}
                    />

                    <input
                      type="text"
                      className="Name-control"
                      maxLength="1"
                      value={this.state.data.OtherFirstName12}
                      name="OtherFirstName12"
                      id="OtherFirstName12"
                      onKeyDown={event =>
                        this.handleBackspaceKey(
                          event,
                          "#OtherFirstName11",
                          "#OtherFirstName12"
                        )
                      }
                      onChange={this.handleOtherFirstName12}
                    />

                    <input
                      type="text"
                      className="Name-control"
                      maxLength="1"
                      value={this.state.data.OtherFirstName13}
                      name="OtherFirstName13"
                      id="OtherFirstName13"
                      onKeyDown={event =>
                        this.handleBackspaceKey(
                          event,
                          "#OtherFirstName12",
                          "#OtherFirstName13"
                        )
                      }
                      onChange={this.handleOtherFirstName13}
                    />

                    <input
                      type="text"
                      className="Name-control"
                      maxLength="1"
                      value={this.state.data.OtherFirstName14}
                      name="OtherFirstName14"
                      id="OtherFirstName14"
                      onKeyDown={event =>
                        this.handleBackspaceKey(
                          event,
                          "#OtherFirstName13",
                          "#OtherFirstName14"
                        )
                      }
                      onChange={this.handleOtherFirstName14}
                    />

                    <input
                      type="text"
                      className="Name-control"
                      maxLength="1"
                      value={this.state.data.OtherFirstName15}
                      name="OtherFirstName15"
                      id="OtherFirstName15"
                      onKeyDown={event =>
                        this.handleBackspaceKey(
                          event,
                          "#OtherFirstName14",
                          "#OtherFirstName15"
                        )
                      }
                      onChange={this.handleOtherFirstName15}
                    />

                    <input
                      type="text"
                      className="Name-control"
                      maxLength="1"
                      value={this.state.data.OtherFirstName16}
                      name="OtherFirstName16"
                      id="OtherFirstName16"
                      onKeyDown={event =>
                        this.handleBackspaceKey(
                          event,
                          "#OtherFirstName15",
                          "#OtherFirstName16"
                        )
                      }
                      onChange={this.handleOtherFirstName16}
                    />

                    <input
                      type="text"
                      className="Name-control"
                      maxLength="1"
                      value={this.state.data.OtherFirstName17}
                      name="OtherFirstName17"
                      id="OtherFirstName17"
                      onKeyDown={event =>
                        this.handleBackspaceKey(
                          event,
                          "#OtherFirstName16",
                          "#OtherFirstName17"
                        )
                      }
                      onChange={this.handleOtherFirstName17}
                    />

                    <input
                      type="text"
                      className="Name-control"
                      maxLength="1"
                      value={this.state.data.OtherFirstName18}
                      name="OtherFirstName18"
                      id="OtherFirstName18"
                      onKeyDown={event =>
                        this.handleBackspaceKey(
                          event,
                          "#OtherFirstName17",
                          "#OtherFirstName18"
                        )
                      }
                      onChange={this.handleOtherFirstName18}
                    />

                    <input
                      type="text"
                      className="Name-control"
                      maxLength="1"
                      value={this.state.data.OtherFirstName19}
                      name="OtherFirstName19"
                      id="OtherFirstName19"
                      onKeyDown={event =>
                        this.handleBackspaceKey(
                          event,
                          "#OtherFirstName18",
                          "#OtherFirstName19"
                        )
                      }
                      onChange={this.handleOtherFirstName19}
                    />

                    <input
                      type="text"
                      className="Name-control"
                      maxLength="1"
                      value={this.state.data.OtherFirstName20}
                      name="OtherFirstName20"
                      id="OtherFirstName20"
                      onKeyDown={event =>
                        this.handleBackspaceKey(
                          event,
                          "#OtherFirstName19",
                          "#OtherFirstName20"
                        )
                      }
                      onChange={this.handleOtherFirstName20}
                    />

                    <input
                      type="text"
                      className="Name-control"
                      maxLength="1"
                      value={this.state.data.OtherFirstName21}
                      name="OtherFirstName21"
                      id="OtherFirstName21"
                      onKeyDown={event =>
                        this.handleBackspaceKey(
                          event,
                          "#OtherFirstName20",
                          "#OtherFirstName21"
                        )
                      }
                      onChange={this.handleOtherFirstName21}
                    />

                    <input
                      type="text"
                      className="Name-control"
                      maxLength="1"
                      value={this.state.data.OtherFirstName22}
                      name="OtherFirstName22"
                      id="OtherFirstName22"
                      onKeyDown={event =>
                        this.handleBackspaceKey(
                          event,
                          "#OtherFirstName21",
                          "#OtherFirstName22"
                        )
                      }
                      onChange={this.handleOtherFirstName22}
                    />

                    <input
                      type="text"
                      className="Name-control"
                      maxLength="1"
                      value={this.state.data.OtherFirstName23}
                      name="OtherFirstName23"
                      id="OtherFirstName23"
                      onKeyDown={event =>
                        this.handleBackspaceKey(
                          event,
                          "#OtherFirstName22",
                          "#OtherFirstName23"
                        )
                      }
                      onChange={this.handleOtherFirstName23}
                    />

                    <input
                      type="text"
                      className="Name-control"
                      maxLength="1"
                      value={this.state.data.OtherFirstName24}
                      name="OtherFirstName24"
                      id="OtherFirstName24"
                      onKeyDown={event =>
                        this.handleBackspaceKey(
                          event,
                          "#OtherFirstName23",
                          "#OtherFirstName24"
                        )
                      }
                      onChange={this.handleOtherFirstName24}
                    />

                    <input
                      type="text"
                      className="Name-control"
                      maxLength="1"
                      value={this.state.data.OtherFirstName25}
                      name="OtherFirstName25"
                      id="OtherFirstName25"
                      onKeyDown={event =>
                        this.handleBackspaceKey(
                          event,
                          "#OtherFirstName24",
                          "#OtherFirstName25"
                        )
                      }
                      onChange={this.handleOtherFirstName25}
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
                      value={this.state.data.OtherMiddleName1}
                      name="OtherMiddleName1"
                      id="OtherMiddleName1"
                      onKeyDown={event =>
                        this.handleBackspaceKey(
                          event,
                          "#OtherMiddleName1",
                          "#OtherMiddleName1"
                        )
                      }
                      onChange={this.handleOtherMiddleName1}
                    />

                    <input
                      type="text"
                      className="Name-control"
                      maxLength="1"
                      value={this.state.data.OtherMiddleName2}
                      name="OtherMiddleName2"
                      id="OtherMiddleName2"
                      onKeyDown={event =>
                        this.handleBackspaceKey(
                          event,
                          "#OtherMiddleName1",
                          "#OtherMiddleName2"
                        )
                      }
                      onChange={this.handleOtherMiddleName2}
                    />

                    <input
                      type="text"
                      className="Name-control"
                      maxLength="1"
                      value={this.state.data.OtherMiddleName3}
                      name="OtherMiddleName3"
                      id="OtherMiddleName3"
                      onKeyDown={event =>
                        this.handleBackspaceKey(
                          event,
                          "#OtherMiddleName2",
                          "#OtherMiddleName3"
                        )
                      }
                      onChange={this.handleOtherMiddleName3}
                    />

                    <input
                      type="text"
                      className="Name-control"
                      maxLength="1"
                      value={this.state.data.OtherMiddleName4}
                      name="OtherMiddleName4"
                      id="OtherMiddleName4"
                      onKeyDown={event =>
                        this.handleBackspaceKey(
                          event,
                          "#OtherMiddleName3",
                          "#OtherMiddleName4"
                        )
                      }
                      onChange={this.handleOtherMiddleName4}
                    />

                    <input
                      type="text"
                      className="Name-control"
                      maxLength="1"
                      value={this.state.data.OtherMiddleName5}
                      name="OtherMiddleName5"
                      id="OtherMiddleName5"
                      onKeyDown={event =>
                        this.handleBackspaceKey(
                          event,
                          "#OtherMiddleName4",
                          "#OtherMiddleName5"
                        )
                      }
                      onChange={this.handleOtherMiddleName5}
                    />

                    <input
                      type="text"
                      className="Name-control"
                      maxLength="1"
                      value={this.state.data.OtherMiddleName6}
                      name="OtherMiddleName6"
                      id="OtherMiddleName6"
                      onKeyDown={event =>
                        this.handleBackspaceKey(
                          event,
                          "#OtherMiddleName5",
                          "#OtherMiddleName6"
                        )
                      }
                      onChange={this.handleOtherMiddleName6}
                    />

                    <input
                      type="text"
                      className="Name-control"
                      maxLength="1"
                      value={this.state.data.OtherMiddleName7}
                      name="OtherMiddleName7"
                      id="OtherMiddleName7"
                      onKeyDown={event =>
                        this.handleBackspaceKey(
                          event,
                          "#OtherMiddleName6",
                          "#OtherMiddleName7"
                        )
                      }
                      onChange={this.handleOtherMiddleName7}
                    />

                    <input
                      type="text"
                      className="Name-control"
                      maxLength="1"
                      value={this.state.data.OtherMiddleName8}
                      name="OtherMiddleName8"
                      id="OtherMiddleName8"
                      onKeyDown={event =>
                        this.handleBackspaceKey(
                          event,
                          "#OtherMiddleName7",
                          "#OtherMiddleName8"
                        )
                      }
                      onChange={this.handleOtherMiddleName8}
                    />

                    <input
                      type="text"
                      className="Name-control"
                      maxLength="1"
                      value={this.state.data.OtherMiddleName9}
                      name="OtherMiddleName9"
                      id="OtherMiddleName9"
                      onKeyDown={event =>
                        this.handleBackspaceKey(
                          event,
                          "#OtherMiddleName8",
                          "#OtherMiddleName9"
                        )
                      }
                      onChange={this.handleOtherMiddleName9}
                    />

                    <input
                      type="text"
                      className="Name-control"
                      maxLength="1"
                      value={this.state.data.OtherMiddleName10}
                      name="OtherMiddleName10"
                      id="OtherMiddleName10"
                      onKeyDown={event =>
                        this.handleBackspaceKey(
                          event,
                          "#OtherMiddleName9",
                          "#OtherMiddleName10"
                        )
                      }
                      onChange={this.handleOtherMiddleName10}
                    />

                    <input
                      type="text"
                      className="Name-control"
                      maxLength="1"
                      value={this.state.data.OtherMiddleName11}
                      name="OtherMiddleName11"
                      id="OtherMiddleName11"
                      onKeyDown={event =>
                        this.handleBackspaceKey(
                          event,
                          "#OtherMiddleName10",
                          "#OtherMiddleName11"
                        )
                      }
                      onChange={this.handleOtherMiddleName11}
                    />

                    <input
                      type="text"
                      className="Name-control"
                      maxLength="1"
                      value={this.state.data.OtherMiddleName12}
                      name="OtherMiddleName12"
                      id="OtherMiddleName12"
                      onKeyDown={event =>
                        this.handleBackspaceKey(
                          event,
                          "#OtherMiddleName11",
                          "#OtherMiddleName12"
                        )
                      }
                      onChange={this.handleOtherMiddleName12}
                    />

                    <input
                      type="text"
                      className="Name-control"
                      maxLength="1"
                      value={this.state.data.OtherMiddleName13}
                      name="OtherMiddleName13"
                      id="OtherMiddleName13"
                      onKeyDown={event =>
                        this.handleBackspaceKey(
                          event,
                          "#OtherMiddleName12",
                          "#OtherMiddleName13"
                        )
                      }
                      onChange={this.handleOtherMiddleName13}
                    />

                    <input
                      type="text"
                      className="Name-control"
                      maxLength="1"
                      value={this.state.data.OtherMiddleName14}
                      name="OtherMiddleName14"
                      id="OtherMiddleName14"
                      onKeyDown={event =>
                        this.handleBackspaceKey(
                          event,
                          "#OtherMiddleName13",
                          "#OtherMiddleName14"
                        )
                      }
                      onChange={this.handleOtherMiddleName14}
                    />

                    <input
                      type="text"
                      className="Name-control"
                      maxLength="1"
                      value={this.state.data.OtherMiddleName15}
                      name="OtherMiddleName15"
                      id="OtherMiddleName15"
                      onKeyDown={event =>
                        this.handleBackspaceKey(
                          event,
                          "#OtherMiddleName14",
                          "#OtherMiddleName15"
                        )
                      }
                      onChange={this.handleOtherMiddleName15}
                    />

                    <input
                      type="text"
                      className="Name-control"
                      maxLength="1"
                      value={this.state.data.OtherMiddleName16}
                      name="OtherMiddleName16"
                      id="OtherMiddleName16"
                      onKeyDown={event =>
                        this.handleBackspaceKey(
                          event,
                          "#OtherMiddleName15",
                          "#OtherMiddleName16"
                        )
                      }
                      onChange={this.handleOtherMiddleName16}
                    />

                    <input
                      type="text"
                      className="Name-control"
                      maxLength="1"
                      value={this.state.data.OtherMiddleName17}
                      name="OtherMiddleName17"
                      id="OtherMiddleName17"
                      onKeyDown={event =>
                        this.handleBackspaceKey(
                          event,
                          "#OtherMiddleName16",
                          "#OtherMiddleName17"
                        )
                      }
                      onChange={this.handleOtherMiddleName17}
                    />

                    <input
                      type="text"
                      className="Name-control"
                      maxLength="1"
                      value={this.state.data.OtherMiddleName18}
                      name="OtherMiddleName18"
                      id="OtherMiddleName18"
                      onKeyDown={event =>
                        this.handleBackspaceKey(
                          event,
                          "#OtherMiddleName17",
                          "#OtherMiddleName18"
                        )
                      }
                      onChange={this.handleOtherMiddleName18}
                    />

                    <input
                      type="text"
                      className="Name-control"
                      maxLength="1"
                      value={this.state.data.OtherMiddleName19}
                      name="OtherMiddleName19"
                      id="OtherMiddleName19"
                      onKeyDown={event =>
                        this.handleBackspaceKey(
                          event,
                          "#OtherMiddleName18",
                          "#OtherMiddleName19"
                        )
                      }
                      onChange={this.handleOtherMiddleName19}
                    />

                    <input
                      type="text"
                      className="Name-control"
                      maxLength="1"
                      value={this.state.data.OtherMiddleName20}
                      name="OtherMiddleName20"
                      id="OtherMiddleName20"
                      onKeyDown={event =>
                        this.handleBackspaceKey(
                          event,
                          "#OtherMiddleName19",
                          "#OtherMiddleName20"
                        )
                      }
                      onChange={this.handleOtherMiddleName20}
                    />

                    <input
                      type="text"
                      className="Name-control"
                      maxLength="1"
                      value={this.state.data.OtherMiddleName21}
                      name="OtherMiddleName21"
                      id="OtherMiddleName21"
                      onKeyDown={event =>
                        this.handleBackspaceKey(
                          event,
                          "#OtherMiddleName20",
                          "#OtherMiddleName21"
                        )
                      }
                      onChange={this.handleOtherMiddleName21}
                    />

                    <input
                      type="text"
                      className="Name-control"
                      maxLength="1"
                      value={this.state.data.OtherMiddleName22}
                      name="OtherMiddleName22"
                      id="OtherMiddleName22"
                      onKeyDown={event =>
                        this.handleBackspaceKey(
                          event,
                          "#OtherMiddleName21",
                          "#OtherMiddleName22"
                        )
                      }
                      onChange={this.handleOtherMiddleName22}
                    />

                    <input
                      type="text"
                      className="Name-control"
                      maxLength="1"
                      value={this.state.data.OtherMiddleName23}
                      name="OtherMiddleName23"
                      id="OtherMiddleName23"
                      onKeyDown={event =>
                        this.handleBackspaceKey(
                          event,
                          "#OtherMiddleName22",
                          "#OtherMiddleName23"
                        )
                      }
                      onChange={this.handleOtherMiddleName23}
                    />

                    <input
                      type="text"
                      className="Name-control"
                      maxLength="1"
                      value={this.state.data.OtherMiddleName24}
                      name="OtherMiddleName24"
                      id="OtherMiddleName24"
                      onKeyDown={event =>
                        this.handleBackspaceKey(
                          event,
                          "#OtherMiddleName23",
                          "#OtherMiddleName24"
                        )
                      }
                      onChange={this.handleOtherMiddleName24}
                    />

                    <input
                      type="text"
                      className="Name-control"
                      maxLength="1"
                      value={this.state.data.OtherMiddleName25}
                      name="OtherMiddleName25"
                      id="OtherMiddleName25"
                      onKeyDown={event =>
                        this.handleBackspaceKey(
                          event,
                          "#OtherMiddleName24",
                          "#OtherMiddleName25"
                        )
                      }
                      onChange={this.handleOtherMiddleName25}
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
        </div>

        <span className="ErrorMsg">{this.state.errors.OtherName}</span>
        <span className="ErrorMsg">{this.state.errors.NameTitleTwo}</span>
      </div>
    );
  }
}

export default ThirdComponent;
