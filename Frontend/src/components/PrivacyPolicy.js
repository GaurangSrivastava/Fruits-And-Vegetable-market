import React from 'react'
import styled from 'styled-components'
const PrivacyPolicy = () => {
  return (
    <Wrapper>
      <div className="big-container">
        <div className="inside-container">
          <h2 className="main-heading">Privacy Policy</h2>
          <p className="intro">Welcome to Novus Vegetables! At Novus Vegetables, we value your privacy and are committed to protecting your personal information. This Privacy Policy outlines how we collect, use, disclose, and safeguard your information when you visit our website and use our services.</p>
          <ol className="outer-list">
            <li>
            <div className="outer-div">
              <span className="list-number">&#8226;</span> Information We Collect
              </div>
              <ol className="inner-list">
                <li>
                Personal Information: <p>We may collect personal information, including but not limited to your name, email address, phone number, billing information, and delivery address when you register for an account, place an order, or contact our customer support.</p>
                </li>
                <li>
                Usage Information: <p>We may collect information about your use of our website, including your browsing history, the pages you visit, and the products you view.</p>
                </li>
                <li>
                Payment Information: <p>When you make a payment on our website, we collect payment card information, which is securely processed by our payment service providers.</p>
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
              <span className="list-number">&#8226;</span> How We Use Your Information
              </div>
              <ol className="inner-list">
                <li>
                Order Processing: <p>We use your personal information to process your orders, deliver products, and provide customer support.</p>
                </li>
                <li>
                Communication:<p>We may use your contact information to send you transactional and promotional communications, including order confirmations, updates, and newsletters.</p>
                </li>
                <li>
                Improvement and Personalization:<p>We use information about your usage patterns to improve our website, products, and services. This includes personalizing your experience, suggesting products, and enhancing website functionality.</p>
                </li>
              </ol>
            </li>
            <li>
              <div className="outer-div">
              <span className="list-number">&#8226;</span> Data Security
              </div>
              <ol className="inner-list">
                <li>
                  <p>We implement appropriate security measures to protect your personal information from unauthorized access, disclosure, alteration, and destruction. We use industry-standard encryption technologies to safeguard your payment information.</p>
                </li>
              </ol>
            </li>
            <li>
              <div className="outer-div">
              <span className="list-number">&#8226;</span>  Third-Party Services
              </div>
              <ol className="inner-list">
                <li>
                  <p>We may use third-party services, such as payment processors and analytics providers, to help us operate our website and improve our services. These third parties may have access to your information, but they are obligated to protect it and use it only for authorized purposes.</p>
                </li>
              </ol>
            </li>
            <li>
              <div className="outer-div">
              <span className="list-number">&#8226;</span> Cookies and Tracking Technologies
              </div>
              <ol className="inner-list">
                <li>
                 <p>We use cookies and similar tracking technologies to collect information about your browsing behavior on our website. You can manage your cookie preferences through your browser settings.</p>
                </li>
              </ol>
            </li>
            <li>
              <div className="outer-div">
              <span className="list-number">&#8226;</span>Your Rights
              </div>
              <ol className="inner-list">
                <li>
                   <p>You have the right to access, correct, or delete your personal information. You can also withdraw your consent for certain data processing activities. To exercise your rights, please contact our customer support.</p>
                </li>
              </ol>
            </li>
            <li>
              <div className="outer-div">
              <span className="list-number">&#8226;</span>  Changes to This Privacy Policy
              </div>
              <ol className="inner-list">
                <li>
                   <p>We may update this Privacy Policy from time to time to reflect changes in our practices or for legal reasons. We will post the revised Privacy Policy on our website, and the changes will take effect immediately upon posting.</p>
                </li>
              </ol>
            </li>
            <li>
              <div className="outer-div">
              <span className="list-number">&#8226;</span> Contact Us
              </div>
              <ol className="inner-list">
                <li>
                  <p>If you have any questions or concerns about this Privacy Policy or our data practices, please <a href="/contact">Contact Us</a>.</p>
                </li>
              </ol>
            </li>
          </ol>
        </div>
      </div>
    </Wrapper>
  )
}
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
export default PrivacyPolicy
