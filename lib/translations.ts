export type Language = 'en' | 'sw';

export const translations = {
  en: {
    nav: {
      home: 'Home',
      services: 'Services',
      gallery: 'Gallery',
      about: 'About',
      blog: 'Blog',
      contact: 'Contact',
    },
    hero: {
      headline: 'Precision Auto Care for Every Make & Model',
      subheadline: 'From diagnostics and electricals to full engine rebuilds—done right, the first time.',
      primaryCta: 'Book Diagnostics',
      secondaryCta: 'Call Now',
    },
    whyChoose: {
      title: 'Why Choose Us',
      diagnostics: {
        title: 'Computerized Diagnostics',
        description: 'OEM-grade scanning tools, not guesswork.',
      },
      electrical: {
        title: 'Electrical Expertise',
        description: 'From simple alternators to complex CAN-bus faults.',
      },
      engine: {
        title: 'Engine Specialists',
        description: 'Timing, head gaskets, injectors, rebuilds.',
      },
      transparent: {
        title: 'Transparent Process',
        description: 'Photo/video updates and itemized quotes.',
      },
      quality: {
        title: 'Quality Parts',
        description: 'OEM or vetted aftermarket with warranty.',
      },
    },
    brands: {
      title: 'Vehicle Brands & Specialties',
      description: 'Experienced with Toyota, Nissan, Isuzu, Ford Ranger, Land Rover, BMW—and most other makes.',
    },
    process: {
      title: 'Our Process',
      book: {
        title: 'Book',
        description: 'Call/WhatsApp or fill the form.',
      },
      diagnose: {
        title: 'Diagnose',
        description: 'Computerized tests and visual checks.',
      },
      approve: {
        title: 'Approve',
        description: 'You get an itemized quote with timelines.',
      },
      repair: {
        title: 'Repair',
        description: 'We share photo/video updates.',
      },
      qualityCheck: {
        title: 'Quality Check',
        description: 'Test drive + scan to confirm no new faults.',
      },
      collect: {
        title: 'Collect',
        description: 'Pay, receive report, and maintenance tips.',
      },
    },
    warranty: {
      title: 'Our Warranty',
      description: 'We back our work with a parts & labor warranty (details on invoice).',
    },
    footer: {
      copyright: '© 2025 Mr Engine Tz. All rights reserved.',
      tagline: 'Precision Auto Care for Every Make & Model',
    },
  },
  sw: {
    nav: {
      home: 'Nyumbani',
      services: 'Huduma',
      gallery: 'Picha',
      about: 'Kuhusu',
      blog: 'Blogu',
      contact: 'Wasiliana',
    },
    hero: {
      headline: 'Huduma Bora za Magari kwa Aina Zote',
      subheadline: 'Kuanzia uchunguzi wa mifumo hadi umeme na ukarabati kamili wa injini—kwa usahihi, mara ya kwanza.',
      primaryCta: 'Weka Miadi ya Uchunguzi',
      secondaryCta: 'Piga Simu Sasa',
    },
    whyChoose: {
      title: 'Kwa Nini Utuchague',
      diagnostics: {
        title: 'Uchunguzi kwa Mashine',
        description: 'Vifaa vya kisasa, si kubahatisha.',
      },
      electrical: {
        title: 'Utaalamu wa Umeme',
        description: 'Kuanzia alternator hadi matatizo ya mtandao wa CAN.',
      },
      engine: {
        title: 'Maboresho ya Injini',
        description: 'Timing, head gasket, injectors, ukarabati kamili.',
      },
      transparent: {
        title: 'Uwazi wa Kazi',
        description: 'Picha/video na hesabu ya gharama.',
      },
      quality: {
        title: 'Sehemu Bora',
        description: 'Vipuri vya asili au vilivyoidhinishwa, na dhamana.',
      },
    },
    brands: {
      title: 'Chapa za Magari & Utaalamu',
      description: 'Uzoefu na Toyota, Nissan, Isuzu, Ford Ranger, Land Rover, BMW—na chapa nyingi nyingine.',
    },
    process: {
      title: 'Mchakato Wetu',
      book: {
        title: 'Weka Miadi',
        description: 'Simu/WhatsApp au fomu.',
      },
      diagnose: {
        title: 'Uchunguzi',
        description: 'Mitambo na ukaguzi wa macho.',
      },
      approve: {
        title: 'Idhini',
        description: 'Unapata makadirio yenye maelezo na muda.',
      },
      repair: {
        title: 'Matengenezo',
        description: 'Tunasambaza picha/video za maendeleo.',
      },
      qualityCheck: {
        title: 'Ukaguzi wa Ubora',
        description: 'Road test + scan kuthibitisha.',
      },
      collect: {
        title: 'Chukua',
        description: 'Malipo, ripoti, na ushauri wa matunzo.',
      },
    },
    warranty: {
      title: 'Dhamana Yetu',
      description: 'Tunadhamini kazi yetu (vipuri & ujira – maelezo kwenye risiti).',
    },
    footer: {
      copyright: '© 2025 Mr Engine Tz. Haki zote zimehifadhiwa.',
      tagline: 'Huduma Bora za Magari kwa Aina Zote',
    },
  },
};

export function getTranslation(lang: Language) {
  return translations[lang];
}
