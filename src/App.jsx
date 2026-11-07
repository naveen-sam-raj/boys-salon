import React, { useState } from 'react';
import { 
  Scissors, 
  Calendar, 
  Clock, 
  MapPin, 
  Phone, 
  Mail, 
  Star, 
  CheckCircle2, 
  Sparkles, 
  ShieldCheck, 
  Coffee, 
  Award, 
  ChevronRight, 
  X, 
  Menu, 
  User, 
  Check, 
  Instagram, 
  Facebook, 
  Twitter 
} from 'lucide-react';

const SERVICES = [
  {
    id: 's1',
    category: 'Hair',
    name: 'Signature Executive Cut',
    duration: '45 mins',
    price: '$45',
    description: 'Precision scissor & clipper cut, consultation, invigorating scalp wash, and custom styling.'
  },
  {
    id: 's2',
    category: 'Hair',
    name: 'Skin Fade & Taper',
    duration: '40 mins',
    price: '$40',
    description: 'Ultra-clean razor fade blended to absolute perfection with foil shaver finish and lineup.'
  },
  {
    id: 's3',
    category: 'Beard',
    name: 'Hot Towel Royal Shave',
    duration: '35 mins',
    price: '$35',
    description: 'Classic straight-razor shave with essential oil warm towels, pre-shave lather, and cooling balm.'
  },
  {
    id: 's4',
    category: 'Beard',
    name: 'Beard Sculpt & Contour',
    duration: '30 mins',
    price: '$30',
    description: 'Beard shape definition, razor cheek line cleanup, length trim, and nourishing organic beard oil.'
  },
  {
    id: 's5',
    category: 'Spa',
    name: 'Deep Detox Charcoal Facial',
    duration: '45 mins',
    price: '$55',
    description: 'Pore unclogging steam therapy, blackhead extraction, charcoal mask, and anti-fatigue moisturizer.'
  },
  {
    id: 's6',
    category: 'Spa',
    name: 'Revitalizing Scalp Treatment',
    duration: '30 mins',
    price: '$35',
    description: 'Tea tree exfoliating scrub, 15-minute tension relief head massage, and hair follicle therapy.'
  },
  {
    id: 's7',
    category: 'Combo',
    name: 'The Gentleman’s Ritual',
    duration: '75 mins',
    price: '$75',
    description: 'Signature Haircut + Royal Beard Sculpt + Steam Hot Towel + complimentary espresso.'
  },
  {
    id: 's8',
    category: 'Combo',
    name: 'Full VIP Grooming Package',
    duration: '110 mins',
    price: '$120',
    description: 'Executive cut, beard detailing, facial detox, scalp massage, and take-home styling product.'
  },
];

const BARBERS = [
  {
    id: 'b1',
    name: 'Naveen Raj',
    role: 'Master Barber & Founder',
    experience: '9+ Years Exp',
    rating: '4.98',
    specialty: 'Fades & Modern Texture',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 'b2',
    name: 'Marcus Cole',
    role: 'Senior Stylist',
    experience: '7 Years Exp',
    rating: '4.95',
    specialty: 'Classic Scissor Cuts & Pompadours',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 'b3',
    name: 'Alex Rivera',
    role: 'Beard Specialist',
    experience: '6 Years Exp',
    rating: '4.92',
    specialty: 'Straight-Razor Shaves & Beard Art',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 'b4',
    name: 'David Vance',
    role: 'Grooming & Spa Expert',
    experience: '5 Years Exp',
    rating: '4.96',
    specialty: 'Facials, Scalp Therapy & Fades',
    image: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=400&q=80'
  }
];

