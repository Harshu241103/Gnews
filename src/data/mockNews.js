// Fallback mock news data when API daily quota (100 requests/day) is reached or network fails

export const getMockNews = (category = 'general', lang = 'en') => {
  const languageNames = {
    en: 'English',
    hi: 'Hindi',
    gu: 'Gujarati'
  };

  const currentLang = languageNames[lang] || 'English';
  const formattedCategory = category.charAt(0).toUpperCase() + category.slice(1);

  if (lang === 'hi') {
    return [
      {
        title: `${formattedCategory}: मुख्य समाचार और ताज़ा अपडेट`,
        description: `यह ${formattedCategory} श्रेणी की ताज़ा ख़बरों का मुख्य अंश है। वर्तमान में GNews API दैनिक सीमा समाप्त होने के कारण यह कैश्ड/नमूना डेटा प्रदर्शित किया जा रहा है।`,
        content: `विस्तृत समाचार सामग्री यहाँ प्रदर्शित की जाएगी। GNews API दैनिक कोटा रीसेट होने पर ताज़ा समाचार स्वतः अपडेट होंगे।`,
        url: "https://gnews.io",
        image: "https://images.unsplash.com/photo-1585829365295-ab7cd400c167?w=800&auto=format&fit=crop",
        publishedAt: new Date().toISOString(),
        source: { name: "GNews हिंदी", url: "https://gnews.io" }
      },
      {
        title: `तकनीक और विकास: नई पहलों का आगाज़`,
        description: `देश और दुनिया में डिजिटल क्रांति और नई तकनीकों के विकास से संबंधित महत्त्वपूर्ण रिपोर्ट।`,
        content: `वैश्विक बाजार और स्थानीय उद्योग में तकनीक के नए आयाम स्थापित हो रहे हैं।`,
        url: "https://gnews.io",
        image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&auto=format&fit=crop",
        publishedAt: new Date(Date.now() - 3600000).toISOString(),
        source: { name: "दैनिक समाचार", url: "https://gnews.io" }
      },
      {
        title: `व्यापार और अर्थव्यवस्था: बाज़ार का ताज़ा हाल`,
        description: `शेयर बाज़ार और अर्थव्यवस्था से जुड़ी प्रमुख ख़बरें। जानिए बाज़ार में क्या चल रहा है।`,
        content: `आर्थिक संकेतकों में सुधार और निवेश के नए अवसरों पर रिपोर्ट।`,
        url: "https://gnews.io",
        image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&auto=format&fit=crop",
        publishedAt: new Date(Date.now() - 7200000).toISOString(),
        source: { name: "बिजनेस टूडे", url: "https://gnews.io" }
      }
    ];
  }

  if (lang === 'gu') {
    return [
      {
        title: `${formattedCategory}: મુખ્ય સમાચાર અને તાજા સમચાર`,
        description: `આ ${formattedCategory} શ્રેણીના મુખ્ય સમાચાર છે. હાલમાં GNews API ની દૈનિક મર્યાદા પૂર્ણ થઈ હોવાથી આ કેશ્ડ ડેટા દર્શાવવામાં આવી રહ્યો છે.`,
        content: `વિગતવાર સમાચાર અહીં દર્શાવવામાં આવશે. API કોટા રીસેટ થયા પછી તાજા સમાચાર આપમેળે અપડેટ થશે.`,
        url: "https://gnews.io",
        image: "https://images.unsplash.com/photo-1585829365295-ab7cd400c167?w=800&auto=format&fit=crop",
        publishedAt: new Date().toISOString(),
        source: { name: "GNews ગુજરાતી", url: "https://gnews.io" }
      },
      {
        title: `ટેકનોલોજી અને વિકાસ: નવા પ્રોજેક્ટ્સની શરૂઆત`,
        description: `ડિજિટલ ક્ષેત્રે થઈ રહેલા નવા વિકાસ અને નવી ટેકનોલોજી વિશે મહત્વપૂર્ણ અહેવાલ.`,
        content: `સ્થાનિક અને વૈશ્વિક સ્તરે ટેકનોલોજીના નવા સોપાનો સર થઈ રહ્યા છે.`,
        url: "https://gnews.io",
        image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&auto=format&fit=crop",
        publishedAt: new Date(Date.now() - 3600000).toISOString(),
        source: { name: "ગુજરાત ન્યૂઝ", url: "https://gnews.io" }
      },
      {
        title: `વ્યાપાર અને અર્થતંત્ર: બજારના તાજા અહેવાલ`,
        description: `શેરબજાર અને દેશના આર્થિક ક્ષેત્રના મહત્વના અહેવાલો.`,
        content: `આર્થિક વિકાસ અને નવા રોકાણો અંગે સકારાત્મક અહેવાલ.`,
        url: "https://gnews.io",
        image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&auto=format&fit=crop",
        publishedAt: new Date(Date.now() - 7200000).toISOString(),
        source: { name: "બિઝનેસ ન્યૂઝ", url: "https://gnews.io" }
      }
    ];
  }

  // Default English Mock
  return [
    {
      title: `${formattedCategory} News: Top Headlines and Global Updates`,
      description: `Latest updates in ${formattedCategory}. Currently displaying cached/sample news as the daily GNews API limit has been reached.`,
      content: `Full story details and continuous updates. Fresh live news will refresh automatically when your GNews API limit resets.`,
      url: "https://gnews.io",
      image: "https://images.unsplash.com/photo-1585829365295-ab7cd400c167?w=800&auto=format&fit=crop",
      publishedAt: new Date().toISOString(),
      source: { name: "GNews English", url: "https://gnews.io" }
    },
    {
      title: `Global Trends in Technology and Innovation`,
      description: `Exploring key technological developments, digital transformations, and breakthroughs worldwide.`,
      content: `Industry leaders discuss upcoming trends and key innovations transforming markets globally.`,
      url: "https://gnews.io",
      image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&auto=format&fit=crop",
      publishedAt: new Date(Date.now() - 3600000).toISOString(),
      source: { name: "Tech Daily", url: "https://gnews.io" }
    },
    {
      title: `Markets & Economy Overview: Key Insights`,
      description: `A snapshot of current financial markets, economic indicators, and business growth opportunities.`,
      content: `Analysis of stock movements, commodity prices, and international economic developments.`,
      url: "https://gnews.io",
      image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&auto=format&fit=crop",
      publishedAt: new Date(Date.now() - 7200000).toISOString(),
      source: { name: "Financial Times", url: "https://gnews.io" }
    }
  ];
};
