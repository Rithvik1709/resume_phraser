import axios from 'axios'

const API_BASE = 'http://localhost:8000'

export const uploadResume = async (file) => {
  const formData = new FormData()
  formData.append("file", file)

  const response = await axios.post(`${API_BASE}/upload`, formData)
  return response.data
}
