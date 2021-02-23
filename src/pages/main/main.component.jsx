import React, { Component, Fragment } from 'react';
import './main.styles.scss';

import Header from '../../components/header/header.component';
import Footer from '../../components/footer/footer.component';
import Steps from '../../components/steps/steps.component';

import firebase from "firebase/app";
import "firebase/analytics";
import 'firebase/storage';

import { v4 as uuidv4 } from 'uuid';
import { init, send } from 'emailjs-com';

init("user_Q0TdHoiocAz850aPWUZ8r");

var firebaseConfig = {
  apiKey: "AIzaSyCEYDxsPGkKkh6rSFhqDMOUYM4LigAibR8",
  authDomain: "magnet-boards.firebaseapp.com",
  projectId: "magnet-boards",
  storageBucket: "magnet-boards.appspot.com",
  messagingSenderId: "566099567381",
  appId: "1:566099567381:web:3151c36f06bcf057bcff1c",
  measurementId: "G-KNCLRBF3DR"
};

const SERVICE_ID = "service_qir146q";
const TEMPLATE_ID = "template_oq96krr";
const USER_ID = "user_Q0TdHoiocAz850aPWUZ8r";

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
class MainPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentStep: 0,
      picture: null,
      type: null,
      red: 1,
      black: 1,
      eraser: 1,
      contactName: '',
      contactSocialType: '',
      contactValue: '',
      price: 0,
      isFilled: true,
    }
  }

  handleStep = (newStep) => {
    window.scrollTo(0, 0);
    this.setState({
      currentStep: newStep,
      isFilled: false,
    });
  }

  handleType = (newType) => {
    this.setState({
      type: newType,
      isFilled: true,
    })
  }

  handlePicture = (newBackground) => {
    this.setState({
      picture: newBackground,
      isFilled: true,
    })
  }

  handleStuffOrContact = (name, value) => {
    this.setState({
      [name]: value,
      isFilled: true,
    })
  }

  uploadCustomerImage = async (base64data) => {
    const fileName = uuidv4();
    const ref = firebase.storage().ref().child(`${fileName}.png`);
    var message = base64data;

    await ref.putString(message, 'data_url').then(async (snapshot) => {
      const { bucket, fullPath } = snapshot.metadata;
      const imageUrl = `https://firebasestorage.googleapis.com/v0/b/${bucket}/o/${fullPath}?alt=media`;

      await imageUrl;
    });
  }

  handleSubmit = () => {
    const { contactName, contactSocialType, contactValue, type, picture, red, black, eraser } = this.state;
    let image = picture.image;

    if (picture.id === 0) {
      image = this.uploadCustomerImage(picture.image);
    }

    let emailData = {
      contactName,
      contactSocialType,
      contactValue,
      grid: type.image,
      image,
      red,
      black,
      eraser,
      price: ''
    }

    send(SERVICE_ID, TEMPLATE_ID, emailData, USER_ID);
  }

  render() {
    const { currentStep } = this.state;

    return (
      <Fragment>
        <Header />

        <main className="main">
          <Steps
            currentStep={currentStep}
            handleType={this.handleType}
            handlePicture={this.handlePicture}
            handleStuffOrContact={this.handleStuffOrContact}
            data={this.state}
          />
        </main>

        <Footer
          currentStep={currentStep}
          handleStep={this.handleStep}
          handleSubmit={this.handleSubmit}
          data={this.state}
        />
      </Fragment>
    );
  }
}

export default MainPage;