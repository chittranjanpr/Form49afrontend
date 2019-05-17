import React, { Component } from 'react';
import './Form1.css'
import "./Panmain.css";
import Header from "./header";
import FirstComponent from './FirstComponent';
import SecondComponent from './SecondComponent';
import ThirdComponent from './ThirdComponent';
import FourthComponent from './FourthComponent';
import FifthComponent from './FifthComponent';
import SixthComponent from './SixthComponent';
import SeventhComponent from './SeventhComponent';
import EigthComponent from './EigthComponent';
import NinthComponent from './NinthComponent';
import Modal from "react-responsive-modal";
import OtpInput from 'react-otp-input';
import axios from "axios";
import $ from 'jquery';



class Form extends Component {


  constructor(props) {
    super(props);

    this.state = {
      address: ["Name of Office", "Flat / Room / Door / Block No.", "Name of Premises / Building / Village", "Road / Street / Lane / Post Office", "Area / Locality / Taluka / Sub-Division", "Town / City / District"],
      addressTwo: ["Flat / Room / Door / Block No.", "Name of Premises / Building / Village", "Road / Street / Lane / Post Office", "Area / Locality / Taluka / Sub-Division", "Town / City / District"],
      name: ["Last Name / Surname", "First Name", "Middle Name"],
      addressThree: ["Name of Premises / Building / Village", "Road / Street / Lane/Post Office", "Area / Locality / Taluka/ Sub- Division", "Town / City / District"],
      
      isModalEnabled: false,
      isIndicatorEnabled: false,
      officeEnabled: false,
      isEnabled : false,
      isEnabledCheck: true,
      OtpInput: "",

      errors: {
        NameTitleOne : "",
        OtherName : "",
        NameTitleTwo : "",
        Gender : "",
        ParentName : "",
        Communication : "",
        Status : "",
        Income : "",
        NameTitleThree : "",
        FirstName: "",
        LastName : "",
        MiddleName : "",
        FatherFirstName : "",
        FatherMiddleName: "",
        FatherLastName: "",
        MotherFirstName: "",
        MotherMiddleName: "",
        MotherLastName: "",
        OtherFirstName: "",
        OtherLastName: "",
        OtherMiddleName: "",
        RAFirstName: "",
        RALastName: "",
        RAMiddleName: "",
        AbbreviationOne: "",
        AbbreviationTwo: "",
        ResidenceFlat: "",
        ResidencePremises: "",
        ResidenceRoad: "",
        ResidenceArea: "",
        ResidenceTown: "",
        OfficeName: "",
        OfficeFlat: "",
        OfficePremises: "",
        OfficeRoad: "",
        OfficeArea: "",
        OfficeTown: "",
        RAFlat: "",
        RAPremises: "",
        RARoad: "",
        RAArea: "",
        RATown: "",
        AadhaarFirstName: "",
        AadhaarLastName: "",
        AadhaarMiddleName: "",
        AadhaarNumber: "",
        EnrolmentId : "",
        RegistrationNumber: "",
        ResidenceState: "",
        ResidencePincode: "",
        ResidenceCountry: "",
        OfficeState: "",
        OfficePincode: "",
        OfficeCountry: "",
        RAState: "",
        RAPincode: "",
        CountryCode: "",
        StdCode: "",
        PhoneNumber: "",
        Day: "",
        Month: "",
        Year: "",
        POI: "",
        POA: "",
        POB: "",
        Applicant: "",
        Capacity: "",
        Email: "",
        BusinessCode1: "",
        BusinessCode2: "",
        BusinessCode: "",
        Salary: "",
        CapitalGains: "",
        IncomeBusiness: "",
        IncomeOtherSource: "",
        IncomeFromHouse: "",
        NoIncome: "",
        phonenumber: "",
        errorid: "1"
      },
      data : {
         NameTitleOne : "",
         OtherName : "",
         NameTitleTwo : "",
         Gender : "",
         ParentName : "",
         Communication : "",
         Status : "",
         Income : "",
         NameTitleThree : "",
         FirstName1 : "", FirstName2: "", FirstName3: "", FirstName4: "", FirstName5: "",
         FirstName6 : "", FirstName7: "", FirstName8: "", FirstName9: "", FirstName10: "",
         FirstName11 : "", FirstName12: "", FirstName13: "", FirstName14: "", FirstName15: "",
         FirstName16 : "", FirstName17: "", FirstName18: "", FirstName19: "", FirstName20: "",
         FirstName21 : "", FirstName22: "", FirstName23: "", FirstName24: "", FirstName25: "",
         FirstName: "",
         LastName1 : "", LastName2: "", LastName3: "", LastName4: "", LastName5: "",
         LastName6 : "", LastName7: "", LastName8: "", LastName9: "", LastName10: "",
         LastName11 : "", LastName12: "", LastName13: "", LastName14: "", LastName15: "",
         LastName16 : "", LastName17: "", LastName18: "", LastName19: "", LastName20: "",
         LastName21 : "", LastName22: "", LastName23: "", LastName24: "", LastName25: "",
         LastName : "",
         MiddleName1 : "", MiddleName2: "", MiddleName3: "", MiddleName4: "", MiddleName5: "",
         MiddleName6 : "", MiddleName7: "", MiddleName8: "", MiddleName9: "", MiddleName10: "",
         MiddleName11 : "", MiddleName12: "", MiddleName13: "", MiddleName14: "", MiddleName15: "",
         MiddleName16 : "", MiddleName17: "", MiddleName18: "", MiddleName19: "", MiddleName20: "",
         MiddleName21 : "", MiddleName22: "", MiddleName23: "", MiddleName24: "", MiddleName25: "",
         MiddleName : "",
         FatherFirstName1 : "", FatherFirstName2: "", FatherFirstName3: "", FatherFirstName4: "", FatherFirstName5: "",
         FatherFirstName6 : "", FatherFirstName7: "", FatherFirstName8: "", FatherFirstName9: "", FatherFirstName10: "",
         FatherFirstName11 : "", FatherFirstName12: "", FatherFirstName13: "", FatherFirstName14: "", FatherFirstName15: "",
         FatherFirstName16 : "", FatherFirstName17: "", FatherFirstName18: "", FatherFirstName19: "", FatherFirstName20: "",
         FatherFirstName21 : "", FatherFirstName22: "", FatherFirstName23: "", FatherFirstName24: "", FatherFirstName25: "",
         FatherFirstName : "",
         FatherMiddleName1 : "", FatherMiddleName2: "", FatherMiddleName3: "", FatherMiddleName4: "", FatherMiddleName5: "",
         FatherMiddleName6 : "", FatherMiddleName7: "", FatherMiddleName8: "", FatherMiddleName9: "", FatherMiddleName10: "",
         FatherMiddleName11 : "", FatherMiddleName12: "", FatherMiddleName13: "", FatherMiddleName14: "", FatherMiddleName15: "",
         FatherMiddleName16 : "", FatherMiddleName17: "", FatherMiddleName18: "", FatherMiddleName19: "", FatherMiddleName20: "",
         FatherMiddleName21 : "", FatherMiddleName22: "", FatherMiddleName23: "", FatherMiddleName24: "", FatherMiddleName25: "",
         FatherMiddleName: "",
         FatherLastName1 : "", FatherLastName2: "", FatherLastName3: "", FatherLastName4: "", FatherLastName5: "",
         FatherLastName6 : "", FatherLastName7: "", FatherLastName8: "", FatherLastName9: "", FatherLastName10: "",
         FatherLastName11 : "", FatherLastName12: "", FatherLastName13: "", FatherLastName14: "", FatherLastName15: "",
         FatherLastName16 : "", FatherLastName17: "", FatherLastName18: "", FatherLastName19: "", FatherLastName20: "",
         FatherLastName21 : "", FatherLastName22: "", FatherLastName23: "", FatherLastName24: "", FatherLastName25: "",
         FatherLastName: "",
         MotherFirstName1 : "", MotherFirstName2: "", MotherFirstName3: "", MotherFirstName4: "", MotherFirstName5: "",
         MotherFirstName6 : "", MotherFirstName7: "", MotherFirstName8: "", MotherFirstName9: "", MotherFirstName10: "",
         MotherFirstName11 : "", MotherFirstName12: "", MotherFirstName13: "", MotherFirstName14: "", MotherFirstName15: "",
         MotherFirstName16 : "", MotherFirstName17: "", MotherFirstName18: "", MotherFirstName19: "", MotherFirstName20: "",
         MotherFirstName21 : "", MotherFirstName22: "", MotherFirstName23: "", MotherFirstName24: "", MotherFirstName25: "",
         MotherFirstName: "",
         MotherMiddleName1 : "", MotherMiddleName2: "", MotherMiddleName3: "", MotherMiddleName4: "", MotherMiddleName5: "",
         MotherMiddleName6 : "", MotherMiddleName7: "", MotherMiddleName8: "", MotherMiddleName9: "", MotherMiddleName10: "",
         MotherMiddleName11 : "", MotherMiddleName12: "", MotherMiddleName13: "", MotherMiddleName14: "", MotherMiddleName15: "",
         MotherMiddleName16 : "", MotherMiddleName17: "", MotherMiddleName18: "", MotherMiddleName19: "", MotherMiddleName20: "",
         MotherMiddleName21 : "", MotherMiddleName22: "", MotherMiddleName23: "", MotherMiddleName24: "", MotherMiddleName25: "",
         MotherMiddleName: "",
         MotherLastName1 : "", MotherLastName2: "", MotherLastName3: "", MotherLastName4: "", MotherLastName5: "",
         MotherLastName6 : "", MotherLastName7: "", MotherLastName8: "", MotherLastName9: "", MotherLastName10: "",
         MotherLastName11 : "", MotherLastName12: "", MotherLastName13: "", MotherLastName14: "", MotherLastName15: "",
         MotherLastName16 : "", MotherLastName17: "", MotherLastName18: "", MotherLastName19: "", MotherLastName20: "",
         MotherLastName21 : "", MotherLastName22: "", MotherLastName23: "", MotherLastName24: "", MotherLastName25: "",
         MotherLastName: "",
         OtherFirstName1 : "", OtherFirstName2: "", OtherFirstName3: "", OtherFirstName4: "", OtherFirstName5: "",
         OtherFirstName6 : "", OtherFirstName7: "", OtherFirstName8: "", OtherFirstName9: "", OtherFirstName10: "",
         OtherFirstName11 : "", OtherFirstName12: "", OtherFirstName13: "", OtherFirstName14: "", OtherFirstName15: "",
         OtherFirstName16 : "", OtherFirstName17: "", OtherFirstName18: "", OtherFirstName19: "", OtherFirstName20: "",
         OtherFirstName21 : "", OtherFirstName22: "", OtherFirstName23: "", OtherFirstName24: "", OtherFirstName25: "",
         OtherFirstName: "",
         OtherLastName1 : "", OtherLastName2: "", OtherLastName3: "", OtherLastName4: "", OtherLastName5: "",
         OtherLastName6 : "", OtherLastName7: "", OtherLastName8: "", OtherLastName9: "", OtherLastName10: "",
         OtherLastName11 : "", OtherLastName12: "", OtherLastName13: "", OtherLastName14: "", OtherLastName15: "",
         OtherLastName16 : "", OtherLastName17: "", OtherLastName18: "", OtherLastName19: "", OtherLastName20: "",
         OtherLastName21 : "", OtherLastName22: "", OtherLastName23: "", OtherLastName24: "", OtherLastName25: "",
         OtherLastName: "",
         OtherMiddleName1 : "", OtherMiddleName2: "", OtherMiddleName3: "", OtherMiddleName4: "", OtherMiddleName5: "",
         OtherMiddleName6 : "", OtherMiddleName7: "", OtherMiddleName8: "", OtherMiddleName9: "", OtherMiddleName10: "",
         OtherMiddleName11 : "", OtherMiddleName12: "", OtherMiddleName13: "", OtherMiddleName14: "", OtherMiddleName15: "",
         OtherMiddleName16 : "", OtherMiddleName17: "", OtherMiddleName18: "", OtherMiddleName19: "", OtherMiddleName20: "",
         OtherMiddleName21 : "", OtherMiddleName22: "", OtherMiddleName23: "", OtherMiddleName24: "", OtherMiddleName25: "",
         OtherMiddleName: "",
         RAFirstName1 : "", RAFirstName2: "", RAFirstName3: "", RAFirstName4: "", RAFirstName5: "",
         RAFirstName6 : "", RAFirstName7: "", RAFirstName8: "", RAFirstName9: "", RAFirstName10: "",
         RAFirstName11 : "", RAFirstName12: "", RAFirstName13: "", RAFirstName14: "", RAFirstName15: "",
         RAFirstName16 : "", RAFirstName17: "", RAFirstName18: "", RAFirstName19: "", RAFirstName20: "",
         RAFirstName21 : "", RAFirstName22: "", RAFirstName23: "", RAFirstName24: "", RAFirstName25: "",
         RAFirstName: "",
         RALastName1 : "", RALastName2: "", RALastName3: "", RALastName4: "", RALastName5: "",
         RALastName6 : "", RALastName7: "", RALastName8: "", RALastName9: "", RALastName10: "",
         RALastName11 : "", RALastName12: "", RALastName13: "", RALastName14: "", RALastName15: "",
         RALastName16 : "", RALastName17: "", RALastName18: "", RALastName19: "", RALastName20: "",
         RALastName21 : "", RALastName22: "", RALastName23: "", RALastName24: "", RALastName25: "",
         RALastName: "",
         RAMiddleName1 : "", RAMiddleName2: "", RAMiddleName3: "", RAMiddleName4: "", RAMiddleName5: "",
         RAMiddleName6 : "", RAMiddleName7: "", RAMiddleName8: "", RAMiddleName9: "", RAMiddleName10: "",
         RAMiddleName11 : "", RAMiddleName12: "", RAMiddleName13: "", RAMiddleName14: "", RAMiddleName15: "",
         RAMiddleName16 : "", RAMiddleName17: "", RAMiddleName18: "", RAMiddleName19: "", RAMiddleName20: "",
         RAMiddleName21 : "", RAMiddleName22: "", RAMiddleName23: "", RAMiddleName24: "", RAMiddleName25: "",
         RAMiddleName: "",
         AbbreviationOne1 : "", AbbreviationOne2: "", AbbreviationOne3: "", AbbreviationOne4: "", AbbreviationOne5: "",
         AbbreviationOne6 : "", AbbreviationOne7: "", AbbreviationOne8: "", AbbreviationOne9: "", AbbreviationOne10: "",
         AbbreviationOne11 : "", AbbreviationOne12: "", AbbreviationOne13: "", AbbreviationOne14: "", AbbreviationOne15: "",
         AbbreviationOne16 : "", AbbreviationOne17: "", AbbreviationOne18: "", AbbreviationOne19: "", AbbreviationOne20: "",
         AbbreviationOne21 : "", AbbreviationOne22: "", AbbreviationOne23: "", AbbreviationOne24: "", AbbreviationOne25: "",
         AbbreviationOne26 : "", AbbreviationOne27: "", AbbreviationOne28: "", AbbreviationOne29: "", AbbreviationOne30: "",
         AbbreviationOne31 : "", AbbreviationOne32: "", AbbreviationOne33: "", AbbreviationOne34: "", AbbreviationOne35: "",
         AbbreviationOne36 : "", AbbreviationOne37: "",
         AbbreviationOne: "",
         AbbreviationTwo1 : "", AbbreviationTwo2: "", AbbreviationTwo3: "", AbbreviationTwo4: "", AbbreviationTwo5: "",
         AbbreviationTwo6 : "", AbbreviationTwo7: "", AbbreviationTwo8: "", AbbreviationTwo9: "", AbbreviationTwo10: "",
         AbbreviationTwo11 : "", AbbreviationTwo12: "", AbbreviationTwo13: "", AbbreviationTwo14: "", AbbreviationTwo15: "",
         AbbreviationTwo16 : "", AbbreviationTwo17: "", AbbreviationTwo18: "", AbbreviationTwo19: "", AbbreviationTwo20: "",
         AbbreviationTwo21 : "", AbbreviationTwo22: "", AbbreviationTwo23: "", AbbreviationTwo24: "", AbbreviationTwo25: "",
         AbbreviationTwo26 : "", AbbreviationTwo27: "", AbbreviationTwo28: "", AbbreviationTwo29: "", AbbreviationTwo30: "",
         AbbreviationTwo31 : "", AbbreviationTwo32: "", AbbreviationTwo33: "", AbbreviationTwo34: "", AbbreviationTwo35: "",
         AbbreviationTwo36 : "", AbbreviationTwo37: "",
         AbbreviationTwo: "",
         ResidenceFlat1 : "", ResidenceFlat2: "", ResidenceFlat3: "", ResidenceFlat4: "", ResidenceFlat5: "",
         ResidenceFlat6 : "", ResidenceFlat7: "", ResidenceFlat8: "", ResidenceFlat9: "", ResidenceFlat10: "",
         ResidenceFlat11 : "", ResidenceFlat12: "", ResidenceFlat13: "", ResidenceFlat14: "", ResidenceFlat15: "",
         ResidenceFlat16 : "", ResidenceFlat17: "", ResidenceFlat18: "", ResidenceFlat19: "", ResidenceFlat20: "",
         ResidenceFlat21 : "", ResidenceFlat22: "", ResidenceFlat23: "", ResidenceFlat24: "", ResidenceFlat25: "",
         ResidenceFlat: "",
         ResidencePremises1 : "", ResidencePremises2: "", ResidencePremises3: "", ResidencePremises4: "", ResidencePremises5: "",
         ResidencePremises6 : "", ResidencePremises7: "", ResidencePremises8: "", ResidencePremises9: "", ResidencePremises10: "",
         ResidencePremises11 : "", ResidencePremises12: "", ResidencePremises13: "", ResidencePremises14: "", ResidencePremises15: "",
         ResidencePremises16 : "", ResidencePremises17: "", ResidencePremises18: "", ResidencePremises19: "", ResidencePremises20: "",
         ResidencePremises21 : "", ResidencePremises22: "", ResidencePremises23: "", ResidencePremises24: "", ResidencePremises25: "",
         ResidencePremises: "",
         ResidenceRoad1 : "", ResidenceRoad2: "", ResidenceRoad3: "", ResidenceRoad4: "", ResidenceRoad5: "",
         ResidenceRoad6 : "", ResidenceRoad7: "", ResidenceRoad8: "", ResidenceRoad9: "", ResidenceRoad10: "",
         ResidenceRoad11 : "", ResidenceRoad12: "", ResidenceRoad13: "", ResidenceRoad14: "", ResidenceRoad15: "",
         ResidenceRoad16 : "", ResidenceRoad17: "", ResidenceRoad18: "", ResidenceRoad19: "", ResidenceRoad20: "",
         ResidenceRoad21 : "", ResidenceRoad22: "", ResidenceRoad23: "", ResidenceRoad24: "", ResidenceRoad25: "",
         ResidenceRoad: "",
         ResidenceArea1 : "", ResidenceArea2: "", ResidenceArea3: "", ResidenceArea4: "", ResidenceArea5: "",
         ResidenceArea6 : "", ResidenceArea7: "", ResidenceArea8: "", ResidenceArea9: "", ResidenceArea10: "",
         ResidenceArea11 : "", ResidenceArea12: "", ResidenceArea13: "", ResidenceArea14: "", ResidenceArea15: "",
         ResidenceArea16 : "", ResidenceArea17: "", ResidenceArea18: "", ResidenceArea19: "", ResidenceArea20: "",
         ResidenceArea21 : "", ResidenceArea22: "", ResidenceArea23: "", ResidenceArea24: "", ResidenceArea25: "",
         ResidenceArea: "",
         ResidenceTown1 : "", ResidenceTown2: "", ResidenceTown3: "", ResidenceTown4: "", ResidenceTown5: "",
         ResidenceTown6 : "", ResidenceTown7: "", ResidenceTown8: "", ResidenceTown9: "", ResidenceTown10: "",
         ResidenceTown11 : "", ResidenceTown12: "", ResidenceTown13: "", ResidenceTown14: "", ResidenceTown15: "",
         ResidenceTown16 : "", ResidenceTown17: "", ResidenceTown18: "", ResidenceTown19: "", ResidenceTown20: "",
         ResidenceTown21 : "", ResidenceTown22: "", ResidenceTown23: "", ResidenceTown24: "", ResidenceTown25: "",
         ResidenceTown: "",
         OfficeName1 : "", OfficeName2: "", OfficeName3: "", OfficeName4: "", OfficeName5: "",
         OfficeName6 : "", OfficeName7: "", OfficeName8: "", OfficeName9: "", OfficeName10: "",
         OfficeName11 : "", OfficeName12: "", OfficeName13: "", OfficeName14: "", OfficeName15: "",
         OfficeName16 : "", OfficeName17: "", OfficeName18: "", OfficeName19: "", OfficeName20: "",
         OfficeName21 : "", OfficeName22: "", OfficeName23: "", OfficeName24: "", OfficeName25: "",
         OfficeName: "",
         OfficeFlat1 : "", OfficeFlat2: "", OfficeFlat3: "", OfficeFlat4: "", OfficeFlat5: "",
         OfficeFlat6 : "", OfficeFlat7: "", OfficeFlat8: "", OfficeFlat9: "", OfficeFlat10: "",
         OfficeFlat11 : "", OfficeFlat12: "", OfficeFlat13: "", OfficeFlat14: "", OfficeFlat15: "",
         OfficeFlat16 : "", OfficeFlat17: "", OfficeFlat18: "", OfficeFlat19: "", OfficeFlat20: "",
         OfficeFlat21 : "", OfficeFlat22: "", OfficeFlat23: "", OfficeFlat24: "", OfficeFlat25: "",
         OfficeFlat: "",
         OfficePremises1 : "", OfficePremises2: "", OfficePremises3: "", OfficePremises4: "", OfficePremises5: "",
         OfficePremises6 : "", OfficePremises7: "", OfficePremises8: "", OfficePremises9: "", OfficePremises10: "",
         OfficePremises11 : "", OfficePremises12: "", OfficePremises13: "", OfficePremises14: "", OfficePremises15: "",
         OfficePremises16 : "", OfficePremises17: "", OfficePremises18: "", OfficePremises19: "", OfficePremises20: "",
         OfficePremises21 : "", OfficePremises22: "", OfficePremises23: "", OfficePremises24: "", OfficePremises25: "",
         OfficePremises: "",
         OfficeRoad1 : "", OfficeRoad2: "", OfficeRoad3: "", OfficeRoad4: "", OfficeRoad5: "",
         OfficeRoad6 : "", OfficeRoad7: "", OfficeRoad8: "", OfficeRoad9: "", OfficeRoad10: "",
         OfficeRoad11 : "", OfficeRoad12: "", OfficeRoad13: "", OfficeRoad14: "", OfficeRoad15: "",
         OfficeRoad16 : "", OfficeRoad17: "", OfficeRoad18: "", OfficeRoad19: "", OfficeRoad20: "",
         OfficeRoad21 : "", OfficeRoad22: "", OfficeRoad23: "", OfficeRoad24: "", OfficeRoad25: "",
         OfficeRoad: "",
         OfficeArea1 : "", OfficeArea2: "", OfficeArea3: "", OfficeArea4: "", OfficeArea5: "",
         OfficeArea6 : "", OfficeArea7: "", OfficeArea8: "", OfficeArea9: "", OfficeArea10: "",
         OfficeArea11 : "", OfficeArea12: "", OfficeArea13: "", OfficeArea14: "", OfficeArea15: "",
         OfficeArea16 : "", OfficeArea17: "", OfficeArea18: "", OfficeArea19: "", OfficeArea20: "",
         OfficeArea21 : "", OfficeArea22: "", OfficeArea23: "", OfficeArea24: "", OfficeArea25: "",
         OfficeArea: "",
         OfficeTown1 : "", OfficeTown2: "", OfficeTown3: "", OfficeTown4: "", OfficeTown5: "",
         OfficeTown6 : "", OfficeTown7: "", OfficeTown8: "", OfficeTown9: "", OfficeTown10: "",
         OfficeTown11 : "", OfficeTown12: "", OfficeTown13: "", OfficeTown14: "", OfficeTown15: "",
         OfficeTown16 : "", OfficeTown17: "", OfficeTown18: "", OfficeTown19: "", OfficeTown20: "",
         OfficeTown21 : "", OfficeTown22: "", OfficeTown23: "", OfficeTown24: "", OfficeTown25: "",
         OfficeTown: "",
         RAFlat1 : "", RAFlat2: "", RAFlat3: "", RAFlat4: "", RAFlat5: "",
         RAFlat6 : "", RAFlat7: "", RAFlat8: "", RAFlat9: "", RAFlat10: "",
         RAFlat11 : "", RAFlat12: "", RAFlat13: "", RAFlat14: "", RAFlat15: "",
         RAFlat16 : "", RAFlat17: "", RAFlat18: "", RAFlat19: "", RAFlat20: "",
         RAFlat21 : "", RAFlat22: "", RAFlat23: "", RAFlat24: "", RAFlat25: "",
         RAFlat: "",
         RAPremises1 : "", RAPremises2: "", RAPremises3: "", RAPremises4: "", RAPremises5: "",
         RAPremises6 : "", RAPremises7: "", RAPremises8: "", RAPremises9: "", RAPremises10: "",
         RAPremises11 : "", RAPremises12: "", RAPremises13: "", RAPremises14: "", RAPremises15: "",
         RAPremises16 : "", RAPremises17: "", RAPremises18: "", RAPremises19: "", RAPremises20: "",
         RAPremises21 : "", RAPremises22: "", RAPremises23: "", RAPremises24: "", RAPremises25: "",
         RAPremises: "",
         RARoad1 : "", RARoad2: "", RARoad3: "", RARoad4: "", RARoad5: "",
         RARoad6 : "", RARoad7: "", RARoad8: "", RARoad9: "", RARoad10: "",
         RARoad11 : "", RARoad12: "", RARoad13: "", RARoad14: "", RARoad15: "",
         RARoad16 : "", RARoad17: "", RARoad18: "", RARoad19: "", RARoad20: "",
         RARoad21 : "", RARoad22: "", RARoad23: "", RARoad24: "", RARoad25: "",
         RARoad: "",
         RAArea1 : "", RAArea2: "", RAArea3: "", RAArea4: "", RAArea5: "",
         RAArea6 : "", RAArea7: "", RAArea8: "", RAArea9: "", RAArea10: "",
         RAArea11 : "", RAArea12: "", RAArea13: "", RAArea14: "", RAArea15: "",
         RAArea16 : "", RAArea17: "", RAArea18: "", RAArea19: "", RAArea20: "",
         RAArea21 : "", RAArea22: "", RAArea23: "", RAArea24: "", RAArea25: "",
         RAArea: "",
         RATown1 : "", RATown2: "", RATown3: "", RATown4: "", RATown5: "",
         RATown6 : "", RATown7: "", RATown8: "", RATown9: "", RATown10: "",
         RATown11 : "", RATown12: "", RATown13: "", RATown14: "", RATown15: "",
         RATown16 : "", RATown17: "", RATown18: "", RATown19: "", RATown20: "",
         RATown21 : "", RATown22: "", RATown23: "", RATown24: "", RATown25: "",
         RATown: "",
         AadhaarFirstName1 : "", AadhaarFirstName2: "", AadhaarFirstName3: "", AadhaarFirstName4: "", AadhaarFirstName5: "",
         AadhaarFirstName6 : "", AadhaarFirstName7: "", AadhaarFirstName8: "", AadhaarFirstName9: "", AadhaarFirstName10: "",
         AadhaarFirstName11 : "", AadhaarFirstName12: "", AadhaarFirstName13: "", AadhaarFirstName14: "", AadhaarFirstName15: "",
         AadhaarFirstName16 : "", AadhaarFirstName17: "", AadhaarFirstName18: "", AadhaarFirstName19: "", AadhaarFirstName20: "",
         AadhaarFirstName21 : "", AadhaarFirstName22: "", AadhaarFirstName23: "", AadhaarFirstName24: "", AadhaarFirstName25: "",
         AadhaarFirstName: "",
         AadhaarLastName1 : "", AadhaarLastName2: "", AadhaarLastName3: "", AadhaarLastName4: "", AadhaarLastName5: "",
         AadhaarLastName6 : "", AadhaarLastName7: "", AadhaarLastName8: "", AadhaarLastName9: "", AadhaarLastName10: "",
         AadhaarLastName11 : "", AadhaarLastName12: "", AadhaarLastName13: "", AadhaarLastName14: "", AadhaarLastName15: "",
         AadhaarLastName16 : "", AadhaarLastName17: "", AadhaarLastName18: "", AadhaarLastName19: "", AadhaarLastName20: "",
         AadhaarLastName21 : "", AadhaarLastName22: "", AadhaarLastName23: "", AadhaarLastName24: "", AadhaarLastName25: "",
         AadhaarLastName: "",
         AadhaarMiddleName1 : "", AadhaarMiddleName2: "", AadhaarMiddleName3: "", AadhaarMiddleName4: "", AadhaarMiddleName5: "",
         AadhaarMiddleName6 : "", AadhaarMiddleName7: "", AadhaarMiddleName8: "", AadhaarMiddleName9: "", AadhaarMiddleName10: "",
         AadhaarMiddleName11 : "", AadhaarMiddleName12: "", AadhaarMiddleName13: "", AadhaarMiddleName14: "", AadhaarMiddleName15: "",
         AadhaarMiddleName16 : "", AadhaarMiddleName17: "", AadhaarMiddleName18: "", AadhaarMiddleName19: "", AadhaarMiddleName20: "",
         AadhaarMiddleName21 : "", AadhaarMiddleName22: "", AadhaarMiddleName23: "", AadhaarMiddleName24: "", AadhaarMiddleName25: "",
         AadhaarMiddleName: "",
         AadhaarNumber1 : "", AadhaarNumber2: "", AadhaarNumber3: "", AadhaarNumber4: "", AadhaarNumber5: "",
         AadhaarNumber6 : "", AadhaarNumber7: "", AadhaarNumber8: "", AadhaarNumber9: "", AadhaarNumber10: "",
         AadhaarNumber11 : "", AadhaarNumber12: "",
         AadhaarNumber: "",
         EnrolmentId1 : "", EnrolmentId2: "", EnrolmentId3: "", EnrolmentId4: "", EnrolmentId5: "",
         EnrolmentId6 : "", EnrolmentId7: "", EnrolmentId8: "", EnrolmentId9: "", EnrolmentId10: "",
         EnrolmentId11 : "", EnrolmentId12: "", EnrolmentId13: "", EnrolmentId14: "", EnrolmentId15: "",
         EnrolmentId16 : "", EnrolmentId17: "", EnrolmentId18: "", EnrolmentId19: "", EnrolmentId20: "",
         EnrolmentId21 : "", EnrolmentId22: "", EnrolmentId23: "", EnrolmentId24: "", EnrolmentId25: "",
         EnrolmentId26 : "", EnrolmentId27: "", EnrolmentId28: "",
         EnrolmentId : "",
         RegistrationNumber1 : "", RegistrationNumber2: "", RegistrationNumber3: "", RegistrationNumber4: "", RegistrationNumber5: "",
         RegistrationNumber6 : "", RegistrationNumber7: "", RegistrationNumber8: "", RegistrationNumber9: "", RegistrationNumber10: "",
         RegistrationNumber11 : "", RegistrationNumber12: "", RegistrationNumber13: "", RegistrationNumber14: "", RegistrationNumber15: "",
         RegistrationNumber16 : "", RegistrationNumber17: "", RegistrationNumber18: "", RegistrationNumber19: "", RegistrationNumber20: "",
         RegistrationNumber21 : "", RegistrationNumber22: "", RegistrationNumber23: "", RegistrationNumber24: "", RegistrationNumber25: "",
         RegistrationNumber26 : "", RegistrationNumber27: "", RegistrationNumber28: "", RegistrationNumber29: "", RegistrationNumber30: "",
         RegistrationNumber: "", 
         ResidenceState: "",
         ResidencePincode1 : "", ResidencePincode2: "", ResidencePincode3: "", ResidencePincode4: "", ResidencePincode5: "",
         ResidencePincode6 : "", ResidencePincode7: "",
         ResidencePincode: "",
         ResidenceCountry: "",
         OfficeState: "",
         OfficePincode1 : "", OfficePincode2: "", OfficePincode3: "", OfficePincode4: "", OfficePincode5: "",
         OfficePincode6 : "", OfficePincode7: "",
         OfficePincode: "",
         OfficeCountry: "",
         RAState: "",
         RAPincode1 : "", RAPincode2: "", RAPincode3: "", RAPincode4: "", RAPincode5: "",
         RAPincode6 : "", RAPincode7: "",
         RAPincode: "",
         CountryCode1 : "", CountryCode2: "", CountryCode3: "",
         CountryCode: "",
         StdCode1 : "", StdCode2: "", StdCode3: "", StdCode4: "", StdCode5: "",
         StdCode6 : "", StdCode7: "",
         StdCode: "",
         PhoneNumber1 : "", PhoneNumber2: "", PhoneNumber3: "", PhoneNumber4: "", PhoneNumber5: "",
         PhoneNumber6 : "", PhoneNumber7: "", PhoneNumber8: "", PhoneNumber9: "", PhoneNumber10: "",
         PhoneNumber11 : "", PhoneNumber12: "", PhoneNumber13: "",
         PhoneNumber: "",
         Day1 : "", Day2: "",
         Day: "",
         Month1 : "", Month2: "",
         Month: "",
         Year1 : "", Year2: "", Year3: "", Year4: "",
         Year: "",
         POI: "",
         POA: "",
         POB: "",
         Applicant: "",
         Capacity: "",
         Email: "",
         BusinessCode1: "",
         BusinessCode2: "",
         BusinessCode: "",
         Salary: "",
         CapitalGains: "",
         IncomeBusiness: "",
         IncomeOtherSource: "",
         IncomeFromHouse: "",
         NoIncome: "",
         phonenumber:"",
         otpnumber:"", 
         dataid: "1",

      },
      
      checkarray:["NameTitleOne",'OtherName','NameTitleTwo','Gender','ParentName','Communication','Status','Salary','CapitalGains','IncomeBusiness','IncomeOtherSource','IncomeFromHouse','NoIncome','NameTitleThree'],
      show: false,
      check:0,
      otpverify:0,
      secondcheck:0,
      number : {
          phonenumber:"",
      },
      open: false,
   }
  }


