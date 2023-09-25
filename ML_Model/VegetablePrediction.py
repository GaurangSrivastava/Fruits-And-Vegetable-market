import numpy as np
import pandas as pd
from sklearn.preprocessing import MinMaxScaler
from keras.models import load_model

def predict(selected_data, selected_vegetable, sequence_length=10):
    # Load the dataset
    data = pd.read_csv("sabzi.csv")
    model = load_model("Predictor.h5")
    # Exclude the 'Dates' column for training
    scaler = MinMaxScaler()
    
    
    # Prepare the input sequence for prediction
    selected_data = data[['Dates', selected_vegetable]]
    selected_data.set_index('Dates', inplace=True)
    selected_sequence = selected_data.iloc[-sequence_length:]
    selected_sequence_scaled = scaler.fit_transform(selected_sequence.values.reshape(-1, 1))
    
    # Predict the price for the selected vegetable and date
    predicted_price_scaled = model.predict(np.array([selected_sequence_scaled]))
    predicted_price = scaler.inverse_transform(predicted_price_scaled)
    
    return round(predicted_price[0][0])

