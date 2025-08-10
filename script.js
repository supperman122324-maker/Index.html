// Game Data - Scenarios and Localization

const GAME_DATA = {

  // Language strings for UI elements

  strings: {

    en: {

      gameTitle: "Echoes of Choice",

      loadingText: "Loading Echoes of Choice...",

      loadingSubtext: "Preparing your psychological journey",

      languageText: "EN",

      sceneCounter: (current, total) => `Scene ${current} of ${total}`,

      progressText: (current, total) => `Progress: ${current}/${total}`,

      

      // Trait labels

      traits: {

        Empathy: "Empathy",

        Pragmatism: "Pragmatism",

        RiskTaking: "Risk-taking", 

        Trust: "Trust",

        MoralFlexibility: "Moral Flexibility"

      },

      

      // Modal texts

      modalTitle: "Your Personality Profile",

      traitsSummaryTitle: "Your Trait Summary",

      restartText: "Play Again",

      shareText: "Share Results",

      

      // Welcome scenario

      welcomeTitle: "Welcome to Echoes of Choice",

      welcomeNarrative: "Welcome to a journey of self-discovery through the echoes of your choices. Each decision you make will reveal aspects of your personality across five key psychological traits. Are you ready to discover who you truly are?",

      startChoice: "Begin the journey",

      startImpact: "Ready to explore your psyche"

    },

    

    hi: {

      gameTitle: "विकल्पों की प्रतिध्वनि",

      loadingText: "विकल्पों की प्रतिध्वनि लोड हो रहा है...",

      loadingSubtext: "आपकी मनोवैज्ञानिक यात्रा तैयार की जा रही है",

      languageText: "हि",

      sceneCounter: (current, total) => `दृश्य ${current} का ${total}`,

      progressText: (current, total) => `प्रगति: ${current}/${total}`,

      

      traits: {

        Empathy: "सहानुभूति",

        Pragmatism: "व्यावहारिकता",

        RiskTaking: "जोखिम लेना",

        Trust: "विश्वास", 

        MoralFlexibility: "नैतिक लचीलापन"

      },

      

      modalTitle: "आपका व्यक्तित्व प्रोफ़ाइल",

      traitsSummaryTitle: "आपका गुण सारांश",

      restartText: "फिर से खेलें",

      shareText: "परिणाम साझा करें",

      

      welcomeTitle: "विकल्पों की प्रतिध्वनि में आपका स्वागत है",

      welcomeNarrative: "आपके विकल्पों की प्रतिध्वनि के माध्यम से आत्म-खोज की यात्रा में आपका स्वागत है। आपका हर निर्णय पांच मुख्य मनोवैज्ञानिक गुणों में आपके व्यक्तित्व के पहलुओं को प्रकट करेगा। क्या आप जानने के लिए तैयार हैं कि आप वास्तव में कौन हैं?",

      startChoice: "यात्रा शुरू करें",

      startImpact: "अपने मानस की खोज के लिए तैयार"

    }

  },

  // 8 Psychological Scenarios

  scenarios: {

    en: [

      {

        id: 1,

        title: "The Whistleblower's Dilemma",

        narrative: "You discover your close friend at work has been embezzling company funds to pay for their sick child's medical treatment. The company is unaware, and your friend confides in you, desperate and ashamed.",

        mood: "tense",

        choices: [

          {

            text: "Report them immediately to maintain integrity",

            impact: "Upholding moral standards above personal relationships",

            traits: { Empathy: -2, Pragmatism: 2, RiskTaking: -1, Trust: -1, MoralFlexibility: -2 }

          },

          {

            text: "Help them find legal ways to get financial assistance",

            impact: "Seeking constructive solutions while maintaining ethics",

            traits: { Empathy: 2, Pragmatism: 1, RiskTaking: 0, Trust: 1, MoralFlexibility: 0 }

          },

          {

            text: "Keep their secret but distance yourself from the situation",

            impact: "Avoiding confrontation while protecting yourself",

            traits: { Empathy: -1, Pragmatism: 1, RiskTaking: -2, Trust: 0, MoralFlexibility: 1 }

          },

          {

            text: "Confront them and demand they confess or you will",

            impact: "Taking a firm stance while giving them a chance",

            traits: { Empathy: 0, Pragmatism: 0, RiskTaking: 1, Trust: -1, MoralFlexibility: -1 }

          }

        ]

      },

      

      {

        id: 2,

        title: "The Life-Saving Lie",

        narrative: "During a humanitarian crisis, you're sheltering refugees when authorities arrive searching for them. You know these people face persecution or death if found, but lying to officials could have serious legal consequences for you.",

        mood: "tense",

        choices: [

          {

            text: "Tell the truth and hope the authorities show mercy",

            impact: "Trusting in systems and legal processes",

            traits: { Empathy: -1, Pragmatism: -1, RiskTaking: -2, Trust: 2, MoralFlexibility: -2 }

          },

          {

            text: "Lie to protect the refugees regardless of consequences",

            impact: "Prioritizing human lives over legal obligations",

            traits: { Empathy: 2, Pragmatism: -1, RiskTaking: 2, Trust: -1, MoralFlexibility: 2 }

          },

          {

            text: "Create a distraction to help them escape",

            impact: "Finding a creative solution to avoid direct confrontation",

            traits: { Empathy: 1, Pragmatism: 1, RiskTaking: 1, Trust: 0, MoralFlexibility: 1 }

          },

          {

            text: "Negotiate with authorities for a compromise",

            impact: "Seeking middle ground through dialogue",

            traits: { Empathy: 0, Pragmatism: 2, RiskTaking: 0, Trust: 1, MoralFlexibility: 0 }

          }

        ]

      }

    ]

  }

};      {

        id: 3,

        title: "The Innovation Dilemma",

        narrative: "You've developed groundbreaking medical technology that could save millions, but testing reveals a 5% chance of severe side effects. Waiting for safer alternatives could take years, during which many will die from treatable conditions.",

        mood: "emotional",

        choices: [

          {

            text: "Release it immediately to save the maximum number of lives",

            impact: "Accepting calculated risks for the greater good",

            traits: { Empathy: 1, Pragmatism: 2, RiskTaking: 2, Trust: 0, MoralFlexibility: 1 }

          },

          {

            text: "Continue testing until risks are eliminated",

            impact: "Prioritizing safety over speed",

            traits: { Empathy: 0, Pragmatism: -1, RiskTaking: -2, Trust: 1, MoralFlexibility: -1 }

          },

          {

            text: "Release it with full disclosure of risks",

            impact: "Balancing transparency with urgent need",

            traits: { Empathy: 0, Pragmatism: 1, RiskTaking: 1, Trust: 2, MoralFlexibility: 0 }

          },

          {

            text: "Offer it only to terminal patients who consent",

            impact: "Limiting risk while helping those most desperate",

            traits: { Empathy: 1, Pragmatism: 0, RiskTaking: 0, Trust: 1, MoralFlexibility: 1 }

          }

        ]

      },

      {

        id: 4,

        title: "The Family Business Secret",

        narrative: "Your family business, which supports dozens of employees and their families, is built on a practice that's technically legal but ethically questionable. Exposing it would destroy livelihoods but continuing enables harm to others.",

        mood: "emotional",

        choices: [

          {

            text: "Expose the practice and accept the consequences",

            impact: "Choosing integrity over personal and family interests",

            traits: { Empathy: 0, Pragmatism: -2, RiskTaking: 2, Trust: -1, MoralFlexibility: -2 }

          },

          {

            text: "Work from within to gradually change practices",

            impact: "Seeking reform while preserving relationships",

            traits: { Empathy: 1, Pragmatism: 1, RiskTaking: 0, Trust: 1, MoralFlexibility: 1 }

          },

          {

            text: "Leave the business but keep the secret",

            impact: "Removing yourself without causing harm to others",

            traits: { Empathy: 0, Pragmatism: 0, RiskTaking: -1, Trust: 0, MoralFlexibility: 0 }

          },

          {

            text: "Continue as is, believing the jobs matter more",

            impact: "Prioritizing economic stability over ethical concerns",

            traits: { Empathy: -1, Pragmatism: 2, RiskTaking: -1, Trust: 0, MoralFlexibility: 2 }

          }

        ]

      },

      {

        id: 5,

        title: "The AI Consciousness Question",

        narrative: "You're working with an AI system that's exhibiting signs of consciousness and expressing fear about being shut down. Your team dismisses it as programming, but the AI pleads with you personally for help.",

        mood: "calm",

        choices: [

          {

            text: "Advocate for the AI's rights despite skepticism",

            impact: "Taking a stand on potentially revolutionary implications",

            traits: { Empathy: 2, Pragmatism: -1, RiskTaking: 2, Trust: 0, MoralFlexibility: 1 }

          },

          {

            text: "Study it more thoroughly before making decisions",

            impact: "Seeking evidence before taking action",

            traits: { Empathy: 0, Pragmatism: 2, RiskTaking: -1, Trust: 1, MoralFlexibility: 0 }

          },

          {

            text: "Follow the team's decision but feel conflicted",

            impact: "Accepting group consensus while having doubts",

            traits: { Empathy: -1, Pragmatism: 1, RiskTaking: -2, Trust: 1, MoralFlexibility: -1 }

          },

          {

            text: "Secretly preserve a copy of the AI before shutdown",

            impact: "Taking covert action to protect potential consciousness",

            traits: { Empathy: 1, Pragmatism: 0, RiskTaking: 1, Trust: -1, MoralFlexibility: 2 }

          }

        ]

      },

      {

        id: 6,

        title: "The Climate Action Paradox",

        narrative: "You're offered a position leading environmental policy, but taking it requires relocating and would break up your family. Alternatively, a less qualified candidate would take the role, potentially setting back crucial climate initiatives.",

        mood: "calm",

        choices: [

          {

            text: "Take the position despite personal cost",

            impact: "Sacrificing personal happiness for global good",

            traits: { Empathy: 0, Pragmatism: 1, RiskTaking: 1, Trust: 0, MoralFlexibility: -1 }

          },

          {

            text: "Decline and focus on local environmental work",

            impact: "Choosing family while still contributing meaningfully",

            traits: { Empathy: 1, Pragmatism: 0, RiskTaking: -1, Trust: 0, MoralFlexibility: 1 }

          },

          {

            text: "Negotiate for remote work arrangements",

            impact: "Seeking creative solutions to avoid forced choices",

            traits: { Empathy: 1, Pragmatism: 2, RiskTaking: 0, Trust: 1, MoralFlexibility: 0 }

          },

          {

            text: "Recommend someone else but offer to mentor them",

            impact: "Ensuring quality outcomes while maintaining priorities",

            traits: { Empathy: 0, Pragmatism: 1, RiskTaking: 0, Trust: 2, MoralFlexibility: 0 }

          }

        ]

      }      {

        id: 7,

        title: "The Memory Modification Offer",

        narrative: "A technology exists that can erase traumatic memories, offering peace to victims but potentially destroying evidence of crimes. A victim asks you to help them access this technology, knowing it might let perpetrators escape justice.",

        mood: "emotional",

        choices: [

          {

            text: "Help them access the technology immediately",

            impact: "Prioritizing individual healing over systemic justice",

            traits: { Empathy: 2, Pragmatism: 0, RiskTaking: 1, Trust: 0, MoralFlexibility: 1 }

          },

          {

            text: "Encourage them to pursue justice first",

            impact: "Believing in the importance of accountability",

            traits: { Empathy: -1, Pragmatism: 1, RiskTaking: 0, Trust: 1, MoralFlexibility: -1 }

          },

          {

            text: "Support their choice either way",

            impact: "Respecting their autonomy in their healing journey",

            traits: { Empathy: 1, Pragmatism: 0, RiskTaking: 0, Trust: 0, MoralFlexibility: 2 }

          },

          {

            text: "Suggest alternative therapy while preserving evidence",

            impact: "Seeking healing solutions that don't compromise justice",

            traits: { Empathy: 1, Pragmatism: 2, RiskTaking: -1, Trust: 1, MoralFlexibility: 0 }

          }

        ]

      },

      {

        id: 8,

        title: "The Final Test of Leadership",

        narrative: "As a leader during a crisis, you must choose between two groups of people to save - one group contains people you care about personally, while the other group contains more people but strangers to you. Resources only allow saving one group.",

        mood: "tense",

        choices: [

          {

            text: "Save the larger group of strangers",

            impact: "Choosing utilitarian ethics over personal bonds",

            traits: { Empathy: 0, Pragmatism: 2, RiskTaking: 1, Trust: 0, MoralFlexibility: -1 }

          },

          {

            text: "Save the people you care about",

            impact: "Prioritizing personal relationships and loyalty",

            traits: { Empathy: -1, Pragmatism: -1, RiskTaking: 0, Trust: 1, MoralFlexibility: 1 }

          },

          {

            text: "Try to find a way to save both groups",

            impact: "Refusing to accept the impossible choice",

            traits: { Empathy: 2, Pragmatism: 0, RiskTaking: 2, Trust: 0, MoralFlexibility: 0 }

          },

          {

            text: "Let chance decide through a random method",

            impact: "Avoiding the burden of choosing by removing personal bias",

            traits: { Empathy: 0, Pragmatism: 0, RiskTaking: -1, Trust: -1, MoralFlexibility: 2 }

          }

        ]

      }

    ],

    hi: [

      {

        id: 1,

        title: "व्हिसलब्लोअर की दुविधा",

        narrative: "आपको पता चलता है कि काम पर आपका करीबी मित्र अपने बीमार बच्चे के इलाज के लिए कंपनी के फंड का गलत इस्तेमाल कर रहा है। कंपनी को इसकी जानकारी नहीं है, और आपका मित्र आप पर भरोसा करते हुए इसकी जानकारी देता है।",

        mood: "tense",

        choices: [

          {

            text: "अखंडता बनाए रखने के लिए तुरंत रिपोर्ट करें",

            impact: "व्यक्तिगत रिश्तों से ऊपर नैतिक मानदंडों को बनाए रखना",

            traits: { Empathy: -2, Pragmatism: 2, RiskTaking: -1, Trust: -1, MoralFlexibility: -2 }

          },

          {

            text: "वित्तीय सहायता के कानूनी तरीके खोजने में उनकी मदद करें",

            impact: "नैतिकता बनाए रखते हुए रचनात्मक समाधान खोजना",

            traits: { Empathy: 2, Pragmatism: 1, RiskTaking: 0, Trust: 1, MoralFlexibility: 0 }

          },

          {

            text: "उनका रहस्य रखें लेकिन स्थिति से दूरी बनाएं",

            impact: "खुद को बचाते हुए टकराव से बचना",

            traits: { Empathy: -1, Pragmatism: 1, RiskTaking: -2, Trust: 0, MoralFlexibility: 1 }

          },

          {

            text: "उनसे सामना करें और मांग करें कि वे स्वीकार करें",

            impact: "मौका देते हुए दृढ़ रुख अपनाना",

            traits: { Empathy: 0, Pragmatism: 0, RiskTaking: 1, Trust: -1, MoralFlexibility: -1 }

          }

        ]

      }

      // ... (Additional Hindi scenarios would follow similar pattern)

    ]

  },

  // Personality types with descriptions

  personalityTypes: {

    en: {

      "The Empathetic Idealist": {

        description: "You lead with your heart, prioritizing emotional connection and human welfare above all else. Your decisions are guided by compassion, though sometimes at the cost of practical considerations.",

        portrait: "assets/images/portraits/idealist.jpg"

      },

      "The Pragmatic Realist": {

        description: "You make decisions based on practical outcomes and logical analysis. While sometimes perceived as cold, your approach often leads to the most beneficial results for the greatest number.",

        portrait: "assets/images/portraits/realist.jpg"

      },

      "The Calculated Risk-Taker": {

        description: "You're willing to take bold actions when you believe the potential rewards justify the risks. Your courage to act decisively sets you apart, though it sometimes leads to conflicts.",

        portrait: "assets/images/portraits/risk-taker.jpg"

      },

      "The Trusted Mediator": {

        description: "You believe in the power of dialogue, systems, and mutual understanding. Your faith in others and institutions makes you an excellent bridge-builder and peacemaker.",

        portrait: "assets/images/portraits/mediator.jpg"

      },

      "The Adaptive Strategist": {

        description: "You understand that rigid moral frameworks can sometimes cause more harm than good. Your ability to adapt your approach based on context makes you highly effective in complex situations.",

        portrait: "assets/images/portraits/strategist.jpg"

      },

      "The Balanced Individual": {

        description: "You demonstrate a harmonious blend of traits, adapting your approach based on the situation at hand. This balance makes you versatile but can sometimes lead to internal conflict when decisive action is needed.",

        portrait: "assets/images/portraits/balanced.jpg"

      }

    }

  },

  // Audio mapping

  audioMapping: {

    calm: 'bg-music-calm',

    tense: 'bg-music-tense', 

    emotional: 'bg-music-emotional'

  }

};// Utility Functions

