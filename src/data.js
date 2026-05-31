// All times converted to Lebanon Time (LBT = UTC+3, which is UAE/GST minus 1 hour)
const TEAMS = [
  // ── ARAB NATIONS ──────────────────────────────────────────────
  {
    id: "saudi-arabia",
    name: "Saudi Arabia",
    flag: "🇸🇦",
    group: "H",
    category: "arab",
    color: "#006233",
    textColor: "#ffffff",
    matches: [
      { date: "Mon 15 Jun", time: "10:00 PM", opponent: "Uruguay", venue: "Miami", opponentFlag: "🇺🇾" },
      { date: "Sun 21 Jun", time: "7:00 PM",  opponent: "Spain",   venue: "Atlanta", opponentFlag: "🇪🇸" },
      { date: "Sat 27 Jun", time: "3:00 AM",  opponent: "Cape Verde", venue: "Houston", opponentFlag: "🇨🇻" },
    ]
  },
  {
    id: "morocco",
    name: "Morocco",
    flag: "🇲🇦",
    group: "C",
    category: "arab",
    color: "#c1272d",
    textColor: "#ffffff",
    matches: [
      { date: "Sun 14 Jun", time: "1:00 AM",  opponent: "Brazil",   venue: "New York", opponentFlag: "🇧🇷" },
      { date: "Sat 20 Jun", time: "1:00 AM",  opponent: "Scotland", venue: "Boston",   opponentFlag: "🏴󠁧󠁢󠁳󠁣󠁴󠁿" },
      { date: "Thu 25 Jun", time: "1:00 AM",  opponent: "Haiti",    venue: "Atlanta",  opponentFlag: "🇭🇹" },
    ]
  },
  {
    id: "egypt",
    name: "Egypt",
    flag: "🇪🇬",
    group: "G",
    category: "arab",
    color: "#c8102e",
    textColor: "#ffffff",
    matches: [
      { date: "Mon 15 Jun", time: "10:00 PM", opponent: "Belgium",     venue: "Seattle",   opponentFlag: "🇧🇪", derby: true, derbyLabel: "vs Muslim nation" },
      { date: "Mon 22 Jun", time: "4:00 AM",  opponent: "New Zealand", venue: "Vancouver", opponentFlag: "🇳🇿" },
      { date: "Sat 27 Jun", time: "6:00 AM",  opponent: "Iran",        venue: "Seattle",   opponentFlag: "🇮🇷", derby: true, derbyLabel: "Muslim derby" },
    ]
  },
  {
    id: "iraq",
    name: "Iraq",
    flag: "🇮🇶",
    group: "I",
    category: "arab",
    color: "#1a7a3f",
    textColor: "#ffffff",
    matches: [
      { date: "Wed 17 Jun", time: "1:00 AM",  opponent: "Norway",  venue: "Boston",      opponentFlag: "🇳🇴" },
      { date: "Tue 23 Jun", time: "12:00 AM", opponent: "France",  venue: "Philadelphia",opponentFlag: "🇫🇷" },
      { date: "Fri 26 Jun", time: "10:00 PM", opponent: "Senegal", venue: "Toronto",     opponentFlag: "🇸🇳", derby: true, derbyLabel: "Muslim derby" },
    ]
  },
  {
    id: "algeria",
    name: "Algeria",
    flag: "🇩🇿",
    group: "J",
    category: "arab",
    color: "#006233",
    textColor: "#ffffff",
    matches: [
      { date: "Wed 17 Jun", time: "4:00 AM",  opponent: "Argentina", venue: "Kansas City", opponentFlag: "🇦🇷" },
      { date: "Tue 23 Jun", time: "6:00 AM",  opponent: "Jordan",    venue: "SF Bay Area", opponentFlag: "🇯🇴", derby: true, derbyLabel: "Arab derby" },
      { date: "Sun 28 Jun", time: "5:00 AM",  opponent: "Austria",   venue: "Kansas City", opponentFlag: "🇦🇹" },
    ]
  },
  {
    id: "jordan",
    name: "Jordan",
    flag: "🇯🇴",
    group: "J",
    category: "arab",
    color: "#007a3d",
    textColor: "#ffffff",
    matches: [
      { date: "Wed 17 Jun", time: "7:00 AM",  opponent: "Austria",   venue: "SF Bay Area", opponentFlag: "🇦🇹" },
      { date: "Tue 23 Jun", time: "6:00 AM",  opponent: "Algeria",   venue: "SF Bay Area", opponentFlag: "🇩🇿", derby: true, derbyLabel: "Arab derby" },
      { date: "Sun 28 Jun", time: "5:00 AM",  opponent: "Argentina", venue: "Dallas",      opponentFlag: "🇦🇷" },
    ]
  },
  {
    id: "tunisia",
    name: "Tunisia",
    flag: "🇹🇳",
    group: "F",
    category: "arab",
    color: "#e70013",
    textColor: "#ffffff",
    matches: [
      { date: "Mon 15 Jun", time: "5:00 AM",  opponent: "Sweden",      venue: "Monterrey",   opponentFlag: "🇸🇪" },
      { date: "Sun 21 Jun", time: "7:00 AM",  opponent: "Japan",       venue: "Monterrey",   opponentFlag: "🇯🇵" },
      { date: "Fri 26 Jun", time: "2:00 AM",  opponent: "Netherlands", venue: "Kansas City", opponentFlag: "🇳🇱" },
    ]
  },
  {
    id: "qatar",
    name: "Qatar",
    flag: "🇶🇦",
    group: "B",
    category: "arab",
    color: "#8d1b3d",
    textColor: "#ffffff",
    matches: [
      { date: "Sat 13 Jun", time: "10:00 PM", opponent: "Switzerland", venue: "SF Bay Area", opponentFlag: "🇨🇭" },
      { date: "Fri 19 Jun", time: "1:00 AM",  opponent: "Canada",      venue: "Vancouver",   opponentFlag: "🇨🇦" },
      { date: "Wed 24 Jun", time: "10:00 PM", opponent: "Bosnia",      venue: "Seattle",     opponentFlag: "🇧🇦", derby: true, derbyLabel: "Muslim derby" },
    ]
  },

  // ── OTHER MUSLIM-MAJORITY ──────────────────────────────────────
  {
    id: "turkiye",
    name: "Türkiye",
    flag: "🇹🇷",
    group: "D",
    category: "muslim",
    color: "#e30a17",
    textColor: "#ffffff",
    matches: [
      { date: "Sun 14 Jun", time: "7:00 AM",  opponent: "Australia", venue: "Vancouver",   opponentFlag: "🇦🇺" },
      { date: "Sat 20 Jun", time: "6:00 AM",  opponent: "Paraguay",  venue: "SF Bay Area", opponentFlag: "🇵🇾" },
      { date: "Fri 26 Jun", time: "5:00 AM",  opponent: "USA",       venue: "Los Angeles", opponentFlag: "🇺🇸" },
    ]
  },
  {
    id: "senegal",
    name: "Senegal",
    flag: "🇸🇳",
    group: "I",
    category: "muslim",
    color: "#00853f",
    textColor: "#ffffff",
    matches: [
      { date: "Tue 16 Jun", time: "10:00 PM", opponent: "France",  venue: "New York", opponentFlag: "🇫🇷" },
      { date: "Tue 23 Jun", time: "3:00 AM",  opponent: "Norway",  venue: "New York", opponentFlag: "🇳🇴" },
      { date: "Fri 26 Jun", time: "10:00 PM", opponent: "Iraq",    venue: "Toronto",  opponentFlag: "🇮🇶", derby: true, derbyLabel: "Muslim derby" },
    ]
  },
  {
    id: "iran",
    name: "Iran",
    flag: "🇮🇷",
    group: "G",
    category: "muslim",
    color: "#239f40",
    textColor: "#ffffff",
    matches: [
      { date: "Tue 16 Jun", time: "4:00 AM",  opponent: "New Zealand", venue: "Los Angeles", opponentFlag: "🇳🇿" },
      { date: "Sun 21 Jun", time: "10:00 PM", opponent: "Belgium",     venue: "Los Angeles", opponentFlag: "🇧🇪" },
      { date: "Sat 27 Jun", time: "6:00 AM",  opponent: "Egypt",       venue: "Seattle",     opponentFlag: "🇪🇬", derby: true, derbyLabel: "Muslim derby" },
    ]
  },
  {
    id: "bosnia",
    name: "Bosnia & Herz.",
    flag: "🇧🇦",
    group: "B",
    category: "muslim",
    color: "#002395",
    textColor: "#ffffff",
    matches: [
      { date: "Fri 12 Jun", time: "10:00 PM", opponent: "Canada",      venue: "Toronto",     opponentFlag: "🇨🇦" },
      { date: "Thu 18 Jun", time: "10:00 PM", opponent: "Switzerland", venue: "Los Angeles", opponentFlag: "🇨🇭" },
      { date: "Wed 24 Jun", time: "10:00 PM", opponent: "Qatar",       venue: "Seattle",     opponentFlag: "🇶🇦", derby: true, derbyLabel: "Muslim derby" },
    ]
  },
  {
    id: "uzbekistan",
    name: "Uzbekistan",
    flag: "🇺🇿",
    group: "K",
    category: "muslim",
    color: "#1eb53a",
    textColor: "#ffffff",
    matches: [
      { date: "Thu 18 Jun", time: "5:00 AM",  opponent: "Colombia",  venue: "Mexico City", opponentFlag: "🇨🇴" },
      { date: "Tue 23 Jun", time: "8:00 PM",  opponent: "Portugal",  venue: "Houston",     opponentFlag: "🇵🇹" },
      { date: "Sun 28 Jun", time: "2:30 AM",  opponent: "DR Congo",  venue: "Atlanta",     opponentFlag: "🇨🇩" },
    ]
  },
];
