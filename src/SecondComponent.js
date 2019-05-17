import React, { Component } from "react";
import "./Form1.css";
import "./Panmain.css";
import indicator from "./instuction.png";
import $ from "jquery";
import namefield from "./namefield.jpeg";

class SecondComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isModalEnabled: false,
      isIndicatorEnabled: false,

      errors: {
        AbbreviationOne: "",
        AbbreviationTwo: "",
        errorid: "1"
      },
      data: {
        AbbreviationOne1: "",
        AbbreviationOne2: "",
        AbbreviationOne3: "",
        AbbreviationOne4: "",
        AbbreviationOne5: "",
        AbbreviationOne6: "",
        AbbreviationOne7: "",
        AbbreviationOne8: "",
        AbbreviationOne9: "",
        AbbreviationOne10: "",
        AbbreviationOne11: "",
        AbbreviationOne12: "",
        AbbreviationOne13: "",
        AbbreviationOne14: "",
        AbbreviationOne15: "",
        AbbreviationOne16: "",
        AbbreviationOne17: "",
        AbbreviationOne18: "",
        AbbreviationOne19: "",
        AbbreviationOne20: "",
        AbbreviationOne21: "",
        AbbreviationOne22: "",
        AbbreviationOne23: "",
        AbbreviationOne24: "",
        AbbreviationOne25: "",
        AbbreviationOne26: "",
        AbbreviationOne27: "",
        AbbreviationOne28: "",
        AbbreviationOne29: "",
        AbbreviationOne30: "",
        AbbreviationOne31: "",
        AbbreviationOne32: "",
        AbbreviationOne33: "",
        AbbreviationOne34: "",
        AbbreviationOne35: "",
        AbbreviationOne36: "",
        AbbreviationOne37: "",
        AbbreviationOne: "",
        AbbreviationTwo1: "",
        AbbreviationTwo2: "",
        AbbreviationTwo3: "",
        AbbreviationTwo4: "",
        AbbreviationTwo5: "",
        AbbreviationTwo6: "",
        AbbreviationTwo7: "",
        AbbreviationTwo8: "",
        AbbreviationTwo9: "",
        AbbreviationTwo10: "",
        AbbreviationTwo11: "",
        AbbreviationTwo12: "",
        AbbreviationTwo13: "",
        AbbreviationTwo14: "",
        AbbreviationTwo15: "",
        AbbreviationTwo16: "",
        AbbreviationTwo17: "",
        AbbreviationTwo18: "",
        AbbreviationTwo19: "",
        AbbreviationTwo20: "",
        AbbreviationTwo21: "",
        AbbreviationTwo22: "",
        AbbreviationTwo23: "",
        AbbreviationTwo24: "",
        AbbreviationTwo25: "",
        AbbreviationTwo26: "",
        AbbreviationTwo27: "",
        AbbreviationTwo28: "",
        AbbreviationTwo29: "",
        AbbreviationTwo30: "",
        AbbreviationTwo31: "",
        AbbreviationTwo32: "",
        AbbreviationTwo33: "",
        AbbreviationTwo34: "",
        AbbreviationTwo35: "",
        AbbreviationTwo36: "",
        AbbreviationTwo37: "",
        AbbreviationTwo: "",
        dataid: "1"
      }
    };
  }

  handleAbbreviationOne1 = event => {
    this.handleInput(event);
    this.validateAbbreviationOne(event);
    event.target.value === ""
      ? $("#AbbreviationOne1").focus()
      : $("#AbbreviationOne2").focus();
  };

  handleAbbreviationOne2 = event => {
    this.handleInput(event);
    this.validateAbbreviationOne(event);
    event.target.value === ""
      ? $("#AbbreviationOne2").focus()
      : $("#AbbreviationOne3").focus();
  };

  handleAbbreviationOne3 = event => {
    this.handleInput(event);
    this.validateAbbreviationOne(event);
    event.target.value === ""
      ? $("#AbbreviationOne3").focus()
      : $("#AbbreviationOne4").focus();
  };

  handleAbbreviationOne4 = event => {
    this.handleInput(event);
    this.validateAbbreviationOne(event);
    event.target.value === ""
      ? $("#AbbreviationOne4").focus()
      : $("#AbbreviationOne5").focus();
  };

  handleAbbreviationOne5 = event => {
    this.handleInput(event);
    this.validateAbbreviationOne(event);
    event.target.value === ""
      ? $("#AbbreviationOne5").focus()
      : $("#AbbreviationOne6").focus();
  };

  handleAbbreviationOne6 = event => {
    this.handleInput(event);
    this.validateAbbreviationOne(event);
    event.target.value === ""
      ? $("#AbbreviationOne6").focus()
      : $("#AbbreviationOne7").focus();
  };

  handleAbbreviationOne7 = event => {
    this.handleInput(event);
    this.validateAbbreviationOne(event);
    event.target.value === ""
      ? $("#AbbreviationOne7").focus()
      : $("#AbbreviationOne8").focus();
  };

  handleAbbreviationOne8 = event => {
    this.handleInput(event);
    this.validateAbbreviationOne(event);
    event.target.value === ""
      ? $("#AbbreviationOne8").focus()
      : $("#AbbreviationOne9").focus();
  };

  handleAbbreviationOne9 = event => {
    this.handleInput(event);
    this.validateAbbreviationOne(event);
    event.target.value === ""
      ? $("#AbbreviationOne9").focus()
      : $("#AbbreviationOne10").focus();
  };

  handleAbbreviationOne10 = event => {
    this.handleInput(event);
    this.validateAbbreviationOne(event);
    event.target.value === ""
      ? $("#AbbreviationOne10").focus()
      : $("#AbbreviationOne11").focus();
  };

  handleAbbreviationOne11 = event => {
    this.handleInput(event);
    this.validateAbbreviationOne(event);
    event.target.value === ""
      ? $("#AbbreviationOne11").focus()
      : $("#AbbreviationOne12").focus();
  };

  handleAbbreviationOne12 = event => {
    this.handleInput(event);
    this.validateAbbreviationOne(event);
    event.target.value === ""
      ? $("#AbbreviationOne12").focus()
      : $("#AbbreviationOne13").focus();
  };

  handleAbbreviationOne13 = event => {
    this.handleInput(event);
    this.validateAbbreviationOne(event);
    event.target.value === ""
      ? $("#AbbreviationOne13").focus()
      : $("#AbbreviationOne14").focus();
  };

  handleAbbreviationOne14 = event => {
    this.handleInput(event);
    this.validateAbbreviationOne(event);
    event.target.value === ""
      ? $("#AbbreviationOne14").focus()
      : $("#AbbreviationOne15").focus();
  };

  handleAbbreviationOne15 = event => {
    this.handleInput(event);
    this.validateAbbreviationOne(event);
    event.target.value === ""
      ? $("#AbbreviationOne15").focus()
      : $("#AbbreviationOne16").focus();
  };

  handleAbbreviationOne16 = event => {
    this.handleInput(event);
    this.validateAbbreviationOne(event);
    event.target.value === ""
      ? $("#AbbreviationOne16").focus()
      : $("#AbbreviationOne17").focus();
  };

  handleAbbreviationOne17 = event => {
    this.handleInput(event);
    this.validateAbbreviationOne(event);
    event.target.value === ""
      ? $("#AbbreviationOne17").focus()
      : $("#AbbreviationOne18").focus();
  };

  handleAbbreviationOne18 = event => {
    this.handleInput(event);
    this.validateAbbreviationOne(event);
    event.target.value === ""
      ? $("#AbbreviationOne18").focus()
      : $("#AbbreviationOne19").focus();
  };

  handleAbbreviationOne19 = event => {
    this.handleInput(event);
    this.validateAbbreviationOne(event);
    event.target.value === ""
      ? $("#AbbreviationOne19").focus()
      : $("#AbbreviationOne20").focus();
  };

  handleAbbreviationOne20 = event => {
    this.handleInput(event);
    this.validateAbbreviationOne(event);
    event.target.value === ""
      ? $("#AbbreviationOne20").focus()
      : $("#AbbreviationOne21").focus();
  };

  handleAbbreviationOne21 = event => {
    this.handleInput(event);
    this.validateAbbreviationOne(event);
    event.target.value === ""
      ? $("#AbbreviationOne21").focus()
      : $("#AbbreviationOne22").focus();
  };

  handleAbbreviationOne22 = event => {
    this.handleInput(event);
    this.validateAbbreviationOne(event);
    event.target.value === ""
      ? $("#AbbreviationOne22").focus()
      : $("#AbbreviationOne23").focus();
  };

  handleAbbreviationOne23 = event => {
    this.handleInput(event);
    this.validateAbbreviationOne(event);
    event.target.value === ""
      ? $("#AbbreviationOne23").focus()
      : $("#AbbreviationOne24").focus();
  };

  handleAbbreviationOne24 = event => {
    this.handleInput(event);
    this.validateAbbreviationOne(event);
    event.target.value === ""
      ? $("#AbbreviationOne24").focus()
      : $("#AbbreviationOne25").focus();
  };

  handleAbbreviationOne25 = event => {
    this.handleInput(event);
    this.validateAbbreviationOne(event);
    event.target.value === ""
      ? $("#AbbreviationOne25").focus()
      : $("#AbbreviationOne26").focus();
  };

  handleAbbreviationOne26 = event => {
    this.handleInput(event);
    this.validateAbbreviationOne(event);
    event.target.value === ""
      ? $("#AbbreviationOne26").focus()
      : $("#AbbreviationOne27").focus();
  };

  handleAbbreviationOne27 = event => {
    this.handleInput(event);
    this.validateAbbreviationOne(event);
    event.target.value === ""
      ? $("#AbbreviationOne27").focus()
      : $("#AbbreviationOne28").focus();
  };

  handleAbbreviationOne28 = event => {
    this.handleInput(event);
    this.validateAbbreviationOne(event);
    event.target.value === ""
      ? $("#AbbreviationOne28").focus()
      : $("#AbbreviationOne29").focus();
  };

  handleAbbreviationOne29 = event => {
    this.handleInput(event);
    this.validateAbbreviationOne(event);
    event.target.value === ""
      ? $("#AbbreviationOne29").focus()
      : $("#AbbreviationOne30").focus();
  };

  handleAbbreviationOne30 = event => {
    this.handleInput(event);
    this.validateAbbreviationOne(event);
    event.target.value === ""
      ? $("#AbbreviationOne30").focus()
      : $("#AbbreviationOne31").focus();
  };

  handleAbbreviationOne31 = event => {
    this.handleInput(event);
    this.validateAbbreviationOne(event);
    event.target.value === ""
      ? $("#AbbreviationOne31").focus()
      : $("#AbbreviationOne32").focus();
  };

  handleAbbreviationOne32 = event => {
    this.handleInput(event);
    this.validateAbbreviationOne(event);
    event.target.value === ""
      ? $("#AbbreviationOne32").focus()
      : $("#AbbreviationOne33").focus();
  };

  handleAbbreviationOne33 = event => {
    this.handleInput(event);
    this.validateAbbreviationOne(event);
    event.target.value === ""
      ? $("#AbbreviationOne33").focus()
      : $("#AbbreviationOne34").focus();
  };

  handleAbbreviationOne34 = event => {
    this.handleInput(event);
    this.validateAbbreviationOne(event);
    event.target.value === ""
      ? $("#AbbreviationOne34").focus()
      : $("#AbbreviationOne35").focus();
  };

  handleAbbreviationOne35 = event => {
    this.handleInput(event);
    this.validateAbbreviationOne(event);
    event.target.value === ""
      ? $("#AbbreviationOne35").focus()
      : $("#AbbreviationOne36").focus();
  };

  handleAbbreviationOne36 = event => {
    this.handleInput(event);
    this.validateAbbreviationOne(event);
    event.target.value === ""
      ? $("#AbbreviationOne36").focus()
      : $("#AbbreviationOne37").focus();
  };

  handleAbbreviationOne37 = event => {
    this.handleInput(event);
    this.validateAbbreviationOne(event);
    event.target.value === ""
      ? $("#AbbreviationOne37").focus()
      : $("#AbbreviationOne37").focus();
  };

  ResetAbbreviationOneError = () => {
    $("#AbbreviationOne1").css({
      "border-top-color": "",
      "border-bottom-color": "",
      "border-left-color": ""
    });
    $("#AbbreviationOne2").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#AbbreviationOne3").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#AbbreviationOne4").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#AbbreviationOne5").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#AbbreviationOne6").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#AbbreviationOne7").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#AbbreviationOne8").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#AbbreviationOne9").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#AbbreviationOne10").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#AbbreviationOne11").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#AbbreviationOne12").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#AbbreviationOne13").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#AbbreviationOne14").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#AbbreviationOne15").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#AbbreviationOne16").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#AbbreviationOne17").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#AbbreviationOne18").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#AbbreviationOne19").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#AbbreviationOne20").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#AbbreviationOne21").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#AbbreviationOne22").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#AbbreviationOne23").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#AbbreviationOne24").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#AbbreviationOne25").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#AbbreviationOne26").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#AbbreviationOne27").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#AbbreviationOne28").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#AbbreviationOne29").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#AbbreviationOne30").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#AbbreviationOne31").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#AbbreviationOne32").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#AbbreviationOne33").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#AbbreviationOne34").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#AbbreviationOne35").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#AbbreviationOne36").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#AbbreviationOne37").css({
      "border-top-color": "",
      "border-bottom-color": "",
      "border-right-color": ""
    });
  };

  HighlightAbbreviationOneError = () => {
    $("#AbbreviationOne1").css({
      "border-top-color": "red",
      "border-bottom-color": "red",
      "border-left-color": "red"
    });
    $("#AbbreviationOne2").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#AbbreviationOne3").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#AbbreviationOne4").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#AbbreviationOne5").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#AbbreviationOne6").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#AbbreviationOne7").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#AbbreviationOne8").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#AbbreviationOne9").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#AbbreviationOne10").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#AbbreviationOne11").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#AbbreviationOne12").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#AbbreviationOne13").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#AbbreviationOne14").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#AbbreviationOne15").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#AbbreviationOne16").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#AbbreviationOne17").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#AbbreviationOne18").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#AbbreviationOne19").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#AbbreviationOne20").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#AbbreviationOne21").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#AbbreviationOne22").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#AbbreviationOne23").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#AbbreviationOne24").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#AbbreviationOne25").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#AbbreviationOne26").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#AbbreviationOne27").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#AbbreviationOne28").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#AbbreviationOne29").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#AbbreviationOne30").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#AbbreviationOne31").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#AbbreviationOne32").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#AbbreviationOne33").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#AbbreviationOne34").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#AbbreviationOne35").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#AbbreviationOne36").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#AbbreviationOne37").css({
      "border-top-color": "red",
      "border-bottom-color": "red",
      "border-right-color": "red"
    });
  };

  handleAbbreviationTwo1 = event => {
    this.handleInput(event);
    this.validateAbbreviationTwo(event);
    event.target.value === ""
      ? $("#AbbreviationTwo1").focus()
      : $("#AbbreviationTwo2").focus();
  };

  handleAbbreviationTwo2 = event => {
    this.handleInput(event);
    this.validateAbbreviationTwo(event);
    event.target.value === ""
      ? $("#AbbreviationTwo2").focus()
      : $("#AbbreviationTwo3").focus();
  };

  handleAbbreviationTwo3 = event => {
    this.handleInput(event);
    this.validateAbbreviationTwo(event);
    event.target.value === ""
      ? $("#AbbreviationTwo3").focus()
      : $("#AbbreviationTwo4").focus();
  };

  handleAbbreviationTwo4 = event => {
    this.handleInput(event);
    this.validateAbbreviationTwo(event);
    event.target.value === ""
      ? $("#AbbreviationTwo4").focus()
      : $("#AbbreviationTwo5").focus();
  };

  handleAbbreviationTwo5 = event => {
    this.handleInput(event);
    this.validateAbbreviationTwo(event);
    event.target.value === ""
      ? $("#AbbreviationTwo5").focus()
      : $("#AbbreviationTwo6").focus();
  };

  handleAbbreviationTwo6 = event => {
    this.handleInput(event);
    this.validateAbbreviationTwo(event);
    event.target.value === ""
      ? $("#AbbreviationTwo6").focus()
      : $("#AbbreviationTwo7").focus();
  };

  handleAbbreviationTwo7 = event => {
    this.handleInput(event);
    this.validateAbbreviationTwo(event);
    event.target.value === ""
      ? $("#AbbreviationTwo7").focus()
      : $("#AbbreviationTwo8").focus();
  };

  handleAbbreviationTwo8 = event => {
    this.handleInput(event);
    this.validateAbbreviationTwo(event);
    event.target.value === ""
      ? $("#AbbreviationTwo8").focus()
      : $("#AbbreviationTwo9").focus();
  };

  handleAbbreviationTwo9 = event => {
    this.handleInput(event);
    this.validateAbbreviationTwo(event);
    event.target.value === ""
      ? $("#AbbreviationTwo9").focus()
      : $("#AbbreviationTwo10").focus();
  };

  handleAbbreviationTwo10 = event => {
    this.handleInput(event);
    this.validateAbbreviationTwo(event);
    event.target.value === ""
      ? $("#AbbreviationTwo10").focus()
      : $("#AbbreviationTwo11").focus();
  };

  handleAbbreviationTwo11 = event => {
    this.handleInput(event);
    this.validateAbbreviationTwo(event);
    event.target.value === ""
      ? $("#AbbreviationTwo11").focus()
      : $("#AbbreviationTwo12").focus();
  };

  handleAbbreviationTwo12 = event => {
    this.handleInput(event);
    this.validateAbbreviationTwo(event);
    event.target.value === ""
      ? $("#AbbreviationTwo12").focus()
      : $("#AbbreviationTwo13").focus();
  };

  handleAbbreviationTwo13 = event => {
    this.handleInput(event);
    this.validateAbbreviationTwo(event);
    event.target.value === ""
      ? $("#AbbreviationTwo13").focus()
      : $("#AbbreviationTwo14").focus();
  };

  handleAbbreviationTwo14 = event => {
    this.handleInput(event);
    this.validateAbbreviationTwo(event);
    event.target.value === ""
      ? $("#AbbreviationTwo14").focus()
      : $("#AbbreviationTwo15").focus();
  };

  handleAbbreviationTwo15 = event => {
    this.handleInput(event);
    this.validateAbbreviationTwo(event);
    event.target.value === ""
      ? $("#AbbreviationTwo15").focus()
      : $("#AbbreviationTwo16").focus();
  };

  handleAbbreviationTwo16 = event => {
    this.handleInput(event);
    this.validateAbbreviationTwo(event);
    event.target.value === ""
      ? $("#AbbreviationTwo16").focus()
      : $("#AbbreviationTwo17").focus();
  };

  handleAbbreviationTwo17 = event => {
    this.handleInput(event);
    this.validateAbbreviationTwo(event);
    event.target.value === ""
      ? $("#AbbreviationTwo17").focus()
      : $("#AbbreviationTwo18").focus();
  };

  handleAbbreviationTwo18 = event => {
    this.handleInput(event);
    this.validateAbbreviationTwo(event);
    event.target.value === ""
      ? $("#AbbreviationTwo18").focus()
      : $("#AbbreviationTwo19").focus();
  };

  handleAbbreviationTwo19 = event => {
    this.handleInput(event);
    this.validateAbbreviationTwo(event);
    event.target.value === ""
      ? $("#AbbreviationTwo19").focus()
      : $("#AbbreviationTwo20").focus();
  };

  handleAbbreviationTwo20 = event => {
    this.handleInput(event);
    this.validateAbbreviationTwo(event);
    event.target.value === ""
      ? $("#AbbreviationTwo20").focus()
      : $("#AbbreviationTwo21").focus();
  };

  handleAbbreviationTwo21 = event => {
    this.handleInput(event);
    this.validateAbbreviationTwo(event);
    event.target.value === ""
      ? $("#AbbreviationTwo21").focus()
      : $("#AbbreviationTwo22").focus();
  };

  handleAbbreviationTwo22 = event => {
    this.handleInput(event);
    this.validateAbbreviationTwo(event);
    event.target.value === ""
      ? $("#AbbreviationTwo22").focus()
      : $("#AbbreviationTwo23").focus();
  };

  handleAbbreviationTwo23 = event => {
    this.handleInput(event);
    this.validateAbbreviationTwo(event);
    event.target.value === ""
      ? $("#AbbreviationTwo23").focus()
      : $("#AbbreviationTwo24").focus();
  };

  handleAbbreviationTwo24 = event => {
    this.handleInput(event);
    this.validateAbbreviationTwo(event);
    event.target.value === ""
      ? $("#AbbreviationTwo24").focus()
      : $("#AbbreviationTwo25").focus();
  };

  handleAbbreviationTwo25 = event => {
    this.handleInput(event);
    this.validateAbbreviationTwo(event);
    event.target.value === ""
      ? $("#AbbreviationTwo25").focus()
      : $("#AbbreviationTwo26").focus();
  };

  handleAbbreviationTwo26 = event => {
    this.handleInput(event);
    this.validateAbbreviationTwo(event);
    event.target.value === ""
      ? $("#AbbreviationTwo26").focus()
      : $("#AbbreviationTwo27").focus();
  };

  handleAbbreviationTwo27 = event => {
    this.handleInput(event);
    this.validateAbbreviationTwo(event);
    event.target.value === ""
      ? $("#AbbreviationTwo27").focus()
      : $("#AbbreviationTwo28").focus();
  };

  handleAbbreviationTwo28 = event => {
    this.handleInput(event);
    this.validateAbbreviationTwo(event);
    event.target.value === ""
      ? $("#AbbreviationTwo28").focus()
      : $("#AbbreviationTwo29").focus();
  };

  handleAbbreviationTwo29 = event => {
    this.handleInput(event);
    this.validateAbbreviationTwo(event);
    event.target.value === ""
      ? $("#AbbreviationTwo29").focus()
      : $("#AbbreviationTwo30").focus();
  };

  handleAbbreviationTwo30 = event => {
    this.handleInput(event);
    this.validateAbbreviationTwo(event);
    event.target.value === ""
      ? $("#AbbreviationTwo30").focus()
      : $("#AbbreviationTwo31").focus();
  };

  handleAbbreviationTwo31 = event => {
    this.handleInput(event);
    this.validateAbbreviationTwo(event);
    event.target.value === ""
      ? $("#AbbreviationTwo31").focus()
      : $("#AbbreviationTwo32").focus();
  };

  handleAbbreviationTwo32 = event => {
    this.handleInput(event);
    this.validateAbbreviationTwo(event);
    event.target.value === ""
      ? $("#AbbreviationTwo32").focus()
      : $("#AbbreviationTwo33").focus();
  };

  handleAbbreviationTwo33 = event => {
    this.handleInput(event);
    this.validateAbbreviationTwo(event);
    event.target.value === ""
      ? $("#AbbreviationTwo33").focus()
      : $("#AbbreviationTwo34").focus();
  };

  handleAbbreviationTwo34 = event => {
    this.handleInput(event);
    this.validateAbbreviationTwo(event);
    event.target.value === ""
      ? $("#AbbreviationTwo34").focus()
      : $("#AbbreviationTwo35").focus();
  };

  handleAbbreviationTwo35 = event => {
    this.handleInput(event);
    this.validateAbbreviationTwo(event);
    event.target.value === ""
      ? $("#AbbreviationTwo35").focus()
      : $("#AbbreviationTwo36").focus();
  };

  handleAbbreviationTwo36 = event => {
    this.handleInput(event);
    this.validateAbbreviationTwo(event);
    event.target.value === ""
      ? $("#AbbreviationTwo36").focus()
      : $("#AbbreviationTwo37").focus();
  };

  handleAbbreviationTwo37 = event => {
    this.handleInput(event);
    this.validateAbbreviationTwo(event);
    event.target.value === ""
      ? $("#AbbreviationTwo37").focus()
      : $("#AbbreviationTwo37").focus();
  };

  ResetAbbreviationTwoError = () => {
    $("#AbbreviationTwo1").css({
      "border-top-color": "",
      "border-bottom-color": "",
      "border-left-color": ""
    });
    $("#AbbreviationTwo2").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#AbbreviationTwo3").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#AbbreviationTwo4").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#AbbreviationTwo5").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#AbbreviationTwo6").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#AbbreviationTwo7").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#AbbreviationTwo8").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#AbbreviationTwo9").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#AbbreviationTwo10").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#AbbreviationTwo11").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#AbbreviationTwo12").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#AbbreviationTwo13").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#AbbreviationTwo14").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#AbbreviationTwo15").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#AbbreviationTwo16").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#AbbreviationTwo17").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#AbbreviationTwo18").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#AbbreviationTwo19").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#AbbreviationTwo20").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#AbbreviationTwo21").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#AbbreviationTwo22").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#AbbreviationTwo23").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#AbbreviationTwo24").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#AbbreviationTwo25").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#AbbreviationTwo26").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#AbbreviationTwo27").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#AbbreviationTwo28").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#AbbreviationTwo29").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#AbbreviationTwo30").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#AbbreviationTwo31").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#AbbreviationTwo32").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#AbbreviationTwo33").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#AbbreviationTwo34").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#AbbreviationTwo35").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#AbbreviationTwo36").css({
      "border-top-color": "",
      "border-bottom-color": ""
    });
    $("#AbbreviationTwo37").css({
      "border-top-color": "",
      "border-bottom-color": "",
      "border-right-color": ""
    });
  };

  HighlightAbbreviationTwoError = () => {
    $("#AbbreviationTwo1").css({
      "border-top-color": "red",
      "border-bottom-color": "red",
      "border-left-color": "red"
    });
    $("#AbbreviationTwo2").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#AbbreviationTwo3").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#AbbreviationTwo4").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#AbbreviationTwo5").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#AbbreviationTwo6").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#AbbreviationTwo7").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#AbbreviationTwo8").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#AbbreviationTwo9").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#AbbreviationTwo10").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#AbbreviationTwo11").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#AbbreviationTwo12").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#AbbreviationTwo13").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#AbbreviationTwo14").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#AbbreviationTwo15").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#AbbreviationTwo16").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#AbbreviationTwo17").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#AbbreviationTwo18").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#AbbreviationTwo19").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#AbbreviationTwo20").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#AbbreviationTwo21").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#AbbreviationTwo22").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#AbbreviationTwo23").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#AbbreviationTwo24").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#AbbreviationTwo25").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#AbbreviationTwo26").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#AbbreviationTwo27").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#AbbreviationTwo28").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#AbbreviationTwo29").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#AbbreviationTwo30").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#AbbreviationTwo31").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#AbbreviationTwo32").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#AbbreviationTwo33").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#AbbreviationTwo34").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#AbbreviationTwo35").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#AbbreviationTwo36").css({
      "border-top-color": "red",
      "border-bottom-color": "red"
    });
    $("#AbbreviationTwo37").css({
      "border-top-color": "red",
      "border-bottom-color": "red",
      "border-right-color": "red"
    });
  };

  async validateAbbreviationOne(event) {
    this.state.data.AbbreviationOne =
      this.state.data.AbbreviationOne1 +
      this.state.data.AbbreviationTwo2 +
      this.state.data.AbbreviationOne3 +
      this.state.data.AbbreviationOne4 +
      this.state.data.AbbreviationOne5 +
      this.state.data.AbbreviationOne6 +
      this.state.data.AbbreviationOne7 +
      this.state.data.AbbreviationOne8 +
      this.state.data.AbbreviationOne9 +
      this.state.data.AbbreviationOne10 +
      this.state.data.AbbreviationOne11 +
      this.state.data.AbbreviationOne12 +
      this.state.data.AbbreviationOne13 +
      this.state.data.AbbreviationOne14 +
      this.state.data.AbbreviationOne15 +
      this.state.data.AbbreviationOne16 +
      this.state.data.AbbreviationOne17 +
      this.state.data.AbbreviationOne18 +
      this.state.data.AbbreviationOne19 +
      this.state.data.AbbreviationOne20 +
      this.state.data.AbbreviationOne21 +
      this.state.data.AbbreviationOne22 +
      this.state.data.AbbreviationOne23 +
      this.state.data.AbbreviationOne24 +
      this.state.data.AbbreviationOne25 +
      this.state.data.AbbreviationOne26 +
      this.state.data.AbbreviationOne27 +
      this.state.data.AbbreviationOne28 +
      this.state.data.AbbreviationOne29 +
      this.state.data.AbbreviationOne30 +
      this.state.data.AbbreviationOne31 +
      this.state.data.AbbreviationOne32 +
      this.state.data.AbbreviationOne33 +
      this.state.data.AbbreviationOne34 +
      this.state.data.AbbreviationOne35 +
      this.state.data.AbbreviationOne36 +
      this.state.data.AbbreviationOne37;

    let errors = this.state.errors;
    let name = "AbbreviationOne";
    this.setState(errors);
    errors[name] = "";

    this.ResetAbbreviationOneError();

    if (typeof this.state.data.AbbreviationOne !== "undefined") {
      if (!this.state.data.AbbreviationOne.match(/^[a-zA-Z ]*$/)) {
        let errors = this.state.errors;
        let name = "AbbreviationOne";
        this.setState(errors);
        errors[name] = "*Please enter alphabet characters only.";

        this.state.isModalEnabled = false;
        this.HighlightAbbreviationOneError();
      }
    }

    localStorage.setItem("localdata", JSON.stringify(this.state.data));
    localStorage.setItem("localerror", JSON.stringify(this.state.errors));
  }

  async validateAbbreviationTwo(event) {
    this.state.data.AbbreviationTwo =
      this.state.data.AbbreviationTwo1 +
      this.state.data.AbbreviationTwo2 +
      this.state.data.AbbreviationTwo3 +
      this.state.data.AbbreviationTwo4 +
      this.state.data.AbbreviationTwo5 +
      this.state.data.AbbreviationTwo6 +
      this.state.data.AbbreviationTwo7 +
      this.state.data.AbbreviationTwo8 +
      this.state.data.AbbreviationTwo9 +
      this.state.data.AbbreviationTwo10 +
      this.state.data.AbbreviationTwo11 +
      this.state.data.AbbreviationTwo12 +
      this.state.data.AbbreviationTwo13 +
      this.state.data.AbbreviationTwo14 +
      this.state.data.AbbreviationTwo15 +
      this.state.data.AbbreviationTwo16 +
      this.state.data.AbbreviationTwo17 +
      this.state.data.AbbreviationTwo18 +
      this.state.data.AbbreviationTwo19 +
      this.state.data.AbbreviationTwo20 +
      this.state.data.AbbreviationTwo21 +
      this.state.data.AbbreviationTwo22 +
      this.state.data.AbbreviationTwo23 +
      this.state.data.AbbreviationTwo24 +
      this.state.data.AbbreviationTwo25 +
      this.state.data.AbbreviationTwo26 +
      this.state.data.AbbreviationTwo27 +
      this.state.data.AbbreviationTwo28 +
      this.state.data.AbbreviationTwo29 +
      this.state.data.AbbreviationTwo30 +
      this.state.data.AbbreviationTwo31 +
      this.state.data.AbbreviationTwo32 +
      this.state.data.AbbreviationTwo33 +
      this.state.data.AbbreviationTwo34 +
      this.state.data.AbbreviationTwo35 +
      this.state.data.AbbreviationTwo36 +
      this.state.data.AbbreviationTwo37;

    let errors = this.state.errors;
    let name = "AbbreviationTwo";
    this.setState(errors);
    errors[name] = "";

    this.ResetAbbreviationTwoError();

    if (typeof this.state.data.AbbreviationTwo !== "undefined") {
      if (!this.state.data.AbbreviationTwo.match(/^[a-zA-Z ]*$/)) {
        let errors = this.state.errors;
        let name = "AbbreviationTwo";
        this.setState(errors);
        errors[name] = "*Please enter alphabet characters only.";

        this.state.isModalEnabled = false;
        this.HighlightAbbreviationTwoError();
      }
    }

    localStorage.setItem("localdata", JSON.stringify(this.state.data));
    localStorage.setItem("localerror", JSON.stringify(this.state.errors));
  }

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

  render() {
    return (
      <div>
        <div className="ColouredLabel">
          <label className="ColouredLabel">
            {" "}
            &nbsp; &nbsp;2 &nbsp; Abbreviations of the above name, as you would
            like it, to be printed on the PAN card
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
              <img
                src={namefield}
                alt="img"
                className="tooltiptext tooltiptextAbbreviation"
                style={{ width: "600px", height: "150px", textAlign: "right" }}
              />
            </span>
          ) : (
            ""
          )}
        </div>
        <br />

        <div className="box_left">
          <div>
            <input
              type="text"
              className="Abbreviation-control"
              maxLength="1"
              value={this.state.data.AbbreviationOne1}
              name="AbbreviationOne1"
              id="AbbreviationOne1"
              onKeyDown={event =>
                this.handleBackspaceKey(
                  event,
                  "#AbbreviationOne1",
                  "#AbbreviationOne1"
                )
              }
              onChange={this.handleAbbreviationOne1}
            />

            <input
              type="text"
              className="Abbreviation-control"
              maxLength="1"
              value={this.state.data.AbbreviationOne2}
              name="AbbreviationOne2"
              id="AbbreviationOne2"
              onKeyDown={event =>
                this.handleBackspaceKey(
                  event,
                  "#AbbreviationOne1",
                  "#AbbreviationOne2"
                )
              }
              onChange={this.handleAbbreviationOne2}
            />

            <input
              type="text"
              className="Abbreviation-control"
              maxLength="1"
              value={this.state.data.AbbreviationOne3}
              name="AbbreviationOne3"
              id="AbbreviationOne3"
              onKeyDown={event =>
                this.handleBackspaceKey(
                  event,
                  "#AbbreviationOne2",
                  "#AbbreviationOne3"
                )
              }
              onChange={this.handleAbbreviationOne3}
            />

            <input
              type="text"
              className="Abbreviation-control"
              maxLength="1"
              value={this.state.data.AbbreviationOne4}
              name="AbbreviationOne4"
              id="AbbreviationOne4"
              onKeyDown={event =>
                this.handleBackspaceKey(
                  event,
                  "#AbbreviationOne3",
                  "#AbbreviationOne4"
                )
              }
              onChange={this.handleAbbreviationOne4}
            />

            <input
              type="text"
              className="Abbreviation-control"
              maxLength="1"
              value={this.state.data.AbbreviationOne5}
              name="AbbreviationOne5"
              id="AbbreviationOne5"
              onKeyDown={event =>
                this.handleBackspaceKey(
                  event,
                  "#AbbreviationOne4",
                  "#AbbreviationOne5"
                )
              }
              onChange={this.handleAbbreviationOne5}
            />

            <input
              type="text"
              className="Abbreviation-control"
              maxLength="1"
              value={this.state.data.AbbreviationOne6}
              name="AbbreviationOne6"
              id="AbbreviationOne6"
              onKeyDown={event =>
                this.handleBackspaceKey(
                  event,
                  "#AbbreviationOne5",
                  "#AbbreviationOne6"
                )
              }
              onChange={this.handleAbbreviationOne6}
            />

            <input
              type="text"
              className="Abbreviation-control"
              maxLength="1"
              value={this.state.data.AbbreviationOne7}
              name="AbbreviationOne7"
              id="AbbreviationOne7"
              onKeyDown={event =>
                this.handleBackspaceKey(
                  event,
                  "#AbbreviationOne6",
                  "#AbbreviationOne7"
                )
              }
              onChange={this.handleAbbreviationOne7}
            />

            <input
              type="text"
              className="Abbreviation-control"
              maxLength="1"
              value={this.state.data.AbbreviationOne8}
              name="AbbreviationOne8"
              id="AbbreviationOne8"
              onKeyDown={event =>
                this.handleBackspaceKey(
                  event,
                  "#AbbreviationOne7",
                  "#AbbreviationOne8"
                )
              }
              onChange={this.handleAbbreviationOne8}
            />

            <input
              type="text"
              className="Abbreviation-control"
              maxLength="1"
              value={this.state.data.AbbreviationOne9}
              name="AbbreviationOne9"
              id="AbbreviationOne9"
              onKeyDown={event =>
                this.handleBackspaceKey(
                  event,
                  "#AbbreviationOne8",
                  "#AbbreviationOne9"
                )
              }
              onChange={this.handleAbbreviationOne9}
            />

            <input
              type="text"
              className="Abbreviation-control"
              maxLength="1"
              value={this.state.data.AbbreviationOne10}
              name="AbbreviationOne10"
              id="AbbreviationOne10"
              onKeyDown={event =>
                this.handleBackspaceKey(
                  event,
                  "#AbbreviationOne9",
                  "#AbbreviationOne10"
                )
              }
              onChange={this.handleAbbreviationOne10}
            />

            <input
              type="text"
              className="Abbreviation-control"
              maxLength="1"
              value={this.state.data.AbbreviationOne11}
              name="AbbreviationOne11"
              id="AbbreviationOne11"
              onKeyDown={event =>
                this.handleBackspaceKey(
                  event,
                  "#AbbreviationOne10",
                  "#AbbreviationOne11"
                )
              }
              onChange={this.handleAbbreviationOne11}
            />

            <input
              type="text"
              className="Abbreviation-control"
              maxLength="1"
              value={this.state.data.AbbreviationOne12}
              name="AbbreviationOne12"
              id="AbbreviationOne12"
              onKeyDown={event =>
                this.handleBackspaceKey(
                  event,
                  "#AbbreviationOne11",
                  "#AbbreviationOne12"
                )
              }
              onChange={this.handleAbbreviationOne12}
            />

            <input
              type="text"
              className="Abbreviation-control"
              maxLength="1"
              value={this.state.data.AbbreviationOne13}
              name="AbbreviationOne13"
              id="AbbreviationOne13"
              onKeyDown={event =>
                this.handleBackspaceKey(
                  event,
                  "#AbbreviationOne12",
                  "#AbbreviationOne13"
                )
              }
              onChange={this.handleAbbreviationOne13}
            />

            <input
              type="text"
              className="Abbreviation-control"
              maxLength="1"
              value={this.state.data.AbbreviationOne14}
              name="AbbreviationOne14"
              id="AbbreviationOne14"
              onKeyDown={event =>
                this.handleBackspaceKey(
                  event,
                  "#AbbreviationOne13",
                  "#AbbreviationOne14"
                )
              }
              onChange={this.handleAbbreviationOne14}
            />

            <input
              type="text"
              className="Abbreviation-control"
              maxLength="1"
              value={this.state.data.AbbreviationOne15}
              name="AbbreviationOne15"
              id="AbbreviationOne15"
              onKeyDown={event =>
                this.handleBackspaceKey(
                  event,
                  "#AbbreviationOne14",
                  "#AbbreviationOne15"
                )
              }
              onChange={this.handleAbbreviationOne15}
            />

            <input
              type="text"
              className="Abbreviation-control"
              maxLength="1"
              value={this.state.data.AbbreviationOne16}
              name="AbbreviationOne16"
              id="AbbreviationOne16"
              onKeyDown={event =>
                this.handleBackspaceKey(
                  event,
                  "#AbbreviationOne15",
                  "#AbbreviationOne16"
                )
              }
              onChange={this.handleAbbreviationOne16}
            />

            <input
              type="text"
              className="Abbreviation-control"
              maxLength="1"
              value={this.state.data.AbbreviationOne17}
              name="AbbreviationOne17"
              id="AbbreviationOne17"
              onKeyDown={event =>
                this.handleBackspaceKey(
                  event,
                  "#AbbreviationOne16",
                  "#AbbreviationOne17"
                )
              }
              onChange={this.handleAbbreviationOne17}
            />

            <input
              type="text"
              className="Abbreviation-control"
              maxLength="1"
              value={this.state.data.AbbreviationOne18}
              name="AbbreviationOne18"
              id="AbbreviationOne18"
              onKeyDown={event =>
                this.handleBackspaceKey(
                  event,
                  "#AbbreviationOne17",
                  "#AbbreviationOne18"
                )
              }
              onChange={this.handleAbbreviationOne18}
            />

            <input
              type="text"
              className="Abbreviation-control"
              maxLength="1"
              value={this.state.data.AbbreviationOne19}
              name="AbbreviationOne19"
              id="AbbreviationOne19"
              onKeyDown={event =>
                this.handleBackspaceKey(
                  event,
                  "#AbbreviationOne18",
                  "#AbbreviationOne19"
                )
              }
              onChange={this.handleAbbreviationOne19}
            />

            <input
              type="text"
              className="Abbreviation-control"
              maxLength="1"
              value={this.state.data.AbbreviationOne20}
              name="AbbreviationOne20"
              id="AbbreviationOne20"
              onKeyDown={event =>
                this.handleBackspaceKey(
                  event,
                  "#AbbreviationOne19",
                  "#AbbreviationOne20"
                )
              }
              onChange={this.handleAbbreviationOne20}
            />

            <input
              type="text"
              className="Abbreviation-control"
              maxLength="1"
              value={this.state.data.AbbreviationOne21}
              name="AbbreviationOne21"
              id="AbbreviationOne21"
              onKeyDown={event =>
                this.handleBackspaceKey(
                  event,
                  "#AbbreviationOne20",
                  "#AbbreviationOne21"
                )
              }
              onChange={this.handleAbbreviationOne21}
            />

            <input
              type="text"
              className="Abbreviation-control"
              maxLength="1"
              value={this.state.data.AbbreviationOne22}
              name="AbbreviationOne22"
              id="AbbreviationOne22"
              onKeyDown={event =>
                this.handleBackspaceKey(
                  event,
                  "#AbbreviationOne21",
                  "#AbbreviationOne22"
                )
              }
              onChange={this.handleAbbreviationOne22}
            />

            <input
              type="text"
              className="Abbreviation-control"
              maxLength="1"
              value={this.state.data.AbbreviationOne23}
              name="AbbreviationOne23"
              id="AbbreviationOne23"
              onKeyDown={event =>
                this.handleBackspaceKey(
                  event,
                  "#AbbreviationOne22",
                  "#AbbreviationOne23"
                )
              }
              onChange={this.handleAbbreviationOne23}
            />

            <input
              type="text"
              className="Abbreviation-control"
              maxLength="1"
              value={this.state.data.AbbreviationOne24}
              name="AbbreviationOne24"
              id="AbbreviationOne24"
              onKeyDown={event =>
                this.handleBackspaceKey(
                  event,
                  "#AbbreviationOne23",
                  "#AbbreviationOne24"
                )
              }
              onChange={this.handleAbbreviationOne24}
            />

            <input
              type="text"
              className="Abbreviation-control"
              maxLength="1"
              value={this.state.data.AbbreviationOne25}
              name="AbbreviationOne25"
              id="AbbreviationOne25"
              onKeyDown={event =>
                this.handleBackspaceKey(
                  event,
                  "#AbbreviationOne24",
                  "#AbbreviationOne25"
                )
              }
              onChange={this.handleAbbreviationOne25}
            />

            <input
              type="text"
              className="Abbreviation-control"
              maxLength="1"
              value={this.state.data.AbbreviationOne26}
              name="AbbreviationOne26"
              id="AbbreviationOne26"
              onKeyDown={event =>
                this.handleBackspaceKey(
                  event,
                  "#AbbreviationOne25",
                  "#AbbreviationOne26"
                )
              }
              onChange={this.handleAbbreviationOne26}
            />

            <input
              type="text"
              className="Abbreviation-control"
              maxLength="1"
              value={this.state.data.AbbreviationOne27}
              name="AbbreviationOne27"
              id="AbbreviationOne27"
              onKeyDown={event =>
                this.handleBackspaceKey(
                  event,
                  "#AbbreviationOne26",
                  "#AbbreviationOne27"
                )
              }
              onChange={this.handleAbbreviationOne27}
            />

            <input
              type="text"
              className="Abbreviation-control"
              maxLength="1"
              value={this.state.data.AbbreviationOne28}
              name="AbbreviationOne28"
              id="AbbreviationOne28"
              onKeyDown={event =>
                this.handleBackspaceKey(
                  event,
                  "#AbbreviationOne27",
                  "#AbbreviationOne28"
                )
              }
              onChange={this.handleAbbreviationOne28}
            />

            <input
              type="text"
              className="Abbreviation-control"
              maxLength="1"
              value={this.state.data.AbbreviationOne29}
              name="AbbreviationOne29"
              id="AbbreviationOne29"
              onKeyDown={event =>
                this.handleBackspaceKey(
                  event,
                  "#AbbreviationOne28",
                  "#AbbreviationOne29"
                )
              }
              onChange={this.handleAbbreviationOne29}
            />

            <input
              type="text"
              className="Abbreviation-control"
              maxLength="1"
              value={this.state.data.AbbreviationOne30}
              name="AbbreviationOne30"
              id="AbbreviationOne30"
              onKeyDown={event =>
                this.handleBackspaceKey(
                  event,
                  "#AbbreviationOne29",
                  "#AbbreviationOne30"
                )
              }
              onChange={this.handleAbbreviationOne30}
            />

            <input
              type="text"
              className="Abbreviation-control"
              maxLength="1"
              value={this.state.data.AbbreviationOne31}
              name="AbbreviationOne31"
              id="AbbreviationOne31"
              onKeyDown={event =>
                this.handleBackspaceKey(
                  event,
                  "#AbbreviationOne30",
                  "#AbbreviationOne31"
                )
              }
              onChange={this.handleAbbreviationOne31}
            />

            <input
              type="text"
              className="Abbreviation-control"
              maxLength="1"
              value={this.state.data.AbbreviationOne32}
              name="AbbreviationOne32"
              id="AbbreviationOne32"
              onKeyDown={event =>
                this.handleBackspaceKey(
                  event,
                  "#AbbreviationOne31",
                  "#AbbreviationOne32"
                )
              }
              onChange={this.handleAbbreviationOne32}
            />

            <input
              type="text"
              className="Abbreviation-control"
              maxLength="1"
              value={this.state.data.AbbreviationOne33}
              name="AbbreviationOne33"
              id="AbbreviationOne33"
              onKeyDown={event =>
                this.handleBackspaceKey(
                  event,
                  "#AbbreviationOne32",
                  "#AbbreviationOne33"
                )
              }
              onChange={this.handleAbbreviationOne33}
            />

            <input
              type="text"
              className="Abbreviation-control"
              maxLength="1"
              value={this.state.data.AbbreviationOne34}
              name="AbbreviationOne34"
              id="AbbreviationOne34"
              onKeyDown={event =>
                this.handleBackspaceKey(
                  event,
                  "#AbbreviationOne33",
                  "#AbbreviationOne34"
                )
              }
              onChange={this.handleAbbreviationOne34}
            />

            <input
              type="text"
              className="Abbreviation-control"
              maxLength="1"
              value={this.state.data.AbbreviationOne35}
              name="AbbreviationOne35"
              id="AbbreviationOne35"
              onKeyDown={event =>
                this.handleBackspaceKey(
                  event,
                  "#AbbreviationOne34",
                  "#AbbreviationOne35"
                )
              }
              onChange={this.handleAbbreviationOne35}
            />

            <input
              type="text"
              className="Abbreviation-control"
              maxLength="1"
              value={this.state.data.AbbreviationOne36}
              name="AbbreviationOne36"
              id="AbbreviationOne36"
              onKeyDown={event =>
                this.handleBackspaceKey(
                  event,
                  "#AbbreviationOne35",
                  "#AbbreviationOne36"
                )
              }
              onChange={this.handleAbbreviationOne36}
            />

            <input
              type="text"
              className="Abbreviation-control"
              maxLength="1"
              value={this.state.data.AbbreviationOne37}
              name="AbbreviationOne37"
              id="AbbreviationOne37"
              onKeyDown={event =>
                this.handleBackspaceKey(
                  event,
                  "#AbbreviationOne36",
                  "#AbbreviationOne37"
                )
              }
              onChange={this.handleAbbreviationOne37}
            />

            <br />
          </div>

          <div>
            <input
              type="text"
              className="Abbreviation-control"
              maxLength="1"
              value={this.state.data.AbbreviationTwo1}
              name="AbbreviationTwo1"
              id="AbbreviationTwo1"
              onKeyDown={event =>
                this.handleBackspaceKey(
                  event,
                  "#AbbreviationTwo1",
                  "#AbbreviationTwo1"
                )
              }
              onChange={this.handleAbbreviationTwo1}
            />

            <input
              type="text"
              className="Abbreviation-control"
              maxLength="1"
              value={this.state.data.AbbreviationTwo2}
              name="AbbreviationTwo2"
              id="AbbreviationTwo2"
              onKeyDown={event =>
                this.handleBackspaceKey(
                  event,
                  "#AbbreviationTwo1",
                  "#AbbreviationTwo2"
                )
              }
              onChange={this.handleAbbreviationTwo2}
            />

            <input
              type="text"
              className="Abbreviation-control"
              maxLength="1"
              value={this.state.data.AbbreviationTwo3}
              name="AbbreviationTwo3"
              id="AbbreviationTwo3"
              onKeyDown={event =>
                this.handleBackspaceKey(
                  event,
                  "#AbbreviationTwo2",
                  "#AbbreviationTwo3"
                )
              }
              onChange={this.handleAbbreviationTwo3}
            />

            <input
              type="text"
              className="Abbreviation-control"
              maxLength="1"
              value={this.state.data.AbbreviationTwo4}
              name="AbbreviationTwo4"
              id="AbbreviationTwo4"
              onKeyDown={event =>
                this.handleBackspaceKey(
                  event,
                  "#AbbreviationTwo3",
                  "#AbbreviationTwo4"
                )
              }
              onChange={this.handleAbbreviationTwo4}
            />

            <input
              type="text"
              className="Abbreviation-control"
              maxLength="1"
              value={this.state.data.AbbreviationTwo5}
              name="AbbreviationTwo5"
              id="AbbreviationTwo5"
              onKeyDown={event =>
                this.handleBackspaceKey(
                  event,
                  "#AbbreviationTwo4",
                  "#AbbreviationTwo5"
                )
              }
              onChange={this.handleAbbreviationTwo5}
            />

            <input
              type="text"
              className="Abbreviation-control"
              maxLength="1"
              value={this.state.data.AbbreviationTwo6}
              name="AbbreviationTwo6"
              id="AbbreviationTwo6"
              onKeyDown={event =>
                this.handleBackspaceKey(
                  event,
                  "#AbbreviationTwo5",
                  "#AbbreviationTwo6"
                )
              }
              onChange={this.handleAbbreviationTwo6}
            />

            <input
              type="text"
              className="Abbreviation-control"
              maxLength="1"
              value={this.state.data.AbbreviationTwo7}
              name="AbbreviationTwo7"
              id="AbbreviationTwo7"
              onKeyDown={event =>
                this.handleBackspaceKey(
                  event,
                  "#AbbreviationTwo6",
                  "#AbbreviationTwo7"
                )
              }
              onChange={this.handleAbbreviationTwo7}
            />

            <input
              type="text"
              className="Abbreviation-control"
              maxLength="1"
              value={this.state.data.AbbreviationTwo8}
              name="AbbreviationTwo8"
              id="AbbreviationTwo8"
              onKeyDown={event =>
                this.handleBackspaceKey(
                  event,
                  "#AbbreviationTwo7",
                  "#AbbreviationTwo8"
                )
              }
              onChange={this.handleAbbreviationTwo8}
            />

            <input
              type="text"
              className="Abbreviation-control"
              maxLength="1"
              value={this.state.data.AbbreviationTwo9}
              name="AbbreviationTwo9"
              id="AbbreviationTwo9"
              onKeyDown={event =>
                this.handleBackspaceKey(
                  event,
                  "#AbbreviationTwo8",
                  "#AbbreviationTwo9"
                )
              }
              onChange={this.handleAbbreviationTwo9}
            />

            <input
              type="text"
              className="Abbreviation-control"
              maxLength="1"
              value={this.state.data.AbbreviationTwo10}
              name="AbbreviationTwo10"
              id="AbbreviationTwo10"
              onKeyDown={event =>
                this.handleBackspaceKey(
                  event,
                  "#AbbreviationTwo9",
                  "#AbbreviationTwo10"
                )
              }
              onChange={this.handleAbbreviationTwo10}
            />

            <input
              type="text"
              className="Abbreviation-control"
              maxLength="1"
              value={this.state.data.AbbreviationTwo11}
              name="AbbreviationTwo11"
              id="AbbreviationTwo11"
              onKeyDown={event =>
                this.handleBackspaceKey(
                  event,
                  "#AbbreviationTwo10",
                  "#AbbreviationTwo11"
                )
              }
              onChange={this.handleAbbreviationTwo11}
            />

            <input
              type="text"
              className="Abbreviation-control"
              maxLength="1"
              value={this.state.data.AbbreviationTwo12}
              name="AbbreviationTwo12"
              id="AbbreviationTwo12"
              onKeyDown={event =>
                this.handleBackspaceKey(
                  event,
                  "#AbbreviationTwo11",
                  "#AbbreviationTwo12"
                )
              }
              onChange={this.handleAbbreviationTwo12}
            />

            <input
              type="text"
              className="Abbreviation-control"
              maxLength="1"
              value={this.state.data.AbbreviationTwo13}
              name="AbbreviationTwo13"
              id="AbbreviationTwo13"
              onKeyDown={event =>
                this.handleBackspaceKey(
                  event,
                  "#AbbreviationTwo12",
                  "#AbbreviationTwo13"
                )
              }
              onChange={this.handleAbbreviationTwo13}
            />

            <input
              type="text"
              className="Abbreviation-control"
              maxLength="1"
              value={this.state.data.AbbreviationTwo14}
              name="AbbreviationTwo14"
              id="AbbreviationTwo14"
              onKeyDown={event =>
                this.handleBackspaceKey(
                  event,
                  "#AbbreviationTwo13",
                  "#AbbreviationTwo14"
                )
              }
              onChange={this.handleAbbreviationTwo14}
            />

            <input
              type="text"
              className="Abbreviation-control"
              maxLength="1"
              value={this.state.data.AbbreviationTwo15}
              name="AbbreviationTwo15"
              id="AbbreviationTwo15"
              onKeyDown={event =>
                this.handleBackspaceKey(
                  event,
                  "#AbbreviationTwo14",
                  "#AbbreviationTwo15"
                )
              }
              onChange={this.handleAbbreviationTwo15}
            />

            <input
              type="text"
              className="Abbreviation-control"
              maxLength="1"
              value={this.state.data.AbbreviationTwo16}
              name="AbbreviationTwo16"
              id="AbbreviationTwo16"
              onKeyDown={event =>
                this.handleBackspaceKey(
                  event,
                  "#AbbreviationTwo15",
                  "#AbbreviationTwo16"
                )
              }
              onChange={this.handleAbbreviationTwo16}
            />

            <input
              type="text"
              className="Abbreviation-control"
              maxLength="1"
              value={this.state.data.AbbreviationTwo17}
              name="AbbreviationTwo17"
              id="AbbreviationTwo17"
              onKeyDown={event =>
                this.handleBackspaceKey(
                  event,
                  "#AbbreviationTwo16",
                  "#AbbreviationTwo17"
                )
              }
              onChange={this.handleAbbreviationTwo17}
            />

            <input
              type="text"
              className="Abbreviation-control"
              maxLength="1"
              value={this.state.data.AbbreviationTwo18}
              name="AbbreviationTwo18"
              id="AbbreviationTwo18"
              onKeyDown={event =>
                this.handleBackspaceKey(
                  event,
                  "#AbbreviationTwo17",
                  "#AbbreviationTwo18"
                )
              }
              onChange={this.handleAbbreviationTwo18}
            />

            <input
              type="text"
              className="Abbreviation-control"
              maxLength="1"
              value={this.state.data.AbbreviationTwo19}
              name="AbbreviationTwo19"
              id="AbbreviationTwo19"
              onKeyDown={event =>
                this.handleBackspaceKey(
                  event,
                  "#AbbreviationTwo18",
                  "#AbbreviationTwo19"
                )
              }
              onChange={this.handleAbbreviationTwo19}
            />

            <input
              type="text"
              className="Abbreviation-control"
              maxLength="1"
              value={this.state.data.AbbreviationTwo20}
              name="AbbreviationTwo20"
              id="AbbreviationTwo20"
              onKeyDown={event =>
                this.handleBackspaceKey(
                  event,
                  "#AbbreviationTwo19",
                  "#AbbreviationTwo20"
                )
              }
              onChange={this.handleAbbreviationTwo20}
            />

            <input
              type="text"
              className="Abbreviation-control"
              maxLength="1"
              value={this.state.data.AbbreviationTwo21}
              name="AbbreviationTwo21"
              id="AbbreviationTwo21"
              onKeyDown={event =>
                this.handleBackspaceKey(
                  event,
                  "#AbbreviationTwo20",
                  "#AbbreviationTwo21"
                )
              }
              onChange={this.handleAbbreviationTwo21}
            />

            <input
              type="text"
              className="Abbreviation-control"
              maxLength="1"
              value={this.state.data.AbbreviationTwo22}
              name="AbbreviationTwo22"
              id="AbbreviationTwo22"
              onKeyDown={event =>
                this.handleBackspaceKey(
                  event,
                  "#AbbreviationTwo21",
                  "#AbbreviationTwo22"
                )
              }
              onChange={this.handleAbbreviationTwo22}
            />

            <input
              type="text"
              className="Abbreviation-control"
              maxLength="1"
              value={this.state.data.AbbreviationTwo23}
              name="AbbreviationTwo23"
              id="AbbreviationTwo23"
              onKeyDown={event =>
                this.handleBackspaceKey(
                  event,
                  "#AbbreviationTwo22",
                  "#AbbreviationTwo23"
                )
              }
              onChange={this.handleAbbreviationTwo23}
            />

            <input
              type="text"
              className="Abbreviation-control"
              maxLength="1"
              value={this.state.data.AbbreviationTwo24}
              name="AbbreviationTwo24"
              id="AbbreviationTwo24"
              onKeyDown={event =>
                this.handleBackspaceKey(
                  event,
                  "#AbbreviationTwo23",
                  "#AbbreviationTwo24"
                )
              }
              onChange={this.handleAbbreviationTwo24}
            />

            <input
              type="text"
              className="Abbreviation-control"
              maxLength="1"
              value={this.state.data.AbbreviationTwo25}
              name="AbbreviationTwo25"
              id="AbbreviationTwo25"
              onKeyDown={event =>
                this.handleBackspaceKey(
                  event,
                  "#AbbreviationTwo24",
                  "#AbbreviationTwo25"
                )
              }
              onChange={this.handleAbbreviationTwo25}
            />

            <input
              type="text"
              className="Abbreviation-control"
              maxLength="1"
              value={this.state.data.AbbreviationTwo26}
              name="AbbreviationTwo26"
              id="AbbreviationTwo26"
              onKeyDown={event =>
                this.handleBackspaceKey(
                  event,
                  "#AbbreviationTwo25",
                  "#AbbreviationTwo26"
                )
              }
              onChange={this.handleAbbreviationTwo26}
            />

            <input
              type="text"
              className="Abbreviation-control"
              maxLength="1"
              value={this.state.data.AbbreviationTwo27}
              name="AbbreviationTwo27"
              id="AbbreviationTwo27"
              onKeyDown={event =>
                this.handleBackspaceKey(
                  event,
                  "#AbbreviationTwo26",
                  "#AbbreviationTwo27"
                )
              }
              onChange={this.handleAbbreviationTwo27}
            />

            <input
              type="text"
              className="Abbreviation-control"
              maxLength="1"
              value={this.state.data.AbbreviationTwo28}
              name="AbbreviationTwo28"
              id="AbbreviationTwo28"
              onKeyDown={event =>
                this.handleBackspaceKey(
                  event,
                  "#AbbreviationTwo27",
                  "#AbbreviationTwo28"
                )
              }
              onChange={this.handleAbbreviationTwo28}
            />

            <input
              type="text"
              className="Abbreviation-control"
              maxLength="1"
              value={this.state.data.AbbreviationTwo29}
              name="AbbreviationTwo29"
              id="AbbreviationTwo29"
              onKeyDown={event =>
                this.handleBackspaceKey(
                  event,
                  "#AbbreviationTwo28",
                  "#AbbreviationTwo29"
                )
              }
              onChange={this.handleAbbreviationTwo29}
            />

            <input
              type="text"
              className="Abbreviation-control"
              maxLength="1"
              value={this.state.data.AbbreviationTwo30}
              name="AbbreviationTwo30"
              id="AbbreviationTwo30"
              onKeyDown={event =>
                this.handleBackspaceKey(
                  event,
                  "#AbbreviationTwo29",
                  "#AbbreviationTwo30"
                )
              }
              onChange={this.handleAbbreviationTwo30}
            />

            <input
              type="text"
              className="Abbreviation-control"
              maxLength="1"
              value={this.state.data.AbbreviationTwo31}
              name="AbbreviationTwo31"
              id="AbbreviationTwo31"
              onKeyDown={event =>
                this.handleBackspaceKey(
                  event,
                  "#AbbreviationTwo30",
                  "#AbbreviationTwo31"
                )
              }
              onChange={this.handleAbbreviationTwo31}
            />

            <input
              type="text"
              className="Abbreviation-control"
              maxLength="1"
              value={this.state.data.AbbreviationTwo32}
              name="AbbreviationTwo32"
              id="AbbreviationTwo32"
              onKeyDown={event =>
                this.handleBackspaceKey(
                  event,
                  "#AbbreviationTwo31",
                  "#AbbreviationTwo32"
                )
              }
              onChange={this.handleAbbreviationTwo32}
            />

            <input
              type="text"
              className="Abbreviation-control"
              maxLength="1"
              value={this.state.data.AbbreviationTwo33}
              name="AbbreviationTwo33"
              id="AbbreviationTwo33"
              onKeyDown={event =>
                this.handleBackspaceKey(
                  event,
                  "#AbbreviationTwo32",
                  "#AbbreviationTwo33"
                )
              }
              onChange={this.handleAbbreviationTwo33}
            />

            <input
              type="text"
              className="Abbreviation-control"
              maxLength="1"
              value={this.state.data.AbbreviationTwo34}
              name="AbbreviationTwo34"
              id="AbbreviationTwo34"
              onKeyDown={event =>
                this.handleBackspaceKey(
                  event,
                  "#AbbreviationTwo33",
                  "#AbbreviationTwo34"
                )
              }
              onChange={this.handleAbbreviationTwo34}
            />

            <input
              type="text"
              className="Abbreviation-control"
              maxLength="1"
              value={this.state.data.AbbreviationTwo35}
              name="AbbreviationTwo35"
              id="AbbreviationTwo35"
              onKeyDown={event =>
                this.handleBackspaceKey(
                  event,
                  "#AbbreviationTwo34",
                  "#AbbreviationTwo35"
                )
              }
              onChange={this.handleAbbreviationTwo35}
            />

            <input
              type="text"
              className="Abbreviation-control"
              maxLength="1"
              value={this.state.data.AbbreviationTwo36}
              name="AbbreviationTwo36"
              id="AbbreviationTwo36"
              onKeyDown={event =>
                this.handleBackspaceKey(
                  event,
                  "#AbbreviationTwo35",
                  "#AbbreviationTwo36"
                )
              }
              onChange={this.handleAbbreviationTwo36}
            />

            <input
              type="text"
              className="Abbreviation-control"
              maxLength="1"
              value={this.state.data.AbbreviationTwo37}
              name="AbbreviationTwo37"
              id="AbbreviationTwo37"
              onKeyDown={event =>
                this.handleBackspaceKey(
                  event,
                  "#AbbreviationTwo36",
                  "#AbbreviationTwo37"
                )
              }
              onChange={this.handleAbbreviationTwo37}
            />

            <br />
          </div>
        </div>
      </div>
    );
  }
}

export default SecondComponent;
