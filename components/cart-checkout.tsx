"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  X,
  Plus,
  Minus,
  Shield,
  Zap,
  Droplets,
  Target,
  ChevronDown,
  ChevronUp,
  Check,
  Lock,
  CreditCard,
} from "lucide-react"
import { useState } from "react"

interface CartCheckoutProps {
  isOpen: boolean
  onClose: () => void
}

export default function CartCheckout({ isOpen, onClose }: CartCheckoutProps) {
  const [step, setStep] = useState<"cart" | "shipping" | "payment" | "confirmation">("cart")
  const [quantity, setQuantity] = useState(1)
  const [isSubscription, setIsSubscription] = useState(false)
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const [shippingOption, setShippingOption] = useState("standard")

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  const basePrice = 39
  const subscriptionPrice = 33
  const currentPrice = isSubscription ? subscriptionPrice : basePrice
  const subtotal = currentPrice * quantity
  const freeShippingThreshold = 50
  const shippingCost = subtotal >= freeShippingThreshold ? 0 : 8
  const total = subtotal + shippingCost

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm">
      <div className="fixed right-0 top-0 h-full w-full max-w-4xl bg-gradient-to-b from-[#0A0A0A] to-[#1B1B1B] shadow-2xl overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 bg-[#0A0A0A]/95 backdrop-blur-sm border-b border-gray-700 p-6 flex items-center justify-between">
          <div className="flex items-center gap-4">
            {/* Progress Tracker */}
            <div className="flex items-center gap-2 text-sm">
              <div className={`flex items-center gap-2 ${step === "cart" ? "text-red-500" : "text-gray-400"}`}>
                <div
                  className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${step === "cart" ? "bg-red-500 text-white" : "bg-gray-700"}`}
                >
                  🛒
                </div>
                <span>Cart</span>
              </div>
              <div className="w-8 h-px bg-gray-600"></div>
              <div className={`flex items-center gap-2 ${step === "shipping" ? "text-red-500" : "text-gray-400"}`}>
                <div
                  className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${step === "shipping" ? "bg-red-500 text-white" : "bg-gray-700"}`}
                >
                  🚚
                </div>
                <span>Shipping</span>
              </div>
              <div className="w-8 h-px bg-gray-600"></div>
              <div className={`flex items-center gap-2 ${step === "payment" ? "text-red-500" : "text-gray-400"}`}>
                <div
                  className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${step === "payment" ? "bg-red-500 text-white" : "bg-gray-700"}`}
                >
                  ✅
                </div>
                <span>Review & Pay</span>
              </div>
            </div>
          </div>
          <Button variant="ghost" size="sm" onClick={onClose} className="text-gray-400 hover:text-white">
            <X className="w-5 h-5" />
          </Button>
        </div>

        {/* Cart Step */}
        {step === "cart" && (
          <div className="p-6">
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Left: Cart Items */}
              <div className="lg:col-span-2 space-y-6">
                <div>
                  <h2 className="text-3xl font-bold mb-2">Loadout locked.</h2>
                  <p className="text-gray-300">Performance you can feel—without the crash, fog, or mid-match slump.</p>
                </div>

                {/* Product Item */}
                <Card className="bg-[#2C2C2C] border-gray-600">
                  <CardContent className="p-6">
                    <div className="flex gap-4">
                      <img src="/lootbox-supplement.png" alt="LOOTBOX" className="w-20 h-20 object-contain" />
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-red-500 mb-2">LOOTBOX Premium Formula</h3>
                        <p className="text-sm text-gray-300 mb-2">
                          <strong>Crash-free energy. Hyper-focus. Elite hydration.</strong> Engineered for long
                          sessions.
                        </p>
                        <p className="text-sm text-gray-400 mb-2">
                          Raspberry • mix 16 oz cold water for best taste + absorption.
                        </p>
                        <p className="text-xs text-gray-500">No jitters, no sugar bomb—smooth, sustained output.</p>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-red-500 mb-2">${currentPrice}</div>
                        <div className="flex items-center gap-2 mb-2">
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => setQuantity(Math.max(1, quantity - 1))}
                            className="w-8 h-8 p-0 border-gray-600"
                          >
                            <Minus className="w-4 h-4" />
                          </Button>
                          <span className="w-8 text-center">{quantity}</span>
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => setQuantity(quantity + 1)}
                            className="w-8 h-8 p-0 border-gray-600"
                          >
                            <Plus className="w-4 h-4" />
                          </Button>
                        </div>
                        <Button variant="ghost" size="sm" className="text-gray-400 hover:text-red-500 text-xs">
                          Remove
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Smart Upsells */}
                <div className="bg-[#1B1B1B] p-6 rounded-lg border border-gray-700">
                  <h3 className="text-xl font-bold mb-4 text-red-500">Boost Your Protocol</h3>
                  <div className="grid md:grid-cols-3 gap-4">
                    <Card className="bg-[#2C2C2C] border-gray-600">
                      <CardContent className="p-4 text-center">
                        <h4 className="font-bold text-sm mb-2 text-white">Founder's Card</h4>
                        <p className="text-xs text-gray-400 mb-3">Member pricing, loot drop priority, NOVA messages.</p>
                        <Button
                          variant="outline"
                          size="sm"
                          className="border-red-500 text-red-500 hover:bg-red-500 hover:text-white bg-transparent"
                        >
                          Add to Cart
                        </Button>
                      </CardContent>
                    </Card>
                    <Card className="bg-[#2C2C2C] border-gray-600">
                      <CardContent className="p-4 text-center">
                        <h4 className="font-bold text-sm mb-2 text-white">Two-Box Bundle</h4>
                        <p className="text-xs text-gray-400 mb-3">Save more. Never break your stack.</p>
                        <Button
                          variant="outline"
                          size="sm"
                          className="border-red-500 text-red-500 hover:bg-red-500 hover:text-white bg-transparent"
                        >
                          Add to Cart
                        </Button>
                      </CardContent>
                    </Card>
                    <Card className="bg-[#2C2C2C] border-gray-600">
                      <CardContent className="p-4 text-center">
                        <h4 className="font-bold text-sm mb-2 text-white">Shaker + Scoop Kit</h4>
                        <p className="text-xs text-gray-400 mb-3">Dialed-in mixing for smoother absorption.</p>
                        <Button
                          variant="outline"
                          size="sm"
                          className="border-red-500 text-red-500 hover:bg-red-500 hover:text-white bg-transparent"
                        >
                          Add to Cart
                        </Button>
                      </CardContent>
                    </Card>
                  </div>
                </div>

                {/* Trust & Guarantees */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="text-center">
                    <Shield className="w-8 h-8 text-red-500 mx-auto mb-2" />
                    <p className="text-xs text-gray-300">
                      <strong>No Crash Guarantee</strong> — built for smooth, steady energy.
                    </p>
                  </div>
                  <div className="text-center">
                    <Droplets className="w-8 h-8 text-red-500 mx-auto mb-2" />
                    <p className="text-xs text-gray-300">
                      <strong>Hydration Engineered</strong> — electrolytes for marathon sessions.
                    </p>
                  </div>
                  <div className="text-center">
                    <Target className="w-8 h-8 text-red-500 mx-auto mb-2" />
                    <p className="text-xs text-gray-300">
                      <strong>Focused & Calm Control</strong> — no jitters, hands stay steady.
                    </p>
                  </div>
                  <div className="text-center">
                    <Lock className="w-8 h-8 text-red-500 mx-auto mb-2" />
                    <p className="text-xs text-gray-300">
                      <strong>Secure Checkout</strong> — encrypted payments.
                    </p>
                  </div>
                </div>
              </div>

              {/* Right: Order Summary */}
              <div className="space-y-6">
                <Card className="bg-[#2C2C2C] border-gray-600">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-4 text-white">Order Summary</h3>

                    {/* Free Shipping Progress */}
                    <div className="mb-6">
                      <div className="flex justify-between text-sm mb-2">
                        <span className="text-white">Free Shipping Progress</span>
                        <span className="text-red-500">
                          {subtotal >= freeShippingThreshold
                            ? "FREE SHIPPING!"
                            : `$${freeShippingThreshold - subtotal} away`}
                        </span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-2">
                        <div
                          className="bg-red-500 h-2 rounded-full transition-all duration-300"
                          style={{ width: `${Math.min(100, (subtotal / freeShippingThreshold) * 100)}%` }}
                        ></div>
                      </div>
                    </div>

                    {/* Subscription Toggle */}
                    <div className="mb-6 p-4 bg-[#1B1B1B] rounded-lg border border-red-500/30">
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-semibold text-white">Subscribe & Save 15%</span>
                        <button
                          onClick={() => setIsSubscription(!isSubscription)}
                          className={`w-12 h-6 rounded-full transition-colors ${isSubscription ? "bg-red-500" : "bg-gray-600"}`}
                        >
                          <div
                            className={`w-5 h-5 bg-white rounded-full transition-transform ${isSubscription ? "translate-x-6" : "translate-x-0.5"}`}
                          ></div>
                        </button>
                      </div>
                      <p className="text-xs text-gray-400">Auto-ship every 30 days. Cancel anytime.</p>
                    </div>

                    {/* Discount Input */}
                    <div className="mb-6">
                      <input
                        type="text"
                        placeholder="Enter code / founder card"
                        className="w-full p-3 bg-[#1B1B1B] border border-gray-600 rounded-lg text-white placeholder-gray-400"
                      />
                    </div>

                    {/* Totals */}
                    <div className="space-y-2 mb-6">
                      <div className="flex justify-between">
                        <span className="text-white">Subtotal</span>
                        <span className="text-white">${subtotal}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-white">Shipping</span>
                        <span className="text-white">{shippingCost === 0 ? "FREE" : `$${shippingCost}`}</span>
                      </div>
                      <div className="border-t border-gray-600 pt-2">
                        <div className="flex justify-between text-xl font-bold">
                          <span className="text-white">Total</span>
                          <span className="text-red-500">${total}</span>
                        </div>
                      </div>
                    </div>

                    <Button
                      onClick={() => setStep("shipping")}
                      className="w-full bg-red-500 hover:bg-red-600 text-white p-5 text-base font-semibold shadow-lg shadow-red-500/25 py-5 px-10"
                    >
                      Proceed to Secure Checkout
                    </Button>

                    <Button variant="ghost" className="w-full mt-2 text-gray-400 hover:text-white">
                      Continue Shopping
                    </Button>
                  </CardContent>
                </Card>

                {/* Mini FAQ */}
                <Card className="bg-[#2C2C2C] border-gray-600">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-bold mb-4 text-white">Quick Questions</h3>
                    <div className="space-y-3">
                      {[
                        {
                          q: "Will I crash or feel jittery?",
                          a: "No. The stack is designed for smooth, steady energy—no shakiness, no sudden drop.",
                        },
                        {
                          q: "Good for long marathons?",
                          a: "Yes—hydration + focus support helps you stay sharp for extended play.",
                        },
                        {
                          q: "What will I actually feel?",
                          a: "More consistent stamina, clearer focus, faster reflexes—without the yo-yo fatigue.",
                        },
                      ].map((faq, index) => (
                        <div key={index}>
                          <button
                            onClick={() => toggleFaq(index)}
                            className="w-full text-left flex justify-between items-center text-sm font-semibold text-red-500"
                          >
                            {faq.q}
                            {openFaq === index ? (
                              <ChevronUp className="w-4 h-4" />
                            ) : (
                              <ChevronDown className="w-4 h-4" />
                            )}
                          </button>
                          {openFaq === index && <p className="text-xs text-gray-300 mt-2 leading-relaxed">{faq.a}</p>}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        )}

        {/* Shipping Step */}
        {step === "shipping" && (
          <div className="p-6 max-w-2xl mx-auto">
            <div className="mb-8">
              <h2 className="text-3xl font-bold mb-2">Shipping Details</h2>
              <p className="text-gray-300">Speed + clarity. Your edge ships fast.</p>
            </div>

            {/* Express Options */}
            <Card className="bg-[#2C2C2C] border-gray-600 mb-6">
              <CardContent className="p-6">
                <h3 className="text-lg font-bold mb-4">Express Checkout</h3>
                <div className="grid grid-cols-3 gap-4">
                  <Button variant="outline" className="border-gray-600 bg-black text-white hover:bg-gray-800">
                    Apple Pay
                  </Button>
                  <Button variant="outline" className="border-gray-600 bg-black text-white hover:bg-gray-800">
                    Shop Pay
                  </Button>
                  <Button variant="outline" className="border-gray-600 bg-black text-white hover:bg-gray-800">
                    Google Pay
                  </Button>
                </div>
                <p className="text-xs text-gray-400 mt-2">Fastest checkout—encrypted & private.</p>
              </CardContent>
            </Card>

            {/* Shipping Form */}
            <Card className="bg-[#2C2C2C] border-gray-600 mb-6">
              <CardContent className="p-6">
                <div className="grid md:grid-cols-2 gap-4 mb-6">
                  <input
                    type="text"
                    placeholder="First Name"
                    className="p-3 bg-[#1B1B1B] border border-gray-600 rounded-lg text-white placeholder-gray-400"
                  />
                  <input
                    type="text"
                    placeholder="Last Name"
                    className="p-3 bg-[#1B1B1B] border border-gray-600 rounded-lg text-white placeholder-gray-400"
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    className="md:col-span-2 p-3 bg-[#1B1B1B] border border-gray-600 rounded-lg text-white placeholder-gray-400"
                  />
                  <input
                    type="text"
                    placeholder="Address"
                    className="md:col-span-2 p-3 bg-[#1B1B1B] border border-gray-600 rounded-lg text-white placeholder-gray-400"
                  />
                  <input
                    type="text"
                    placeholder="Apt/Suite"
                    className="p-3 bg-[#1B1B1B] border border-gray-600 rounded-lg text-white placeholder-gray-400"
                  />
                  <input
                    type="text"
                    placeholder="City"
                    className="p-3 bg-[#1B1B1B] border border-gray-600 rounded-lg text-white placeholder-gray-400"
                  />
                  <input
                    type="text"
                    placeholder="State"
                    className="p-3 bg-[#1B1B1B] border border-gray-600 rounded-lg text-white placeholder-gray-400"
                  />
                  <input
                    type="text"
                    placeholder="ZIP"
                    className="p-3 bg-[#1B1B1B] border border-gray-600 rounded-lg text-white placeholder-gray-400"
                  />
                  <input
                    type="tel"
                    placeholder="Phone (delivery updates)"
                    className="md:col-span-2 p-3 bg-[#1B1B1B] border border-gray-600 rounded-lg text-white placeholder-gray-400"
                  />
                </div>

                {/* Delivery Options */}
                <div className="space-y-3">
                  <h4 className="font-semibold">Delivery Options</h4>
                  {[
                    { id: "standard", name: "Standard (3-5 business days)", price: "FREE" },
                    { id: "expedited", name: "Expedited (2-day)", price: "$12" },
                    { id: "founder", name: "Founder Priority", price: "$18" },
                  ].map((option) => (
                    <label
                      key={option.id}
                      className="flex items-center justify-between p-3 bg-[#1B1B1B] rounded-lg cursor-pointer"
                    >
                      <div className="flex items-center gap-3">
                        <input
                          type="radio"
                          name="shipping"
                          value={option.id}
                          checked={shippingOption === option.id}
                          onChange={(e) => setShippingOption(e.target.value)}
                          className="text-red-500"
                        />
                        <span>{option.name}</span>
                      </div>
                      <span className="text-red-500 font-semibold">{option.price}</span>
                    </label>
                  ))}
                </div>
                <p className="text-xs text-gray-400 mt-2">Trackable shipping. XP earned when your order ships.</p>
              </CardContent>
            </Card>

            {/* Reassurance Bar */}
            <div className="grid grid-cols-3 gap-4 mb-8 text-center">
              <div>
                <Zap className="w-6 h-6 text-red-500 mx-auto mb-2" />
                <p className="text-xs text-gray-300">
                  <strong>No Crash Energy</strong> for long sessions.
                </p>
              </div>
              <div>
                <Droplets className="w-6 h-6 text-red-500 mx-auto mb-2" />
                <p className="text-xs text-gray-300">
                  <strong>Better Hydration = Better Performance.</strong>
                </p>
              </div>
              <div>
                <Target className="w-6 h-6 text-red-500 mx-auto mb-2" />
                <p className="text-xs text-gray-300">
                  <strong>Focus Under Pressure</strong>—stay locked in.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <Button
                variant="outline"
                onClick={() => setStep("cart")}
                className="flex-1 border-gray-600 text-gray-300 hover:bg-gray-800"
              >
                Return to Cart
              </Button>
              <Button onClick={() => setStep("payment")} className="flex-1 bg-red-500 hover:bg-red-600 text-white">
                Continue to Review & Pay
              </Button>
            </div>
          </div>
        )}

        {/* Payment Step */}
        {step === "payment" && (
          <div className="p-6">
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Left: Payment */}
              <div className="lg:col-span-2 space-y-6">
                <div>
                  <h2 className="text-3xl font-bold mb-2">Review & Pay</h2>
                  <p className="text-gray-300">Remove last-minute friction. Your edge is almost here.</p>
                </div>

                {/* Payment Methods */}
                <Card className="bg-[#2C2C2C] border-gray-600">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-bold mb-4">Payment Method</h3>
                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <Button variant="outline" className="border-gray-600 bg-black text-white hover:bg-gray-800">
                        <CreditCard className="w-4 h-4 mr-2" />
                        Credit/Debit
                      </Button>
                      <Button variant="outline" className="border-gray-600 bg-black text-white hover:bg-gray-800">
                        PayPal
                      </Button>
                    </div>
                    <div className="grid md:grid-cols-2 gap-4">
                      <input
                        type="text"
                        placeholder="Card Number"
                        className="md:col-span-2 p-3 bg-[#1B1B1B] border border-gray-600 rounded-lg text-white placeholder-gray-400"
                      />
                      <input
                        type="text"
                        placeholder="MM/YY"
                        className="p-3 bg-[#1B1B1B] border border-gray-600 rounded-lg text-white placeholder-gray-400"
                      />
                      <input
                        type="text"
                        placeholder="CVC"
                        className="p-3 bg-[#1B1B1B] border border-gray-600 rounded-lg text-white placeholder-gray-400"
                      />
                    </div>
                    <div className="flex items-center gap-2 mt-4 text-xs text-gray-400">
                      <Lock className="w-4 h-4" />
                      <span>256-bit SSL • PCI compliant • Encrypted</span>
                    </div>
                  </CardContent>
                </Card>

                {/* Final Assurance */}
                <Card className="bg-[#1B1B1B] border-red-500/30">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-bold mb-4 text-red-500">Why gamers choose LOOTBOX</h3>
                    <div className="grid md:grid-cols-2 gap-4 text-sm">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                        <span>
                          <strong>Energy without the crash</strong>—no yo-yo spikes.
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                        <span>
                          <strong>Sharper reaction time</strong> & mental clarity.
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                        <span>
                          <strong>Hydration for marathons</strong>—stay steady deeper into the grind.
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                        <span>
                          <strong>No jitters</strong>—hands stay precise.
                        </span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Guarantee */}
                <div className="text-center p-4 bg-[#1B1B1B] rounded-lg border border-gray-700">
                  <p className="text-sm text-gray-300 mb-2">
                    If you don't feel smoother energy and clearer focus in your first session, we'll make it right.
                  </p>
                  <p className="text-xs text-gray-400">Hassle-free support. Real people.</p>
                </div>

                <Button
                  onClick={() => setStep("confirmation")}
                  className="w-full bg-red-500 hover:bg-red-600 text-white py-4 text-xl font-semibold shadow-lg shadow-red-500/25"
                >
                  Complete My Order
                </Button>
                <p className="text-xs text-gray-400 text-center">Your edge ships fast. XP updates sent by email.</p>
              </div>

              {/* Right: Order Summary */}
              <div>
                <Card className="bg-[#2C2C2C] border-gray-600">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-bold mb-4">Order Summary</h3>
                    <div className="space-y-3 mb-6">
                      <div className="flex justify-between">
                        <span className="text-white">LOOTBOX x{quantity}</span>
                        <span className="text-white">${subtotal}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-white">Shipping ({shippingOption})</span>
                        <span className="text-white">{shippingCost === 0 ? "FREE" : `$${shippingCost}`}</span>
                      </div>
                      {isSubscription && (
                        <div className="flex justify-between text-green-400">
                          <span>Subscription Discount</span>
                          <span>-${(basePrice - subscriptionPrice) * quantity}</span>
                        </div>
                      )}
                      <div className="border-t border-gray-600 pt-3">
                        <div className="flex justify-between text-xl font-bold">
                          <span className="text-white">Total</span>
                          <span className="text-red-500">${total}</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        )}

        {/* Confirmation Step */}
        {step === "confirmation" && (
          <div className="p-6 max-w-2xl mx-auto text-center">
            <div className="mb-8">
              <div className="w-20 h-20 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Check className="w-10 h-10 text-red-500" />
              </div>
              <h2 className="text-4xl font-bold mb-4">Mission accepted.</h2>
              <p className="text-xl text-gray-300 mb-2">Your LOOTBOX is en route.</p>
              <p className="text-gray-400">
                Watch for an email with tracking. In the meantime, <strong>ask NOVA</strong> how to time your first
                packet for your next session—and join the community to share your wins.
              </p>
            </div>

            <div className="space-y-4 mb-8">
              <Button className="w-full bg-[#00A3FF] hover:bg-[#0088CC] text-white">Ask NOVA</Button>
              <Button
                variant="outline"
                className="w-full border-red-500 text-red-500 hover:bg-red-500 hover:text-white bg-transparent"
              >
                Join the Community
              </Button>
              <Button variant="ghost" className="w-full text-gray-400 hover:text-white">
                View Order
              </Button>
            </div>

            {/* XP Bar */}
            <div className="max-w-md mx-auto">
              <div className="flex items-center justify-between mb-2 text-sm">
                <span className="text-gray-400">Mission Progress</span>
                <span className="text-[#00A3FF]">100% Complete</span>
              </div>
              <div className="w-full bg-gray-800 rounded-full h-3">
                <div className="bg-gradient-to-r from-[#00A3FF] to-[#0088CC] h-3 rounded-full w-full animate-pulse"></div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
