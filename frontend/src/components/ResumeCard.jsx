import React from 'react'

export default function ResumeCard({ data }) {
  return (
    <div className="bg-white border rounded-xl shadow p-6 space-y-6">
      <h2 className="text-2xl font-semibold border-b pb-2">Parsed Resume Data</h2>
      <div><strong>Name:</strong> {data.name}</div>
      <div><strong>Email:</strong> {data.email}</div>
      <div><strong>Phone:</strong> {data.phone}</div>

      <div>
        <strong>Skills:</strong>
        <ul className="list-disc list-inside ml-4">
          {data.skills?.map((skill, i) => <li key={i}>{skill}</li>)}
        </ul>
      </div>
    </div>
  )
}
