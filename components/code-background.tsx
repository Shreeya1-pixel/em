"use client"

export function CodeBackground() {
  return (
    <div className="fixed inset-0 w-full h-full pointer-events-none overflow-hidden">
      <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover opacity-50">
        <source src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/codepic-t45qN3FGw3kfMC3y2cJKmfRK3IQ2Ff.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0a0e27]/30 to-[#0a0e27]" />
    </div>
  )
}
