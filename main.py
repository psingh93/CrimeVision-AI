from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import pandas as pd
import random

app = FastAPI(title="CrimeVision Backend")

# CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Load Dataset
df = pd.read_csv("data/crime_dataset_india.csv")


@app.get("/")
def home():
    return {
        "message": "CrimeVision Backend Running"
    }


@app.get("/dashboard")
def dashboard():
    return {
        "total_crimes": len(df),
        "solved_cases": len(df[df["Case Closed"] == "Yes"]),
        "high_risk_areas": df["City"].value_counts().idxmax(),
        "ai_accuracy": 95,
        "cities": df["City"].nunique(),
        "crime_types": df["Crime Description"].nunique(),
        "top_crime": df["Crime Description"].mode()[0]
    }


@app.get("/crimes")
def crimes():
    return df.head(20).fillna("").astype(str).to_dict(orient="records")


@app.get("/crime-types")
def crime_types():
    return (
        df["Crime Description"]
        .value_counts()
        .head(10)
        .to_dict()
    )


@app.get("/cities")
def cities():
    return (
        df["City"]
        .value_counts()
        .head(10)
        .to_dict()
    )


@app.get("/solved")
def solved():
    solved = len(df[df["Case Closed"] == "Yes"])
    unsolved = len(df[df["Case Closed"] != "Yes"])

    return {
        "Solved": solved,
        "Unsolved": unsolved
    }
    import random

@app.get("/prediction")
def prediction():
    top_city = df["City"].value_counts().idxmax()
    top_crime = df["Crime Description"].mode()[0]

    risk = random.randint(75, 98)

    return {
        "city": top_city,
        "predicted_crime": top_crime,
        "risk_score": risk,
        "recommendation": f"Increase police patrols in {top_city}."
    }