import React, { Component } from "react";
import "./Form1.css";
import "./Panmain.css";
import $ from "jquery";
import indicator from "./instuction.png";
import officefield from "./officefield.jpeg";
import communicationcheckfield from "./communicationcheckfield.jpeg";

class EigthComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      address: [
        "Name of Office",
        "Flat / Room / Door / Block No.",
        "Name of Premises / Building / Village",
        "Road / Street / Lane / Post Office",
        "Area / Locality / Taluka / Sub-Division",
        "Town / City / District"
      ],

      isModalEnabled: false,
      isIndicatorEnabled: false,
      officeEnabled: false,

      errors: {
        OfficeName: "",
        OfficeFlat: "",
        OfficePremises: "",
        OfficeRoad: "",
        OfficeArea: "",
        OfficeTown: "",
        OfficeState: "",
        OfficePincode: "",
        OfficeCountry: "",
        Communication: "",
        errorid: "1"
      },
      data: {
        Communication: "",
        OfficeName1: "",
        OfficeName2: "",
        OfficeName3: "",
        OfficeName4: "",
        OfficeName5: "",
        OfficeName6: "",
        OfficeName7: "",
        OfficeName8: "",
        OfficeName9: "",
        OfficeName10: "",
        OfficeName11: "",
        OfficeName12: "",
        OfficeName13: "",
        OfficeName14: "",
        OfficeName15: "",
        OfficeName16: "",
        OfficeName17: "",
        OfficeName18: "",
        OfficeName19: "",
        OfficeName20: "",
        OfficeName21: "",
        OfficeName22: "",
        OfficeName23: "",
        OfficeName24: "",
        OfficeName25: "",
        OfficeName: "",
        OfficeFlat1: "",
        OfficeFlat2: "",
        OfficeFlat3: "",
        OfficeFlat4: "",
        OfficeFlat5: "",
        OfficeFlat6: "",
        OfficeFlat7: "",
        OfficeFlat8: "",
        OfficeFlat9: "",
        OfficeFlat10: "",
        OfficeFlat11: "",
        OfficeFlat12: "",
        OfficeFlat13: "",
        OfficeFlat14: "",
        OfficeFlat15: "",
        OfficeFlat16: "",
        OfficeFlat17: "",
        OfficeFlat18: "",
        OfficeFlat19: "",
        OfficeFlat20: "",
        OfficeFlat21: "",
        OfficeFlat22: "",
        OfficeFlat23: "",
        OfficeFlat24: "",
        OfficeFlat25: "",
        OfficeFlat: "",
        OfficePremises1: "",
        OfficePremises2: "",
        OfficePremises3: "",
        OfficePremises4: "",
        OfficePremises5: "",
        OfficePremises6: "",
        OfficePremises7: "",
        OfficePremises8: "",
        OfficePremises9: "",
        OfficePremises10: "",
        OfficePremises11: "",
        OfficePremises12: "",
        OfficePremises13: "",
        OfficePremises14: "",
        OfficePremises15: "",
        OfficePremises16: "",
        OfficePremises17: "",
        OfficePremises18: "",
        OfficePremises19: "",
        OfficePremises20: "",
        OfficePremises21: "",
        OfficePremises22: "",
        OfficePremises23: "",
        OfficePremises24: "",
        OfficePremises25: "",
        OfficePremises: "",
        OfficeRoad1: "",
        OfficeRoad2: "",
        OfficeRoad3: "",
        OfficeRoad4: "",
        OfficeRoad5: "",
        OfficeRoad6: "",
        OfficeRoad7: "",
        OfficeRoad8: "",
        OfficeRoad9: "",
        OfficeRoad10: "",
        OfficeRoad11: "",
        OfficeRoad12: "",
        OfficeRoad13: "",
        OfficeRoad14: "",
        OfficeRoad15: "",
        OfficeRoad16: "",
        OfficeRoad17: "",
        OfficeRoad18: "",
        OfficeRoad19: "",
        OfficeRoad20: "",
        OfficeRoad21: "",
        OfficeRoad22: "",
        OfficeRoad23: "",
        OfficeRoad24: "",
        OfficeRoad25: "",
        OfficeRoad: "",
        OfficeArea1: "",
        OfficeArea2: "",
        OfficeArea3: "",
        OfficeArea4: "",
        OfficeArea5: "",
        OfficeArea6: "",
        OfficeArea7: "",
        OfficeArea8: "",
        OfficeArea9: "",
        OfficeArea10: "",
        OfficeArea11: "",
        OfficeArea12: "",
        OfficeArea13: "",
        OfficeArea14: "",
        OfficeArea15: "",
        OfficeArea16: "",
        OfficeArea17: "",
        OfficeArea18: "",
        OfficeArea19: "",
        OfficeArea20: "",
        OfficeArea21: "",
        OfficeArea22: "",
        OfficeArea23: "",
        OfficeArea24: "",
        OfficeArea25: "",
        OfficeArea: "",
        OfficeTown1: "",
        OfficeTown2: "",
        OfficeTown3: "",
        OfficeTown4: "",
        OfficeTown5: "",
        OfficeTown6: "",
        OfficeTown7: "",
        OfficeTown8: "",
        OfficeTown9: "",
        OfficeTown10: "",
        OfficeTown11: "",
        OfficeTown12: "",
        OfficeTown13: "",
        OfficeTown14: "",
        OfficeTown15: "",
        OfficeTown16: "",
        OfficeTown17: "",
        OfficeTown18: "",
        OfficeTown19: "",
        OfficeTown20: "",
        OfficeTown21: "",
        OfficeTown22: "",
        OfficeTown23: "",
        OfficeTown24: "",
        OfficeTown25: "",
        OfficeTown: "",
        OfficeState: "",
        OfficePincode1: "",
        OfficePincode2: "",
        OfficePincode3: "",
        OfficePincode4: "",
        OfficePincode5: "",
        OfficePincode6: "",
        OfficePincode7: "",
        OfficePincode: "",
        OfficeCountry: "",
        dataid: "1"
      }
    };
  }

  handleCommunicationCheck = (e, name) => {
    for (var i = 16; i <= 17; i++) {
      document.getElementById(i).checked = false;
    }
    document.getElementById(e.target.id).checked = true;

    let errors1 = this.state.errors;
    let name4 = "Communication";
    this.setState(errors1);
    errors1[name4] = "";

    const check = this.state.data;
    check[name] = e.target.id;
    this.setState({ check });

    if (this.state.data.Communication === "17") {
      let val = this.state.officeEnabled;
      val = true;
      this.setState({ val });

      if (
        this.state.data.OfficeName === "" ||
        (isNaN(this.state.data.OfficeName) === false &&
          this.state.data.OfficeName.match(/^[ ]*$/))
      ) {
        let errors1 = this.state.errors;
        let name4 = "OfficeName";
        this.setState(errors1);
        errors1[name4] = "*Please enter your Office's Name";
        this.HighlightOfficeNameError();
        let isModalEnabled = this.state.isModalEnabled;
        isModalEnabled = false;
        this.setState({ isModalEnabled });
      }

      if (
        this.state.data.OfficeFlat === "" ||
        (isNaN(this.state.data.OfficeFlat) === false &&
          this.state.data.OfficeFlat.match(/^[ ]*$/))
      ) {
        let errors1 = this.state.errors;
        let name4 = "OfficeFlat";
        this.setState(errors1);
        errors1[name4] =
          "*Please enter your Office Flat / Room / Door / Block No.";
        this.HighlightOfficeFlatError();
        let isModalEnabled = this.state.isModalEnabled;
        isModalEnabled = false;
        this.setState({ isModalEnabled });
      }

      if (
        this.state.data.OfficePremises === "" ||
        (isNaN(this.state.data.OfficePremises) === false &&
          this.state.data.OfficePremises.match(/^[ ]*$/))
      ) {
        let errors1 = this.state.errors;
        let name4 = "OfficePremises";
        this.setState(errors1);
        errors1[name4] =
          "*Please enter your Office Premises / Building / Village";
        this.HighlightOfficePremisesError();

        let isModalEnabled = this.state.isModalEnabled;
        isModalEnabled = false;
        this.setState({ isModalEnabled });
      }

      if (
        this.state.data.OfficeRoad === "" ||
        (isNaN(this.state.data.OfficeRoad) === false &&
          this.state.data.OfficeRoad.match(/^[ ]*$/))
      ) {
        let errors1 = this.state.errors;
        let name4 = "OfficeRoad";
        this.setState(errors1);
        errors1[name4] =
          "*Please enter your Office Road / Street / Lane / Post Office";
        this.HighlightOfficeRoadError();

        let isModalEnabled = this.state.isModalEnabled;
        isModalEnabled = false;
        this.setState({ isModalEnabled });
      }

      if (
        this.state.data.OfficeArea === "" ||
        isNaN(this.state.data.OfficeArea) === false
      ) {
        let errors1 = this.state.errors;
        let name4 = "OfficeArea";
        this.setState(errors1);
        errors1[name4] =
          "*Please enter your Office Area / Locality / Taluka / Sub-division";
        this.HighlightOfficeAreaError();

        let isModalEnabled = this.state.isModalEnabled;
        isModalEnabled = false;
        this.setState({ isModalEnabled });
      }

      if (
        this.state.data.OfficeTown === "" ||
        isNaN(this.state.data.OfficeTown) === false
      ) {
        let errors1 = this.state.errors;
        let name4 = "OfficeTown";
        this.setState(errors1);
        errors1[name4] = "*Please enter your Office Town / City / District";
        this.HighlightOfficeTownError();

        let isModalEnabled = this.state.isModalEnabled;
        isModalEnabled = false;
        this.setState({ isModalEnabled });
      }

      if (
        this.state.data.OfficeState === "" ||
        isNaN(this.state.data.OfficeState) === false
      ) {
        let errors1 = this.state.errors;
        let name4 = "OfficeState";
        this.setState(errors1);
        errors1[name4] = "*Please enter your Office State";
        $("#OfficeState").css("border-color", "red");
        let val = this.state.isModalEnabled;
        val = false;
        this.setState({ val });
      }

      if (
        this.state.data.OfficePincode === "" ||
        this.state.data.OfficePincode.match(/^[ ]*$/)
      ) {
        let errors1 = this.state.errors;
        let name4 = "OfficePincode";
        this.setState(errors1);
        errors1[name4] = "*Please enter your Office Pincode";
        this.HighlightOfficePincodeError();

        let isModalEnabled = this.state.isModalEnabled;
        isModalEnabled = false;
        this.setState({ isModalEnabled });
      }

      if (
        this.state.data.OfficeCountry === "" ||
        isNaN(this.state.data.OfficeCountry) === false
      ) {
        let errors1 = this.state.errors;
        let name4 = "OfficeCountry";
        this.setState(errors1);
        errors1[name4] = "*Please enter your OfficeCountry";
        $("#OfficeCountry").css("border-color", "red");
        let isModalEnabled = this.state.isModalEnabled;
        isModalEnabled = false;
        this.setState({ isModalEnabled });
      }
    } else {
      let officeEnabled = this.state.officeEnabled;
      officeEnabled = false;
      this.setState({ officeEnabled });

      if (this.state.errors.OfficeName === "*Please enter your Office's Name") {
        let errors1 = this.state.errors;
        let name4 = "OfficeName";
        this.setState(errors1);
        errors1[name4] = "";
        this.ResetOfficeNameError();
      }

      if (
        this.state.errors.OfficeFlat ===
        "*Please enter your Office Flat / Room / Door / Block No."
      ) {
        let errors1 = this.state.errors;
        let name4 = "OfficeFlat";
        this.setState(errors1);
        errors1[name4] = "";
        this.ResetOfficeFlatError();
      }

      if (
        this.state.errors.OfficePremises ===
        "*Please enter your Office Premises / Building / Village"
      ) {
        let errors1 = this.state.errors;
        let name4 = "OfficePremises";
        this.setState(errors1);
        errors1[name4] = "";
        this.ResetOfficePremisesError();
      }

      if (
        this.state.errors.OfficeRoad ===
        "*Please enter your Office Road / Street / Lane / Post Office"
      ) {
        let errors1 = this.state.errors;
        let name4 = "OfficeRoad";
        this.setState(errors1);
        errors1[name4] = "";
        this.ResetOfficeRoadError();
      }

      if (
        this.state.errors.OfficeArea ===
        "*Please enter your Office Area / Locality / Taluka / Sub-division"
      ) {
        let errors1 = this.state.errors;
        let name4 = "OfficeArea";
        this.setState(errors1);
        errors1[name4] = "";
        this.ResetOfficeAreaError();
      }

      if (
        this.state.errors.OfficeTown ===
        "*Please enter your Office Town / City / District"
      ) {
        let errors1 = this.state.errors;
        let name4 = "OfficeTown";
        this.setState(errors1);
        errors1[name4] = "";
        this.ResetOfficeTownError();
      }

      if (this.state.errors.OfficeState === "*Please enter your Office State") {
        let errors1 = this.state.errors;
        let name4 = "OfficeState";
        this.setState(errors1);
        errors1[name4] = "";
        $("#OfficeState").css("border-color", "");
      }

      if (
        this.state.errors.OfficePincode === "*Please enter your Office Pincode"
      ) {
        let errors1 = this.state.errors;
        let name4 = "OfficePincode";
        this.setState(errors1);
        errors1[name4] = "";
        this.ResetOfficePincodeError();
      }

      if (
        this.state.errors.OfficeCountry === "*Please enter your OfficeCountry"
      ) {
        let errors1 = this.state.errors;
        let name4 = "OfficeCountry";
        this.setState(errors1);
        errors1[name4] = "";
        $("#OfficeCountry").css("border-color", "");
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

  handleOfficeName1 = event => {
    this.handleInput(event);
    this.validateOfficeName(event);
    event.target.value === ""
      ? $("#OfficeName1").focus()
      : $("#OfficeName2").focus();
  };

  handleOfficeName2 = event => {
    this.handleInput(event);
    this.validateOfficeName(event);
    event.target.value === ""
      ? $("#OfficeName2").focus()
      : $("#OfficeName3").focus();
  };

  handleOfficeName3 = event => {
    this.handleInput(event);
    this.validateOfficeName(event);
    event.target.value === ""
      ? $("#OfficeName3").focus()
      : $("#OfficeName4").focus();
  };

  handleOfficeName4 = event => {
    this.handleInput(event);
    this.validateOfficeName(event);
    event.target.value === ""
      ? $("#OfficeName4").focus()
      : $("#OfficeName5").focus();
  };

  handleOfficeName5 = event => {
    this.handleInput(event);
    this.validateOfficeName(event);
    event.target.value === ""
      ? $("#OfficeName5").focus()
      : $("#OfficeName6").focus();
  };

  handleOfficeName6 = event => {
    this.handleInput(event);
    this.validateOfficeName(event);
    event.target.value === ""
      ? $("#OfficeName6").focus()
      : $("#OfficeName7").focus();
  };

  handleOfficeName7 = event => {
    this.handleInput(event);
    this.validateOfficeName(event);
    event.target.value === ""
      ? $("#OfficeName7").focus()
      : $("#OfficeName8").focus();
  };

  handleOfficeName8 = event => {
    this.handleInput(event);
    this.validateOfficeName(event);
    event.target.value === ""
      ? $("#OfficeName8").focus()
      : $("#OfficeName9").focus();
  };

  handleOfficeName9 = event => {
    this.handleInput(event);
    this.validateOfficeName(event);
    event.target.value === ""
      ? $("#OfficeName9").focus()
      : $("#OfficeName10").focus();
  };

  handleOfficeName10 = event => {
    this.handleInput(event);
    this.validateOfficeName(event);
    event.target.value === ""
      ? $("#OfficeName10").focus()
      : $("#OfficeName11").focus();
  };

  handleOfficeName11 = event => {
    this.handleInput(event);
    this.validateOfficeName(event);
    event.target.value === ""
      ? $("#OfficeName11").focus()
      : $("#OfficeName12").focus();
  };

  handleOfficeName12 = event => {
    this.handleInput(event);
    this.validateOfficeName(event);
    event.target.value === ""
      ? $("#OfficeName12").focus()
      : $("#OfficeName13").focus();
  };

  handleOfficeName13 = event => {
    this.handleInput(event);
    this.validateOfficeName(event);
    event.target.value === ""
      ? $("#OfficeName13").focus()
      : $("#OfficeName14").focus();
  };

  handleOfficeName14 = event => {
    this.handleInput(event);
    this.validateOfficeName(event);
    event.target.value === ""
      ? $("#OfficeName14").focus()
      : $("#OfficeName15").focus();
  };

  handleOfficeName15 = event => {
    this.handleInput(event);
    this.validateOfficeName(event);
    event.target.value === ""
      ? $("#OfficeName15").focus()
      : $("#OfficeName16").focus();
  };

  handleOfficeName16 = event => {
    this.handleInput(event);
    this.validateOfficeName(event);
    event.target.value === ""
      ? $("#OfficeName16").focus()
      : $("#OfficeName17").focus();
  };

  handleOfficeName17 = event => {
    this.handleInput(event);
    this.validateOfficeName(event);
    event.target.value === ""
      ? $("#OfficeName17").focus()
      : $("#OfficeName18").focus();
  };

  handleOfficeName18 = event => {
    this.handleInput(event);
    this.validateOfficeName(event);
    event.target.value === ""
      ? $("#OfficeName18").focus()
      : $("#OfficeName19").focus();
  };

  handleOfficeName19 = event => {
    this.handleInput(event);
    this.validateOfficeName(event);
    event.target.value === ""
      ? $("#OfficeName19").focus()
      : $("#OfficeName20").focus();
  };

  handleOfficeName20 = event => {
    this.handleInput(event);
    this.validateOfficeName(event);
    event.target.value === ""
      ? $("#OfficeName20").focus()
      : $("#OfficeName21").focus();
  };

  handleOfficeName21 = event => {
    this.handleInput(event);
    this.validateOfficeName(event);
    event.target.value === ""
      ? $("#OfficeName21").focus()
      : $("#OfficeName22").focus();
  };

  handleOfficeName22 = event => {
    this.handleInput(event);
    this.validateOfficeName(event);
    event.target.value === ""
      ? $("#OfficeName22").focus()
      : $("#OfficeName23").focus();
  };

  handleOfficeName23 = event => {
    this.handleInput(event);
    this.validateOfficeName(event);
    event.target.value === ""
      ? $("#OfficeName23").focus()
      : $("#OfficeName24").focus();
  };

  handleOfficeName24 = event => {
    this.handleInput(event);
    this.validateOfficeName(event);
    event.target.value === ""
      ? $("#OfficeName24").focus()
      : $("#OfficeName25").focus();
  };

  handleOfficeName25 = event => {
    this.handleInput(event);
    this.validateOfficeName(event);
    event.target.value === ""
      ? $("#OfficeName25").focus()
      : $("#OfficeName25").focus();
  };

  ResetOfficeNameError = () => {
    $("#OfficeName1").css({
      "border-top-color": "",
      "border-bottom-color": "",
      "border-left-color": ""
    });
    $("#OfficeName2").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#OfficeName3").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#OfficeName4").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#OfficeName5").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#OfficeName6").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#OfficeName7").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#OfficeName8").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#OfficeName9").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#OfficeName10").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#OfficeName11").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#OfficeName12").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#OfficeName13").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#OfficeName14").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#OfficeName15").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#OfficeName16").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#OfficeName17").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#OfficeName18").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#OfficeName19").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#OfficeName20").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#OfficeName21").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#OfficeName22").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#OfficeName23").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#OfficeName24").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#OfficeName25").css({
      "border-top-color": "",
      "border-bottom-color": "",
      "border-right-color": ""
    });
  };

  HighlightOfficeNameError = () => {
    $("#OfficeName1").css({
      "border-top-color": "red",
      "border-bottom-color": "red",
      "border-left-color": "red"
    });
    $("#OfficeName2").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#OfficeName3").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#OfficeName4").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#OfficeName5").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#OfficeName6").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#OfficeName7").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#OfficeName8").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#OfficeName9").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#OfficeName10").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#OfficeName11").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#OfficeName12").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#OfficeName13").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#OfficeName14").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#OfficeName15").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#OfficeName16").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#OfficeName17").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#OfficeName18").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#OfficeName19").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#OfficeName20").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#OfficeName21").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#OfficeName22").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#OfficeName23").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#OfficeName24").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#OfficeName25").css({
      "border-top-color": "red",
      "border-bottom-color": "red",
      "border-right-color": "red"
    });
  };

  handleOfficeFlat1 = event => {
    this.handleInput(event);
    this.validateOfficeFlat(event);
    this.state.data.OfficeFlat1 === ""
      ? $("#OfficeFlat1").focus()
      : $("#OfficeFlat2").focus();
  };

  handleOfficeFlat2 = event => {
    this.handleInput(event);
    this.validateOfficeFlat(event);
    this.state.data.OfficeFlat2 === ""
      ? $("#OfficeFlat2").focus()
      : $("#OfficeFlat3").focus();
  };

  handleOfficeFlat3 = event => {
    this.handleInput(event);
    this.validateOfficeFlat(event);
    this.state.data.OfficeFlat3 === ""
      ? $("#OfficeFlat3").focus()
      : $("#OfficeFlat4").focus();
  };

  handleOfficeFlat4 = event => {
    this.handleInput(event);
    this.validateOfficeFlat(event);
    event.target.value === ""
      ? $("#OfficeFlat4").focus()
      : $("#OfficeFlat5").focus();
  };

  handleOfficeFlat5 = event => {
    this.handleInput(event);
    this.validateOfficeFlat(event);
    event.target.value === ""
      ? $("#OfficeFlat5").focus()
      : $("#OfficeFlat6").focus();
  };

  handleOfficeFlat6 = event => {
    this.handleInput(event);
    this.validateOfficeFlat(event);
    event.target.value === ""
      ? $("#OfficeFlat6").focus()
      : $("#OfficeFlat7").focus();
  };

  handleOfficeFlat7 = event => {
    this.handleInput(event);
    this.validateOfficeFlat(event);
    event.target.value === ""
      ? $("#OfficeFlat7").focus()
      : $("#OfficeFlat8").focus();
  };

  handleOfficeFlat8 = event => {
    this.handleInput(event);
    this.validateOfficeFlat(event);
    event.target.value === ""
      ? $("#OfficeFlat8").focus()
      : $("#OfficeFlat9").focus();
  };

  handleOfficeFlat9 = event => {
    this.handleInput(event);
    this.validateOfficeFlat(event);
    event.target.value === ""
      ? $("#OfficeFlat9").focus()
      : $("#OfficeFlat10").focus();
  };

  handleOfficeFlat10 = event => {
    this.handleInput(event);
    this.validateOfficeFlat(event);
    event.target.value === ""
      ? $("#OfficeFlat10").focus()
      : $("#OfficeFlat11").focus();
  };

  handleOfficeFlat11 = event => {
    this.handleInput(event);
    this.validateOfficeFlat(event);
    event.target.value === ""
      ? $("#OfficeFlat11").focus()
      : $("#OfficeFlat12").focus();
  };

  handleOfficeFlat12 = event => {
    this.handleInput(event);
    this.validateOfficeFlat(event);
    event.target.value === ""
      ? $("#OfficeFlat12").focus()
      : $("#OfficeFlat13").focus();
  };

  handleOfficeFlat13 = event => {
    this.handleInput(event);
    this.validateOfficeFlat(event);
    event.target.value === ""
      ? $("#OfficeFlat13").focus()
      : $("#OfficeFlat14").focus();
  };

  handleOfficeFlat14 = event => {
    this.handleInput(event);
    this.validateOfficeFlat(event);
    event.target.value === ""
      ? $("#OfficeFlat14").focus()
      : $("#OfficeFlat15").focus();
  };

  handleOfficeFlat15 = event => {
    this.handleInput(event);
    this.validateOfficeFlat(event);
    event.target.value === ""
      ? $("#OfficeFlat15").focus()
      : $("#OfficeFlat16").focus();
  };

  handleOfficeFlat16 = event => {
    this.handleInput(event);
    this.validateOfficeFlat(event);
    event.target.value === ""
      ? $("#OfficeFlat16").focus()
      : $("#OfficeFlat17").focus();
  };

  handleOfficeFlat17 = event => {
    this.handleInput(event);
    this.validateOfficeFlat(event);
    event.target.value === ""
      ? $("#OfficeFlat17").focus()
      : $("#OfficeFlat18").focus();
  };

  handleOfficeFlat18 = event => {
    this.handleInput(event);
    this.validateOfficeFlat(event);
    event.target.value === ""
      ? $("#OfficeFlat18").focus()
      : $("#OfficeFlat19").focus();
  };

  handleOfficeFlat19 = event => {
    this.handleInput(event);
    this.validateOfficeFlat(event);
    event.target.value === ""
      ? $("#OfficeFlat19").focus()
      : $("#OfficeFlat20").focus();
  };

  handleOfficeFlat20 = event => {
    this.handleInput(event);
    this.validateOfficeFlat(event);
    event.target.value === ""
      ? $("#OfficeFlat20").focus()
      : $("#OfficeFlat21").focus();
  };

  handleOfficeFlat21 = event => {
    this.handleInput(event);
    this.validateOfficeFlat(event);
    event.target.value === ""
      ? $("#OfficeFlat21").focus()
      : $("#OfficeFlat22").focus();
  };

  handleOfficeFlat22 = event => {
    this.handleInput(event);
    this.validateOfficeFlat(event);
    event.target.value === ""
      ? $("#OfficeFlat22").focus()
      : $("#OfficeFlat23").focus();
  };

  handleOfficeFlat23 = event => {
    this.handleInput(event);
    this.validateOfficeFlat(event);
    event.target.value === ""
      ? $("#OfficeFlat23").focus()
      : $("#OfficeFlat24").focus();
  };

  handleOfficeFlat24 = event => {
    this.handleInput(event);
    this.validateOfficeFlat(event);
    event.target.value === ""
      ? $("#OfficeFlat24").focus()
      : $("#OfficeFlat25").focus();
  };

  handleOfficeFlat25 = event => {
    this.handleInput(event);
    this.validateOfficeFlat(event);
    event.target.value === ""
      ? $("#OfficeFlat25").focus()
      : $("#OfficeFlat25").focus();
  };

  ResetOfficeFlatError = () => {
    $("#OfficeFlat1").css({
      "border-top-color": "",
      "border-bottom-color": "",
      "border-left-color": ""
    });
    $("#OfficeFlat2").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#OfficeFlat3").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#OfficeFlat4").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#OfficeFlat5").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#OfficeFlat6").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#OfficeFlat7").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#OfficeFlat8").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#OfficeFlat9").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#OfficeFlat10").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#OfficeFlat11").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#OfficeFlat12").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#OfficeFlat13").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#OfficeFlat14").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#OfficeFlat15").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#OfficeFlat16").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#OfficeFlat17").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#OfficeFlat18").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#OfficeFlat19").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#OfficeFlat20").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#OfficeFlat21").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#OfficeFlat22").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#OfficeFlat23").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#OfficeFlat24").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#OfficeFlat25").css({
      "border-top-color": "",
      "border-bottom-color": "",
      "border-right-color": ""
    });
  };

  HighlightOfficeFlatError = () => {
    $("#OfficeFlat1").css({
      "border-top-color": "red",
      "border-bottom-color": "red",
      "border-left-color": "red"
    });
    $("#OfficeFlat2").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#OfficeFlat3").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#OfficeFlat4").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#OfficeFlat5").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#OfficeFlat6").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#OfficeFlat7").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#OfficeFlat8").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#OfficeFlat9").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#OfficeFlat10").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#OfficeFlat11").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#OfficeFlat12").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#OfficeFlat13").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#OfficeFlat14").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#OfficeFlat15").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#OfficeFlat16").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#OfficeFlat17").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#OfficeFlat18").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#OfficeFlat19").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#OfficeFlat20").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#OfficeFlat21").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#OfficeFlat22").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#OfficeFlat23").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#OfficeFlat24").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#OfficeFlat25").css({
      "border-top-color": "red",
      "border-bottom-color": "red",
      "border-right-color": "red"
    });
  };

  handleOfficePremises1 = event => {
    this.handleInput(event);
    this.validateOfficePremises(event);
    event.target.value === ""
      ? $("#OfficePremises1").focus()
      : $("#OfficePremises2").focus();
  };

  handleOfficePremises2 = event => {
    this.handleInput(event);
    this.validateOfficePremises(event);
    event.target.value === ""
      ? $("#OfficePremises2").focus()
      : $("#OfficePremises3").focus();
  };

  handleOfficePremises3 = event => {
    this.handleInput(event);
    this.validateOfficePremises(event);
    event.target.value === ""
      ? $("#OfficePremises3").focus()
      : $("#OfficePremises4").focus();
  };

  handleOfficePremises4 = event => {
    this.handleInput(event);
    this.validateOfficePremises(event);
    event.target.value === ""
      ? $("#OfficePremises4").focus()
      : $("#OfficePremises5").focus();
  };

  handleOfficePremises5 = event => {
    this.handleInput(event);
    this.validateOfficePremises(event);
    event.target.value === ""
      ? $("#OfficePremises5").focus()
      : $("#OfficePremises6").focus();
  };

  handleOfficePremises6 = event => {
    this.handleInput(event);
    this.validateOfficePremises(event);
    event.target.value === ""
      ? $("#OfficePremises6").focus()
      : $("#OfficePremises7").focus();
  };

  handleOfficePremises7 = event => {
    this.handleInput(event);
    this.validateOfficePremises(event);
    event.target.value === ""
      ? $("#OfficePremises7").focus()
      : $("#OfficePremises8").focus();
  };

  handleOfficePremises8 = event => {
    this.handleInput(event);
    this.validateOfficePremises(event);
    event.target.value === ""
      ? $("#OfficePremises8").focus()
      : $("#OfficePremises9").focus();
  };

  handleOfficePremises9 = event => {
    this.handleInput(event);
    this.validateOfficePremises(event);
    event.target.value === ""
      ? $("#OfficePremises9").focus()
      : $("#OfficePremises10").focus();
  };

  handleOfficePremises10 = event => {
    this.handleInput(event);
    this.validateOfficePremises(event);
    event.target.value === ""
      ? $("#OfficePremises10").focus()
      : $("#OfficePremises11").focus();
  };

  handleOfficePremises11 = event => {
    this.handleInput(event);
    this.validateOfficePremises(event);
    event.target.value === ""
      ? $("#OfficePremises11").focus()
      : $("#OfficePremises12").focus();
  };

  handleOfficePremises12 = event => {
    this.handleInput(event);
    this.validateOfficePremises(event);
    event.target.value === ""
      ? $("#OfficePremises12").focus()
      : $("#OfficePremises13").focus();
  };

  handleOfficePremises13 = event => {
    this.handleInput(event);
    this.validateOfficePremises(event);
    event.target.value === ""
      ? $("#OfficePremises13").focus()
      : $("#OfficePremises14").focus();
  };

  handleOfficePremises14 = event => {
    this.handleInput(event);
    this.validateOfficePremises(event);
    event.target.value === ""
      ? $("#OfficePremises14").focus()
      : $("#OfficePremises15").focus();
  };

  handleOfficePremises15 = event => {
    this.handleInput(event);
    this.validateOfficePremises(event);
    event.target.value === ""
      ? $("#OfficePremises15").focus()
      : $("#OfficePremises16").focus();
  };

  handleOfficePremises16 = event => {
    this.handleInput(event);
    this.validateOfficePremises(event);
    event.target.value === ""
      ? $("#OfficePremises16").focus()
      : $("#OfficePremises17").focus();
  };

  handleOfficePremises17 = event => {
    this.handleInput(event);
    this.validateOfficePremises(event);
    event.target.value === ""
      ? $("#OfficePremises17").focus()
      : $("#OfficePremises18").focus();
  };

  handleOfficePremises18 = event => {
    this.handleInput(event);
    this.validateOfficePremises(event);
    event.target.value === ""
      ? $("#OfficePremises18").focus()
      : $("#OfficePremises19").focus();
  };

  handleOfficePremises19 = event => {
    this.handleInput(event);
    this.validateOfficePremises(event);
    event.target.value === ""
      ? $("#OfficePremises19").focus()
      : $("#OfficePremises20").focus();
  };

  handleOfficePremises20 = event => {
    this.handleInput(event);
    this.validateOfficePremises(event);
    event.target.value === ""
      ? $("#OfficePremises20").focus()
      : $("#OfficePremises21").focus();
  };

  handleOfficePremises21 = event => {
    this.handleInput(event);
    this.validateOfficePremises(event);
    event.target.value === ""
      ? $("#OfficePremises21").focus()
      : $("#OfficePremises22").focus();
  };

  handleOfficePremises22 = event => {
    this.handleInput(event);
    this.validateOfficePremises(event);
    event.target.value === ""
      ? $("#OfficePremises22").focus()
      : $("#OfficePremises23").focus();
  };

  handleOfficePremises23 = event => {
    this.handleInput(event);
    this.validateOfficePremises(event);
    event.target.value === ""
      ? $("#OfficePremises23").focus()
      : $("#OfficePremises24").focus();
  };

  handleOfficePremises24 = event => {
    this.handleInput(event);
    this.validateOfficePremises(event);
    event.target.value === ""
      ? $("#OfficePremises24").focus()
      : $("#OfficePremises25").focus();
  };

  handleOfficePremises25 = event => {
    this.handleInput(event);
    this.validateOfficePremises(event);
    event.target.value === ""
      ? $("#OfficePremises25").focus()
      : $("#OfficePremises25").focus();
  };

  ResetOfficePremisesError = () => {
    $("#OfficePremises1").css({
      "border-top-color": "",
      "border-bottom-color": "",
      "border-left-color": ""
    });
    $("#OfficePremises2").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#OfficePremises3").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#OfficePremises4").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#OfficePremises5").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#OfficePremises6").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#OfficePremises7").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#OfficePremises8").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#OfficePremises9").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#OfficePremises10").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#OfficePremises11").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#OfficePremises12").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#OfficePremises13").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#OfficePremises14").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#OfficePremises15").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#OfficePremises16").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#OfficePremises17").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#OfficePremises18").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#OfficePremises19").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#OfficePremises20").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#OfficePremises21").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#OfficePremises22").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#OfficePremises23").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#OfficePremises24").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#OfficePremises25").css({
      "border-top-color": "",
      "border-bottom-color": "",
      "border-right-color": ""
    });
  };

  HighlightOfficePremisesError = () => {
    $("#OfficePremises1").css({
      "border-top-color": "red",
      "border-bottom-color": "red",
      "border-left-color": "red"
    });
    $("#OfficePremises2").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#OfficePremises3").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#OfficePremises4").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#OfficePremises5").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#OfficePremises6").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#OfficePremises7").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#OfficePremises8").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#OfficePremises9").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#OfficePremises10").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#OfficePremises11").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#OfficePremises12").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#OfficePremises13").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#OfficePremises14").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#OfficePremises15").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#OfficePremises16").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#OfficePremises17").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#OfficePremises18").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#OfficePremises19").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#OfficePremises20").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#OfficePremises21").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#OfficePremises22").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#OfficePremises23").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#OfficePremises24").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#OfficePremises25").css({
      "border-top-color": "red",
      "border-bottom-color": "red",
      "border-right-color": "red"
    });
  };

  handleOfficeRoad1 = event => {
    this.handleInput(event);
    this.validateOfficeRoad(event);
    event.target.value === ""
      ? $("#OfficeRoad1").focus()
      : $("#OfficeRoad2").focus();
  };

  handleOfficeRoad2 = event => {
    this.handleInput(event);
    this.validateOfficeRoad(event);
    event.target.value === ""
      ? $("#OfficeRoad2").focus()
      : $("#OfficeRoad3").focus();
  };

  handleOfficeRoad3 = event => {
    this.handleInput(event);
    this.validateOfficeRoad(event);
    event.target.value === ""
      ? $("#OfficeRoad3").focus()
      : $("#OfficeRoad4").focus();
  };

  handleOfficeRoad4 = event => {
    this.handleInput(event);
    this.validateOfficeRoad(event);
    event.target.value === ""
      ? $("#OfficeRoad4").focus()
      : $("#OfficeRoad5").focus();
  };

  handleOfficeRoad5 = event => {
    this.handleInput(event);
    this.validateOfficeRoad(event);
    event.target.value === ""
      ? $("#OfficeRoad5").focus()
      : $("#OfficeRoad6").focus();
  };

  handleOfficeRoad6 = event => {
    this.handleInput(event);
    this.validateOfficeRoad(event);
    event.target.value === ""
      ? $("#OfficeRoad6").focus()
      : $("#OfficeRoad7").focus();
  };

  handleOfficeRoad7 = event => {
    this.handleInput(event);
    this.validateOfficeRoad(event);
    event.target.value === ""
      ? $("#OfficeRoad7").focus()
      : $("#OfficeRoad8").focus();
  };

  handleOfficeRoad8 = event => {
    this.handleInput(event);
    this.validateOfficeRoad(event);
    event.target.value === ""
      ? $("#OfficeRoad8").focus()
      : $("#OfficeRoad9").focus();
  };

  handleOfficeRoad9 = event => {
    this.handleInput(event);
    this.validateOfficeRoad(event);
    event.target.value === ""
      ? $("#OfficeRoad9").focus()
      : $("#OfficeRoad10").focus();
  };

  handleOfficeRoad10 = event => {
    this.handleInput(event);
    this.validateOfficeRoad(event);
    event.target.value === ""
      ? $("#OfficeRoad10").focus()
      : $("#OfficeRoad11").focus();
  };

  handleOfficeRoad11 = event => {
    this.handleInput(event);
    this.validateOfficeRoad(event);
    event.target.value === ""
      ? $("#OfficeRoad11").focus()
      : $("#OfficeRoad12").focus();
  };

  handleOfficeRoad12 = event => {
    this.handleInput(event);
    this.validateOfficeRoad(event);
    event.target.value === ""
      ? $("#OfficeRoad12").focus()
      : $("#OfficeRoad13").focus();
  };

  handleOfficeRoad13 = event => {
    this.handleInput(event);
    this.validateOfficeRoad(event);
    event.target.value === ""
      ? $("#OfficeRoad13").focus()
      : $("#OfficeRoad14").focus();
  };

  handleOfficeRoad14 = event => {
    this.handleInput(event);
    this.validateOfficeRoad(event);
    event.target.value === ""
      ? $("#OfficeRoad14").focus()
      : $("#OfficeRoad15").focus();
  };

  handleOfficeRoad15 = event => {
    this.handleInput(event);
    this.validateOfficeRoad(event);
    event.target.value === ""
      ? $("#OfficeRoad15").focus()
      : $("#OfficeRoad16").focus();
  };

  handleOfficeRoad16 = event => {
    this.handleInput(event);
    this.validateOfficeRoad(event);
    event.target.value === ""
      ? $("#OfficeRoad16").focus()
      : $("#OfficeRoad17").focus();
  };

  handleOfficeRoad17 = event => {
    this.handleInput(event);
    this.validateOfficeRoad(event);
    event.target.value === ""
      ? $("#OfficeRoad17").focus()
      : $("#OfficeRoad18").focus();
  };

  handleOfficeRoad18 = event => {
    this.handleInput(event);
    this.validateOfficeRoad(event);
    event.target.value === ""
      ? $("#OfficeRoad18").focus()
      : $("#OfficeRoad19").focus();
  };

  handleOfficeRoad19 = event => {
    this.handleInput(event);
    this.validateOfficeRoad(event);
    event.target.value === ""
      ? $("#OfficeRoad19").focus()
      : $("#OfficeRoad20").focus();
  };

  handleOfficeRoad20 = event => {
    this.handleInput(event);
    this.validateOfficeRoad(event);
    event.target.value === ""
      ? $("#OfficeRoad20").focus()
      : $("#OfficeRoad21").focus();
  };

  handleOfficeRoad21 = event => {
    this.handleInput(event);
    this.validateOfficeRoad(event);
    event.target.value === ""
      ? $("#OfficeRoad21").focus()
      : $("#OfficeRoad22").focus();
  };

  handleOfficeRoad22 = event => {
    this.handleInput(event);
    this.validateOfficeRoad(event);
    event.target.value === ""
      ? $("#OfficeRoad22").focus()
      : $("#OfficeRoad23").focus();
  };

  handleOfficeRoad23 = event => {
    this.handleInput(event);
    this.validateOfficeRoad(event);
    event.target.value === ""
      ? $("#OfficeRoad23").focus()
      : $("#OfficeRoad24").focus();
  };

  handleOfficeRoad24 = event => {
    this.handleInput(event);
    this.validateOfficeRoad(event);
    event.target.value === ""
      ? $("#OfficeRoad24").focus()
      : $("#OfficeRoad25").focus();
  };

  handleOfficeRoad25 = event => {
    this.handleInput(event);
    this.validateOfficeRoad(event);
    event.target.value === ""
      ? $("#OfficeRoad25").focus()
      : $("#OfficeRoad25").focus();
  };

  ResetOfficeRoadError = () => {
    $("#OfficeRoad1").css({
      "border-top-color": "",
      "border-bottom-color": "",
      "border-left-color": ""
    });
    $("#OfficeRoad2").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#OfficeRoad3").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#OfficeRoad4").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#OfficeRoad5").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#OfficeRoad6").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#OfficeRoad7").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#OfficeRoad8").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#OfficeRoad9").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#OfficeRoad10").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#OfficeRoad11").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#OfficeRoad12").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#OfficeRoad13").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#OfficeRoad14").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#OfficeRoad15").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#OfficeRoad16").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#OfficeRoad17").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#OfficeRoad18").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#OfficeRoad19").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#OfficeRoad20").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#OfficeRoad21").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#OfficeRoad22").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#OfficeRoad23").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#OfficeRoad24").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#OfficeRoad25").css({
      "border-top-color": "",
      "border-bottom-color": "",
      "border-right-color": ""
    });
  };

  HighlightOfficeRoadError = () => {
    $("#OfficeRoad1").css({
      "border-top-color": "red",
      "border-bottom-color": "red",
      "border-left-color": "red"
    });
    $("#OfficeRoad2").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#OfficeRoad3").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#OfficeRoad4").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#OfficeRoad5").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#OfficeRoad6").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#OfficeRoad7").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#OfficeRoad8").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#OfficeRoad9").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#OfficeRoad10").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#OfficeRoad11").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#OfficeRoad12").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#OfficeRoad13").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#OfficeRoad14").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#OfficeRoad15").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#OfficeRoad16").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#OfficeRoad17").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#OfficeRoad18").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#OfficeRoad19").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#OfficeRoad20").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#OfficeRoad21").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#OfficeRoad22").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#OfficeRoad23").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#OfficeRoad24").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#OfficeRoad25").css({
      "border-top-color": "red",
      "border-bottom-color": "red",
      "border-right-color": "red"
    });
  };

  handleOfficeArea1 = event => {
    this.handleInput(event);
    this.validateOfficeArea(event);
    event.target.value === ""
      ? $("#OfficeArea1").focus()
      : $("#OfficeArea2").focus();
  };

  handleOfficeArea2 = event => {
    this.handleInput(event);
    this.validateOfficeArea(event);
    event.target.value === ""
      ? $("#OfficeArea2").focus()
      : $("#OfficeArea3").focus();
  };

  handleOfficeArea3 = event => {
    this.handleInput(event);
    this.validateOfficeArea(event);
    event.target.value === ""
      ? $("#OfficeArea3").focus()
      : $("#OfficeArea4").focus();
  };

  handleOfficeArea4 = event => {
    this.handleInput(event);
    this.validateOfficeArea(event);
    event.target.value === ""
      ? $("#OfficeArea4").focus()
      : $("#OfficeArea5").focus();
  };

  handleOfficeArea5 = event => {
    this.handleInput(event);
    this.validateOfficeArea(event);
    event.target.value === ""
      ? $("#OfficeArea5").focus()
      : $("#OfficeArea6").focus();
  };

  handleOfficeArea6 = event => {
    this.handleInput(event);
    this.validateOfficeArea(event);
    event.target.value === ""
      ? $("#OfficeArea6").focus()
      : $("#OfficeArea7").focus();
  };

  handleOfficeArea7 = event => {
    this.handleInput(event);
    this.validateOfficeArea(event);
    event.target.value === ""
      ? $("#OfficeArea7").focus()
      : $("#OfficeArea8").focus();
  };

  handleOfficeArea8 = event => {
    this.handleInput(event);
    this.validateOfficeArea(event);
    event.target.value === ""
      ? $("#OfficeArea8").focus()
      : $("#OfficeArea9").focus();
  };

  handleOfficeArea9 = event => {
    this.handleInput(event);
    this.validateOfficeArea(event);
    event.target.value === ""
      ? $("#OfficeArea9").focus()
      : $("#OfficeArea10").focus();
  };

  handleOfficeArea10 = event => {
    this.handleInput(event);
    this.validateOfficeArea(event);
    event.target.value === ""
      ? $("#OfficeArea10").focus()
      : $("#OfficeArea11").focus();
  };

  handleOfficeArea11 = event => {
    this.handleInput(event);
    this.validateOfficeArea(event);
    event.target.value === ""
      ? $("#OfficeArea11").focus()
      : $("#OfficeArea12").focus();
  };

  handleOfficeArea12 = event => {
    this.handleInput(event);
    this.validateOfficeArea(event);
    event.target.value === ""
      ? $("#OfficeArea12").focus()
      : $("#OfficeArea13").focus();
  };

  handleOfficeArea13 = event => {
    this.handleInput(event);
    this.validateOfficeArea(event);
    event.target.value === ""
      ? $("#OfficeArea13").focus()
      : $("#OfficeArea14").focus();
  };

  handleOfficeArea14 = event => {
    this.handleInput(event);
    this.validateOfficeArea(event);
    event.target.value === ""
      ? $("#OfficeArea14").focus()
      : $("#OfficeArea15").focus();
  };

  handleOfficeArea15 = event => {
    this.handleInput(event);
    this.validateOfficeArea(event);
    event.target.value === ""
      ? $("#OfficeArea15").focus()
      : $("#OfficeArea16").focus();
  };

  handleOfficeArea16 = event => {
    this.handleInput(event);
    this.validateOfficeArea(event);
    event.target.value === ""
      ? $("#OfficeArea16").focus()
      : $("#OfficeArea17").focus();
  };

  handleOfficeArea17 = event => {
    this.handleInput(event);
    this.validateOfficeArea(event);
    event.target.value === ""
      ? $("#OfficeArea17").focus()
      : $("#OfficeArea18").focus();
  };

  handleOfficeArea18 = event => {
    this.handleInput(event);
    this.validateOfficeArea(event);
    event.target.value === ""
      ? $("#OfficeArea18").focus()
      : $("#OfficeArea19").focus();
  };

  handleOfficeArea19 = event => {
    this.handleInput(event);
    this.validateOfficeArea(event);
    event.target.value === ""
      ? $("#OfficeArea19").focus()
      : $("#OfficeArea20").focus();
  };

  handleOfficeArea20 = event => {
    this.handleInput(event);
    this.validateOfficeArea(event);
    event.target.value === ""
      ? $("#OfficeArea20").focus()
      : $("#OfficeArea21").focus();
  };

  handleOfficeArea21 = event => {
    this.handleInput(event);
    this.validateOfficeArea(event);
    event.target.value === ""
      ? $("#OfficeArea21").focus()
      : $("#OfficeArea22").focus();
  };

  handleOfficeArea22 = event => {
    this.handleInput(event);
    this.validateOfficeArea(event);
    event.target.value === ""
      ? $("#OfficeArea22").focus()
      : $("#OfficeArea23").focus();
  };

  handleOfficeArea23 = event => {
    this.handleInput(event);
    this.validateOfficeArea(event);
    event.target.value === ""
      ? $("#OfficeArea23").focus()
      : $("#OfficeArea24").focus();
  };

  handleOfficeArea24 = event => {
    this.handleInput(event);
    this.validateOfficeArea(event);
    event.target.value === ""
      ? $("#OfficeArea24").focus()
      : $("#OfficeArea25").focus();
  };

  handleOfficeArea25 = event => {
    this.handleInput(event);
    this.validateOfficeArea(event);
    event.target.value === ""
      ? $("#OfficeArea25").focus()
      : $("#OfficeArea25").focus();
  };

  ResetOfficeAreaError = () => {
    $("#OfficeArea1").css({
      "border-top-color": "",
      "border-bottom-color": "",
      "border-left-color": ""
    });
    $("#OfficeArea2").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#OfficeArea3").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#OfficeArea4").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#OfficeArea5").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#OfficeArea6").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#OfficeArea7").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#OfficeArea8").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#OfficeArea9").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#OfficeArea10").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#OfficeArea11").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#OfficeArea12").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#OfficeArea13").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#OfficeArea14").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#OfficeArea15").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#OfficeArea16").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#OfficeArea17").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#OfficeArea18").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#OfficeArea19").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#OfficeArea20").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#OfficeArea21").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#OfficeArea22").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#OfficeArea23").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#OfficeArea24").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#OfficeArea25").css({
      "border-top-color": "",
      "border-bottom-color": "",
      "border-right-color": ""
    });
  };

  HighlightOfficeAreaError = () => {
    $("#OfficeArea1").css({
      "border-top-color": "red",
      "border-bottom-color": "red",
      "border-left-color": "red"
    });
    $("#OfficeArea2").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#OfficeArea3").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#OfficeArea4").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#OfficeArea5").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#OfficeArea6").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#OfficeArea7").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#OfficeArea8").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#OfficeArea9").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#OfficeArea10").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#OfficeArea11").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#OfficeArea12").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#OfficeArea13").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#OfficeArea14").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#OfficeArea15").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#OfficeArea16").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#OfficeArea17").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#OfficeArea18").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#OfficeArea19").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#OfficeArea20").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#OfficeArea21").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#OfficeArea22").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#OfficeArea23").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#OfficeArea24").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#OfficeArea25").css({
      "border-top-color": "red",
      "border-bottom-color": "red",
      "border-right-color": "red"
    });
  };

  handleOfficeTown1 = event => {
    this.handleInput(event);
    this.validateOfficeTown(event);
    event.target.value === ""
      ? $("#OfficeTown1").focus()
      : $("#OfficeTown2").focus();
  };

  handleOfficeTown2 = event => {
    this.handleInput(event);
    this.validateOfficeTown(event);
    event.target.value === ""
      ? $("#OfficeTown2").focus()
      : $("#OfficeTown3").focus();
  };

  handleOfficeTown3 = event => {
    this.handleInput(event);
    this.validateOfficeTown(event);
    event.target.value === ""
      ? $("#OfficeTown3").focus()
      : $("#OfficeTown4").focus();
  };

  handleOfficeTown4 = event => {
    this.handleInput(event);
    this.validateOfficeTown(event);
    event.target.value === ""
      ? $("#OfficeTown4").focus()
      : $("#OfficeTown5").focus();
  };

  handleOfficeTown5 = event => {
    this.handleInput(event);
    this.validateOfficeTown(event);
    event.target.value === ""
      ? $("#OfficeTown5").focus()
      : $("#OfficeTown6").focus();
  };

  handleOfficeTown6 = event => {
    this.handleInput(event);
    this.validateOfficeTown(event);
    event.target.value === ""
      ? $("#OfficeTown6").focus()
      : $("#OfficeTown7").focus();
  };

  handleOfficeTown7 = event => {
    this.handleInput(event);
    this.validateOfficeTown(event);
    event.target.value === ""
      ? $("#OfficeTown7").focus()
      : $("#OfficeTown8").focus();
  };

  handleOfficeTown8 = event => {
    this.handleInput(event);
    this.validateOfficeTown(event);
    event.target.value === ""
      ? $("#OfficeTown8").focus()
      : $("#OfficeTown9").focus();
  };

  handleOfficeTown9 = event => {
    this.handleInput(event);
    this.validateOfficeTown(event);
    event.target.value === ""
      ? $("#OfficeTown9").focus()
      : $("#OfficeTown10").focus();
  };

  handleOfficeTown10 = event => {
    this.handleInput(event);
    this.validateOfficeTown(event);
    event.target.value === ""
      ? $("#OfficeTown10").focus()
      : $("#OfficeTown11").focus();
  };

  handleOfficeTown11 = event => {
    this.handleInput(event);
    this.validateOfficeTown(event);
    event.target.value === ""
      ? $("#OfficeTown11").focus()
      : $("#OfficeTown12").focus();
  };

  handleOfficeTown12 = event => {
    this.handleInput(event);
    this.validateOfficeTown(event);
    event.target.value === ""
      ? $("#OfficeTown12").focus()
      : $("#OfficeTown13").focus();
  };

  handleOfficeTown13 = event => {
    this.handleInput(event);
    this.validateOfficeTown(event);
    event.target.value === ""
      ? $("#OfficeTown13").focus()
      : $("#OfficeTown14").focus();
  };

  handleOfficeTown14 = event => {
    this.handleInput(event);
    this.validateOfficeTown(event);
    event.target.value === ""
      ? $("#OfficeTown14").focus()
      : $("#OfficeTown15").focus();
  };

  handleOfficeTown15 = event => {
    this.handleInput(event);
    this.validateOfficeTown(event);
    event.target.value === ""
      ? $("#OfficeTown15").focus()
      : $("#OfficeTown16").focus();
  };

  handleOfficeTown16 = event => {
    this.handleInput(event);
    this.validateOfficeTown(event);
    event.target.value === ""
      ? $("#OfficeTown16").focus()
      : $("#OfficeTown17").focus();
  };

  handleOfficeTown17 = event => {
    this.handleInput(event);
    this.validateOfficeTown(event);
    event.target.value === ""
      ? $("#OfficeTown17").focus()
      : $("#OfficeTown18").focus();
  };

  handleOfficeTown18 = event => {
    this.handleInput(event);
    this.validateOfficeTown(event);
    event.target.value === ""
      ? $("#OfficeTown18").focus()
      : $("#OfficeTown19").focus();
  };

  handleOfficeTown19 = event => {
    this.handleInput(event);
    this.validateOfficeTown(event);
    event.target.value === ""
      ? $("#OfficeTown19").focus()
      : $("#OfficeTown20").focus();
  };

  handleOfficeTown20 = event => {
    this.handleInput(event);
    this.validateOfficeTown(event);
    event.target.value === ""
      ? $("#OfficeTown20").focus()
      : $("#OfficeTown21").focus();
  };

  handleOfficeTown21 = event => {
    this.handleInput(event);
    this.validateOfficeTown(event);
    event.target.value === ""
      ? $("#OfficeTown21").focus()
      : $("#OfficeTown22").focus();
  };

  handleOfficeTown22 = event => {
    this.handleInput(event);
    this.validateOfficeTown(event);
    event.target.value === ""
      ? $("#OfficeTown22").focus()
      : $("#OfficeTown23").focus();
  };

  handleOfficeTown23 = event => {
    this.handleInput(event);
    this.validateOfficeTown(event);
    event.target.value === ""
      ? $("#OfficeTown23").focus()
      : $("#OfficeTown24").focus();
  };

  handleOfficeTown24 = event => {
    this.handleInput(event);
    this.validateOfficeTown(event);
    event.target.value === ""
      ? $("#OfficeTown24").focus()
      : $("#OfficeTown25").focus();
  };

  handleOfficeTown25 = event => {
    this.handleInput(event);
    this.validateOfficeTown(event);
    event.target.value === ""
      ? $("#OfficeTown25").focus()
      : $("#OfficeTown25").focus();
  };

  ResetOfficeTownError = () => {
    $("#OfficeTown1").css({
      "border-top-color": "",
      "border-bottom-color": "",
      "border-left-color": ""
    });
    $("#OfficeTown2").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#OfficeTown3").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#OfficeTown4").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#OfficeTown5").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#OfficeTown6").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#OfficeTown7").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#OfficeTown8").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#OfficeTown9").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#OfficeTown10").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#OfficeTown11").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#OfficeTown12").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#OfficeTown13").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#OfficeTown14").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#OfficeTown15").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#OfficeTown16").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#OfficeTown17").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#OfficeTown18").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#OfficeTown19").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#OfficeTown20").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#OfficeTown21").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#OfficeTown22").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#OfficeTown23").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#OfficeTown24").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#OfficeTown25").css({
      "border-top-color": "",
      "border-bottom-color": "",
      "border-right-color": ""
    });
  };

  HighlightOfficeTownError = () => {
    $("#OfficeTown1").css({
      "border-top-color": "red",
      "border-bottom-color": "red",
      "border-left-color": "red"
    });
    $("#OfficeTown2").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#OfficeTown3").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#OfficeTown4").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#OfficeTown5").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#OfficeTown6").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#OfficeTown7").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#OfficeTown8").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#OfficeTown9").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#OfficeTown10").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#OfficeTown11").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#OfficeTown12").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#OfficeTown13").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#OfficeTown14").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#OfficeTown15").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#OfficeTown16").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#OfficeTown17").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#OfficeTown18").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#OfficeTown19").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#OfficeTown20").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#OfficeTown21").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#OfficeTown22").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#OfficeTown23").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#OfficeTown24").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#OfficeTown25").css({
      "border-top-color": "red",
      "border-bottom-color": "red",
      "border-right-color": "red"
    });
  };

  handleOfficePincode1 = event => {
    this.handleInput(event);
    this.validateOfficePincode(event);
    event.target.value === ""
      ? $("#OfficePincode1").focus()
      : $("#OfficePincode2").focus();
  };

  handleOfficePincode2 = event => {
    this.handleInput(event);
    this.validateOfficePincode(event);
    event.target.value === ""
      ? $("#OfficePincode2").focus()
      : $("#OfficePincode3").focus();
  };

  handleOfficePincode3 = event => {
    this.handleInput(event);
    this.validateOfficePincode(event);
    event.target.value === ""
      ? $("#OfficePincode3").focus()
      : $("#OfficePincode4").focus();
  };

  handleOfficePincode4 = event => {
    this.handleInput(event);
    this.validateOfficePincode(event);
    event.target.value === ""
      ? $("#OfficePincode4").focus()
      : $("#OfficePincode5").focus();
  };

  handleOfficePincode5 = event => {
    this.handleInput(event);
    this.validateOfficePincode(event);
    event.target.value === ""
      ? $("#OfficePincode5").focus()
      : $("#OfficePincode6").focus();
  };

  handleOfficePincode6 = event => {
    this.handleInput(event);
    this.validateOfficePincode(event);
    event.target.value === ""
      ? $("#OfficePincode6").focus()
      : $("#OfficePincode7").focus();
  };

  handleOfficePincode7 = event => {
    this.handleInput(event);
    this.validateOfficePincode(event);
    event.target.value === ""
      ? $("#OfficePincode7").focus()
      : $("#OfficePincode7").focus();
  };

  ResetOfficePincodeError = () => {
    $("#OfficePincode1").css({
      "border-top-color": "",
      "border-bottom-color": "",
      "border-left-color": ""
    });
    $("#OfficePincode2").css({
      "border-top-color": "",
      "border-bottom-color": "",
      "border-right-color": ""
    });
    $("#OfficePincode3").css({
      "border-top-color": "",
      "border-bottom-color": "",
      "border-left-color": ""
    });
    $("#OfficePincode4").css({
      "border-top-color": "",
      "border-bottom-color": "",
      "border-right-color": ""
    });
    $("#OfficePincode5").css({
      "border-top-color": "",
      "border-bottom-color": "",
      "border-right-color": ""
    });
    $("#OfficePincode6").css({
      "border-top-color": "",
      "border-bottom-color": "",
      "border-left-color": ""
    });
    $("#OfficePincode7").css({
      "border-top-color": "",
      "border-bottom-color": "",
      "border-right-color": ""
    });
  };

  HighlightOfficePincodeError = () => {
    $("#OfficePincode1").css({
      "border-top-color": "red",
      "border-bottom-color": "red",
      "border-left-color": "red"
    });
    $("#OfficePincode2").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#OfficePincode3").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#OfficePincode4").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#OfficePincode5").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#OfficePincode6").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#OfficePincode7").css({
      "border-top-color": "red",
      "border-bottom-color": "red",
      "border-right-color": "red"
    });
  };

  async validateOfficeName(event) {
    this.state.data.OfficeName =
      this.state.data.OfficeName1 +
      this.state.data.OfficeName2 +
      this.state.data.OfficeName3 +
      this.state.data.OfficeName4 +
      this.state.data.OfficeName5 +
      this.state.data.OfficeName6 +
      this.state.data.OfficeName7 +
      this.state.data.OfficeName8 +
      this.state.data.OfficeName9 +
      this.state.data.OfficeName10 +
      this.state.data.OfficeName11 +
      this.state.data.OfficeName12 +
      this.state.data.OfficeName13 +
      this.state.data.OfficeName14 +
      this.state.data.OfficeName15 +
      this.state.data.OfficeName16 +
      this.state.data.OfficeName17 +
      this.state.data.OfficeName18 +
      this.state.data.OfficeName19 +
      this.state.data.OfficeName20 +
      this.state.data.OfficeName21 +
      this.state.data.OfficeName22 +
      this.state.data.OfficeName23 +
      this.state.data.OfficeName24 +
      this.state.data.OfficeName25;

    let errors = this.state.errors;
    let name = "OfficeName";
    this.setState(errors);
    errors[name] = "";

    this.ResetOfficeNameError();

    if (this.state.data.Communication === "17") {
      if (
        this.state.data.OfficeName === "" ||
        (isNaN(this.state.data.OfficeName) === false &&
          this.state.data.OfficeName.match(/^[ ]*$/))
      ) {
        let errors = this.state.errors;
        let name = "OfficeName";
        this.setState(errors);
        errors[name] = "*Please enter your Office's Name";

        let isModalEnabled = this.state.isModalEnabled;
        isModalEnabled = false;
        this.setState({ isModalEnabled });
        this.HighlightOfficeNameError();
      }
      if (typeof this.state.data.OfficeName !== "undefined") {
        if (!this.state.data.OfficeName.match(/^[a-zA-Z0-9 ]*$/)) {
          let errors = this.state.errors;
          let name = "OfficeName";
          this.setState(errors);
          errors[name] = "*Please enter alphabet characters only.";

          let isModalEnabled = this.state.isModalEnabled;
          isModalEnabled = false;
          this.setState({ isModalEnabled });
          this.HighlightOfficeNameError();
        }
      }
    } else if (typeof this.state.data.OfficeName !== "undefined") {
      if (!this.state.data.OfficeName.match(/^[a-zA-Z0-9 ]*$/)) {
        let errors = this.state.errors;
        let name = "OfficeName";
        this.setState(errors);
        errors[name] = "*Please enter alphabet characters only.";

        let isModalEnabled = this.state.isModalEnabled;
        isModalEnabled = false;
        this.setState({ isModalEnabled });
        this.HighlightOfficeNameError();
      }
    }

    localStorage.setItem("localdata", JSON.stringify(this.state.data));
    localStorage.setItem("localerror", JSON.stringify(this.state.errors));
  }

  async validateOfficeFlat(event) {
    this.state.data.OfficeFlat =
      this.state.data.OfficeFlat1 +
      this.state.data.OfficeFlat2 +
      this.state.data.OfficeFlat3 +
      this.state.data.OfficeFlat4 +
      this.state.data.OfficeFlat5 +
      this.state.data.OfficeFlat6 +
      this.state.data.OfficeFlat7 +
      this.state.data.OfficeFlat8 +
      this.state.data.OfficeFlat9 +
      this.state.data.OfficeFlat10 +
      this.state.data.OfficeFlat11 +
      this.state.data.OfficeFlat12 +
      this.state.data.OfficeFlat13 +
      this.state.data.OfficeFlat14 +
      this.state.data.OfficeFlat15 +
      this.state.data.OfficeFlat16 +
      this.state.data.OfficeFlat17 +
      this.state.data.OfficeFlat18 +
      this.state.data.OfficeFlat19 +
      this.state.data.OfficeFlat20 +
      this.state.data.OfficeFlat21 +
      this.state.data.OfficeFlat22 +
      this.state.data.OfficeFlat23 +
      this.state.data.OfficeFlat24 +
      this.state.data.OfficeFlat25;

    let errors = this.state.errors;
    let name = "OfficeFlat";
    this.setState(errors);
    errors[name] = "";
    this.ResetOfficeFlatError();

    if (this.state.data.Communication === "17") {
      if (
        this.state.data.OfficeFlat === "" ||
        (isNaN(this.state.data.OfficeFlat) === false &&
          this.state.data.OfficeFlat.match(/^[ ]*$/))
      ) {
        let errors = this.state.errors;
        let name = "OfficeFlat";
        this.setState(errors);
        errors[name] =
          "*Please enter your Office Flat / Room / Door / Block No.";

        let isModalEnabled = this.state.isModalEnabled;
        isModalEnabled = false;
        this.setState({ isModalEnabled });
        this.HighlightOfficeFlatError();
      }
      if (typeof this.state.data.OfficeFlat !== "undefined") {
        if (!this.state.data.OfficeFlat.match(/^[a-zA-Z0-9'-/ ]*$/)) {
          let errors = this.state.errors;
          let name = "OfficeFlat";
          this.setState(errors);
          errors[name] = "*Please enter alphanumeric characters only.";

          let isModalEnabled = this.state.isModalEnabled;
          isModalEnabled = false;
          this.setState({ isModalEnabled });
          this.HighlightOfficeFlatError();
        }
      }
    } else if (typeof this.state.data.OfficeFlat !== "undefined") {
      if (!this.state.data.OfficeFlat.match(/^[a-zA-Z0-9'-/ ]*$/)) {
        let errors = this.state.errors;
        let name = "OfficeFlat";
        this.setState(errors);
        errors[name] = "*Please enter alphanumeric characters only.";

        let isModalEnabled = this.state.isModalEnabled;
        isModalEnabled = false;
        this.setState({ isModalEnabled });
        this.HighlightOfficeFlatError();
      }
    }

    localStorage.setItem("localdata", JSON.stringify(this.state.data));
    localStorage.setItem("localerror", JSON.stringify(this.state.errors));
  }

  async validateOfficePremises(event) {
    this.state.data.OfficePremises =
      this.state.data.OfficePremises1 +
      this.state.data.OfficePremises2 +
      this.state.data.OfficePremises3 +
      this.state.data.OfficePremises4 +
      this.state.data.OfficePremises5 +
      this.state.data.OfficePremises6 +
      this.state.data.OfficePremises7 +
      this.state.data.OfficePremises8 +
      this.state.data.OfficePremises9 +
      this.state.data.OfficePremises10 +
      this.state.data.OfficePremises11 +
      this.state.data.OfficePremises12 +
      this.state.data.OfficePremises13 +
      this.state.data.OfficePremises14 +
      this.state.data.OfficePremises15 +
      this.state.data.OfficePremises16 +
      this.state.data.OfficePremises17 +
      this.state.data.OfficePremises18 +
      this.state.data.OfficePremises19 +
      this.state.data.OfficePremises20 +
      this.state.data.OfficePremises21 +
      this.state.data.OfficePremises22 +
      this.state.data.OfficePremises23 +
      this.state.data.OfficePremises24 +
      this.state.data.OfficePremises25;

    let errors = this.state.errors;
    let name = "OfficePremises";
    this.setState(errors);
    errors[name] = "";

    this.ResetOfficePremisesError();

    if (this.state.data.Communication === "17") {
      if (
        this.state.data.OfficePremises === "" ||
        (isNaN(this.state.data.OfficePremises) === false &&
          this.state.data.OfficePremises.match(/^[ ]*$/))
      ) {
        let errors = this.state.errors;
        let name = "OfficePremises";
        this.setState(errors);
        errors[name] =
          "*Please enter your Office Premises / Building / Village";

        let isModalEnabled = this.state.isModalEnabled;
        isModalEnabled = false;
        this.setState({ isModalEnabled });
        this.HighlightOfficePremisesError();
      }

      if (typeof this.state.data.OfficePremises !== "undefined") {
        if (!this.state.data.OfficePremises.match(/^[a-zA-Z0-9 ]*$/)) {
          let errors = this.state.errors;
          let name = "OfficePremises";
          this.setState(errors);
          errors[name] = "*Please enter alphanumeric characters only.";

          let isModalEnabled = this.state.isModalEnabled;
          isModalEnabled = false;
          this.setState({ isModalEnabled });
          this.HighlightOfficePremisesError();
        }
      }
    } else if (typeof this.state.data.OfficePremises !== "undefined") {
      if (!this.state.data.OfficePremises.match(/^[a-zA-Z0-9 ]*$/)) {
        let errors = this.state.errors;
        let name = "OfficePremises";
        this.setState(errors);
        errors[name] = "*Please enter alphanumeric characters only.";

        let isModalEnabled = this.state.isModalEnabled;
        isModalEnabled = false;
        this.setState({ isModalEnabled });
        this.HighlightOfficePremisesError();
      }
    }

    localStorage.setItem("localdata", JSON.stringify(this.state.data));
    localStorage.setItem("localerror", JSON.stringify(this.state.errors));
  }

  async validateOfficeRoad(event) {
    this.state.data.OfficeRoad =
      this.state.data.OfficeRoad1 +
      this.state.data.OfficeRoad2 +
      this.state.data.OfficeRoad3 +
      this.state.data.OfficeRoad4 +
      this.state.data.OfficeRoad5 +
      this.state.data.OfficeRoad6 +
      this.state.data.OfficeRoad7 +
      this.state.data.OfficeRoad8 +
      this.state.data.OfficeRoad9 +
      this.state.data.OfficeRoad10 +
      this.state.data.OfficeRoad11 +
      this.state.data.OfficeRoad12 +
      this.state.data.OfficeRoad13 +
      this.state.data.OfficeRoad14 +
      this.state.data.OfficeRoad15 +
      this.state.data.OfficeRoad16 +
      this.state.data.OfficeRoad17 +
      this.state.data.OfficeRoad18 +
      this.state.data.OfficeRoad19 +
      this.state.data.OfficeRoad20 +
      this.state.data.OfficeRoad21 +
      this.state.data.OfficeRoad22 +
      this.state.data.OfficeRoad23 +
      this.state.data.OfficeRoad24 +
      this.state.data.OfficeRoad25;

    let errors = this.state.errors;
    let name = "OfficeRoad";
    this.setState(errors);
    errors[name] = "";

    this.ResetOfficeRoadError();

    if (this.state.data.Communication === "17") {
      if (
        this.state.data.OfficeRoad === "" ||
        (isNaN(this.state.data.OfficeRoad) === false &&
          this.state.data.OfficeRoad.match(/^[ ]*$/))
      ) {
        let errors = this.state.errors;
        let name = "OfficeRoad";
        this.setState(errors);
        errors[name] =
          "*Please enter your Office Road / Street / Lane / Post Office";

        let isModalEnabled = this.state.isModalEnabled;
        isModalEnabled = false;
        this.setState({ isModalEnabled });
        this.HighlightOfficeRoadError();
      }

      if (typeof this.state.data.OfficeRoad !== "undefined") {
        if (!this.state.data.OfficeRoad.match(/^[a-zA-Z0-9 ]*$/)) {
          let errors = this.state.errors;
          let name = "OfficeRoad";
          this.setState(errors);
          errors[name] = "*Please enter alphanumeric characters only.";

          let isModalEnabled = this.state.isModalEnabled;
          isModalEnabled = false;
          this.setState({ isModalEnabled });
          this.HighlightOfficeRoadError();
        }
      }
    } else if (typeof this.state.data.OfficeRoad !== "undefined") {
      if (!this.state.data.OfficeRoad.match(/^[a-zA-Z0-9 ]*$/)) {
        let errors = this.state.errors;
        let name = "OfficeRoad";
        this.setState(errors);
        errors[name] = "*Please enter alphanumeric characters only.";

        let isModalEnabled = this.state.isModalEnabled;
        isModalEnabled = false;
        this.setState({ isModalEnabled });
        this.HighlightOfficeRoadError();
      }
    }

    localStorage.setItem("localdata", JSON.stringify(this.state.data));
    localStorage.setItem("localerror", JSON.stringify(this.state.errors));
  }

  async validateOfficeArea(event) {
    this.state.data.OfficeArea =
      this.state.data.OfficeArea1 +
      this.state.data.OfficeArea2 +
      this.state.data.OfficeArea3 +
      this.state.data.OfficeArea4 +
      this.state.data.OfficeArea5 +
      this.state.data.OfficeArea6 +
      this.state.data.OfficeArea7 +
      this.state.data.OfficeArea8 +
      this.state.data.OfficeArea9 +
      this.state.data.OfficeArea10 +
      this.state.data.OfficeArea11 +
      this.state.data.OfficeArea12 +
      this.state.data.OfficeArea13 +
      this.state.data.OfficeArea14 +
      this.state.data.OfficeArea15 +
      this.state.data.OfficeArea16 +
      this.state.data.OfficeArea17 +
      this.state.data.OfficeArea18 +
      this.state.data.OfficeArea19 +
      this.state.data.OfficeArea20 +
      this.state.data.OfficeArea21 +
      this.state.data.OfficeArea22 +
      this.state.data.OfficeArea23 +
      this.state.data.OfficeArea24 +
      this.state.data.OfficeArea25;

    let errors = this.state.errors;
    let name = "OfficeArea";
    this.setState(errors);
    errors[name] = "";

    this.ResetOfficeAreaError();

    if (this.state.data.Communication === "17") {
      if (
        this.state.data.OfficeArea === "" ||
        isNaN(this.state.data.OfficeArea) === false
      ) {
        let errors = this.state.errors;
        let name = "OfficeArea";
        this.setState(errors);
        errors[name] =
          "*Please enter your Office Area / Locality / Taluka / Sub-division";

        let isModalEnabled = this.state.isModalEnabled;
        isModalEnabled = false;
        this.setState({ isModalEnabled });
        this.HighlightOfficeAreaError();
      }

      if (typeof this.state.data.OfficeArea !== "undefined") {
        if (!this.state.data.OfficeArea.match(/^[a-zA-Z ]*$/)) {
          let errors = this.state.errors;
          let name = "OfficeArea";
          this.setState(errors);
          errors[name] = "*Please enter alphabet characters only.";

          let isModalEnabled = this.state.isModalEnabled;
          isModalEnabled = false;
          this.setState({ isModalEnabled });
          this.HighlightOfficeAreaError();
        }
      }
    } else if (typeof this.state.data.OfficeArea !== "undefined") {
      if (!this.state.data.OfficeArea.match(/^[a-zA-Z ]*$/)) {
        let errors = this.state.errors;
        let name = "OfficeArea";
        this.setState(errors);
        errors[name] = "*Please enter alphabet characters only.";

        let isModalEnabled = this.state.isModalEnabled;
        isModalEnabled = false;
        this.setState({ isModalEnabled });
        this.HighlightOfficeAreaError();
      }
    }

    localStorage.setItem("localdata", JSON.stringify(this.state.data));
    localStorage.setItem("localerror", JSON.stringify(this.state.errors));
  }

  async validateOfficeTown(event) {
    this.state.data.OfficeTown =
      this.state.data.OfficeTown1 +
      this.state.data.OfficeTown2 +
      this.state.data.OfficeTown3 +
      this.state.data.OfficeTown4 +
      this.state.data.OfficeTown5 +
      this.state.data.OfficeTown6 +
      this.state.data.OfficeTown7 +
      this.state.data.OfficeTown8 +
      this.state.data.OfficeTown9 +
      this.state.data.OfficeTown10 +
      this.state.data.OfficeTown11 +
      this.state.data.OfficeTown12 +
      this.state.data.OfficeTown13 +
      this.state.data.OfficeTown14 +
      this.state.data.OfficeTown15 +
      this.state.data.OfficeTown16 +
      this.state.data.OfficeTown17 +
      this.state.data.OfficeTown18 +
      this.state.data.OfficeTown19 +
      this.state.data.OfficeTown20 +
      this.state.data.OfficeTown21 +
      this.state.data.OfficeTown22 +
      this.state.data.OfficeTown23 +
      this.state.data.OfficeTown24 +
      this.state.data.OfficeTown25;

    let errors = this.state.errors;
    let name = "OfficeTown";
    this.setState(errors);
    errors[name] = "";

    this.ResetOfficeTownError();

    if (this.state.data.Communication === "17") {
      if (
        this.state.data.OfficeTown === "" ||
        isNaN(this.state.data.OfficeTown) === false
      ) {
        let errors = this.state.errors;
        let name = "OfficeTown";
        this.setState(errors);
        errors[name] = "*Please enter your Office Town / City / District";

        let isModalEnabled = this.state.isModalEnabled;
        isModalEnabled = false;
        this.setState({ isModalEnabled });
        this.HighlightOfficeTownError();
      }

      if (typeof this.state.data.OfficeTown !== "undefined") {
        if (!this.state.data.OfficeTown.match(/^[a-zA-Z ]*$/)) {
          let errors = this.state.errors;
          let name = "OfficeTown";
          this.setState(errors);
          errors[name] = "*Please enter alphabet characters only.";

          let isModalEnabled = this.state.isModalEnabled;
          isModalEnabled = false;
          this.setState({ isModalEnabled });
          this.HighlightOfficeTownError();
        }
      }
    } else if (typeof this.state.data.OfficeTown !== "undefined") {
      if (!this.state.data.OfficeTown.match(/^[a-zA-Z ]*$/)) {
        let errors = this.state.errors;
        let name = "OfficeTown";
        this.setState(errors);
        errors[name] = "*Please enter alphabet characters only.";

        let isModalEnabled = this.state.isModalEnabled;
        isModalEnabled = false;
        this.setState({ isModalEnabled });
        this.HighlightOfficeTownError();
      }
    }

    localStorage.setItem("localdata", JSON.stringify(this.state.data));
    localStorage.setItem("localerror", JSON.stringify(this.state.errors));
  }

  handleOfficeState = event => {
    let OfficeState = this.state.data;
    let { name, value } = event.target;
    this.setState(OfficeState);
    OfficeState[name] = value;

    localStorage.setItem("localdata", JSON.stringify(this.state.data));
    localStorage.setItem("localerror", JSON.stringify(this.state.errors));

    let errors = this.state.errors;
    let name1 = "OfficeState";
    this.setState(errors);
    errors[name1] = "";

    let textPattern = /^[a-zA-Z ]*$/;
    $("#OfficeState").css("border-color", "");

    if (this.state.data.Communication === "17") {
      if (
        this.state.data.OfficeState === "" ||
        isNaN(this.state.data.OfficeState) === false
      ) {
        let errors = this.state.errors;
        let name1 = "OfficeState";
        this.setState(errors);
        errors[name1] = "*Please enter your Office State";

        let val = this.state.isModalEnabled;
        val = false;
        this.setState({ val });
        $("#OfficeState").css("border-color", "red");
      }

      if (typeof this.state.data.OfficeState !== "undefined") {
        if (!textPattern.test(this.state.data.OfficeState)) {
          let errors = this.state.errors;
          let name1 = "OfficeState";
          this.setState(errors);
          errors[name1] = "*Please enter alphabet characters only.";

          let val = this.state.isModalEnabled;
          val = false;
          this.setState({ val });
          $("#OfficeState").css("border-color", "red");
        }
      }
    } else if (typeof this.state.data.OfficeState !== "undefined") {
      if (!textPattern.test(this.state.data.OfficeState)) {
        let errors = this.state.errors;
        let name1 = "OfficeState";
        this.setState(errors);
        errors[name1] = "*Please enter alphabet characters only.";

        let val = this.state.isModalEnabled;
        val = false;
        this.setState({ val });
        $("#OfficeState").css("border-color", "red");
      }
    }
  };

  async validateOfficePincode(event) {
    this.state.data.OfficePincode =
      this.state.data.OfficePincode1 +
      this.state.data.OfficePincode2 +
      this.state.data.OfficePincode3 +
      this.state.data.OfficePincode4 +
      this.state.data.OfficePincode5 +
      this.state.data.OfficePincode6 +
      this.state.data.OfficePincode7;

    let errors = this.state.errors;
    let name = "OfficePincode";
    this.setState(errors);
    errors[name] = "";

    this.ResetOfficePincodeError();

    if (this.state.data.Communication === "17") {
      if (
        this.state.data.OfficePincode === "" ||
        this.state.data.OfficePincode.match(/^[ ]*$/)
      ) {
        let errors = this.state.errors;
        let name = "OfficePincode";
        this.setState(errors);
        errors[name] = "*Please enter your Office Pincode";

        let isModalEnabled = this.state.isModalEnabled;
        isModalEnabled = false;
        this.setState({ isModalEnabled });
        this.HighlightOfficePincodeError();
      }

      if (typeof this.state.data.OfficePincode !== "undefined") {
        if (!this.state.data.OfficePincode.match(/^[1-9][0-9]*$/)) {
          let errors = this.state.errors;
          let name = "OfficePincode";
          this.setState(errors);
          errors[name] = "*Please enter valid pincode";

          let isModalEnabled = this.state.isModalEnabled;
          isModalEnabled = false;
          this.setState({ isModalEnabled });
          this.HighlightOfficePincodeError();
        }
      }
    } else if (typeof this.state.data.OfficePincode !== "undefined") {
      if (!this.state.data.OfficePincode.match(/^[1-9][0-9]*$/)) {
        let errors = this.state.errors;
        let name = "OfficePincode";
        this.setState(errors);
        errors[name] = "*Please enter valid pincode";

        let isModalEnabled = this.state.isModalEnabled;
        isModalEnabled = false;
        this.setState({ isModalEnabled });
        this.HighlightOfficePincodeError();
      }
    }

    localStorage.setItem("localdata", JSON.stringify(this.state.data));
    localStorage.setItem("localerror", JSON.stringify(this.state.errors));
  }

  handleOfficeCountry = event => {
    let OfficeCountry = this.state.data;
    let { name, value } = event.target;
    this.setState(OfficeCountry);
    OfficeCountry[name] = value;

    localStorage.setItem("localdata", JSON.stringify(this.state.data));
    localStorage.setItem("localerror", JSON.stringify(this.state.errors));

    let errors = this.state.errors;
    let name1 = "OfficeCountry";
    this.setState(errors);
    errors[name1] = "";

    let textPattern = /^[a-zA-Z ]*$/;
    $("#OfficeCountry").css("border-color", "");

    if (this.state.data.Communication === "17") {
      if (
        this.state.data.OfficeCountry === "" ||
        isNaN(this.state.data.OfficeCountry) === false
      ) {
        let errors = this.state.errors;
        let name1 = "OfficeCountry";
        this.setState(errors);
        errors[name1] = "*Please enter your OfficeCountry";

        let val = this.state.isModalEnabled;
        val = false;
        this.setState({ val });
        $("#OfficeCountry").css("border-color", "red");
      }

      if (typeof this.state.data.OfficeCountry !== "undefined") {
        if (!textPattern.test(this.state.data.OfficeCountry)) {
          let errors = this.state.errors;
          let name1 = "OfficeCountry";
          this.setState(errors);
          errors[name1] = "*Please enter alphabet characters only.";

          let val = this.state.isModalEnabled;
          val = false;
          this.setState({ val });
          $("#OfficeCountry").css("border-color", "red");
        }
      }
    } else if (typeof this.state.data.OfficeCountry !== "undefined") {
      if (!textPattern.test(this.state.data.OfficeCountry)) {
        let errors = this.state.errors;
        let name1 = "OfficeCountry";
        this.setState(errors);
        errors[name1] = "*Please enter alphabet characters only.";

        let val = this.state.isModalEnabled;
        val = false;
        this.setState({ val });
        $("#OfficeCountry").css("border-color", "red");
      }
    }
  };

  render() {
    return (
      <div>
        <label className="FirstLabel Bold">Office Address </label>
        {this.state.isIndicatorEnabled === false ? (
          <span className="tooltip">
            <img
              src={indicator}
              alt="img"
              style={{
                width: "2.2%",
                height: "1.9%",
                float: "right",
                marginRight: "1.2%"
              }}
            />
            <img
              src={officefield}
              alt="img"
              className="tooltiptext tooltiptextOffice"
              style={{ width: "600px", height: "150px" }}
            />
          </span>
        ) : (
          ""
        )}
        <br />
        <table>
          <tbody>
            <tr>
              <td className="first_td">
                {this.state.address.map((data, index) => (
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
                    value={this.state.data.OfficeName1}
                    name="OfficeName1"
                    id="OfficeName1"
                    onKeyDown={event =>
                      this.handleBackspaceKey(
                        event,
                        "#OfficeName1",
                        "#OfficeName1"
                      )
                    }
                    onChange={this.handleOfficeName1}
                  />

                  <input
                    type="text"
                    className="Name-control"
                    maxLength="1"
                    value={this.state.data.OfficeName2}
                    name="OfficeName2"
                    id="OfficeName2"
                    onKeyDown={event =>
                      this.handleBackspaceKey(
                        event,
                        "#OfficeName1",
                        "#OfficeName2"
                      )
                    }
                    onChange={this.handleOfficeName2}
                  />

                  <input
                    type="text"
                    className="Name-control"
                    maxLength="1"
                    value={this.state.data.OfficeName3}
                    name="OfficeName3"
                    id="OfficeName3"
                    onKeyDown={event =>
                      this.handleBackspaceKey(
                        event,
                        "#OfficeName2",
                        "#OfficeName3"
                      )
                    }
                    onChange={this.handleOfficeName3}
                  />

                  <input
                    type="text"
                    className="Name-control"
                    maxLength="1"
                    value={this.state.data.OfficeName4}
                    name="OfficeName4"
                    id="OfficeName4"
                    onKeyDown={event =>
                      this.handleBackspaceKey(
                        event,
                        "#OfficeName3",
                        "#OfficeName4"
                      )
                    }
                    onChange={this.handleOfficeName4}
                  />

                  <input
                    type="text"
                    className="Name-control"
                    maxLength="1"
                    value={this.state.data.OfficeName5}
                    name="OfficeName5"
                    id="OfficeName5"
                    onKeyDown={event =>
                      this.handleBackspaceKey(
                        event,
                        "#OfficeName4",
                        "#OfficeName5"
                      )
                    }
                    onChange={this.handleOfficeName5}
                  />

                  <input
                    type="text"
                    className="Name-control"
                    maxLength="1"
                    value={this.state.data.OfficeName6}
                    name="OfficeName6"
                    id="OfficeName6"
                    onKeyDown={event =>
                      this.handleBackspaceKey(
                        event,
                        "#OfficeName5",
                        "#OfficeName6"
                      )
                    }
                    onChange={this.handleOfficeName6}
                  />

                  <input
                    type="text"
                    className="Name-control"
                    maxLength="1"
                    value={this.state.data.OfficeName7}
                    name="OfficeName7"
                    id="OfficeName7"
                    onKeyDown={event =>
                      this.handleBackspaceKey(
                        event,
                        "#OfficeName6",
                        "#OfficeName7"
                      )
                    }
                    onChange={this.handleOfficeName7}
                  />

                  <input
                    type="text"
                    className="Name-control"
                    maxLength="1"
                    value={this.state.data.OfficeName8}
                    name="OfficeName8"
                    id="OfficeName8"
                    onKeyDown={event =>
                      this.handleBackspaceKey(
                        event,
                        "#OfficeName7",
                        "#OfficeName8"
                      )
                    }
                    onChange={this.handleOfficeName8}
                  />

                  <input
                    type="text"
                    className="Name-control"
                    maxLength="1"
                    value={this.state.data.OfficeName9}
                    name="OfficeName9"
                    id="OfficeName9"
                    onKeyDown={event =>
                      this.handleBackspaceKey(
                        event,
                        "#OfficeName8",
                        "#OfficeName9"
                      )
                    }
                    onChange={this.handleOfficeName9}
                  />

                  <input
                    type="text"
                    className="Name-control"
                    maxLength="1"
                    value={this.state.data.OfficeName10}
                    name="OfficeName10"
                    id="OfficeName10"
                    onKeyDown={event =>
                      this.handleBackspaceKey(
                        event,
                        "#OfficeName9",
                        "#OfficeName10"
                      )
                    }
                    onChange={this.handleOfficeName10}
                  />

                  <input
                    type="text"
                    className="Name-control"
                    maxLength="1"
                    value={this.state.data.OfficeName11}
                    name="OfficeName11"
                    id="OfficeName11"
                    onKeyDown={event =>
                      this.handleBackspaceKey(
                        event,
                        "#OfficeName10",
                        "#OfficeName11"
                      )
                    }
                    onChange={this.handleOfficeName11}
                  />

                  <input
                    type="text"
                    className="Name-control"
                    maxLength="1"
                    value={this.state.data.OfficeName12}
                    name="OfficeName12"
                    id="OfficeName12"
                    onKeyDown={event =>
                      this.handleBackspaceKey(
                        event,
                        "#OfficeName11",
                        "#OfficeName12"
                      )
                    }
                    onChange={this.handleOfficeName12}
                  />

                  <input
                    type="text"
                    className="Name-control"
                    maxLength="1"
                    value={this.state.data.OfficeName13}
                    name="OfficeName13"
                    id="OfficeName13"
                    onKeyDown={event =>
                      this.handleBackspaceKey(
                        event,
                        "#OfficeName12",
                        "#OfficeName13"
                      )
                    }
                    onChange={this.handleOfficeName13}
                  />

                  <input
                    type="text"
                    className="Name-control"
                    maxLength="1"
                    value={this.state.data.OfficeName14}
                    name="OfficeName14"
                    id="OfficeName14"
                    onKeyDown={event =>
                      this.handleBackspaceKey(
                        event,
                        "#OfficeName13",
                        "#OfficeName14"
                      )
                    }
                    onChange={this.handleOfficeName14}
                  />

                  <input
                    type="text"
                    className="Name-control"
                    maxLength="1"
                    value={this.state.data.OfficeName15}
                    name="OfficeName15"
                    id="OfficeName15"
                    onKeyDown={event =>
                      this.handleBackspaceKey(
                        event,
                        "#OfficeName14",
                        "#OfficeName15"
                      )
                    }
                    onChange={this.handleOfficeName15}
                  />

                  <input
                    type="text"
                    className="Name-control"
                    maxLength="1"
                    value={this.state.data.OfficeName16}
                    name="OfficeName16"
                    id="OfficeName16"
                    onKeyDown={event =>
                      this.handleBackspaceKey(
                        event,
                        "#OfficeName15",
                        "#OfficeName16"
                      )
                    }
                    onChange={this.handleOfficeName16}
                  />

                  <input
                    type="text"
                    className="Name-control"
                    maxLength="1"
                    value={this.state.data.OfficeName17}
                    name="OfficeName17"
                    id="OfficeName17"
                    onKeyDown={event =>
                      this.handleBackspaceKey(
                        event,
                        "#OfficeName16",
                        "#OfficeName17"
                      )
                    }
                    onChange={this.handleOfficeName17}
                  />

                  <input
                    type="text"
                    className="Name-control"
                    maxLength="1"
                    value={this.state.data.OfficeName18}
                    name="OfficeName18"
                    id="OfficeName18"
                    onKeyDown={event =>
                      this.handleBackspaceKey(
                        event,
                        "#OfficeName17",
                        "#OfficeName18"
                      )
                    }
                    onChange={this.handleOfficeName18}
                  />

                  <input
                    type="text"
                    className="Name-control"
                    maxLength="1"
                    value={this.state.data.OfficeName19}
                    name="OfficeName19"
                    id="OfficeName19"
                    onKeyDown={event =>
                      this.handleBackspaceKey(
                        event,
                        "#OfficeName18",
                        "#OfficeName19"
                      )
                    }
                    onChange={this.handleOfficeName19}
                  />

                  <input
                    type="text"
                    className="Name-control"
                    maxLength="1"
                    value={this.state.data.OfficeName20}
                    name="OfficeName20"
                    id="OfficeName20"
                    onKeyDown={event =>
                      this.handleBackspaceKey(
                        event,
                        "#OfficeName19",
                        "#OfficeName20"
                      )
                    }
                    onChange={this.handleOfficeName20}
                  />

                  <input
                    type="text"
                    className="Name-control"
                    maxLength="1"
                    value={this.state.data.OfficeName21}
                    name="OfficeName21"
                    id="OfficeName21"
                    onKeyDown={event =>
                      this.handleBackspaceKey(
                        event,
                        "#OfficeName20",
                        "#OfficeName21"
                      )
                    }
                    onChange={this.handleOfficeName21}
                  />

                  <input
                    type="text"
                    className="Name-control"
                    maxLength="1"
                    value={this.state.data.OfficeName22}
                    name="OfficeName22"
                    id="OfficeName22"
                    onKeyDown={event =>
                      this.handleBackspaceKey(
                        event,
                        "#OfficeName21",
                        "#OfficeName22"
                      )
                    }
                    onChange={this.handleOfficeName22}
                  />

                  <input
                    type="text"
                    className="Name-control"
                    maxLength="1"
                    value={this.state.data.OfficeName23}
                    name="OfficeName23"
                    id="OfficeName23"
                    onKeyDown={event =>
                      this.handleBackspaceKey(
                        event,
                        "#OfficeName22",
                        "#OfficeName23"
                      )
                    }
                    onChange={this.handleOfficeName23}
                  />

                  <input
                    type="text"
                    className="Name-control"
                    maxLength="1"
                    value={this.state.data.OfficeName24}
                    name="OfficeName24"
                    id="OfficeName24"
                    onKeyDown={event =>
                      this.handleBackspaceKey(
                        event,
                        "#OfficeName23",
                        "#OfficeName24"
                      )
                    }
                    onChange={this.handleOfficeName24}
                  />

                  <input
                    type="text"
                    className="Name-control"
                    maxLength="1"
                    value={this.state.data.OfficeName25}
                    name="OfficeName25"
                    id="OfficeName25"
                    onKeyDown={event =>
                      this.handleBackspaceKey(
                        event,
                        "#OfficeName24",
                        "#OfficeName25"
                      )
                    }
                    onChange={this.handleOfficeName25}
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
                      <label
                        className="tooltiptext tooltiptextLabel"
                        style={{ width: "450px", height: "20px" }}
                      >
                        Please enter combinations of alphabet, numbers
                      </label>
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
                    value={this.state.data.OfficeFlat1}
                    name="OfficeFlat1"
                    id="OfficeFlat1"
                    onKeyDown={event =>
                      this.handleBackspaceKey(
                        event,
                        "#OfficeFlat1",
                        "#OfficeFlat1"
                      )
                    }
                    onChange={this.handleOfficeFlat1}
                  />

                  <input
                    type="text"
                    className="Name-control"
                    maxLength="1"
                    value={this.state.data.OfficeFlat2}
                    name="OfficeFlat2"
                    id="OfficeFlat2"
                    onKeyDown={event =>
                      this.handleBackspaceKey(
                        event,
                        "#OfficeFlat1",
                        "#OfficeFlat2"
                      )
                    }
                    onChange={this.handleOfficeFlat2}
                  />

                  <input
                    type="text"
                    className="Name-control"
                    maxLength="1"
                    value={this.state.data.OfficeFlat3}
                    name="OfficeFlat3"
                    id="OfficeFlat3"
                    onKeyDown={event =>
                      this.handleBackspaceKey(
                        event,
                        "#OfficeFlat2",
                        "#OfficeFlat3"
                      )
                    }
                    onChange={this.handleOfficeFlat3}
                  />

                  <input
                    type="text"
                    className="Name-control"
                    maxLength="1"
                    value={this.state.data.OfficeFlat4}
                    name="OfficeFlat4"
                    id="OfficeFlat4"
                    onKeyDown={event =>
                      this.handleBackspaceKey(
                        event,
                        "#OfficeFlat3",
                        "#OfficeFlat4"
                      )
                    }
                    onChange={this.handleOfficeFlat4}
                  />

                  <input
                    type="text"
                    className="Name-control"
                    maxLength="1"
                    value={this.state.data.OfficeFlat5}
                    name="OfficeFlat5"
                    id="OfficeFlat5"
                    onKeyDown={event =>
                      this.handleBackspaceKey(
                        event,
                        "#OfficeFlat4",
                        "#OfficeFlat5"
                      )
                    }
                    onChange={this.handleOfficeFlat5}
                  />

                  <input
                    type="text"
                    className="Name-control"
                    maxLength="1"
                    value={this.state.data.OfficeFlat6}
                    name="OfficeFlat6"
                    id="OfficeFlat6"
                    onKeyDown={event =>
                      this.handleBackspaceKey(
                        event,
                        "#OfficeFlat5",
                        "#OfficeFlat6"
                      )
                    }
                    onChange={this.handleOfficeFlat6}
                  />

                  <input
                    type="text"
                    className="Name-control"
                    maxLength="1"
                    value={this.state.data.OfficeFlat7}
                    name="OfficeFlat7"
                    id="OfficeFlat7"
                    onKeyDown={event =>
                      this.handleBackspaceKey(
                        event,
                        "#OfficeFlat6",
                        "#OfficeFlat7"
                      )
                    }
                    onChange={this.handleOfficeFlat7}
                  />

                  <input
                    type="text"
                    className="Name-control"
                    maxLength="1"
                    value={this.state.data.OfficeFlat8}
                    name="OfficeFlat8"
                    id="OfficeFlat8"
                    onKeyDown={event =>
                      this.handleBackspaceKey(
                        event,
                        "#OfficeFlat7",
                        "#OfficeFlat8"
                      )
                    }
                    onChange={this.handleOfficeFlat8}
                  />

                  <input
                    type="text"
                    className="Name-control"
                    maxLength="1"
                    value={this.state.data.OfficeFlat9}
                    name="OfficeFlat9"
                    id="OfficeFlat9"
                    onKeyDown={event =>
                      this.handleBackspaceKey(
                        event,
                        "#OfficeFlat8",
                        "#OfficeFlat9"
                      )
                    }
                    onChange={this.handleOfficeFlat9}
                  />

                  <input
                    type="text"
                    className="Name-control"
                    maxLength="1"
                    value={this.state.data.OfficeFlat10}
                    name="OfficeFlat10"
                    id="OfficeFlat10"
                    onKeyDown={event =>
                      this.handleBackspaceKey(
                        event,
                        "#OfficeFlat9",
                        "#OfficeFlat10"
                      )
                    }
                    onChange={this.handleOfficeFlat10}
                  />

                  <input
                    type="text"
                    className="Name-control"
                    maxLength="1"
                    value={this.state.data.OfficeFlat11}
                    name="OfficeFlat11"
                    id="OfficeFlat11"
                    onKeyDown={event =>
                      this.handleBackspaceKey(
                        event,
                        "#OfficeFlat10",
                        "#OfficeFlat11"
                      )
                    }
                    onChange={this.handleOfficeFlat11}
                  />

                  <input
                    type="text"
                    className="Name-control"
                    maxLength="1"
                    value={this.state.data.OfficeFlat12}
                    name="OfficeFlat12"
                    id="OfficeFlat12"
                    onKeyDown={event =>
                      this.handleBackspaceKey(
                        event,
                        "#OfficeFlat11",
                        "#OfficeFlat12"
                      )
                    }
                    onChange={this.handleOfficeFlat12}
                  />

                  <input
                    type="text"
                    className="Name-control"
                    maxLength="1"
                    value={this.state.data.OfficeFlat13}
                    name="OfficeFlat13"
                    id="OfficeFlat13"
                    onKeyDown={event =>
                      this.handleBackspaceKey(
                        event,
                        "#OfficeFlat12",
                        "#OfficeFlat13"
                      )
                    }
                    onChange={this.handleOfficeFlat13}
                  />

                  <input
                    type="text"
                    className="Name-control"
                    maxLength="1"
                    value={this.state.data.OfficeFlat14}
                    name="OfficeFlat14"
                    id="OfficeFlat14"
                    onKeyDown={event =>
                      this.handleBackspaceKey(
                        event,
                        "#OfficeFlat13",
                        "#OfficeFlat14"
                      )
                    }
                    onChange={this.handleOfficeFlat14}
                  />

                  <input
                    type="text"
                    className="Name-control"
                    maxLength="1"
                    value={this.state.data.OfficeFlat15}
                    name="OfficeFlat15"
                    id="OfficeFlat15"
                    onKeyDown={event =>
                      this.handleBackspaceKey(
                        event,
                        "#OfficeFlat14",
                        "#OfficeFlat15"
                      )
                    }
                    onChange={this.handleOfficeFlat15}
                  />

                  <input
                    type="text"
                    className="Name-control"
                    maxLength="1"
                    value={this.state.data.OfficeFlat16}
                    name="OfficeFlat16"
                    id="OfficeFlat16"
                    onKeyDown={event =>
                      this.handleBackspaceKey(
                        event,
                        "#OfficeFlat15",
                        "#OfficeFlat16"
                      )
                    }
                    onChange={this.handleOfficeFlat16}
                  />

                  <input
                    type="text"
                    className="Name-control"
                    maxLength="1"
                    value={this.state.data.OfficeFlat17}
                    name="OfficeFlat17"
                    id="OfficeFlat17"
                    onKeyDown={event =>
                      this.handleBackspaceKey(
                        event,
                        "#OfficeFlat16",
                        "#OfficeFlat17"
                      )
                    }
                    onChange={this.handleOfficeFlat17}
                  />

                  <input
                    type="text"
                    className="Name-control"
                    maxLength="1"
                    value={this.state.data.OfficeFlat18}
                    name="OfficeFlat18"
                    id="OfficeFlat18"
                    onKeyDown={event =>
                      this.handleBackspaceKey(
                        event,
                        "#OfficeFlat17",
                        "#OfficeFlat18"
                      )
                    }
                    onChange={this.handleOfficeFlat18}
                  />

                  <input
                    type="text"
                    className="Name-control"
                    maxLength="1"
                    value={this.state.data.OfficeFlat19}
                    name="OfficeFlat19"
                    id="OfficeFlat19"
                    onKeyDown={event =>
                      this.handleBackspaceKey(
                        event,
                        "#OfficeFlat18",
                        "#OfficeFlat19"
                      )
                    }
                    onChange={this.handleOfficeFlat19}
                  />

                  <input
                    type="text"
                    className="Name-control"
                    maxLength="1"
                    value={this.state.data.OfficeFlat20}
                    name="OfficeFlat20"
                    id="OfficeFlat20"
                    onKeyDown={event =>
                      this.handleBackspaceKey(
                        event,
                        "#OfficeFlat19",
                        "#OfficeFlat20"
                      )
                    }
                    onChange={this.handleOfficeFlat20}
                  />

                  <input
                    type="text"
                    className="Name-control"
                    maxLength="1"
                    value={this.state.data.OfficeFlat21}
                    name="OfficeFlat21"
                    id="OfficeFlat21"
                    onKeyDown={event =>
                      this.handleBackspaceKey(
                        event,
                        "#OfficeFlat20",
                        "#OfficeFlat21"
                      )
                    }
                    onChange={this.handleOfficeFlat21}
                  />

                  <input
                    type="text"
                    className="Name-control"
                    maxLength="1"
                    value={this.state.data.OfficeFlat22}
                    name="OfficeFlat22"
                    id="OfficeFlat22"
                    onKeyDown={event =>
                      this.handleBackspaceKey(
                        event,
                        "#OfficeFlat21",
                        "#OfficeFlat22"
                      )
                    }
                    onChange={this.handleOfficeFlat22}
                  />

                  <input
                    type="text"
                    className="Name-control"
                    maxLength="1"
                    value={this.state.data.OfficeFlat23}
                    name="OfficeFlat23"
                    id="OfficeFlat23"
                    onKeyDown={event =>
                      this.handleBackspaceKey(
                        event,
                        "#OfficeFlat22",
                        "#OfficeFlat23"
                      )
                    }
                    onChange={this.handleOfficeFlat23}
                  />

                  <input
                    type="text"
                    className="Name-control"
                    maxLength="1"
                    value={this.state.data.OfficeFlat24}
                    name="OfficeFlat24"
                    id="OfficeFlat24"
                    onKeyDown={event =>
                      this.handleBackspaceKey(
                        event,
                        "#OfficeFlat23",
                        "#OfficeFlat24"
                      )
                    }
                    onChange={this.handleOfficeFlat24}
                  />

                  <input
                    type="text"
                    className="Name-control"
                    maxLength="1"
                    value={this.state.data.OfficeFlat25}
                    name="OfficeFlat25"
                    id="OfficeFlat25"
                    onKeyDown={event =>
                      this.handleBackspaceKey(
                        event,
                        "#OfficeFlat24",
                        "#OfficeFlat25"
                      )
                    }
                    onChange={this.handleOfficeFlat25}
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
                      <label
                        className="tooltiptext tooltiptextLabel"
                        style={{ width: "450px", height: "20px" }}
                      >
                        Please enter combinations of alphabet, numbers, -, /, '
                      </label>
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
                    value={this.state.data.OfficePremises1}
                    name="OfficePremises1"
                    id="OfficePremises1"
                    onKeyDown={event =>
                      this.handleBackspaceKey(
                        event,
                        "#OfficePremises1",
                        "#OfficePremises1"
                      )
                    }
                    onChange={this.handleOfficePremises1}
                  />

                  <input
                    type="text"
                    className="Name-control"
                    maxLength="1"
                    value={this.state.data.OfficePremises2}
                    name="OfficePremises2"
                    id="OfficePremises2"
                    onKeyDown={event =>
                      this.handleBackspaceKey(
                        event,
                        "#OfficePremises1",
                        "#OfficePremises2"
                      )
                    }
                    onChange={this.handleOfficePremises2}
                  />

                  <input
                    type="text"
                    className="Name-control"
                    maxLength="1"
                    value={this.state.data.OfficePremises3}
                    name="OfficePremises3"
                    id="OfficePremises3"
                    onKeyDown={event =>
                      this.handleBackspaceKey(
                        event,
                        "#OfficePremises2",
                        "#OfficePremises3"
                      )
                    }
                    onChange={this.handleOfficePremises3}
                  />

                  <input
                    type="text"
                    className="Name-control"
                    maxLength="1"
                    value={this.state.data.OfficePremises4}
                    name="OfficePremises4"
                    id="OfficePremises4"
                    onKeyDown={event =>
                      this.handleBackspaceKey(
                        event,
                        "#OfficePremises3",
                        "#OfficePremises4"
                      )
                    }
                    onChange={this.handleOfficePremises4}
                  />

                  <input
                    type="text"
                    className="Name-control"
                    maxLength="1"
                    value={this.state.data.OfficePremises5}
                    name="OfficePremises5"
                    id="OfficePremises5"
                    onKeyDown={event =>
                      this.handleBackspaceKey(
                        event,
                        "#OfficePremises4",
                        "#OfficePremises5"
                      )
                    }
                    onChange={this.handleOfficePremises5}
                  />

                  <input
                    type="text"
                    className="Name-control"
                    maxLength="1"
                    value={this.state.data.OfficePremises6}
                    name="OfficePremises6"
                    id="OfficePremises6"
                    onKeyDown={event =>
                      this.handleBackspaceKey(
                        event,
                        "#OfficePremises5",
                        "#OfficePremises6"
                      )
                    }
                    onChange={this.handleOfficePremises6}
                  />

                  <input
                    type="text"
                    className="Name-control"
                    maxLength="1"
                    value={this.state.data.OfficePremises7}
                    name="OfficePremises7"
                    id="OfficePremises7"
                    onKeyDown={event =>
                      this.handleBackspaceKey(
                        event,
                        "#OfficePremises6",
                        "#OfficePremises7"
                      )
                    }
                    onChange={this.handleOfficePremises7}
                  />

                  <input
                    type="text"
                    className="Name-control"
                    maxLength="1"
                    value={this.state.data.OfficePremises8}
                    name="OfficePremises8"
                    id="OfficePremises8"
                    onKeyDown={event =>
                      this.handleBackspaceKey(
                        event,
                        "#OfficePremises7",
                        "#OfficePremises8"
                      )
                    }
                    onChange={this.handleOfficePremises8}
                  />

                  <input
                    type="text"
                    className="Name-control"
                    maxLength="1"
                    value={this.state.data.OfficePremises9}
                    name="OfficePremises9"
                    id="OfficePremises9"
                    onKeyDown={event =>
                      this.handleBackspaceKey(
                        event,
                        "#OfficePremises8",
                        "#OfficePremises9"
                      )
                    }
                    onChange={this.handleOfficePremises9}
                  />

                  <input
                    type="text"
                    className="Name-control"
                    maxLength="1"
                    value={this.state.data.OfficePremises10}
                    name="OfficePremises10"
                    id="OfficePremises10"
                    onKeyDown={event =>
                      this.handleBackspaceKey(
                        event,
                        "#OfficePremises9",
                        "#OfficePremises10"
                      )
                    }
                    onChange={this.handleOfficePremises10}
                  />

                  <input
                    type="text"
                    className="Name-control"
                    maxLength="1"
                    value={this.state.data.OfficePremises11}
                    name="OfficePremises11"
                    id="OfficePremises11"
                    onKeyDown={event =>
                      this.handleBackspaceKey(
                        event,
                        "#OfficePremises10",
                        "#OfficePremises11"
                      )
                    }
                    onChange={this.handleOfficePremises11}
                  />

                  <input
                    type="text"
                    className="Name-control"
                    maxLength="1"
                    value={this.state.data.OfficePremises12}
                    name="OfficePremises12"
                    id="OfficePremises12"
                    onKeyDown={event =>
                      this.handleBackspaceKey(
                        event,
                        "#OfficePremises11",
                        "#OfficePremises12"
                      )
                    }
                    onChange={this.handleOfficePremises12}
                  />

                  <input
                    type="text"
                    className="Name-control"
                    maxLength="1"
                    value={this.state.data.OfficePremises13}
                    name="OfficePremises13"
                    id="OfficePremises13"
                    onKeyDown={event =>
                      this.handleBackspaceKey(
                        event,
                        "#OfficePremises12",
                        "#OfficePremises13"
                      )
                    }
                    onChange={this.handleOfficePremises13}
                  />

                  <input
                    type="text"
                    className="Name-control"
                    maxLength="1"
                    value={this.state.data.OfficePremises14}
                    name="OfficePremises14"
                    id="OfficePremises14"
                    onKeyDown={event =>
                      this.handleBackspaceKey(
                        event,
                        "#OfficePremises13",
                        "#OfficePremises14"
                      )
                    }
                    onChange={this.handleOfficePremises14}
                  />

                  <input
                    type="text"
                    className="Name-control"
                    maxLength="1"
                    value={this.state.data.OfficePremises15}
                    name="OfficePremises15"
                    id="OfficePremises15"
                    onKeyDown={event =>
                      this.handleBackspaceKey(
                        event,
                        "#OfficePremises14",
                        "#OfficePremises15"
                      )
                    }
                    onChange={this.handleOfficePremises15}
                  />

                  <input
                    type="text"
                    className="Name-control"
                    maxLength="1"
                    value={this.state.data.OfficePremises16}
                    name="OfficePremises16"
                    id="OfficePremises16"
                    onKeyDown={event =>
                      this.handleBackspaceKey(
                        event,
                        "#OfficePremises15",
                        "#OfficePremises16"
                      )
                    }
                    onChange={this.handleOfficePremises16}
                  />

                  <input
                    type="text"
                    className="Name-control"
                    maxLength="1"
                    value={this.state.data.OfficePremises17}
                    name="OfficePremises17"
                    id="OfficePremises17"
                    onKeyDown={event =>
                      this.handleBackspaceKey(
                        event,
                        "#OfficePremises16",
                        "#OfficePremises17"
                      )
                    }
                    onChange={this.handleOfficePremises17}
                  />

                  <input
                    type="text"
                    className="Name-control"
                    maxLength="1"
                    value={this.state.data.OfficePremises18}
                    name="OfficePremises18"
                    id="OfficePremises18"
                    onKeyDown={event =>
                      this.handleBackspaceKey(
                        event,
                        "#OfficePremises17",
                        "#OfficePremises18"
                      )
                    }
                    onChange={this.handleOfficePremises18}
                  />

                  <input
                    type="text"
                    className="Name-control"
                    maxLength="1"
                    value={this.state.data.OfficePremises19}
                    name="OfficePremises19"
                    id="OfficePremises19"
                    onKeyDown={event =>
                      this.handleBackspaceKey(
                        event,
                        "#OfficePremises18",
                        "#OfficePremises19"
                      )
                    }
                    onChange={this.handleOfficePremises19}
                  />

                  <input
                    type="text"
                    className="Name-control"
                    maxLength="1"
                    value={this.state.data.OfficePremises20}
                    name="OfficePremises20"
                    id="OfficePremises20"
                    onKeyDown={event =>
                      this.handleBackspaceKey(
                        event,
                        "#OfficePremises19",
                        "#OfficePremises20"
                      )
                    }
                    onChange={this.handleOfficePremises20}
                  />

                  <input
                    type="text"
                    className="Name-control"
                    maxLength="1"
                    value={this.state.data.OfficePremises21}
                    name="OfficePremises21"
                    id="OfficePremises21"
                    onKeyDown={event =>
                      this.handleBackspaceKey(
                        event,
                        "#OfficePremises20",
                        "#OfficePremises21"
                      )
                    }
                    onChange={this.handleOfficePremises21}
                  />

                  <input
                    type="text"
                    className="Name-control"
                    maxLength="1"
                    value={this.state.data.OfficePremises22}
                    name="OfficePremises22"
                    id="OfficePremises22"
                    onKeyDown={event =>
                      this.handleBackspaceKey(
                        event,
                        "#OfficePremises21",
                        "#OfficePremises22"
                      )
                    }
                    onChange={this.handleOfficePremises22}
                  />

                  <input
                    type="text"
                    className="Name-control"
                    maxLength="1"
                    value={this.state.data.OfficePremises23}
                    name="OfficePremises23"
                    id="OfficePremises23"
                    onKeyDown={event =>
                      this.handleBackspaceKey(
                        event,
                        "#OfficePremises22",
                        "#OfficePremises23"
                      )
                    }
                    onChange={this.handleOfficePremises23}
                  />

                  <input
                    type="text"
                    className="Name-control"
                    maxLength="1"
                    value={this.state.data.OfficePremises24}
                    name="OfficePremises24"
                    id="OfficePremises24"
                    onKeyDown={event =>
                      this.handleBackspaceKey(
                        event,
                        "#OfficePremises23",
                        "#OfficePremises24"
                      )
                    }
                    onChange={this.handleOfficePremises24}
                  />

                  <input
                    type="text"
                    className="Name-control"
                    maxLength="1"
                    value={this.state.data.OfficePremises25}
                    name="OfficePremises25"
                    id="OfficePremises25"
                    onKeyDown={event =>
                      this.handleBackspaceKey(
                        event,
                        "#OfficePremises24",
                        "#OfficePremises25"
                      )
                    }
                    onChange={this.handleOfficePremises25}
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
                      <label
                        className="tooltiptext tooltiptextLabel"
                        style={{ width: "450px", height: "20px" }}
                      >
                        Please enter combinations of alphabet , numbers
                      </label>
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
                    value={this.state.data.OfficeRoad1}
                    name="OfficeRoad1"
                    id="OfficeRoad1"
                    onKeyDown={event =>
                      this.handleBackspaceKey(
                        event,
                        "#OfficeRoad1",
                        "#OfficeRoad1"
                      )
                    }
                    onChange={this.handleOfficeRoad1}
                  />

                  <input
                    type="text"
                    className="Name-control"
                    maxLength="1"
                    value={this.state.data.OfficeRoad2}
                    name="OfficeRoad2"
                    id="OfficeRoad2"
                    onKeyDown={event =>
                      this.handleBackspaceKey(
                        event,
                        "#OfficeRoad1",
                        "#OfficeRoad2"
                      )
                    }
                    onChange={this.handleOfficeRoad2}
                  />

                  <input
                    type="text"
                    className="Name-control"
                    maxLength="1"
                    value={this.state.data.OfficeRoad3}
                    name="OfficeRoad3"
                    id="OfficeRoad3"
                    onKeyDown={event =>
                      this.handleBackspaceKey(
                        event,
                        "#OfficeRoad2",
                        "#OfficeRoad3"
                      )
                    }
                    onChange={this.handleOfficeRoad3}
                  />

                  <input
                    type="text"
                    className="Name-control"
                    maxLength="1"
                    value={this.state.data.OfficeRoad4}
                    name="OfficeRoad4"
                    id="OfficeRoad4"
                    onKeyDown={event =>
                      this.handleBackspaceKey(
                        event,
                        "#OfficeRoad3",
                        "#OfficeRoad4"
                      )
                    }
                    onChange={this.handleOfficeRoad4}
                  />

                  <input
                    type="text"
                    className="Name-control"
                    maxLength="1"
                    value={this.state.data.OfficeRoad5}
                    name="OfficeRoad5"
                    id="OfficeRoad5"
                    onKeyDown={event =>
                      this.handleBackspaceKey(
                        event,
                        "#OfficeRoad4",
                        "#OfficeRoad5"
                      )
                    }
                    onChange={this.handleOfficeRoad5}
                  />

                  <input
                    type="text"
                    className="Name-control"
                    maxLength="1"
                    value={this.state.data.OfficeRoad6}
                    name="OfficeRoad6"
                    id="OfficeRoad6"
                    onKeyDown={event =>
                      this.handleBackspaceKey(
                        event,
                        "#OfficeRoad5",
                        "#OfficeRoad6"
                      )
                    }
                    onChange={this.handleOfficeRoad6}
                  />

                  <input
                    type="text"
                    className="Name-control"
                    maxLength="1"
                    value={this.state.data.OfficeRoad7}
                    name="OfficeRoad7"
                    id="OfficeRoad7"
                    onKeyDown={event =>
                      this.handleBackspaceKey(
                        event,
                        "#OfficeRoad6",
                        "#OfficeRoad7"
                      )
                    }
                    onChange={this.handleOfficeRoad7}
                  />

                  <input
                    type="text"
                    className="Name-control"
                    maxLength="1"
                    value={this.state.data.OfficeRoad8}
                    name="OfficeRoad8"
                    id="OfficeRoad8"
                    onKeyDown={event =>
                      this.handleBackspaceKey(
                        event,
                        "#OfficeRoad7",
                        "#OfficeRoad8"
                      )
                    }
                    onChange={this.handleOfficeRoad8}
                  />

                  <input
                    type="text"
                    className="Name-control"
                    maxLength="1"
                    value={this.state.data.OfficeRoad9}
                    name="OfficeRoad9"
                    id="OfficeRoad9"
                    onKeyDown={event =>
                      this.handleBackspaceKey(
                        event,
                        "#OfficeRoad8",
                        "#OfficeRoad9"
                      )
                    }
                    onChange={this.handleOfficeRoad9}
                  />

                  <input
                    type="text"
                    className="Name-control"
                    maxLength="1"
                    value={this.state.data.OfficeRoad10}
                    name="OfficeRoad10"
                    id="OfficeRoad10"
                    onKeyDown={event =>
                      this.handleBackspaceKey(
                        event,
                        "#OfficeRoad9",
                        "#OfficeRoad10"
                      )
                    }
                    onChange={this.handleOfficeRoad10}
                  />

                  <input
                    type="text"
                    className="Name-control"
                    maxLength="1"
                    value={this.state.data.OfficeRoad11}
                    name="OfficeRoad11"
                    id="OfficeRoad11"
                    onKeyDown={event =>
                      this.handleBackspaceKey(
                        event,
                        "#OfficeRoad10",
                        "#OfficeRoad11"
                      )
                    }
                    onChange={this.handleOfficeRoad11}
                  />

                  <input
                    type="text"
                    className="Name-control"
                    maxLength="1"
                    value={this.state.data.OfficeRoad12}
                    name="OfficeRoad12"
                    id="OfficeRoad12"
                    onKeyDown={event =>
                      this.handleBackspaceKey(
                        event,
                        "#OfficeRoad11",
                        "#OfficeRoad12"
                      )
                    }
                    onChange={this.handleOfficeRoad12}
                  />

                  <input
                    type="text"
                    className="Name-control"
                    maxLength="1"
                    value={this.state.data.OfficeRoad13}
                    name="OfficeRoad13"
                    id="OfficeRoad13"
                    onKeyDown={event =>
                      this.handleBackspaceKey(
                        event,
                        "#OfficeRoad12",
                        "#OfficeRoad13"
                      )
                    }
                    onChange={this.handleOfficeRoad13}
                  />

                  <input
                    type="text"
                    className="Name-control"
                    maxLength="1"
                    value={this.state.data.OfficeRoad14}
                    name="OfficeRoad14"
                    id="OfficeRoad14"
                    onKeyDown={event =>
                      this.handleBackspaceKey(
                        event,
                        "#OfficeRoad13",
                        "#OfficeRoad14"
                      )
                    }
                    onChange={this.handleOfficeRoad14}
                  />

                  <input
                    type="text"
                    className="Name-control"
                    maxLength="1"
                    value={this.state.data.OfficeRoad15}
                    name="OfficeRoad15"
                    id="OfficeRoad15"
                    onKeyDown={event =>
                      this.handleBackspaceKey(
                        event,
                        "#OfficeRoad14",
                        "#OfficeRoad15"
                      )
                    }
                    onChange={this.handleOfficeRoad15}
                  />

                  <input
                    type="text"
                    className="Name-control"
                    maxLength="1"
                    value={this.state.data.OfficeRoad16}
                    name="OfficeRoad16"
                    id="OfficeRoad16"
                    onKeyDown={event =>
                      this.handleBackspaceKey(
                        event,
                        "#OfficeRoad15",
                        "#OfficeRoad16"
                      )
                    }
                    onChange={this.handleOfficeRoad16}
                  />

                  <input
                    type="text"
                    className="Name-control"
                    maxLength="1"
                    value={this.state.data.OfficeRoad17}
                    name="OfficeRoad17"
                    id="OfficeRoad17"
                    onKeyDown={event =>
                      this.handleBackspaceKey(
                        event,
                        "#OfficeRoad16",
                        "#OfficeRoad17"
                      )
                    }
                    onChange={this.handleOfficeRoad17}
                  />

                  <input
                    type="text"
                    className="Name-control"
                    maxLength="1"
                    value={this.state.data.OfficeRoad18}
                    name="OfficeRoad18"
                    id="OfficeRoad18"
                    onKeyDown={event =>
                      this.handleBackspaceKey(
                        event,
                        "#OfficeRoad17",
                        "#OfficeRoad18"
                      )
                    }
                    onChange={this.handleOfficeRoad18}
                  />

                  <input
                    type="text"
                    className="Name-control"
                    maxLength="1"
                    value={this.state.data.OfficeRoad19}
                    name="OfficeRoad19"
                    id="OfficeRoad19"
                    onKeyDown={event =>
                      this.handleBackspaceKey(
                        event,
                        "#OfficeRoad18",
                        "#OfficeRoad19"
                      )
                    }
                    onChange={this.handleOfficeRoad19}
                  />

                  <input
                    type="text"
                    className="Name-control"
                    maxLength="1"
                    value={this.state.data.OfficeRoad20}
                    name="OfficeRoad20"
                    id="OfficeRoad20"
                    onKeyDown={event =>
                      this.handleBackspaceKey(
                        event,
                        "#OfficeRoad19",
                        "#OfficeRoad20"
                      )
                    }
                    onChange={this.handleOfficeRoad20}
                  />

                  <input
                    type="text"
                    className="Name-control"
                    maxLength="1"
                    value={this.state.data.OfficeRoad21}
                    name="OfficeRoad21"
                    id="OfficeRoad21"
                    onKeyDown={event =>
                      this.handleBackspaceKey(
                        event,
                        "#OfficeRoad20",
                        "#OfficeRoad21"
                      )
                    }
                    onChange={this.handleOfficeRoad21}
                  />

                  <input
                    type="text"
                    className="Name-control"
                    maxLength="1"
                    value={this.state.data.OfficeRoad22}
                    name="OfficeRoad22"
                    id="OfficeRoad22"
                    onKeyDown={event =>
                      this.handleBackspaceKey(
                        event,
                        "#OfficeRoad21",
                        "#OfficeRoad22"
                      )
                    }
                    onChange={this.handleOfficeRoad22}
                  />

                  <input
                    type="text"
                    className="Name-control"
                    maxLength="1"
                    value={this.state.data.OfficeRoad23}
                    name="OfficeRoad23"
                    id="OfficeRoad23"
                    onKeyDown={event =>
                      this.handleBackspaceKey(
                        event,
                        "#OfficeRoad22",
                        "#OfficeRoad23"
                      )
                    }
                    onChange={this.handleOfficeRoad23}
                  />

                  <input
                    type="text"
                    className="Name-control"
                    maxLength="1"
                    value={this.state.data.OfficeRoad24}
                    name="OfficeRoad24"
                    id="OfficeRoad24"
                    onKeyDown={event =>
                      this.handleBackspaceKey(
                        event,
                        "#OfficeRoad23",
                        "#OfficeRoad24"
                      )
                    }
                    onChange={this.handleOfficeRoad24}
                  />

                  <input
                    type="text"
                    className="Name-control"
                    maxLength="1"
                    value={this.state.data.OfficeRoad25}
                    name="OfficeRoad25"
                    id="OfficeRoad25"
                    onKeyDown={event =>
                      this.handleBackspaceKey(
                        event,
                        "#OfficeRoad24",
                        "#OfficeRoad25"
                      )
                    }
                    onChange={this.handleOfficeRoad25}
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
                      <label
                        className="tooltiptext tooltiptextLabel"
                        style={{ width: "450px", height: "20px" }}
                      >
                        Please enter combinations of alphabet, numbers
                      </label>
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
                    value={this.state.data.OfficeArea1}
                    name="OfficeArea1"
                    id="OfficeArea1"
                    onKeyDown={event =>
                      this.handleBackspaceKey(
                        event,
                        "#OfficeArea1",
                        "#OfficeArea1"
                      )
                    }
                    onChange={this.handleOfficeArea1}
                  />

                  <input
                    type="text"
                    className="Name-control"
                    maxLength="1"
                    value={this.state.data.OfficeArea2}
                    name="OfficeArea2"
                    id="OfficeArea2"
                    onKeyDown={event =>
                      this.handleBackspaceKey(
                        event,
                        "#OfficeArea1",
                        "#OfficeArea2"
                      )
                    }
                    onChange={this.handleOfficeArea2}
                  />

                  <input
                    type="text"
                    className="Name-control"
                    maxLength="1"
                    value={this.state.data.OfficeArea3}
                    name="OfficeArea3"
                    id="OfficeArea3"
                    onKeyDown={event =>
                      this.handleBackspaceKey(
                        event,
                        "#OfficeArea2",
                        "#OfficeArea3"
                      )
                    }
                    onChange={this.handleOfficeArea3}
                  />

                  <input
                    type="text"
                    className="Name-control"
                    maxLength="1"
                    value={this.state.data.OfficeArea4}
                    name="OfficeArea4"
                    id="OfficeArea4"
                    onKeyDown={event =>
                      this.handleBackspaceKey(
                        event,
                        "#OfficeArea3",
                        "#OfficeArea4"
                      )
                    }
                    onChange={this.handleOfficeArea4}
                  />

                  <input
                    type="text"
                    className="Name-control"
                    maxLength="1"
                    value={this.state.data.OfficeArea5}
                    name="OfficeArea5"
                    id="OfficeArea5"
                    onKeyDown={event =>
                      this.handleBackspaceKey(
                        event,
                        "#OfficeArea4",
                        "#OfficeArea5"
                      )
                    }
                    onChange={this.handleOfficeArea5}
                  />

                  <input
                    type="text"
                    className="Name-control"
                    maxLength="1"
                    value={this.state.data.OfficeArea6}
                    name="OfficeArea6"
                    id="OfficeArea6"
                    onKeyDown={event =>
                      this.handleBackspaceKey(
                        event,
                        "#OfficeArea5",
                        "#OfficeArea6"
                      )
                    }
                    onChange={this.handleOfficeArea6}
                  />

                  <input
                    type="text"
                    className="Name-control"
                    maxLength="1"
                    value={this.state.data.OfficeArea7}
                    name="OfficeArea7"
                    id="OfficeArea7"
                    onKeyDown={event =>
                      this.handleBackspaceKey(
                        event,
                        "#OfficeArea6",
                        "#OfficeArea7"
                      )
                    }
                    onChange={this.handleOfficeArea7}
                  />

                  <input
                    type="text"
                    className="Name-control"
                    maxLength="1"
                    value={this.state.data.OfficeArea8}
                    name="OfficeArea8"
                    id="OfficeArea8"
                    onKeyDown={event =>
                      this.handleBackspaceKey(
                        event,
                        "#OfficeArea7",
                        "#OfficeArea8"
                      )
                    }
                    onChange={this.handleOfficeArea8}
                  />

                  <input
                    type="text"
                    className="Name-control"
                    maxLength="1"
                    value={this.state.data.OfficeArea9}
                    name="OfficeArea9"
                    id="OfficeArea9"
                    onKeyDown={event =>
                      this.handleBackspaceKey(
                        event,
                        "#OfficeArea8",
                        "#OfficeArea9"
                      )
                    }
                    onChange={this.handleOfficeArea9}
                  />

                  <input
                    type="text"
                    className="Name-control"
                    maxLength="1"
                    value={this.state.data.OfficeArea10}
                    name="OfficeArea10"
                    id="OfficeArea10"
                    onKeyDown={event =>
                      this.handleBackspaceKey(
                        event,
                        "#OfficeArea9",
                        "#OfficeArea10"
                      )
                    }
                    onChange={this.handleOfficeArea10}
                  />

                  <input
                    type="text"
                    className="Name-control"
                    maxLength="1"
                    value={this.state.data.OfficeArea11}
                    name="OfficeArea11"
                    id="OfficeArea11"
                    onKeyDown={event =>
                      this.handleBackspaceKey(
                        event,
                        "#OfficeArea10",
                        "#OfficeArea11"
                      )
                    }
                    onChange={this.handleOfficeArea11}
                  />

                  <input
                    type="text"
                    className="Name-control"
                    maxLength="1"
                    value={this.state.data.OfficeArea12}
                    name="OfficeArea12"
                    id="OfficeArea12"
                    onKeyDown={event =>
                      this.handleBackspaceKey(
                        event,
                        "#OfficeArea11",
                        "#OfficeArea12"
                      )
                    }
                    onChange={this.handleOfficeArea12}
                  />

                  <input
                    type="text"
                    className="Name-control"
                    maxLength="1"
                    value={this.state.data.OfficeArea13}
                    name="OfficeArea13"
                    id="OfficeArea13"
                    onKeyDown={event =>
                      this.handleBackspaceKey(
                        event,
                        "#OfficeArea12",
                        "#OfficeArea13"
                      )
                    }
                    onChange={this.handleOfficeArea13}
                  />

                  <input
                    type="text"
                    className="Name-control"
                    maxLength="1"
                    value={this.state.data.OfficeArea14}
                    name="OfficeArea14"
                    id="OfficeArea14"
                    onKeyDown={event =>
                      this.handleBackspaceKey(
                        event,
                        "#OfficeArea13",
                        "#OfficeArea14"
                      )
                    }
                    onChange={this.handleOfficeArea14}
                  />

                  <input
                    type="text"
                    className="Name-control"
                    maxLength="1"
                    value={this.state.data.OfficeArea15}
                    name="OfficeArea15"
                    id="OfficeArea15"
                    onKeyDown={event =>
                      this.handleBackspaceKey(
                        event,
                        "#OfficeArea14",
                        "#OfficeArea15"
                      )
                    }
                    onChange={this.handleOfficeArea15}
                  />

                  <input
                    type="text"
                    className="Name-control"
                    maxLength="1"
                    value={this.state.data.OfficeArea16}
                    name="OfficeArea16"
                    id="OfficeArea16"
                    onKeyDown={event =>
                      this.handleBackspaceKey(
                        event,
                        "#OfficeArea15",
                        "#OfficeArea16"
                      )
                    }
                    onChange={this.handleOfficeArea16}
                  />

                  <input
                    type="text"
                    className="Name-control"
                    maxLength="1"
                    value={this.state.data.OfficeArea17}
                    name="OfficeArea17"
                    id="OfficeArea17"
                    onKeyDown={event =>
                      this.handleBackspaceKey(
                        event,
                        "#OfficeArea16",
                        "#OfficeArea17"
                      )
                    }
                    onChange={this.handleOfficeArea17}
                  />

                  <input
                    type="text"
                    className="Name-control"
                    maxLength="1"
                    value={this.state.data.OfficeArea18}
                    name="OfficeArea18"
                    id="OfficeArea18"
                    onKeyDown={event =>
                      this.handleBackspaceKey(
                        event,
                        "#OfficeArea17",
                        "#OfficeArea18"
                      )
                    }
                    onChange={this.handleOfficeArea18}
                  />

                  <input
                    type="text"
                    className="Name-control"
                    maxLength="1"
                    value={this.state.data.OfficeArea19}
                    name="OfficeArea19"
                    id="OfficeArea19"
                    onKeyDown={event =>
                      this.handleBackspaceKey(
                        event,
                        "#OfficeArea18",
                        "#OfficeArea19"
                      )
                    }
                    onChange={this.handleOfficeArea19}
                  />

                  <input
                    type="text"
                    className="Name-control"
                    maxLength="1"
                    value={this.state.data.OfficeArea20}
                    name="OfficeArea20"
                    id="OfficeArea20"
                    onKeyDown={event =>
                      this.handleBackspaceKey(
                        event,
                        "#OfficeArea19",
                        "#OfficeArea20"
                      )
                    }
                    onChange={this.handleOfficeArea20}
                  />

                  <input
                    type="text"
                    className="Name-control"
                    maxLength="1"
                    value={this.state.data.OfficeArea21}
                    name="OfficeArea21"
                    id="OfficeArea21"
                    onKeyDown={event =>
                      this.handleBackspaceKey(
                        event,
                        "#OfficeArea20",
                        "#OfficeArea21"
                      )
                    }
                    onChange={this.handleOfficeArea21}
                  />

                  <input
                    type="text"
                    className="Name-control"
                    maxLength="1"
                    value={this.state.data.OfficeArea22}
                    name="OfficeArea22"
                    id="OfficeArea22"
                    onKeyDown={event =>
                      this.handleBackspaceKey(
                        event,
                        "#OfficeArea21",
                        "#OfficeArea22"
                      )
                    }
                    onChange={this.handleOfficeArea22}
                  />

                  <input
                    type="text"
                    className="Name-control"
                    maxLength="1"
                    value={this.state.data.OfficeArea23}
                    name="OfficeArea23"
                    id="OfficeArea23"
                    onKeyDown={event =>
                      this.handleBackspaceKey(
                        event,
                        "#OfficeArea22",
                        "#OfficeArea23"
                      )
                    }
                    onChange={this.handleOfficeArea23}
                  />

                  <input
                    type="text"
                    className="Name-control"
                    maxLength="1"
                    value={this.state.data.OfficeArea24}
                    name="OfficeArea24"
                    id="OfficeArea24"
                    onKeyDown={event =>
                      this.handleBackspaceKey(
                        event,
                        "#OfficeArea23",
                        "#OfficeArea24"
                      )
                    }
                    onChange={this.handleOfficeArea24}
                  />

                  <input
                    type="text"
                    className="Name-control"
                    maxLength="1"
                    value={this.state.data.OfficeArea25}
                    name="OfficeArea25"
                    id="OfficeArea25"
                    onKeyDown={event =>
                      this.handleBackspaceKey(
                        event,
                        "#OfficeArea24",
                        "#OfficeArea25"
                      )
                    }
                    onChange={this.handleOfficeArea25}
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
                      <label
                        className="tooltiptext tooltiptextLabel"
                        style={{ width: "450px", height: "20px" }}
                      >
                        Please enter only alphabet
                      </label>
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
                    value={this.state.data.OfficeTown1}
                    name="OfficeTown1"
                    id="OfficeTown1"
                    onKeyDown={event =>
                      this.handleBackspaceKey(
                        event,
                        "#OfficeTown1",
                        "#OfficeTown1"
                      )
                    }
                    onChange={this.handleOfficeTown1}
                  />

                  <input
                    type="text"
                    className="Name-control"
                    maxLength="1"
                    value={this.state.data.OfficeTown2}
                    name="OfficeTown2"
                    id="OfficeTown2"
                    onKeyDown={event =>
                      this.handleBackspaceKey(
                        event,
                        "#OfficeTown1",
                        "#OfficeTown2"
                      )
                    }
                    onChange={this.handleOfficeTown2}
                  />

                  <input
                    type="text"
                    className="Name-control"
                    maxLength="1"
                    value={this.state.data.OfficeTown3}
                    name="OfficeTown3"
                    id="OfficeTown3"
                    onKeyDown={event =>
                      this.handleBackspaceKey(
                        event,
                        "#OfficeTown2",
                        "#OfficeTown3"
                      )
                    }
                    onChange={this.handleOfficeTown3}
                  />

                  <input
                    type="text"
                    className="Name-control"
                    maxLength="1"
                    value={this.state.data.OfficeTown4}
                    name="OfficeTown4"
                    id="OfficeTown4"
                    onKeyDown={event =>
                      this.handleBackspaceKey(
                        event,
                        "#OfficeTown3",
                        "#OfficeTown4"
                      )
                    }
                    onChange={this.handleOfficeTown4}
                  />

                  <input
                    type="text"
                    className="Name-control"
                    maxLength="1"
                    value={this.state.data.OfficeTown5}
                    name="OfficeTown5"
                    id="OfficeTown5"
                    onKeyDown={event =>
                      this.handleBackspaceKey(
                        event,
                        "#OfficeTown4",
                        "#OfficeTown5"
                      )
                    }
                    onChange={this.handleOfficeTown5}
                  />

                  <input
                    type="text"
                    className="Name-control"
                    maxLength="1"
                    value={this.state.data.OfficeTown6}
                    name="OfficeTown6"
                    id="OfficeTown6"
                    onKeyDown={event =>
                      this.handleBackspaceKey(
                        event,
                        "#OfficeTown5",
                        "#OfficeTown6"
                      )
                    }
                    onChange={this.handleOfficeTown6}
                  />

                  <input
                    type="text"
                    className="Name-control"
                    maxLength="1"
                    value={this.state.data.OfficeTown7}
                    name="OfficeTown7"
                    id="OfficeTown7"
                    onKeyDown={event =>
                      this.handleBackspaceKey(
                        event,
                        "#OfficeTown6",
                        "#OfficeTown7"
                      )
                    }
                    onChange={this.handleOfficeTown7}
                  />

                  <input
                    type="text"
                    className="Name-control"
                    maxLength="1"
                    value={this.state.data.OfficeTown8}
                    name="OfficeTown8"
                    id="OfficeTown8"
                    onKeyDown={event =>
                      this.handleBackspaceKey(
                        event,
                        "#OfficeTown7",
                        "#OfficeTown8"
                      )
                    }
                    onChange={this.handleOfficeTown8}
                  />

                  <input
                    type="text"
                    className="Name-control"
                    maxLength="1"
                    value={this.state.data.OfficeTown9}
                    name="OfficeTown9"
                    id="OfficeTown9"
                    onKeyDown={event =>
                      this.handleBackspaceKey(
                        event,
                        "#OfficeTown8",
                        "#OfficeTown9"
                      )
                    }
                    onChange={this.handleOfficeTown9}
                  />

                  <input
                    type="text"
                    className="Name-control"
                    maxLength="1"
                    value={this.state.data.OfficeTown10}
                    name="OfficeTown10"
                    id="OfficeTown10"
                    onKeyDown={event =>
                      this.handleBackspaceKey(
                        event,
                        "#OfficeTown9",
                        "#OfficeTown10"
                      )
                    }
                    onChange={this.handleOfficeTown10}
                  />

                  <input
                    type="text"
                    className="Name-control"
                    maxLength="1"
                    value={this.state.data.OfficeTown11}
                    name="OfficeTown11"
                    id="OfficeTown11"
                    onKeyDown={event =>
                      this.handleBackspaceKey(
                        event,
                        "#OfficeTown10",
                        "#OfficeTown11"
                      )
                    }
                    onChange={this.handleOfficeTown11}
                  />

                  <input
                    type="text"
                    className="Name-control"
                    maxLength="1"
                    value={this.state.data.OfficeTown12}
                    name="OfficeTown12"
                    id="OfficeTown12"
                    onKeyDown={event =>
                      this.handleBackspaceKey(
                        event,
                        "#OfficeTown11",
                        "#OfficeTown12"
                      )
                    }
                    onChange={this.handleOfficeTown12}
                  />

                  <input
                    type="text"
                    className="Name-control"
                    maxLength="1"
                    value={this.state.data.OfficeTown13}
                    name="OfficeTown13"
                    id="OfficeTown13"
                    onKeyDown={event =>
                      this.handleBackspaceKey(
                        event,
                        "#OfficeTown12",
                        "#OfficeTown13"
                      )
                    }
                    onChange={this.handleOfficeTown13}
                  />

                  <input
                    type="text"
                    className="Name-control"
                    maxLength="1"
                    value={this.state.data.OfficeTown14}
                    name="OfficeTown14"
                    id="OfficeTown14"
                    onKeyDown={event =>
                      this.handleBackspaceKey(
                        event,
                        "#OfficeTown13",
                        "#OfficeTown14"
                      )
                    }
                    onChange={this.handleOfficeTown14}
                  />

                  <input
                    type="text"
                    className="Name-control"
                    maxLength="1"
                    value={this.state.data.OfficeTown15}
                    name="OfficeTown15"
                    id="OfficeTown15"
                    onKeyDown={event =>
                      this.handleBackspaceKey(
                        event,
                        "#OfficeTown14",
                        "#OfficeTown15"
                      )
                    }
                    onChange={this.handleOfficeTown15}
                  />

                  <input
                    type="text"
                    className="Name-control"
                    maxLength="1"
                    value={this.state.data.OfficeTown16}
                    name="OfficeTown16"
                    id="OfficeTown16"
                    onKeyDown={event =>
                      this.handleBackspaceKey(
                        event,
                        "#OfficeTown15",
                        "#OfficeTown16"
                      )
                    }
                    onChange={this.handleOfficeTown16}
                  />

                  <input
                    type="text"
                    className="Name-control"
                    maxLength="1"
                    value={this.state.data.OfficeTown17}
                    name="OfficeTown17"
                    id="OfficeTown17"
                    onKeyDown={event =>
                      this.handleBackspaceKey(
                        event,
                        "#OfficeTown16",
                        "#OfficeTown17"
                      )
                    }
                    onChange={this.handleOfficeTown17}
                  />

                  <input
                    type="text"
                    className="Name-control"
                    maxLength="1"
                    value={this.state.data.OfficeTown18}
                    name="OfficeTown18"
                    id="OfficeTown18"
                    onKeyDown={event =>
                      this.handleBackspaceKey(
                        event,
                        "#OfficeTown17",
                        "#OfficeTown18"
                      )
                    }
                    onChange={this.handleOfficeTown18}
                  />

                  <input
                    type="text"
                    className="Name-control"
                    maxLength="1"
                    value={this.state.data.OfficeTown19}
                    name="OfficeTown19"
                    id="OfficeTown19"
                    onKeyDown={event =>
                      this.handleBackspaceKey(
                        event,
                        "#OfficeTown18",
                        "#OfficeTown19"
                      )
                    }
                    onChange={this.handleOfficeTown19}
                  />

                  <input
                    type="text"
                    className="Name-control"
                    maxLength="1"
                    value={this.state.data.OfficeTown20}
                    name="OfficeTown20"
                    id="OfficeTown20"
                    onKeyDown={event =>
                      this.handleBackspaceKey(
                        event,
                        "#OfficeTown19",
                        "#OfficeTown20"
                      )
                    }
                    onChange={this.handleOfficeTown20}
                  />

                  <input
                    type="text"
                    className="Name-control"
                    maxLength="1"
                    value={this.state.data.OfficeTown21}
                    name="OfficeTown21"
                    id="OfficeTown21"
                    onKeyDown={event =>
                      this.handleBackspaceKey(
                        event,
                        "#OfficeTown20",
                        "#OfficeTown21"
                      )
                    }
                    onChange={this.handleOfficeTown21}
                  />

                  <input
                    type="text"
                    className="Name-control"
                    maxLength="1"
                    value={this.state.data.OfficeTown22}
                    name="OfficeTown22"
                    id="OfficeTown22"
                    onKeyDown={event =>
                      this.handleBackspaceKey(
                        event,
                        "#OfficeTown21",
                        "#OfficeTown22"
                      )
                    }
                    onChange={this.handleOfficeTown22}
                  />

                  <input
                    type="text"
                    className="Name-control"
                    maxLength="1"
                    value={this.state.data.OfficeTown23}
                    name="OfficeTown23"
                    id="OfficeTown23"
                    onKeyDown={event =>
                      this.handleBackspaceKey(
                        event,
                        "#OfficeTown22",
                        "#OfficeTown23"
                      )
                    }
                    onChange={this.handleOfficeTown23}
                  />

                  <input
                    type="text"
                    className="Name-control"
                    maxLength="1"
                    value={this.state.data.OfficeTown24}
                    name="OfficeTown24"
                    id="OfficeTown24"
                    onKeyDown={event =>
                      this.handleBackspaceKey(
                        event,
                        "#OfficeTown23",
                        "#OfficeTown24"
                      )
                    }
                    onChange={this.handleOfficeTown24}
                  />

                  <input
                    type="text"
                    className="Name-control"
                    maxLength="1"
                    value={this.state.data.OfficeTown25}
                    name="OfficeTown25"
                    id="OfficeTown25"
                    onKeyDown={event =>
                      this.handleBackspaceKey(
                        event,
                        "#OfficeTown24",
                        "#OfficeTown25"
                      )
                    }
                    onChange={this.handleOfficeTown25}
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
                      <label
                        className="tooltiptext tooltiptextLabel"
                        style={{ width: "450px", height: "20px" }}
                      >
                        Please enter only alphabet
                      </label>
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
        <label className="StateId"> State / Union Territory </label>
        <label className="PincodeId"> Pincode / Zip code </label>
        <label className="CountryId"> Country Name </label> <br />
        <input
          className="StateValue"
          name="OfficeState"
          id="OfficeState"
          value={this.state.data.OfficeState}
          onChange={event => this.handleOfficeState(event)}
        />
        <input
          type="text"
          className="Pincode-control"
          maxLength="1"
          value={this.state.data.OfficePincode1}
          name="OfficePincode1"
          id="OfficePincode1"
          onKeyDown={event =>
            this.handleBackspaceKey(event, "#OfficePincode1", "#OfficePincode1")
          }
          onChange={this.handleOfficePincode1}
        />
        <input
          type="text"
          className="Pincode-control"
          maxLength="1"
          value={this.state.data.OfficePincode2}
          name="OfficePincode2"
          id="OfficePincode2"
          onKeyDown={event =>
            this.handleBackspaceKey(event, "#OfficePincode1", "#OfficePincode2")
          }
          onChange={this.handleOfficePincode2}
        />
        <input
          type="text"
          className="Pincode-control"
          maxLength="1"
          value={this.state.data.OfficePincode3}
          name="OfficePincode3"
          id="OfficePincode3"
          onKeyDown={event =>
            this.handleBackspaceKey(event, "#OfficePincode2", "#OfficePincode3")
          }
          onChange={this.handleOfficePincode3}
        />
        <input
          type="text"
          className="Pincode-control"
          maxLength="1"
          value={this.state.data.OfficePincode4}
          name="OfficePincode4"
          id="OfficePincode4"
          onKeyDown={event =>
            this.handleBackspaceKey(event, "#OfficePincode3", "#OfficePincode4")
          }
          onChange={this.handleOfficePincode4}
        />
        <input
          type="text"
          className="Pincode-control"
          maxLength="1"
          value={this.state.data.OfficePincode5}
          name="OfficePincode5"
          id="OfficePincode5"
          onKeyDown={event =>
            this.handleBackspaceKey(event, "#OfficePincode4", "#OfficePincode5")
          }
          onChange={this.handleOfficePincode5}
        />
        <input
          type="text"
          className="Pincode-control"
          maxLength="1"
          value={this.state.data.OfficePincode6}
          name="OfficePincode6"
          id="OfficePincode6"
          onKeyDown={event =>
            this.handleBackspaceKey(event, "#OfficePincode5", "#OfficePincode6")
          }
          onChange={this.handleOfficePincode6}
        />
        <input
          type="text"
          className="Pincode-control"
          maxLength="1"
          value={this.state.data.OfficePincode7}
          name="OfficePincode7"
          id="OfficePincode7"
          onKeyDown={event =>
            this.handleBackspaceKey(event, "#OfficePincode6", "#OfficePincode7")
          }
          onChange={this.handleOfficePincode7}
        />
        <input
          className="CountryValue"
          name="OfficeCountry"
          id="OfficeCountry"
          value={this.state.data.OfficeCountry}
          onChange={event => this.handleOfficeCountry(event)}
        />
        {this.state.isIndicatorEnabled === false ? (
          <span className="tooltip">
            <img
              src={indicator}
              alt="img"
              style={{
                width: "2.3%",
                height: "2.3% ",
                float: "right",
                marginRight: "1%"
              }}
            />
            <label
              className="tooltiptext tooltiptextLabel tooltiptextCountry"
              style={{ width: "450px", height: "20px" }}
            >
              Please enter as applicable
            </label>
          </span>
        ) : (
          ""
        )}
        <div className="ColouredLabel">
          <label>&nbsp;&nbsp; 8 &nbsp; Address for Communication</label>
          <input
            type="checkbox"
            className="Check Left_space "
            value="Residence"
            id="16"
            name="Communication[6][]"
            onClick={e => this.handleCommunicationCheck(e, "Communication")}
          />
          <label className="Label_with_no_space"> Residence</label> &nbsp;
          &nbsp;
          <input
            type="checkbox"
            className="Check "
            value="Office"
            id="17"
            name="Communication[6][]"
            onClick={e => this.handleCommunicationCheck(e, "Communication")}
          />
          <label className="Label_with_no_space"> Office</label>
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
                  width: "2.4%",
                  height: "87%",
                  float: "right",
                  marginRight: "1%"
                }}
              />
              <img
                src={communicationcheckfield}
                alt="img"
                className="tooltiptext tooltiptextCommunication"
                style={{ width: "600px", height: "50px" }}
              />
            </span>
          ) : (
            ""
          )}
        </div>
        <span className="ErrorMsg">{this.state.errors.Communication}</span>
      </div>
    );
  }
}

export default EigthComponent;