const REVIEWS = [
  {
    id: 1,
    name: 'Julian Hayes',
    role: 'Verified Client',
    comment: 'The finest barbershop in town. Naveen’s attention to detail on the skin fade is unmatched. The hot towel service makes it a true luxury experience.',
    rating: 5,
    date: '2 days ago'
  },
  {
    id: 2,
    name: 'Liam Henderson',
    role: 'Verified Client',
    comment: 'Got The Gentleman’s Ritual before my wedding. Top tier craftsmanship, chill music, complimentary espresso, and the haircut stayed looking crisp for weeks.',
    rating: 5,
    date: '1 week ago'
  },
  {
    id: 3,
    name: 'Daniel Carter',
    role: 'Verified Client',
    comment: 'Marcus transformed my look completely. Great consultation, friendly vibe, and exceptionally clean facility. Will not go anywhere else.',
    rating: 5,
    date: '3 weeks ago'
  }
];

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  // Booking Form State
  const [selectedService, setSelectedService] = useState(SERVICES[0]);
  const [selectedBarber, setSelectedBarber] = useState(BARBERS[0]);
  const [selectedDate, setSelectedDate] = useState('2026-11-08');
  const [selectedTime, setSelectedTime] = useState('11:00 AM');
  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [bookingConfirmed, setBookingConfirmed] = useState(false);

  const categories = ['All', 'Hair', 'Beard', 'Spa', 'Combo'];

  const filteredServices = selectedCategory === 'All' 
    ? SERVICES 
    : SERVICES.filter(s => s.category === selectedCategory);

  const handleOpenBooking = (service) => {
    if (service) setSelectedService(service);
    setBookingConfirmed(false);
    setIsBookingOpen(true);
  };

  const handleConfirmBooking = (e) => {
    e.preventDefault();
    if (!customerName || !customerPhone) return;
    setBookingConfirmed(true);
  };

  const timeSlots = [
    '09:30 AM', '10:30 AM', '11:00 AM', '12:00 PM', 
    '01:30 PM', '02:30 PM', '04:00 PM', '05:30 PM', '06:30 PM'
  ];

  return (
    <div className="min-h-screen bg-[#0e0e0e] text-zinc-100 font-sans selection:bg-[#C7A77B] selection:text-black">
      
      {/* Top Banner Bar */}
      <div className="bg-[#171717] border-b border-zinc-800 text-xs py-2 px-4 text-zinc-400">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5"><MapPin className="w-3.5 h-3.5 text-[#C7A77B]" /> 742 Evergreen Terrace, Downtown</span>
            <span className="hidden md:inline-flex items-center gap-1.5"><Clock className="w-3.5 h-3.5 text-[#C7A77B]" /> Mon - Sat: 9:00 AM - 8:00 PM</span>
          </div>
          <div className="flex items-center gap-4">
            <a href="tel:+1234567890" className="flex items-center gap-1.5 hover:text-[#C7A77B] transition-colors">
              <Phone className="w-3.5 h-3.5 text-[#C7A77B]" /> +1 (555) 725-6678
            </a>
            <span className="text-zinc-600">|</span>
            <span className="text-[#C7A77B] font-medium">Walk-ins Welcome</span>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="sticky top-0 z-40 bg-[#121212]/90 backdrop-blur-md border-b border-zinc-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#C7A77B] to-[#99794E] flex items-center justify-center shadow-lg shadow-[#C7A77B]/10">
                <Scissors className="w-6 h-6 text-[#171717]" />
              </div>
              <div>
                <span className="text-xl font-black tracking-wider text-white">BOYS<span className="text-[#C7A77B]">SALON</span></span>
                <span className="block text-[10px] tracking-[0.25em] text-zinc-400 uppercase font-semibold">Gentlemen's Lounge</span>
              </div>
            </div>

            {/* Desktop Links */}
            <div className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-300">
              <a href="#services" className="hover:text-[#C7A77B] transition-colors">Services</a>
              <a href="#barbers" className="hover:text-[#C7A77B] transition-colors">Master Barbers</a>
              <a href="#amenities" className="hover:text-[#C7A77B] transition-colors">Experience</a>
              <a href="#reviews" className="hover:text-[#C7A77B] transition-colors">Testimonials</a>
              <a href="#contact" className="hover:text-[#C7A77B] transition-colors">Location</a>
            </div>

            {/* CTA */}
            <div className="hidden md:flex items-center gap-4">
              <button 
                onClick={() => handleOpenBooking(null)}
                className="bg-[#C7A77B] hover:bg-[#b89566] text-[#121212] px-6 py-2.5 rounded-full font-bold text-sm tracking-wide transition-all shadow-md shadow-[#C7A77B]/20 hover:scale-[1.02] flex items-center gap-2"
              >
                <Calendar className="w-4 h-4" /> Book Appointment
              </button>
            </div>

            {/* Mobile Hamburger */}
            <div className="md:hidden flex items-center">
              <button 
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg text-zinc-400 hover:text-white"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#171717] border-b border-zinc-800 px-6 py-5 space-y-4">
            <a 
              href="#services" 
              onClick={() => setMobileMenuOpen(false)}
              className="block text-zinc-300 hover:text-[#C7A77B]"
            >
              Services & Pricing
            </a>
            <a 
              href="#barbers" 
              onClick={() => setMobileMenuOpen(false)}
              className="block text-zinc-300 hover:text-[#C7A77B]"
            >
              Master Barbers
            </a>
            <a 
              href="#amenities" 
              onClick={() => setMobileMenuOpen(false)}
              className="block text-zinc-300 hover:text-[#C7A77B]"
            >
              Lounge Amenities
            </a>
            <a 
              href="#reviews" 
              onClick={() => setMobileMenuOpen(false)}
              className="block text-zinc-300 hover:text-[#C7A77B]"
            >
              Client Reviews
            </a>
            <button 
              onClick={() => {
                setMobileMenuOpen(false);
                handleOpenBooking(null);
              }}
              className="w-full bg-[#C7A77B] text-[#121212] py-3 rounded-xl font-bold text-center block mt-4"
            >
              Book Appointment Now
            </button>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-12 pb-24 lg:pt-20 lg:pb-32">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(199,167,123,0.12),transparent_45%)] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1e1e1e] border border-zinc-800 text-[#C7A77B] text-xs font-semibold tracking-wider uppercase">
                <Sparkles className="w-3.5 h-3.5" /> Premium Grooming Studio
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
                CRAFTING STYLE. <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C7A77B] via-[#e2cba9] to-[#C7A77B]">
                  DEFINING CONFIDENCE.
                </span>
              </h1>
              
              <p className="text-zinc-400 text-base sm:text-lg max-w-xl mx-auto lg:mx-0 leading-relaxed">
                Step into a modern sanctuary of refined grooming. Tailored fades, classic hot towel straight-razor shaves, and custom scalp therapy designed for the modern gentleman.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
                <button 
                  onClick={() => handleOpenBooking(null)}
                  className="w-full sm:w-auto bg-[#C7A77B] hover:bg-[#b89566] text-[#121212] px-8 py-3.5 rounded-full font-bold text-sm tracking-wide transition-all shadow-lg shadow-[#C7A77B]/25 hover:shadow-xl flex items-center justify-center gap-2"
                >
                  <Calendar className="w-4 h-4" /> Book Your Seat
                </button>
                <a 
                  href="#services"
                  className="w-full sm:w-auto border border-zinc-700 hover:border-[#C7A77B] hover:text-[#C7A77B] text-zinc-300 px-8 py-3.5 rounded-full font-semibold text-sm transition-all flex items-center justify-center gap-2"
                >
                  Explore Services <ChevronRight className="w-4 h-4" />
                </a>
              </div>

              {/* Stats badges */}
              <div className="pt-8 border-t border-zinc-800/80 grid grid-cols-3 gap-4 max-w-md mx-auto lg:mx-0">
                <div>
                  <div className="text-2xl font-black text-white">4.9 ★</div>
                  <div className="text-xs text-zinc-400 mt-0.5">Google Rating</div>
                </div>
                <div>
                  <div className="text-2xl font-black text-white">12,000+</div>
                  <div className="text-xs text-zinc-400 mt-0.5">Groomed Clients</div>
                </div>
                <div>
                  <div className="text-2xl font-black text-white">100%</div>
                  <div className="text-xs text-zinc-400 mt-0.5">Satisfaction</div>
                </div>
              </div>
            </div>

            {/* Hero Visual Card */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                <div className="rounded-3xl overflow-hidden border border-zinc-800 shadow-2xl relative bg-zinc-900 group">
                  <img 
                    src="https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=800&q=80" 
                    alt="Barber styling hair"
                    className="w-full h-[460px] object-cover group-hover:scale-105 transition-transform duration-700 brightness-90"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0e0e0e] via-transparent to-transparent" />
                  
                  {/* Floating Experience Badge */}
                  <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-[#171717]/90 backdrop-blur-md border border-zinc-700/80 flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-[#C7A77B]/20 border border-[#C7A77B]/40 flex items-center justify-center text-[#C7A77B]">
                      <Award className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white">Top Rated Barber Lounge</h4>
                      <p className="text-xs text-zinc-400">Awarded Best Grooming Experience 2025</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-[#121212] border-t border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="text-xs font-bold uppercase tracking-widest text-[#C7A77B] mb-2">Our Menu</h2>
            <h3 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">Services & Craftsmanship</h3>
            <p className="text-zinc-400 mt-3 text-sm">Every treatment includes a tailored consultation, hot towel refresh, and premium organic styling products.</p>
            
            {/* Category Filter Pills */}
            <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-5 py-2 rounded-full text-xs font-bold transition-all ${
                    selectedCategory === cat 
                      ? 'bg-[#C7A77B] text-[#121212] shadow-md shadow-[#C7A77B]/20' 
                      : 'bg-[#1b1b1b] text-zinc-400 hover:text-white border border-zinc-800 hover:border-zinc-700'
                  }`}
                >
                  {cat === 'All' ? 'All Services' : cat}
                </button>
              ))}
            </div>
          </div>

          {/* Service Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredServices.map((service) => (
              <div 
                key={service.id} 
                className="bg-[#171717] rounded-2xl p-6 border border-zinc-800 hover:border-[#C7A77B]/40 transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1 shadow-lg"
              >
                <div>
                  <div className="flex justify-between items-start mb-3">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#C7A77B] bg-[#C7A77B]/10 px-2.5 py-1 rounded-md">
                      {service.category}
                    </span>
                    <span className="text-xs text-zinc-400 flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" /> {service.duration}
                    </span>
                  </div>

                  <h4 className="text-lg font-bold text-white group-hover:text-[#C7A77B] transition-colors">
                    {service.name}
                  </h4>
                  <p className="text-zinc-400 text-xs mt-2.5 leading-relaxed">
                    {service.description}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-zinc-800/80 flex items-center justify-between">
                  <span className="text-2xl font-black text-white">{service.price}</span>
                  <button 
                    onClick={() => handleOpenBooking(service)}
                    className="bg-zinc-800 hover:bg-[#C7A77B] hover:text-[#121212] text-zinc-200 text-xs font-bold px-4 py-2 rounded-xl transition-all flex items-center gap-1"
                  >
                    Select <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Meet Barbers */}
      <section id="barbers" className="py-20 bg-[#0e0e0e] border-t border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="text-xs font-bold uppercase tracking-widest text-[#C7A77B] mb-2">The Artisans</h2>
            <h3 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">Meet Our Master Barbers</h3>
            <p className="text-zinc-400 mt-3 text-sm">Passionate stylists dedicated to precision, razor sharp lines, and unmatched care.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {BARBERS.map((barber) => (
              <div 
                key={barber.id}
                className="bg-[#171717] rounded-2xl overflow-hidden border border-zinc-800 group hover:border-[#C7A77B]/50 transition-all duration-300"
              >
                <div className="relative h-64 overflow-hidden bg-zinc-800">
                  <img 
                    src={barber.image} 
                    alt={barber.name} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 right-3 bg-[#121212]/80 backdrop-blur-md px-2.5 py-1 rounded-full text-xs font-bold text-[#C7A77B] flex items-center gap-1 border border-zinc-700">
                    <Star className="w-3 h-3 fill-[#C7A77B]" /> {barber.rating}
                  </div>
                </div>

                <div className="p-5">
                  <h4 className="text-lg font-bold text-white">{barber.name}</h4>
                  <p className="text-xs text-[#C7A77B] font-medium">{barber.role}</p>
                  
                  <div className="mt-4 pt-4 border-t border-zinc-800/80 text-xs text-zinc-400 space-y-1.5">
                    <p><span className="text-zinc-300 font-semibold">Specialty:</span> {barber.specialty}</p>
                    <p><span className="text-zinc-300 font-semibold">Experience:</span> {barber.experience}</p>
                  </div>

                  <button 
                    onClick={() => {
                      setSelectedBarber(barber);
                      handleOpenBooking(null);
                    }}
                    className="w-full mt-5 bg-zinc-800 hover:bg-[#C7A77B] hover:text-[#121212] text-zinc-200 text-xs font-bold py-2.5 rounded-xl transition-all"
                  >
                    Book with {barber.name.split(' ')[0]}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience / Amenities */}
      <section id="amenities" className="py-20 bg-[#141414] border-t border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-5 space-y-6">
              <h2 className="text-xs font-bold uppercase tracking-widest text-[#C7A77B]">More Than A Haircut</h2>
              <h3 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight">
                An Exclusive Lounge Designed For You.
              </h3>
              <p className="text-zinc-400 text-sm leading-relaxed">
                We believe men’s grooming should be an invigorating, comfortable ritual. Relax in handcrafted leather chairs, sip artisanal espresso, and unwind in style.
              </p>

              <div className="space-y-4 pt-2">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#C7A77B]/10 border border-[#C7A77B]/20 flex items-center justify-center text-[#C7A77B] shrink-0">
                    <Coffee className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">Complimentary Beverage Lounge</h4>
                    <p className="text-xs text-zinc-400 mt-0.5">Freshly brewed espresso, single-origin cold brews, and sparkling beverages.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#C7A77B]/10 border border-[#C7A77B]/20 flex items-center justify-center text-[#C7A77B] shrink-0">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">Sterilized Surgical Grade Tools</h4>
                    <p className="text-xs text-zinc-400 mt-0.5">Medical-grade UV sanitization and single-use razor blades for every client.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#C7A77B]/10 border border-[#C7A77B]/20 flex items-center justify-center text-[#C7A77B] shrink-0">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">Organic Botanical Haircare</h4>
                    <p className="text-xs text-zinc-400 mt-0.5">Paraben-free and sulfate-free pomades, tonics, and conditioning oils.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-2 gap-4">
              <img 
                src="https://images.unsplash.com/photo-1585747860715-2ba37e788b70?auto=format&fit=crop&w=600&q=80" 
                alt="Vintage barber tools" 
                className="rounded-2xl border border-zinc-800 h-64 w-full object-cover"
              />
              <img 
                src="https://images.unsplash.com/photo-1621605815971-fbc98d665033?auto=format&fit=crop&w=600&q=80" 
                alt="Barber chair" 
                className="rounded-2xl border border-zinc-800 h-64 w-full object-cover mt-8"
              />
            </div>

          </div>
        </div>
      </section>

      {/* Reviews */}
      <section id="reviews" className="py-20 bg-[#0e0e0e] border-t border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="text-xs font-bold uppercase tracking-widest text-[#C7A77B] mb-2">Reputation</h2>
            <h3 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">What Our Clients Say</h3>
            <p className="text-zinc-400 mt-3 text-sm">Over 1,500+ verified 5-star ratings across Google and Yelp.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {REVIEWS.map((review) => (
              <div 
                key={review.id}
                className="bg-[#171717] p-6 rounded-2xl border border-zinc-800 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-1 text-[#C7A77B] mb-4">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#C7A77B]" />
                    ))}
                  </div>
                  <p className="text-zinc-300 text-sm leading-relaxed italic">
                    "{review.comment}"
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-zinc-800/80 flex items-center justify-between">
                  <div>
                    <h5 className="text-sm font-bold text-white">{review.name}</h5>
                    <p className="text-xs text-[#C7A77B]">{review.role}</p>
                  </div>
                  <span className="text-xs text-zinc-500">{review.date}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location & Booking CTA Banner */}
      <section id="contact" className="py-20 bg-gradient-to-b from-[#121212] to-[#171717] border-t border-zinc-800 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#1c1c1c] border border-zinc-700/80 rounded-3xl p-8 lg:p-12 shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              
              <div className="space-y-4">
                <span className="text-xs font-bold uppercase tracking-widest text-[#C7A77B]">Ready For Your Transformation?</span>
                <h3 className="text-3xl sm:text-4xl font-extrabold text-white">Book Your Experience Today</h3>
                <p className="text-zinc-400 text-sm leading-relaxed">
                  Reserve your preferred chair and stylist in under 60 seconds. We are located right in the heart of downtown with easy client parking.
                </p>

                <div className="pt-4 space-y-2 text-sm text-zinc-300">
                  <div className="flex items-center gap-3">
                    <MapPin className="w-4 h-4 text-[#C7A77B]" /> 742 Evergreen Terrace, Downtown Plaza, Suite 104
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="w-4 h-4 text-[#C7A77B]" /> +1 (555) 725-6678 (Direct Appointments)
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="w-4 h-4 text-[#C7A77B]" /> concierge@boyssalon.com
                  </div>
                </div>
              </div>

              <div className="flex flex-col items-center justify-center p-8 bg-[#141414] rounded-2xl border border-zinc-800 text-center space-y-5">
                <div className="w-14 h-14 rounded-full bg-[#C7A77B]/10 border border-[#C7A77B]/30 flex items-center justify-center text-[#C7A77B]">
                  <Calendar className="w-7 h-7" />
                </div>
                <h4 className="text-xl font-bold text-white">Online Reservation</h4>
                <p className="text-xs text-zinc-400 max-w-sm">No waiting in line. Choose your preferred barber and guaranteed time slot.</p>
                <button 
                  onClick={() => handleOpenBooking(null)}
                  className="w-full max-w-xs bg-[#C7A77B] hover:bg-[#b89566] text-[#121212] py-3.5 rounded-full font-bold text-sm tracking-wide transition-all shadow-lg shadow-[#C7A77B]/20"
                >
                  Reserve Appointment
                </button>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0b0b0b] border-t border-zinc-900 py-12 text-zinc-500 text-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-[#C7A77B] flex items-center justify-center text-[#121212]">
              <Scissors className="w-4 h-4" />
            </div>
            <span className="text-white font-bold tracking-wider">BOYS SALON</span>
            <span className="text-zinc-600">|</span>
            <span>© {new Date().getFullYear()} Boys Salon Inc. All rights reserved.</span>
          </div>

          <div className="flex items-center gap-6 text-zinc-400">
            <a href="#" className="hover:text-[#C7A77B] transition-colors"><Instagram className="w-4 h-4" /></a>
            <a href="#" className="hover:text-[#C7A77B] transition-colors"><Facebook className="w-4 h-4" /></a>
            <a href="#" className="hover:text-[#C7A77B] transition-colors"><Twitter className="w-4 h-4" /></a>
          </div>
        </div>
      </footer>

      {/* Interactive Booking Modal */}
      {isBookingOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in">
          <div className="bg-[#171717] border border-zinc-800 w-full max-w-lg rounded-3xl p-6 sm:p-8 shadow-2xl relative max-h-[90vh] overflow-y-auto">
            
            <button 
              onClick={() => setIsBookingOpen(false)}
              className="absolute top-5 right-5 text-zinc-400 hover:text-white p-2 rounded-full hover:bg-zinc-800"
            >
              <X className="w-5 h-5" />
            </button>

            {!bookingConfirmed ? (
              <form onSubmit={handleConfirmBooking} className="space-y-5">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#C7A77B]">Quick Reservation</span>
                  <h3 className="text-2xl font-black text-white mt-1">Book Your Appointment</h3>
                  <p className="text-xs text-zinc-400 mt-1">Select your service, barber, and preferred time slot.</p>
                </div>

                {/* Service Selection */}
                <div>
                  <label className="block text-xs font-semibold text-zinc-300 mb-2">1. Select Service</label>
                  <select 
                    value={selectedService.id}
                    onChange={(e) => setSelectedService(SERVICES.find(s => s.id === e.target.value))}
                    className="w-full bg-[#202020] border border-zinc-700 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-[#C7A77B]"
                  >
                    {SERVICES.map((s) => (
                      <option key={s.id} value={s.id}>
                        {s.name} - {s.price} ({s.duration})
                      </option>
                    ))}
                  </select>
                </div>

                {/* Barber Selection */}
                <div>
                  <label className="block text-xs font-semibold text-zinc-300 mb-2">2. Preferred Barber</label>
                  <div className="grid grid-cols-2 gap-2">
                    {BARBERS.map((b) => (
                      <button
                        type="button"
                        key={b.id}
                        onClick={() => setSelectedBarber(b)}
                        className={`p-3 rounded-xl border text-left flex items-center gap-2.5 transition-all ${
                          selectedBarber.id === b.id 
                            ? 'bg-[#C7A77B]/15 border-[#C7A77B] text-white' 
                            : 'bg-[#202020] border-zinc-800 text-zinc-400 hover:border-zinc-700'
                        }`}
                      >
                        <img src={b.image} alt={b.name} className="w-8 h-8 rounded-full object-cover" />
                        <div>
                          <p className="text-xs font-bold text-white">{b.name}</p>
                          <p className="text-[10px] text-zinc-400">{b.specialty.split(' ')[0]}</p>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Date & Time Selection */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-zinc-300 mb-1.5">3. Choose Date</label>
                    <input 
                      type="date" 
                      value={selectedDate}
                      onChange={(e) => setSelectedDate(e.target.value)}
                      className="w-full bg-[#202020] border border-zinc-700 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-[#C7A77B]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-zinc-300 mb-1.5">Time Slot</label>
                    <select
                      value={selectedTime}
                      onChange={(e) => setSelectedTime(e.target.value)}
                      className="w-full bg-[#202020] border border-zinc-700 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-[#C7A77B]"
                    >
                      {timeSlots.map(time => (
                        <option key={time} value={time}>{time}</option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Contact Info */}
                <div className="space-y-3 pt-1">
                  <label className="block text-xs font-semibold text-zinc-300">4. Your Details</label>
                  <input 
                    type="text" 
                    placeholder="Full Name" 
                    required
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                    className="w-full bg-[#202020] border border-zinc-700 rounded-xl px-4 py-2.5 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-[#C7A77B]"
                  />
                  <input 
                    type="tel" 
                    placeholder="Phone Number (e.g. +1 555-0199)" 
                    required
                    value={customerPhone}
                    onChange={(e) => setCustomerPhone(e.target.value)}
                    className="w-full bg-[#202020] border border-zinc-700 rounded-xl px-4 py-2.5 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-[#C7A77B]"
                  />
                </div>

                <div className="pt-2">
                  <button 
                    type="submit"
                    className="w-full bg-[#C7A77B] hover:bg-[#b89566] text-[#121212] py-3.5 rounded-xl font-bold text-sm tracking-wide transition-all shadow-lg shadow-[#C7A77B]/20"
                  >
                    Confirm Booking (${selectedService.price})
                  </button>
                </div>
              </form>
            ) : (
              <div className="text-center py-6 space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 mx-auto flex items-center justify-center border border-emerald-500/40">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                
                <h3 className="text-2xl font-black text-white">Booking Confirmed!</h3>
                <p className="text-xs text-zinc-400 max-w-sm mx-auto">
                  Thank you, <span className="text-white font-semibold">{customerName}</span>. Your appointment has been successfully scheduled.
                </p>

                <div className="bg-[#202020] rounded-2xl p-4 text-left text-xs space-y-2 border border-zinc-800 my-4">
                  <div className="flex justify-between">
                    <span className="text-zinc-400">Service:</span>
                    <span className="font-semibold text-white">{selectedService.name}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-zinc-400">Barber:</span>
                    <span className="font-semibold text-white">{selectedBarber.name}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-zinc-400">Date & Time:</span>
                    <span className="font-semibold text-[#C7A77B]">{selectedDate} at {selectedTime}</span>
                  </div>
                  <div className="flex justify-between border-t border-zinc-800 pt-2">
                    <span className="text-zinc-400">Total Price:</span>
                    <span className="font-bold text-white text-sm">{selectedService.price}</span>
                  </div>
                </div>

                <p className="text-[11px] text-zinc-500">
                  A confirmation SMS has been dispatched to {customerPhone}.
                </p>

                <button 
                  onClick={() => setIsBookingOpen(false)}
                  className="w-full bg-[#C7A77B] text-[#121212] py-3 rounded-xl font-bold text-sm mt-4"
                >
                  Done
                </button>
              </div>
            )}

          </div>
        </div>
      )}

    </div>
  );
}
