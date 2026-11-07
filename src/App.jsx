import React, { useState } from 'react';
import { 
  Scissors, MapPin, Search, Calendar, Clock, Star, User, ShieldCheck, 
  Sparkles, CheckCircle2, ChevronRight, Phone, Mail, Award, X, Plus, 
  LayoutDashboard, Store, Users, BarChart3, Settings, AlertCircle, 
  Menu, LogOut, Check, ArrowRight, Filter, Navigation, Lock, ExternalLink,
  ChevronDown, DollarSign, TrendingUp, Eye, Edit, Trash2, CheckCircle, XCircle
} from 'lucide-react';

// Sample Salons Data
const SAMPLE_SALONS = [
  {
    id: 1,
    name: "The Royal Cut Barbershop",
    rating: 4.9,
    reviewsCount: 128,
    distance: "0.8 km",
    address: "42 Park Street, Indiranagar, Bengaluru",
    priceRange: "₹350 - ₹1200",
    startingPrice: 350,
    isOpen: true,
    image: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&q=80&w=800",
    description: "Premium men's grooming lounge offering bespoke haircuts, traditional hot towel shaves, and luxury hair treatments.",
    services: [
      { id: 's1', name: 'Executive Haircut & Styling', price: 450, duration: '45 mins', category: 'Haircut' },
      { id: 's2', name: 'Royal Beard Sculpting', price: 350, duration: '30 mins', category: 'Beard' },
      { id: 's3', name: 'Charcoal Deep Cleansing Facial', price: 800, duration: '45 mins', category: 'Facial' },
      { id: 's4', name: 'Scalp Detox & Hair Spa', price: 950, duration: '60 mins', category: 'Hair Spa' }
    ],
    barbers: [
      { id: 'b1', name: 'Vikram Singh', role: 'Master Barber', rating: 4.95, photo: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=300' },
      { id: 'b2', name: 'Arjun Mehta', role: 'Stylist', rating: 4.88, photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=300' }
    ]
  },
  {
    id: 2,
    name: "Aura Gentlemen's Grooming",
    rating: 4.8,
    reviewsCount: 94,
    distance: "1.5 km",
    address: "108 MG Road, Koramangala, Bengaluru",
    priceRange: "₹400 - ₹1500",
    startingPrice: 400,
    isOpen: true,
    image: "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?auto=format&fit=crop&q=80&w=800",
    description: "Contemporary barber shop specializing in modern fades, hair coloring, and relaxing anti-stress treatments.",
    services: [
      { id: 's5', name: 'Modern Fade & Finish', price: 500, duration: '40 mins', category: 'Haircut' },
      { id: 's6', name: 'Beard Trim & Hydration', price: 400, duration: '25 mins', category: 'Beard' },
      { id: 's7', name: 'Global Hair Color', price: 1200, duration: '60 mins', category: 'Coloring' }
    ],
    barbers: [
      { id: 'b3', name: 'Karan Sharma', role: 'Senior Stylist', rating: 4.9, photo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=300' }
    ]
  },
  {
    id: 3,
    name: "Vogue Men's Studio",
    rating: 4.7,
    reviewsCount: 76,
    distance: "2.1 km",
    address: "77 HSR Layout, Sector 3, Bengaluru",
    priceRange: "₹300 - ₹1000",
    startingPrice: 300,
    isOpen: true,
    image: "https://images.unsplash.com/photo-1622286342621-4bd786c2447c?auto=format&fit=crop&q=80&w=800",
    description: "Sophisticated studio with skilled barbers providing express cuts, organic beard care, and face massages.",
    services: [
      { id: 's8', name: 'Classic Scissors Cut', price: 350, duration: '30 mins', category: 'Haircut' },
      { id: 's9', name: 'Organic Beard Grooming', price: 300, duration: '20 mins', category: 'Beard' }
    ],
    barbers: [
      { id: 'b4', name: 'Siddharth Rao', role: 'Master Barber', rating: 4.85, photo: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&q=80&w=300' }
    ]
  }
];

export default function App() {
  const [activeRole, setActiveRole] = useState('customer'); // 'customer' | 'owner' | 'admin'
  const [currentView, setCurrentView] = useState('home'); // 'home' | 'search' | 'details' | 'booking' | 'customer-dashboard'
  const [selectedSalon, setSelectedSalon] = useState(SAMPLE_SALONS[0]);
  const [selectedService, setSelectedService] = useState(null);
  const [selectedBarber, setSelectedBarber] = useState(null);
  const [selectedDate, setSelectedDate] = useState('2026-11-08');
  const [selectedTime, setSelectedTime] = useState(null);
  const [bookingSuccess, setBookingSuccess] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('All');

  // Time slots state
  const timeSlots = [
    { time: '09:00 AM', status: 'available' },
    { time: '10:00 AM', status: 'booked' },
    { time: '11:00 AM', status: 'available' },
    { time: '12:00 PM', status: 'unavailable' },
    { time: '02:00 PM', status: 'available' },
    { time: '03:00 PM', status: 'available' },
    { time: '04:00 PM', status: 'booked' },
    { time: '05:00 PM', status: 'available' },
  ];

  return (
    <div className="min-h-screen bg-[#F7F5F0] text-[#242424] font-sans antialiased flex flex-col">
      {/* Dynamic Role & Environment Switcher Header */}
      <header className="bg-[#171717] text-white py-2.5 px-6 border-b border-stone-800 flex flex-wrap justify-between items-center text-xs sticky top-0 z-50 shadow-md">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5 font-black tracking-widest text-[#C7A77B] text-sm">
            <Scissors className="w-4 h-4 text-[#C7A77B]" />
            <span>BOYS SALON</span>
          </div>
          <span className="hidden sm:inline text-stone-500">|</span>
          <span className="text-stone-400 font-medium">Switch Interface View:</span>
        </div>
        <div className="flex items-center gap-2">
          <button 
            onClick={() => { setActiveRole('customer'); setCurrentView('home'); }} 
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${activeRole === 'customer' ? 'bg-[#C7A77B] text-[#171717] shadow-sm' : 'bg-stone-800 text-stone-300 hover:text-white hover:bg-stone-700'}`}>
            Customer Portal
          </button>
          <button 
            onClick={() => setActiveRole('owner')} 
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${activeRole === 'owner' ? 'bg-[#C7A77B] text-[#171717] shadow-sm' : 'bg-stone-800 text-stone-300 hover:text-white hover:bg-stone-700'}`}>
            Shop Owner Dashboard
          </button>
          <button 
            onClick={() => setActiveRole('admin')} 
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${activeRole === 'admin' ? 'bg-[#C7A77B] text-[#171717] shadow-sm' : 'bg-stone-800 text-stone-300 hover:text-white hover:bg-stone-700'}`}>
            Super Admin Console
          </button>
        </div>
      </header>

      {/* =========================================
          1. CUSTOMER WEBSITE & BOOKING PLATFORM
         ========================================= */}
      {activeRole === 'customer' && (
        <div className="flex-1 flex flex-col">
          {/* Main Navigation */}
          <nav className="bg-[#171717]/95 backdrop-blur-md text-white border-b border-stone-800 px-6 py-4 sticky top-[41px] z-40 flex justify-between items-center shadow-lg">
            <div className="flex items-center gap-3 cursor-pointer" onClick={() => setCurrentView('home')}>
              <div className="w-10 h-10 rounded-xl bg-[#C7A77B] flex items-center justify-center text-[#171717] font-black text-xl shadow-inner">
                B
              </div>
              <div>
                <span className="text-xl font-extrabold tracking-wider block leading-none">BOYS SALON</span>
                <span className="text-[10px] text-[#C7A77B] tracking-widest uppercase block mt-0.5">Your Style. Your Salon. Your Time.</span>
              </div>
            </div>

            <div className="hidden md:flex items-center gap-8 text-xs font-bold uppercase tracking-wider text-stone-300">
              <button onClick={() => setCurrentView('home')} className={`hover:text-[#C7A77B] transition-colors ${currentView === 'home' ? 'text-[#C7A77B]' : ''}`}>Home</button>
              <button onClick={() => setCurrentView('search')} className={`hover:text-[#C7A77B] transition-colors ${currentView === 'search' ? 'text-[#C7A77B]' : ''}`}>Nearby Salons</button>
              <button onClick={() => setCurrentView('customer-dashboard')} className={`hover:text-[#C7A77B] transition-colors ${currentView === 'customer-dashboard' ? 'text-[#C7A77B]' : ''}`}>My Bookings</button>
            </div>

            <div className="flex items-center gap-3">
              <button onClick={() => setCurrentView('customer-dashboard')} className="hidden sm:inline-flex px-4 py-2 border border-[#C7A77B]/40 text-[#C7A77B] rounded-lg text-xs font-bold hover:bg-[#C7A77B]/10 transition-all">
                My Account
              </button>
              <button 
                onClick={() => { setSelectedSalon(SAMPLE_SALONS[0]); setSelectedService(SAMPLE_SALONS[0].services[0]); setCurrentView('booking'); setBookingSuccess(false); }} 
                className="px-5 py-2.5 bg-[#C7A77B] text-[#171717] rounded-lg text-xs font-extrabold uppercase tracking-wider hover:bg-[#b59365] transition-all shadow-md">
                Book Instant
              </button>
            </div>
          </nav>

          {/* CUSTOMER VIEW: HOME PAGE */}
          {currentView === 'home' && (
            <main className="flex-1">
              {/* Hero Banner */}
              <section className="relative bg-[#171717] text-white py-24 px-6 overflow-hidden border-b border-stone-800">
                <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
                  <div className="space-y-6">
                    <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#C7A77B]/10 border border-[#C7A77B]/30 text-[#C7A77B] text-xs font-semibold uppercase tracking-wider">
                      <Sparkles className="w-3.5 h-3.5" /> Premium Men's Grooming Marketplace
                    </span>
                    <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-tight">
                      Find Your Perfect Salon.<br />
                      <span className="text-[#C7A77B]">Book Your Perfect Time.</span>
                    </h1>
                    <p className="text-stone-400 text-sm leading-relaxed max-w-md">
                      Discover top-rated barbers, compare pricing, check live appointment slots, and reserve your seat instantly without waiting in queues.
                    </p>

                    {/* Integrated Search Box */}
                    <div className="bg-stone-900/95 p-3 rounded-2xl border border-stone-800 shadow-2xl flex flex-col sm:flex-row gap-2 max-w-lg">
                      <div className="flex-1 flex items-center gap-2 px-3.5 py-2.5 bg-stone-800 rounded-xl">
                        <MapPin className="w-4 h-4 text-[#C7A77B]" />
                        <input type="text" placeholder="City or Area" className="bg-transparent text-xs w-full text-white placeholder-stone-400 focus:outline-none" defaultValue="Bengaluru" />
                      </div>
                      <div className="flex-1 flex items-center gap-2 px-3.5 py-2.5 bg-stone-800 rounded-xl">
                        <Search className="w-4 h-4 text-[#C7A77B]" />
                        <input 
                          type="text" 
                          placeholder="Haircut, Facial, Beard..." 
                          value={searchQuery}
                          onChange={(e) => setSearchQuery(e.target.value)}
                          className="bg-transparent text-xs w-full text-white placeholder-stone-400 focus:outline-none" 
                        />
                      </div>
                      <button 
                        onClick={() => setCurrentView('search')}
                        className="bg-[#C7A77B] hover:bg-[#b59365] text-[#171717] px-6 py-3 rounded-xl font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-md">
                        Explore <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>

                  {/* Hero Media Card */}
                  <div className="relative">
                    <div className="relative z-10 rounded-2xl overflow-hidden border border-stone-800 shadow-2xl">
                      <img src="https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&q=80&w=800" alt="Grooming Salon" className="w-full h-[420px] object-cover" />
                    </div>
                    <div className="absolute -bottom-6 -left-6 z-20 bg-stone-900/95 border border-stone-800 p-4 rounded-2xl shadow-2xl flex items-center gap-3 backdrop-blur-sm">
                      <div className="w-11 h-11 rounded-xl bg-[#C7A77B]/20 text-[#C7A77B] flex items-center justify-center font-extrabold text-lg">4.9</div>
                      <div>
                        <p className="text-xs font-bold text-white">Verified Customer Rating</p>
                        <p className="text-[10px] text-stone-400">Over 10,000+ Appointments Booked</p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Service Categories */}
              <section className="py-12 px-6 max-w-6xl mx-auto">
                <h2 className="text-xs font-extrabold text-[#C7A77B] uppercase tracking-widest mb-2">Popular Categories</h2>
                <h3 className="text-2xl font-bold text-[#171717] mb-6">Explore Services</h3>
                <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
                  {['Haircut', 'Beard Styling', 'Hair Spa', 'Facial', 'Hair Color', 'Grooming'].map((cat, idx) => (
                    <div 
                      key={idx} 
                      onClick={() => { setCategoryFilter(cat); setCurrentView('search'); }}
                      className="bg-white p-5 rounded-2xl border border-stone-200 text-center hover:border-[#C7A77B] hover:shadow-md cursor-pointer transition-all space-y-2">
                      <div className="w-10 h-10 bg-[#F7F5F0] rounded-xl flex items-center justify-center mx-auto text-[#171717]">
                        <Scissors className="w-5 h-5 text-[#C7A77B]" />
                      </div>
                      <p className="text-xs font-bold text-[#171717]">{cat}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Featured Salons Section */}
              <section className="py-12 px-6 max-w-6xl mx-auto border-t border-stone-200">
                <div className="flex justify-between items-end mb-8">
                  <div>
                    <h2 className="text-2xl font-bold text-[#171717]">Featured Luxury Salons</h2>
                    <p className="text-xs text-[#858585] mt-1">Handpicked top-rated grooming lounges near you</p>
                  </div>
                  <button onClick={() => setCurrentView('search')} className="text-xs font-bold text-[#C7A77B] hover:underline flex items-center gap-1">
                    View All Salons <ChevronRight className="w-4 h-4" />
                  </button>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                  {SAMPLE_SALONS.map(salon => (
                    <div key={salon.id} className="bg-white rounded-2xl border border-stone-200 overflow-hidden shadow-sm hover:shadow-lg transition-all flex flex-col">
                      <div className="relative">
                        <img src={salon.image} alt={salon.name} className="w-full h-48 object-cover" />
                        <span className="absolute top-3 right-3 bg-stone-900/80 backdrop-blur-sm text-[#C7A77B] text-[10px] font-extrabold px-2.5 py-1 rounded-full uppercase tracking-wider">
                          Open Now
                        </span>
                      </div>
                      <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                        <div>
                          <div className="flex justify-between items-start mb-2">
                            <h3 className="text-base font-bold text-[#171717]">{salon.name}</h3>
                            <span className="flex items-center gap-1 text-xs bg-amber-50 text-amber-700 px-2 py-0.5 rounded font-semibold border border-amber-200">
                              <Star className="w-3 h-3 fill-amber-500 text-amber-500" /> {salon.rating}
                            </span>
                          </div>
                          <p className="text-xs text-[#858585] flex items-center gap-1">
                            <MapPin className="w-3.5 h-3.5 text-[#C7A77B] shrink-0" /> {salon.address}
                          </p>
                        </div>

                        <div className="pt-4 border-t border-stone-100 flex items-center justify-between">
                          <div>
                            <span className="text-[10px] text-[#858585] uppercase tracking-wider block">Starts at</span>
                            <span className="text-sm font-extrabold text-[#171717]">₹{salon.startingPrice}</span>
                          </div>
                          <button 
                            onClick={() => { setSelectedSalon(salon); setCurrentView('details'); }}
                            className="bg-[#171717] text-white hover:bg-[#C7A77B] hover:text-[#171717] px-4 py-2 rounded-xl text-xs font-bold transition-all shadow-sm">
                            Select Salon
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            </main>
          )}

          {/* CUSTOMER VIEW: NEARBY SALONS LIST */}
          {currentView === 'search' && (
            <main className="flex-1 max-w-6xl mx-auto py-10 px-6 w-full">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
                <div>
                  <h1 className="text-2xl font-extrabold text-[#171717]">Nearby Salons</h1>
                  <p className="text-xs text-[#858585] mt-1">Found {SAMPLE_SALONS.length} premium salons near Bengaluru</p>
                </div>
                <div className="flex items-center gap-3">
                  <select className="bg-white border border-stone-300 px-3 py-2 rounded-xl text-xs font-bold text-[#171717]">
                    <option>Sort by Nearest</option>
                    <option>Sort by Highest Rated</option>
                    <option>Sort by Price: Low to High</option>
                  </select>
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                {SAMPLE_SALONS.map(salon => (
                  <div key={salon.id} className="bg-white rounded-2xl border border-stone-200 overflow-hidden shadow-sm hover:shadow-md transition-all">
                    <img src={salon.image} alt={salon.name} className="w-full h-44 object-cover" />
                    <div className="p-6 space-y-4">
                      <div>
                        <div className="flex justify-between items-start">
                          <h3 className="font-bold text-base text-[#171717]">{salon.name}</h3>
                          <span className="text-xs font-bold bg-amber-50 text-amber-700 px-2 py-0.5 rounded border border-amber-200 flex items-center gap-1">
                            <Star className="w-3 h-3 fill-amber-500" /> {salon.rating}
                          </span>
                        </div>
                        <p className="text-xs text-[#858585] mt-1">{salon.address} ({salon.distance})</p>
                      </div>
                      <p className="text-xs text-stone-600 line-clamp-2">{salon.description}</p>
                      <button 
                        onClick={() => { setSelectedSalon(salon); setCurrentView('details'); }}
                        className="w-full bg-[#171717] text-white py-2.5 rounded-xl text-xs font-bold hover:bg-[#C7A77B] hover:text-[#171717] transition-all">
                        View Details & Book
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </main>
          )}

          {/* CUSTOMER VIEW: SALON DETAILS */}
          {currentView === 'details' && selectedSalon && (
            <main className="flex-1 max-w-5xl mx-auto py-10 px-6 w-full">
              <button onClick={() => setCurrentView('search')} className="text-xs font-bold text-[#858585] hover:text-[#171717] mb-6 flex items-center gap-1">
                ← Back to Salons
              </button>

              <div className="bg-white rounded-2xl border border-stone-200 p-8 shadow-sm">
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="md:col-span-2 space-y-6">
                    <img src={selectedSalon.image} alt={selectedSalon.name} className="w-full h-80 object-cover rounded-2xl shadow-sm" />
                    
                    <div>
                      <div className="flex justify-between items-start">
                        <h1 className="text-3xl font-extrabold text-[#171717]">{selectedSalon.name}</h1>
                        <span className="bg-amber-50 text-amber-800 text-xs font-bold px-3 py-1 rounded-full border border-amber-200 flex items-center gap-1">
                          <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" /> {selectedSalon.rating} ({selectedSalon.reviewsCount} reviews)
                        </span>
                      </div>
                      <p className="text-xs text-[#858585] mt-2 flex items-center gap-1">
                        <MapPin className="w-4 h-4 text-[#C7A77B]" /> {selectedSalon.address}
                      </p>
                      <p className="text-xs text-stone-600 mt-4 leading-relaxed">{selectedSalon.description}</p>
                    </div>

                    {/* Barber Team */}
                    <div>
                      <h3 className="text-xs font-extrabold text-[#171717] uppercase tracking-wider mb-4">Select Barber (Optional)</h3>
                      <div className="grid grid-cols-2 gap-4">
                        {selectedSalon.barbers.map(barber => (
                          <div 
                            key={barber.id}
                            onClick={() => setSelectedBarber(selectedBarber?.id === barber.id ? null : barber)}
                            className={`p-4 rounded-xl border flex items-center gap-3 cursor-pointer transition-all ${
                              selectedBarber?.id === barber.id ? 'border-[#C7A77B] bg-[#C7A77B]/10' : 'border-stone-200 hover:border-stone-300'
                            }`}>
                            <img src={barber.photo} alt={barber.name} className="w-12 h-12 rounded-full object-cover" />
                            <div>
                              <p className="text-xs font-bold text-[#171717]">{barber.name}</p>
                              <p className="text-[10px] text-[#858585]">{barber.role}</p>
                              <span className="text-[10px] text-amber-600 font-bold">★ {barber.rating}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Services Menu */}
                    <div>
                      <h3 className="text-xs font-extrabold text-[#171717] uppercase tracking-wider mb-4">Available Services</h3>
                      <div className="space-y-3">
                        {selectedSalon.services.map(srv => (
                          <div key={srv.id} className="p-4 border border-stone-200 rounded-2xl flex justify-between items-center bg-stone-50/50 hover:bg-white transition-all">
                            <div>
                              <p className="font-bold text-sm text-[#171717]">{srv.name}</p>
                              <p className="text-xs text-[#858585]">{srv.duration} • {srv.category}</p>
                            </div>
                            <div className="flex items-center gap-4">
                              <span className="font-extrabold text-[#171717] text-base">₹{srv.price}</span>
                              <button 
                                onClick={() => { setSelectedService(srv); setCurrentView('booking'); setBookingStep(1); setBookingSuccess(false); }}
                                className="text-xs bg-[#C7A77B] text-[#171717] px-4 py-2 rounded-xl font-bold hover:bg-[#b59365] transition-all shadow-sm">
                                Book Service
                              </button>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Salon Operating Sidebar */}
                  <div className="space-y-6 bg-[#F7F5F0] p-6 rounded-2xl border border-stone-200 h-fit sticky top-28">
                    <h3 className="font-extrabold text-xs text-[#171717] uppercase tracking-wider">Salon Information</h3>
                    <div className="text-xs space-y-3 text-[#858585]">
                      <div className="flex justify-between border-b pb-2"><span>Status:</span> <span className="font-bold text-emerald-600">Open Now</span></div>
                      <div className="flex justify-between border-b pb-2"><span>Mon - Sat:</span> <span className="font-semibold text-[#171717]">09:00 AM - 09:00 PM</span></div>
                      <div className="flex justify-between"><span>Sunday:</span> <span className="font-semibold text-[#171717]">10:00 AM - 08:00 PM</span></div>
                    </div>
                    <button 
                      onClick={() => { setSelectedService(selectedSalon.services[0]); setCurrentView('booking'); setBookingStep(1); setBookingSuccess(false); }}
                      className="w-full bg-[#171717] text-white py-3 rounded-xl text-xs font-bold uppercase tracking-wider hover:bg-[#C7A77B] hover:text-[#171717] transition-all shadow-md">
                      Instant Booking
                    </button>
                  </div>
                </div>
              </div>
            </main>
          )}

          {/* CUSTOMER VIEW: STEP-BY-STEP BOOKING */}
          {currentView === 'booking' && (
            <main className="flex-1 max-w-3xl mx-auto py-12 px-6 w-full">
              <div className="bg-white rounded-2xl border border-stone-200 p-8 shadow-sm">
                <h2 className="text-2xl font-bold text-[#171717] mb-2">Book Appointment</h2>
                <p className="text-xs text-[#858585] mb-6 border-b pb-4">{selectedSalon?.name} — {selectedService?.name || 'Hair Service'}</p>

                {bookingSuccess ? (
                  <div className="text-center py-8 space-y-4">
                    <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <h3 className="text-2xl font-bold text-[#171717]">Booking Confirmed!</h3>
                    <p className="text-xs text-[#858585]">Booking Reference ID: <span className="font-mono font-bold text-[#171717]">BS-2026-9921</span></p>
                    
                    <div className="bg-[#F7F5F0] p-6 rounded-2xl text-left max-w-md mx-auto text-xs space-y-3 border border-stone-200">
                      <div className="flex justify-between border-b pb-2"><span>Salon:</span> <strong className="text-[#171717]">{selectedSalon?.name}</strong></div>
                      <div className="flex justify-between border-b pb-2"><span>Service:</span> <strong className="text-[#171717]">{selectedService?.name}</strong></div>
                      <div className="flex justify-between border-b pb-2"><span>Barber:</span> <strong className="text-[#171717]">{selectedBarber?.name || 'Any Available Barber'}</strong></div>
                      <div className="flex justify-between border-b pb-2"><span>Date & Time:</span> <strong className="text-[#171717]">{selectedDate} at {selectedTime}</strong></div>
                      <div className="flex justify-between text-sm"><span>Total Amount:</span> <strong className="text-[#171717]">₹{selectedService?.price}</strong></div>
                    </div>

                    <div className="flex justify-center gap-4 pt-4">
                      <button 
                        onClick={() => setCurrentView('customer-dashboard')} 
                        className="bg-[#171717] text-white px-6 py-3 rounded-xl text-xs font-bold uppercase tracking-wider hover:bg-[#C7A77B] hover:text-[#171717] transition-all">
                        View My Bookings
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-6">
                    <div>
                      <label className="block text-xs font-extrabold text-[#171717] uppercase tracking-wider mb-2">1. Select Booking Date</label>
                      <input 
                        type="date" 
                        value={selectedDate} 
                        onChange={(e) => setSelectedDate(e.target.value)} 
                        className="w-full p-3 border border-stone-300 rounded-xl text-xs font-bold text-[#171717]" 
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-extrabold text-[#171717] uppercase tracking-wider mb-2">2. Select Time Slot</label>
                      <div className="grid grid-cols-4 gap-3">
                        {timeSlots.map((slot, idx) => (
                          <button
                            key={idx}
                            disabled={slot.status !== 'available'}
                            onClick={() => setSelectedTime(slot.time)}
                            className={`p-3 rounded-xl border text-xs font-bold transition-all ${
                              selectedTime === slot.time 
                                ? 'bg-[#171717] text-white border-[#171717]' 
                                : slot.status === 'available'
                                ? 'bg-stone-50 text-[#171717] border-stone-200 hover:border-[#C7A77B]'
                                : 'bg-stone-100 text-stone-400 cursor-not-allowed line-through border-stone-200'
                            }`}>
                            {slot.time}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="pt-4 border-t">
                      <button 
                        disabled={!selectedTime}
                        onClick={() => setBookingSuccess(true)}
                        className="w-full bg-[#C7A77B] text-[#171717] py-3.5 rounded-xl text-xs font-extrabold uppercase tracking-wider hover:bg-[#b59365] transition-all disabled:opacity-50 shadow-md">
                        Confirm Appointment (₹{selectedService?.price || 450})
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </main>
          )}

          {/* CUSTOMER DASHBOARD */}
          {currentView === 'customer-dashboard' && (
            <main className="flex-1 max-w-5xl mx-auto py-10 px-6 w-full">
              <h1 className="text-2xl font-extrabold text-[#171717] mb-2">Customer Dashboard</h1>
              <p className="text-xs text-[#858585] mb-8">Manage your salon reservations and profile</p>

              <div className="bg-white rounded-2xl border border-stone-200 p-6 shadow-sm space-y-6">
                <h2 className="text-sm font-extrabold text-[#171717] uppercase tracking-wider">Upcoming Appointments</h2>
                <div className="p-4 border border-stone-200 rounded-xl flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-stone-50/50">
                  <div>
                    <span className="text-[10px] font-bold bg-amber-100 text-amber-800 px-2 py-0.5 rounded">CONFIRMED</span>
                    <h3 className="font-bold text-sm text-[#171717] mt-1">The Royal Cut Barbershop</h3>
                    <p className="text-xs text-[#858585]">Executive Haircut & Styling • Nov 8, 2026 at 11:00 AM</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <button className="px-3 py-1.5 border border-stone-300 rounded-lg text-xs font-bold text-stone-700 hover:bg-stone-100">Reschedule</button>
                    <button className="px-3 py-1.5 border border-red-200 text-red-600 rounded-lg text-xs font-bold hover:bg-red-50">Cancel</button>
                  </div>
                </div>
              </div>
            </main>
          )}
        </div>
      )}

      {/* =========================================
          2. SHOP OWNER DASHBOARD
         ========================================= */}
      {activeRole === 'owner' && (
        <div className="flex-1 flex min-h-[calc(100vh-41px)]">
          <aside className="w-64 bg-[#171717] text-stone-300 p-6 border-r border-stone-800 space-y-6 shrink-0">
            <div>
              <h2 className="text-base font-extrabold text-white tracking-wider">SHOP OWNER</h2>
              <p className="text-[10px] text-[#C7A77B] tracking-wider uppercase mt-0.5">The Royal Cut Barbershop</p>
            </div>
            <nav className="space-y-1.5 text-xs font-bold">
              <button className="w-full text-left px-3.5 py-2.5 rounded-xl bg-[#C7A77B] text-[#171717] shadow-sm flex items-center gap-2">
                <LayoutDashboard className="w-4 h-4" /> Overview
              </button>
              <button className="w-full text-left px-3.5 py-2.5 rounded-xl text-stone-400 hover:bg-stone-800 hover:text-white transition-all flex items-center gap-2">
                <Calendar className="w-4 h-4" /> Appointment Calendar
              </button>
              <button className="w-full text-left px-3.5 py-2.5 rounded-xl text-stone-400 hover:bg-stone-800 hover:text-white transition-all flex items-center gap-2">
                <Scissors className="w-4 h-4" /> Services & Pricing
              </button>
              <button className="w-full text-left px-3.5 py-2.5 rounded-xl text-stone-400 hover:bg-stone-800 hover:text-white transition-all flex items-center gap-2">
                <Users className="w-4 h-4" /> Staff Management
              </button>
            </nav>
          </aside>

          <main className="flex-1 p-8 space-y-8">
            <div>
              <h1 className="text-2xl font-extrabold text-[#171717]">Dashboard Overview</h1>
              <p className="text-xs text-[#858585] mt-1">Real-time stats for your salon business</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-2xl border border-stone-200 shadow-sm">
                <p className="text-xs text-[#858585] font-extrabold uppercase tracking-wider">Today's Appointments</p>
                <p className="text-3xl font-extrabold text-[#171717] mt-2">14</p>
              </div>
              <div className="bg-white p-6 rounded-2xl border border-stone-200 shadow-sm">
                <p className="text-xs text-[#858585] font-extrabold uppercase tracking-wider">Monthly Revenue</p>
                <p className="text-3xl font-extrabold text-emerald-600 mt-2">₹48,500</p>
              </div>
              <div className="bg-white p-6 rounded-2xl border border-stone-200 shadow-sm">
                <p className="text-xs text-[#858585] font-extrabold uppercase tracking-wider">Active Staff</p>
                <p className="text-3xl font-extrabold text-[#171717] mt-2">4 Barbers</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-stone-200 shadow-sm space-y-4">
              <h2 className="text-sm font-extrabold text-[#171717] uppercase tracking-wider">Upcoming Today</h2>
              <div className="divide-y divide-stone-100 text-xs">
                <div className="py-3 flex justify-between items-center">
                  <div>
                    <p className="font-bold text-[#171717]">Vikram (Client: Rajesh Kumar)</p>
                    <p className="text-[#858585]">Executive Haircut • 11:00 AM</p>
                  </div>
                  <span className="bg-emerald-50 text-emerald-700 px-2.5 py-1 rounded-full font-bold">Confirmed</span>
                </div>
              </div>
            </div>
          </main>
        </div>
      )}

      {/* =========================================
          3. SUPER ADMIN CONSOLE
         ========================================= */}
      {activeRole === 'admin' && (
        <div className="flex-1 flex min-h-[calc(100vh-41px)]">
          <aside className="w-64 bg-stone-900 text-stone-300 p-6 border-r border-stone-800 space-y-6 shrink-0">
            <div>
              <h2 className="text-base font-extrabold text-white tracking-wider">SUPER ADMIN</h2>
              <p className="text-[10px] text-[#C7A77B] tracking-wider uppercase mt-0.5">Platform Controller</p>
            </div>
            <nav className="space-y-1.5 text-xs font-bold">
              <button className="w-full text-left px-3.5 py-2.5 rounded-xl bg-[#C7A77B] text-[#171717] shadow-sm flex items-center gap-2">
                <BarChart3 className="w-4 h-4" /> Platform Stats
              </button>
              <button className="w-full text-left px-3.5 py-2.5 rounded-xl text-stone-400 hover:bg-stone-800 hover:text-white transition-all flex items-center gap-2">
                <Store className="w-4 h-4" /> All Salons
              </button>
              <button className="w-full text-left px-3.5 py-2.5 rounded-xl text-stone-400 hover:bg-stone-800 hover:text-white transition-all flex items-center gap-2">
                <ShieldCheck className="w-4 h-4" /> Pending Approvals
              </button>
            </nav>
          </aside>

          <main className="flex-1 p-8 space-y-8">
            <div>
              <h1 className="text-2xl font-extrabold text-[#171717]">Super Admin Management</h1>
              <p className="text-xs text-[#858585] mt-1">Multi-vendor platform management console</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-2xl border border-stone-200 shadow-sm">
                <p className="text-xs text-[#858585] font-extrabold uppercase tracking-wider">Total Registered Salons</p>
                <p className="text-3xl font-extrabold text-[#171717] mt-2">28</p>
              </div>
              <div className="bg-white p-6 rounded-2xl border border-stone-200 shadow-sm">
                <p className="text-xs text-[#858585] font-extrabold uppercase tracking-wider">Platform Gross Revenue</p>
                <p className="text-3xl font-extrabold text-[#C7A77B] mt-2">₹4,82,000</p>
              </div>
              <div className="bg-white p-6 rounded-2xl border border-stone-200 shadow-sm">
                <p className="text-xs text-[#858585] font-extrabold uppercase tracking-wider">Pending Approvals</p>
                <p className="text-3xl font-extrabold text-amber-600 mt-2">3 Salons</p>
              </div>
            </div>
          </main>
        </div>
      )}
    </div>
  );
}
