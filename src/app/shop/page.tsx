'use client';
import React, { useState } from 'react';
import AnimationWrapper from '@/components/AnimationWrapper';
import { ShoppingBag, Send, Box } from 'lucide-react';

export default function ShopPage() {
  const products = [
    {
      id: 'bot-kit-1',
      name: 'Starter Robotics Kit',
      price: '₹1,499',
      image: '🤖',
      desc: 'Everything you need to build your first obstacle-avoiding robot.',
      color: 'bg-emerald-100 text-emerald-600',
    },
    {
      id: 'arduino-uno',
      name: 'Arduino Uno R3',
      price: '₹450',
      image: '📟',
      desc: 'The brain of your projects. Official compatible board with cable.',
      color: 'bg-blue-100 text-blue-600',
    },
    {
      id: 'drone-diy',
      name: 'DIY Nano Drone Kit',
      price: '₹2,999',
      image: '🚁',
      desc: 'Assemble and fly your own quadcopter. Includes motors, props, and frame.',
      color: 'bg-orange-100 text-orange-600',
    },
    {
      id: 'sensor-pack',
      name: '37-in-1 Sensor Pack',
      price: '₹999',
      image: '📡',
      desc: 'Unlock endless possibilities with temperature, light, sound, and motion sensors.',
      color: 'bg-purple-100 text-purple-600',
    },
    {
      id: 'chassis-2wd',
      name: '2WD Robot Chassis',
      price: '₹350',
      image: '🏎️',
      desc: 'Acrylic chassis with 2 DC motors and wheels. Perfect base for rovers.',
      color: 'bg-yellow-100 text-yellow-600',
    },
    {
      id: 'jumper-wires',
      name: 'Jumper Wires (M-M, M-F)',
      price: '₹150',
      image: '🔌',
      desc: 'Essential for breadboarding. 120pcs mixed set.',
      color: 'bg-pink-100 text-pink-600',
    },
  ];

  const [orderData, setOrderData] = useState({
    product: 'Starter Robotics Kit',
    quantity: 1,
    address: '',
  });

  const handleOrder = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = `New Order: ${orderData.product}`;
    const body = `Product: ${orderData.product}%0D%0AQuantity: ${orderData.quantity}%0D%0ADelivery Address: ${orderData.address}`;
    window.location.href = `mailto:saurabh962003@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="container">
        {/* Header */}
        <section className="mb-16 text-center max-w-3xl mx-auto">
          <AnimationWrapper>
            <div className="badge badge-primary mb-6 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-100 text-emerald-800 font-semibold text-sm">
              <ShoppingBag size={18} /> Component Shop
            </div>
            <h1 className="text-5xl font-black text-slate-900 dark:text-white mb-6">
              Build Your{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-teal-500">
                Dreams
              </span>
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-300">
              High-quality parts and kits for your next innovation, delivered to your doorstep.
            </p>
          </AnimationWrapper>
        </section>

        {/* Product Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {products.map((product, idx) => (
            <AnimationWrapper key={product.id} delay={idx * 0.1}>
              <div className="card h-full flex flex-col group hover:border-emerald-400 transition-colors">
                <div
                  className={`h-40 rounded-2xl ${product.color} flex items-center justify-center text-7xl mb-6 shadow-inner relative overflow-hidden`}
                >
                  {product.image}
                  <div className="absolute top-2 right-2 opacity-20">
                    <Box size={40} />
                  </div>
                </div>
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-emerald-600 transition-colors">
                    {product.name}
                  </h3>
                  <span className="bg-slate-900 text-white dark:bg-white dark:text-slate-900 px-3 py-1 rounded-full text-sm font-bold rotate-2">
                    {product.price}
                  </span>
                </div>
                <p className="text-slate-600 dark:text-slate-400 mb-6 text-sm flex-grow">
                  {product.desc}
                </p>
                <button
                  onClick={() => setOrderData({ ...orderData, product: product.name })}
                  className="btn w-full bg-white dark:bg-slate-800 text-slate-900 dark:text-white hover:bg-emerald-50 dark:hover:bg-emerald-900/20 border-2 border-slate-200 dark:border-slate-700"
                >
                  Select Item
                </button>
              </div>
            </AnimationWrapper>
          ))}
        </div>

        {/* Order Form */}
        <section className="max-w-2xl mx-auto relative">
          <div
            className="absolute top-10 -right-10 text-6xl animate-bounce hidden lg:block"
            style={{ animationDelay: '0.5s' }}
          >
            📦
          </div>

          <AnimationWrapper
            animation="fade-up"
            className="card doodle-shadow-emerald 
                        bg-slate-50 dark:bg-slate-800/50 
                        border-emerald-200 dark:border-emerald-500/30"
          >
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">
                Place an Order
              </h2>
              <p className="text-slate-800 dark:text-slate-300">
                Selected Product:
                <span className="font-bold text-emerald-600 dark:text-emerald-400">
                  {orderData.product}
                </span>
              </p>
            </div>

            <form onSubmit={handleOrder} className="space-y-6">
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">
                    Product
                  </label>
                  <select
                    className="w-full p-3 rounded-xl border-2 border-slate-300 dark:border-slate-700 
                                bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white 
                                focus:border-emerald-500 outline-none transition-colors"
                    value={orderData.product}
                    onChange={(e) => setOrderData({ ...orderData, product: e.target.value })}
                  >
                    {products.map((p) => (
                      <option key={p.id} value={p.name}>
                        {p.name}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">
                    Quantity
                  </label>
                  <input
                    type="number"
                    min="1"
                    required
                    className="w-full p-3 rounded-xl border-2 border-slate-300 dark:border-slate-700
                                bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white
                                focus:border-emerald-500 outline-none transition-colors"
                    value={orderData.quantity}
                    onChange={(e) =>
                      setOrderData({ ...orderData, quantity: parseInt(e.target.value) })
                    }
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">
                  Delivery Address & Pincode
                </label>
                <textarea
                  required
                  className="w-full p-3 rounded-xl border-2 border-slate-300 dark:border-slate-700
                              bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white
                              focus:border-emerald-500 outline-none transition-colors h-32 resize-none"
                  placeholder="Full address for shipping..."
                  value={orderData.address}
                  onChange={(e) => setOrderData({ ...orderData, address: e.target.value })}
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full btn btn-primary py-4 text-lg items-center gap-3
                            bg-emerald-600 hover:bg-emerald-700 border-none text-white shadow-lg"
              >
                <Send size={20} /> Order via Email
              </button>

              <p className="text-center text-xs text-slate-500 mt-4">
                We will contact you via email for payment and confirmation.
                (saurabh962003@gmail.com)
              </p>
            </form>
          </AnimationWrapper>
        </section>
      </div>
    </div>
  );
}
