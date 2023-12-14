import React, { useState } from "react";
import axios from "axios";
import styled from "styled-components";
function Predict() {
  const [vegetableName, setVegetableName] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [prediction, setPrediction] = useState(null);

  const fetchData = async () => {
    try {
      const requestBody = {
        name: vegetableName,
      };
      console.log("requestBody:", requestBody);
      const response = await axios.post("http://localhost:8000/", requestBody, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      setPrediction(response.data.prediction);
    } catch (error) {
      console.error("Error making prediction:", error);
    }
  };

  return (
    <Wrapper>
    <div className="predict-container">
      <h2>Predict Vegetable/Fruit Price</h2>
      <div className="form-group">
      <label>Select Vegetable:</label>
      <select
            value={vegetableName}
            onChange={(e) =>  setVegetableName(e.target.value)}
          >
            <option value="Amla">Amla (1 kg)</option>
            <option value="Apple">Apple (1 kg)</option>
            <option value="Apricot">Apricot (1 kg)</option>
            <option value="Avocado">Avocado (1 kg)</option>
            <option value="Banana">Banana (1 dozen)</option>
            <option value="Bitter Gourd (Karela)">Bitter Gourd (Karela) (1 kg)</option>
            <option value="Baby Corn">Baby Corn (1 kg)</option>
            <option value="Cabbage">Cabbage (1 kg)</option>
            <option value="Capsicum">Capsicum (1 kg)</option>
            <option value="Cauliflower">Cauliflower (1 kg)</option>
            <option value="Coriander Leaves">Coriander Leaves (500 gms)</option>
            <option value="Cucumber">Cucumber (1 kg)</option>
            <option value="Eggplant">Eggplant (1 kg)</option>
            <option value="French Beans">French Beans (1 kg)</option>
            <option value="Garlic">Garlic (1 kg)</option>
            <option value="Ginger">Ginger (1 kg)</option>
            <option value="Green Chilli">Green Chilli  (1 kg)</option>
            <option value="Grapes">Grapes (1 kg)</option>
            <option value="Guava">Guava (1 kg)</option>
            <option value="Ivy Gourd">Ivy Gourd(Tinda) (1 kg)</option>
            <option value="Lady Finger">Lady Finger (1 kg)</option>
            <option value="Lemon">Lemon (1 kg)</option>
            <option value="Mango">Mango (1 kg)</option>
            <option value="Melon">Melon (1 Full)</option>
            <option value="Onion">Onion (1 kg)</option>
            <option value="Orange">Orange (1 kg)</option>
            <option value="Pomegranate">Pomegranate (1 kg)</option>
            <option value="Potato">Potato (1 kg)</option>
            <option value="Snake Gourd">Snake Gourd (1 kg)</option>
            <option value="Spinach">Spinach (1 kg)</option>
            <option value="Tomato">Tomato (1 kg)</option>
            <option value="Zucchini">Zucchini (1 kg)</option>
          </select>
      </div>
      <label>Select Date:</label>
      <input
        type="date"
        placeholder="yyyy/mm/dd"
        value={selectedDate}
        onChange={(e) => setSelectedDate(e.target.value)}
      />
      <button onClick={() => fetchData()}>Make Prediction</button>
      {prediction && <p className="predicted-price">Predicted Price: &#8377;{prediction}</p>}
    </div>
</Wrapper>
  );
}
const Wrapper=styled.div`
.predict-container {
   text-align:center;
    max-width: 50%;
    margin: 15px auto;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
    box-shadow:-5px 7px 4px rgb(0 0 0 / 10%);
    background-color: #fff;
  }
  h2{
    font-family: 'Courgette',cursive;
    font-size:4rem;
    font-weight:800;
    color:#2a5a14bd;
    padding-bottom:1.3rem;
  }
  .form-group {
    margin-bottom: 10px;
  }
  
  label {
    font-family: 'Poppins', sans-serif;
    color:#348b49b8;
    font-size:1.5rem;
    text-align:left;
    display: block;
    font-weight: bold;
    margin-bottom: 5px;
  }
  
  input[type="date"],
  select {
    font-family: 'Poppins', sans-serif;
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
  }
  
  button {
    background-color: #539b58ed;
    color: #fff;
    margin-top:10px;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s;
  }
  button:hover{
    background-color: #29802fc2;
  }
  .predicted-price {
    margin-top: 10px;
    font-weight: bold;
  }
`
export default Predict;
