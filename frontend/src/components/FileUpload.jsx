import React, { useRef } from 'react'
import axios from 'axios'

export default function FileUpload({ setResumeData }) {
  const fileRef = useRef()

  const handleUpload = async () => {
    const file = fileRef.current.files[0]
    if (!file) return alert("Please select a file.")

    const formData = new FormData()
    formData.append("file", file)

    try {
      const res = await axios.post("http://localhost:8000/upload", formData)
      setResumeData(res.data)
    } catch (err) {
      alert("Upload failed.")
    }
  }

  return (
    <div className="border p-6 rounded-xl bg-gray-50 mb-6 shadow-sm">
      <label className="block mb-2 font-semibold text-lg">Upload Resume</label>
      <input type="file" ref={fileRef} className="mb-4 block w-full text-sm text-gray-500" />
      <button
        onClick={handleUpload}
        className="bg-black text-white px-6 py-2 rounded hover:bg-gray-800"
      >
        Upload & Parse
      </button>
    </div>
  )
}
