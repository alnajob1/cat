
import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function LandingPage() {

  const navigate = useNavigate()

  return (
    <div>

      <h1>Welcome to Cat Facts</h1>

      <p>
        This application provides interesting facts
        about cats using the Cat Facts API.
      </p>

      <p>
        You can fetch facts, search facts, filter facts
        and save your favourite facts in session storage.
      </p>

      <button onClick={() => navigate('/')}>
        Explore Cat Facts
      </button>

    </div>
  )
}
