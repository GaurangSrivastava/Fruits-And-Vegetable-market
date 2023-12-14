import React from 'react';
import styled from 'styled-components';
const TermsAndConditions = () => {
  return (
    <Wrapper>
      <div className="big-container">
        <div className="inside-container">
          <h2 className="main-heading">Terms & Conditions</h2>
          <p className="intro">Welcome to Novus Vegetables! These Terms(the "Terms") and Conditions govern your use of the Novus Vegetables website(the "Website") and the services offered through it. By accessing or using our Website, you agree to comply with and be bound by these Terms. If you do not agree with these Terms, please do not use our Website.</p>
          <ol className="outer-list">
            <li>
            <div className="outer-div">
              <span className="list-number">&#8226;</span> Use of the Website
              </div>
              <ol className="inner-list">
                <li>
                  Eligibility: <p>You must be at least 18 years old to use our Website. By using the Website, you represent and warrant that you are at least 18 years old.</p>
                </li>
                <li>
                  Account Registration: <p>To use certain features of the Website, you may be required to create an account. You are responsible for providing accurate and complete information when creating your account, and you must keep your login credentials confidential.</p>
                </li>
                <li>
                  User Content: <p>Any content you submit, upload, or otherwise make available on the Website, including reviews, comments, and product ratings, must not violate our content guidelines. We reserve the right to remove or modify any content that violates these guidelines.</p>
                </li>
              </ol>
            </li>
            <li>
            <div className="outer-div">
              <span className="list-number">&#8226;</span> Services
              </div>
              <ol className="inner-list">
                <li>
                   Online Shopping: <p>Novus Vegetables provides an online platform for customers to purchase fruits and vegetables for delivery.</p>
                </li>
                <li>
                  Price Prediction: <p>We offer a feature that predicts vegetable prices on specified dates. While we strive for accuracy, these predictions are for informational purposes only and do not guarantee future prices.</p>
                </li>
              </ol>
            </li>
            <li>
              <div className="outer-div">
              <span className="list-number">&#8226;</span> Payment
              </div>
              <ol className="inner-list">
                <li>
                  Payment Methods: <p>We accept payment for orders exclusively through credit and debit cards. By providing your payment information, you authorize us to charge your card for the total order amount.</p>
                </li>
                <li>
                  Billing Information: <p>You agree to provide accurate and current billing information. Inaccurate or outdated information may result in the suspension or cancellation of your account.</p>
                </li>
              </ol>
            </li>
            <li>
              <div className="outer-div">
              <span className="list-number">&#8226;</span> Delivery
              </div>
              <ol className="inner-list">
                <li>
                  Delivery Area: <p>We offer delivery within specified geographic areas. You can check if your location is eligible for delivery on our Website.</p>
                </li>
                <li>
                   Delivery Times: <p>We will make reasonable efforts to deliver your order within the estimated delivery window, but delivery times may vary depending on factors beyond our control.</p>
                </li>
              </ol>
            </li>
            <li>
              <div className="outer-div">
              <span className="list-number">&#8226;</span> Privacy
              </div>
              <ol className="inner-list">
                <li>
                  Privacy Policy: <p>Your use of the Website is also governed by our Privacy Policy, which can be found on our Website. By using the Website, you consent to the collection and use of your information as described in the <a href="/privacy-policy">Privacy Policy</a>.</p>
                </li>
              </ol>
            </li>
            <li>
              <div className="outer-div">
              <span className="list-number">&#8226;</span> Intellectual Property
              </div>
              <ol className="inner-list">
                <li>
                  Ownership: <p>All content, including text, graphics, logos, and images, on the Website is owned or licensed by Novus Vegetables and is protected by intellectual property laws. You may not use, reproduce, or distribute our content without our written permission.</p>
                </li>
              </ol>
            </li>
            <li>
              <div className="outer-div">
              <span className="list-number">&#8226;</span> Termination
              </div>
              <ol className="inner-list">
                <li>
                  Termination by Novus Vegetables: <p>We reserve the right to terminate or suspend your account and access to the Website for any reason, including violation of these Terms.</p>
                </li>
                <li>
                   Termination by You: <p>You may terminate your account at any time by contacting our <a href="/contact">Customer Support</a>.</p>
                </li>
              </ol>
            </li>
            <li>
              <div className="outer-div">
              <span className="list-number">&#8226;</span> Changes to the Terms
              </div>
              <ol className="inner-list">
                <li>
                   Updates: <p>Novus Vegetables may update these Terms from time to time. Any changes will be posted on the Website, and your continued use of the Website after such changes will constitute your acceptance of the revised Terms.</p>
                </li>
              </ol>
            </li>
            <li>
              <div className="outer-div">
              <span className="list-number">&#8226;</span> Contact Us
              </div>
              <ol className="inner-list">
                <li>
                  <p>If you have any questions or concerns about these Terms or the Website, please <a href="/contact">Contact Us</a>.</p>
                </li>
              </ol>
            </li>
          </ol>
        </div>
      </div>
    </Wrapper>
  );
};
const Wrapper=styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
.big-container{
  width: 80%;
  margin: 20px;
  padding:20px;
  box-shadow: 0px 0px 14px 10px rgba(0,0,0,0.1);
  border-radius: 10px;
  text-align: justify;
  .main-heading{
    color:#295a13d1;
    font-size:30px;
    font-weight:1000;
    line-height:40px;
    font-family: 'Courgette',cursive;
    text-align:center;
    padding-bottom:10px;
  }
  .intro{
    font-family: 'Poppins', sans-serif;
    padding:5px 0px 20px 0px;
    font-size:1.8rem;
    font-weight:530;
  }
  p{
    font-size:1.6rem;
    font-family: 'Poppins', sans-serif;
    padding:5px 0px 20px 0px;
    font-weight:500;
    color:#000000c9;
  }

.outer-list{
.outer-div{
  padding-bottom:10px;
  font-family: 'Poppins', sans-serif;
  font-size:2.2rem;
  font-weight:bold;
  color:#1b5d0de8;
}

.inner-list li{
  font-family: 'Poppins', sans-serif;
  font-size:1.9rem;
  font-weight:600;
  color:#1b5d0da8;
  padding-left:40px;
}
.inner-list a{
  color:#325bd4;
}
.inner-list a:hover{
  color:#0f039a;
}
}
}
`

export default TermsAndConditions;