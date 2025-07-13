import re

def extract_data(text: str):
    name = re.findall(r"(?i)(?:Name[:\s]*)?([A-Z][a-z]+\s[A-Z][a-z]+)", text)
    email = re.findall(r"[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-z]{2,}", text)
    phone = re.findall(r"\+?\d[\d\s-]{8,15}", text)
    skills = re.findall(r"(?i)(skills|technologies|tools)\s*[:\-]?\s*(.*)", text)
    
    return {
        "name": name[0] if name else "Not found",
        "email": email[0] if email else "Not found",
        "phone": phone[0] if phone else "Not found",
        "skills": skills[0][1].split(",") if skills else [],
        "education": [],
        "experience": []
    }
