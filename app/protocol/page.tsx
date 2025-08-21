import Navigation from "@/components/navigation"
import Link from "next/link"

export default function ProtocolPage() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white">
      <Navigation />

      {/* Hero Block: "The Ritual Begins Here" */}
      <section className="pt-24 pb-16 bg-gradient-to-b from-[#0A0A0A] to-[#1B1B1B] relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 to-transparent"></div>
        </div>

        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h1 className="text-6xl font-bold mb-6 font-heading tracking-wider">THE PROTOCOL.</h1>
          <p className="text-xl text-gray-300 mb-4 max-w-2xl mx-auto">
            From scoop to stamina—your path to sustained energy, sharp focus, and hydration that keeps you locked in.
          </p>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            No more trial and error. No more sugar bombs. Just a clear, proven routine that turns every session into a
            win.
          </p>
          <Link
            href="/product"
            className="inline-block bg-red-500 hover:bg-red-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 shadow-lg shadow-red-500/25 hover:shadow-red-500/40"
          >
            Start My Protocol
          </Link>
        </div>
      </section>

      {/* Step-by-Step Block */}
      <section className="py-16 bg-[#2C2C2C]">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-red-500 font-semibold mb-2 tracking-wider">SIMPLE. PRECISE. EFFECTIVE.</p>
            <h2 className="text-4xl font-bold font-heading">Follow the 4 steps. Stay unstoppable.</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center p-6 bg-[#1A1A1A] rounded-lg border border-gray-700">
              <div className="w-16 h-16 mx-auto mb-4 bg-red-500/20 rounded-full flex items-center justify-center">
                <span className="text-2xl font-bold text-red-500">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-red-500">Packet</h3>
              <p className="text-gray-300">Take 1 serving of LOOTBOX.</p>
            </div>

            <div className="text-center p-6 bg-[#1A1A1A] rounded-lg border border-gray-700">
              <div className="w-16 h-16 mx-auto mb-4 bg-red-500/20 rounded-full flex items-center justify-center">
                <span className="text-2xl font-bold text-red-500">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-red-500">Mix</h3>
              <p className="text-gray-300">Shake with 16oz cold water for optimized taste + hydration.</p>
            </div>

            <div className="text-center p-6 bg-[#1A1A1A] rounded-lg border border-gray-700">
              <div className="w-16 h-16 mx-auto mb-4 bg-red-500/20 rounded-full flex items-center justify-center">
                <span className="text-2xl font-bold text-red-500">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-red-500">Engage</h3>
              <p className="text-gray-300">
                Feel steady energy, sharpened focus, and hydration kick in—without the crash.
              </p>
            </div>

            <div className="text-center p-6 bg-[#1A1A1A] rounded-lg border border-gray-700">
              <div className="w-16 h-16 mx-auto mb-4 bg-red-500/20 rounded-full flex items-center justify-center">
                <span className="text-2xl font-bold text-red-500">4</span>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-red-500">Repeat</h3>
              <p className="text-gray-300">Subscribe to auto-ship so you never miss your stack.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why It Works */}
      <section className="py-16 bg-[#0A0A0A] relative">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-tr from-red-500/10 to-transparent"></div>
        </div>

        <div className="max-w-6xl mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6 font-heading">A protocol, not a guess.</h2>
              <p className="text-gray-300 mb-8">
                Every element of LOOTBOX is tuned for <strong className="text-red-500">gamers aged 18–45</strong> who
                demand stamina and clarity.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h3 className="text-xl font-semibold text-red-500 mb-2">Electrolytes</h3>
                    <p className="text-gray-300">Hydration balance keeps you sharp, not sluggish.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h3 className="text-xl font-semibold text-red-500 mb-2">Nootropics</h3>
                    <p className="text-gray-300">Focus enhancers cut brain fog and sharpen reflexes.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h3 className="text-xl font-semibold text-red-500 mb-2">Vitamins + Botanicals</h3>
                    <p className="text-gray-300">Stamina and mental clarity, crash-free.</p>
                  </div>
                </div>
              </div>

              <button className="mt-8 border border-red-500 text-red-500 hover:bg-red-500 hover:text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300">
                See Ingredient Science
              </button>
            </div>

            <div className="text-center">
              <img src="/lootbox-supplement.png" alt="LOOTBOX Supplement Box" className="max-w-full h-auto mx-auto" />
            </div>
          </div>
        </div>
      </section>

      {/* Transformation Carousel */}
      <section className="py-16 bg-[#1A1A1A]">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 font-heading">Your edge isn't optional.</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-[#2C2C2C] rounded-lg border border-gray-700">
              <div className="w-16 h-16 mx-auto mb-4 bg-gray-600 rounded-full flex items-center justify-center">
                <span className="text-2xl">😴</span>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-400">Before</h3>
              <p className="text-gray-300">Fatigue, sluggish reflexes, dehydration headaches.</p>
            </div>

            <div className="text-center p-8 bg-red-500/10 rounded-lg border border-red-500">
              <div className="w-16 h-16 mx-auto mb-4 bg-red-500 rounded-full flex items-center justify-center">
                <span className="text-2xl">⚡</span>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-red-500">Protocol</h3>
              <p className="text-gray-300">Scoop. Mix. Engage. Repeat.</p>
            </div>

            <div className="text-center p-8 bg-green-500/10 rounded-lg border border-green-500">
              <div className="w-16 h-16 mx-auto mb-4 bg-green-500 rounded-full flex items-center justify-center">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-green-500">After</h3>
              <p className="text-gray-300">Energy without crashes, sharper reflexes, consistent wins.</p>
            </div>
          </div>
        </div>
      </section>

      {/* NOVA Guidance Section */}
      <section className="py-16 bg-[#0B1220] relative">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-gradient-to-bl from-blue-500/10 to-transparent"></div>
        </div>

        <div className="max-w-6xl mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6 font-heading text-[#00A3FF]">
                Your AI strategist keeps you on track.
              </h2>
              <p className="text-gray-300 mb-8">
                Don't guess when to scoop. Don't wonder if you've had enough hydration. NOVA answers your protocol
                questions instantly—so you can execute, not hesitate.
              </p>

              <div className="bg-[#1A1A1A] rounded-lg p-6 border border-[#00A3FF]/30 mb-8">
                <div className="space-y-4">
                  <div className="flex justify-end">
                    <div className="bg-gray-700 rounded-lg px-4 py-2 max-w-xs">
                      <p className="text-sm">How do I adjust for late-night queues?</p>
                    </div>
                  </div>
                  <div className="flex justify-start">
                    <div className="bg-[#00A3FF] rounded-lg px-4 py-2 max-w-xs">
                      <p className="text-sm text-white">Go half-scoop to sustain focus without disrupting sleep.</p>
                    </div>
                  </div>
                </div>
              </div>

              <Link
                href="/chat"
                className="inline-block bg-[#00A3FF] hover:bg-[#0088CC] text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300"
              >
                Ask NOVA About My Protocol
              </Link>
            </div>

            <div className="text-center">
              <img src="/ai-hologram-guide.png" alt="NOVA AI Hologram" className="max-w-full h-auto mx-auto" />
            </div>
          </div>
        </div>
      </section>

      {/* Subscription Block */}
      <section className="py-16 bg-[#2C2C2C]">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-4 font-heading">The Protocol only works if it's consistent.</h2>
              <p className="text-xl text-gray-300 mb-8">Auto-ship ensures you never break your stack.</p>

              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  <span className="text-gray-300">Save 15% + get XP perks</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  <span className="text-gray-300">Priority on Loot Drops</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  <span className="text-gray-300">Pause anytime, no penalty</span>
                </div>
              </div>

              <Link
                href="/product"
                className="inline-block bg-red-500 hover:bg-red-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 shadow-lg shadow-red-500/25 hover:shadow-red-500/40"
              >
                Subscribe & Lock-In
              </Link>
            </div>

            <div className="bg-[#1A1A1A] rounded-lg p-8 border border-gray-700">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold mb-2">Monthly Protocol</h3>
                <div className="text-4xl font-bold text-red-500 mb-2">$39.99</div>
                <p className="text-gray-400 line-through">$46.99</p>
                <p className="text-green-500 font-semibold">Save 15%</p>
              </div>

              <div className="space-y-3 text-sm text-gray-300">
                <div className="flex justify-between">
                  <span>30 servings per month</span>
                  <span>✓</span>
                </div>
                <div className="flex justify-between">
                  <span>Free shipping</span>
                  <span>✓</span>
                </div>
                <div className="flex justify-between">
                  <span>NOVA AI access</span>
                  <span>✓</span>
                </div>
                <div className="flex justify-between">
                  <span>Exclusive loot drops</span>
                  <span>✓</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Block */}
      <section className="py-16 bg-[#1A1A1A]">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 font-heading">Protocol Questions</h2>

          <div className="space-y-4">
            <details className="bg-[#2C2C2C] rounded-lg border border-gray-700 overflow-hidden">
              <summary className="px-6 py-4 cursor-pointer hover:bg-[#333333] transition-colors">
                <span className="font-semibold">Do I need it every day?</span>
              </summary>
              <div className="px-6 pb-4 text-gray-300">No, but daily use helps optimize hydration + focus balance.</div>
            </details>

            <details className="bg-[#2C2C2C] rounded-lg border border-gray-700 overflow-hidden">
              <summary className="px-6 py-4 cursor-pointer hover:bg-[#333333] transition-colors">
                <span className="font-semibold">Will I jitter?</span>
              </summary>
              <div className="px-6 pb-4 text-gray-300">No—the formula removes shakiness.</div>
            </details>

            <details className="bg-[#2C2C2C] rounded-lg border border-gray-700 overflow-hidden">
              <summary className="px-6 py-4 cursor-pointer hover:bg-[#333333] transition-colors">
                <span className="font-semibold">What if I marathon game for 8+ hours?</span>
              </summary>
              <div className="px-6 pb-4 text-gray-300">The hydration + stamina support is built exactly for that.</div>
            </details>
          </div>
        </div>
      </section>

      {/* Final CTA Block */}
      <section className="py-16 bg-[#0A0A0A] relative">
        <div className="absolute bottom-0 left-0 right-0 h-2 bg-gray-800 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-red-500 to-red-600 rounded-full animate-pulse"
            style={{ width: "85%" }}
          ></div>
        </div>

        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-5xl font-bold mb-6 font-heading">Ready to run the protocol?</h2>
          <p className="text-xl text-gray-300 mb-8">Join the mission. Stay dialed in.</p>
          <Link
            href="/product"
            className="inline-block bg-red-500 hover:bg-red-600 text-white px-12 py-6 rounded-lg font-bold text-xl transition-all duration-300 shadow-lg shadow-red-500/25 hover:shadow-red-500/40"
          >
            Join the Protocol
          </Link>
        </div>
      </section>
    </div>
  )
}
