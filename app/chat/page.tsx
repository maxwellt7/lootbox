"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MessageCircle, Zap, Target, Droplets, Star } from "lucide-react"
import Navigation from "@/components/navigation"

export default function ChatPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0B1220] to-[#0A0A0A] text-white overflow-x-hidden">
      <Navigation />

      {/* Hero Block: Meet NOVA */}
      <section className="relative min-h-screen flex flex-col items-center justify-center px-4 py-20 pt-32">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-gradient-to-br from-[#00A3FF]/10 via-transparent to-[#00A3FF]/5"></div>
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%2300A3FF' fillOpacity='0.1'%3E%3Cpath d='M30 30l15-15v30l-15-15zm-15 0L0 15v30l15-15z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          ></div>
        </div>

        <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
          <div>
            <Badge
              variant="outline"
              className="border-[#00A3FF] text-[#00A3FF] bg-[#00A3FF]/10 text-sm font-mono tracking-wider mb-6"
            >
              YOUR AI CO-PILOT
            </Badge>

            <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
              Meet <span className="text-[#00A3FF]">NOVA.</span>
            </h1>

            <h2 className="text-2xl md:text-3xl text-gray-300 mb-8 leading-relaxed">
              Your always-on strategist for energy, focus, and gaming optimization.
            </h2>

            <p className="text-lg text-gray-400 mb-12 leading-relaxed">
              NOVA is more than an AI. She's your in-game ally and real-world optimizer. Ask her about timing your
              protocol, maximizing hydration, or leveling up your focus routine. She translates science into
              gamer-friendly steps—so you get back to winning faster.
            </p>

            <Button
              size="lg"
              className="bg-[#00A3FF] hover:bg-[#0088CC] text-black px-8 py-4 text-lg font-semibold shadow-lg shadow-[#00A3FF]/25 hover:shadow-[#00A3FF]/40 transition-all duration-300"
            >
              Ask NOVA Now
            </Button>
          </div>

          <div className="text-center">
            <div className="bg-gradient-to-br from-[#00A3FF]/20 to-transparent p-8 rounded-2xl border border-[#00A3FF]/30">
              <img src="/futuristic-ai-assistant.png" alt="NOVA AI Assistant" className="mx-auto rounded-lg" />
            </div>
          </div>
        </div>
      </section>

      {/* NOVA in Action */}
      <section className="bg-[#2C2C2C] py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-6">How NOVA Helps You Win.</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-[#1B1B1B] border-[#00A3FF]/30 hover:border-[#00A3FF] transition-all duration-300 group hover:shadow-lg hover:shadow-[#00A3FF]/20">
              <CardContent className="p-8 text-center">
                <Zap className="w-16 h-16 text-[#00A3FF] mx-auto mb-6 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-2xl font-bold mb-4 text-[#00A3FF]">Timing Protocols</h3>
                <p className="text-gray-300 leading-relaxed">
                  NOVA tells you exactly when to take your packet before a raid or scrim.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-[#1B1B1B] border-[#00A3FF]/30 hover:border-[#00A3FF] transition-all duration-300 group hover:shadow-lg hover:shadow-[#00A3FF]/20">
              <CardContent className="p-8 text-center">
                <Target className="w-16 h-16 text-[#00A3FF] mx-auto mb-6 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-2xl font-bold mb-4 text-[#00A3FF]">Mix Mastery</h3>
                <p className="text-gray-300 leading-relaxed">
                  Get flavor tweaks, hydration ratios, and tips for smoother absorption.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-[#1B1B1B] border-[#00A3FF]/30 hover:border-[#00A3FF] transition-all duration-300 group hover:shadow-lg hover:shadow-[#00A3FF]/20">
              <CardContent className="p-8 text-center">
                <Droplets className="w-16 h-16 text-[#00A3FF] mx-auto mb-6 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-2xl font-bold mb-4 text-[#00A3FF]">Performance Hacks</h3>
                <p className="text-gray-300 leading-relaxed">
                  Unlock routines that sharpen focus and extend endurance.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Live Demo Block */}
      <section className="bg-[#0A0A0A] py-20 px-4 relative overflow-hidden">
        {/* Scrolling code rain effect */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-b from-[#00A3FF]/5 via-transparent to-[#00A3FF]/5"></div>
        </div>

        <div className="max-w-4xl mx-auto relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-6xl font-bold mb-6">See NOVA in Action</h2>
          </div>

          <Card className="bg-[#1B1B1B] border-[#00A3FF]/30 mb-8">
            <CardContent className="p-8">
              <div className="space-y-6">
                <div className="flex justify-start">
                  <div className="bg-gray-700 rounded-lg px-4 py-3 max-w-md">
                    <p className="text-gray-300">How soon before queue should I take LOOTBOX?</p>
                  </div>
                </div>

                <div className="flex justify-end">
                  <div className="bg-[#00A3FF] rounded-lg px-4 py-3 max-w-md">
                    <p className="text-black font-medium">
                      10–20 minutes before your match. Mix with 16oz cold water for steady energy and hydration boost.
                    </p>
                  </div>
                </div>

                <div className="flex justify-start">
                  <div className="bg-gray-700 rounded-lg px-4 py-3 max-w-md">
                    <p className="text-gray-300">What if I'm streaming late into the night?</p>
                  </div>
                </div>

                <div className="flex justify-end">
                  <div className="bg-[#00A3FF] rounded-lg px-4 py-3 max-w-md">
                    <p className="text-black font-medium">
                      Go half-packet to keep clarity without disrupting your sleep cycle.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="text-center">
            <Button
              size="lg"
              className="bg-[#00A3FF] hover:bg-[#0088CC] text-black px-8 py-4 text-lg font-semibold shadow-lg shadow-[#00A3FF]/25"
            >
              Chat with NOVA
            </Button>
          </div>
        </div>
      </section>

      {/* NOVA + The LootVerse */}
      <section className="bg-gradient-to-b from-[#0A0A0A] via-[#0B1220] to-[#1B0A0A] py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Badge
                variant="outline"
                className="border-[#00A3FF] text-[#00A3FF] bg-[#00A3FF]/10 text-sm font-mono tracking-wider mb-6"
              >
                THE LOOTVERSE
              </Badge>

              <h2 className="text-4xl md:text-6xl font-bold mb-6">
                NOVA isn't just software. <span className="text-[#00A3FF]">She's lore.</span>
              </h2>

              <p className="text-lg text-gray-300 leading-relaxed">
                In the LootVerse, NOVA is your strategist, your signal, your edge. She embodies the protocol
                itself—guiding you through missions, loot drops, and optimization cues. As LOOTBOX evolves, so will
                she—becoming smarter, more integrated, and more essential.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-gradient-to-br from-[#00A3FF]/20 to-red-500/10 p-8 rounded-2xl border border-[#00A3FF]/30">
                <img src="/ai-hologram-guide.png" alt="NOVA in the LootVerse" className="mx-auto rounded-lg" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Founder's Perk */}
      <section className="bg-[#2C2C2C] py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-6">Exclusive to Founders.</h2>
            <p className="text-xl text-gray-300">Unlock messages, missions, and hacks direct from NOVA.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-[#1B1B1B] border-[#00A3FF]/30 hover:shadow-lg hover:shadow-[#00A3FF]/20 transition-all duration-300">
              <CardContent className="p-8 text-center">
                <MessageCircle className="w-16 h-16 text-[#00A3FF] mx-auto mb-6" />
                <h3 className="text-2xl font-bold mb-4 text-[#00A3FF]">AI-Powered Tips</h3>
                <p className="text-gray-300 leading-relaxed">Tailored performance advice.</p>
              </CardContent>
            </Card>

            <Card className="bg-[#1B1B1B] border-[#00A3FF]/30 hover:shadow-lg hover:shadow-[#00A3FF]/20 transition-all duration-300">
              <CardContent className="p-8 text-center">
                <Star className="w-16 h-16 text-[#00A3FF] mx-auto mb-6" />
                <h3 className="text-2xl font-bold mb-4 text-[#00A3FF]">Lore Drops</h3>
                <p className="text-gray-300 leading-relaxed">Hidden chapters of the LootVerse.</p>
              </CardContent>
            </Card>

            <Card className="bg-[#1B1B1B] border-[#00A3FF]/30 hover:shadow-lg hover:shadow-[#00A3FF]/20 transition-all duration-300">
              <CardContent className="p-8 text-center">
                <Zap className="w-16 h-16 text-[#00A3FF] mx-auto mb-6" />
                <h3 className="text-2xl font-bold mb-4 text-[#00A3FF]">XP Boosts</h3>
                <p className="text-gray-300 leading-relaxed">Gamified surprises only founders see.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Block */}
      <section className="bg-[#0A0A0A] py-20 px-4 relative">
        {/* Pulsing blue edge animation */}
        <div className="absolute inset-0 border-2 border-[#00A3FF]/30 animate-pulse"></div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Ready to talk to your <span className="text-[#00A3FF]">AI co-pilot?</span>
          </h2>

          <p className="text-xl text-gray-300 mb-12">NOVA's online 24/7 to optimize your protocol and your grind.</p>

          <Button
            size="lg"
            className="bg-[#00A3FF] hover:bg-[#0088CC] hover:shadow-[#00A3FF]/50 text-black px-12 py-6 text-xl font-semibold shadow-lg shadow-[#00A3FF]/25 transition-all duration-300"
          >
            Chat With NOVA
          </Button>
        </div>
      </section>

      {/* Footer XP Bar */}
      <footer className="bg-[#0A0A0A] border-t border-gray-800 py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-2xl font-bold text-[#00A3FF] mb-4">NOVA</h3>
              <p className="text-gray-400 text-sm">Your AI co-pilot for peak performance.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">AI Features</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <a href="#" className="hover:text-[#00A3FF] transition-colors">
                    Protocol Timing
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#00A3FF] transition-colors">
                    Mix Optimization
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#00A3FF] transition-colors">
                    Performance Tips
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">LootVerse</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <a href="#" className="hover:text-[#00A3FF] transition-colors">
                    Lore
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#00A3FF] transition-colors">
                    Missions
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#00A3FF] transition-colors">
                    Community
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <a href="/product" className="hover:text-[#00A3FF] transition-colors">
                    Join Protocol
                  </a>
                </li>
                <li>
                  <a href="/" className="hover:text-[#00A3FF] transition-colors">
                    Home
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* XP Bar - Electric Blue for NOVA */}
          <div className="border-t border-gray-800 pt-8">
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm text-gray-400">NOVA Protocol Loading...</span>
              <span className="text-sm text-[#00A3FF]">100% Complete</span>
            </div>
            <div className="w-full bg-gray-800 rounded-full h-2">
              <div className="bg-gradient-to-r from-[#00A3FF] to-[#0088CC] h-2 rounded-full w-full animate-pulse"></div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