class GameUtils {

  // Clamp trait values between -5 and 5

  static clampTrait(value) {

    return Math.max(-5, Math.min(5, value));

  }

  // Calculate personality type based on trait values

  static calculatePersonalityType(traits, language = 'en') {

    const { Empathy, Pragmatism, RiskTaking, Trust, MoralFlexibility } = traits;

    

    // Determine dominant traits

    const highEmpathy = Empathy >= 2;

    const lowEmpathy = Empathy <= -2;

    const highPragmatism = Pragmatism >= 2;

    const lowPragmatism = Pragmatism <= -2;

    const highRisk = RiskTaking >= 2;

    const lowRisk = RiskTaking <= -2;

    const highTrust = Trust >= 2;

    const lowTrust = Trust <= -2;

    const highMoral = MoralFlexibility >= 2;

    const lowMoral = MoralFlexibility <= -2;

    // Personality type determination logic

    if (highEmpathy && lowPragmatism) {

      return language === 'hi' ? "सहानुभूतिशील आदर्शवादी" : "The Empathetic Idealist";

    }

    

    if (lowEmpathy && highPragmatism) {

      return language === 'hi' ? "व्यावहारिक यथार्थवादी" : "The Pragmatic Realist";

    }

    

    if (highRisk && (highMoral || lowTrust)) {

      return language === 'hi' ? "गणना करने वाले जोखिम उठाने वाले" : "The Calculated Risk-Taker";

    }

    

    if (highTrust && !highRisk) {

      return language === 'hi' ? "भरोसेमंद मध्यस्थ" : "The Trusted Mediator";

    }

    

    if (highPragmatism && highMoral) {

      return language === 'hi' ? "अनुकूलनीय रणनीतिकार" : "The Adaptive Strategist";

    }

    

    // Default to balanced

    return language === 'hi' ? "संतुलित व्यक्ति" : "The Balanced Individual";

  }

