"use client"
import { useEffect, useState } from "react"

const targetDate = new Date("2025-08-27T00:00:00")

const CatherinePage = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  useEffect(() => {
    const updateCountdown = () => {
      const now = new Date()
      const difference = targetDate.getTime() - now.getTime()

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24))
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))
        const seconds = Math.floor((difference % (1000 * 60)) / 1000)
        setTimeLeft({ days, hours, minutes, seconds })
      }
    }

    updateCountdown()
    const interval = setInterval(updateCountdown, 1000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#334155] flex flex-col justify-center">
      <div className="container mx-auto px-4">
        {/* Title */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold text-cyan-100 mb-4 leading-tight drop-shadow-lg">
            Catherine&apos;s Countdown
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold text-cyan-300 mb-2">
            Special Day Coming Soon
          </h2>
        </div>
        {/* Countdown Timer */}
        <div className="flex justify-center">
          <div className="bg-slate-900/90 backdrop-blur-sm border-2 border-cyan-900 rounded-2xl shadow-2xl p-4 md:p-8 max-w-xs md:max-w-2xl w-full">
            <div className="flex flex-wrap justify-center gap-2 md:gap-8">
              {[
                { label: "Days", value: timeLeft.days },
                { label: "Hours", value: timeLeft.hours },
                { label: "Minutes", value: timeLeft.minutes },
                { label: "Seconds", value: timeLeft.seconds, color: "text-cyan-400" },
              ].map((item, idx) => (
                <div className="text-center min-w-[60px] md:min-w-[80px]" key={item.label}>
                  <div className={`text-3xl md:text-6xl font-bold mb-2 ${item.color || "text-cyan-100"}`}>
                    {item.value.toString().padStart(2, "0")}
                  </div>
                  <div className="text-xs md:text-base font-semibold text-cyan-200 uppercase tracking-wider">
                    {item.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CatherinePage



