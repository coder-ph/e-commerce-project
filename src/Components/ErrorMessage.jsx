import React from 'react'
import { useRouteError } from 'react-router-dom'

function ErrorMessage() {
    const error = useRouteError()
    console.error(error)

  return (
    <div>
      <main>
        <h1>Error: Beats the hell out of me</h1>
      </main>
    </div>
  );
}

export default ErrorMessage