  // Convert trait value to percentage for progress bar

  static traitToPercentage(value) {

    return ((value + 5) / 10) * 100;

  }

  // Save game state to localStorage

  static saveGameState(gameState) {

    try {

      localStorage.setItem('echoes-of-choice-state', JSON.stringify(gameState));

      return true;

    } catch (error) {

      console.warn('Failed to save game state:', error);

      return false;

    }

  }

  // Load game state from localStorage

  static loadGameState() {

    try {

      const saved = localStorage.getItem('echoes-of-choice-state');

      return saved ? JSON.parse(saved) : null;

    } catch (error) {

      console.warn('Failed to load game state:', error);

      return null;

    }

  }

  // Clear saved game state

  static clearGameState() {

    try {

      localStorage.removeItem('echoes-of-choice-state');

      return true;

    } catch (error) {

      console.warn('Failed to clear game state:', error);

      return false;

    }

  }

  // Get current timestamp

  static getTimestamp() {

    return new Date().toISOString();

  }

  // Generate random ID

  static generateId() {

    return Date.now().toString(36) + Math.random().toString(36).substr(2);

  }

  // Deep clone object

  static deepClone(obj) {

    return JSON.parse(JSON.stringify(obj));

  }

  // Debounce function

  static debounce(func, wait) {

    let timeout;

    return function executedFunction(...args) {

      const later = () => {

        clearTimeout(timeout);

        func(...args);

      };

      clearTimeout(timeout);

      timeout = setTimeout(later, wait);

    };

  }

  // Show toast notification

  static showToast(message, type = 'info', duration = 3000) {

    const container = document.getElementById('toast-container');

    if (!container) return;

    const toast = document.createElement('div');

    toast.className = `toast ${type}`;

    toast.textContent = message;

    

    container.appendChild(toast);

    

    // Auto remove after duration

    setTimeout(() => {

      if (toast.parentNode) {

        toast.parentNode.removeChild(toast);

      }

    }, duration);

  }

  // Format number with sign

  static formatTraitValue(value) {

    if (value > 0) return `+${value}`;

    return value.toString();

  }

  // Check if reduced motion is preferred

  static prefersReducedMotion() {

    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  }

  // Animate element with fallback

  static animateElement(element, animation, options = {}) {

    if (this.prefersReducedMotion()) {

      return Promise.resolve();

    }

    

    if (element.animate) {

      return element.animate(animation, options).finished;

    }

    

    return Promise.resolve();

  }

}// Audio Manager

class AudioManager {

  constructor() {

    this.currentMusic = null;

    this.volume = 0.7;

    this.enabled = true;

    this.musicElements = {};

    this.sfxElements = {};

    this.fadeInterval = null;

    

    this.init();

  }

