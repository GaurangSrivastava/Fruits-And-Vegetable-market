from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware  
from pydantic import BaseModel
import VegetablePrediction as vp
app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],  # Replace with the origin of your React app
    allow_credentials=True,
    allow_methods=["*"],  # You can specify specific HTTP methods (e.g., ["GET", "POST"])
    allow_headers=["*"],  # You can specify specific headers if needed
)

class vegetable(BaseModel):
   name: str

@app.post('/')
@app.options('/')
async def endpoint(item:vegetable):
     try:
        print(item)
        result = vp.predict("date", item.name)
        return {"prediction": result}
     except Exception as e:
        raise HTTPException(status_code=422, detail=str(e))

