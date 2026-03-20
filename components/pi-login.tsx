
"use client"

import { useState } from "react"

export default function PiLogin() {

  const [user, setUser] = useState<any>(null)

  const handleLogin = () => {
    alert("Pi Login Button Working")
  }

  return (
    <div style={{
      textAlign: "center",
      marginTop: "20px",
      marginBottom: "20px"
    }}>
      <button
        onClick={handleLogin}
        style={{
          padding: "12px 20px",
          background: "#6f3ff5",
          color: "white",
          border: "none",
          borderRadius: "8px",
          fontSize: "16px",
          cursor: "pointer"
        }}
      >
        Login with Pi
      </button>
    </div>
  )
}