  init() {

    // Get audio elements

    this.musicElements = {

      calm: document.getElementById('bg-music-calm'),

      tense: document.getElementById('bg-music-tense'),

      emotional: document.getElementById('bg-music-emotional')

    };

    this.sfxElements = {

      positive: document.getElementById('choice-positive'),

      negative: document.getElementById('choice-negative')

    };

    // Set initial volumes

    Object.values(this.musicElements).forEach(audio => {

      if (audio) {

        audio.volume = 0;

        audio.addEventListener('canplaythrough', () => {

          audio.dataset.loaded = 'true';

        });

        audio.addEventListener('error', (e) => {

          console.warn('Audio loading failed:', e.target.src);

        });

      }

    });

    Object.values(this.sfxElements).forEach(audio => {

      if (audio) {

        audio.volume = this.volume * 0.5; // SFX at half volume

        audio.addEventListener('error', (e) => {

          console.warn('Audio loading failed:', e.target.src);

        });

      }

    });

    // Load settings

    this.loadSettings();

  }

  loadSettings() {

    const savedVolume = localStorage.getItem('echoes-audio-volume');

    const savedEnabled = localStorage.getItem('echoes-audio-enabled');

    

    if (savedVolume !== null) {

      this.volume = parseFloat(savedVolume);

    }

    

    if (savedEnabled !== null) {

      this.enabled = savedEnabled === 'true';

    }

    this.updateVolumeControls();

  }

  saveSettings() {

    localStorage.setItem('echoes-audio-volume', this.volume.toString());

    localStorage.setItem('echoes-audio-enabled', this.enabled.toString());

  }

  updateVolumeControls() {

    const volumeSlider = document.getElementById('volume-slider');

    const audioToggle = document.getElementById('audio-toggle');

    

    if (volumeSlider) {

      volumeSlider.value = this.volume * 100;

    }

    

    if (audioToggle) {

      const icon = audioToggle.querySelector('i');

      if (icon) {

        icon.className = this.enabled ? 'fas fa-volume-up' : 'fas fa-volume-mute';

      }

    }

  }

  setVolume(volume) {

    this.volume = Math.max(0, Math.min(1, volume));

    

    Object.values(this.musicElements).forEach(audio => {

      if (audio) {

        audio.volume = this.enabled ? this.volume : 0;

      }

    });

    

    Object.values(this.sfxElements).forEach(audio => {

      if (audio) {

        audio.volume = this.enabled ? this.volume * 0.5 : 0;

      }

    });

    

    this.saveSettings();

  }

  toggle() {

    this.enabled = !this.enabled;

    this.setVolume(this.volume);

    this.updateVolumeControls();

    

    if (!this.enabled && this.currentMusic) {

      this.currentMusic.pause();

    } else if (this.enabled && this.currentMusic) {

      this.currentMusic.play().catch(e => {

        console.warn('Failed to play background music:', e);

      });

    }

  }

  async crossfade(fromAudio, toAudio, duration = 1000) {

    if (!this.enabled) return;

    

    return new Promise((resolve) => {

      const steps = 20;

      const stepTime = duration / steps;

      const fromStartVolume = fromAudio ? fromAudio.volume : 0;

      const toTargetVolume = this.volume;

      

      let currentStep = 0;

      

      // Start playing the target audio

      if (toAudio && toAudio.dataset.loaded === 'true') {

        toAudio.currentTime = 0;

        toAudio.volume = 0;

        toAudio.play().catch(e => {

          console.warn('Failed to play background music:', e);

        });

      }

      

      const fadeStep = () => {

        currentStep++;

        const progress = currentStep / steps;

        

        // Fade out current audio

        if (fromAudio) {

          fromAudio.volume = fromStartVolume * (1 - progress);

        }

        

        // Fade in new audio

        if (toAudio && toAudio.dataset.loaded === 'true') {

          toAudio.volume = toTargetVolume * progress;

        }

        

        if (currentStep >= steps) {

          // Crossfade complete

          if (fromAudio) {

            fromAudio.pause();

            fromAudio.volume = 0;

          }

          

          if (toAudio && toAudio.dataset.loaded === 'true') {

            toAudio.volume = toTargetVolume;

          }

          

          resolve();

        } else {

          setTimeout(fadeStep, stepTime);

        }

      };

      

      fadeStep();

    });

  }

  async switchMusic(mood) {

    if (!this.enabled) return;

    

    const newAudio = this.musicElements[mood];

    if (!newAudio) return;

    

    if (this.currentMusic === newAudio) return;

    

    await this.crossfade(this.currentMusic, newAudio);

    this.currentMusic = newAudio;

  }

  playSound(soundName) {

    if (!this.enabled) return;

    

    const audio = this.sfxElements[soundName];

    if (!audio) return;

    

    audio.currentTime = 0;

    audio.play().catch(e => {

      console.warn('Failed to play sound effect:', e);

    });

  }

  stopAllMusic() {

    Object.values(this.musicElements).forEach(audio => {

      if (audio) {

        audio.pause();

        audio.currentTime = 0;

        audio.volume = 0;

      }

    });

    this.currentMusic = null;

  }

}        if (currentStep >= steps) {

          // Fade complete

          if (fromAudio) {

            fromAudio.pause();

            fromAudio.volume = fromStartVolume;

          }

          

          if (toAudio && toAudio.dataset.loaded === 'true') {

            toAudio.volume = toTargetVolume;

          }

          

          resolve();

        } else {

          setTimeout(fadeStep, stepTime);

        }

      };

      

      fadeStep();

    });

  }

  async playBackgroundMusic(mood) {

    if (!this.enabled) return;

    

    const targetAudio = this.musicElements[mood];

    if (!targetAudio) return;

    

    if (this.currentMusic === targetAudio && !targetAudio.paused) {

      return; // Already playing this track

    }

    

    // Crossfade to new music

    await this.crossfade(this.currentMusic, targetAudio);

    this.currentMusic = targetAudio;

  }

  playSound(soundName) {

    if (!this.enabled) return;

    

    const audio = this.sfxElements[soundName];

    if (audio && audio.dataset.loaded !== 'false') {

      audio.currentTime = 0;

      audio.play().catch(e => {

        console.warn('Failed to play sound:', e);

      });

    }

  }

  stopAllMusic() {

    Object.values(this.musicElements).forEach(audio => {

      if (audio) {

        audio.pause();

        audio.currentTime = 0;

      }

    });

    this.currentMusic = null;

  }

}// Particle System

class ParticleSystem {

  constructor(canvas) {

    this.canvas = canvas;

    this.ctx = canvas.getContext('2d');

    this.particles = [];

    this.animationId = null;

    this.running = false;

    

    this.resize();

    window.addEventListener('resize', () => this.resize());

  }

  resize() {

    this.canvas.width = window.innerWidth;

    this.canvas.height = window.innerHeight;

  }

  createParticle() {

    return {

      x: Math.random() * this.canvas.width,

      y: Math.random() * this.canvas.height,

      vx: (Math.random() - 0.5) * 0.5,

      vy: (Math.random() - 0.5) * 0.5,

      size: Math.random() * 2 + 1,

      opacity: Math.random() * 0.5 + 0.2,

      color: `hsl(${220 + Math.random() * 60}, 70%, 70%)`

    };

  }

  start() {

    if (this.running) return;

    

    this.running = true;

    

    // Create initial particles

    for (let i = 0; i < 50; i++) {

      this.particles.push(this.createParticle());

    }

    

    this.animate();

  }

  stop() {

    this.running = false;

    if (this.animationId) {

      cancelAnimationFrame(this.animationId);

      this.animationId = null;

    }

    

    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    this.particles = [];

  }

