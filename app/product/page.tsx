"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, Zap, Target, Droplets, Activity, ChevronDown, ChevronUp } from "lucide-react"
import { useState } from "react"
import Navigation from "@/components/navigation"
import CartCheckout from "@/components/cart-checkout"

export default function ProductPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const [isCartOpen, setIsCartOpen] = useState(false)

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  const openCart = () => {
    setIsCartOpen(true)
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0A0A0A] to-[#1B1B1B] text-white overflow-x-hidden">
      <Navigation />

      {/* Hero Block - Product Overview */}
      <section className="relative min-h-screen flex items-center justify-center px-4 py-20 pt-32">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 via-transparent to-red-500/5"></div>
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23FF0000' fillOpacity='0.1'%3E%3Cpath d='M30 30l15-15v30l-15-15zm-15 0L0 15v30l15-15z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          ></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Product Image */}
          <div className="text-center">
            <div className="relative">
              <img
                src="/lootbox-supplement.png"
                alt="LOOTBOX Premium Gaming Supplement Box"
                className="mx-auto max-w-md w-full drop-shadow-2xl"
              />
              <div className="absolute inset-0 bg-red-500/20 blur-3xl -z-10 animate-pulse"></div>
            </div>
          </div>

          {/* Right: Product Info */}
          <div>
            <Badge
              variant="outline"
              className="border-red-500 text-red-500 bg-red-500/10 text-sm font-mono tracking-wider mb-6"
            >
              PREMIUM FORMULA
            </Badge>

            <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
              LOOTBOX: <span className="text-red-500">DIALED IN ENERGY.</span>
            </h1>

            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Crash-free focus, elite hydration, and sustained endurance—for gamers who refuse compromise.
            </p>

            <div className="mb-8">
              <div className="text-3xl font-bold text-red-500 mb-2">From $39 / box</div>
              <div className="text-lg text-gray-400">or $33 with subscription</div>
            </div>

            <div className="space-y-3 mb-8">
              <div className="flex items-center gap-3">
                <Zap className="w-5 h-5 text-red-500" />
                <span className="text-gray-300">
                  <strong>Energy without crashes</strong> — smooth, sustained stamina
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Target className="w-5 h-5 text-red-500" />
                <span className="text-gray-300">
                  <strong>Sharper reaction times</strong> — precision when the stakes spike
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Droplets className="w-5 h-5 text-red-500" />
                <span className="text-gray-300">
                  <strong>Hydration engineered for marathons</strong> — electrolytes + clarity
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Activity className="w-5 h-5 text-red-500" />
                <span className="text-gray-300">
                  <strong>Cognitive edge</strong> — focus enhancers tuned for gaming
                </span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                onClick={openCart}
                className="bg-red-500 hover:bg-red-600 text-white px-8 py-4 text-lg font-semibold shadow-lg shadow-red-500/25 hover:shadow-red-500/40 transition-all duration-300"
              >
                Join the Protocol
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={openCart}
                className="border-red-500 text-red-500 hover:bg-red-500 hover:text-white px-8 py-4 text-lg font-semibold transition-all duration-300 bg-transparent"
              >
                Subscribe & Save
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Transformation Promise Block */}
      <section className="bg-[#2C2C2C] border-t border-b border-gray-600 py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-6">From fatigue to locked-in.</h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              You're not just buying powder. You're buying control—over your energy, focus, and hydration. No more
              fatigue, no more brain fog, no more mid-game collapse.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-[#1B1B1B] border-gray-700 text-center">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4 text-red-500">Before</h3>
                <div className="space-y-2 text-gray-400">
                  <p>Jitters</p>
                  <p>Energy crashes</p>
                  <p>Sluggish focus</p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-[#1B1B1B] border-gray-700 text-center border-red-500">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4 text-red-500">After</h3>
                <div className="space-y-2 text-gray-300">
                  <p>Smooth stamina</p>
                  <p>Sharper reflexes</p>
                  <p>Mental clarity</p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-[#1B1B1B] border-gray-700 text-center">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4 text-red-500">Competitive Edge</h3>
                <div className="space-y-2 text-gray-300">
                  <p>Outlast teammates</p>
                  <p>Outperform rivals</p>
                  <p>Enjoy gaming again</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Ingredient Transparency */}
      <section className="bg-gradient-to-b from-[#0A0A0A] to-[#1B1B1B] py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge variant="outline" className="border-red-500 text-red-500 bg-red-500/10 mb-4">
              FORMULA BREAKDOWN
            </Badge>
            <h2 className="text-4xl md:text-6xl font-bold mb-6">Every scoop has a mission.</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="space-y-6">
                <div className="p-6 bg-[#1B1B1B] rounded-lg border border-gray-700">
                  <h3 className="text-xl font-bold text-red-500 mb-4">Electrolytes (Sodium, Potassium, Magnesium)</h3>
                  <p className="text-gray-300">Hydration balance for longer play.</p>
                </div>

                <div className="p-6 bg-[#1B1B1B] rounded-lg border border-gray-700">
                  <h3 className="text-xl font-bold text-red-500 mb-4">
                    Nootropics (Alpha GPC, L-Theanine, DMAE, GABA)
                  </h3>
                  <p className="text-gray-300">Mental clarity, focus, stress control.</p>
                </div>

                <div className="p-6 bg-[#1B1B1B] rounded-lg border border-gray-700">
                  <h3 className="text-xl font-bold text-red-500 mb-4">Botanicals (Rhodiola Rosea)</h3>
                  <p className="text-gray-300">Stamina + resilience.</p>
                </div>

                <div className="p-6 bg-[#1B1B1B] rounded-lg border border-gray-700">
                  <h3 className="text-xl font-bold text-red-500 mb-4">Vitamins (B1, B6)</h3>
                  <p className="text-gray-300">Brain + nerve support.</p>
                </div>
              </div>

              <p className="text-center text-gray-400 mt-8 italic">
                Nothing hidden. Every ingredient is gamer-tested, formula-verified.
              </p>

              <div className="text-center mt-6">
                <Button
                  variant="outline"
                  onClick={openCart}
                  className="border-red-500 text-red-500 hover:bg-red-500 hover:text-white bg-transparent"
                >
                  See Full Research
                </Button>
              </div>
            </div>

            <div className="text-center">
              <div className="relative">
                <img src="/placeholder-i6mke.png" alt="LOOTBOX Formula Box" className="mx-auto max-w-sm w-full" />
                <div className="absolute inset-0 bg-red-500/10 blur-2xl -z-10"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How To Use - The Protocol */}
      <section className="bg-[#1B1B1B] py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge variant="outline" className="border-red-500 text-red-500 bg-red-500/10 mb-4">
              THE PROTOCOL
            </Badge>
            <h2 className="text-4xl md:text-6xl font-bold mb-6">Simple ritual. Elite outcome.</h2>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <Card className="bg-[#0A0A0A] border-gray-700 text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-red-500">1</span>
                </div>
                <h3 className="text-xl font-bold mb-4 text-red-500">Packet</h3>
                <p className="text-gray-300 text-sm leading-relaxed">1 serving 10–20 min before queue.</p>
              </CardContent>
            </Card>

            <Card className="bg-[#0A0A0A] border-gray-700 text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-red-500">2</span>
                </div>
                <h3 className="text-xl font-bold mb-4 text-red-500">Shake</h3>
                <p className="text-gray-300 text-sm leading-relaxed">Mix with 16oz cold water.</p>
              </CardContent>
            </Card>

            <Card className="bg-[#0A0A0A] border-gray-700 text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-red-500">3</span>
                </div>
                <h3 className="text-xl font-bold mb-4 text-red-500">Engage</h3>
                <p className="text-gray-300 text-sm leading-relaxed">Feel energy + clarity kick in without jitters.</p>
              </CardContent>
            </Card>

            <Card className="bg-[#0A0A0A] border-gray-700 text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-red-500">4</span>
                </div>
                <h3 className="text-xl font-bold mb-4 text-red-500">Repeat</h3>
                <p className="text-gray-300 text-sm leading-relaxed">Subscribe to auto-ship—never miss a stack.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Social Proof Carousel */}
      <section className="bg-[#2C2C2C] py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge variant="outline" className="border-red-500 text-red-500 bg-red-500/10 mb-4">
              COMMUNITY WINS
            </Badge>
            <h2 className="text-4xl md:text-6xl font-bold mb-6">Gamers say it best.</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card className="bg-[#1B1B1B] border-gray-700">
              <CardContent className="p-8">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-red-500 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 italic leading-relaxed mb-4">
                  "No more managing energy crashes—I can focus the entire session."
                </p>
                <p className="text-sm text-gray-400">— Pro Gamer</p>
              </CardContent>
            </Card>

            <Card className="bg-[#1B1B1B] border-gray-700">
              <CardContent className="p-8">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-red-500 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 italic leading-relaxed mb-4">"Hydration + focus in one? Game-changer."</p>
                <p className="text-sm text-gray-400">— Streamer</p>
              </CardContent>
            </Card>

            <Card className="bg-[#1B1B1B] border-gray-700">
              <CardContent className="p-8">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-red-500 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 italic leading-relaxed mb-4">"Hands steady, mind sharp—no jitters."</p>
                <p className="text-sm text-gray-400">— Esports Player</p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <Button
              variant="outline"
              onClick={openCart}
              className="border-red-500 text-red-500 hover:bg-red-500 hover:text-white bg-transparent"
            >
              Read More Wins
            </Button>
          </div>
        </div>
      </section>

      {/* Subscription Offer Block */}
      <section className="bg-[#0A0A0A] py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Badge variant="outline" className="border-red-500 text-red-500 bg-red-500/10 mb-4">
                SUBSCRIPTION
              </Badge>
              <h2 className="text-4xl md:text-6xl font-bold mb-6">Never run out of your edge.</h2>
              <p className="text-xl text-gray-300 mb-8">Auto-ship saves money, XP, and sanity.</p>

              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  <span className="text-gray-300">Save 15% every box</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  <span className="text-gray-300">Founders earn XP + loot drop perks</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  <span className="text-gray-300">Pause or cancel anytime</span>
                </div>
              </div>

              <Button
                size="lg"
                onClick={openCart}
                className="bg-red-500 hover:bg-red-600 text-white px-8 py-4 text-lg font-semibold shadow-lg shadow-red-500/25 hover:shadow-red-500/40 transition-all duration-300"
              >
                Subscribe & Lock-In
              </Button>
            </div>

            <div className="bg-[#1B1B1B] p-8 rounded-lg border border-red-500">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-red-500 mb-2">Pricing Options</h3>
              </div>

              <div className="space-y-4">
                <div className="flex justify-between items-center p-4 bg-[#2C2C2C] rounded-lg">
                  <div>
                    <p className="font-semibold">One-Time Purchase</p>
                    <p className="text-sm text-gray-400">30 servings</p>
                  </div>
                  <div className="text-right">
                    <p className="text-2xl font-bold">$39</p>
                  </div>
                </div>

                <div className="flex justify-between items-center p-4 bg-red-500/20 rounded-lg border border-red-500">
                  <div>
                    <p className="font-semibold text-red-500">Subscription</p>
                    <p className="text-sm text-gray-400">30 servings • Auto-ship</p>
                  </div>
                  <div className="text-right">
                    <p className="text-2xl font-bold text-red-500">$33</p>
                    <p className="text-sm text-gray-400 line-through">$39</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-[#1B1B1B] py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <Badge variant="outline" className="border-red-500 text-red-500 bg-red-500/10 mb-4">
              FAQ
            </Badge>
            <h2 className="text-4xl md:text-6xl font-bold mb-6">Questions? We got you.</h2>
          </div>

          <div className="space-y-4">
            {[
              {
                question: "Will I crash?",
                answer: "Nope. Formula engineered for smooth, steady energy.",
              },
              {
                question: "Is it just another energy drink?",
                answer: "No sugar bombs, no empty hype—just clean hydration + nootropics.",
              },
              {
                question: "Is it safe for marathons?",
                answer: "Built for endurance, reaction, and clarity.",
              },
              {
                question: "How does the subscription work?",
                answer: "Auto-ship every 30 days, save 15%, pause or cancel anytime. No commitments, just convenience.",
              },
            ].map((faq, index) => (
              <Card key={index} className="bg-[#0A0A0A] border-gray-700">
                <CardContent className="p-0">
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full p-6 text-left flex justify-between items-center hover:bg-[#1B1B1B] transition-colors"
                  >
                    <h3 className="text-lg font-semibold text-red-500">{faq.question}</h3>
                    {openFaq === index ? (
                      <ChevronUp className="w-5 h-5 text-red-500" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-red-500" />
                    )}
                  </button>
                  {openFaq === index && (
                    <div className="px-6 pb-6">
                      <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="bg-[#0A0A0A] py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-8">Ready to Level Up?</h2>
          <p className="text-xl text-gray-300 mb-12">Join thousands of gamers who've upgraded their energy game.</p>

          <Button
            size="lg"
            onClick={openCart}
            className="bg-red-500 hover:bg-red-600 text-white px-12 py-6 text-xl font-semibold shadow-lg shadow-red-500/25 hover:shadow-red-500/40 transition-all duration-300 mb-8"
          >
            Join the Protocol
          </Button>

          {/* XP Bar */}
          <div className="max-w-2xl mx-auto">
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm text-gray-400">Loading Protocol...</span>
              <span className="text-sm text-red-500">100% Complete</span>
            </div>
            <div className="w-full bg-gray-800 rounded-full h-3">
              <div className="bg-gradient-to-r from-red-500 to-red-600 h-3 rounded-full w-full animate-pulse"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Cart Checkout */}
      <CartCheckout isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </div>
  )
}