  componentWillMount() {
    
    let alldata = JSON.parse(localStorage.getItem('localdata'));
    let allerror = JSON.parse(localStorage.getItem('localerror'));
    let otp =  JSON.parse(localStorage.getItem('otp'));
 
    this.state.OtpInput = otp;
    let val = this.state.OtpInput;
    this.setState({val})
    
    if (alldata == null) {
       localStorage.setItem('localdata', JSON.stringify({}));
    }
    else
    {
       if(alldata !== {}){
          if(alldata.dataid === "1"){
                 this.setState({ data: alldata }); 
          }
       }  
    }
 
    if (allerror == null) {
      localStorage.setItem('localerror', JSON.stringify({}));
     }
     else
     {
       if(allerror !== {}){
         if(allerror.errorid === "1"){
               this.setState({ errors: allerror });
                
         }
       }  
     }

     
 
     
  }

   
  handleSave = () => {
     
    axios.post('http://159.89.165.174:5000/saveData',this.state.data)
     .then(function (response) 
     {
        console.log(response);
     })
    .catch(function (error) {
        console.log(error);
    });
   }
 
   handleInputdata = (otp, name, id) => {
   
     if (id == "1") {
       let textPattern = /[!@#$%^&*(),.?":{}|<>]/
       let checkdata = textPattern.test(otp);
  
       if (checkdata != "true") {
         const datainput = this.state.data;
         datainput[name] = otp;
         this.setState({ datainput })
  
         localStorage.setItem('localdata', JSON.stringify(this.state.data));
         localStorage.setItem('localerror', JSON.stringify(this.state.errors));
       }
    }
   }

   handleOtpInput = (value) => {
      
     this.state.OtpInput = value;
     let val = this.state.OtpInput;
    this.setState({val})

    localStorage.setItem('otp', JSON.stringify(this.state.OtpInput));
    console.log(value)
    console.log(val)
    console.log(this.state.OtpInput)

   }

   onOpenModal = () => {
 

    if(this.state.data.NameTitleOne === "")
    {

        let errors1 = this.state.errors;
        let name4= "NameTitleOne";
        this.setState(errors1);
        errors1[name4] = "*Please select title as applicable";
        $( "#1" ).focus();
       
    }
    else if(this.state.data.LastName === "")
    { 

        let errors1 = this.state.errors;
        let name4= "LastName";
        this.setState(errors1);
        errors1[name4] = "*Fields are required";
       $( "#LastName1" ).focus();
       this.HighlightLastNameError();
    }
    else if( this.state.data.FirstName === "")
    { 

        let errors1 = this.state.errors;
        let name4= "FirstName";
        this.setState(errors1);
        errors1[name4] = "*Fields are required";

       $( "#FirstName1" ).focus();
       this.HighlightFirstNameError();
    }
    else if(this.state.data.OtherName === "")
    {

        let errors1 = this.state.errors;
        let name4= "OtherName";
        this.setState(errors1);
        errors1[name4] = "*Please tick as applicable";
 
        $( "#OtherName1" ).focus();
        
    }
    else if(this.state.data.NameTitleTwo === "" && this.state.data.OtherName === "5")
    {
        let errors1 = this.state.errors;
        let name4= "NameTitleTwo";
        this.setState(errors1);
        errors1[name4] = "*Please select title as applicable";
        $( "#7" ).focus();
    }
    else if(this.state.data.OtherName === "5" &&  this.state.data.OtherLastName === "" )
    {

        let errors1 = this.state.errors;
        let name4= "OtherLastName";
        this.setState(errors1);
        errors1[name4] = "*Fields are required";

        $( "#OtherLastName1" ).focus();
        this.HighlightOtherLastNameError();
    }
    else if(this.state.data.OtherName === "5" && this.state.data.OtherFirstName === "" )
    {
        let errors1 = this.state.errors;
        let name4= "OtherFirstName";
        this.setState(errors1);
        errors1[name4] = "*Fields are required";
 
        $( "#OtherFirstName1" ).focus();
        this.HighlightOtherFirstNameError();
    }
    else if(this.state.data.Gender === "")
    {
        let errors1 = this.state.errors;
        let name4= "Gender";
        this.setState(errors1);
        errors1[name4] = "*Please tick as applicable";

        $( "#11" ).focus();
    }
    else if(this.state.data.Day === "" )
    {
        let errors1 = this.state.errors;
        let name4= "Day";
        this.setState(errors1);
        errors1[name4] = "*Fields are required";
 
        $( "#Day1" ).focus();
        this.HighlightDayError();
    }
    else if(this.state.data.Month === "")
    {  
        let errors1 = this.state.errors;
        let name4= "Month";
        this.setState(errors1);
        errors1[name4] = "*Fields are required";

        $( "#Month1" ).focus();
        this.HighlightMonthError();
    }
    else if(this.state.data.Year === "")
    {

        let errors1 = this.state.errors;
        let name4= "Year";
        this.setState(errors1);
        errors1[name4] = "*Fields are required";

        $( "#Year1" ).focus();
        this.HighlightYearError();
    }
    else if(this.state.data.FatherLastName === "")
    {
        let errors1 = this.state.errors;
        let name4= "FatherLastName";
        this.setState(errors1);
        errors1[name4] = "*Fields are required";
 
        $( "#FatherLastName1" ).focus();
        this.HighlightFatherLastNameError();
    }
    else if(this.state.data.FatherFirstName === "")
    {
        let errors1 = this.state.errors;
        let name4= "FatherFirstName";
        this.setState(errors1);
        errors1[name4] = "*Fields are required";
 
        $( "#FatherFirstName1" ).focus();
        this.HighlightFatherFirstNameError();
    }
    else if(this.state.data.ParentName === "")
    {
        let errors1 = this.state.errors;
        let name4= "ParentName";
        this.setState(errors1);
        errors1[name4] = "*Please tick as applicable";
 
        $( "#14" ).focus();
    }
    else if( this.state.data.ParentName === "15" && this.state.data.MotherLastName === "")
    { 
        let errors1 = this.state.errors;
        let name4= "MotherLastName";
        this.setState(errors1);
        errors1[name4] = "*Please enter Mother's name";
 
        $( "#MotherLastName1" ).focus();
        this.HighlightMotherLastNameError();
    }
    else if(this.state.data.ParentName === "15 " && this.state.data.MotherFirstName === "")
    {
        let errors1 = this.state.errors;
        let name4= "MotherFirstName";
        this.setState(errors1);
        errors1[name4] = "*Please enter Mother's name";
 
        $( "#MotherFirstName1" ).focus();
        this.HighlightMotherFirstNameError();
    }
    else if(this.state.data.ResidenceFlat === "")
    {  
        let errors1 = this.state.errors;
        let name4= "ResidenceFlat";
        this.setState(errors1);
        errors1[name4] = "*Fields are required";
 
        $( "#ResidenceFlat1" ).focus();
        this.HighlightResidenceFlatError();
    }
    else if(this.state.data.ResidencePremises === "")
    {  
        let errors1 = this.state.errors;
        let name4= "ResidencePremises";
        this.setState(errors1);
        errors1[name4] = "*Fields are required";
 
        $( "#ResidencePremises1" ).focus();
        this.HighlightResidencePremisesError();
    }
    else if(this.state.data.ResidenceRoad === "")
    {  
        let errors1 = this.state.errors;
        let name4= "ResidenceRoad";
        this.setState(errors1);
        errors1[name4] = "*Fields are required";
 
        $( "#ResidenceRoad1" ).focus();
        this.HighlightResidenceRoadError();
    }
    else if(this.state.data.ResidenceArea === "")
    {  
        let errors1 = this.state.errors;
        let name4= "ResidenceArea";
        this.setState(errors1);
        errors1[name4] = "*Fields are required";
 
        $( "#ResidenceArea1" ).focus();
        this.HighlightResidenceAreaError();
    }
    else if(this.state.data.ResidenceTown === "")
    {  
        let errors1 = this.state.errors;
        let name4= "ResidenceTown";
        this.setState(errors1);
        errors1[name4] = "*Fields are required";
 
        $( "#ResidenceTown1" ).focus();
        this.HighlightResidenceTownError();
    }
    else if(this.state.data.ResidenceState === "")
    {  
        let errors1 = this.state.errors;
        let name4= "ResidenceState";
        this.setState(errors1);
        errors1[name4] = "*Fields are required";
        $('#ResidenceState').css('border-color', "red")
        $( "#ResidenceState1" ).focus();
    }
    else if(this.state.data.ResidencePincode === "")
    {  
        let errors1 = this.state.errors;
        let name4= "ResidencePincode";
        this.setState(errors1);
        errors1[name4] = "*Fields are required";
 
        $( "#ResidencePincode1" ).focus();
        this.HighlightResidencePincodeError();
    }
    else if(this.state.data.ResidenceCountry === "")
    {  
        let errors1 = this.state.errors;
        let name4= "ResidenceCountry";
        this.setState(errors1);
        errors1[name4] = "*Fields are required";
        $('#ResidenceCountry').css('border-color', "red")
        $( "#ResidenceCountry1" ).focus();
    }
    else if(this.state.data.Communication === "")
    {
        let errors1 = this.state.errors;
        let name4= "Communication";
        this.setState(errors1);
        errors1[name4] = "*Please tick as applicable";

        $( "#16" ).focus();
    }
    else if(this.state.data.OfficeName === ""  && this.state.data.Communication === "Office")
    {
        let errors1 = this.state.errors;
        let name4= "OfficeName";
        this.setState(errors1);
        errors1[name4] = "*Fields are required";
 
        $( "#OfficeName1" ).focus();
        this.HighlightOfficeNameError();
    }
    else if(this.state.data.OfficeFlat === "" && this.state.data.Communication === "Office")
    {
        let errors1 = this.state.errors;
        let name4= "OfficeFlat";
        this.setState(errors1);
        errors1[name4] = "*Fields are required";
 
        $( "#OfficeFlat1" ).focus();
        this.HighlightOfficeFlatError();
    }
    else if(this.state.data.OfficePremises === "" && this.state.data.Communication === "Office")
    {
        let errors1 = this.state.errors;
        let name4= "OfficePremises";
        this.setState(errors1);
        errors1[name4] = "*Fields are required";
 
        $( "#OfficePremises1" ).focus();
        this.HighlightOfficePremisesError();
    }
    else if(this.state.data.OfficeRoad === "" && this.state.data.Communication === "Office")
    {
        let errors1 = this.state.errors;
        let name4= "OfficeRoad";
        this.setState(errors1);
        errors1[name4] = "*Fields are required";
 
        $( "#OfficeRoad1" ).focus();
        this.HighlightOfficeRoadError();
    }
    else if(this.state.data.OfficeArea === "" && this.state.data.Communication === "Office")
    {
        let errors1 = this.state.errors;
        let name4= "OfficeArea";
        this.setState(errors1);
        errors1[name4] = "*Fields are required";
 
        $( "#OfficeArea1" ).focus();
        this.HighlightOfficeAreaError();
    }
    else if(this.state.data.OfficeTown === "" && this.state.data.Communication === "Office")
    {
        let errors1 = this.state.errors;
        let name4= "OfficeTown";
        this.setState(errors1);
        errors1[name4] = "*Fields are required";
 
        $( "#OfficeTown1" ).focus();
        this.HighlightOfficeTownError();
    }
    else if(this.state.data.OfficeState === "" && this.state.data.Communication === "Office")
    {
        let errors1 = this.state.errors;
        let name4= "OfficeState";
        this.setState(errors1);
        errors1[name4] = "*Fields are required";
        $('#OfficeState').css('border-color', "red")
        $( "#OfficeState1" ).focus();
    }
    else if(this.state.data.OfficePincode === "" && this.state.data.Communication === "Office")
    {
        let errors1 = this.state.errors;
        let name4= "OfficePincode";
        this.setState(errors1);
        errors1[name4] = "*Fields are required";

        $( "#OfficePincode1" ).focus();
        this.HighlightOfficePincodeError();
    }
    else if(this.state.data.OfficeCountry === "" && this.state.data.Communication === "Office")
    {
        let errors1 = this.state.errors;
        let name4= "OfficeCountry";
        this.setState(errors1);
        errors1[name4] = "*Fields are required";
        $('#OfficeCountry').css('border-color', "red")
        $( "#OfficeCountry1" ).focus();
    }
    else if(this.state.data.CountryCode === "" )
    {
        let errors1 = this.state.errors;
        let name4= "CountryCode";
        this.setState(errors1);
        errors1[name4] = "*Fields are required";
       
        $( "#CountryCode1" ).focus();
        this.HighlightCountryCodeError();
    }
    else if(this.state.data.StdCode === "" )
    {
        let errors1 = this.state.errors;
        let name4= "StdCode";
        this.setState(errors1);
        errors1[name4] = "*Fields are required";
 
        $( "#StdCode1" ).focus();
        this.HighlightStdCodeError();
    }
    else if(this.state.data.PhoneNumber === "" )
    {
        let errors1 = this.state.errors;
        let name4= "PhoneNumber";
        this.setState(errors1);
        errors1[name4] = "*Fields are required";
 
        $( "#PhoneNumber1" ).focus();
        this.HighlightPhoneNumberError();
    }
    else if(this.state.data.Email === "" )
    {
        let errors1 = this.state.errors;
        let name4= "Email";
        this.setState(errors1);
        errors1[name4] = "*Fields are required";
        $('#Email').css('border-color', "red")
        $( "#Email" ).focus();
    }
    else if(this.state.data.Status === "")
    {
        let errors1 = this.state.errors;
        let name4= "Status";
        this.setState(errors1);
        errors1[name4] = "*Please select status as applicable";
 
        $( "#22" ).focus();
    }
    else if((this.state.data.RegistrationNumber === ""))
    {
        let errors1 = this.state.errors;
        let name4= "RegistrationNumber";
        this.setState(errors1);
        errors1[name4] = "*Registration number is required ";
 
        $( "#RegistrationNumber1" ).focus();
        this.HighlightRegistrationNumberError();
    }
    else if(this.state.data.AadhaarNumber === "" && this.state.data.EnrolmentId === "")
    {
        let errors1 = this.state.errors;
        let name4= "AadhaarNumber";
        this.setState(errors1);
        errors1[name4] = "*Please enter your Aadhaar Number or Enrolment Id";
         
        $( "#AadhaarNumber1" ).focus();
        this.HighlightAadhaarNumberError();
    }
    else if(this.state.data.AadhaarLastName === "" )
    {
        let errors1 = this.state.errors;
        let name4= "AadhaarLastName";
        this.setState(errors1);
        errors1[name4] = "*Fields are required";
 
        $( "#AadhaarLastName1" ).focus();
        this.HighlightAadhaarLastNameError();
    }
    else if(this.state.data.Salary === "" && this.state.data.CapitalGains === "" &&
    this.state.data.IncomeBusiness === "" && this.state.data.IncomeOtherSource === "" &&
    this.state.data.IncomeFromHouse === "" && this.state.data.NoIncome === "")
    {
        let errors1 = this.state.errors;
        let name4= "Income";
        this.setState(errors1);
        errors1[name4] = "*Please select the Source of Income";
 
        $( "#33" ).focus();
    }
    else if(this.state.data.IncomeBusiness !== "" && this.state.data.BusinessCode === "")
    {
        let errors1 = this.state.errors;
        let name4= "BusinessCode1";
        this.setState(errors1);
        errors1[name4] = "*Business / Profession code is required for Income from Business / Profession";
        this.HighlightBusinessCodeError();
        $( "#BusinessCode1" ).focus();
        
    }
    else if(this.state.data.NameTitleThree === "")
    {
        let errors1 = this.state.errors;
        let name4= "NameTitleThree";
        this.setState(errors1);
        errors1[name4] = "*Please select title as applicable";
 
        $( "#36" ).focus();
    }
    else if(this.state.data.RALastName === "" )
    {
        let errors1 = this.state.errors;
        let name4= "RALastName";
        this.setState(errors1);
        errors1[name4] = "*Fields are required";
 
        $( "#RALastName1" ).focus();
        this.HighlightRALastNameError();
    }
    else if(this.state.data.RAFirstName === "")
    {
        let errors1 = this.state.errors;
        let name4= "RAFirstName";
        this.setState(errors1);
        errors1[name4] = "*Fields are required";
 
        $( "#RAFirstName1" ).focus();
        this.HighlightRAFirstNameError();
    }
    else if(this.state.data.RAFlat === "")
    {  
        let errors1 = this.state.errors;
        let name4= "RAFlat";
        this.setState(errors1);
        errors1[name4] = "*Fields are required";
 
        $( "#RAFlat1" ).focus();
        this.HighlightRAFlatError();
    }
    else if(this.state.data.RAPremises === "")
    {  
        let errors1 = this.state.errors;
        let name4= "RAPremises";
        this.setState(errors1);
        errors1[name4] = "*Fields are required";
 
        $( "#RAPremises1" ).focus();
        this.HighlightRAPremisesError();
    }
    else if(this.state.data.RARoad === "")
    {  
        let errors1 = this.state.errors;
        let name4= "RARoad";
        this.setState(errors1);
        errors1[name4] = "*Fields are required";
 
        $( "#RARoad1" ).focus();
        this.HighlightRARoadError();
    } 
    else if(this.state.data.RAArea === "")
    {  
        let errors1 = this.state.errors;
        let name4= "RAArea";
        this.setState(errors1);
        errors1[name4] = "*Fields are required";
 
        $( "#RAArea1" ).focus();
        this.HighlightRAAreaError();
    }
    else if(this.state.data.RATown === "")
    {  
        let errors1 = this.state.errors;
        let name4= "RATown";
        this.setState(errors1);
        errors1[name4] = "*Fields are required";
 
        $( "#RATown1" ).focus();
        this.HighlightRATownError();
    }
    else if(this.state.data.RAState === "")
    {  
        let errors1 = this.state.errors;
        let name4= "RAState";
        this.setState(errors1);
        errors1[name4] = "*Fields are required";
        $('#RAState').css('border-color', "red")
        $( "#RAState" ).focus();
    }
    else if(this.state.data.RAPincode === "")
    {  
        let errors1 = this.state.errors;
        let name4= "RAPincode";
        this.setState(errors1);
        errors1[name4] = "*Fields are required";
 
        $( "#RAPincode1" ).focus();
        this.HighlightRAPincodeError();
    }
    else if(this.state.data.POI === "")
    {  
        let errors1 = this.state.errors;
        let name4= "POI";
        this.setState(errors1);
        errors1[name4] = "*Fields are required";
        $('#POI').css('border-color', "red")
        $( "#POI" ).focus();
    }
    else if(this.state.data.POA === "")
    {  
        let errors1 = this.state.errors;
        let name4= "POA";
        this.setState(errors1);
        errors1[name4] = "*Fields are required";
        $('#POA').css('border-color', "red")
        $( "#POA" ).focus();
    }
    else if(this.state.data.POB === "")
    {  
        let errors1 = this.state.errors;
        let name4= "POB";
        this.setState(errors1);
        errors1[name4] = "*Fields are required";
        $('#POB').css('border-color', "red")
        $( "#POB" ).focus();
    }
    else if(this.state.data.Applicant === "")
    {  
        let errors1 = this.state.errors;
        let name4= "Applicant";
        this.setState(errors1);
        errors1[name4] = "*Fields are required";
        $('#Applicant').css('border-color', "red")
        $( "#Applicant" ).focus();
    }
    else if(this.state.data.Capacity === "")
    {
        let errors1 = this.state.errors;
        let name4= "Capacity";
        this.setState(errors1);
        errors1[name4] = "*Fields are required";
        $('#Capacity').css('border-color', "red")
        $( "#Capacity" ).focus();
    }
    else if(this.state.errors.FirstName === "" && this.state.errors.LastName === "" 
   && this.state.errors.MiddleName === "" && this.state.errors.AbbreviationOne === "" && 
   this.state.errors.AbbreviationTwo === "" && this.state.errors.FatherFirstName === "" &&
   this.state.errors.FatherLastName === "" && this.state.errors.FatherMiddleName === "" && 
   this.state.errors.MotherFirstName === "" && this.state.errors.MotherLastName === "" && 
   this.state.errors.MotherMiddleName === "" && this.state.errors.OtherFirstName === "" &&
   this.state.errors.OtherLastName === "" && this.state.errors.OtherMiddleName === "" && 
   this.state.errors.Day === "" && this.state.errors.Month === "" && 
   this.state.errors.Year === "" && this.state.errors.ResidenceFlat === "" &&
   this.state.errors.ResidencePremises === "" && this.state.errors.ResidenceRoad === ""&&
   this.state.errors.ResidenceState === "" && this.state.errors.ResidenceTown === "" && 
   this.state.errors.ResidenceArea === "" && this.state.errors.ResidenceCountry === "" && 
   this.state.errors.ResidencePincode === "" && this.state.errors.OfficeName === "" &&
   this.state.errors.OfficeFlat === "" && this.state.errors.OfficePremises === "" && 
   this.state.errors.OfficeRoad === "" && this.state.errors.OfficeArea === "" && 
   this.state.errors.OfficeTown === "" && this.state.errors.OfficeState === "" &&
   this.state.errors.OfficePincode === "" && this.state.errors.OfficeCountry === "" &&
   this.state.errors.CountryCode === "" && this.state.errors.StdCode === "" && 
   this.state.errors.PhoneNumber === "" && this.state.errors.Email === "" &&
   this.state.errors.RegistrationNumber === "" && this.state.errors.AadhaarNumber === "" && 
   this.state.errors.EnrolmentId === "" && this.state.errors.AadhaarFirstName === "" &&
   this.state.errors.AadhaarLastName === "" && this.state.errors.AadhaarMiddleName === "" &&
   this.state.errors.BusinessCode === "" && this.state.errors.RAFirstName === "" && 
   this.state.errors.RALastName === "" && this.state.errors.RAMiddleName === "" && 
   this.state.errors.RAFlat === "" && this.state.errors.RAPremises === "" && 
   this.state.errors.RARoad === "" && this.state.errors.RAArea === "" &&  
   this.state.errors.RATown === "" && this.state.errors.RAState === "" && 
   this.state.errors.RAPincode === "" && this.state.errors.POI === "" && 
   this.state.errors.POA === "" && this.state.errors.POB === "" && 
   this.state.errors.Applicant === "" && this.state.errors.Capacity === "")
    {
      this.setState({ open: true });

     let vall = true;
     this.setState({isIndicatorEnabled : vall});
     console.log(this.state.isIndicatorEnabled)
  
    }
 
    localStorage.setItem('localerror', JSON.stringify(this.state.errors));
  };

  onOpenModal1 = () => {
    this.setState({ open: true });
  }
 
 onCloseModal = () => {
   this.setState({isIndicatorEnabled : false})
   this.setState({ open: false });
   this.setState({check:0});
   this.setState({secondcheck:0})

//    this.handleResetall();
 };  

  componentDidMount() {
    let alldata = JSON.parse(localStorage.getItem('localdata'));
    console.log("log",alldata)
      if(alldata != null){
        for(let i=0; i<=14 ;i++){
            let valdata = this.state.checkarray[i];
           let value = alldata[`${valdata}`];
           if(value != ""){
               $(`#${value}`).prop('checked', true);
           }
        }
      }
  
   $("input:checkbox").click(function () {
     if ($(this).is(":checked")) {
       var group = "input:checkbox[name='" + $(this).attr("name") + "']";
       $(group).prop("checked", false);
       $(this).prop("checked", true);
     }
     else 
     {
        $(this).prop("checked", false);
     }
   });

   $('#5').change(function(){
    if(this.checked) {
       $('#OtherNameDiv').show();
    }
   
   });

   $('#6').change(function(){
      if(this.checked) {
        $('#OtherNameDiv').hide();
      }
     });
   
     if(this.state.errors.FirstName === "" && this.state.errors.LastName === "" 
      && this.state.errors.MiddleName === "" && this.state.errors.AbbreviationOne === "" && 
      this.state.errors.AbbreviationTwo === "" && this.state.errors.FatherFirstName === "" &&
      this.state.errors.FatherLastName === "" && this.state.errors.FatherMiddleName === "" && 
      this.state.errors.MotherFirstName === "" && this.state.errors.MotherLastName === "" && 
      this.state.errors.MotherMiddleName === "" && this.state.errors.OtherFirstName === "" &&
      this.state.errors.OtherLastName === "" && this.state.errors.OtherMiddleName === "" && 
      this.state.errors.Day === "" && this.state.errors.Month === "" && 
      this.state.errors.Year === "" && this.state.errors.ResidenceFlat === "" &&
      this.state.errors.ResidencePremises === "" && this.state.errors.ResidenceRoad === ""&&
      this.state.errors.ResidenceState === "" && this.state.errors.ResidenceTown === "" && 
      this.state.errors.ResidenceArea === "" && this.state.errors.ResidenceCountry === "" && 
      this.state.errors.ResidencePincode === "" && this.state.errors.OfficeName === "" &&
      this.state.errors.OfficeFlat === "" && this.state.errors.OfficePremises === "" && 
      this.state.errors.OfficeRoad === "" && this.state.errors.OfficeArea === "" && 
      this.state.errors.OfficeTown === "" && this.state.errors.OfficeState === "" &&
      this.state.errors.OfficePincode === "" && this.state.errors.OfficeCountry === "" &&
      this.state.errors.CountryCode === "" && this.state.errors.StdCode === "" && 
      this.state.errors.PhoneNumber === "" && this.state.errors.Email === "" &&
      this.state.errors.RegistrationNumber === "" && this.state.errors.AadhaarNumber === "" && 
      this.state.errors.EnrolmentId === "" && this.state.errors.AadhaarFirstName === "" &&
      this.state.errors.AadhaarLastName === "" && this.state.errors.AadhaarMiddleName === "" &&
      this.state.errors.BusinessCode === "" && this.state.errors.RAFirstName === "" && 
      this.state.errors.RALastName === "" && this.state.errors.RAMiddleName === "" && 
      this.state.errors.RAFlat === "" && this.state.errors.RAPremises === "" && 
      this.state.errors.RARoad === "" &&  this.state.errors.RAArea === "" &&  
      this.state.errors.RATown === "" && this.state.errors.RAState === "" && 
      this.state.errors.RAPincode === "" && this.state.errors.POI === "" && 
      this.state.errors.POA === "" && this.state.errors.POB === "" && 
      this.state.errors.Applicant === "" && this.state.errors.Capacity === "")
     {
         let val = this.state.isModalEnabled;
         val = true;
         this.setState({val});
     }

     if((this.state.data.NameTitleTwo !== "") || (this.state.data.OtherFirstName !== "") || 
     (this.state.data.OtherLastName !== "") || (this.state.data.OtherMiddleName !== "") || 
     (this.state.errors.NameTitleTwo !== "") || (this.state.errors.OtherFirstName !== "") || 
     (this.state.errors.OtherMiddleName !== "") )
     {
         console.log("other name div show")
        $('#OtherNameDiv').show();   
     }
     if(this.state.errors.Capacity !== "")
     {
        $('#Capacity').css('border-color', "red")
        $( "#Capacity" ).focus();
     }

  if(this.state.errors.Applicant !== "")
     {
        $('#Applicant').css('border-color', "red")
        $( "#Applicant" ).focus();
     }

if(this.state.errors.POB !== "")
     {
        $('#POB').css('border-color', "red")
        $( "#POB" ).focus();
     }

if(this.state.errors.POA !== "")
     {
        $('#POA').css('border-color', "red")
        $( "#POA" ).focus();
     }

 if(this.state.errors.POI !== "")
     {
        $('#POI').css('border-color', "red")
        $( "#POI" ).focus();
     }

 if(this.state.errors.RAPincode !== "")
     {
        $( "#RAPincode1" ).focus();
        this.HighlightRAPincodeError();
     }
     

 if(this.state.errors.RAState !== "")
     {
        $('#RAState').css('border-color', "red")
        $( "#RAState" ).focus();
     }
   
     
if(this.state.errors.RATown !== "")
{
   $( "#RATown1" ).focus();
   this.HighlightRATownError();
}


if(this.state.errors.RAArea !== "")
{
   $( "#RAArea1" ).focus();
   this.HighlightRAAreaError();
}
 

if(this.state.errors.RARoad !== "")
{
   $( "#RARoad1" ).focus();
   this.HighlightRARoadError();
}


if(this.state.errors.RAPremises !== "")
{
   $( "#RAPremises1" ).focus();
   this.HighlightRAPremisesError();
}

 

if(this.state.errors.RAFlat !== "")
{
   $( "#RAFlat1" ).focus();
   this.HighlightRAFlatError();
}

 
if(this.state.errors.RAMiddleName !== "")
{
   $( "#RAMiddleName1" ).focus();
   this.HighlightRAMiddleNameError();
}

 
if(this.state.errors.RAFirstName !== "")
{
   $( "#RAFirstName1" ).focus();
   this.HighlightRAFirstNameError();
}

if(this.state.errors.RALastName !== "")
{
   $( "#RALastName1" ).focus();
   this.HighlightRALastNameError();
}


if(this.state.errors.BusinessCode !== "")
{
   this.HighlightBusinessCodeError();
   $( "#BusinessCode1" ).focus();
}
 

if(this.state.errors.AadhaarMiddleName !== "")
{
   $( "#AadhaarMiddleName1" ).focus();
   this.HighlightAadhaarMiddleNameError();
}


if(this.state.errors.AadhaarFirstName !== "")
{
   $( "#AadhaarFirstName1" ).focus();
   this.HighlightAadhaarFirstNameError();
}

if(this.state.errors.AadhaarLastName !== "")
{
   $( "#AadhaarLastName1" ).focus();
   this.HighlightAadhaarLastNameError();
}


if(this.state.errors.EnrolmentId !== "")
{
   $( "#EnrolmentId1" ).focus();
   this.HighlightEnrolmentIdError();
}

if(this.state.errors.AadhaarNumber !== "")
{
   $( "#AadhaarNumber1" ).focus();
   this.HighlightAadhaarNumberError();
}


if(this.state.errors.RegistrationNumber !== "")
{
   $( "#RegistrationNumber1" ).focus();
   this.HighlightRegistrationNumberError();
}

if(this.state.errors.Email !== "")
{
   $('#Email').css('border-color', "red")
   $( "#Email" ).focus();
}

if(this.state.errors.PhoneNumber !== "")
{
   $( "#PhoneNumber1" ).focus();
   this.HighlightPhoneNumberError();
}


if(this.state.errors.StdCode !== "")
{
   $( "#StdCode1" ).focus();
   this.HighlightStdCodeError();
}
 

if(this.state.errors.CountryCode !== "")
{
   $( "#CountryCode1" ).focus();
   this.HighlightCountryCodeError();
}

if(this.state.errors.OfficeCountry !== "")
{
   $('#OfficeCountry').css('border-color', "red")
   $( "#OfficeCountry" ).focus();
}
 
if(this.state.errors.OfficePincode !== "")
{
   $( "#OfficePincode1" ).focus();
   this.HighlightOfficePincodeError();
}

if(this.state.errors.OfficeState !== "")
{
   $('#OfficeState').css('border-color', "red")
   $( "#OfficeState" ).focus();
}


if(this.state.errors.OfficeTown !== "")
{
   $( "#OfficeTown1" ).focus();
   this.HighlightOfficeTownError();
}
 
if(this.state.errors.OfficeArea !== "")
{
   $( "#OfficeArea1" ).focus();
   this.HighlightOfficeAreaError();
}

if(this.state.errors.OfficeRoad !== "")
{
   $( "#OfficeRoad1" ).focus();
   this.HighlightOfficeRoadError();
}
 
if(this.state.errors.OfficePremises !== "")
{
   $( "#OfficePremises1" ).focus();
   this.HighlightOfficePremisesError();
}


if(this.state.errors.OfficeFlat !== "")
{
   $( "#OfficeFlat1" ).focus();
   this.HighlightOfficeFlatError();
}


if(this.state.errors.OfficeName !== "")
{
   $( "#OfficeName1" ).focus();
   this.HighlightOfficeNameError();
}

if(this.state.errors.ResidenceCountry !== "")
{
   $('#ResidenceCountry').css('border-color', "red")
   $( "#ResidenceCountry" ).focus();
}
 
if(this.state.errors.ResidencePincode !== "")
{
   $( "#ResidencePincode1" ).focus();
   this.HighlightResidencePincodeError();
}

if(this.state.errors.ResidenceState !== "")
{
   $('#ResidenceState').css('border-color', "red")
   $( "#ResidenceState" ).focus();
}


if(this.state.errors.ResidenceTown !== "")
{
   $( "#ResidenceTown1" ).focus();
   this.HighlightResidenceTownError();
}
 

if(this.state.errors.ResidenceArea !== "")
{
   $( "#ResidenceArea1" ).focus();
   this.HighlightResidenceAreaError();
}

if(this.state.errors.ResidenceRoad !== "")
{
   $( "#ResidenceRoad1" ).focus();
   this.HighlightResidenceRoadError();
}

if(this.state.errors.ResidencePremises !== "")
{
   $( "#ResidencePremises1" ).focus();
   this.HighlightResidencePremisesError();
}

if(this.state.errors.ResidenceFlat !== "")
{
   $( "#ResidenceFlat1" ).focus();
   this.HighlightResidenceFlatError();
}

if(this.state.errors.MotherMiddleName !== "")
{
   $( "#MotherMiddleName1" ).focus();
   this.HighlightMotherMiddleNameError();
}

if(this.state.errors.MotherFirstName !== "")
{
   $( "#MotherFirstName1" ).focus();
   this.HighlightMotherFirstNameError();
}

if(this.state.errors.MotherLastName !== "")
{
   $( "#MotherLastName1" ).focus();
   this.HighlightMotherLastNameError();
}


if(this.state.errors.FatherMiddleName !== "")
{
   $( "#FatherMiddleName1" ).focus();
   this.HighlightFatherMiddleNameError();
}

if(this.state.errors.FatherFirstName !== "")
{
   $( "#FatherFirstName1" ).focus();
   this.HighlightFatherFirstNameError();
}

if(this.state.errors.FatherLastName !== "")
{
   $( "#FatherLastName1" ).focus();
   this.HighlightFatherLastNameError();
}

if(this.state.errors.Year !== "")
{
   $( "#Year1" ).focus();
   this.HighlightYearError();
}

if(this.state.errors.Month !== "")
{
   $( "#Month1" ).focus();
   this.HighlightMonthError();
}
 

if(this.state.errors.Day !== "")
{
   $( "#Day1" ).focus();
   this.HighlightDayError();
}

if(this.state.errors.OtherMiddleName !== "")
{
   $( "#OtherMiddleName1" ).focus();
   this.HighlightOtherMiddleNameError();
}


if(this.state.errors.OtherFirstName !== "")
{
   $( "#OtherFirstName1" ).focus();
   this.HighlightOtherFirstNameError();
}

if(this.state.errors.OtherLastName !== "")
{
   $( "#OtherLastName1" ).focus();
   this.HighlightOtherLastNameError();
}
 

if(this.state.errors.AbbreviationTwo !== "")
{
   $( "#AbbreviationTwo1" ).focus();
   this.HighlightAbbreviationTwoError();
}

if(this.state.errors.AbbreviationOne !== "")
{
   $( "#AbbreviationOne1" ).focus();
   this.HighlightAbbreviationOneError();
}

if(this.state.errors.MiddleName !== "")
{
   $( "#MiddleName1" ).focus();
   this.HighlightMiddleNameError();
}

if(this.state.errors.FirstName !== "")
{
   $( "#FirstName1" ).focus();
   this.HighlightFirstNameError();
}

if(this.state.errors.LastName !== "")
{ 
   $( "#LastName1" ).focus();
   this.HighlightLastNameError();
}
 
    
 }

 handleResetall = () => {
    localStorage.setItem('localdata', JSON.stringify({}));
    localStorage.setItem('localerror', JSON.stringify({}));
    // this.setState({data:{}})
    console.log("data",this.state.data)
}

  handleReset = () => {
        localStorage.setItem('localdata', JSON.stringify({}));
        localStorage.setItem('localerror', JSON.stringify({}));
        console.log("data",this.state.data)
  }

  sendmsg = () =>{
    let otpcheck ="" ;
   axios.get('http://159.89.165.174:5000/sendmsg')
       .then(async (response) => {
           this.setState({otpverify:response.data})
           otpcheck = response.data;
           console.log("otp checcking",otpcheck)
           console.log("otp checck", otpcheck)
           console.log("optnumber check", this.state.data.otpnumber)
           if(this.state.otpverify == this.state.data.otpnumber)
           {
             this.setState({secondcheck:1});
             alert("Valid")
           }
           else{
             alert("Please verifyotp again");
           }
       })
       .catch(function (error) {
           console.log(error);
       });
     
     }
   
   sendno = ( )=> {
     this.setState({check:1});
     this.state.number.phonenumber = this.state.data.phonenumber;
     const dataa =  this.state.number.phonenumber;
     this.setState({dataa})
     console.log("vvv",this.state.number)
     axios.post('http://159.89.165.174:5000/sendnumber', 
     this.state.number
     )
         .then(function (response) {
             console.log("hhh")
             console.log(response);
         })
         .catch(function (error) {
             console.log(error);
         });
   
   }
   
   getdata =() =>{
       axios.get('http://159.89.165.174:5000/viewData')
     .then((response) => {
         console.log("testing" , response.data)
   
     })
     .catch(function (error) {
         console.log(error);
     });
   }
   


  render() {

    const { open } = this.state;
    return (


        <div className="fullcontent">
           <div className="nav">
               <div className="navbar">
                   <label className="navtitle">Panform</label>
                   <button  className="button button3 navbutton"  onClick={this.onOpenModal}>Download </button>
                   <a href="/panform" className="button1 button3 navbutton resetbutton"  onClick={this.handleResetall}>Reset </a>

               </div>
               <Modal open={open} onClose={this.onCloseModal} center>
                   <br /> 
                   <div className="modalhead container">
                       <label>Enter your mobile number:</label><br />
                       <div className="mobilenumber">

                           <OtpInput
                               className = ""
                               id = "phonenumber"
                               numValue={this.state.data.phonenumber}
                               numInputs={10}
                               onChange={otp => this.handleInputdata(otp,"phonenumber","1")}
                            />

                       </div>
                       <span className="ErrorMsg">{this.state.errors.phonenumber}</span>
                       <br />
                       <button onClick={this.sendno}>Send OTP</button><br /><br />
                       {this.state.check === 1 ?
                       <div>
                           <div className="otpnumber">
                              <OtpInput
                                  className = ""
                                  value={this.state.data.otpnumber}
                                  onChange={otp => this.handleInputdata(otp,"otpnumber","1")}
                                  numInputs={6}
                               />
                          </div>
                          <br />
                          <button onClick={this.sendmsg}>Verify OTP</button><br /><br />
                          {this.state.secondcheck === 1 ?
                          <div>
                               <button onClick={this.savepdf}>Save & Download</button>

                          </div>
                           : 
                           ""
                           }
                        </div> 
                        :
                        "" 
                        }
                   </div>

               </Modal>

           </div> <br/>


        <div id = "Form1">    
            <div className="Form1" ><br />
                <div className = "box"> 
                    
                    <Header/>

                    <div className = "content">
                       
                        <FirstComponent/>
                        <SecondComponent/>
                        <ThirdComponent/>
                        <FourthComponent/>
                        <FifthComponent/>
                        <SixthComponent/>
                        <SeventhComponent/>
                    </div>
                    <br /><br />

                </div>
                <br />

            </div>
            <br /><br />

            <div className="Form2">
            <br />
               <div className="box2">
                    <div className="content2">
                        
                        <EigthComponent/>
                        <NinthComponent/>

                    </div> 
                </div>

            </div>

        </div>

        </div>

        
    );
  }
}

export default Form;