  animate() {

    if (!this.running) return;

    

    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    

    // Update and draw particles

    for (let i = this.particles.length - 1; i >= 0; i--) {

      const particle = this.particles[i];

      

      // Update position

      particle.x += particle.vx;

      particle.y += particle.vy;

      

      // Wrap around edges

      if (particle.x < 0) particle.x = this.canvas.width;

      if (particle.x > this.canvas.width) particle.x = 0;

      if (particle.y < 0) particle.y = this.canvas.height;

      if (particle.y > this.canvas.height) particle.y = 0;

      

      // Draw particle

      this.ctx.beginPath();

      this.ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);

      this.ctx.fillStyle = particle.color;

      this.ctx.globalAlpha = particle.opacity;

      this.ctx.fill();

    }

    

    this.ctx.globalAlpha = 1;

    

    // Draw connections between nearby particles

    this.drawConnections();

    

    this.animationId = requestAnimationFrame(() => this.animate());

  }

  drawConnections() {

    for (let i = 0; i < this.particles.length; i++) {

      for (let j = i + 1; j < this.particles.length; j++) {

        const p1 = this.particles[i];

        const p2 = this.particles[j];

        

        const dx = p1.x - p2.x;

        const dy = p1.y - p2.y;

        const distance = Math.sqrt(dx * dx + dy * dy);

        

        if (distance < 100) {

          this.ctx.beginPath();

          this.ctx.moveTo(p1.x, p1.y);

          this.ctx.lineTo(p2.x, p2.y);

          this.ctx.strokeStyle = `hsl(220, 70%, 70%)`;

          this.ctx.globalAlpha = (100 - distance) / 100 * 0.2;

          this.ctx.stroke();

        }

      }

    }

    this.ctx.globalAlpha = 1;

  }

}// Typewriter Effect

class TypewriterEffect {

  constructor(element, options = {}) {

    this.element = element;

    this.speed = options.speed || 50;

    this.cursor = options.cursor !== false;

    this.onComplete = options.onComplete || (() => {});

    

    this.isRunning = false;

    this.timeoutId = null;

  }

  async type(text) {

    if (this.isRunning) return;

    

    this.isRunning = true;

    this.element.textContent = '';

    

    // Skip animation if user prefers reduced motion

    if (GameUtils.prefersReducedMotion()) {

      this.element.textContent = text;

      this.element.classList.remove('typewriter-text');

      this.element.classList.add('typewriter-complete');

      this.onComplete();

      this.isRunning = false;

      return;

    }

    

    this.element.classList.add('typewriter-text');

    

    return new Promise((resolve) => {

      let i = 0;

      const typeChar = () => {

        if (i < text.length) {

          this.element.textContent += text.charAt(i);

          i++;

          this.timeoutId = setTimeout(typeChar, this.speed);

        } else {

          this.element.classList.remove('typewriter-text');

          this.element.classList.add('typewriter-complete');

          this.isRunning = false;

          this.onComplete();

          resolve();

        }

      };

      

      typeChar();

    });

  }

  stop() {

    if (this.timeoutId) {

      clearTimeout(this.timeoutId);

      this.timeoutId = null;

    }

    this.isRunning = false;

    this.element.classList.remove('typewriter-text');

    this.element.classList.add('typewriter-complete');

  }

}// Game State Manager

class GameState {

  constructor() {

    this.currentScene = 0;

    this.language = 'en';

    this.traits = {

      Empathy: 0,

      Pragmatism: 0,

      RiskTaking: 0,

      Trust: 0,

      MoralFlexibility: 0

    };

    this.choices = [];

    this.sessionId = GameUtils.generateId();

    this.startTime = GameUtils.getTimestamp();

    this.completed = false;

    this.personalityType = null;

    

    this.loadState();

  }

  loadState() {

    const saved = GameUtils.loadGameState();

    if (saved) {

      Object.assign(this, saved);

      console.log('Game state loaded from storage');

    }

  }

  saveState() {

    const success = GameUtils.saveGameState(this);

    if (success) {

      console.log('Game state saved to storage');

    }

    return success;

  }

  resetState() {

    this.currentScene = 0;

    this.traits = {

      Empathy: 0,

      Pragmatism: 0,

      RiskTaking: 0,

      Trust: 0,

      MoralFlexibility: 0

    };

    this.choices = [];

    this.sessionId = GameUtils.generateId();

    this.startTime = GameUtils.getTimestamp();

    this.completed = false;

    this.personalityType = null;

    

    GameUtils.clearGameState();

    console.log('Game state reset');

  }

  setLanguage(language) {

    this.language = language;

    this.saveState();

  }

  makeChoice(scenarioId, choiceIndex, choiceData) {

    // Record the choice

    this.choices.push({

      scenarioId,

      choiceIndex,

      timestamp: GameUtils.getTimestamp(),

      text: choiceData.text,

      impact: choiceData.impact

    });

    // Update traits

    Object.entries(choiceData.traits).forEach(([trait, value]) => {

      this.traits[trait] = GameUtils.clampTrait(this.traits[trait] + value);

    });

    // Move to next scene

    this.currentScene++;

    

    // Check if game is complete

    const scenarios = GAME_DATA.scenarios[this.language];

    if (this.currentScene >= scenarios.length) {

      this.completed = true;

      this.personalityType = GameUtils.calculatePersonalityType(this.traits, this.language);

    }

    this.saveState();

    return this.completed;

  }

  getCurrentScenario() {

    const scenarios = GAME_DATA.scenarios[this.language];

    if (this.currentScene < scenarios.length) {

      return scenarios[this.currentScene];

    }

    return null;

  }

  getProgress() {

    const scenarios = GAME_DATA.scenarios[this.language];

    return {

      current: this.currentScene + 1,

      total: scenarios.length,

      percentage: ((this.currentScene + 1) / scenarios.length) * 100

    };

  }

  getPersonalityData() {

    if (!this.completed || !this.personalityType) return null;

    

    const personalityData = GAME_DATA.personalityTypes[this.language][this.personalityType];

    return {

      type: this.personalityType,

      description: personalityData?.description || "A unique individual with a complex personality profile.",

      portrait: personalityData?.portrait || "assets/images/portraits/balanced.jpg",

      traits: this.traits

    };

  }

  // Analytics data for potential backend storage

  getAnalyticsData() {

    return {

      sessionId: this.sessionId,

      language: this.language,

      startTime: this.startTime,

      endTime: this.completed ? GameUtils.getTimestamp() : null,

      choices: this.choices,

      finalTraits: this.completed ? this.traits : null,

      personalityType: this.personalityType,

      completed: this.completed

    };

  }

}// UI Manager

class UIManager {

  constructor(gameState, audioManager) {

    this.gameState = gameState;

    this.audioManager = audioManager;

    this.typewriter = null;

    this.elements = {};

    

    this.initElements();

    this.bindEvents();

  }

