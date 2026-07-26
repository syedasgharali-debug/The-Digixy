import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  X, 
  ChevronLeft, 
  ChevronRight, 
  Clock, 
  Globe, 
  User, 
  Mail, 
  Phone, 
  Check, 
  Calendar,
  Sparkles
} from 'lucide-react';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const BookingModal: React.FC<BookingModalProps> = ({ isOpen, onClose }) => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [timezone, setTimezone] = useState('America/New_York (EST)');
  
  // Form fields
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [brief, setBrief] = useState('');
  const [isBooked, setIsBooked] = useState(false);

  const timeSlots = [
    '09:00 AM',
    '10:30 AM',
    '11:00 AM',
    '01:30 PM',
    '03:00 PM',
    '04:30 PM'
  ];

  const timezones = [
    { value: 'America/New_York (EST)', label: 'Eastern Standard Time (EST)' },
    { value: 'America/Chicago (CST)', label: 'Central Standard Time (CST)' },
    { value: 'Europe/London (BST)', label: 'London GMT/BST' },
    { value: 'Australia/Sydney (AEST)', label: 'Sydney AEST' },
  ];

  const getDaysInMonth = (year: number, month: number) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (year: number, month: number) => {
    return new Date(year, month, 1).getDay();
  };

  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth();

  const daysInMonth = getDaysInMonth(currentYear, currentMonth);
  const firstDayIndex = getFirstDayOfMonth(currentYear, currentMonth);

  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const handlePrevMonth = () => {
    setCurrentDate(new Date(currentYear, currentMonth - 1, 1));
  };

  const handleNextMonth = () => {
    setCurrentDate(new Date(currentYear, currentMonth + 1, 1));
  };

  const handleSelectDay = (dayNum: number) => {
    const d = new Date(currentYear, currentMonth, dayNum);
    setSelectedDate(d);
    setSelectedTime(null); // Reset time when date changes
  };

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (selectedDate && selectedTime && name && email) {
      setIsBooked(true);
    }
  };

  const handleClose = () => {
    setIsBooked(false);
    setSelectedDate(null);
    setSelectedTime(null);
    setName('');
    setEmail('');
    setPhone('');
    setBrief('');
    onClose();
  };

  // Helper to check if a day is today or in the future
  const isDateSelectable = (dayNum: number) => {
    const checkDate = new Date(currentYear, currentMonth, dayNum);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return checkDate >= today;
  };

  const isToday = (dayNum: number) => {
    const checkDate = new Date(currentYear, currentMonth, dayNum);
    const today = new Date();
    return checkDate.getDate() === today.getDate() &&
      checkDate.getMonth() === today.getMonth() &&
      checkDate.getFullYear() === today.getFullYear();
  };

  // Generate calendar days
  const calendarCells = [];
  // Empty slots for preceding days
  for (let i = 0; i < firstDayIndex; i++) {
    calendarCells.push(<div key={`empty-${i}`} className="h-10 sm:h-12" />);
  }
  // Days of month
  for (let day = 1; day <= daysInMonth; day++) {
    const selectable = isDateSelectable(day);
    const active = selectedDate?.getDate() === day && selectedDate?.getMonth() === currentMonth && selectedDate?.getFullYear() === currentYear;
    
    calendarCells.push(
      <button
        key={`day-${day}`}
        type="button"
        disabled={!selectable}
        onClick={() => handleSelectDay(day)}
        className={`h-10 sm:h-12 w-10 sm:w-12 rounded-xl text-xs sm:text-sm font-bold flex items-center justify-center transition-all ${
          active 
            ? 'bg-brand-accent text-brand-white shadow-lg scale-105'
            : selectable
              ? isToday(day)
                ? 'bg-brand-black/5 text-brand-accent hover:bg-brand-black/10 border border-brand-accent/20'
                : 'text-brand-black hover:bg-brand-black/5'
              : 'text-brand-black/20 cursor-not-allowed'
        }`}
      >
        {day}
      </button>
    );
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-3 md:p-6 overflow-y-auto">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="absolute inset-0 bg-brand-black/95 backdrop-blur-md"
          />
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-5xl bg-brand-beige rounded-[2rem] overflow-hidden shadow-[0_50px_100px_rgba(0,0,0,0.5)] border border-brand-black/5 z-10"
          >
            <button 
              onClick={handleClose}
              className="absolute top-6 right-6 p-3 bg-brand-black text-brand-white rounded-full hover:bg-brand-accent transition-colors z-20"
            >
              <X size={18} />
            </button>

            <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[500px]">
              {/* Left Side: Detail Overview */}
              <div className="lg:col-span-4 bg-brand-black p-8 sm:p-12 text-brand-white flex flex-col justify-between relative overflow-hidden">
                <div className="relative z-10 space-y-12">
                  <div>
                    <span className="text-[9px] font-black uppercase tracking-[0.2em] text-brand-accent">DIRECT BOOKING HUB</span>
                    <h3 className="text-3xl font-display font-black uppercase tracking-tight leading-none mt-2">
                      Schedule a <br />
                      <span className="text-brand-accent italic font-serif font-normal lowercase tracking-normal">Consultation</span>
                    </h3>
                  </div>

                  <div className="space-y-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-10 h-10 rounded-xl bg-brand-white/5 border border-brand-white/10 flex items-center justify-center text-brand-accent">
                        <Clock size={16} />
                      </div>
                      <div>
                        <div className="text-[9px] font-black uppercase tracking-wider text-brand-white/40">Duration</div>
                        <div className="text-sm font-bold text-brand-beige">30 Minutes • Video Call</div>
                      </div>
                    </div>

                    <div className="flex items-center space-x-4">
                      <div className="w-10 h-10 rounded-xl bg-brand-white/5 border border-brand-white/10 flex items-center justify-center text-brand-accent">
                        <Globe size={16} />
                      </div>
                      <div>
                        <div className="text-[9px] font-black uppercase tracking-wider text-brand-white/40">Routing Link</div>
                        <div className="text-sm font-bold text-brand-beige">Secure Google Meet</div>
                      </div>
                    </div>

                    <div className="flex items-center space-x-4">
                      <div className="w-10 h-10 rounded-xl bg-brand-white/5 border border-brand-white/10 overflow-hidden flex items-center justify-center border-brand-accent/20">
                        <img 
                          src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=120" 
                          alt="Strategic Advisor" 
                          className="w-full h-full object-cover object-center grayscale"
                          referrerPolicy="no-referrer"
                        />
                      </div>
                      <div>
                        <div className="text-[9px] font-black uppercase tracking-wider text-brand-white/40">Meeting Host</div>
                        <div className="text-sm font-bold text-brand-beige">Sarah Jenkins • Strategy Lead</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="relative z-10 pt-8 border-t border-brand-white/10 space-y-2 mt-8 lg:mt-0">
                  <div className="flex items-center space-x-2 text-[9px] font-black uppercase tracking-wider text-green-400">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                    <span>Real-time Calendar Sync</span>
                  </div>
                  <p className="text-xs text-brand-white/40 leading-relaxed font-light">
                    Select your preferred zone, select a valid date, and choose from our live available meeting intervals.
                  </p>
                </div>
                
                {/* Visual geometric accent */}
                <div className="absolute -bottom-24 -left-24 text-[24rem] font-black text-brand-white/[0.02] select-none pointer-events-none italic">
                  XY
                </div>
              </div>

              {/* Right Side: Interactive Scheduling Stream */}
              <div className="lg:col-span-8 p-6 sm:p-12 max-h-[85vh] lg:max-h-[90vh] overflow-y-auto bg-brand-beige">
                <AnimatePresence mode="wait">
                  {!isBooked ? (
                    <motion.div
                      key="scheduling-flow"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="space-y-8"
                    >
                      {/* Step 1: Calendar & Time Slots */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        
                        {/* Interactive Calendar widget */}
                        <div className="space-y-4">
                          <div className="flex items-center justify-between">
                            <span className="text-[10px] font-black uppercase tracking-widest text-brand-black/50">1. Select Date</span>
                            
                            <div className="flex items-center space-x-1">
                              <button 
                                type="button" 
                                onClick={handlePrevMonth}
                                className="p-1.5 rounded-lg hover:bg-brand-black/5 text-brand-black/70"
                              >
                                <ChevronLeft size={16} />
                              </button>
                              <span className="text-xs font-black uppercase tracking-widest text-brand-black px-2">
                                {monthNames[currentMonth]} {currentYear}
                              </span>
                              <button 
                                type="button" 
                                onClick={handleNextMonth}
                                className="p-1.5 rounded-lg hover:bg-brand-black/5 text-brand-black/70"
                              >
                                <ChevronRight size={16} />
                              </button>
                            </div>
                          </div>

                          <div className="bg-brand-white rounded-2xl p-4 border border-brand-black/5 shadow-sm">
                            {/* Weekday Labels */}
                            <div className="grid grid-cols-7 gap-1 text-center mb-2">
                              {['SU', 'MO', 'TU', 'WE', 'TH', 'FR', 'SA'].map((w) => (
                                <div key={w} className="text-[8px] font-black text-brand-black/30 tracking-widest py-1">
                                  {w}
                                </div>
                              ))}
                            </div>

                            {/* Calendar Grid cells */}
                            <div className="grid grid-cols-7 gap-1">
                              {calendarCells}
                            </div>
                          </div>
                        </div>

                        {/* Interactive Time Selector */}
                        <div className="space-y-4">
                          <span className="text-[10px] font-black uppercase tracking-widest text-brand-black/50 block">2. Select Time</span>
                          
                          {selectedDate ? (
                            <div className="space-y-4">
                              <div className="text-xs font-bold text-brand-black/70 flex items-center space-x-2">
                                <Calendar size={14} className="text-brand-accent" />
                                <span>Selected Date: {selectedDate.toLocaleDateString('en-US', { weekday: 'short', month: 'long', day: 'numeric', year: 'numeric' })}</span>
                              </div>
                              
                              <div className="grid grid-cols-2 gap-2">
                                {timeSlots.map((time) => (
                                  <button
                                    key={time}
                                    type="button"
                                    onClick={() => setSelectedTime(time)}
                                    className={`py-3.5 px-4 rounded-xl font-bold text-xs uppercase tracking-wider transition-all duration-300 ${
                                      selectedTime === time
                                        ? 'bg-brand-black text-brand-white shadow-md scale-102'
                                        : 'bg-brand-white hover:bg-brand-black/5 text-brand-black border border-brand-black/5'
                                    }`}
                                  >
                                    {time}
                                  </button>
                                ))}
                              </div>
                            </div>
                          ) : (
                            <div className="h-full flex flex-col items-center justify-center p-8 bg-brand-white/40 rounded-2xl border border-dashed border-brand-black/10 text-center min-h-[180px]">
                              <Calendar size={28} className="text-brand-black/20 mb-2.5" />
                              <div className="text-xs font-bold text-brand-black/40">Please select an available date first to reveal meeting time slots.</div>
                            </div>
                          )}
                        </div>
                      </div>

                      {/* Timezone Indicator */}
                      <div className="p-4 bg-brand-white rounded-xl border border-brand-black/5 flex flex-col sm:flex-row sm:items-center justify-between gap-3 shadow-sm">
                        <div className="flex items-center space-x-2.5 text-xs text-brand-black/60">
                          <Globe size={14} className="text-brand-accent" />
                          <span>All times synced to chosen locale:</span>
                        </div>
                        <select 
                          value={timezone}
                          onChange={(e) => setTimezone(e.target.value)}
                          className="bg-transparent border-none outline-none font-bold text-xs text-brand-black focus:ring-1 focus:ring-brand-accent p-1.5 rounded-lg cursor-pointer"
                        >
                          {timezones.map((tz) => (
                            <option key={tz.value} value={tz.value}>
                              {tz.label}
                            </option>
                          ))}
                        </select>
                      </div>

                      {/* Step 3: Attendee Details */}
                      {selectedDate && selectedTime && (
                        <motion.div
                          initial={{ opacity: 0, y: 15 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="space-y-5 pt-4 border-t border-brand-black/10"
                        >
                          <span className="text-[10px] font-black uppercase tracking-widest text-brand-black/50 block">3. Personal Details</span>
                          
                          <form onSubmit={handleBookingSubmit} className="space-y-4">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                              <div className="relative">
                                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-brand-black/30">
                                  <User size={16} />
                                </span>
                                <input 
                                  required 
                                  type="text" 
                                  placeholder="Full Name" 
                                  value={name}
                                  onChange={(e) => setName(e.target.value)}
                                  className="w-full pl-12 pr-4 py-4 bg-brand-white border border-brand-black/5 rounded-xl focus:ring-2 focus:ring-brand-accent outline-none transition-all font-medium text-sm text-brand-black shadow-sm" 
                                />
                              </div>
                              <div className="relative">
                                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-brand-black/30">
                                  <Mail size={16} />
                                </span>
                                <input 
                                  required 
                                  type="email" 
                                  placeholder="Email Address" 
                                  value={email}
                                  onChange={(e) => setEmail(e.target.value)}
                                  className="w-full pl-12 pr-4 py-4 bg-brand-white border border-brand-black/5 rounded-xl focus:ring-2 focus:ring-brand-accent outline-none transition-all font-medium text-sm text-brand-black shadow-sm" 
                                />
                              </div>
                            </div>

                            <div className="relative">
                              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-brand-black/30">
                                <Phone size={16} />
                              </span>
                              <input 
                                type="tel" 
                                placeholder="Phone Number (Optional)" 
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                                className="w-full pl-12 pr-4 py-4 bg-brand-white border border-brand-black/5 rounded-xl focus:ring-2 focus:ring-brand-accent outline-none transition-all font-medium text-sm text-brand-black shadow-sm" 
                              />
                            </div>

                            <div>
                              <textarea 
                                rows={2} 
                                placeholder="What is your core business objective or question for this consultation?" 
                                value={brief}
                                onChange={(e) => setBrief(e.target.value)}
                                className="w-full p-4 bg-brand-white border border-brand-black/5 rounded-xl focus:ring-2 focus:ring-brand-accent outline-none transition-all resize-none font-medium text-sm text-brand-black shadow-sm" 
                              />
                            </div>

                            <button 
                              type="submit"
                              className="w-full py-4 bg-brand-accent text-brand-white rounded-xl font-black uppercase tracking-[0.4em] text-[10px] sm:text-xs hover:bg-brand-black transition-all shadow-xl shadow-brand-accent/20 hover:scale-[1.01] active:scale-[0.99]"
                            >
                              Confirm Appointment Slot
                            </button>
                          </form>
                        </motion.div>
                      )}
                    </motion.div>
                  ) : (
                    <motion.div
                      key="success-booking"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      className="text-center py-12 flex flex-col items-center justify-center"
                    >
                      <div className="w-20 h-20 bg-brand-black text-brand-accent rounded-full flex items-center justify-center mb-8 shadow-2xl relative">
                        <motion.div 
                          animate={{ scale: [1, 1.2, 1] }}
                          transition={{ repeat: Infinity, duration: 2 }}
                          className="absolute inset-0 bg-brand-accent/20 rounded-full"
                        />
                        <Check size={40} className="relative z-10 text-brand-accent" />
                      </div>

                      <span className="text-[10px] font-black uppercase tracking-[0.4em] text-brand-accent mb-3 block">SCHEDULING APPOINTMENT CONFIRMED</span>
                      <h4 className="text-3xl md:text-4xl font-display font-black text-brand-black uppercase tracking-tighter mb-4 leading-none">Consultation Booked.</h4>
                      
                      <div className="max-w-md bg-brand-white rounded-2xl p-6 border border-brand-black/5 shadow-md mb-8 text-left space-y-4 w-full">
                        <div className="text-[9px] font-black uppercase tracking-widest text-brand-black/40 border-b border-brand-black/5 pb-2">APPOINTMENT LOGISTICS</div>
                        
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div className="space-y-0.5">
                            <span className="text-[8px] font-black uppercase tracking-widest text-brand-black/30">Client Name</span>
                            <div className="text-sm font-bold text-brand-black">{name}</div>
                          </div>
                          <div className="space-y-0.5">
                            <span className="text-[8px] font-black uppercase tracking-widest text-brand-black/30">Host Lead</span>
                            <div className="text-sm font-bold text-brand-black">Sarah Jenkins</div>
                          </div>
                          <div className="space-y-0.5">
                            <span className="text-[8px] font-black uppercase tracking-widest text-brand-black/30">Date Scheduled</span>
                            <div className="text-sm font-bold text-brand-black">
                              {selectedDate?.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                            </div>
                          </div>
                          <div className="space-y-0.5">
                            <span className="text-[8px] font-black uppercase tracking-widest text-brand-black/30">Time Sync</span>
                            <div className="text-sm font-bold text-brand-black">{selectedTime}</div>
                          </div>
                        </div>

                        <div className="pt-3 border-t border-brand-black/5 flex items-center justify-between text-[10px] font-black uppercase tracking-widest text-brand-accent">
                          <span className="flex items-center space-x-1.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                            <span>Google Meet Link Dispatched</span>
                          </span>
                        </div>
                      </div>

                      <p className="text-brand-black/60 text-sm font-light leading-relaxed max-w-sm mb-10">
                        An invite with the Google Meet conference details has been dispatched to <strong className="text-brand-black font-semibold">{email}</strong>. We look forward to engineering your next scale chapter.
                      </p>

                      <div className="flex flex-col sm:flex-row gap-4 w-full max-w-xs">
                        <button 
                          onClick={handleClose}
                          className="flex-1 py-4 bg-brand-black text-brand-white rounded-full font-black uppercase tracking-[0.3em] text-[10px] hover:bg-brand-accent transition-all hover:scale-105 active:scale-95 shadow-md"
                        >
                          Return to Hub
                        </button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
