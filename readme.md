<div id="top"></div>
<!--
*** Thanks for checking out the Best-README-Template. If you have a suggestion
*** that would make this better, please fork the repo and create a pull request
*** or simply open an issue with the tag "enhancement".
*** Don't forget to give the project a star!
*** Thanks again! Now go create something AMAZING! :D
-->

<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->

<!-- PROJECT LOGO -->
<br />
<div align="center">
<h3 align="center">Crown Clothing E-commerce</h3>

  <p align="center">
    E-commerce site built on React, React Router, React Context, and Redux with log in authentication from Firebase and payment system with Stripe.
    <br />
    <a href="https://github.com/sitthiph/crwn-clothing/tree/main/src"><strong>Explore the Repo »</strong></a>
    <br />
    <br />
    <a href="https://62d44d9b81fa5c0660b8a7ee--remarkable-dodol-02cd2b.netlify.app/">View Demo via Netlify</a>
  </p>
</div>

<!-- ABOUT THE PROJECT -->

## About The Project

[![Crown Clothing Homepage][homepage-src]](https://62d44d9b81fa5c0660b8a7ee--remarkable-dodol-02cd2b.netlify.app/)

This application (Crown Clothing) was built using React (Custom Hooks, Context), Redux, Stripe, Firebase & Styled Components. I have built Firebase firestore handles all the data and that data is retrieved using a custom hook; authentication is used on all pages, which is handled by Firebase as well. User session is also saved via localStorage, user can leave the site, come back, and still be logged in.

### Homepage
[![Crown Clothing Homepage][homepage-src]](https://62d44d9b81fa5c0660b8a7ee--remarkable-dodol-02cd2b.netlify.app/)
### Sign-in and Sign-up Page
[![Crown Clothing Homepage][sign-in-src]](https://62d44d9b81fa5c0660b8a7ee--remarkable-dodol-02cd2b.netlify.app/)
### Shop Page
[![Crown Clothing Homepage][shop-page]](https://62d44d9b81fa5c0660b8a7ee--remarkable-dodol-02cd2b.netlify.app/)
### Checkout Page.
[![Crown Clothing Homepage][checkout-page]](https://62d44d9b81fa5c0660b8a7ee--remarkable-dodol-02cd2b.netlify.app/)

<p align="right">(<a href="#top">back to top</a>)</p>

### Built With

- [React.js](https://reactjs.org/)
- [React Router](https://reactrouter.com/)
- [Styled Component](https://styled-components.com/)
- [Redux](https://redux.js.org/)
- [Firebase](https://firebase.google.com/)
- [Stripe](https://stripe.com/)

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- GETTING STARTED -->

## Getting Started

Pretty simple and strightfoward.

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/sitthiph/crwn-clothing.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
3. Enter your Firebase web app API in `firebase.prod.js`

```js
const firebaseConfig = {
  apiKey: "",
  authDomain: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: "",
};
```

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- ACKNOWLEDGMENTS -->

## Acknowledgments

- [Andrei Neagoie & Yihua Zhang](https://zerotomastery.io/) - Thank you for creating React course.

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[contributors-shield]: https://img.shields.io/github/contributors/github_username/repo_name.svg?style=for-the-badge
[contributors-url]: https://github.com/github_username/repo_name/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/github_username/repo_name.svg?style=for-the-badge
[forks-url]: https://github.com/github_username/repo_name/network/members
[stars-shield]: https://img.shields.io/github/stars/github_username/repo_name.svg?style=for-the-badge
[stars-url]: https://github.com/github_username/repo_name/stargazers
[issues-shield]: https://img.shields.io/github/issues/github_username/repo_name.svg?style=for-the-badge
[issues-url]: https://github.com/github_username/repo_name/issues
[license-shield]: https://img.shields.io/github/license/github_username/repo_name.svg?style=for-the-badge
[license-url]: https://github.com/github_username/repo_name/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/linkedin_username
[homepage-src]: md-img/homepage.jpeg
[sign-in-src]: md-img/signin-signup.jpeg
[shop-page]: md-img/shop-page.jpeg
[checkout-page]: md-img/checkout-page.jpeg