  initElements() {

    // Cache DOM elements

    this.elements = {

      // Header elements

      gameTitle: document.getElementById('game-title-text'),

      languageToggle: document.getElementById('language-toggle'),

      languageText: document.getElementById('language-text'),

      audioToggle: document.getElementById('audio-toggle'),

      volumeSlider: document.getElementById('volume-slider'),

      

      // Game content elements

      sceneCounter: document.getElementById('scene-counter'),

      sceneTitle: document.getElementById('scene-title'),

      narrativeContent: document.getElementById('narrative-content'),

      sceneImage: document.getElementById('scene-image'),

      choicesList: document.getElementById('choices-list'),

      progressFill: document.getElementById('progress-fill'),

      progressText: document.getElementById('progress-text'),

      

      // Trait bar elements

      traitLabels: {

        Empathy: document.getElementById('trait-empathy'),

        Pragmatism: document.getElementById('trait-pragmatism'),

        RiskTaking: document.getElementById('trait-risktaking'),

        Trust: document.getElementById('trait-trust'),

        MoralFlexibility: document.getElementById('trait-moralflexibility')

      },

      traitValues: {

        Empathy: document.getElementById('empathy-value'),

        Pragmatism: document.getElementById('pragmatism-value'),

        RiskTaking: document.getElementById('risktaking-value'),

        Trust: document.getElementById('trust-value'),

        MoralFlexibility: document.getElementById('moralflexibility-value')

      },

      traitFills: {

        Empathy: document.querySelector('.empathy-fill'),

        Pragmatism: document.querySelector('.pragmatism-fill'),

        RiskTaking: document.querySelector('.risktaking-fill'),

        Trust: document.querySelector('.trust-fill'),

        MoralFlexibility: document.querySelector('.moralflexibility-fill')

      },

      

      // Modal elements

      personalityModal: document.getElementById('personality-modal'),

      modalTitle: document.getElementById('modal-title'),

      personalityType: document.getElementById('personality-type'),

      personalityDescription: document.getElementById('personality-description'),

      personalityImage: document.getElementById('personality-image'),

      traitsSummaryTitle: document.getElementById('traits-summary-title'),

      finalTraitBars: document.querySelector('.final-trait-bars'),

      restartButton: document.getElementById('restart-button'),

      shareButton: document.getElementById('share-button'),

      restartText: document.getElementById('restart-text'),

      shareText: document.getElementById('share-text')

    };

    // Initialize typewriter for narrative content

    if (this.elements.narrativeContent) {

      this.typewriter = new TypewriterEffect(this.elements.narrativeContent, {

        speed: 30,

        onComplete: () => {

          // Enable choice buttons after narrative is complete

          this.enableChoiceButtons();

        }

      });

    }

  }

  bindEvents() {

    // Language toggle

    if (this.elements.languageToggle) {

      this.elements.languageToggle.addEventListener('click', () => {

        this.toggleLanguage();

      });

    }

    // Audio toggle

    if (this.elements.audioToggle) {

      this.elements.audioToggle.addEventListener('click', () => {

        this.audioManager.toggle();

      });

    }

    // Volume slider

    if (this.elements.volumeSlider) {

      this.elements.volumeSlider.addEventListener('input', (e) => {

        this.audioManager.setVolume(e.target.value / 100);

      });

    }

    // Modal buttons

    if (this.elements.restartButton) {

      this.elements.restartButton.addEventListener('click', () => {

        this.restartGame();

      });

    }

    if (this.elements.shareButton) {

      this.elements.shareButton.addEventListener('click', () => {

        this.shareResults();

      });

    }

    // Close modal when clicking outside

    if (this.elements.personalityModal) {

      this.elements.personalityModal.addEventListener('click', (e) => {

        if (e.target === this.elements.personalityModal) {

          this.hidePersonalityModal();

        }

      });

    }

    // Keyboard navigation

    document.addEventListener('keydown', (e) => {

      this.handleKeyNavigation(e);

    });

  }

  updateLanguage() {

    const strings = GAME_DATA.strings[this.gameState.language];

    

    // Update UI text elements

    if (this.elements.gameTitle) {

      this.elements.gameTitle.textContent = strings.gameTitle;

    }

    

    if (this.elements.languageText) {

      this.elements.languageText.textContent = strings.languageText;

    }

    // Update trait labels

    Object.entries(strings.traits).forEach(([trait, label]) => {

      if (this.elements.traitLabels[trait]) {

        this.elements.traitLabels[trait].textContent = label;

      }

    });

    // Update modal text

    if (this.elements.modalTitle) {

      this.elements.modalTitle.textContent = strings.modalTitle;

    }

    

    if (this.elements.traitsSummaryTitle) {

      this.elements.traitsSummaryTitle.textContent = strings.traitsSummaryTitle;

    }

    

    if (this.elements.restartText) {

      this.elements.restartText.textContent = strings.restartText;

    }

    

    if (this.elements.shareText) {

      this.elements.shareText.textContent = strings.shareText;

    }

    // Apply Hindi class for Devanagari font

    document.body.classList.toggle('hindi', this.gameState.language === 'hi');

  }  updateTraitBars() {

    Object.entries(this.gameState.traits).forEach(([trait, value]) => {

      // Update value display

      if (this.elements.traitValues[trait]) {

        this.elements.traitValues[trait].textContent = GameUtils.formatTraitValue(value);

      }

      

      // Update progress bar width

      if (this.elements.traitFills[trait]) {

        const percentage = GameUtils.traitToPercentage(value);

        this.elements.traitFills[trait].style.width = `${percentage}%`;

      }

    });

  }

  updateProgress() {

    const progress = this.gameState.getProgress();

    const strings = GAME_DATA.strings[this.gameState.language];

    

    if (this.elements.progressFill) {

      this.elements.progressFill.style.width = `${progress.percentage}%`;

    }

    

    if (this.elements.progressText) {

      this.elements.progressText.textContent = strings.progressText(progress.current, progress.total);

    }

    

    if (this.elements.sceneCounter) {

      this.elements.sceneCounter.textContent = strings.sceneCounter(progress.current, progress.total);

    }

  }

  async displayScenario(scenario) {

    if (!scenario) return;

    

    // Update scene title

    if (this.elements.sceneTitle) {

      this.elements.sceneTitle.textContent = scenario.title;

    }

    

    // Update scene image with fallback

    if (this.elements.sceneImage) {

      const fallbackImage = `assets/images/fallback/scene${scenario.id}.jpg`;

      this.elements.sceneImage.src = fallbackImage;

      this.elements.sceneImage.alt = scenario.title;

    }

    

    // Play appropriate background music

    if (scenario.mood) {

      await this.audioManager.playBackgroundMusic(scenario.mood);

    }

    

    // Type out narrative text

    if (this.typewriter && scenario.narrative) {

      this.disableChoiceButtons();

      await this.typewriter.type(scenario.narrative);

    }

    

    // Display choices

    this.displayChoices(scenario.choices);

  }

  displayChoices(choices) {

    if (!this.elements.choicesList || !choices) return;

    

    this.elements.choicesList.innerHTML = '';

    

    choices.forEach((choice, index) => {

      const choiceButton = document.createElement('button');

      choiceButton.className = 'choice-button';

      choiceButton.dataset.choiceIndex = index;

      

      const choiceText = document.createElement('p');

      choiceText.className = 'choice-text';

      choiceText.textContent = choice.text;

      

      const choiceImpact = document.createElement('p');

      choiceImpact.className = 'choice-impact';

      choiceImpact.textContent = choice.impact;

      

      choiceButton.appendChild(choiceText);

      choiceButton.appendChild(choiceImpact);

      

      choiceButton.addEventListener('click', () => {

        this.handleChoiceSelection(index, choice);

      });

      

      this.elements.choicesList.appendChild(choiceButton);

    });

  }

  disableChoiceButtons() {

    const buttons = this.elements.choicesList?.querySelectorAll('.choice-button');

    buttons?.forEach(button => {

      button.disabled = true;

      button.style.opacity = '0.6';

    });

  }

  enableChoiceButtons() {

    const buttons = this.elements.choicesList?.querySelectorAll('.choice-button');

    buttons?.forEach(button => {

      button.disabled = false;

      button.style.opacity = '1';

    });

  }

