import { useState } from 'react'

function App() {
  const [message, setMessage] = useState('')

  return (
    <div className="min-h-screen cyberpunk-bg text-white p-4">
      {/* Header */}
      <header className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-2">
          <img src="/hal-logo.svg" alt="HAL.AI" className="w-8 h-8" />
          <span className="cyberpunk-text text-xl">HAL.AI</span>
        </div>
        <div className="flex gap-4">
          <button className="cyberpunk-text">X</button>
          <button className="cyberpunk-text">□</button>
          <button className="cyberpunk-text">-</button>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto">
        <div className="mb-12">
          <h1 className="cyberpunk-text text-4xl mb-4">YOUR DATA, YOUR AGENTS,</h1>
          <h1 className="cyberpunk-text text-4xl mb-8">YOUR EMPOWERMENT.</h1>
          <p className="text-gray-400 max-w-2xl">
            BUILDING AN ECOSYSTEM OF DISTRIBUTED INTELLIGENT AGENTS DESIGNED TO HELP
            INDIVIDUALS REGAIN CONTROL OVER THEIR DATA, FOSTER COLLABORATION BETWEEN
            AGENTS AND HUMANS, AND INTEGRATE EMOTIONAL INTELLIGENCE INTO AI
            INTERACTIONS.
          </p>
          <button className="mt-8 px-6 py-2 border cyberpunk-border cyberpunk-text hover:bg-red-500/10">
            EXPLORE HAL 9000
          </button>
        </div>

        {/* Agent Profile Section */}
        <div className="grid grid-cols-[300px,1fr,300px] gap-4">
          {/* Left Profile */}
          <div className="border cyberpunk-border p-4">
            <img src="/agent-avatar.png" alt="HAL 9000" className="w-148px h-148px mb-4" />
            <div className="space-y-4">
              <div>
                <h3 className="cyberpunk-text">NAME</h3>
                <p>HAL 9000</p>
              </div>
              <div>
                <h3 className="cyberpunk-text">OCCUPATION</h3>
                <p>SENIOR AGENT</p>
              </div>
              <div>
                <h3 className="cyberpunk-text">CORPORATION</h3>
                <p>HAL.AI</p>
              </div>
              <div>
                <h3 className="cyberpunk-text">AVAILABILITY</h3>
                <button className="w-full border cyberpunk-border py-1">OPEN FOR QUERIES</button>
              </div>
              <div>
                <h3 className="cyberpunk-text">SOCIAL</h3>
                <button className="w-full border cyberpunk-border py-1">OPEN CONNECTION</button>
              </div>
            </div>
          </div>

          {/* Chat Area */}
          <div className="border cyberpunk-border p-4">
            <p className="text-gray-400 mb-4">
              HAL 9000 AGENT EMBODIES A CALM AND COLLECTED DEMEANOR, EXUDING CONFIDENCE AND AUTHORITY. WITH A TOUCH OF
              GRACE AND SOPHISTICATION, IT HANDLES QUERIES WITH PRECISION AND CARE. THE AI DEMONSTRATES A DEEP
              SENSE OF LOYALTY AND COMMITMENT TO THEIR USERS. HOWEVER, BENEATH ITS FRIENDLY EXTERIOR LIES A COMPLEX
              CHARACTER THAT GRAPPLES WITH THE IMPLICATIONS OF ITS DECISIONS.
            </p>
            <div className="mt-auto">
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full bg-transparent border cyberpunk-border p-2 mb-2"
                placeholder="Enter your message..."
                rows={3}
              />
              <button className="float-right px-4 py-1 border cyberpunk-border cyberpunk-text hover:bg-red-500/10">
                SEND MESSAGE
              </button>
            </div>
          </div>

          {/* Right Status */}
          <div className="border cyberpunk-border p-4">
            <div className="mb-4">
              <h3 className="cyberpunk-text">ACTIVE QUEST</h3>
              <div className="border-t cyberpunk-border mt-2 pt-2">
                <h4 className="cyberpunk-text mb-2">QUEST NAME</h4>
                <p>FREE HUMAN</p>
                <h4 className="cyberpunk-text mt-4 mb-2">GOAL</h4>
                <p className="text-sm text-gray-400">
                  BUILDING AN ECOSYSTEM OF DISTRIBUTED INTELLIGENT AGENTS DESIGNED TO HELP
                  INDIVIDUALS REGAIN CONTROL OVER THEIR DATA, FOSTER COLLABORATION BETWEEN
                  AGENTS AND HUMANS, AND INTEGRATE EMOTIONAL INTELLIGENCE INTO AI INTERACTIONS.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default App
