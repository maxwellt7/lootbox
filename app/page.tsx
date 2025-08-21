import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, Zap, Target, Droplets, Shield, Activity } from "lucide-react"
import Navigation from "@/components/navigation"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0A0A0A] to-[#1B1B1B] text-white overflow-x-hidden">
      <Navigation />

      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col items-center justify-center px-4 py-20 pt-32">
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

        <div className="relative z-10 text-center max-w-4xl mx-auto">
          <div className="mb-6">
            <Badge
              variant="outline"
              className="border-red-500 text-red-500 bg-red-500/10 text-sm font-mono tracking-wider"
            >
              PRECISION • POWER • PERFORMANCE
            </Badge>
          </div>

          <h1 className="text-6xl md:text-8xl font-bold mb-6 tracking-tight">
            LOOTBOX: <span className="text-red-500">DIALED IN.</span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
            Crash-free energy, razor focus, and elite-level hydration engineered for gamers who grind.
          </p>

          <p className="text-lg text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed">
            Enter a performance protocol that keeps you locked-in longer—no jitters, no sugar rollercoaster, just
            smooth, sustained output backed by clean hydration and gamer-tuned nootropics.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button
              size="lg"
              className="bg-red-500 hover:bg-red-600 text-white px-8 py-4 text-lg font-semibold shadow-lg shadow-red-500/25 hover:shadow-red-500/40 transition-all duration-300"
              asChild
            >
              <a href="/product">Join the Protocol</a>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-red-500 text-red-500 hover:bg-red-500 hover:text-white px-8 py-4 text-lg font-semibold transition-all duration-300 bg-transparent"
              asChild
            >
              <a href="/chat">Chat with NOVA</a>
            </Button>
          </div>

          {/* Counter Icons */}
          <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <Zap className="w-12 h-12 text-red-500 mx-auto mb-3" />
              <p className="text-sm font-semibold text-gray-300">ENERGY</p>
            </div>
            <div className="text-center">
              <Target className="w-12 h-12 text-red-500 mx-auto mb-3" />
              <p className="text-sm font-semibold text-gray-300">FOCUS</p>
            </div>
            <div className="text-center">
              <Droplets className="w-12 h-12 text-red-500 mx-auto mb-3" />
              <p className="text-sm font-semibold text-gray-300">HYDRATION</p>
            </div>
          </div>
        </div>
      </section>

      {/* Proof Strip */}
      <section className="bg-[#2C2C2C] border-t border-b border-gray-600 py-8">
        <div className="max-w-7xl mx-auto px-4">
          <h3 className="text-center text-lg font-semibold mb-8 text-gray-300">
            Trusted by Players Who Take Winning Seriously
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 text-center">
            <div className="flex flex-col items-center">
              <Zap className="w-8 h-8 text-red-500 mb-2" />
              <p className="text-sm text-gray-300">Energy that doesn't spike & crash</p>
            </div>
            <div className="flex flex-col items-center">
              <Target className="w-8 h-8 text-red-500 mb-2" />
              <p className="text-sm text-gray-300">Hyper-focus under pressure</p>
            </div>
            <div className="flex flex-col items-center">
              <Droplets className="w-8 h-8 text-red-500 mb-2" />
              <p className="text-sm text-gray-300">Hydration for marathon sessions</p>
            </div>
            <div className="flex flex-col items-center">
              <Shield className="w-8 h-8 text-red-500 mb-2" />
              <p className="text-sm text-gray-300">Steady hands—no jitters</p>
            </div>
            <div className="flex flex-col items-center">
              <Activity className="w-8 h-8 text-red-500 mb-2" />
              <p className="text-sm text-gray-300">Endurance you can feel</p>
            </div>
          </div>
        </div>
      </section>

      {/* The Inside - Interactive Hex Grid */}
      <section className="bg-[#0A0A0A] py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge variant="outline" className="border-red-500 text-red-500 bg-red-500/10 mb-4">
              WHAT'S INSIDE
            </Badge>
            <h2 className="text-4xl md:text-6xl font-bold mb-6">Power, without the price of a crash.</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              A balanced stack that fuels long play—with clarity, not chaos.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card className="bg-[#1B1B1B] border-gray-700 hover:border-red-500 transition-all duration-300 group hover:shadow-lg hover:shadow-red-500/20">
              <CardContent className="p-8 text-center">
                <Zap className="w-16 h-16 text-red-500 mx-auto mb-6 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-2xl font-bold mb-4 text-red-500">Energy</h3>
                <p className="text-gray-300 leading-relaxed">
                  Consistent power so you play at 100% from warm-up to victory screen—no yo-yo spikes, no slump.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-[#1B1B1B] border-gray-700 hover:border-red-500 transition-all duration-300 group hover:shadow-lg hover:shadow-red-500/20">
              <CardContent className="p-8 text-center">
                <Target className="w-16 h-16 text-red-500 mx-auto mb-6 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-2xl font-bold mb-4 text-red-500">Focus</h3>
                <p className="text-gray-300 leading-relaxed">
                  Sharper decisions, faster reactions, and tunnel vision when the pressure spikes.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-[#1B1B1B] border-gray-700 hover:border-red-500 transition-all duration-300 group hover:shadow-lg hover:shadow-red-500/20">
              <CardContent className="p-8 text-center">
                <Droplets className="w-16 h-16 text-red-500 mx-auto mb-6 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-2xl font-bold mb-4 text-red-500">Hydration/Drive</h3>
                <p className="text-gray-300 leading-relaxed">
                  Electrolytes tuned for peak sessions—stay fluid, stay lethal.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <p className="text-lg text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              LOOTBOX isn't another sugar bomb or caffeine grenade. It's a clean, gamer-built protocol for sustained
              energy, cognitive precision, and hydration you actually feel round after round.
            </p>
            <Button
              size="lg"
              className="bg-red-500 hover:bg-red-600 text-white px-8 py-4 text-lg font-semibold shadow-lg shadow-red-500/25"
              asChild
            >
              <a href="/product">Build My Stack</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Ingredients Section */}
      <section className="bg-gradient-to-b from-[#2C2C2C] to-[#444444] py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge variant="outline" className="border-red-500 text-red-500 bg-red-500/10 mb-4">
              THE FORMULA
            </Badge>
            <h2 className="text-4xl md:text-6xl font-bold mb-6">Built for performance. Labeled like we mean it.</h2>
            <p className="text-xl text-gray-300">Every scoop is purpose-built for gamers—no fluff.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-red-500">Key Actives (per serving):</h3>
              <div className="space-y-3 text-gray-300">
                <div className="flex justify-between">
                  <span>Sodium</span>
                  <span className="text-red-500 font-semibold">500 mg</span>
                </div>
                <div className="flex justify-between">
                  <span>Potassium</span>
                  <span className="text-red-500 font-semibold">200 mg</span>
                </div>
                <div className="flex justify-between">
                  <span>Magnesium</span>
                  <span className="text-red-500 font-semibold">100 mg</span>
                </div>
                <div className="flex justify-between">
                  <span>GABA</span>
                  <span className="text-red-500 font-semibold">100 mg</span>
                </div>
                <div className="flex justify-between">
                  <span>Rhodiola Rosea Extract</span>
                  <span className="text-red-500 font-semibold">200 mg</span>
                </div>
                <div className="flex justify-between">
                  <span>L-Theanine</span>
                  <span className="text-red-500 font-semibold">100 mg</span>
                </div>
                <div className="flex justify-between">
                  <span>Alpha GPC</span>
                  <span className="text-red-500 font-semibold">125 mg</span>
                </div>
              </div>

              <div className="mt-8 p-4 bg-[#1B1B1B] rounded-lg border border-gray-600">
                <p className="text-sm text-gray-400 mb-2">
                  <strong className="text-red-500">Flavor:</strong> Raspberry
                </p>
                <p className="text-sm text-gray-400 mb-2">
                  <strong className="text-red-500">Mix:</strong> 16 fl oz for optimal taste + absorption
                </p>
                <p className="text-sm text-gray-400">
                  <strong className="text-red-500">Other ingredients:</strong> Natural flavor, citric acid, stevia
                </p>
              </div>
            </div>

            <div className="text-center">
              <div className="bg-[#1B1B1B] p-8 rounded-lg border border-gray-600 mb-6">
                <img src="/placeholder-m18i3.png" alt="LOOTBOX Product" className="mx-auto mb-4 rounded-lg" />
              </div>
              <p className="text-gray-300 leading-relaxed">
                Clean label. No nonsense. Designed for focus, stamina, and smooth control—without jitter or crash.
              </p>
              <Button
                variant="outline"
                className="border-red-500 text-red-500 hover:bg-red-500 hover:text-white mt-6 bg-transparent"
              >
                See the Science
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* The Protocol */}
      <section className="bg-[#1B1B1B] py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge variant="outline" className="border-red-500 text-red-500 bg-red-500/10 mb-4">
              THE PROTOCOL
            </Badge>
            <h2 className="text-4xl md:text-6xl font-bold mb-6">Lock-in made simple.</h2>
            <p className="text-xl text-gray-300">A ritual designed for smooth, sustained output.</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 mb-12">
            {[
              { icon: "🥄", title: "Scoop", desc: "One serving 10–20 minutes before queue." },
              { icon: "🧪", title: "Hydrate", desc: "Mix with 16 oz cold water for balanced electrolytes." },
              { icon: "⚡", title: "Engage", desc: "Feel steady energy and sharper decisions—no jitters, no crash." },
              { icon: "🔄", title: "Repeat", desc: "Subscribe so your stack never breaks (save & unlock bonuses)." },
            ].map((step, index) => (
              <Card key={index} className="bg-[#0A0A0A] border-gray-700 text-center">
                <CardContent className="p-6">
                  <div className="text-4xl mb-4">{step.icon}</div>
                  <h3 className="text-xl font-bold mb-3 text-red-500">{step.title}</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">{step.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button
              size="lg"
              className="bg-red-500 hover:bg-red-600 text-white px-8 py-4 text-lg font-semibold"
              asChild
            >
              <a href="/product">Start My Protocol</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="bg-[#0A0A0A] py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge variant="outline" className="border-red-500 text-red-500 bg-red-500/10 mb-4">
              COMMUNITY WINS
            </Badge>
            <h2 className="text-4xl md:text-6xl font-bold mb-6">Locked-in and lethal.</h2>
            <p className="text-xl text-gray-300">Real gamers. Real stamina. Real focus.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              { quote: "No crash mid-raid. Reactions felt crisp deep into hour 4.", rating: 5 },
              { quote: "Smooth energy—hands steady, aim steady.", rating: 5 },
              { quote: "Hydration finally feels like an upgrade, not an afterthought.", rating: 5 },
            ].map((testimonial, index) => (
              <Card key={index} className="bg-[#1B1B1B] border-gray-700">
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-red-500 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 italic leading-relaxed">"{testimonial.quote}"</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button
              variant="outline"
              className="border-red-500 text-red-500 hover:bg-red-500 hover:text-white bg-transparent"
              asChild
            >
              <a href="/product">Join the Protocol</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0A0A0A] border-t border-gray-800 py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-2xl font-bold text-red-500 mb-4">LOOTBOX</h3>
              <p className="text-gray-400 text-sm">Designed by gamers. Built for the grind.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <a href="/product" className="hover:text-red-500 transition-colors">
                    Shop
                  </a>
                </li>
                <li>
                  <a href="/product" className="hover:text-red-500 transition-colors">
                    The Protocol
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-red-500 transition-colors">
                    Ingredients & Research
                  </a>
                </li>
                <li>
                  <a href="/product" className="hover:text-red-500 transition-colors">
                    Preorder
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <a href="/chat" className="hover:text-red-500 transition-colors">
                    NOVA
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-red-500 transition-colors">
                    Support/FAQ
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-red-500 transition-colors">
                    Community
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-red-500 transition-colors">
                    Blog
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <a href="#" className="hover:text-red-500 transition-colors">
                    Privacy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-red-500 transition-colors">
                    Terms
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* XP Bar */}
          <div className="border-t border-gray-800 pt-8">
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm text-gray-400">Loading Protocol...</span>
              <span className="text-sm text-red-500">100% Complete</span>
            </div>
            <div className="w-full bg-gray-800 rounded-full h-2">
              <div className="bg-gradient-to-r from-red-500 to-red-600 h-2 rounded-full w-full animate-pulse"></div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
