"use client"

export default function AwardsPage() {
  return (
    <div className="min-h-screen bg-gray-50 p-6 pb-32">

      <h1 className="text-3xl font-bold mb-6">
        🏆 MyShot.pi Awards
      </h1>

      {/* Awards Intro */}
      <div className="bg-white rounded-xl shadow p-6 mb-6">
        <h2 className="text-xl font-semibold mb-3">
          How Awards Work
        </h2>

        <p className="text-gray-700 mb-2">
          Buy an image for <strong>1 Pi</strong> and become an Awards participant.
        </p>

        <p className="text-gray-700 mb-2">
          Each purchase contributes to the <strong>Awards Prize Pool</strong>.
        </p>

        <p className="text-gray-700">
          Selected participants will receive prize rewards.
        </p>
      </div>

      {/* Prize Distribution */}
      <div className="bg-white rounded-xl shadow p-6 mb-6">
        <h2 className="text-xl font-semibold mb-3">
          Prize Distribution
        </h2>

        <ul className="space-y-2 text-gray-700">
          <li>Creator Reward: <strong>0.6 Pi</strong></li>
          <li>Platform Fee: <strong>0.2 Pi</strong></li>
          <li>Awards Pool: <strong>0.2 Pi</strong></li>
        </ul>
      </div>

      {/* Participation */}
      <div className="bg-white rounded-xl shadow p-6">
        <h2 className="text-xl font-semibold mb-3">
          How to Participate
        </h2>

        <ol className="list-decimal list-inside space-y-2 text-gray-700">
          <li>Explore images in the marketplace.</li>
          <li>Buy an image for 1 Pi.</li>
          <li>Become an Awards candidate.</li>
          <li>Wait for the Awards announcement.</li>
        </ol>
      </div>

    </div>
  )
}