// Category and Language Specific Mock News Data

const mockDatabase = {
  en: {
    general: [
      {
        title: "Global Summit 2026 Focuses on Sustainable Energy & Economic Growth",
        description: "World leaders assemble to discuss renewable transition targets, green financing initiatives, and international trade policy alignment.",
        url: "https://gnews.io",
        image: "https://images.unsplash.com/photo-1541872703-74c5e44368f9?w=800&auto=format&fit=crop",
        publishedAt: new Date().toISOString(),
        source: { name: "Global News Wire", url: "https://gnews.io" }
      },
      {
        title: "Major Infrastructure Breakthrough Unveiled in Urban Transit Network",
        description: "Next-generation high-speed electric trains reduce travel time by 40% across key metropolitan regions.",
        url: "https://gnews.io",
        image: "https://images.unsplash.com/photo-1474487548417-781cb71495f3?w=800&auto=format&fit=crop",
        publishedAt: new Date(Date.now() - 3600000).toISOString(),
        source: { name: "Daily Telegraph", url: "https://gnews.io" }
      },
      {
        title: "International Literacy & Education Mission Reaches Milestone Target",
        description: "Digital learning platforms bring quality primary education access to over 50 million students globally.",
        url: "https://gnews.io",
        image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&auto=format&fit=crop",
        publishedAt: new Date(Date.now() - 7200000).toISOString(),
        source: { name: "World Observer", url: "https://gnews.io" }
      }
    ],
    world: [
      {
        title: "UN Peace Talks Progress as Nations Agree on Regional Cooperation",
        description: "Delegates finalize landmark treaties aiming for long-term diplomatic stability, border security, and trade corridor expansion.",
        url: "https://gnews.io",
        image: "https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?w=800&auto=format&fit=crop",
        publishedAt: new Date().toISOString(),
        source: { name: "International Herald", url: "https://gnews.io" }
      },
      {
        title: "European Green Alliance Announces $50 Billion Climate Resilience Pact",
        description: "New funding package targets coastal protection, flood management, and reforestation efforts across 15 participating nations.",
        url: "https://gnews.io",
        image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=800&auto=format&fit=crop",
        publishedAt: new Date(Date.now() - 3600000).toISOString(),
        source: { name: "Euro Post", url: "https://gnews.io" }
      },
      {
        title: "Asia-Pacific Maritime Trade Sets All-Time High Shipping Volume Record",
        description: "Port automation and streamlined customs processes drive unprecedented logistics efficiency across Asian supply chains.",
        url: "https://gnews.io",
        image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&auto=format&fit=crop",
        publishedAt: new Date(Date.now() - 7200000).toISOString(),
        source: { name: "Pacific Dispatch", url: "https://gnews.io" }
      }
    ],
    nation: [
      {
        title: "National Digital Highway Project Expands High-Speed Connectivity to Rural Districts",
        description: "Fiber-optic networks connect remote villages, enabling telemedicine, digital governance, and local e-commerce.",
        url: "https://gnews.io",
        image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=800&auto=format&fit=crop",
        publishedAt: new Date().toISOString(),
        source: { name: "National Chronicle", url: "https://gnews.io" }
      },
      {
        title: "Parliament Passes Comprehensive Youth Entrepreneurship & Skill Development Bill",
        description: "The legislation allocates grants, tax relief, and mentorship programs to accelerate youth-led startups.",
        url: "https://gnews.io",
        image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800&auto=format&fit=crop",
        publishedAt: new Date(Date.now() - 3600000).toISOString(),
        source: { name: "Capital Gazette", url: "https://gnews.io" }
      },
      {
        title: "State Agriculture Board Reports Record Bumper Crop Harvest This Season",
        description: "Favorable monsoon rains and adoption of precision farming technology spur historic wheat and rice yields.",
        url: "https://gnews.io",
        image: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=800&auto=format&fit=crop",
        publishedAt: new Date(Date.now() - 7200000).toISOString(),
        source: { name: "Farmers Daily", url: "https://gnews.io" }
      }
    ],
    business: [
      {
        title: "Stock Markets Rally as Tech & Clean Energy Shares Surge to New Highs",
        description: "Investors respond positively to robust quarterly earnings reports and favorable inflation data across benchmark indexes.",
        url: "https://gnews.io",
        image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&auto=format&fit=crop",
        publishedAt: new Date().toISOString(),
        source: { name: "Financial Times", url: "https://gnews.io" }
      },
      {
        title: "Central Bank Keeps Interest Rates Steady Amid Stable Economic Growth Indicators",
        description: "Policy committee emphasizes balanced monetary approach to nurture job creation while managing consumer price indices.",
        url: "https://gnews.io",
        image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=800&auto=format&fit=crop",
        publishedAt: new Date(Date.now() - 3600000).toISOString(),
        source: { name: "Wall Street Insight", url: "https://gnews.io" }
      },
      {
        title: "Global E-Commerce Sales Forecasted to Cross $7 Trillion Mark by End of Year",
        description: "Rise in mobile shopping, AI personalization, and instant local delivery logistics power record retail growth.",
        url: "https://gnews.io",
        image: "https://images.unsplash.com/photo-1556742049-0a67daf4004a?w=800&auto=format&fit=crop",
        publishedAt: new Date(Date.now() - 7200000).toISOString(),
        source: { name: "Business Insider", url: "https://gnews.io" }
      }
    ],
    technology: [
      {
        title: "Next-Gen Quantum Microprocessors Achieve Unprecedented Speed Benchmark",
        description: "New 1,000-qubit processor architecture promises breakthrough performance for AI models, cryptography, and molecular physics.",
        url: "https://gnews.io",
        image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&auto=format&fit=crop",
        publishedAt: new Date().toISOString(),
        source: { name: "TechCrunch", url: "https://gnews.io" }
      },
      {
        title: "Autonomous EV Fleet Demonstrates 1 Million Miles Without Single Safety Incident",
        description: "Advanced LiDAR sensor fusion and real-time neural mapping set new gold standard for urban driverless mobility.",
        url: "https://gnews.io",
        image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&auto=format&fit=crop",
        publishedAt: new Date(Date.now() - 3600000).toISOString(),
        source: { name: "Wired Tech", url: "https://gnews.io" }
      },
      {
        title: "Open-Source AI Assistant Models Revolutionize Software Engineering Workflow",
        description: "Developers leverage code generation agents to reduce software bug rates and accelerate product deployment speed.",
        url: "https://gnews.io",
        image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&auto=format&fit=crop",
        publishedAt: new Date(Date.now() - 7200000).toISOString(),
        source: { name: "The Verge", url: "https://gnews.io" }
      }
    ],
    entertainment: [
      {
        title: "Annual International Film Festival Celebrates Cinema Masterpieces & Indie Winners",
        description: "Critically acclaimed drama wins Golden Palm while emerging directors sweep awards for innovative storytelling.",
        url: "https://gnews.io",
        image: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=800&auto=format&fit=crop",
        publishedAt: new Date().toISOString(),
        source: { name: "Hollywood Reporter", url: "https://gnews.io" }
      },
      {
        title: "Global Music Awards Showcase Record-Breaking Performances & Viral Tracks",
        description: "Cross-genre collaborations dominate chart-toppers as digital streaming hits unprecedented worldwide viewership.",
        url: "https://gnews.io",
        image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=800&auto=format&fit=crop",
        publishedAt: new Date(Date.now() - 3600000).toISOString(),
        source: { name: "Billboard Beat", url: "https://gnews.io" }
      },
      {
        title: "Streaming Giant Unveils Slate of 30 New Original Sci-Fi & Fantasy Series",
        description: "Multi-million dollar visual effects productions set to launch across global platforms starting next quarter.",
        url: "https://gnews.io",
        image: "https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?w=800&auto=format&fit=crop",
        publishedAt: new Date(Date.now() - 7200000).toISOString(),
        source: { name: "Variety", url: "https://gnews.io" }
      }
    ],
    sports: [
      {
        title: "World Championship Final Ends in Thrilling Overtime Victory",
        description: "Star forward scores decisive winning point with seconds remaining on the clock in front of a sold-out 80,000 stadium crowd.",
        url: "https://gnews.io",
        image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=800&auto=format&fit=crop",
        publishedAt: new Date().toISOString(),
        source: { name: "ESPN World", url: "https://gnews.io" }
      },
      {
        title: "Cricket Legends Applaud Historic Double Century in International Test Series",
        description: "Opening batsman breaks 25-year record with flawless stroke play and disciplined century partnerships.",
        url: "https://gnews.io",
        image: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=800&auto=format&fit=crop",
        publishedAt: new Date(Date.now() - 3600000).toISOString(),
        source: { name: "CricInfo Today", url: "https://gnews.io" }
      },
      {
        title: "Marathon World Record Shattered by 45 Seconds in Historic Urban Course Run",
        description: "Pacesetters and ideal temperature conditions help long-distance runner achieve sub-2-hour pacing feat.",
        url: "https://gnews.io",
        image: "https://images.unsplash.com/photo-1452626038306-9aae5e071dd3?w=800&auto=format&fit=crop",
        publishedAt: new Date(Date.now() - 7200000).toISOString(),
        source: { name: "Athletics Weekly", url: "https://gnews.io" }
      }
    ],
    science: [
      {
        title: "Space Observatory Discovers Potentially Habitable Earth-Sized Exoplanet",
        description: "Spectroscopic data confirms liquid water atmospheric signatures around a quiet nearby red dwarf star system.",
        url: "https://gnews.io",
        image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&auto=format&fit=crop",
        publishedAt: new Date().toISOString(),
        source: { name: "Scientific American", url: "https://gnews.io" }
      },
      {
        title: "Deep Sea Exploration Uncovers 50 New Marine Species in Unmapped Ocean Trench",
        description: "Submersible ROV captures high-resolution video of bioluminescent organisms surviving extreme pressure conditions.",
        url: "https://gnews.io",
        image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&auto=format&fit=crop",
        publishedAt: new Date(Date.now() - 3600000).toISOString(),
        source: { name: "Nature Journal", url: "https://gnews.io" }
      },
      {
        title: "Physicists Demonstrate Stable Room-Temperature Superconductor Synthesis",
        description: "Material breakthrough opens doors for lossless electrical grids, powerful MRI scanners, and magnetic levitation trains.",
        url: "https://gnews.io",
        image: "https://images.unsplash.com/photo-1507668077129-56e32842fceb?w=800&auto=format&fit=crop",
        publishedAt: new Date(Date.now() - 7200000).toISOString(),
        source: { name: "Science Daily", url: "https://gnews.io" }
      }
    ],
    health: [
      {
        title: "Medical Researchers Announce Breakthrough Gene Therapy for Autoimmune Diseases",
        description: "Clinical trials report 90% long-term remission rate in targeted patient cohorts without immune system suppression.",
        url: "https://gnews.io",
        image: "https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?w=800&auto=format&fit=crop",
        publishedAt: new Date().toISOString(),
        source: { name: "Medical News Today", url: "https://gnews.io" }
      },
      {
        title: "Global Health Organization Releases Updated Balanced Nutrition & Longevity Guidelines",
        description: "Comprehensive study highlights plant-rich diet, quality sleep, and daily mobility habits for healthy aging.",
        url: "https://gnews.io",
        image: "https://images.unsplash.com/photo-1498837167922-ddd27525d352?w=800&auto=format&fit=crop",
        publishedAt: new Date(Date.now() - 3600000).toISOString(),
        source: { name: "Health Line", url: "https://gnews.io" }
      },
      {
        title: "AI Diagnostic Tool Detects Early Cardiac Risks 5 Years Before Symptoms Emerge",
        description: "Non-invasive Retinal Scan paired with machine learning algorithms achieves 98% accuracy in clinical validation.",
        url: "https://gnews.io",
        image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&auto=format&fit=crop",
        publishedAt: new Date(Date.now() - 7200000).toISOString(),
        source: { name: "Lancet Health", url: "https://gnews.io" }
      }
    ]
  },
  hi: {
    general: [
      {
        title: "वैश्विक ऊर्जा सम्मेलन 2026: स्वच्छ ऊर्जा और विकास पर ऐतिहासिक सहमति",
        description: "विश्व नेताओं ने रिन्यूएबल ऊर्जा लक्ष्यों, ग्रीन फाइनेंसिंग और पर्यावरण सुरक्षा पर नई नीतियों पर सहमति जताई।",
        url: "https://gnews.io",
        image: "https://images.unsplash.com/photo-1541872703-74c5e44368f9?w=800&auto=format&fit=crop",
        publishedAt: new Date().toISOString(),
        source: { name: "हिंदी न्यूज़ टुडे", url: "https://gnews.io" }
      },
      {
        title: "डिजिटल साक्षरता और शिक्षा अभियान ने हासिल किया 5 करोड़ छात्रों का लक्ष्य",
        description: "ऑनलाइन शिक्षण मंचों ने देश के दूरदराज इलाकों में गुणवत्तापूर्ण प्राथमिक शिक्षा पहुंचाई।",
        url: "https://gnews.io",
        image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&auto=format&fit=crop",
        publishedAt: new Date(Date.now() - 3600000).toISOString(),
        source: { name: "दैनिक समाचार", url: "https://gnews.io" }
      }
    ],
    world: [
      {
        title: "संयुक्त राष्ट्र शांति वार्ता में प्रगति: अंतरराष्ट्रीय सीमा सुरक्षा पर बनी सहमति",
        description: "प्रतिनिधियों ने दीर्घकालिक कूटनीतिक स्थिरता और व्यापार गलियारों के विस्तार के लिए नए समझौतों पर हस्ताक्षर किए।",
        url: "https://gnews.io",
        image: "https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?w=800&auto=format&fit=crop",
        publishedAt: new Date().toISOString(),
        source: { name: "अंतरराष्ट्रीय पत्रिका", url: "https://gnews.io" }
      }
    ],
    nation: [
      {
        title: "राष्ट्रीय डिजिटल हाईवे परियोजना: ग्रामीण क्षेत्रों में हाई-स्पीड ब्रॉडबैंड नेटवर्क चालू",
        description: "ऑप्टिकल फाइबर नेटवर्क से दूरदराज के गांव जुड़े, ई-गवर्नेस और डिजिटल सेवाओं का हुआ विस्तार।",
        url: "https://gnews.io",
        image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=800&auto=format&fit=crop",
        publishedAt: new Date().toISOString(),
        source: { name: "राष्ट्रीय समाचार पत्र", url: "https://gnews.io" }
      }
    ],
    business: [
      {
        title: "शेयर बाजार में रिकॉर्ड तेजी: आईटी और रिन्यूएबल शेयरों में भारी उछाल",
        description: "तिमाही नतीजों और मजबूत आर्थिक संकेतकों के दम पर शेयर बाजार सर्वकालिक उच्च स्तर पर पहुंचा।",
        url: "https://gnews.io",
        image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&auto=format&fit=crop",
        publishedAt: new Date().toISOString(),
        source: { name: "बिजनेस टुडे हिंदी", url: "https://gnews.io" }
      }
    ],
    technology: [
      {
        title: "नेक्स्ट-जेन क्वांटम प्रोसेसर लॉन्च: एआई और सुपरकंप्यूटिंग में क्रांति",
        description: "1000-क्यूबिट प्रोसेसर आर्किटेक्चर से डेटा प्रोसेसिंग की गति 100 गुना तेज होने का दावा।",
        url: "https://gnews.io",
        image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&auto=format&fit=crop",
        publishedAt: new Date().toISOString(),
        source: { name: "टेक एक्सप्रेस", url: "https://gnews.io" }
      }
    ],
    entertainment: [
      {
        title: "अंतरराष्ट्रीय फिल्म महोत्सव: नई सिनेमा कृतियों को मिला प्रतिष्ठित पुरस्कार",
        description: "समीक्षकों द्वारा सराही गई फिल्मों और युवा निर्देशकों को सम्मानित किया गया।",
        url: "https://gnews.io",
        image: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=800&auto=format&fit=crop",
        publishedAt: new Date().toISOString(),
        source: { name: "सिनेमा वर्ल्ड", url: "https://gnews.io" }
      }
    ],
    sports: [
      {
        title: "विश्व कप फाइनल में रोमांचक जीत: आखिरी ओवर में बना विजयी रिकॉर्ड",
        description: "स्टेडियम में 80,000 प्रशंसकों की मौजूदगी में टीम ने ऐतिहासिक ट्रॉफी अपने नाम की।",
        url: "https://gnews.io",
        image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=800&auto=format&fit=crop",
        publishedAt: new Date().toISOString(),
        source: { name: "खेल जगत", url: "https://gnews.io" }
      }
    ],
    science: [
      {
        title: "अंतरिक्ष वेधशाला की खोज: पृथ्वी जैसे संभावित रहने योग्य एक्सोप्लैनेट का पता चला",
        description: "खगोलविदों ने नजदीकी तारे की परिक्रमा कर रहे नए ग्रह पर वायुमंडलीय संकेतों की पुष्टि की।",
        url: "https://gnews.io",
        image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&auto=format&fit=crop",
        publishedAt: new Date().toISOString(),
        source: { name: "विज्ञान दर्शन", url: "https://gnews.io" }
      }
    ],
    health: [
      {
        title: "चिकित्सा शोधकर्ताओं की सफलता: नई जीन थेरेपी से मिली बड़ी राहत",
        description: "क्लिनिकल ट्रायल में 90% मरीजों में सकारात्मक परिणाम और रिकवरी दर्ज की गई।",
        url: "https://gnews.io",
        image: "https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?w=800&auto=format&fit=crop",
        publishedAt: new Date().toISOString(),
        source: { name: "हेल्थ टुडे", url: "https://gnews.io" }
      }
    ]
  },
  gu: {
    general: [
      {
        title: "વૈશ્વિક ઊર્જા શિખર સંમેલન 2026: અક્ષય ઊર્જા અને વિકાસ પર ઐતિહાસિક સમજૂતી",
        description: "વિશ્વના નેતાઓએ નવીનીકરણીય ઊર્જા લક્ષ્યો અને પર્યાવરણ સુરક્ષાની નવી નીતિઓ પર સંમતિ દર્શાવી.",
        url: "https://gnews.io",
        image: "https://images.unsplash.com/photo-1541872703-74c5e44368f9?w=800&auto=format&fit=crop",
        publishedAt: new Date().toISOString(),
        source: { name: "ગુજરાત સમાચાર", url: "https://gnews.io" }
      },
      {
        title: "ડિજિટલ શિક્ષણ અભિયાન: 5 કરોડ વિદ્યાર્થીઓ સુધી ગુણવત્તાસભર શિક્ષણ પહોંચ્યું",
        description: "ઓનલાઈન લર્નિંગ પ્લેટફોર્મ્સે ગ્રામીણ વિસ્તારોમાં પ્રાથમિક શિક્ષણનો વ્યાપ વધાર્યો.",
        url: "https://gnews.io",
        image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&auto=format&fit=crop",
        publishedAt: new Date(Date.now() - 3600000).toISOString(),
        source: { name: "દિવ્ય ભાસ્કર", url: "https://gnews.io" }
      }
    ],
    world: [
      {
        title: "સંયુક્ત રાષ્ટ્ર શાંતિ વાર્તા: આંતરરાષ્ટ્રીય સરહદ સુરક્ષા પર મહત્વપૂર્ણ સમજૂતી",
        description: "રાજદ્વારી સ્થિરતા અને વેપાર માર્ગોના વિસ્તરણ માટે નવા કરારો પર હસ્તાક્ષર કરાયા.",
        url: "https://gnews.io",
        image: "https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?w=800&auto=format&fit=crop",
        publishedAt: new Date().toISOString(),
        source: { name: "વિશ્વ ન્યૂઝ", url: "https://gnews.io" }
      }
    ],
    nation: [
      {
        title: "રાષ્ટ્રીય ડિજિટલ હાઇવે પ્રોજેક્ટ: ગ્રામીણ વિસ્તારોમાં હાઇ-સ્પીડ ઈન્ટરનેટ કનેક્ટિવિટી શરૂ",
        description: "ઓપ્ટિકલ ફાઇબર નેટવર્કથી ગામડાઓ જોડાયા, ડિજિટલ સેવાઓનો ઝડપી વિકાસ.",
        url: "https://gnews.io",
        image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=800&auto=format&fit=crop",
        publishedAt: new Date().toISOString(),
        source: { name: "સંદેશ ન્યૂઝ", url: "https://gnews.io" }
      }
    ],
    business: [
      {
        title: "શેરબજારમાં રેકોર્ડ તેજી: આઇટી અને ગ્રીન એનર્જી શેરોમાં મોટો ઉછાળો",
        description: "મજબૂત આર્થિક સંકેતો અને પરિણામોને કારણે રોકાણકારોમાં ઉત્સાહનો માહોલ.",
        url: "https://gnews.io",
        image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&auto=format&fit=crop",
        publishedAt: new Date().toISOString(),
        source: { name: "બિઝનેસ ન્યૂઝ", url: "https://gnews.io" }
      }
    ],
    technology: [
      {
        title: "ક્વોન્ટમ પ્રોસેસર લોન્ચ: એઆઇ અને સુપરકમ્પ્યુટિંગ ક્ષેત્રે નવી ક્રાંતિ",
        description: "1000-ક્યુબિટ પ્રોસેસર આર્કિટેક્ચરથી પ્રોસેસિંગ સ્પીડમાં અભૂતપૂર્વ વધારો થયો.",
        url: "https://gnews.io",
        image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&auto=format&fit=crop",
        publishedAt: new Date().toISOString(),
        source: { name: "ટેક ગુરુ", url: "https://gnews.io" }
      }
    ],
    entertainment: [
      {
        title: "આંતરરાષ્ટ્રીય ફિલ્મ મહોત્સવ: શ્રેષ્ઠ સિનેમા કૃતિઓનું સન્માન કરાયું",
        description: "નવા દિગ્દર્શકો અને કલાકારોને પ્રતિષ્ઠિત એવોર્ડ્સ એનાયત કરવામાં આવ્યા.",
        url: "https://gnews.io",
        image: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=800&auto=format&fit=crop",
        publishedAt: new Date().toISOString(),
        source: { name: "સિને મનોરંજન", url: "https://gnews.io" }
      }
    ],
    sports: [
      {
        title: "વિશ્વકપ ફાઇનલમાં રોમાંચક જીત: છેલ્લી ઓવરમાં બન્યો વિજયી રેકોર્ડ",
        description: "સ્ટેડિયમમાં હજારો પ્રેક્ષકોની હાજરીમાં ટીમે ઐતિહાસિક વિજય મેળવ્યો.",
        url: "https://gnews.io",
        image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=800&auto=format&fit=crop",
        publishedAt: new Date().toISOString(),
        source: { name: "સ્પોર્ટ્સ વર્લ્ડ", url: "https://gnews.io" }
      }
    ],
    science: [
      {
        title: "સ્પેસ ઓબ્ઝર્વેટરીની નવી શોધ: પૃથ્વી જેવા રહસ્યમય ગ્રહની માહિતી મળી",
        description: "ખગોળશાસ્ત્રીઓએ નજીકના તારા મંડળમાં અનુકૂળ વાતાવરણ ધરાવતા ગ્રહની પુષ્ટિ કરી.",
        url: "https://gnews.io",
        image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&auto=format&fit=crop",
        publishedAt: new Date().toISOString(),
        source: { name: "સાયન્સ ન્યૂઝ", url: "https://gnews.io" }
      }
    ],
    health: [
      {
        title: "તબીબી સંશોધનમાં સફળતા: નવી જીન થેરાપીથી દર્દીઓને મોટી રાહત",
        description: "ક્લિનિકલ ટ્રાયલ્સમાં 90% દર્દીઓમાં સકારાત્મક સુધારો જોવા મળ્યો.",
        url: "https://gnews.io",
        image: "https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?w=800&auto=format&fit=crop",
        publishedAt: new Date().toISOString(),
        source: { name: "હેલ્થ કાળજી", url: "https://gnews.io" }
      }
    ]
  }
};

export const getMockNews = (category = 'general', lang = 'en') => {
  const langKey = mockDatabase[lang] ? lang : 'en';
  const categoryKey = category ? category.toLowerCase() : 'general';

  const categoryArticles = mockDatabase[langKey][categoryKey] || mockDatabase[langKey]['general'] || mockDatabase['en']['general'];

  return categoryArticles;
};
