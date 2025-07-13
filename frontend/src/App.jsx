import React, { useState } from 'react'
import FileUpload from './components/FileUpload'
import ResumeCard from './components/ResumeCard'

export default function App() {
  const [resumeData, setResumeData] = useState(null)

  return (
    <div className="min-h-screen bg-white text-black p-6">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center border-b pb-4">AI Resume Parser</h1>
        <FileUpload setResumeData={setResumeData} />
        {resumeData && <ResumeCard data={resumeData} />}
      </div>
    </div>
  )
}
