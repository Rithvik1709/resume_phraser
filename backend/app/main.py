from fastapi import FastAPI, File, UploadFile
from fastapi.middleware.cors import CORSMiddleware
from app.services.parser import extract_text
from app.services.extractor import extract_data

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.post("/upload")
async def upload_resume(file: UploadFile = File(...)):
    contents = await file.read()
    text = extract_text(file.filename, contents)
    structured = extract_data(text)
    return structured
