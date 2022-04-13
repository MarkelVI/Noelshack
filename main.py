from fastapi import FastAPI
from fastapi.responses import HTMLResponse


app = FastAPI()



@app.get("/KSS", response_class=HTMLResponse)
async def root():
    with open("index.html") as f:
        site = f.read()
    return site

@app.get("/Sign", response_class=HTMLResponse)
async def root():
    with open("index.html", "r") as f:
        site = f.read()
    return site