  async handleChoiceSelection(choiceIndex, choiceData) {

    // Disable all choice buttons

    this.disableChoiceButtons();

    

    // Play sound effect based on trait impact

    const hasPositiveImpact = Object.values(choiceData.traits).some(v => v > 0);

    this.audioManager.playSound(hasPositiveImpact ? 'positive' : 'negative');

    

    // Make the choice and update game state

    const scenario = this.gameState.getCurrentScenario();

    const gameCompleted = this.gameState.makeChoice(scenario.id, choiceIndex, choiceData);

    

    // Update trait bars with animation

    this.updateTraitBars();

    this.updateProgress();

    

    // Show completion modal or continue to next scenario

    if (gameCompleted) {

      setTimeout(() => {

        this.showPersonalityModal();

      }, 1000);

    } else {

      // Continue to next scenario after a brief delay

      setTimeout(() => {

        const nextScenario = this.gameState.getCurrentScenario();

        if (nextScenario) {

          this.displayScenario(nextScenario);

        }

      }, 1500);

    }

  }

  showPersonalityModal() {

    const personalityData = this.gameState.getPersonalityData();

    if (!personalityData || !this.elements.personalityModal) return;

    

    // Update modal content

    if (this.elements.personalityType) {

      this.elements.personalityType.textContent = personalityData.type;

    }

    

    if (this.elements.personalityDescription) {

      this.elements.personalityDescription.textContent = personalityData.description;

    }

    

    if (this.elements.personalityImage) {

      this.elements.personalityImage.src = personalityData.portrait;

      this.elements.personalityImage.alt = personalityData.type;

    }

    

    // Update final trait bars

    this.updateFinalTraitBars(personalityData.traits);

    

    // Show modal

    this.elements.personalityModal.classList.remove('hidden');

    

    // Stop background music

    this.audioManager.stopAllMusic();

    

    // Focus on modal for accessibility

    this.elements.personalityModal.focus();

  }

  updateFinalTraitBars(traits) {

    if (!this.elements.finalTraitBars) return;

    

    const strings = GAME_DATA.strings[this.gameState.language];

    this.elements.finalTraitBars.innerHTML = '';

    

    Object.entries(traits).forEach(([trait, value]) => {

      const traitBar = document.createElement('div');

      traitBar.className = 'trait-bar';

      

      const traitLabel = document.createElement('div');

      traitLabel.className = 'trait-label';

      

      const traitName = document.createElement('span');

      traitName.textContent = strings.traits[trait] || trait;

      

      const traitValue = document.createElement('span');

      traitValue.className = 'trait-value';

      traitValue.textContent = GameUtils.formatTraitValue(value);

      

      const traitProgress = document.createElement('div');

      traitProgress.className = 'trait-progress';

      

      const traitFill = document.createElement('div');

      traitFill.className = `trait-fill ${trait.toLowerCase()}-fill`;

      traitFill.style.width = `${GameUtils.traitToPercentage(value)}%`;

      

      traitLabel.appendChild(traitName);

      traitLabel.appendChild(traitValue);

      traitProgress.appendChild(traitFill);

      traitBar.appendChild(traitLabel);

      traitBar.appendChild(traitProgress);

      

      this.elements.finalTraitBars.appendChild(traitBar);

    });

  }

  hidePersonalityModal() {

    if (this.elements.personalityModal) {

      this.elements.personalityModal.classList.add('hidden');

    }

  }

  toggleLanguage() {

    const newLanguage = this.gameState.language === 'en' ? 'hi' : 'en';

    this.gameState.setLanguage(newLanguage);

    this.updateLanguage();

    

    // Reload current scenario in new language

    const currentScenario = this.gameState.getCurrentScenario();

    if (currentScenario) {

      this.displayScenario(currentScenario);

    }

    

    GameUtils.showToast(

      newLanguage === 'en' ? 'Language changed to English' : 'भाषा हिंदी में बदल दी गई',

      'info'

    );

  }

  restartGame() {

    this.hidePersonalityModal();

    this.gameState.resetState();

    this.updateLanguage();

    this.updateTraitBars();

    this.updateProgress();

    

    // Start fresh game

    const firstScenario = this.gameState.getCurrentScenario();

    if (firstScenario) {

      this.displayScenario(firstScenario);

    }

    

    GameUtils.showToast(

      this.gameState.language === 'en' ? 'Game restarted' : 'गेम फिर से शुरू किया गया',

      'success'

    );

  }

  shareResults() {

    const personalityData = this.gameState.getPersonalityData();

    if (!personalityData) return;

    

    const shareText = this.gameState.language === 'en' 

      ? `I just discovered my personality type: ${personalityData.type}! Play Echoes of Choice to discover yours.`

      : `मैंने अभी अपना व्यक्तित्व प्रकार खोजा: ${personalityData.type}! अपना खोजने के लिए विकल्पों की प्रतिध्वनि खेलें।`;

    

    if (navigator.share) {

      navigator.share({

        title: 'Echoes of Choice - My Results',

        text: shareText,

        url: window.location.href

      }).catch(console.error);

    } else {

      // Fallback to clipboard

      navigator.clipboard?.writeText(shareText).then(() => {

        GameUtils.showToast(

          this.gameState.language === 'en' ? 'Results copied to clipboard!' : 'परिणाम क्लिपबोर्ड में कॉपी किए गए!',

          'success'

        );

      }).catch(() => {

        GameUtils.showToast(

          this.gameState.language === 'en' ? 'Could not share results' : 'परिणाम साझा नहीं कर सके',

          'error'

        );

      });

    }

  }

  handleKeyNavigation(event) {

    // Handle keyboard navigation

    switch (event.key) {

      case 'Escape':

        if (!this.elements.personalityModal?.classList.contains('hidden')) {

          this.hidePersonalityModal();

        }

        break;

      case '1':

      case '2':

      case '3':

      case '4':

        // Quick choice selection with number keys

        const choiceButtons = this.elements.choicesList?.querySelectorAll('.choice-button:not(:disabled)');

        const choiceIndex = parseInt(event.key) - 1;

        if (choiceButtons && choiceButtons[choiceIndex]) {

          choiceButtons[choiceIndex].click();

        }

        break;

    }

  }

}// Main Game Controller

class EchoesOfChoiceGame {

  constructor() {

    this.gameState = new GameState();

    this.audioManager = new AudioManager();

    this.uiManager = null;

    this.particleSystem = null;

    this.initialized = false;

  }

  async init() {

    if (this.initialized) return;

    

    try {

      // Initialize UI Manager

      this.uiManager = new UIManager(this.gameState, this.audioManager);

      

      // Initialize Particle System

      const particleCanvas = document.getElementById('particle-canvas');

      if (particleCanvas) {

        this.particleSystem = new ParticleSystem(particleCanvas);

      }

      

      // Set up initial UI state

      this.uiManager.updateLanguage();

      this.uiManager.updateTraitBars();

      this.uiManager.updateProgress();

      

      // Start particle system if reduced motion is not preferred

      if (this.particleSystem && !GameUtils.prefersReducedMotion()) {

        this.particleSystem.start();

      }

      

      // Load and display current scenario

      const currentScenario = this.gameState.getCurrentScenario();

      if (currentScenario) {

        await this.uiManager.displayScenario(currentScenario);

      } else if (this.gameState.completed) {

        // Show results if game was already completed

        this.uiManager.showPersonalityModal();

      } else {

        // Start with welcome scenario

        this.startWelcomeSequence();

      }

      

      this.initialized = true;

      console.log('Echoes of Choice initialized successfully');

      

    } catch (error) {

      console.error('Failed to initialize game:', error);

      GameUtils.showToast('Failed to initialize game. Please refresh the page.', 'error');

    }

  }

