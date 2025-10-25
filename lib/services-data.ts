export interface Service {
  id: string;
  slug: string;
  title: {
    en: string;
    sw: string;
  };
  description: {
    en: string;
    sw: string;
  };
  blurb: {
    en: string;
    sw: string;
  };
  symptoms?: string[];
  process?: string[];
  icon: string;
}

export const services: Service[] = [
  {
    id: '1',
    slug: 'engine-diagnostics-repair',
    title: {
      en: 'Engine Diagnostics & Repair',
      sw: 'Uchunguzi wa Injini & Ukarabati',
    },
    blurb: {
      en: 'We use advanced scan tools, live data, and mechanical tests to locate the real fault before fixing it right.',
      sw: 'Tunatumia mashine za kisasa, data mubashara, na vipimo vya kimakanika kubaini chanzo cha tatizo kabla ya kukrekebisha ipasavyo.',
    },
    description: {
      en: 'We identify root causes—not just error codes. We read live data (fuel trims, misfire counters, coolant temps), run compression/leak-down tests, and verify timing alignment before recommending repairs. Typical fixes include intake leaks, faulty sensors (MAF/O2), timing components, head gaskets, injectors, and carbon buildup cleaning.',
      sw: 'Tunatafuta chanzo cha tatizo—si kusoma makosa pekee. Tunapima data mubashara (fuel trims, misfire counters, joto), compression/leak-down, na timing kabla ya kupendekeza matengenezo. Marekebisho ya kawaida: kuvuja kwa hewa, vihisi (MAF/O2), timing, head gasket, injectors, na usafishaji wa kaboni.',
    },
    icon: 'Wrench',
  },
  {
    id: '2',
    slug: 'auto-electrical-electronics',
    title: {
      en: 'Auto Electrical & Electronics',
      sw: 'Umeme wa Magari',
    },
    blurb: {
      en: 'From non-starting vehicles to parasitic drains and sensor faults. Complete electrical diagnostics and repairs.',
      sw: 'Kuanzia gari lisiloanzisha hadi kuvuja kwa umeme na vihisi vinavyokosea.',
    },
    description: {
      en: 'From non-starting vehicles to parasitic drains and sensor faults. We trace wiring, test alternators/starters, program modules where applicable, and resolve CAN-bus communication errors.',
      sw: 'Kuanzia gari lisiloanzisha hadi kuvuja kwa umeme (parasitic drain) na vihisi vinavyokosea. Tunapima nyaya, alternator/starter, kuprogram moduli panapostahili, na kutatua hitilafu za mawasiliano ya CAN-bus.',
    },
    icon: 'Zap',
  },
  {
    id: '3',
    slug: 'scheduled-service-maintenance',
    title: {
      en: 'Scheduled Service & Preventive Maintenance',
      sw: 'Huduma ya Ratiba & Matunzo ya Kuzuia',
    },
    blurb: {
      en: 'Keep your vehicle running smoothly with regular maintenance following brand-specific intervals.',
      sw: 'Weka gari lako likiendesha vizuri kwa matunzo ya kawaida kufuata vipindi maalum vya chapa.',
    },
    description: {
      en: 'Oil & filter, spark plugs, belts, fluids, filters (air, cabin, fuel), coolant and brake fluid flushes, battery testing, tyre rotation, safety checks. We follow brand-specific intervals to extend engine life and reduce breakdowns.',
      sw: 'Mafuta na filita, plugs, mikanda, vimiminika, filita (hewa, kabini, mafuta), kusafisha coolant/brake fluid, betri na tairi, na ukaguzi wa usalama. Tunafuata ratiba za kila chapa ili kuongeza maisha ya injini na kupunguza hitilafu.',
    },
    icon: 'Settings',
  },
  {
    id: '4',
    slug: 'cooling-system',
    title: {
      en: 'Cooling System (Radiators, Pumps, Thermostats)',
      sw: 'Mfumo wa Ubaridi (Radiator, Pampu, Thermostat)',
    },
    blurb: {
      en: 'Prevent engine damage from overheating with complete cooling system diagnostics and repairs.',
      sw: 'Zuia uharibifu wa injini kutokana na joto kupita kiasi kwa uchunguzi kamili wa mfumo wa ubaridi.',
    },
    description: {
      en: 'Overheating ruins engines. We pressure-test systems, inspect radiators/hoses, verify thermostat operation, and test fans and water pumps. We also bleed air properly after repairs.',
      sw: 'Joto kupita kiasi huharibu injini. Tunapima shinikizo, kukagua radiator/mabomba, thermostat, feni na pampu ya maji. Tunatoa hewa vizuri baada ya matengenezo.',
    },
    icon: 'Thermometer',
  },
  {
    id: '5',
    slug: 'fuel-system-injection',
    title: {
      en: 'Fuel System & Injection (Petrol & Diesel)',
      sw: 'Mfumo wa Mafuta & Injection (Petroli & Dizeli)',
    },
    blurb: {
      en: 'Complete fuel system diagnostics for both petrol and diesel engines.',
      sw: 'Uchunguzi kamili wa mfumo wa mafuta kwa injini za petroli na dizeli.',
    },
    description: {
      en: 'We diagnose fuel pressure, injector pulse, pump/fuel filter issues, EGR and swirl flaps (where applicable). For diesel, we test glow plugs, high-pressure pump delivery, and injector return rates.',
      sw: 'Tunapima pressure ya mafuta, mapigo ya injector, pampu/filita, EGR na swirl flaps (panapokuwepo). Kwa dizeli: glow plugs, uwezo wa pampu, na kiwango cha kurudi kwa injector.',
    },
    icon: 'Fuel',
  },
  {
    id: '6',
    slug: 'ignition-system',
    title: {
      en: 'Ignition System (Coils, Plugs, Timing)',
      sw: 'Mfumo wa Uwashaji (Coils, Plugs, Timing)',
    },
    blurb: {
      en: 'Solve misfires, rough idle, and poor acceleration with complete ignition system service.',
      sw: 'Tatua misfire, mtikisiko, na gari kutovuta kwa huduma kamili ya mfumo wa uwashaji.',
    },
    description: {
      en: 'Misfires, rough idle, or poor acceleration? We scope coils, inspect plugs, verify timing signals, and address carbon tracking.',
      sw: 'Misfire, mtikisiko, au gari kutovuta? Tunapima coils, plugs, ishara za timing, na carbon tracking.',
    },
    icon: 'Flame',
  },
  {
    id: '7',
    slug: 'transmission-clutch',
    title: {
      en: 'Transmission & Clutch (Manual & Auto)',
      sw: 'Gia & Clutch (Manual & Auto)',
    },
    blurb: {
      en: 'Complete transmission diagnostics and clutch services for manual and automatic vehicles.',
      sw: 'Uchunguzi kamili wa gia na huduma za clutch kwa magari ya manual na automatic.',
    },
    description: {
      en: 'Fluid condition checks, leak fixes, shift logic/mode diagnostics, clutch replacement, flywheel inspection, and adaptation resets where supported.',
      sw: 'Ukaguzi wa mafuta ya gia, uvujaji, uchunguzi wa mabadiliko ya gia, kubadilisha clutch, ukaguzi wa flywheel, na "adaptation reset" panapowezekana.',
    },
    icon: 'Cog',
  },
  {
    id: '8',
    slug: 'suspension-steering',
    title: {
      en: 'Suspension & Steering',
      sw: 'Suspension & Usukani',
    },
    blurb: {
      en: 'Fix noises, pulling, and uneven tyre wear with professional suspension and steering service.',
      sw: 'Rekebisha mlio, gari kuvuta upande, na tairi kuisha vibaya kwa huduma ya kitaalamu.',
    },
    description: {
      en: 'Noises, pulling, or uneven tyre wear? We check bushings, ball joints, shocks/struts, tie rods, power steering pumps/racks, and perform wheel alignment recommendations.',
      sw: 'Mlio, gari kuvuta upande, au tairi kuisha vibaya? Tunakagua bushings, ball joints, shocks/struts, tie rod, pampu/rack za usukani, na ushauri wa alignment.',
    },
    icon: 'Move',
  },
  {
    id: '9',
    slug: 'brakes',
    title: {
      en: 'Brakes (Pads, Rotors, Hydraulics, ABS)',
      sw: 'Breki (Pads, Rotors, Hydraulics, ABS)',
    },
    blurb: {
      en: 'Complete brake system service including pads, rotors, hydraulics, and ABS diagnostics.',
      sw: 'Huduma kamili ya mfumo wa breki ikijumuisha pads, rotors, hydraulics, na uchunguzi wa ABS.',
    },
    description: {
      en: 'We measure rotor thickness, check pad wear, bleed systems, fix seized calipers, and diagnose ABS sensor/ring faults.',
      sw: 'Tunapima unene wa rotor, uchakavu wa pads, kutoa hewa, kurekebisha caliper zilizokwama, na uchunguzi wa vihisi vya ABS.',
    },
    icon: 'Disc',
  },
  {
    id: '10',
    slug: 'air-conditioning',
    title: {
      en: 'Air-Conditioning (HVAC)',
      sw: 'AC (HVAC)',
    },
    blurb: {
      en: 'Complete AC diagnostics and repairs to keep you cool on the road.',
      sw: 'Uchunguzi kamili wa AC na matengenezo kukufanya ubaridi barabarani.',
    },
    description: {
      en: 'Leak detection, compressor/expansion valve diagnostics, blower and blend door checks, cabin filter replacement, and refrigerant recharge to spec.',
      sw: 'Ugunduzi wa uvujaji, uchunguzi wa compressor/expansion valve, blower & blend door, kubadilisha cabin filter, na kujaza gesi kwa viwango sahihi.',
    },
    icon: 'Wind',
  },
  {
    id: '11',
    slug: 'battery-starter-charging',
    title: {
      en: 'Battery, Starter & Charging',
      sw: 'Betri, Starter & Charging',
    },
    blurb: {
      en: 'Complete electrical system testing and service for reliable starts every time.',
      sw: 'Upimaji kamili wa mfumo wa umeme na huduma kwa kuanzisha kutegemewa kila wakati.',
    },
    description: {
      en: 'Load testing, alternator output, voltage drop tests, ground cleaning, smart-charging diagnostics.',
      sw: 'Load test ya betri, nguvu ya alternator, vipimo vya voltage drop, kusafisha "grounds," na uchunguzi wa smart-charging.',
    },
    icon: 'Battery',
  },
  {
    id: '12',
    slug: 'pre-purchase-inspection',
    title: {
      en: 'Pre-Purchase & Post-Repair Inspections',
      sw: 'Ukaguzi wa Kabla ya Kununua & Baada ya Matengenezo',
    },
    blurb: {
      en: 'Make informed decisions with comprehensive vehicle inspections and detailed reports.',
      sw: 'Fanya maamuzi sahihi kwa ukaguzi kamili wa gari na ripoti zilizo na maelezo.',
    },
    description: {
      en: 'Full body/chassis check, test drive data, scan for stored faults, fluids/filters/brakes/tyres report, and a prioritized repair estimate.',
      sw: 'Ukaguzi kamili wa gari, data ya test drive, makosa yaliyohifadhiwa, ripoti ya vimiminika/filita/breki/tairi, na makadirio ya matengenezo kwa mpangilio wa kipaumbele.',
    },
    icon: 'ClipboardCheck',
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((service) => service.slug === slug);
}
