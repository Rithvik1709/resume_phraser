import pdfplumber
import io
import docx
from typing import Optional

def extract_text(filename: str, content: bytes) -> str:
    if filename.endswith(".pdf"):
        with pdfplumber.open(io.BytesIO(content)) as pdf:
            return "\n".join([page.extract_text() or "" for page in pdf.pages])
    elif filename.endswith(".docx"):
        doc = docx.Document(io.BytesIO(content))
        return "\n".join([p.text for p in doc.paragraphs])
    else:
        return ""