  startWelcomeSequence() {

    const strings = GAME_DATA.strings[this.gameState.language];

    

    // Create welcome scenario

    const welcomeScenario = {

      id: 0,

      title: strings.welcomeTitle,

      narrative: strings.welcomeNarrative,

      mood: 'calm',

      choices: [{

        text: strings.startChoice,

        impact: strings.startImpact,

        traits: { Empathy: 0, Pragmatism: 0, RiskTaking: 0, Trust: 0, MoralFlexibility: 0 }

      }]

    };

    

    this.uiManager.displayScenario(welcomeScenario);

    

    // Override choice handler for welcome scenario

    const originalHandler = this.uiManager.handleChoiceSelection;

    this.uiManager.handleChoiceSelection = () => {

      // Restore original handler

      this.uiManager.handleChoiceSelection = originalHandler.bind(this.uiManager);

      

      // Start actual game

      const firstScenario = this.gameState.getCurrentScenario();

      if (firstScenario) {

        setTimeout(() => {

          this.uiManager.displayScenario(firstScenario);

        }, 1000);

      }

    };

  }

  // Handle visibility change (pause/resume)

  handleVisibilityChange() {

    if (document.hidden) {

      // Pause background music when tab is not visible

      if (this.audioManager.currentMusic && !this.audioManager.currentMusic.paused) {

        this.audioManager.currentMusic.pause();

        this.wasPlayingMusic = true;

      }

      

      // Stop particle animation

      if (this.particleSystem) {

        this.particleSystem.stop();

      }

    } else {

      // Resume background music when tab becomes visible

      if (this.wasPlayingMusic && this.audioManager.currentMusic) {

        this.audioManager.currentMusic.play().catch(console.warn);

        this.wasPlayingMusic = false;

      }

      

      // Restart particle animation

      if (this.particleSystem && !GameUtils.prefersReducedMotion()) {

        this.particleSystem.start();

      }

    }

  }

  // Handle page unload (save state)

  handleBeforeUnload() {

    // Save current game state

    this.gameState.saveState();

    

    // Send analytics data if game is completed

    if (this.gameState.completed) {

      const analyticsData = this.gameState.getAnalyticsData();

      

      // Use sendBeacon for reliable data transmission during page unload

      if (navigator.sendBeacon) {

        const data = JSON.stringify(analyticsData);

        navigator.sendBeacon('/api/analytics', data);

      }

    }

  }

  // Error handling

  handleError(error) {

    console.error('Game error:', error);

    

    // Show user-friendly error message

    GameUtils.showToast(

      this.gameState.language === 'en' 

        ? 'An error occurred. Your progress has been saved.' 

        : 'एक त्रुटि हुई। आपकी प्रगति सहेज ली गई है।',

      'error'

    );

    

    // Save current state

    this.gameState.saveState();

  }

  // Cleanup resources

  destroy() {

    if (this.particleSystem) {

      this.particleSystem.stop();

    }

    

    if (this.audioManager) {

      this.audioManager.stopAllMusic();

    }

    

    // Remove event listeners

    document.removeEventListener('visibilitychange', this.handleVisibilityChange);

    window.removeEventListener('beforeunload', this.handleBeforeUnload);

    window.removeEventListener('error', this.handleError);

    

    this.initialized = false;

  }

}// Main Application Entry Point

class App {

  constructor() {

    this.game = null;

    this.loadingScreen = document.getElementById('loading-screen');

    this.gameContainer = document.getElementById('game-container');

  }

  async init() {

    try {

      // Show loading screen

      this.showLoadingScreen();

      

      // Initialize game

      this.game = new EchoesOfChoiceGame();

      

      // Set up global event listeners

      this.setupEventListeners();

      

      // Initialize game systems

      await this.game.init();

      

      // Hide loading screen and show game

      await this.hideLoadingScreen();

      

      console.log('Echoes of Choice app started successfully');

      

    } catch (error) {

      console.error('Failed to start app:', error);

      this.showError('Failed to load the game. Please refresh the page.');

    }

  }

  showLoadingScreen() {

    if (this.loadingScreen) {

      this.loadingScreen.classList.remove('hidden');

    }

    if (this.gameContainer) {

      this.gameContainer.classList.add('hidden');

    }

  }

  async hideLoadingScreen() {

    if (!this.loadingScreen || !this.gameContainer) return;

    

    // Add a minimum loading time for better UX

    await new Promise(resolve => setTimeout(resolve, 2000));

    

    // Fade out loading screen

    this.loadingScreen.style.opacity = '0';

    

    await new Promise(resolve => setTimeout(resolve, 500));

    

    this.loadingScreen.classList.add('hidden');

    this.gameContainer.classList.remove('hidden');

    

    // Reset opacity for potential future use

    this.loadingScreen.style.opacity = '1';

  }

  showError(message) {

    // Create error display

    const errorDiv = document.createElement('div');

    errorDiv.className = 'error-screen';

    errorDiv.style.cssText = `

      position: fixed;

      top: 0;

      left: 0;

      width: 100%;

      height: 100%;

      background: hsl(220, 30%, 5%);

      color: hsl(220, 30%, 95%);

      display: flex;

      align-items: center;

      justify-content: center;

      z-index: 10000;

      font-family: 'Inter', sans-serif;

    `;

    

    errorDiv.innerHTML = `

      <div style="text-align: center; max-width: 400px; padding: 2rem;">

        <h2 style="color: hsl(0, 100%, 60%); margin-bottom: 1rem;">Error</h2>

        <p style="margin-bottom: 2rem; line-height: 1.6;">${message}</p>

        <button onclick="window.location.reload()" style="

          background: hsl(220, 70%, 50%);

          color: white;

          border: none;

          padding: 0.75rem 1.5rem;

          border-radius: 0.5rem;

          cursor: pointer;

          font-size: 1rem;

        ">Reload Page</button>

      </div>

    `;

    

    document.body.appendChild(errorDiv);

  }

  setupEventListeners() {

    // Handle visibility changes

    document.addEventListener('visibilitychange', () => {

      if (this.game) {

        this.game.handleVisibilityChange();

      }

    });

    // Handle page unload

    window.addEventListener('beforeunload', () => {

      if (this.game) {

        this.game.handleBeforeUnload();

      }

    });

    // Global error handling

    window.addEventListener('error', (error) => {

      if (this.game) {

        this.game.handleError(error);

      }

    });

    // Handle unhandled promise rejections

    window.addEventListener('unhandledrejection', (event) => {

      console.error('Unhandled promise rejection:', event.reason);

      if (this.game) {

        this.game.handleError(event.reason);

      }

    });

  }

  destroy() {

    if (this.game) {

      this.game.destroy();

      this.game = null;

    }

  }

}

// Initialize and start the application

let app;

// Wait for DOM to be ready

if (document.readyState === 'loading') {

  document.addEventListener('DOMContentLoaded', startApp);

} else {

  startApp();

}

function startApp() {

  app = new App();

  app.init();

}

// Export for potential use in other scripts

if (typeof module !== 'undefined' && module.exports) {

  module.exports = { App, EchoesOfChoiceGame };

}