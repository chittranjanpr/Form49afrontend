import React, { Component } from "react";
import "./Form1.css";
import "./Panmain.css";
import $ from "jquery";
import indicator from "./instuction.png";

class SeventhComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      addressTwo: [
        "Flat / Room / Door / Block No.",
        "Name of Premises / Building / Village",
        "Road / Street / Lane / Post Office",
        "Area / Locality / Taluka / Sub-Division",
        "Town / City / District"
      ],

      isModalEnabled: false,
      isIndicatorEnabled: false,

      errors: {
        ResidenceFlat: "",
        ResidencePremises: "",
        ResidenceRoad: "",
        ResidenceArea: "",
        ResidenceTown: "",
        ResidenceState: "",
        ResidencePincode: "",
        ResidenceCountry: "",
        errorid: "1"
      },
      data: {
        ResidenceFlat1: "",
        ResidenceFlat2: "",
        ResidenceFlat3: "",
        ResidenceFlat4: "",
        ResidenceFlat5: "",
        ResidenceFlat6: "",
        ResidenceFlat7: "",
        ResidenceFlat8: "",
        ResidenceFlat9: "",
        ResidenceFlat10: "",
        ResidenceFlat11: "",
        ResidenceFlat12: "",
        ResidenceFlat13: "",
        ResidenceFlat14: "",
        ResidenceFlat15: "",
        ResidenceFlat16: "",
        ResidenceFlat17: "",
        ResidenceFlat18: "",
        ResidenceFlat19: "",
        ResidenceFlat20: "",
        ResidenceFlat21: "",
        ResidenceFlat22: "",
        ResidenceFlat23: "",
        ResidenceFlat24: "",
        ResidenceFlat25: "",
        ResidenceFlat: "",
        ResidencePremises1: "",
        ResidencePremises2: "",
        ResidencePremises3: "",
        ResidencePremises4: "",
        ResidencePremises5: "",
        ResidencePremises6: "",
        ResidencePremises7: "",
        ResidencePremises8: "",
        ResidencePremises9: "",
        ResidencePremises10: "",
        ResidencePremises11: "",
        ResidencePremises12: "",
        ResidencePremises13: "",
        ResidencePremises14: "",
        ResidencePremises15: "",
        ResidencePremises16: "",
        ResidencePremises17: "",
        ResidencePremises18: "",
        ResidencePremises19: "",
        ResidencePremises20: "",
        ResidencePremises21: "",
        ResidencePremises22: "",
        ResidencePremises23: "",
        ResidencePremises24: "",
        ResidencePremises25: "",
        ResidencePremises: "",
        ResidenceRoad1: "",
        ResidenceRoad2: "",
        ResidenceRoad3: "",
        ResidenceRoad4: "",
        ResidenceRoad5: "",
        ResidenceRoad6: "",
        ResidenceRoad7: "",
        ResidenceRoad8: "",
        ResidenceRoad9: "",
        ResidenceRoad10: "",
        ResidenceRoad11: "",
        ResidenceRoad12: "",
        ResidenceRoad13: "",
        ResidenceRoad14: "",
        ResidenceRoad15: "",
        ResidenceRoad16: "",
        ResidenceRoad17: "",
        ResidenceRoad18: "",
        ResidenceRoad19: "",
        ResidenceRoad20: "",
        ResidenceRoad21: "",
        ResidenceRoad22: "",
        ResidenceRoad23: "",
        ResidenceRoad24: "",
        ResidenceRoad25: "",
        ResidenceRoad: "",
        ResidenceArea1: "",
        ResidenceArea2: "",
        ResidenceArea3: "",
        ResidenceArea4: "",
        ResidenceArea5: "",
        ResidenceArea6: "",
        ResidenceArea7: "",
        ResidenceArea8: "",
        ResidenceArea9: "",
        ResidenceArea10: "",
        ResidenceArea11: "",
        ResidenceArea12: "",
        ResidenceArea13: "",
        ResidenceArea14: "",
        ResidenceArea15: "",
        ResidenceArea16: "",
        ResidenceArea17: "",
        ResidenceArea18: "",
        ResidenceArea19: "",
        ResidenceArea20: "",
        ResidenceArea21: "",
        ResidenceArea22: "",
        ResidenceArea23: "",
        ResidenceArea24: "",
        ResidenceArea25: "",
        ResidenceArea: "",
        ResidenceTown1: "",
        ResidenceTown2: "",
        ResidenceTown3: "",
        ResidenceTown4: "",
        ResidenceTown5: "",
        ResidenceTown6: "",
        ResidenceTown7: "",
        ResidenceTown8: "",
        ResidenceTown9: "",
        ResidenceTown10: "",
        ResidenceTown11: "",
        ResidenceTown12: "",
        ResidenceTown13: "",
        ResidenceTown14: "",
        ResidenceTown15: "",
        ResidenceTown16: "",
        ResidenceTown17: "",
        ResidenceTown18: "",
        ResidenceTown19: "",
        ResidenceTown20: "",
        ResidenceTown21: "",
        ResidenceTown22: "",
        ResidenceTown23: "",
        ResidenceTown24: "",
        ResidenceTown25: "",
        ResidenceTown: "",
        ResidenceState: "",
        ResidencePincode1: "",
        ResidencePincode2: "",
        ResidencePincode3: "",
        ResidencePincode4: "",
        ResidencePincode5: "",
        ResidencePincode6: "",
        ResidencePincode7: "",
        ResidencePincode: "",
        ResidenceCountry: ""
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

  handleResidenceFlat1 = event => {
    this.handleInput(event);
    this.validateResidenceFlat(event);
    event.target.value === ""
      ? $("#ResidenceFlat1").focus()
      : $("#ResidenceFlat2").focus();
  };

  handleResidenceFlat2 = event => {
    this.handleInput(event);
    this.validateResidenceFlat(event);
    event.target.value === ""
      ? $("#ResidenceFlat2").focus()
      : $("#ResidenceFlat3").focus();
  };

  handleResidenceFlat3 = event => {
    this.handleInput(event);
    this.validateResidenceFlat(event);
    event.target.value === ""
      ? $("#ResidenceFlat3").focus()
      : $("#ResidenceFlat4").focus();
  };

  handleResidenceFlat4 = event => {
    this.handleInput(event);
    this.validateResidenceFlat(event);
    event.target.value === ""
      ? $("#ResidenceFlat4").focus()
      : $("#ResidenceFlat5").focus();
  };

  handleResidenceFlat5 = event => {
    this.handleInput(event);
    this.validateResidenceFlat(event);
    event.target.value === ""
      ? $("#ResidenceFlat5").focus()
      : $("#ResidenceFlat6").focus();
  };

  handleResidenceFlat6 = event => {
    this.handleInput(event);
    this.validateResidenceFlat(event);
    event.target.value === ""
      ? $("#ResidenceFlat6").focus()
      : $("#ResidenceFlat7").focus();
  };

  handleResidenceFlat7 = event => {
    this.handleInput(event);
    this.validateResidenceFlat(event);
    event.target.value === ""
      ? $("#ResidenceFlat7").focus()
      : $("#ResidenceFlat8").focus();
  };

  handleResidenceFlat8 = event => {
    this.handleInput(event);
    this.validateResidenceFlat(event);
    event.target.value === ""
      ? $("#ResidenceFlat8").focus()
      : $("#ResidenceFlat9").focus();
  };

  handleResidenceFlat9 = event => {
    this.handleInput(event);
    this.validateResidenceFlat(event);
    event.target.value === ""
      ? $("#ResidenceFlat9").focus()
      : $("#ResidenceFlat10").focus();
  };

  handleResidenceFlat10 = event => {
    this.handleInput(event);
    this.validateResidenceFlat(event);
    event.target.value === ""
      ? $("#ResidenceFlat10").focus()
      : $("#ResidenceFlat11").focus();
  };

  handleResidenceFlat11 = event => {
    this.handleInput(event);
    this.validateResidenceFlat(event);
    event.target.value === ""
      ? $("#ResidenceFlat11").focus()
      : $("#ResidenceFlat12").focus();
  };

  handleResidenceFlat12 = event => {
    this.handleInput(event);
    this.validateResidenceFlat(event);
    event.target.value === ""
      ? $("#ResidenceFlat12").focus()
      : $("#ResidenceFlat13").focus();
  };

  handleResidenceFlat13 = event => {
    this.handleInput(event);
    this.validateResidenceFlat(event);
    event.target.value === ""
      ? $("#ResidenceFlat13").focus()
      : $("#ResidenceFlat14").focus();
  };

  handleResidenceFlat14 = event => {
    this.handleInput(event);
    this.validateResidenceFlat(event);
    event.target.value === ""
      ? $("#ResidenceFlat14").focus()
      : $("#ResidenceFlat15").focus();
  };

  handleResidenceFlat15 = event => {
    this.handleInput(event);
    this.validateResidenceFlat(event);
    event.target.value === ""
      ? $("#ResidenceFlat15").focus()
      : $("#ResidenceFlat16").focus();
  };

  handleResidenceFlat16 = event => {
    this.handleInput(event);
    this.validateResidenceFlat(event);
    event.target.value === ""
      ? $("#ResidenceFlat16").focus()
      : $("#ResidenceFlat17").focus();
  };

  handleResidenceFlat17 = event => {
    this.handleInput(event);
    this.validateResidenceFlat(event);
    event.target.value === ""
      ? $("#ResidenceFlat17").focus()
      : $("#ResidenceFlat18").focus();
  };

  handleResidenceFlat18 = event => {
    this.handleInput(event);
    this.validateResidenceFlat(event);
    event.target.value === ""
      ? $("#ResidenceFlat18").focus()
      : $("#ResidenceFlat19").focus();
  };

  handleResidenceFlat19 = event => {
    this.handleInput(event);
    this.validateResidenceFlat(event);
    event.target.value === ""
      ? $("#ResidenceFlat19").focus()
      : $("#ResidenceFlat20").focus();
  };

  handleResidenceFlat20 = event => {
    this.handleInput(event);
    this.validateResidenceFlat(event);
    event.target.value === ""
      ? $("#ResidenceFlat20").focus()
      : $("#ResidenceFlat21").focus();
  };

  handleResidenceFlat21 = event => {
    this.handleInput(event);
    this.validateResidenceFlat(event);
    event.target.value === ""
      ? $("#ResidenceFlat21").focus()
      : $("#ResidenceFlat22").focus();
  };

  handleResidenceFlat22 = event => {
    this.handleInput(event);
    this.validateResidenceFlat(event);
    event.target.value === ""
      ? $("#ResidenceFlat22").focus()
      : $("#ResidenceFlat23").focus();
  };

  handleResidenceFlat23 = event => {
    this.handleInput(event);
    this.validateResidenceFlat(event);
    event.target.value === ""
      ? $("#ResidenceFlat23").focus()
      : $("#ResidenceFlat24").focus();
  };

  handleResidenceFlat24 = event => {
    this.handleInput(event);
    this.validateResidenceFlat(event);
    event.target.value === ""
      ? $("#ResidenceFlat24").focus()
      : $("#ResidenceFlat25").focus();
  };

  handleResidenceFlat25 = event => {
    this.handleInput(event);
    this.validateResidenceFlat(event);
    event.target.value === ""
      ? $("#ResidenceFlat25").focus()
      : $("#ResidenceFlat25").focus();
  };

  ResetResidenceFlatError = () => {
    $("#ResidenceFlat1").css({
      "border-top-color": "",
      "border-bottom-color": "",
      "border-left-color": ""
    });
    $("#ResidenceFlat2").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#ResidenceFlat3").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#ResidenceFlat4").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#ResidenceFlat5").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#ResidenceFlat6").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#ResidenceFlat7").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#ResidenceFlat8").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#ResidenceFlat9").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#ResidenceFlat10").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#ResidenceFlat11").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#ResidenceFlat12").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#ResidenceFlat13").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#ResidenceFlat14").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#ResidenceFlat15").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#ResidenceFlat16").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#ResidenceFlat17").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#ResidenceFlat18").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#ResidenceFlat19").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#ResidenceFlat20").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#ResidenceFlat21").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#ResidenceFlat22").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#ResidenceFlat23").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#ResidenceFlat24").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#ResidenceFlat25").css({
      "border-top-color": "",
      "border-bottom-color": "",
      "border-right-color": ""
    });
  };

  HighlightResidenceFlatError = () => {
    $("#ResidenceFlat1").css({
      "border-top-color": "red",
      "border-bottom-color": "red",
      "border-left-color": "red"
    });
    $("#ResidenceFlat2").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#ResidenceFlat3").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#ResidenceFlat4").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#ResidenceFlat5").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#ResidenceFlat6").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#ResidenceFlat7").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#ResidenceFlat8").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#ResidenceFlat9").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#ResidenceFlat10").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#ResidenceFlat11").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#ResidenceFlat12").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#ResidenceFlat13").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#ResidenceFlat14").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#ResidenceFlat15").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#ResidenceFlat16").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#ResidenceFlat17").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#ResidenceFlat18").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#ResidenceFlat19").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#ResidenceFlat20").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#ResidenceFlat21").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#ResidenceFlat22").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#ResidenceFlat23").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#ResidenceFlat24").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#ResidenceFlat25").css({
      "border-top-color": "red",
      "border-bottom-color": "red",
      "border-right-color": "red"
    });
  };

  handleResidencePremises1 = event => {
    this.handleInput(event);
    this.validateResidencePremises(event);
    event.target.value === ""
      ? $("#ResidencePremises1").focus()
      : $("#ResidencePremises2").focus();
  };

  handleResidencePremises2 = event => {
    this.handleInput(event);
    this.validateResidencePremises(event);
    event.target.value === ""
      ? $("#ResidencePremises2").focus()
      : $("#ResidencePremises3").focus();
  };

  handleResidencePremises3 = event => {
    this.handleInput(event);
    this.validateResidencePremises(event);
    event.target.value === ""
      ? $("#ResidencePremises3").focus()
      : $("#ResidencePremises4").focus();
  };

  handleResidencePremises4 = event => {
    this.handleInput(event);
    this.validateResidencePremises(event);
    event.target.value === ""
      ? $("#ResidencePremises4").focus()
      : $("#ResidencePremises5").focus();
  };

  handleResidencePremises5 = event => {
    this.handleInput(event);
    this.validateResidencePremises(event);
    event.target.value === ""
      ? $("#ResidencePremises5").focus()
      : $("#ResidencePremises6").focus();
  };

  handleResidencePremises6 = event => {
    this.handleInput(event);
    this.validateResidencePremises(event);
    event.target.value === ""
      ? $("#ResidencePremises6").focus()
      : $("#ResidencePremises7").focus();
  };

  handleResidencePremises7 = event => {
    this.handleInput(event);
    this.validateResidencePremises(event);
    event.target.value === ""
      ? $("#ResidencePremises7").focus()
      : $("#ResidencePremises8").focus();
  };

  handleResidencePremises8 = event => {
    this.handleInput(event);
    this.validateResidencePremises(event);
    event.target.value === ""
      ? $("#ResidencePremises8").focus()
      : $("#ResidencePremises9").focus();
  };

  handleResidencePremises9 = event => {
    this.handleInput(event);
    this.validateResidencePremises(event);
    event.target.value === ""
      ? $("#ResidencePremises9").focus()
      : $("#ResidencePremises10").focus();
  };

  handleResidencePremises10 = event => {
    this.handleInput(event);
    this.validateResidencePremises(event);
    event.target.value === ""
      ? $("#ResidencePremises10").focus()
      : $("#ResidencePremises11").focus();
  };

  handleResidencePremises11 = event => {
    this.handleInput(event);
    this.validateResidencePremises(event);
    event.target.value === ""
      ? $("#ResidencePremises11").focus()
      : $("#ResidencePremises12").focus();
  };

  handleResidencePremises12 = event => {
    this.handleInput(event);
    this.validateResidencePremises(event);
    event.target.value === ""
      ? $("#ResidencePremises12").focus()
      : $("#ResidencePremises13").focus();
  };

  handleResidencePremises13 = event => {
    this.handleInput(event);
    this.validateResidencePremises(event);
    event.target.value === ""
      ? $("#ResidencePremises13").focus()
      : $("#ResidencePremises14").focus();
  };

  handleResidencePremises14 = event => {
    this.handleInput(event);
    this.validateResidencePremises(event);
    event.target.value === ""
      ? $("#ResidencePremises14").focus()
      : $("#ResidencePremises15").focus();
  };

  handleResidencePremises15 = event => {
    this.handleInput(event);
    this.validateResidencePremises(event);
    event.target.value === ""
      ? $("#ResidencePremises15").focus()
      : $("#ResidencePremises16").focus();
  };

  handleResidencePremises16 = event => {
    this.handleInput(event);
    this.validateResidencePremises(event);
    event.target.value === ""
      ? $("#ResidencePremises16").focus()
      : $("#ResidencePremises17").focus();
  };

  handleResidencePremises17 = event => {
    this.handleInput(event);
    this.validateResidencePremises(event);
    event.target.value === ""
      ? $("#ResidencePremises17").focus()
      : $("#ResidencePremises18").focus();
  };

  handleResidencePremises18 = event => {
    this.handleInput(event);
    this.validateResidencePremises(event);
    event.target.value === ""
      ? $("#ResidencePremises18").focus()
      : $("#ResidencePremises19").focus();
  };

  handleResidencePremises19 = event => {
    this.handleInput(event);
    this.validateResidencePremises(event);
    event.target.value === ""
      ? $("#ResidencePremises19").focus()
      : $("#ResidencePremises20").focus();
  };

  handleResidencePremises20 = event => {
    this.handleInput(event);
    this.validateResidencePremises(event);
    event.target.value === ""
      ? $("#ResidencePremises20").focus()
      : $("#ResidencePremises21").focus();
  };

  handleResidencePremises21 = event => {
    this.handleInput(event);
    this.validateResidencePremises(event);
    event.target.value === ""
      ? $("#ResidencePremises21").focus()
      : $("#ResidencePremises22").focus();
  };

  handleResidencePremises22 = event => {
    this.handleInput(event);
    this.validateResidencePremises(event);
    event.target.value === ""
      ? $("#ResidencePremises22").focus()
      : $("#ResidencePremises23").focus();
  };

  handleResidencePremises23 = event => {
    this.handleInput(event);
    this.validateResidencePremises(event);
    event.target.value === ""
      ? $("#ResidencePremises23").focus()
      : $("#ResidencePremises24").focus();
  };

  handleResidencePremises24 = event => {
    this.handleInput(event);
    this.validateResidencePremises(event);
    event.target.value === ""
      ? $("#ResidencePremises24").focus()
      : $("#ResidencePremises25").focus();
  };

  handleResidencePremises25 = event => {
    this.handleInput(event);
    this.validateResidencePremises(event);
    event.target.value === ""
      ? $("#ResidencePremises25").focus()
      : $("#ResidencePremises25").focus();
  };

  ResetResidencePremisesError = () => {
    $("#ResidencePremises1").css({
      "border-top-color": "",
      "border-bottom-color": "",
      "border-left-color": ""
    });
    $("#ResidencePremises2").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#ResidencePremises3").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#ResidencePremises4").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#ResidencePremises5").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#ResidencePremises6").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#ResidencePremises7").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#ResidencePremises8").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#ResidencePremises9").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#ResidencePremises10").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#ResidencePremises11").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#ResidencePremises12").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#ResidencePremises13").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#ResidencePremises14").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#ResidencePremises15").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#ResidencePremises16").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#ResidencePremises17").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#ResidencePremises18").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#ResidencePremises19").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#ResidencePremises20").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#ResidencePremises21").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#ResidencePremises22").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#ResidencePremises23").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#ResidencePremises24").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#ResidencePremises25").css({
      "border-top-color": "",
      "border-bottom-color": "",
      "border-right-color": ""
    });
  };

  HighlightResidencePremisesError = () => {
    $("#ResidencePremises1").css({
      "border-top-color": "red",
      "border-bottom-color": "red",
      "border-left-color": "red"
    });
    $("#ResidencePremises2").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#ResidencePremises3").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#ResidencePremises4").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#ResidencePremises5").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#ResidencePremises6").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#ResidencePremises7").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#ResidencePremises8").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#ResidencePremises9").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#ResidencePremises10").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#ResidencePremises11").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#ResidencePremises12").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#ResidencePremises13").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#ResidencePremises14").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#ResidencePremises15").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#ResidencePremises16").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#ResidencePremises17").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#ResidencePremises18").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#ResidencePremises19").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#ResidencePremises20").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#ResidencePremises21").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#ResidencePremises22").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#ResidencePremises23").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#ResidencePremises24").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#ResidencePremises25").css({
      "border-top-color": "red",
      "border-bottom-color": "red",
      "border-right-color": "red"
    });
  };

  handleResidenceRoad1 = event => {
    this.handleInput(event);
    this.validateResidenceRoad(event);
    event.target.value === ""
      ? $("#ResidenceRoad1").focus()
      : $("#ResidenceRoad2").focus();
  };

  handleResidenceRoad2 = event => {
    this.handleInput(event);
    this.validateResidenceRoad(event);
    event.target.value === ""
      ? $("#ResidenceRoad2").focus()
      : $("#ResidenceRoad3").focus();
  };

  handleResidenceRoad3 = event => {
    this.handleInput(event);
    this.validateResidenceRoad(event);
    event.target.value === ""
      ? $("#ResidenceRoad3").focus()
      : $("#ResidenceRoad4").focus();
  };

  handleResidenceRoad4 = event => {
    this.handleInput(event);
    this.validateResidenceRoad(event);
    event.target.value === ""
      ? $("#ResidenceRoad4").focus()
      : $("#ResidenceRoad5").focus();
  };

  handleResidenceRoad5 = event => {
    this.handleInput(event);
    this.validateResidenceRoad(event);
    event.target.value === ""
      ? $("#ResidenceRoad5").focus()
      : $("#ResidenceRoad6").focus();
  };

  handleResidenceRoad6 = event => {
    this.handleInput(event);
    this.validateResidenceRoad(event);
    event.target.value === ""
      ? $("#ResidenceRoad6").focus()
      : $("#ResidenceRoad7").focus();
  };

  handleResidenceRoad7 = event => {
    this.handleInput(event);
    this.validateResidenceRoad(event);
    event.target.value === ""
      ? $("#ResidenceRoad7").focus()
      : $("#ResidenceRoad8").focus();
  };

  handleResidenceRoad8 = event => {
    this.handleInput(event);
    this.validateResidenceRoad(event);
    event.target.value === ""
      ? $("#ResidenceRoad8").focus()
      : $("#ResidenceRoad9").focus();
  };

  handleResidenceRoad9 = event => {
    this.handleInput(event);
    this.validateResidenceRoad(event);
    event.target.value === ""
      ? $("#ResidenceRoad9").focus()
      : $("#ResidenceRoad10").focus();
  };

  handleResidenceRoad10 = event => {
    this.handleInput(event);
    this.validateResidenceRoad(event);
    event.target.value === ""
      ? $("#ResidenceRoad10").focus()
      : $("#ResidenceRoad11").focus();
  };

  handleResidenceRoad11 = event => {
    this.handleInput(event);
    this.validateResidenceRoad(event);
    event.target.value === ""
      ? $("#ResidenceRoad11").focus()
      : $("#ResidenceRoad12").focus();
  };

  handleResidenceRoad12 = event => {
    this.handleInput(event);
    this.validateResidenceRoad(event);
    event.target.value === ""
      ? $("#ResidenceRoad12").focus()
      : $("#ResidenceRoad13").focus();
  };

  handleResidenceRoad13 = event => {
    this.handleInput(event);
    this.validateResidenceRoad(event);
    event.target.value === ""
      ? $("#ResidenceRoad13").focus()
      : $("#ResidenceRoad14").focus();
  };

  handleResidenceRoad14 = event => {
    this.handleInput(event);
    this.validateResidenceRoad(event);
    event.target.value === ""
      ? $("#ResidenceRoad14").focus()
      : $("#ResidenceRoad15").focus();
  };

  handleResidenceRoad15 = event => {
    this.handleInput(event);
    this.validateResidenceRoad(event);
    event.target.value === ""
      ? $("#ResidenceRoad15").focus()
      : $("#ResidenceRoad16").focus();
  };

  handleResidenceRoad16 = event => {
    this.handleInput(event);
    this.validateResidenceRoad(event);
    event.target.value === ""
      ? $("#ResidenceRoad16").focus()
      : $("#ResidenceRoad17").focus();
  };

  handleResidenceRoad17 = event => {
    this.handleInput(event);
    this.validateResidenceRoad(event);
    event.target.value === ""
      ? $("#ResidenceRoad17").focus()
      : $("#ResidenceRoad18").focus();
  };

  handleResidenceRoad18 = event => {
    this.handleInput(event);
    this.validateResidenceRoad(event);
    event.target.value === ""
      ? $("#ResidenceRoad18").focus()
      : $("#ResidenceRoad19").focus();
  };

  handleResidenceRoad19 = event => {
    this.handleInput(event);
    this.validateResidenceRoad(event);
    event.target.value === ""
      ? $("#ResidenceRoad19").focus()
      : $("#ResidenceRoad20").focus();
  };

  handleResidenceRoad20 = event => {
    this.handleInput(event);
    this.validateResidenceRoad(event);
    event.target.value === ""
      ? $("#ResidenceRoad20").focus()
      : $("#ResidenceRoad21").focus();
  };

  handleResidenceRoad21 = event => {
    this.handleInput(event);
    this.validateResidenceRoad(event);
    event.target.value === ""
      ? $("#ResidenceRoad21").focus()
      : $("#ResidenceRoad22").focus();
  };

  handleResidenceRoad22 = event => {
    this.handleInput(event);
    this.validateResidenceRoad(event);
    event.target.value === ""
      ? $("#ResidenceRoad22").focus()
      : $("#ResidenceRoad23").focus();
  };

  handleResidenceRoad23 = event => {
    this.handleInput(event);
    this.validateResidenceRoad(event);
    event.target.value === ""
      ? $("#ResidenceRoad23").focus()
      : $("#ResidenceRoad24").focus();
  };

  handleResidenceRoad24 = event => {
    this.handleInput(event);
    this.validateResidenceRoad(event);
    event.target.value === ""
      ? $("#ResidenceRoad24").focus()
      : $("#ResidenceRoad25").focus();
  };

  handleResidenceRoad25 = event => {
    this.handleInput(event);
    this.validateResidenceRoad(event);
    event.target.value === ""
      ? $("#ResidenceRoad25").focus()
      : $("#ResidenceRoad25").focus();
  };

  ResetResidenceRoadError = () => {
    $("#ResidenceRoad1").css({
      "border-top-color": "",
      "border-bottom-color": "",
      "border-left-color": ""
    });
    $("#ResidenceRoad2").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#ResidenceRoad3").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#ResidenceRoad4").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#ResidenceRoad5").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#ResidenceRoad6").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#ResidenceRoad7").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#ResidenceRoad8").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#ResidenceRoad9").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#ResidenceRoad10").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#ResidenceRoad11").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#ResidenceRoad12").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#ResidenceRoad13").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#ResidenceRoad14").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#ResidenceRoad15").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#ResidenceRoad16").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#ResidenceRoad17").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#ResidenceRoad18").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#ResidenceRoad19").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#ResidenceRoad20").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#ResidenceRoad21").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#ResidenceRoad22").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#ResidenceRoad23").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#ResidenceRoad24").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#ResidenceRoad25").css({
      "border-top-color": "",
      "border-bottom-color": "",
      "border-right-color": ""
    });
  };

  HighlightResidenceRoadError = () => {
    $("#ResidenceRoad1").css({
      "border-top-color": "red",
      "border-bottom-color": "red",
      "border-left-color": "red"
    });
    $("#ResidenceRoad2").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#ResidenceRoad3").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#ResidenceRoad4").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#ResidenceRoad5").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#ResidenceRoad6").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#ResidenceRoad7").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#ResidenceRoad8").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#ResidenceRoad9").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#ResidenceRoad10").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#ResidenceRoad11").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#ResidenceRoad12").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#ResidenceRoad13").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#ResidenceRoad14").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#ResidenceRoad15").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#ResidenceRoad16").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#ResidenceRoad17").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#ResidenceRoad18").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#ResidenceRoad19").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#ResidenceRoad20").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#ResidenceRoad21").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#ResidenceRoad22").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#ResidenceRoad23").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#ResidenceRoad24").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#ResidenceRoad25").css({
      "border-top-color": "red",
      "border-bottom-color": "red",
      "border-right-color": "red"
    });
  };

  handleResidenceArea1 = event => {
    this.handleInput(event);
    this.validateResidenceArea(event);
    event.target.value === ""
      ? $("#ResidenceArea1").focus()
      : $("#ResidenceArea2").focus();
  };

  handleResidenceArea2 = event => {
    this.handleInput(event);
    this.validateResidenceArea(event);
    event.target.value === ""
      ? $("#ResidenceArea2").focus()
      : $("#ResidenceArea3").focus();
  };

  handleResidenceArea3 = event => {
    this.handleInput(event);
    this.validateResidenceArea(event);
    event.target.value === ""
      ? $("#ResidenceArea3").focus()
      : $("#ResidenceArea4").focus();
  };

  handleResidenceArea4 = event => {
    this.handleInput(event);
    this.validateResidenceArea(event);
    event.target.value === ""
      ? $("#ResidenceArea4").focus()
      : $("#ResidenceArea5").focus();
  };

  handleResidenceArea5 = event => {
    this.handleInput(event);
    this.validateResidenceArea(event);
    event.target.value === ""
      ? $("#ResidenceArea5").focus()
      : $("#ResidenceArea6").focus();
  };

  handleResidenceArea6 = event => {
    this.handleInput(event);
    this.validateResidenceArea(event);
    event.target.value === ""
      ? $("#ResidenceArea6").focus()
      : $("#ResidenceArea7").focus();
  };

  handleResidenceArea7 = event => {
    this.handleInput(event);
    this.validateResidenceArea(event);
    event.target.value === ""
      ? $("#ResidenceArea7").focus()
      : $("#ResidenceArea8").focus();
  };

  handleResidenceArea8 = event => {
    this.handleInput(event);
    this.validateResidenceArea(event);
    event.target.value === ""
      ? $("#ResidenceArea8").focus()
      : $("#ResidenceArea9").focus();
  };

  handleResidenceArea9 = event => {
    this.handleInput(event);
    this.validateResidenceArea(event);
    event.target.value === ""
      ? $("#ResidenceArea9").focus()
      : $("#ResidenceArea10").focus();
  };

  handleResidenceArea10 = event => {
    this.handleInput(event);
    this.validateResidenceArea(event);
    event.target.value === ""
      ? $("#ResidenceArea10").focus()
      : $("#ResidenceArea11").focus();
  };

  handleResidenceArea11 = event => {
    this.handleInput(event);
    this.validateResidenceArea(event);
    event.target.value === ""
      ? $("#ResidenceArea11").focus()
      : $("#ResidenceArea12").focus();
  };

  handleResidenceArea12 = event => {
    this.handleInput(event);
    this.validateResidenceArea(event);
    event.target.value === ""
      ? $("#ResidenceArea12").focus()
      : $("#ResidenceArea13").focus();
  };

  handleResidenceArea13 = event => {
    this.handleInput(event);
    this.validateResidenceArea(event);
    event.target.value === ""
      ? $("#ResidenceArea13").focus()
      : $("#ResidenceArea14").focus();
  };

  handleResidenceArea14 = event => {
    this.handleInput(event);
    this.validateResidenceArea(event);
    event.target.value === ""
      ? $("#ResidenceArea14").focus()
      : $("#ResidenceArea15").focus();
  };

  handleResidenceArea15 = event => {
    this.handleInput(event);
    this.validateResidenceArea(event);
    event.target.value === ""
      ? $("#ResidenceArea15").focus()
      : $("#ResidenceArea16").focus();
  };

  handleResidenceArea16 = event => {
    this.handleInput(event);
    this.validateResidenceArea(event);
    event.target.value === ""
      ? $("#ResidenceArea16").focus()
      : $("#ResidenceArea17").focus();
  };

  handleResidenceArea17 = event => {
    this.handleInput(event);
    this.validateResidenceArea(event);
    event.target.value === ""
      ? $("#ResidenceArea17").focus()
      : $("#ResidenceArea18").focus();
  };

  handleResidenceArea18 = event => {
    this.handleInput(event);
    this.validateResidenceArea(event);
    event.target.value === ""
      ? $("#ResidenceArea18").focus()
      : $("#ResidenceArea19").focus();
  };

  handleResidenceArea19 = event => {
    this.handleInput(event);
    this.validateResidenceArea(event);
    event.target.value === ""
      ? $("#ResidenceArea19").focus()
      : $("#ResidenceArea20").focus();
  };

  handleResidenceArea20 = event => {
    this.handleInput(event);
    this.validateResidenceArea(event);
    event.target.value === ""
      ? $("#ResidenceArea20").focus()
      : $("#ResidenceArea21").focus();
  };

  handleResidenceArea21 = event => {
    this.handleInput(event);
    this.validateResidenceArea(event);
    event.target.value === ""
      ? $("#ResidenceArea21").focus()
      : $("#ResidenceArea22").focus();
  };

  handleResidenceArea22 = event => {
    this.handleInput(event);
    this.validateResidenceArea(event);
    event.target.value === ""
      ? $("#ResidenceArea22").focus()
      : $("#ResidenceArea23").focus();
  };

  handleResidenceArea23 = event => {
    this.handleInput(event);
    this.validateResidenceArea(event);
    event.target.value === ""
      ? $("#ResidenceArea23").focus()
      : $("#ResidenceArea24").focus();
  };

  handleResidenceArea24 = event => {
    this.handleInput(event);
    this.validateResidenceArea(event);
    event.target.value === ""
      ? $("#ResidenceArea24").focus()
      : $("#ResidenceArea25").focus();
  };

  handleResidenceArea25 = event => {
    this.handleInput(event);
    this.validateResidenceArea(event);
    event.target.value === ""
      ? $("#ResidenceArea25").focus()
      : $("#ResidenceArea25").focus();
  };

  ResetResidenceAreaError = () => {
    $("#ResidenceArea1").css({
      "border-top-color": "",
      "border-bottom-color": "",
      "border-left-color": ""
    });
    $("#ResidenceArea2").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#ResidenceArea3").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#ResidenceArea4").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#ResidenceArea5").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#ResidenceArea6").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#ResidenceArea7").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#ResidenceArea8").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#ResidenceArea9").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#ResidenceArea10").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#ResidenceArea11").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#ResidenceArea12").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#ResidenceArea13").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#ResidenceArea14").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#ResidenceArea15").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#ResidenceArea16").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#ResidenceArea17").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#ResidenceArea18").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#ResidenceArea19").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#ResidenceArea20").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#ResidenceArea21").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#ResidenceArea22").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#ResidenceArea23").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#ResidenceArea24").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#ResidenceArea25").css({
      "border-top-color": "",
      "border-bottom-color": "",
      "border-right-color": ""
    });
  };

  HighlightResidenceAreaError = () => {
    $("#ResidenceArea1").css({
      "border-top-color": "red",
      "border-bottom-color": "red",
      "border-left-color": "red"
    });
    $("#ResidenceArea2").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#ResidenceArea3").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#ResidenceArea4").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#ResidenceArea5").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#ResidenceArea6").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#ResidenceArea7").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#ResidenceArea8").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#ResidenceArea9").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#ResidenceArea10").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#ResidenceArea11").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#ResidenceArea12").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#ResidenceArea13").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#ResidenceArea14").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#ResidenceArea15").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#ResidenceArea16").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#ResidenceArea17").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#ResidenceArea18").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#ResidenceArea19").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#ResidenceArea20").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#ResidenceArea21").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#ResidenceArea22").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#ResidenceArea23").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#ResidenceArea24").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#ResidenceArea25").css({
      "border-top-color": "red",
      "border-bottom-color": "red",
      "border-right-color": "red"
    });
  };

  handleResidenceTown1 = event => {
    this.handleInput(event);
    this.validateResidenceTown(event);
    event.target.value === ""
      ? $("#ResidenceTown1").focus()
      : $("#ResidenceTown2").focus();
  };

  handleResidenceTown2 = event => {
    this.handleInput(event);
    this.validateResidenceTown(event);
    event.target.value === ""
      ? $("#ResidenceTown2").focus()
      : $("#ResidenceTown3").focus();
  };

  handleResidenceTown3 = event => {
    this.handleInput(event);
    this.validateResidenceTown(event);
    event.target.value === ""
      ? $("#ResidenceTown3").focus()
      : $("#ResidenceTown4").focus();
  };

  handleResidenceTown4 = event => {
    this.handleInput(event);
    this.validateResidenceTown(event);
    event.target.value === ""
      ? $("#ResidenceTown4").focus()
      : $("#ResidenceTown5").focus();
  };

  handleResidenceTown5 = event => {
    this.handleInput(event);
    this.validateResidenceTown(event);
    event.target.value === ""
      ? $("#ResidenceTown5").focus()
      : $("#ResidenceTown6").focus();
  };

  handleResidenceTown6 = event => {
    this.handleInput(event);
    this.validateResidenceTown(event);
    event.target.value === ""
      ? $("#ResidenceTown6").focus()
      : $("#ResidenceTown7").focus();
  };

  handleResidenceTown7 = event => {
    this.handleInput(event);
    this.validateResidenceTown(event);
    event.target.value === ""
      ? $("#ResidenceTown7").focus()
      : $("#ResidenceTown8").focus();
  };

  handleResidenceTown8 = event => {
    this.handleInput(event);
    this.validateResidenceTown(event);
    event.target.value === ""
      ? $("#ResidenceTown8").focus()
      : $("#ResidenceTown9").focus();
  };

  handleResidenceTown9 = event => {
    this.handleInput(event);
    this.validateResidenceTown(event);
    event.target.value === ""
      ? $("#ResidenceTown9").focus()
      : $("#ResidenceTown10").focus();
  };

  handleResidenceTown10 = event => {
    this.handleInput(event);
    this.validateResidenceTown(event);
    event.target.value === ""
      ? $("#ResidenceTown10").focus()
      : $("#ResidenceTown11").focus();
  };

  handleResidenceTown11 = event => {
    this.handleInput(event);
    this.validateResidenceTown(event);
    event.target.value === ""
      ? $("#ResidenceTown11").focus()
      : $("#ResidenceTown12").focus();
  };

  handleResidenceTown12 = event => {
    this.handleInput(event);
    this.validateResidenceTown(event);
    event.target.value === ""
      ? $("#ResidenceTown12").focus()
      : $("#ResidenceTown13").focus();
  };

  handleResidenceTown13 = event => {
    this.handleInput(event);
    this.validateResidenceTown(event);
    event.target.value === ""
      ? $("#ResidenceTown13").focus()
      : $("#ResidenceTown14").focus();
  };

  handleResidenceTown14 = event => {
    this.handleInput(event);
    this.validateResidenceTown(event);
    event.target.value === ""
      ? $("#ResidenceTown14").focus()
      : $("#ResidenceTown15").focus();
  };

  handleResidenceTown15 = event => {
    this.handleInput(event);
    this.validateResidenceTown(event);
    event.target.value === ""
      ? $("#ResidenceTown15").focus()
      : $("#ResidenceTown16").focus();
  };

  handleResidenceTown16 = event => {
    this.handleInput(event);
    this.validateResidenceTown(event);
    event.target.value === ""
      ? $("#ResidenceTown16").focus()
      : $("#ResidenceTown17").focus();
  };

  handleResidenceTown17 = event => {
    this.handleInput(event);
    this.validateResidenceTown(event);
    event.target.value === ""
      ? $("#ResidenceTown17").focus()
      : $("#ResidenceTown18").focus();
  };

  handleResidenceTown18 = event => {
    this.handleInput(event);
    this.validateResidenceTown(event);
    event.target.value === ""
      ? $("#ResidenceTown18").focus()
      : $("#ResidenceTown19").focus();
  };

  handleResidenceTown19 = event => {
    this.handleInput(event);
    this.validateResidenceTown(event);
    event.target.value === ""
      ? $("#ResidenceTown19").focus()
      : $("#ResidenceTown20").focus();
  };

  handleResidenceTown20 = event => {
    this.handleInput(event);
    this.validateResidenceTown(event);
    event.target.value === ""
      ? $("#ResidenceTown20").focus()
      : $("#ResidenceTown21").focus();
  };

  handleResidenceTown21 = event => {
    this.handleInput(event);
    this.validateResidenceTown(event);
    event.target.value === ""
      ? $("#ResidenceTown21").focus()
      : $("#ResidenceTown22").focus();
  };

  handleResidenceTown22 = event => {
    this.handleInput(event);
    this.validateResidenceTown(event);
    event.target.value === ""
      ? $("#ResidenceTown22").focus()
      : $("#ResidenceTown23").focus();
  };

  handleResidenceTown23 = event => {
    this.handleInput(event);
    this.validateResidenceTown(event);
    event.target.value === ""
      ? $("#ResidenceTown23").focus()
      : $("#ResidenceTown24").focus();
  };

  handleResidenceTown24 = event => {
    this.handleInput(event);
    this.validateResidenceTown(event);
    event.target.value === ""
      ? $("#ResidenceTown24").focus()
      : $("#ResidenceTown25").focus();
  };

  handleResidenceTown25 = event => {
    this.handleInput(event);
    this.validateResidenceTown(event);
    event.target.value === ""
      ? $("#ResidenceTown25").focus()
      : $("#ResidenceTown25").focus();
  };

  ResetResidenceTownError = () => {
    $("#ResidenceTown1").css({
      "border-top-color": "",
      "border-bottom-color": "",
      "border-left-color": ""
    });
    $("#ResidenceTown2").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#ResidenceTown3").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#ResidenceTown4").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#ResidenceTown5").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#ResidenceTown6").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#ResidenceTown7").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#ResidenceTown8").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#ResidenceTown9").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#ResidenceTown10").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#ResidenceTown11").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#ResidenceTown12").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#ResidenceTown13").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#ResidenceTown14").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#ResidenceTown15").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#ResidenceTown16").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#ResidenceTown17").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#ResidenceTown18").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#ResidenceTown19").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#ResidenceTown20").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#ResidenceTown21").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#ResidenceTown22").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#ResidenceTown23").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#ResidenceTown24").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#ResidenceTown25").css({
      "border-top-color": "",
      "border-bottom-color": "",
      "border-right-color": ""
    });
  };

  HighlightResidenceTownError = () => {
    $("#ResidenceTown1").css({
      "border-top-color": "red",
      "border-bottom-color": "red",
      "border-left-color": "red"
    });
    $("#ResidenceTown2").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#ResidenceTown3").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#ResidenceTown4").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#ResidenceTown5").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#ResidenceTown6").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#ResidenceTown7").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#ResidenceTown8").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#ResidenceTown9").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#ResidenceTown10").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#ResidenceTown11").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#ResidenceTown12").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#ResidenceTown13").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#ResidenceTown14").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#ResidenceTown15").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#ResidenceTown16").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#ResidenceTown17").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#ResidenceTown18").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#ResidenceTown19").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#ResidenceTown20").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#ResidenceTown21").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#ResidenceTown22").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#ResidenceTown23").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#ResidenceTown24").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#ResidenceTown25").css({
      "border-top-color": "red",
      "border-bottom-color": "red",
      "border-right-color": "red"
    });
  };

  handleResidencePincode1 = event => {
    this.handleInput(event);
    this.validateResidencePincode(event);
    event.target.value === ""
      ? $("#ResidencePincode1").focus()
      : $("#ResidencePincode2").focus();
  };

  handleResidencePincode2 = event => {
    this.handleInput(event);
    this.validateResidencePincode(event);
    event.target.value === ""
      ? $("#ResidencePincode2").focus()
      : $("#ResidencePincode3").focus();
  };

  handleResidencePincode3 = event => {
    this.handleInput(event);
    this.validateResidencePincode(event);
    event.target.value === ""
      ? $("#ResidencePincode3").focus()
      : $("#ResidencePincode4").focus();
  };

  handleResidencePincode4 = event => {
    this.handleInput(event);
    this.validateResidencePincode(event);
    event.target.value === ""
      ? $("#ResidencePincode4").focus()
      : $("#ResidencePincode5").focus();
  };

  handleResidencePincode5 = event => {
    this.handleInput(event);
    this.validateResidencePincode(event);
    event.target.value === ""
      ? $("#ResidencePincode5").focus()
      : $("#ResidencePincode6").focus();
  };

  handleResidencePincode6 = event => {
    this.handleInput(event);
    this.validateResidencePincode(event);
    event.target.value === ""
      ? $("#ResidencePincode6").focus()
      : $("#ResidencePincode7").focus();
  };

  handleResidencePincode7 = event => {
    this.handleInput(event);
    this.validateResidencePincode(event);
    event.target.value === ""
      ? $("#ResidencePincode7").focus()
      : $("#ResidencePincode7").focus();
  };

  ResetResidencePincodeError = () => {
    $("#ResidencePincode1").css({
      "border-top-color": "",
      "border-bottom-color": "",
      "border-left-color": ""
    });
    $("#ResidencePincode2").css({
      "border-top-color": "",
      "border-bottom-color": "",
      "border-right-color": ""
    });
    $("#ResidencePincode3").css({
      "border-top-color": "",
      "border-bottom-color": "",
      "border-left-color": ""
    });
    $("#ResidencePincode4").css({
      "border-top-color": "",
      "border-bottom-color": "",
      "border-right-color": ""
    });
    $("#ResidencePincode5").css({
      "border-top-color": "",
      "border-bottom-color": "",
      "border-right-color": ""
    });
    $("#ResidencePincode6").css({
      "border-top-color": "",
      "border-bottom-color": "",
      "border-left-color": ""
    });
    $("#ResidencePincode7").css({
      "border-top-color": "",
      "border-bottom-color": "",
      "border-right-color": ""
    });
  };

  HighlightResidencePincodeError = () => {
    $("#ResidencePincode1").css({
      "border-top-color": "red",
      "border-bottom-color": "red",
      "border-left-color": "red"
    });
    $("#ResidencePincode2").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#ResidencePincode3").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#ResidencePincode4").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#ResidencePincode5").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#ResidencePincode6").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#ResidencePincode7").css({
      "border-top-color": "red",
      "border-bottom-color": "red",
      "border-right-color": "red"
    });
  };

  async validateResidenceFlat(event) {
    this.state.data.ResidenceFlat =
      this.state.data.ResidenceFlat1 +
      this.state.data.ResidenceFlat2 +
      this.state.data.ResidenceFlat3 +
      this.state.data.ResidenceFlat4 +
      this.state.data.ResidenceFlat5 +
      this.state.data.ResidenceFlat6 +
      this.state.data.ResidenceFlat7 +
      this.state.data.ResidenceFlat8 +
      this.state.data.ResidenceFlat9 +
      this.state.data.ResidenceFlat10 +
      this.state.data.ResidenceFlat11 +
      this.state.data.ResidenceFlat12 +
      this.state.data.ResidenceFlat13 +
      this.state.data.ResidenceFlat14 +
      this.state.data.ResidenceFlat15 +
      this.state.data.ResidenceFlat16 +
      this.state.data.ResidenceFlat17 +
      this.state.data.ResidenceFlat18 +
      this.state.data.ResidenceFlat19 +
      this.state.data.ResidenceFlat20 +
      this.state.data.ResidenceFlat21 +
      this.state.data.ResidenceFlat22 +
      this.state.data.ResidenceFlat23 +
      this.state.data.ResidenceFlat24 +
      this.state.data.ResidenceFlat25;

    let errors = this.state.errors;
    let name = "ResidenceFlat";
    this.setState(errors);
    errors[name] = "";

    this.ResetResidenceFlatError();

    if (
      this.state.data.ResidenceFlat === "" ||
      (isNaN(this.state.data.ResidenceFlat) === false &&
        this.state.data.ResidenceFlat.match(/^[ ]*$/))
    ) {
      let errors = this.state.errors;
      let name = "ResidenceFlat";
      this.setState(errors);
      errors[name] =
        "*Please enter your Residence Flat / Room / Door / Block No.";

      this.state.isModalEnabled = false;
      this.HighlightResidenceFlatError();
    } else if (typeof this.state.data.ResidenceFlat !== "undefined") {
      if (!this.state.data.ResidenceFlat.match(/^[a-zA-Z0-9'-/ ]*$/)) {
        let errors = this.state.errors;
        let name = "ResidenceFlat";
        this.setState(errors);
        errors[name] = "*Please enter alphanumeric characters only.";

        this.state.isModalEnabled = false;
        this.HighlightResidenceFlatError();
      }
    }

    localStorage.setItem("localdata", JSON.stringify(this.state.data));
    localStorage.setItem("localerror", JSON.stringify(this.state.errors));
  }

  async validateResidencePremises(event) {
    this.state.data.ResidencePremises =
      this.state.data.ResidencePremises1 +
      this.state.data.ResidencePremises2 +
      this.state.data.ResidencePremises3 +
      this.state.data.ResidencePremises4 +
      this.state.data.ResidencePremises5 +
      this.state.data.ResidencePremises6 +
      this.state.data.ResidencePremises7 +
      this.state.data.ResidencePremises8 +
      this.state.data.ResidencePremises9 +
      this.state.data.ResidencePremises10 +
      this.state.data.ResidencePremises11 +
      this.state.data.ResidencePremises12 +
      this.state.data.ResidencePremises13 +
      this.state.data.ResidencePremises14 +
      this.state.data.ResidencePremises15 +
      this.state.data.ResidencePremises16 +
      this.state.data.ResidencePremises17 +
      this.state.data.ResidencePremises18 +
      this.state.data.ResidencePremises19 +
      this.state.data.ResidencePremises20 +
      this.state.data.ResidencePremises21 +
      this.state.data.ResidencePremises22 +
      this.state.data.ResidencePremises23 +
      this.state.data.ResidencePremises24 +
      this.state.data.ResidencePremises25;

    let errors = this.state.errors;
    let name = "ResidencePremises";
    this.setState(errors);
    errors[name] = "";

    this.ResetResidencePremisesError();

    if (
      this.state.data.ResidencePremises === "" ||
      (isNaN(this.state.data.ResidencePremises) === false &&
        this.state.data.ResidencePremises.match(/^[ ]*$/))
    ) {
      let errors = this.state.errors;
      let name = "ResidencePremises";
      this.setState(errors);
      errors[name] =
        "*Please enter your Residence Premises / Building / Village";

      this.state.isModalEnabled = false;
      this.HighlightResidencePremisesError();
    } else if (typeof this.state.data.ResidencePremises !== "undefined") {
      if (!this.state.data.ResidencePremises.match(/^[a-zA-Z0-9 ]*$/)) {
        let errors = this.state.errors;
        let name = "ResidencePremises";
        this.setState(errors);
        errors[name] = "*Please enter alphanumeric characters only.";

        this.state.isModalEnabled = false;
        this.HighlightResidencePremisesError();
      }
    }

    localStorage.setItem("localdata", JSON.stringify(this.state.data));
    localStorage.setItem("localerror", JSON.stringify(this.state.errors));
  }

  async validateResidenceRoad(event) {
    this.state.data.ResidenceRoad =
      this.state.data.ResidenceRoad1 +
      this.state.data.ResidenceRoad2 +
      this.state.data.ResidenceRoad3 +
      this.state.data.ResidenceRoad4 +
      this.state.data.ResidenceRoad5 +
      this.state.data.ResidenceRoad6 +
      this.state.data.ResidenceRoad7 +
      this.state.data.ResidenceRoad8 +
      this.state.data.ResidenceRoad9 +
      this.state.data.ResidenceRoad10 +
      this.state.data.ResidenceRoad11 +
      this.state.data.ResidenceRoad12 +
      this.state.data.ResidenceRoad13 +
      this.state.data.ResidenceRoad14 +
      this.state.data.ResidenceRoad15 +
      this.state.data.ResidenceRoad16 +
      this.state.data.ResidenceRoad17 +
      this.state.data.ResidenceRoad18 +
      this.state.data.ResidenceRoad19 +
      this.state.data.ResidenceRoad20 +
      this.state.data.ResidenceRoad21 +
      this.state.data.ResidenceRoad22 +
      this.state.data.ResidenceRoad23 +
      this.state.data.ResidenceRoad24 +
      this.state.data.ResidenceRoad25;

    let errors = this.state.errors;
    let name = "ResidenceRoad";
    this.setState(errors);
    errors[name] = "";

    this.ResetResidenceRoadError();

    if (
      this.state.data.ResidenceRoad === "" ||
      (isNaN(this.state.data.ResidenceRoad) === false &&
        this.state.data.ResidenceRoad.match(/^[ ]*$/))
    ) {
      let errors = this.state.errors;
      let name = "ResidenceRoad";
      this.setState(errors);
      errors[name] =
        "*Please enter your Residence Road / Street / Lane / Post Office";

      this.state.isModalEnabled = false;
      this.HighlightResidenceRoadError();
    } else if (typeof this.state.data.ResidenceRoad !== "undefined") {
      if (!this.state.data.ResidenceRoad.match(/^[a-zA-Z0-9 ]*$/)) {
        let errors = this.state.errors;
        let name = "ResidenceRoad";
        this.setState(errors);
        errors[name] = "*Please enter alphanumeric characters only.";

        this.state.isModalEnabled = false;
        this.HighlightResidenceRoadError();
      }
    }

    localStorage.setItem("localdata", JSON.stringify(this.state.data));
    localStorage.setItem("localerror", JSON.stringify(this.state.errors));
  }

  async validateResidenceArea(event) {
    this.state.data.ResidenceArea =
      this.state.data.ResidenceArea1 +
      this.state.data.ResidenceArea2 +
      this.state.data.ResidenceArea3 +
      this.state.data.ResidenceArea4 +
      this.state.data.ResidenceArea5 +
      this.state.data.ResidenceArea6 +
      this.state.data.ResidenceArea7 +
      this.state.data.ResidenceArea8 +
      this.state.data.ResidenceArea9 +
      this.state.data.ResidenceArea10 +
      this.state.data.ResidenceArea11 +
      this.state.data.ResidenceArea12 +
      this.state.data.ResidenceArea13 +
      this.state.data.ResidenceArea14 +
      this.state.data.ResidenceArea15 +
      this.state.data.ResidenceArea16 +
      this.state.data.ResidenceArea17 +
      this.state.data.ResidenceArea18 +
      this.state.data.ResidenceArea19 +
      this.state.data.ResidenceArea20 +
      this.state.data.ResidenceArea21 +
      this.state.data.ResidenceArea22 +
      this.state.data.ResidenceArea23 +
      this.state.data.ResidenceArea24 +
      this.state.data.ResidenceArea25;

    let errors = this.state.errors;
    let name = "ResidenceArea";
    this.setState(errors);
    errors[name] = "";

    this.ResetResidenceAreaError();

    if (
      this.state.data.ResidenceArea === "" ||
      isNaN(this.state.data.ResidenceArea) === false
    ) {
      let errors = this.state.errors;
      let name = "ResidenceArea";
      this.setState(errors);
      errors[name] =
        "*Please enter your Residence Area / Locality / Taluka / Sub-division";

      this.state.isModalEnabled = false;
      this.HighlightResidenceAreaError();
    } else if (typeof this.state.data.ResidenceArea !== "undefined") {
      if (!this.state.data.ResidenceArea.match(/^[a-zA-Z ]*$/)) {
        let errors = this.state.errors;
        let name = "ResidenceArea";
        this.setState(errors);
        errors[name] = "*Please enter alphabet characters only.";

        this.state.isModalEnabled = false;
        this.HighlightResidenceAreaError();
      }
    }

    localStorage.setItem("localdata", JSON.stringify(this.state.data));
    localStorage.setItem("localerror", JSON.stringify(this.state.errors));
  }

  async validateResidenceTown(event) {
    this.state.data.ResidenceTown =
      this.state.data.ResidenceTown1 +
      this.state.data.ResidenceTown2 +
      this.state.data.ResidenceTown3 +
      this.state.data.ResidenceTown4 +
      this.state.data.ResidenceTown5 +
      this.state.data.ResidenceTown6 +
      this.state.data.ResidenceTown7 +
      this.state.data.ResidenceTown8 +
      this.state.data.ResidenceTown9 +
      this.state.data.ResidenceTown10 +
      this.state.data.ResidenceTown11 +
      this.state.data.ResidenceTown12 +
      this.state.data.ResidenceTown13 +
      this.state.data.ResidenceTown14 +
      this.state.data.ResidenceTown15 +
      this.state.data.ResidenceTown16 +
      this.state.data.ResidenceTown17 +
      this.state.data.ResidenceTown18 +
      this.state.data.ResidenceTown19 +
      this.state.data.ResidenceTown20 +
      this.state.data.ResidenceTown21 +
      this.state.data.ResidenceTown22 +
      this.state.data.ResidenceTown23 +
      this.state.data.ResidenceTown24 +
      this.state.data.ResidenceTown25;

    let errors = this.state.errors;
    let name = "ResidenceTown";
    this.setState(errors);
    errors[name] = "";

    this.ResetResidenceTownError();

    if (
      this.state.data.ResidenceTown === "" ||
      isNaN(this.state.data.ResidenceTown) === false
    ) {
      let errors = this.state.errors;
      let name = "ResidenceTown";
      this.setState(errors);
      errors[name] = "*Please enter your Residence Town / City / District";

      this.state.isModalEnabled = false;
      this.HighlightResidenceTownError();
    } else if (typeof this.state.data.ResidenceTown !== "undefined") {
      if (!this.state.data.ResidenceTown.match(/^[a-zA-Z ]*$/)) {
        let errors = this.state.errors;
        let name = "ResidenceTown";
        this.setState(errors);
        errors[name] = "*Please enter alphabet characters only.";

        this.state.isModalEnabled = false;
        this.HighlightResidenceTownError();
      }
    }

    localStorage.setItem("localdata", JSON.stringify(this.state.data));
    localStorage.setItem("localerror", JSON.stringify(this.state.errors));
  }

  handleResidenceState = event => {
    let ResidenceState = this.state.data;
    let { name, value } = event.target;
    this.setState(ResidenceState);
    ResidenceState[name] = value;

    localStorage.setItem("localdata", JSON.stringify(this.state.data));
    localStorage.setItem("localerror", JSON.stringify(this.state.errors));

    let errors = this.state.errors;
    let name1 = "ResidenceState";
    this.setState(errors);
    errors[name1] = "";

    let textPattern = /^[a-zA-Z ]*$/;
    $("#ResidenceState").css("border-color", "");

    if (
      this.state.data.ResidenceState === "" ||
      isNaN(this.state.data.ResidenceState) === false
    ) {
      let errors = this.state.errors;
      let name1 = "ResidenceState";
      this.setState(errors);
      errors[name1] = "*Please enter your Residence State";

      let isModalEnabled = this.state.isModalEnabled;
      isModalEnabled = false;
      this.setState({ isModalEnabled });
      $("#ResidenceState").css("border-color", "red");
    } else if (typeof this.state.data.ResidenceState !== "undefined") {
      if (!textPattern.test(this.state.data.ResidenceState)) {
        let errors = this.state.errors;
        let name1 = "ResidenceState";
        this.setState(errors);
        errors[name1] = "*Please enter alphabet characters only.";

        let isModalEnabled = this.state.isModalEnabled;
        isModalEnabled = false;
        this.setState({ isModalEnabled });
        $("#ResidenceState").css("border-color", "red");
      }
    }
  };

  async validateResidencePincode(event) {
    this.state.data.ResidencePincode =
      this.state.data.ResidencePincode1 +
      this.state.data.ResidencePincode2 +
      this.state.data.ResidencePincode3 +
      this.state.data.ResidencePincode4 +
      this.state.data.ResidencePincode5 +
      this.state.data.ResidencePincode6 +
      this.state.data.ResidencePincode7;

    let errors = this.state.errors;
    let name = "ResidencePincode";
    this.setState(errors);
    errors[name] = "";

    this.ResetResidencePincodeError();

    if (this.state.data.ResidencePincode === "") {
      let errors = this.state.errors;
      let name = "ResidencePincode";
      this.setState(errors);
      errors[name] = "*Please enter your Residence Pincode";

      this.state.isModalEnabled = false;
      this.HighlightResidencePincodeError();
    } else if (typeof this.state.data.ResidencePincode !== "undefined") {
      if (!this.state.data.ResidencePincode.match(/^[1-9][0-9]*$/)) {
        let errors = this.state.errors;
        let name = "ResidencePincode";
        this.setState(errors);
        errors[name] = "*Please enter valid pincode";

        this.state.isModalEnabled = false;
        this.HighlightResidencePincodeError();
      }
    }

    localStorage.setItem("localdata", JSON.stringify(this.state.data));
    localStorage.setItem("localerror", JSON.stringify(this.state.errors));
  }

  handleResidenceCountry = event => {
    let ResidenceCountry = this.state.data;
    let { name, value } = event.target;
    this.setState(ResidenceCountry);
    ResidenceCountry[name] = value;

    localStorage.setItem("localdata", JSON.stringify(this.state.data));
    localStorage.setItem("localerror", JSON.stringify(this.state.errors));

    let errors = this.state.errors;
    let name1 = "ResidenceCountry";
    this.setState(errors);
    errors[name1] = "";

    let textPattern = /^[a-zA-Z ]*$/;
    $("#ResidenceCountry").css("border-color", "");

    if (
      this.state.data.ResidenceCountry === "" ||
      isNaN(this.state.data.ResidenceCountry) === false
    ) {
      let errors = this.state.errors;
      let name1 = "ResidenceCountry";
      this.setState(errors);
      errors[name1] = "*Please enter your Residence Country";

      let val = this.state.isModalEnabled;
      val = false;
      this.setState({ val });
      $("#ResidenceCountry").css("border-color", "red");
    } else if (typeof this.state.data.ResidenceCountry !== "undefined") {
      if (!textPattern.test(this.state.data.ResidenceCountry)) {
        let errors = this.state.errors;
        let name1 = "ResidenceCountry";
        this.setState(errors);
        errors[name1] = "*Please enter alphabet characters only.";

        let val = this.state.isModalEnabled;
        val = false;
        this.setState({ val });
        $("#ResidenceCountry").css("border-color", "red");
      }
    }
  };

  render() {
    return (
      <div>
        <div className="ColouredLabel">
          <label className="ColouredLabel">
            {" "}
            &nbsp;&nbsp; 7 &nbsp; Address{" "}
          </label>
        </div>

        <label className="FirstLabel Bold"> Residence Address</label>

        <br />

        <table>
          <tbody>
            <tr>
              <td className="first_td">
                {this.state.addressTwo.map((data, index) => (
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
                    value={this.state.data.ResidenceFlat1}
                    name="ResidenceFlat1"
                    id="ResidenceFlat1"
                    onKeyDown={event =>
                      this.handleBackspaceKey(
                        event,
                        "#ResidenceFlat1",
                        "#ResidenceFlat1"
                      )
                    }
                    onChange={this.handleResidenceFlat1}
                  />

                  <input
                    type="text"
                    className="Name-control"
                    maxLength="1"
                    value={this.state.data.ResidenceFlat2}
                    name="ResidenceFlat2"
                    id="ResidenceFlat2"
                    onKeyDown={event =>
                      this.handleBackspaceKey(
                        event,
                        "#ResidenceFlat1",
                        "#ResidenceFlat2"
                      )
                    }
                    onChange={this.handleResidenceFlat2}
                  />

                  <input
                    type="text"
                    className="Name-control"
                    maxLength="1"
                    value={this.state.data.ResidenceFlat3}
                    name="ResidenceFlat3"
                    id="ResidenceFlat3"
                    onKeyDown={event =>
                      this.handleBackspaceKey(
                        event,
                        "#ResidenceFlat2",
                        "#ResidenceFlat3"
                      )
                    }
                    onChange={this.handleResidenceFlat3}
                  />

                  <input
                    type="text"
                    className="Name-control"
                    maxLength="1"
                    value={this.state.data.ResidenceFlat4}
                    name="ResidenceFlat4"
                    id="ResidenceFlat4"
                    onKeyDown={event =>
                      this.handleBackspaceKey(
                        event,
                        "#ResidenceFlat3",
                        "#ResidenceFlat4"
                      )
                    }
                    onChange={this.handleResidenceFlat4}
                  />

                  <input
                    type="text"
                    className="Name-control"
                    maxLength="1"
                    value={this.state.data.ResidenceFlat5}
                    name="ResidenceFlat5"
                    id="ResidenceFlat5"
                    onKeyDown={event =>
                      this.handleBackspaceKey(
                        event,
                        "#ResidenceFlat4",
                        "#ResidenceFlat5"
                      )
                    }
                    onChange={this.handleResidenceFlat5}
                  />

                  <input
                    type="text"
                    className="Name-control"
                    maxLength="1"
                    value={this.state.data.ResidenceFlat6}
                    name="ResidenceFlat6"
                    id="ResidenceFlat6"
                    onKeyDown={event =>
                      this.handleBackspaceKey(
                        event,
                        "#ResidenceFlat5",
                        "#ResidenceFlat6"
                      )
                    }
                    onChange={this.handleResidenceFlat6}
                  />

                  <input
                    type="text"
                    className="Name-control"
                    maxLength="1"
                    value={this.state.data.ResidenceFlat7}
                    name="ResidenceFlat7"
                    id="ResidenceFlat7"
                    onKeyDown={event =>
                      this.handleBackspaceKey(
                        event,
                        "#ResidenceFlat6",
                        "#ResidenceFlat7"
                      )
                    }
                    onChange={this.handleResidenceFlat7}
                  />

                  <input
                    type="text"
                    className="Name-control"
                    maxLength="1"
                    value={this.state.data.ResidenceFlat8}
                    name="ResidenceFlat8"
                    id="ResidenceFlat8"
                    onKeyDown={event =>
                      this.handleBackspaceKey(
                        event,
                        "#ResidenceFlat7",
                        "#ResidenceFlat8"
                      )
                    }
                    onChange={this.handleResidenceFlat8}
                  />

                  <input
                    type="text"
                    className="Name-control"
                    maxLength="1"
                    value={this.state.data.ResidenceFlat9}
                    name="ResidenceFlat9"
                    id="ResidenceFlat9"
                    onKeyDown={event =>
                      this.handleBackspaceKey(
                        event,
                        "#ResidenceFlat8",
                        "#ResidenceFlat9"
                      )
                    }
                    onChange={this.handleResidenceFlat9}
                  />

                  <input
                    type="text"
                    className="Name-control"
                    maxLength="1"
                    value={this.state.data.ResidenceFlat10}
                    name="ResidenceFlat10"
                    id="ResidenceFlat10"
                    onKeyDown={event =>
                      this.handleBackspaceKey(
                        event,
                        "#ResidenceFlat9",
                        "#ResidenceFlat10"
                      )
                    }
                    onChange={this.handleResidenceFlat10}
                  />

                  <input
                    type="text"
                    className="Name-control"
                    maxLength="1"
                    value={this.state.data.ResidenceFlat11}
                    name="ResidenceFlat11"
                    id="ResidenceFlat11"
                    onKeyDown={event =>
                      this.handleBackspaceKey(
                        event,
                        "#ResidenceFlat10",
                        "#ResidenceFlat11"
                      )
                    }
                    onChange={this.handleResidenceFlat11}
                  />

                  <input
                    type="text"
                    className="Name-control"
                    maxLength="1"
                    value={this.state.data.ResidenceFlat12}
                    name="ResidenceFlat12"
                    id="ResidenceFlat12"
                    onKeyDown={event =>
                      this.handleBackspaceKey(
                        event,
                        "#ResidenceFlat11",
                        "#ResidenceFlat12"
                      )
                    }
                    onChange={this.handleResidenceFlat12}
                  />

                  <input
                    type="text"
                    className="Name-control"
                    maxLength="1"
                    value={this.state.data.ResidenceFlat13}
                    name="ResidenceFlat13"
                    id="ResidenceFlat13"
                    onKeyDown={event =>
                      this.handleBackspaceKey(
                        event,
                        "#ResidenceFlat12",
                        "#ResidenceFlat13"
                      )
                    }
                    onChange={this.handleResidenceFlat13}
                  />

                  <input
                    type="text"
                    className="Name-control"
                    maxLength="1"
                    value={this.state.data.ResidenceFlat14}
                    name="ResidenceFlat14"
                    id="ResidenceFlat14"
                    onKeyDown={event =>
                      this.handleBackspaceKey(
                        event,
                        "#ResidenceFlat13",
                        "#ResidenceFlat14"
                      )
                    }
                    onChange={this.handleResidenceFlat14}
                  />

                  <input
                    type="text"
                    className="Name-control"
                    maxLength="1"
                    value={this.state.data.ResidenceFlat15}
                    name="ResidenceFlat15"
                    id="ResidenceFlat15"
                    onKeyDown={event =>
                      this.handleBackspaceKey(
                        event,
                        "#ResidenceFlat14",
                        "#ResidenceFlat15"
                      )
                    }
                    onChange={this.handleResidenceFlat15}
                  />

                  <input
                    type="text"
                    className="Name-control"
                    maxLength="1"
                    value={this.state.data.ResidenceFlat16}
                    name="ResidenceFlat16"
                    id="ResidenceFlat16"
                    onKeyDown={event =>
                      this.handleBackspaceKey(
                        event,
                        "#ResidenceFlat15",
                        "#ResidenceFlat16"
                      )
                    }
                    onChange={this.handleResidenceFlat16}
                  />

                  <input
                    type="text"
                    className="Name-control"
                    maxLength="1"
                    value={this.state.data.ResidenceFlat17}
                    name="ResidenceFlat17"
                    id="ResidenceFlat17"
                    onKeyDown={event =>
                      this.handleBackspaceKey(
                        event,
                        "#ResidenceFlat16",
                        "#ResidenceFlat17"
                      )
                    }
                    onChange={this.handleResidenceFlat17}
                  />

                  <input
                    type="text"
                    className="Name-control"
                    maxLength="1"
                    value={this.state.data.ResidenceFlat18}
                    name="ResidenceFlat18"
                    id="ResidenceFlat18"
                    onKeyDown={event =>
                      this.handleBackspaceKey(
                        event,
                        "#ResidenceFlat17",
                        "#ResidenceFlat18"
                      )
                    }
                    onChange={this.handleResidenceFlat18}
                  />

                  <input
                    type="text"
                    className="Name-control"
                    maxLength="1"
                    value={this.state.data.ResidenceFlat19}
                    name="ResidenceFlat19"
                    id="ResidenceFlat19"
                    onKeyDown={event =>
                      this.handleBackspaceKey(
                        event,
                        "#ResidenceFlat18",
                        "#ResidenceFlat19"
                      )
                    }
                    onChange={this.handleResidenceFlat19}
                  />

                  <input
                    type="text"
                    className="Name-control"
                    maxLength="1"
                    value={this.state.data.ResidenceFlat20}
                    name="ResidenceFlat20"
                    id="ResidenceFlat20"
                    onKeyDown={event =>
                      this.handleBackspaceKey(
                        event,
                        "#ResidenceFlat19",
                        "#ResidenceFlat20"
                      )
                    }
                    onChange={this.handleResidenceFlat20}
                  />

                  <input
                    type="text"
                    className="Name-control"
                    maxLength="1"
                    value={this.state.data.ResidenceFlat21}
                    name="ResidenceFlat21"
                    id="ResidenceFlat21"
                    onKeyDown={event =>
                      this.handleBackspaceKey(
                        event,
                        "#ResidenceFlat20",
                        "#ResidenceFlat21"
                      )
                    }
                    onChange={this.handleResidenceFlat21}
                  />

                  <input
                    type="text"
                    className="Name-control"
                    maxLength="1"
                    value={this.state.data.ResidenceFlat22}
                    name="ResidenceFlat22"
                    id="ResidenceFlat22"
                    onKeyDown={event =>
                      this.handleBackspaceKey(
                        event,
                        "#ResidenceFlat21",
                        "#ResidenceFlat22"
                      )
                    }
                    onChange={this.handleResidenceFlat22}
                  />

                  <input
                    type="text"
                    className="Name-control"
                    maxLength="1"
                    value={this.state.data.ResidenceFlat23}
                    name="ResidenceFlat23"
                    id="ResidenceFlat23"
                    onKeyDown={event =>
                      this.handleBackspaceKey(
                        event,
                        "#ResidenceFlat22",
                        "#ResidenceFlat23"
                      )
                    }
                    onChange={this.handleResidenceFlat23}
                  />

                  <input
                    type="text"
                    className="Name-control"
                    maxLength="1"
                    value={this.state.data.ResidenceFlat24}
                    name="ResidenceFlat24"
                    id="ResidenceFlat24"
                    onKeyDown={event =>
                      this.handleBackspaceKey(
                        event,
                        "#ResidenceFlat23",
                        "#ResidenceFlat24"
                      )
                    }
                    onChange={this.handleResidenceFlat24}
                  />

                  <input
                    type="text"
                    className="Name-control"
                    maxLength="1"
                    value={this.state.data.ResidenceFlat25}
                    name="ResidenceFlat25"
                    id="ResidenceFlat25"
                    onKeyDown={event =>
                      this.handleBackspaceKey(
                        event,
                        "#ResidenceFlat24",
                        "#ResidenceFlat25"
                      )
                    }
                    onChange={this.handleResidenceFlat25}
                  />
                  {this.state.isIndicatorEnabled === false ? (
                    <span className="tooltip">
                      <img
                        src={indicator}
                        alt = "img"
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
                        Please enter combinations of alphabet, numbers , -, /, '{" "}
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
                    value={this.state.data.ResidencePremises1}
                    name="ResidencePremises1"
                    id="ResidencePremises1"
                    onKeyDown={event =>
                      this.handleBackspaceKey(
                        event,
                        "#ResidencePremises1",
                        "#ResidencePremises1"
                      )
                    }
                    onChange={this.handleResidencePremises1}
                  />

                  <input
                    type="text"
                    className="Name-control"
                    maxLength="1"
                    value={this.state.data.ResidencePremises2}
                    name="ResidencePremises2"
                    id="ResidencePremises2"
                    onKeyDown={event =>
                      this.handleBackspaceKey(
                        event,
                        "#ResidencePremises1",
                        "#ResidencePremises2"
                      )
                    }
                    onChange={this.handleResidencePremises2}
                  />

                  <input
                    type="text"
                    className="Name-control"
                    maxLength="1"
                    value={this.state.data.ResidencePremises3}
                    name="ResidencePremises3"
                    id="ResidencePremises3"
                    onKeyDown={event =>
                      this.handleBackspaceKey(
                        event,
                        "#ResidencePremises2",
                        "#ResidencePremises3"
                      )
                    }
                    onChange={this.handleResidencePremises3}
                  />

                  <input
                    type="text"
                    className="Name-control"
                    maxLength="1"
                    value={this.state.data.ResidencePremises4}
                    name="ResidencePremises4"
                    id="ResidencePremises4"
                    onKeyDown={event =>
                      this.handleBackspaceKey(
                        event,
                        "#ResidencePremises3",
                        "#ResidencePremises4"
                      )
                    }
                    onChange={this.handleResidencePremises4}
                  />

                  <input
                    type="text"
                    className="Name-control"
                    maxLength="1"
                    value={this.state.data.ResidencePremises5}
                    name="ResidencePremises5"
                    id="ResidencePremises5"
                    onKeyDown={event =>
                      this.handleBackspaceKey(
                        event,
                        "#ResidencePremises4",
                        "#ResidencePremises5"
                      )
                    }
                    onChange={this.handleResidencePremises5}
                  />

                  <input
                    type="text"
                    className="Name-control"
                    maxLength="1"
                    value={this.state.data.ResidencePremises6}
                    name="ResidencePremises6"
                    id="ResidencePremises6"
                    onKeyDown={event =>
                      this.handleBackspaceKey(
                        event,
                        "#ResidencePremises5",
                        "#ResidencePremises6"
                      )
                    }
                    onChange={this.handleResidencePremises6}
                  />

                  <input
                    type="text"
                    className="Name-control"
                    maxLength="1"
                    value={this.state.data.ResidencePremises7}
                    name="ResidencePremises7"
                    id="ResidencePremises7"
                    onKeyDown={event =>
                      this.handleBackspaceKey(
                        event,
                        "#ResidencePremises6",
                        "#ResidencePremises7"
                      )
                    }
                    onChange={this.handleResidencePremises7}
                  />

                  <input
                    type="text"
                    className="Name-control"
                    maxLength="1"
                    value={this.state.data.ResidencePremises8}
                    name="ResidencePremises8"
                    id="ResidencePremises8"
                    onKeyDown={event =>
                      this.handleBackspaceKey(
                        event,
                        "#ResidencePremises7",
                        "#ResidencePremises8"
                      )
                    }
                    onChange={this.handleResidencePremises8}
                  />

                  <input
                    type="text"
                    className="Name-control"
                    maxLength="1"
                    value={this.state.data.ResidencePremises9}
                    name="ResidencePremises9"
                    id="ResidencePremises9"
                    onKeyDown={event =>
                      this.handleBackspaceKey(
                        event,
                        "#ResidencePremises8",
                        "#ResidencePremises9"
                      )
                    }
                    onChange={this.handleResidencePremises9}
                  />

                  <input
                    type="text"
                    className="Name-control"
                    maxLength="1"
                    value={this.state.data.ResidencePremises10}
                    name="ResidencePremises10"
                    id="ResidencePremises10"
                    onKeyDown={event =>
                      this.handleBackspaceKey(
                        event,
                        "#ResidencePremises9",
                        "#ResidencePremises10"
                      )
                    }
                    onChange={this.handleResidencePremises10}
                  />

                  <input
                    type="text"
                    className="Name-control"
                    maxLength="1"
                    value={this.state.data.ResidencePremises11}
                    name="ResidencePremises11"
                    id="ResidencePremises11"
                    onKeyDown={event =>
                      this.handleBackspaceKey(
                        event,
                        "#ResidencePremises10",
                        "#ResidencePremises11"
                      )
                    }
                    onChange={this.handleResidencePremises11}
                  />

                  <input
                    type="text"
                    className="Name-control"
                    maxLength="1"
                    value={this.state.data.ResidencePremises12}
                    name="ResidencePremises12"
                    id="ResidencePremises12"
                    onKeyDown={event =>
                      this.handleBackspaceKey(
                        event,
                        "#ResidencePremises11",
                        "#ResidencePremises12"
                      )
                    }
                    onChange={this.handleResidencePremises12}
                  />

                  <input
                    type="text"
                    className="Name-control"
                    maxLength="1"
                    value={this.state.data.ResidencePremises13}
                    name="ResidencePremises13"
                    id="ResidencePremises13"
                    onKeyDown={event =>
                      this.handleBackspaceKey(
                        event,
                        "#ResidencePremises12",
                        "#ResidencePremises13"
                      )
                    }
                    onChange={this.handleResidencePremises13}
                  />

                  <input
                    type="text"
                    className="Name-control"
                    maxLength="1"
                    value={this.state.data.ResidencePremises14}
                    name="ResidencePremises14"
                    id="ResidencePremises14"
                    onKeyDown={event =>
                      this.handleBackspaceKey(
                        event,
                        "#ResidencePremises13",
                        "#ResidencePremises14"
                      )
                    }
                    onChange={this.handleResidencePremises14}
                  />

                  <input
                    type="text"
                    className="Name-control"
                    maxLength="1"
                    value={this.state.data.ResidencePremises15}
                    name="ResidencePremises15"
                    id="ResidencePremises15"
                    onKeyDown={event =>
                      this.handleBackspaceKey(
                        event,
                        "#ResidencePremises14",
                        "#ResidencePremises15"
                      )
                    }
                    onChange={this.handleResidencePremises15}
                  />

                  <input
                    type="text"
                    className="Name-control"
                    maxLength="1"
                    value={this.state.data.ResidencePremises16}
                    name="ResidencePremises16"
                    id="ResidencePremises16"
                    onKeyDown={event =>
                      this.handleBackspaceKey(
                        event,
                        "#ResidencePremises15",
                        "#ResidencePremises16"
                      )
                    }
                    onChange={this.handleResidencePremises16}
                  />

                  <input
                    type="text"
                    className="Name-control"
                    maxLength="1"
                    value={this.state.data.ResidencePremises17}
                    name="ResidencePremises17"
                    id="ResidencePremises17"
                    onKeyDown={event =>
                      this.handleBackspaceKey(
                        event,
                        "#ResidencePremises16",
                        "#ResidencePremises17"
                      )
                    }
                    onChange={this.handleResidencePremises17}
                  />

                  <input
                    type="text"
                    className="Name-control"
                    maxLength="1"
                    value={this.state.data.ResidencePremises18}
                    name="ResidencePremises18"
                    id="ResidencePremises18"
                    onKeyDown={event =>
                      this.handleBackspaceKey(
                        event,
                        "#ResidencePremises17",
                        "#ResidencePremises18"
                      )
                    }
                    onChange={this.handleResidencePremises18}
                  />

                  <input
                    type="text"
                    className="Name-control"
                    maxLength="1"
                    value={this.state.data.ResidencePremises19}
                    name="ResidencePremises19"
                    id="ResidencePremises19"
                    onKeyDown={event =>
                      this.handleBackspaceKey(
                        event,
                        "#ResidencePremises18",
                        "#ResidencePremises19"
                      )
                    }
                    onChange={this.handleResidencePremises19}
                  />

                  <input
                    type="text"
                    className="Name-control"
                    maxLength="1"
                    value={this.state.data.ResidencePremises20}
                    name="ResidencePremises20"
                    id="ResidencePremises20"
                    onKeyDown={event =>
                      this.handleBackspaceKey(
                        event,
                        "#ResidencePremises19",
                        "#ResidencePremises20"
                      )
                    }
                    onChange={this.handleResidencePremises20}
                  />

                  <input
                    type="text"
                    className="Name-control"
                    maxLength="1"
                    value={this.state.data.ResidencePremises21}
                    name="ResidencePremises21"
                    id="ResidencePremises21"
                    onKeyDown={event =>
                      this.handleBackspaceKey(
                        event,
                        "#ResidencePremises20",
                        "#ResidencePremises21"
                      )
                    }
                    onChange={this.handleResidencePremises21}
                  />

                  <input
                    type="text"
                    className="Name-control"
                    maxLength="1"
                    value={this.state.data.ResidencePremises22}
                    name="ResidencePremises22"
                    id="ResidencePremises22"
                    onKeyDown={event =>
                      this.handleBackspaceKey(
                        event,
                        "#ResidencePremises21",
                        "#ResidencePremises22"
                      )
                    }
                    onChange={this.handleResidencePremises22}
                  />

                  <input
                    type="text"
                    className="Name-control"
                    maxLength="1"
                    value={this.state.data.ResidencePremises23}
                    name="ResidencePremises23"
                    id="ResidencePremises23"
                    onKeyDown={event =>
                      this.handleBackspaceKey(
                        event,
                        "#ResidencePremises22",
                        "#ResidencePremises23"
                      )
                    }
                    onChange={this.handleResidencePremises23}
                  />

                  <input
                    type="text"
                    className="Name-control"
                    maxLength="1"
                    value={this.state.data.ResidencePremises24}
                    name="ResidencePremises24"
                    id="ResidencePremises24"
                    onKeyDown={event =>
                      this.handleBackspaceKey(
                        event,
                        "#ResidencePremises23",
                        "#ResidencePremises24"
                      )
                    }
                    onChange={this.handleResidencePremises24}
                  />

                  <input
                    type="text"
                    className="Name-control"
                    maxLength="1"
                    value={this.state.data.ResidencePremises25}
                    name="ResidencePremises25"
                    id="ResidencePremises25"
                    onKeyDown={event =>
                      this.handleBackspaceKey(
                        event,
                        "#ResidencePremises24",
                        "#ResidencePremises25"
                      )
                    }
                    onChange={this.handleResidencePremises25}
                  />
                  {this.state.isIndicatorEnabled === false ? (
                    <span className="tooltip">
                      <img
                        src={indicator}
                        alt = "img"
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
                        Please enter combinations of alphabet, numbers{" "}
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
                    value={this.state.data.ResidenceRoad1}
                    name="ResidenceRoad1"
                    id="ResidenceRoad1"
                    onKeyDown={event =>
                      this.handleBackspaceKey(
                        event,
                        "#ResidenceRoad1",
                        "#ResidenceRoad1"
                      )
                    }
                    onChange={this.handleResidenceRoad1}
                  />

                  <input
                    type="text"
                    className="Name-control"
                    maxLength="1"
                    value={this.state.data.ResidenceRoad2}
                    name="ResidenceRoad2"
                    id="ResidenceRoad2"
                    onKeyDown={event =>
                      this.handleBackspaceKey(
                        event,
                        "#ResidenceRoad1",
                        "#ResidenceRoad2"
                      )
                    }
                    onChange={this.handleResidenceRoad2}
                  />

                  <input
                    type="text"
                    className="Name-control"
                    maxLength="1"
                    value={this.state.data.ResidenceRoad3}
                    name="ResidenceRoad3"
                    id="ResidenceRoad3"
                    onKeyDown={event =>
                      this.handleBackspaceKey(
                        event,
                        "#ResidenceRoad2",
                        "#ResidenceRoad3"
                      )
                    }
                    onChange={this.handleResidenceRoad3}
                  />

                  <input
                    type="text"
                    className="Name-control"
                    maxLength="1"
                    value={this.state.data.ResidenceRoad4}
                    name="ResidenceRoad4"
                    id="ResidenceRoad4"
                    onKeyDown={event =>
                      this.handleBackspaceKey(
                        event,
                        "#ResidenceRoad3",
                        "#ResidenceRoad4"
                      )
                    }
                    onChange={this.handleResidenceRoad4}
                  />

                  <input
                    type="text"
                    className="Name-control"
                    maxLength="1"
                    value={this.state.data.ResidenceRoad5}
                    name="ResidenceRoad5"
                    id="ResidenceRoad5"
                    onKeyDown={event =>
                      this.handleBackspaceKey(
                        event,
                        "#ResidenceRoad4",
                        "#ResidenceRoad5"
                      )
                    }
                    onChange={this.handleResidenceRoad5}
                  />

                  <input
                    type="text"
                    className="Name-control"
                    maxLength="1"
                    value={this.state.data.ResidenceRoad6}
                    name="ResidenceRoad6"
                    id="ResidenceRoad6"
                    onKeyDown={event =>
                      this.handleBackspaceKey(
                        event,
                        "#ResidenceRoad5",
                        "#ResidenceRoad6"
                      )
                    }
                    onChange={this.handleResidenceRoad6}
                  />

                  <input
                    type="text"
                    className="Name-control"
                    maxLength="1"
                    value={this.state.data.ResidenceRoad7}
                    name="ResidenceRoad7"
                    id="ResidenceRoad7"
                    onKeyDown={event =>
                      this.handleBackspaceKey(
                        event,
                        "#ResidenceRoad6",
                        "#ResidenceRoad7"
                      )
                    }
                    onChange={this.handleResidenceRoad7}
                  />

                  <input
                    type="text"
                    className="Name-control"
                    maxLength="1"
                    value={this.state.data.ResidenceRoad8}
                    name="ResidenceRoad8"
                    id="ResidenceRoad8"
                    onKeyDown={event =>
                      this.handleBackspaceKey(
                        event,
                        "#ResidenceRoad7",
                        "#ResidenceRoad8"
                      )
                    }
                    onChange={this.handleResidenceRoad8}
                  />

                  <input
                    type="text"
                    className="Name-control"
                    maxLength="1"
                    value={this.state.data.ResidenceRoad9}
                    name="ResidenceRoad9"
                    id="ResidenceRoad9"
                    onKeyDown={event =>
                      this.handleBackspaceKey(
                        event,
                        "#ResidenceRoad8",
                        "#ResidenceRoad9"
                      )
                    }
                    onChange={this.handleResidenceRoad9}
                  />

                  <input
                    type="text"
                    className="Name-control"
                    maxLength="1"
                    value={this.state.data.ResidenceRoad10}
                    name="ResidenceRoad10"
                    id="ResidenceRoad10"
                    onKeyDown={event =>
                      this.handleBackspaceKey(
                        event,
                        "#ResidenceRoad9",
                        "#ResidenceRoad10"
                      )
                    }
                    onChange={this.handleResidenceRoad10}
                  />

                  <input
                    type="text"
                    className="Name-control"
                    maxLength="1"
                    value={this.state.data.ResidenceRoad11}
                    name="ResidenceRoad11"
                    id="ResidenceRoad11"
                    onKeyDown={event =>
                      this.handleBackspaceKey(
                        event,
                        "#ResidenceRoad10",
                        "#ResidenceRoad11"
                      )
                    }
                    onChange={this.handleResidenceRoad11}
                  />

                  <input
                    type="text"
                    className="Name-control"
                    maxLength="1"
                    value={this.state.data.ResidenceRoad12}
                    name="ResidenceRoad12"
                    id="ResidenceRoad12"
                    onKeyDown={event =>
                      this.handleBackspaceKey(
                        event,
                        "#ResidenceRoad11",
                        "#ResidenceRoad12"
                      )
                    }
                    onChange={this.handleResidenceRoad12}
                  />

                  <input
                    type="text"
                    className="Name-control"
                    maxLength="1"
                    value={this.state.data.ResidenceRoad13}
                    name="ResidenceRoad13"
                    id="ResidenceRoad13"
                    onKeyDown={event =>
                      this.handleBackspaceKey(
                        event,
                        "#ResidenceRoad12",
                        "#ResidenceRoad13"
                      )
                    }
                    onChange={this.handleResidenceRoad13}
                  />

                  <input
                    type="text"
                    className="Name-control"
                    maxLength="1"
                    value={this.state.data.ResidenceRoad14}
                    name="ResidenceRoad14"
                    id="ResidenceRoad14"
                    onKeyDown={event =>
                      this.handleBackspaceKey(
                        event,
                        "#ResidenceRoad13",
                        "#ResidenceRoad14"
                      )
                    }
                    onChange={this.handleResidenceRoad14}
                  />

                  <input
                    type="text"
                    className="Name-control"
                    maxLength="1"
                    value={this.state.data.ResidenceRoad15}
                    name="ResidenceRoad15"
                    id="ResidenceRoad15"
                    onKeyDown={event =>
                      this.handleBackspaceKey(
                        event,
                        "#ResidenceRoad14",
                        "#ResidenceRoad15"
                      )
                    }
                    onChange={this.handleResidenceRoad15}
                  />

                  <input
                    type="text"
                    className="Name-control"
                    maxLength="1"
                    value={this.state.data.ResidenceRoad16}
                    name="ResidenceRoad16"
                    id="ResidenceRoad16"
                    onKeyDown={event =>
                      this.handleBackspaceKey(
                        event,
                        "#ResidenceRoad15",
                        "#ResidenceRoad16"
                      )
                    }
                    onChange={this.handleResidenceRoad16}
                  />

                  <input
                    type="text"
                    className="Name-control"
                    maxLength="1"
                    value={this.state.data.ResidenceRoad17}
                    name="ResidenceRoad17"
                    id="ResidenceRoad17"
                    onKeyDown={event =>
                      this.handleBackspaceKey(
                        event,
                        "#ResidenceRoad16",
                        "#ResidenceRoad17"
                      )
                    }
                    onChange={this.handleResidenceRoad17}
                  />

                  <input
                    type="text"
                    className="Name-control"
                    maxLength="1"
                    value={this.state.data.ResidenceRoad18}
                    name="ResidenceRoad18"
                    id="ResidenceRoad18"
                    onKeyDown={event =>
                      this.handleBackspaceKey(
                        event,
                        "#ResidenceRoad17",
                        "#ResidenceRoad18"
                      )
                    }
                    onChange={this.handleResidenceRoad18}
                  />

                  <input
                    type="text"
                    className="Name-control"
                    maxLength="1"
                    value={this.state.data.ResidenceRoad19}
                    name="ResidenceRoad19"
                    id="ResidenceRoad19"
                    onKeyDown={event =>
                      this.handleBackspaceKey(
                        event,
                        "#ResidenceRoad18",
                        "#ResidenceRoad19"
                      )
                    }
                    onChange={this.handleResidenceRoad19}
                  />

                  <input
                    type="text"
                    className="Name-control"
                    maxLength="1"
                    value={this.state.data.ResidenceRoad20}
                    name="ResidenceRoad20"
                    id="ResidenceRoad20"
                    onKeyDown={event =>
                      this.handleBackspaceKey(
                        event,
                        "#ResidenceRoad19",
                        "#ResidenceRoad20"
                      )
                    }
                    onChange={this.handleResidenceRoad20}
                  />

                  <input
                    type="text"
                    className="Name-control"
                    maxLength="1"
                    value={this.state.data.ResidenceRoad21}
                    name="ResidenceRoad21"
                    id="ResidenceRoad21"
                    onKeyDown={event =>
                      this.handleBackspaceKey(
                        event,
                        "#ResidenceRoad20",
                        "#ResidenceRoad21"
                      )
                    }
                    onChange={this.handleResidenceRoad21}
                  />

                  <input
                    type="text"
                    className="Name-control"
                    maxLength="1"
                    value={this.state.data.ResidenceRoad22}
                    name="ResidenceRoad22"
                    id="ResidenceRoad22"
                    onKeyDown={event =>
                      this.handleBackspaceKey(
                        event,
                        "#ResidenceRoad21",
                        "#ResidenceRoad22"
                      )
                    }
                    onChange={this.handleResidenceRoad22}
                  />

                  <input
                    type="text"
                    className="Name-control"
                    maxLength="1"
                    value={this.state.data.ResidenceRoad23}
                    name="ResidenceRoad23"
                    id="ResidenceRoad23"
                    onKeyDown={event =>
                      this.handleBackspaceKey(
                        event,
                        "#ResidenceRoad22",
                        "#ResidenceRoad23"
                      )
                    }
                    onChange={this.handleResidenceRoad23}
                  />

                  <input
                    type="text"
                    className="Name-control"
                    maxLength="1"
                    value={this.state.data.ResidenceRoad24}
                    name="ResidenceRoad24"
                    id="ResidenceRoad24"
                    onKeyDown={event =>
                      this.handleBackspaceKey(
                        event,
                        "#ResidenceRoad23",
                        "#ResidenceRoad24"
                      )
                    }
                    onChange={this.handleResidenceRoad24}
                  />

                  <input
                    type="text"
                    className="Name-control"
                    maxLength="1"
                    value={this.state.data.ResidenceRoad25}
                    name="ResidenceRoad25"
                    id="ResidenceRoad25"
                    onKeyDown={event =>
                      this.handleBackspaceKey(
                        event,
                        "#ResidenceRoad24",
                        "#ResidenceRoad25"
                      )
                    }
                    onChange={this.handleResidenceRoad25}
                  />

                  {this.state.isIndicatorEnabled === false ? (
                    <span className="tooltip">
                      <img
                        src={indicator}
                        alt = "img"
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
                        Please enter combinations of alphabet, numbers{" "}
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
                    value={this.state.data.ResidenceArea1}
                    name="ResidenceArea1"
                    id="ResidenceArea1"
                    onKeyDown={event =>
                      this.handleBackspaceKey(
                        event,
                        "#ResidenceArea1",
                        "#ResidenceArea1"
                      )
                    }
                    onChange={this.handleResidenceArea1}
                  />

                  <input
                    type="text"
                    className="Name-control"
                    maxLength="1"
                    value={this.state.data.ResidenceArea2}
                    name="ResidenceArea2"
                    id="ResidenceArea2"
                    onKeyDown={event =>
                      this.handleBackspaceKey(
                        event,
                        "#ResidenceArea1",
                        "#ResidenceArea2"
                      )
                    }
                    onChange={this.handleResidenceArea2}
                  />

                  <input
                    type="text"
                    className="Name-control"
                    maxLength="1"
                    value={this.state.data.ResidenceArea3}
                    name="ResidenceArea3"
                    id="ResidenceArea3"
                    onKeyDown={event =>
                      this.handleBackspaceKey(
                        event,
                        "#ResidenceArea2",
                        "#ResidenceArea3"
                      )
                    }
                    onChange={this.handleResidenceArea3}
                  />

                  <input
                    type="text"
                    className="Name-control"
                    maxLength="1"
                    value={this.state.data.ResidenceArea4}
                    name="ResidenceArea4"
                    id="ResidenceArea4"
                    onKeyDown={event =>
                      this.handleBackspaceKey(
                        event,
                        "#ResidenceArea3",
                        "#ResidenceArea4"
                      )
                    }
                    onChange={this.handleResidenceArea4}
                  />

                  <input
                    type="text"
                    className="Name-control"
                    maxLength="1"
                    value={this.state.data.ResidenceArea5}
                    name="ResidenceArea5"
                    id="ResidenceArea5"
                    onKeyDown={event =>
                      this.handleBackspaceKey(
                        event,
                        "#ResidenceArea4",
                        "#ResidenceArea5"
                      )
                    }
                    onChange={this.handleResidenceArea5}
                  />

                  <input
                    type="text"
                    className="Name-control"
                    maxLength="1"
                    value={this.state.data.ResidenceArea6}
                    name="ResidenceArea6"
                    id="ResidenceArea6"
                    onKeyDown={event =>
                      this.handleBackspaceKey(
                        event,
                        "#ResidenceArea5",
                        "#ResidenceArea6"
                      )
                    }
                    onChange={this.handleResidenceArea6}
                  />

                  <input
                    type="text"
                    className="Name-control"
                    maxLength="1"
                    value={this.state.data.ResidenceArea7}
                    name="ResidenceArea7"
                    id="ResidenceArea7"
                    onKeyDown={event =>
                      this.handleBackspaceKey(
                        event,
                        "#ResidenceArea6",
                        "#ResidenceArea7"
                      )
                    }
                    onChange={this.handleResidenceArea7}
                  />

                  <input
                    type="text"
                    className="Name-control"
                    maxLength="1"
                    value={this.state.data.ResidenceArea8}
                    name="ResidenceArea8"
                    id="ResidenceArea8"
                    onKeyDown={event =>
                      this.handleBackspaceKey(
                        event,
                        "#ResidenceArea7",
                        "#ResidenceArea8"
                      )
                    }
                    onChange={this.handleResidenceArea8}
                  />

                  <input
                    type="text"
                    className="Name-control"
                    maxLength="1"
                    value={this.state.data.ResidenceArea9}
                    name="ResidenceArea9"
                    id="ResidenceArea9"
                    onKeyDown={event =>
                      this.handleBackspaceKey(
                        event,
                        "#ResidenceArea8",
                        "#ResidenceArea9"
                      )
                    }
                    onChange={this.handleResidenceArea9}
                  />

                  <input
                    type="text"
                    className="Name-control"
                    maxLength="1"
                    value={this.state.data.ResidenceArea10}
                    name="ResidenceArea10"
                    id="ResidenceArea10"
                    onKeyDown={event =>
                      this.handleBackspaceKey(
                        event,
                        "#ResidenceArea9",
                        "#ResidenceArea10"
                      )
                    }
                    onChange={this.handleResidenceArea10}
                  />

                  <input
                    type="text"
                    className="Name-control"
                    maxLength="1"
                    value={this.state.data.ResidenceArea11}
                    name="ResidenceArea11"
                    id="ResidenceArea11"
                    onKeyDown={event =>
                      this.handleBackspaceKey(
                        event,
                        "#ResidenceArea10",
                        "#ResidenceArea11"
                      )
                    }
                    onChange={this.handleResidenceArea11}
                  />

                  <input
                    type="text"
                    className="Name-control"
                    maxLength="1"
                    value={this.state.data.ResidenceArea12}
                    name="ResidenceArea12"
                    id="ResidenceArea12"
                    onKeyDown={event =>
                      this.handleBackspaceKey(
                        event,
                        "#ResidenceArea11",
                        "#ResidenceArea12"
                      )
                    }
                    onChange={this.handleResidenceArea12}
                  />

                  <input
                    type="text"
                    className="Name-control"
                    maxLength="1"
                    value={this.state.data.ResidenceArea13}
                    name="ResidenceArea13"
                    id="ResidenceArea13"
                    onKeyDown={event =>
                      this.handleBackspaceKey(
                        event,
                        "#ResidenceArea12",
                        "#ResidenceArea13"
                      )
                    }
                    onChange={this.handleResidenceArea13}
                  />

                  <input
                    type="text"
                    className="Name-control"
                    maxLength="1"
                    value={this.state.data.ResidenceArea14}
                    name="ResidenceArea14"
                    id="ResidenceArea14"
                    onKeyDown={event =>
                      this.handleBackspaceKey(
                        event,
                        "#ResidenceArea13",
                        "#ResidenceArea14"
                      )
                    }
                    onChange={this.handleResidenceArea14}
                  />

                  <input
                    type="text"
                    className="Name-control"
                    maxLength="1"
                    value={this.state.data.ResidenceArea15}
                    name="ResidenceArea15"
                    id="ResidenceArea15"
                    onKeyDown={event =>
                      this.handleBackspaceKey(
                        event,
                        "#ResidenceArea14",
                        "#ResidenceArea15"
                      )
                    }
                    onChange={this.handleResidenceArea15}
                  />

                  <input
                    type="text"
                    className="Name-control"
                    maxLength="1"
                    value={this.state.data.ResidenceArea16}
                    name="ResidenceArea16"
                    id="ResidenceArea16"
                    onKeyDown={event =>
                      this.handleBackspaceKey(
                        event,
                        "#ResidenceArea15",
                        "#ResidenceArea16"
                      )
                    }
                    onChange={this.handleResidenceArea16}
                  />

                  <input
                    type="text"
                    className="Name-control"
                    maxLength="1"
                    value={this.state.data.ResidenceArea17}
                    name="ResidenceArea17"
                    id="ResidenceArea17"
                    onKeyDown={event =>
                      this.handleBackspaceKey(
                        event,
                        "#ResidenceArea16",
                        "#ResidenceArea17"
                      )
                    }
                    onChange={this.handleResidenceArea17}
                  />

                  <input
                    type="text"
                    className="Name-control"
                    maxLength="1"
                    value={this.state.data.ResidenceArea18}
                    name="ResidenceArea18"
                    id="ResidenceArea18"
                    onKeyDown={event =>
                      this.handleBackspaceKey(
                        event,
                        "#ResidenceArea17",
                        "#ResidenceArea18"
                      )
                    }
                    onChange={this.handleResidenceArea18}
                  />

                  <input
                    type="text"
                    className="Name-control"
                    maxLength="1"
                    value={this.state.data.ResidenceArea19}
                    name="ResidenceArea19"
                    id="ResidenceArea19"
                    onKeyDown={event =>
                      this.handleBackspaceKey(
                        event,
                        "#ResidenceArea18",
                        "#ResidenceArea19"
                      )
                    }
                    onChange={this.handleResidenceArea19}
                  />

                  <input
                    type="text"
                    className="Name-control"
                    maxLength="1"
                    value={this.state.data.ResidenceArea20}
                    name="ResidenceArea20"
                    id="ResidenceArea20"
                    onKeyDown={event =>
                      this.handleBackspaceKey(
                        event,
                        "#ResidenceArea19",
                        "#ResidenceArea20"
                      )
                    }
                    onChange={this.handleResidenceArea20}
                  />

                  <input
                    type="text"
                    className="Name-control"
                    maxLength="1"
                    value={this.state.data.ResidenceArea21}
                    name="ResidenceArea21"
                    id="ResidenceArea21"
                    onKeyDown={event =>
                      this.handleBackspaceKey(
                        event,
                        "#ResidenceArea20",
                        "#ResidenceArea21"
                      )
                    }
                    onChange={this.handleResidenceArea21}
                  />

                  <input
                    type="text"
                    className="Name-control"
                    maxLength="1"
                    value={this.state.data.ResidenceArea22}
                    name="ResidenceArea22"
                    id="ResidenceArea22"
                    onKeyDown={event =>
                      this.handleBackspaceKey(
                        event,
                        "#ResidenceArea21",
                        "#ResidenceArea22"
                      )
                    }
                    onChange={this.handleResidenceArea22}
                  />

                  <input
                    type="text"
                    className="Name-control"
                    maxLength="1"
                    value={this.state.data.ResidenceArea23}
                    name="ResidenceArea23"
                    id="ResidenceArea23"
                    onKeyDown={event =>
                      this.handleBackspaceKey(
                        event,
                        "#ResidenceArea22",
                        "#ResidenceArea23"
                      )
                    }
                    onChange={this.handleResidenceArea23}
                  />

                  <input
                    type="text"
                    className="Name-control"
                    maxLength="1"
                    value={this.state.data.ResidenceArea24}
                    name="ResidenceArea24"
                    id="ResidenceArea24"
                    onKeyDown={event =>
                      this.handleBackspaceKey(
                        event,
                        "#ResidenceArea23",
                        "#ResidenceArea24"
                      )
                    }
                    onChange={this.handleResidenceArea24}
                  />

                  <input
                    type="text"
                    className="Name-control"
                    maxLength="1"
                    value={this.state.data.ResidenceArea25}
                    name="ResidenceArea25"
                    id="ResidenceArea25"
                    onKeyDown={event =>
                      this.handleBackspaceKey(
                        event,
                        "#ResidenceArea24",
                        "#ResidenceArea25"
                      )
                    }
                    onChange={this.handleResidenceArea25}
                  />
                  {this.state.isIndicatorEnabled === false ? (
                    <span className="tooltip">
                      <img
                        src={indicator}
                        alt = "img"
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
                    value={this.state.data.ResidenceTown1}
                    name="ResidenceTown1"
                    id="ResidenceTown1"
                    onKeyDown={event =>
                      this.handleBackspaceKey(
                        event,
                        "#ResidenceTown1",
                        "#ResidenceTown1"
                      )
                    }
                    onChange={this.handleResidenceTown1}
                  />

                  <input
                    type="text"
                    className="Name-control"
                    maxLength="1"
                    value={this.state.data.ResidenceTown2}
                    name="ResidenceTown2"
                    id="ResidenceTown2"
                    onKeyDown={event =>
                      this.handleBackspaceKey(
                        event,
                        "#ResidenceTown1",
                        "#ResidenceTown2"
                      )
                    }
                    onChange={this.handleResidenceTown2}
                  />

                  <input
                    type="text"
                    className="Name-control"
                    maxLength="1"
                    value={this.state.data.ResidenceTown3}
                    name="ResidenceTown3"
                    id="ResidenceTown3"
                    onKeyDown={event =>
                      this.handleBackspaceKey(
                        event,
                        "#ResidenceTown2",
                        "#ResidenceTown3"
                      )
                    }
                    onChange={this.handleResidenceTown3}
                  />

                  <input
                    type="text"
                    className="Name-control"
                    maxLength="1"
                    value={this.state.data.ResidenceTown4}
                    name="ResidenceTown4"
                    id="ResidenceTown4"
                    onKeyDown={event =>
                      this.handleBackspaceKey(
                        event,
                        "#ResidenceTown3",
                        "#ResidenceTown4"
                      )
                    }
                    onChange={this.handleResidenceTown4}
                  />

                  <input
                    type="text"
                    className="Name-control"
                    maxLength="1"
                    value={this.state.data.ResidenceTown5}
                    name="ResidenceTown5"
                    id="ResidenceTown5"
                    onKeyDown={event =>
                      this.handleBackspaceKey(
                        event,
                        "#ResidenceTown4",
                        "#ResidenceTown5"
                      )
                    }
                    onChange={this.handleResidenceTown5}
                  />

                  <input
                    type="text"
                    className="Name-control"
                    maxLength="1"
                    value={this.state.data.ResidenceTown6}
                    name="ResidenceTown6"
                    id="ResidenceTown6"
                    onKeyDown={event =>
                      this.handleBackspaceKey(
                        event,
                        "#ResidenceTown5",
                        "#ResidenceTown6"
                      )
                    }
                    onChange={this.handleResidenceTown6}
                  />

                  <input
                    type="text"
                    className="Name-control"
                    maxLength="1"
                    value={this.state.data.ResidenceTown7}
                    name="ResidenceTown7"
                    id="ResidenceTown7"
                    onKeyDown={event =>
                      this.handleBackspaceKey(
                        event,
                        "#ResidenceTown6",
                        "#ResidenceTown7"
                      )
                    }
                    onChange={this.handleResidenceTown7}
                  />

                  <input
                    type="text"
                    className="Name-control"
                    maxLength="1"
                    value={this.state.data.ResidenceTown8}
                    name="ResidenceTown8"
                    id="ResidenceTown8"
                    onKeyDown={event =>
                      this.handleBackspaceKey(
                        event,
                        "#ResidenceTown7",
                        "#ResidenceTown8"
                      )
                    }
                    onChange={this.handleResidenceTown8}
                  />

                  <input
                    type="text"
                    className="Name-control"
                    maxLength="1"
                    value={this.state.data.ResidenceTown9}
                    name="ResidenceTown9"
                    id="ResidenceTown9"
                    onKeyDown={event =>
                      this.handleBackspaceKey(
                        event,
                        "#ResidenceTown8",
                        "#ResidenceTown9"
                      )
                    }
                    onChange={this.handleResidenceTown9}
                  />

                  <input
                    type="text"
                    className="Name-control"
                    maxLength="1"
                    value={this.state.data.ResidenceTown10}
                    name="ResidenceTown10"
                    id="ResidenceTown10"
                    onKeyDown={event =>
                      this.handleBackspaceKey(
                        event,
                        "#ResidenceTown9",
                        "#ResidenceTown10"
                      )
                    }
                    onChange={this.handleResidenceTown10}
                  />

                  <input
                    type="text"
                    className="Name-control"
                    maxLength="1"
                    value={this.state.data.ResidenceTown11}
                    name="ResidenceTown11"
                    id="ResidenceTown11"
                    onKeyDown={event =>
                      this.handleBackspaceKey(
                        event,
                        "#ResidenceTown10",
                        "#ResidenceTown11"
                      )
                    }
                    onChange={this.handleResidenceTown11}
                  />

                  <input
                    type="text"
                    className="Name-control"
                    maxLength="1"
                    value={this.state.data.ResidenceTown12}
                    name="ResidenceTown12"
                    id="ResidenceTown12"
                    onKeyDown={event =>
                      this.handleBackspaceKey(
                        event,
                        "#ResidenceTown11",
                        "#ResidenceTown12"
                      )
                    }
                    onChange={this.handleResidenceTown12}
                  />

                  <input
                    type="text"
                    className="Name-control"
                    maxLength="1"
                    value={this.state.data.ResidenceTown13}
                    name="ResidenceTown13"
                    id="ResidenceTown13"
                    onKeyDown={event =>
                      this.handleBackspaceKey(
                        event,
                        "#ResidenceTown12",
                        "#ResidenceTown13"
                      )
                    }
                    onChange={this.handleResidenceTown13}
                  />

                  <input
                    type="text"
                    className="Name-control"
                    maxLength="1"
                    value={this.state.data.ResidenceTown14}
                    name="ResidenceTown14"
                    id="ResidenceTown14"
                    onKeyDown={event =>
                      this.handleBackspaceKey(
                        event,
                        "#ResidenceTown13",
                        "#ResidenceTown14"
                      )
                    }
                    onChange={this.handleResidenceTown14}
                  />

                  <input
                    type="text"
                    className="Name-control"
                    maxLength="1"
                    value={this.state.data.ResidenceTown15}
                    name="ResidenceTown15"
                    id="ResidenceTown15"
                    onKeyDown={event =>
                      this.handleBackspaceKey(
                        event,
                        "#ResidenceTown14",
                        "#ResidenceTown15"
                      )
                    }
                    onChange={this.handleResidenceTown15}
                  />

                  <input
                    type="text"
                    className="Name-control"
                    maxLength="1"
                    value={this.state.data.ResidenceTown16}
                    name="ResidenceTown16"
                    id="ResidenceTown16"
                    onKeyDown={event =>
                      this.handleBackspaceKey(
                        event,
                        "#ResidenceTown15",
                        "#ResidenceTown16"
                      )
                    }
                    onChange={this.handleResidenceTown16}
                  />

                  <input
                    type="text"
                    className="Name-control"
                    maxLength="1"
                    value={this.state.data.ResidenceTown17}
                    name="ResidenceTown17"
                    id="ResidenceTown17"
                    onKeyDown={event =>
                      this.handleBackspaceKey(
                        event,
                        "#ResidenceTown16",
                        "#ResidenceTown17"
                      )
                    }
                    onChange={this.handleResidenceTown17}
                  />

                  <input
                    type="text"
                    className="Name-control"
                    maxLength="1"
                    value={this.state.data.ResidenceTown18}
                    name="ResidenceTown18"
                    id="ResidenceTown18"
                    onKeyDown={event =>
                      this.handleBackspaceKey(
                        event,
                        "#ResidenceTown17",
                        "#ResidenceTown18"
                      )
                    }
                    onChange={this.handleResidenceTown18}
                  />

                  <input
                    type="text"
                    className="Name-control"
                    maxLength="1"
                    value={this.state.data.ResidenceTown19}
                    name="ResidenceTown19"
                    id="ResidenceTown19"
                    onKeyDown={event =>
                      this.handleBackspaceKey(
                        event,
                        "#ResidenceTown18",
                        "#ResidenceTown19"
                      )
                    }
                    onChange={this.handleResidenceTown19}
                  />

                  <input
                    type="text"
                    className="Name-control"
                    maxLength="1"
                    value={this.state.data.ResidenceTown20}
                    name="ResidenceTown20"
                    id="ResidenceTown20"
                    onKeyDown={event =>
                      this.handleBackspaceKey(
                        event,
                        "#ResidenceTown19",
                        "#ResidenceTown20"
                      )
                    }
                    onChange={this.handleResidenceTown20}
                  />

                  <input
                    type="text"
                    className="Name-control"
                    maxLength="1"
                    value={this.state.data.ResidenceTown21}
                    name="ResidenceTown21"
                    id="ResidenceTown21"
                    onKeyDown={event =>
                      this.handleBackspaceKey(
                        event,
                        "#ResidenceTown20",
                        "#ResidenceTown21"
                      )
                    }
                    onChange={this.handleResidenceTown21}
                  />

                  <input
                    type="text"
                    className="Name-control"
                    maxLength="1"
                    value={this.state.data.ResidenceTown22}
                    name="ResidenceTown22"
                    id="ResidenceTown22"
                    onKeyDown={event =>
                      this.handleBackspaceKey(
                        event,
                        "#ResidenceTown21",
                        "#ResidenceTown22"
                      )
                    }
                    onChange={this.handleResidenceTown22}
                  />

                  <input
                    type="text"
                    className="Name-control"
                    maxLength="1"
                    value={this.state.data.ResidenceTown23}
                    name="ResidenceTown23"
                    id="ResidenceTown23"
                    onKeyDown={event =>
                      this.handleBackspaceKey(
                        event,
                        "#ResidenceTown22",
                        "#ResidenceTown23"
                      )
                    }
                    onChange={this.handleResidenceTown23}
                  />

                  <input
                    type="text"
                    className="Name-control"
                    maxLength="1"
                    value={this.state.data.ResidenceTown24}
                    name="ResidenceTown24"
                    id="ResidenceTown24"
                    onKeyDown={event =>
                      this.handleBackspaceKey(
                        event,
                        "#ResidenceTown23",
                        "#ResidenceTown24"
                      )
                    }
                    onChange={this.handleResidenceTown24}
                  />

                  <input
                    type="text"
                    className="Name-control"
                    maxLength="1"
                    value={this.state.data.ResidenceTown25}
                    name="ResidenceTown25"
                    id="ResidenceTown25"
                    onKeyDown={event =>
                      this.handleBackspaceKey(
                        event,
                        "#ResidenceTown24",
                        "#ResidenceTown25"
                      )
                    }
                    onChange={this.handleResidenceTown25}
                  />
                  {this.state.isIndicatorEnabled === false ? (
                    <span className="tooltip">
                      <img
                        src={indicator}
                        alt = "img"
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

        <label className="CountryId"> Country Name </label>
        <br />

        <input
          className="StateValue"
          name="ResidenceState"
          id="ResidenceState"
          value={this.state.data.ResidenceState}
          onChange={event => this.handleResidenceState(event)}
        />

        <input
          type="text"
          className="Pincode-control"
          maxLength="1"
          value={this.state.data.ResidencePincode1}
          name="ResidencePincode1"
          id="ResidencePincode1"
          onKeyDown={event =>
            this.handleBackspaceKey(
              event,
              "#ResidencePincode1",
              "#ResidencePincode1"
            )
          }
          onChange={this.handleResidencePincode1}
        />

        <input
          type="text"
          className="Pincode-control"
          maxLength="1"
          value={this.state.data.ResidencePincode2}
          name="ResidencePincode2"
          id="ResidencePincode2"
          onKeyDown={event =>
            this.handleBackspaceKey(
              event,
              "#ResidencePincode1",
              "#ResidencePincode2"
            )
          }
          onChange={this.handleResidencePincode2}
        />

        <input
          type="text"
          className="Pincode-control"
          maxLength="1"
          value={this.state.data.ResidencePincode3}
          name="ResidencePincode3"
          id="ResidencePincode3"
          onKeyDown={event =>
            this.handleBackspaceKey(
              event,
              "#ResidencePincode2",
              "#ResidencePincode3"
            )
          }
          onChange={this.handleResidencePincode3}
        />

        <input
          type="text"
          className="Pincode-control"
          maxLength="1"
          value={this.state.data.ResidencePincode4}
          name="ResidencePincode4"
          id="ResidencePincode4"
          onKeyDown={event =>
            this.handleBackspaceKey(
              event,
              "#ResidencePincode3",
              "#ResidencePincode4"
            )
          }
          onChange={this.handleResidencePincode4}
        />

        <input
          type="text"
          className="Pincode-control"
          maxLength="1"
          value={this.state.data.ResidencePincode5}
          name="ResidencePincode5"
          id="ResidencePincode5"
          onKeyDown={event =>
            this.handleBackspaceKey(
              event,
              "#ResidencePincode4",
              "#ResidencePincode5"
            )
          }
          onChange={this.handleResidencePincode5}
        />

        <input
          type="text"
          className="Pincode-control"
          maxLength="1"
          value={this.state.data.ResidencePincode6}
          name="ResidencePincode6"
          id="ResidencePincode6"
          onKeyDown={event =>
            this.handleBackspaceKey(
              event,
              "#ResidencePincode5",
              "#ResidencePincode6"
            )
          }
          onChange={this.handleResidencePincode6}
        />

        <input
          type="text"
          className="Pincode-control"
          maxLength="1"
          value={this.state.data.ResidencePincode7}
          name="ResidencePincode7"
          id="ResidencePincode7"
          onKeyDown={event =>
            this.handleBackspaceKey(
              event,
              "#ResidencePincode6",
              "#ResidencePincode7"
            )
          }
          onChange={this.handleResidencePincode7}
        />

        <input
          className="CountryValue"
          name="ResidenceCountry"
          id="ResidenceCountry"
          value={this.state.data.ResidenceCountry}
          onChange={event => this.handleResidenceCountry(event)}
        />

        {this.state.isIndicatorEnabled === false ? (
          <span className="tooltip">
            <img
              src={indicator}
              alt = "img"
              style={{
                width: "2.3%",
                height: "2.3%",
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
      </div>
    );
  }
}

export default SeventhComponent;
