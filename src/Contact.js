import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  min-height: 100vh;
  width: 100%;
  background: #4ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Container = styled.div`
  width: 85%;
  background: #fff;
  border-radius: 6px;
  padding: 20px 60px 30px 40px;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);

  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 950px) {
    width: 90%;
    padding: 30px 40px 40px 35px;
  }

  @media (max-width: 820px) {
    margin: 40px 0;
    height: auto;
    flex-direction: column;
  }
`;

const LeftSide = styled.div`
  width: 25%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 15px;
  position: relative;

  @media (max-width: 820px) {
    width: 100%;
    flex-direction: row;
    margin-top: 40px;
    justify-content: center;
    flex-wrap: wrap;
  }
`;

const BeforeElement = styled.div`
  content: '';
  position: absolute;
  height: 70%;
  width: 2px;
  right: -15px;
  top: 50%;
  transform: translateY(-50%);
  background: #afafb6;

  @media (max-width: 820px) {
    display: none;
  }
`;

const Details = styled.div`
  margin: 14px;
  text-align: center;
`;

const Icon = styled.i`
  font-size: 30px;
  color: #3e2093;
  margin-bottom: 10px;
`;

const Topic = styled.div`
  font-size: 18px;
  font-weight: 500;
`;

const Text = styled.div`
  font-size: 14px;
  color: #afafb6;
`;

const RightSide = styled.div`
  width: 75%;
  margin-left: 75px;

  @media (max-width: 820px) {
    width: 100%;
    margin-left: 0;
  }
`;

const TopicText = styled.div`
  font-size: 23px;
  font-weight: 600;
  color: #3e2093;
`;

const InputBox = styled.div`
  height: 50px;
  width: 100%;
  margin: 12px 0;
`;

const Input = styled.input`
  height: 100%;
  width: 100%;
  border: none;
  outline: none;
  font-size: 16px;
  background: #F0F1F8;
  border-radius: 6px;
  padding: 0 15px;
`;

const TextArea = styled.textarea`
  height: 100%;
  width: 100%;
  border: none;
  outline: none;
  font-size: 16px;
  background: #F0F1F8;
  border-radius: 6px;
  padding: 6px 15px;
  resize: none;
`;

const Button = styled.div`
  display: inline-block;
  margin-top: 12px;
`;

const ButtonInput = styled.input`
  color: #fff;
  font-size: 18px;
  outline: none;
  border: none;
  padding: 8px 16px;
  border-radius: 6px;
  background: #3e2093;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: #5029bc;
  }
`;

const Contact = () => {
  return (
    <Wrapper>
      <Container>
        <LeftSide>
          <Details className="address">
            <Icon className="fas fa-map-marker-alt"></Icon>
            <Topic>Address</Topic>
            <Text className="text-one">123</Text>
            <Text className="text-two">Dehradun</Text>
          </Details>
          <Details className="phone">
            <Icon className="fas fa-phone-alt"></Icon>
            <Topic>Phone</Topic>
            <Text className="text-one">+91 9211 420 420</Text>
            <Text className="text-two">+91 9211 420 420</Text>
          </Details>
          <Details className="email">
            <Icon className="fas fa-envelope"></Icon>
            <Topic>Email</Topic>
            <Text className="text-one">vegetablenovus@gmail.com</Text>
            <Text className="text-two">info.novus@gmail.com</Text>
          </Details>
          <BeforeElement></BeforeElement>
        </LeftSide>
        <RightSide>
          <TopicText>Send us a message</TopicText>
          <p>
            If you have any types of queries related to websites, orders, and anything. You can send us a message from here. It's Our pleasure to help you.
          </p>
          <form
          action="https://formspree.io/f/mpzgdqgl"
          method="POST"
         >
            <InputBox>
              <Input type="text" placeholder="Enter your name" id="name" name="name" />
            </InputBox>
            <InputBox>
              <Input type="text" placeholder="Enter your email" id='email' name='email' />
            </InputBox>
            <InputBox className="message-box">
              <TextArea placeholder="Enter your message" id='Message' name='message' />
            </InputBox>
            <Button>
              <ButtonInput type="submit" value="Send Now" />
            </Button>
          </form>
        </RightSide>
      </Container>
    </Wrapper>
  );
};

export default Contact;
