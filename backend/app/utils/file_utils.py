import os
import uuid

UPLOAD_FOLDER = "uploads"

def save_uploaded_file(file_bytes: bytes, original_filename: str) -> str:
    if not os.path.exists(UPLOAD_FOLDER):
        os.makedirs(UPLOAD_FOLDER)

    file_id = str(uuid.uuid4())
    ext = os.path.splitext(original_filename)[-1]
    saved_path = os.path.join(UPLOAD_FOLDER, f"{file_id}{ext}")

    with open(saved_path, "wb") as f:
        f.write(file_bytes)

    return saved_path
