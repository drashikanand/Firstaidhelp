// First Aid topics with lucide-react icon names + DO/DON'T data

export const firstAidTopics = [
  {
    id: 'abdominal-injury',
    title: 'Abdominal Injury',
    icon: 'Stethoscope',
    color: 'from-red-500/30 to-orange-500/20',
    dos: [
      'Ask for Help',
      'Keep person lying down',
      'Cover wound with clean cloth',
      'Call emergency services',
      'Monitor breathing',
      'If the person becomes unconscious and is not breathing, immediately start CPR and use AED if available'
    ],
    donts: [
      "Don't give food or water",
      "Don't push organs back",
      "Don't remove embedded objects",
      "Don't apply pressure directly on wound"
    ]
  },
  {
    id: 'airway-obstruction',
    title: 'Airway Obstruction (Choking)',
    icon: 'Wind',
    color: 'from-cyan-500/30 to-sky-500/20',
    dos: [
      'Ask the person to cough forcefully',
      'Give 5 back blows between shoulder blades',
      'Perform abdominal thrusts (Heimlich maneuver)',
      'Call emergency services',
      'Start CPR if person becomes unconscious'
    ],
    donts: [
      "Don't put fingers blindly in the mouth",
      "Don't give water while choking",
      "Don't leave the person alone",
      "Don't perform abdominal thrusts on infants under 1 year"
    ]
  },
  {
    id: 'altitude-sickness',
    title: 'Altitude Related Sickness',
    icon: 'Mountain',
    color: 'from-indigo-500/30 to-blue-500/20',
    dos: [
      'Stop ascending and rest',
      'Descend to lower altitude immediately if symptoms worsen',
      'Keep the person warm and hydrated',
      'Provide oxygen if available',
      'Call emergency services'
    ],
    donts: [
      "Don't continue climbing",
      "Don't ignore symptoms like headache or nausea",
      "Don't consume alcohol or sleeping pills",
      "Don't exert physically"
    ]
  },
  {
    id: 'anaphylaxis',
    title: 'Anaphylaxis',
    icon: 'Syringe',
    color: 'from-amber-500/30 to-yellow-500/20',
    dos: [
      'Call emergency services immediately',
      'Use epinephrine auto-injector (EpiPen) if available',
      'Help person lie flat with legs raised',
      'Loosen tight clothing',
      'Monitor breathing and pulse',
      'Start CPR if breathing stops'
    ],
    donts: [
      "Don't give anything by mouth",
      "Don't make the person stand or walk",
      "Don't delay calling emergency services",
      "Don't assume one dose of epinephrine is enough"
    ]
  },
  {
    id: 'spinal-injury',
    title: 'Backbone / Spinal Injury',
    icon: 'Bone',
    color: 'from-slate-400/30 to-zinc-500/20',
    dos: [
      'Keep the person completely still',
      'Support head and neck in line with body',
      'Call emergency services immediately',
      'Monitor breathing',
      'Cover with blanket to prevent shock'
    ],
    donts: [
      "Don't move the person unless absolutely necessary",
      "Don't twist or bend the neck/spine",
      "Don't remove helmet (if any)",
      "Don't give food or water"
    ]
  },
  {
    id: 'bleeding-ear',
    title: 'Bleeding from Ear',
    icon: 'Ear',
    color: 'from-rose-500/30 to-pink-500/20',
    dos: [
      'Help person sit up with affected ear tilted down',
      'Place clean cloth over ear lightly',
      'Call emergency services if from head injury',
      'Monitor for signs of shock'
    ],
    donts: [
      "Don't plug the ear with cotton",
      "Don't try to stop the flow by pressure",
      "Don't insert anything inside the ear",
      "Don't ignore if associated with head injury"
    ]
  },
  {
    id: 'bleeding-nose',
    title: 'Bleeding from Nose',
    icon: 'Droplet',
    color: 'from-red-500/30 to-rose-500/20',
    dos: [
      'Sit upright and lean slightly forward',
      'Pinch the soft part of nose for 10-15 minutes',
      'Breathe through mouth',
      'Apply cold compress to bridge of nose',
      'Seek medical help if bleeding persists beyond 20 minutes'
    ],
    donts: [
      "Don't lie down or tilt head back",
      "Don't blow nose for several hours after",
      "Don't pack the nose with tissue",
      "Don't ignore frequent nosebleeds"
    ]
  },
  {
    id: 'bleeding-wound',
    title: 'Bleeding from Wound',
    icon: 'Droplets',
    color: 'from-red-500/30 to-rose-500/20',
    dos: [
      'Apply firm direct pressure with a clean cloth',
      'Elevate the wounded area above heart level',
      'Cover wound with sterile bandage',
      'Call emergency services if bleeding is severe',
      'Monitor for shock'
    ],
    donts: [
      "Don't remove embedded objects",
      "Don't apply tourniquet unless trained",
      "Don't peek under bandage repeatedly",
      "Don't use dirty cloth"
    ]
  },
  {
    id: 'breathing-difficulties',
    title: 'Breathing Difficulties',
    icon: 'AirVent',
    color: 'from-sky-500/30 to-cyan-500/20',
    dos: [
      'Help person sit upright',
      'Loosen tight clothing',
      'Reassure and keep calm',
      'Help use prescribed inhaler if asthmatic',
      'Call emergency services'
    ],
    donts: [
      "Don't lay them flat",
      "Don't give food or water",
      "Don't leave them alone",
      "Don't delay seeking help"
    ]
  },
  {
    id: 'burn-injury',
    title: 'Burn Related Injury',
    icon: 'Flame',
    color: 'from-orange-500/30 to-red-500/20',
    dos: [
      'Cool the burn with cool (not cold) running water for 20 minutes',
      'Remove jewelry/tight items before swelling',
      'Cover loosely with sterile non-stick dressing',
      'Keep person warm to prevent shock',
      'Seek medical attention for serious burns'
    ],
    donts: [
      "Don't apply ice, butter, oil or toothpaste",
      "Don't break blisters",
      "Don't remove stuck clothing",
      "Don't use cotton or fluffy material on burn"
    ]
  },
  {
    id: 'chemical-burn',
    title: 'Chemical Burn',
    icon: 'FlaskConical',
    color: 'from-lime-500/30 to-green-500/20',
    dos: [
      'Remove contaminated clothing carefully',
      'Flush area with running water for at least 20 minutes',
      'Cover loosely with clean dressing',
      'Identify chemical if possible',
      'Call emergency services'
    ],
    donts: [
      "Don't rub the burn",
      "Don't try to neutralize chemical",
      "Don't apply creams or ointments",
      "Don't touch chemical with bare hands"
    ]
  },
  {
    id: 'chest-pain',
    title: 'Chest Pain',
    icon: 'HeartPulse',
    color: 'from-rose-500/30 to-red-500/20',
    dos: [
      'Call emergency services immediately',
      'Help person sit in comfortable position',
      'Loosen tight clothing',
      'Give aspirin if not allergic and no contraindications',
      'Be ready to perform CPR'
    ],
    donts: [
      "Don't leave the person alone",
      "Don't allow person to walk or exert",
      "Don't give food or water",
      "Don't ignore symptoms even if mild"
    ]
  },
  {
    id: 'convulsion',
    title: 'Convulsion',
    icon: 'Zap',
    color: 'from-yellow-500/30 to-amber-500/20',
    dos: [
      'Protect from injury - clear area of hard objects',
      'Cushion the head',
      'Loosen tight clothing around neck',
      'Place in recovery position after convulsion stops',
      'Call emergency services if seizure lasts over 5 minutes'
    ],
    donts: [
      "Don't restrain the person",
      "Don't put anything in their mouth",
      "Don't move the person unless in danger",
      "Don't give food or water until fully recovered"
    ]
  },
  {
    id: 'cpr',
    title: 'CPR',
    icon: 'Heart',
    color: 'from-pink-500/30 to-rose-500/20',
    dos: [
      'Check responsiveness and breathing',
      'Call emergency services immediately',
      'Place hands center of chest, push hard and fast (5-6 cm deep)',
      'Compress at rate of 100-120 per minute',
      'Give 30 compressions then 2 rescue breaths',
      'Continue until help arrives or person revives'
    ],
    donts: [
      "Don't stop CPR unless person breathes or help arrives",
      "Don't perform CPR on conscious person",
      "Don't bend your elbows during compressions",
      "Don't be afraid to push hard"
    ]
  },
  {
    id: 'cpr-aed',
    title: 'CPR with AED',
    icon: 'Activity',
    color: 'from-emerald-500/30 to-green-500/20',
    dos: [
      'Turn on AED and follow voice prompts',
      'Attach pads to bare chest as shown',
      'Ensure no one is touching the person during analysis',
      'Deliver shock if advised',
      'Resume CPR immediately after shock',
      'Continue cycle until help arrives'
    ],
    donts: [
      "Don't use AED on wet surface",
      "Don't touch person during shock",
      "Don't place pads over pacemaker",
      "Don't delay CPR while preparing AED"
    ]
  },
  {
    id: 'cut-injury',
    title: 'Cut Related Injury',
    icon: 'Scissors',
    color: 'from-red-500/30 to-rose-500/20',
    dos: [
      'Wash hands before treating',
      'Clean wound with clean water',
      'Apply pressure with sterile cloth to stop bleeding',
      'Cover with sterile dressing',
      'Seek medical help for deep cuts'
    ],
    donts: [
      "Don't use alcohol or hydrogen peroxide on wound",
      "Don't remove deeply embedded objects",
      "Don't ignore signs of infection",
      "Don't apply cotton wool directly"
    ]
  },
  {
    id: 'dehydration',
    title: 'Dehydration',
    icon: 'GlassWater',
    color: 'from-blue-500/30 to-cyan-500/20',
    dos: [
      'Move person to cool, shaded area',
      'Give small sips of water or ORS',
      'Rest and elevate legs',
      'Loosen tight clothing',
      'Seek medical help if severe'
    ],
    donts: [
      "Don't give alcohol or caffeinated drinks",
      "Don't give large quantities at once",
      "Don't ignore symptoms in children/elderly",
      "Don't continue strenuous activity"
    ]
  },
  {
    id: 'dizziness',
    title: 'Dizziness / Vertigo',
    icon: 'RotateCw',
    color: 'from-purple-500/30 to-violet-500/20',
    dos: [
      'Help person sit or lie down',
      'Keep head still',
      'Provide water if conscious',
      'Check for signs of stroke',
      'Seek medical help if persistent'
    ],
    donts: [
      "Don't allow sudden movements",
      "Don't let person drive or operate machinery",
      "Don't ignore associated symptoms",
      "Don't give alcohol"
    ]
  },
  {
    id: 'animal-bite',
    title: 'Dog / Animal Bite',
    icon: 'Dog',
    color: 'from-amber-500/30 to-orange-500/20',
    dos: [
      'Wash wound with soap and running water for 15 minutes',
      'Apply antiseptic if available',
      'Cover with sterile bandage',
      'Seek immediate medical attention for rabies vaccine',
      'Note down animal details if possible'
    ],
    donts: [
      "Don't suture wound immediately",
      "Don't apply turmeric, chili, or oil",
      "Don't ignore even minor bites",
      "Don't try to catch the animal yourself"
    ]
  },
  {
    id: 'drowning',
    title: 'Drowning',
    icon: 'Waves',
    color: 'from-blue-500/30 to-sky-500/20',
    dos: [
      'Call for help immediately',
      'Remove from water safely',
      'Check breathing and pulse',
      'Start CPR if not breathing',
      'Keep person warm and dry',
      'Seek medical attention even if revived'
    ],
    donts: [
      "Don't enter water if untrained",
      "Don't try to drain water from lungs",
      "Don't leave person unattended",
      "Don't assume recovery means safety"
    ]
  },
  {
    id: 'electric-shock',
    title: 'Electric Shock',
    icon: 'Plug',
    color: 'from-yellow-500/30 to-amber-500/20',
    dos: [
      'Switch off power source first',
      'Use dry non-conductive object to separate person',
      'Check breathing and pulse',
      'Start CPR if needed',
      'Treat burns and call emergency services'
    ],
    donts: [
      "Don't touch person while connected to current",
      "Don't use wet or metal objects",
      "Don't move person if spinal injury suspected",
      "Don't apply ointment on burns"
    ]
  },
  {
    id: 'eye-injury',
    title: 'Eye Injury',
    icon: 'Eye',
    color: 'from-cyan-500/30 to-teal-500/20',
    dos: [
      'Wash eye gently with clean water for chemicals',
      'Cover both eyes with clean cloth',
      'Keep head still',
      'Seek immediate medical attention'
    ],
    donts: [
      "Don't rub the eye",
      "Don't try to remove embedded objects",
      "Don't apply pressure",
      "Don't use cotton or fluffy material"
    ]
  },
  {
    id: 'fainting',
    title: 'Fainting',
    icon: 'UserMinus',
    color: 'from-slate-400/30 to-zinc-500/20',
    dos: [
      'Lay person flat and raise legs',
      'Loosen tight clothing',
      'Ensure fresh air',
      'Check breathing',
      'Seek medical help if unconscious for over a minute'
    ],
    donts: [
      "Don't slap or shake the person",
      "Don't give water until fully conscious",
      "Don't let person stand quickly",
      "Don't crowd around the person"
    ]
  },
  {
    id: 'fever',
    title: 'Fever',
    icon: 'Thermometer',
    color: 'from-orange-500/30 to-red-500/20',
    dos: [
      'Rest in a cool environment',
      'Drink plenty of fluids',
      'Use lukewarm compress on forehead',
      'Take paracetamol as per dosage',
      'Seek medical help if very high or persistent'
    ],
    donts: [
      "Don't use cold water bath",
      "Don't overdress the person",
      "Don't give aspirin to children",
      "Don't ignore high fever with rash"
    ]
  },
  {
    id: 'frostbite',
    title: 'Frostbite',
    icon: 'Snowflake',
    color: 'from-sky-500/30 to-blue-500/20',
    dos: [
      'Move to warm area',
      'Remove wet clothing',
      'Warm affected area in warm (not hot) water',
      'Cover with sterile dressing',
      'Seek medical attention'
    ],
    donts: [
      "Don't rub or massage the area",
      "Don't use direct heat (fire, heater)",
      "Don't break blisters",
      "Don't walk on frostbitten feet"
    ]
  },
  {
    id: 'general-guidelines',
    title: 'General Guidelines of Any First Aid',
    icon: 'ClipboardList',
    color: 'from-emerald-500/30 to-teal-500/20',
    dos: [
      'Assess the scene for safety first',
      'Wear protective gloves if available',
      'Call emergency services',
      'Provide reassurance to the casualty',
      'Record observations to share with medical personnel'
    ],
    donts: [
      "Don't put yourself in danger",
      "Don't move casualty unnecessarily",
      "Don't give food or water to unconscious person",
      "Don't make medical diagnoses"
    ]
  },
  {
    id: 'head-injury',
    title: 'Head Injury',
    icon: 'Brain',
    color: 'from-fuchsia-500/30 to-pink-500/20',
    dos: [
      'Keep person still and calm',
      'Apply gentle pressure to bleeding wound',
      'Watch for changes in consciousness',
      'Call emergency services for serious injury',
      'Monitor breathing'
    ],
    donts: [
      "Don't move the person unless in danger",
      "Don't remove penetrating objects",
      "Don't give food or water",
      "Don't shake or wake forcefully"
    ]
  },
  {
    id: 'heat-stroke',
    title: 'Heat Stroke',
    icon: 'Sun',
    color: 'from-amber-500/30 to-orange-500/20',
    dos: [
      'Move person to cool, shaded area',
      'Remove excess clothing',
      'Cool body with wet cloth or sponge',
      'Apply ice packs to neck, armpits, groin',
      'Call emergency services immediately'
    ],
    donts: [
      "Don't give cold drinks if unconscious",
      "Don't immerse in ice water",
      "Don't give fever-reducing medication",
      "Don't delay cooling"
    ]
  },
  {
    id: 'hypoglycemia',
    title: 'Hypoglycemia',
    icon: 'Candy',
    color: 'from-pink-500/30 to-rose-500/20',
    dos: [
      'Give sugary food/drink if conscious (glucose tablets, juice)',
      'Recheck after 15 minutes',
      'Provide complex carbs once recovered',
      'Call emergency services if unconscious',
      'Place unconscious person in recovery position'
    ],
    donts: [
      "Don't give food/drink to unconscious person",
      "Don't give insulin",
      "Don't ignore confused behavior in diabetic",
      "Don't leave person alone"
    ]
  },
  {
    id: 'insect-bite',
    title: 'Insect Bite / Sting',
    icon: 'Bug',
    color: 'from-lime-500/30 to-green-500/20',
    dos: [
      'Remove stinger by scraping with a card',
      'Wash area with soap and water',
      'Apply cold compress to reduce swelling',
      'Watch for signs of allergic reaction',
      'Seek medical help if severe reaction'
    ],
    donts: [
      "Don't squeeze the stinger out",
      "Don't scratch the bite",
      "Don't apply unprescribed creams",
      "Don't ignore allergic reactions"
    ]
  },
  {
    id: 'poisoning',
    title: 'Poisoning',
    icon: 'Skull',
    color: 'from-zinc-400/30 to-slate-500/20',
    dos: [
      'Identify the poison if possible',
      'Call poison control or emergency services',
      'Keep sample/container for medical team',
      'Place unconscious person in recovery position',
      'Monitor breathing'
    ],
    donts: [
      "Don't induce vomiting unless told to",
      "Don't give anything by mouth without medical advice",
      "Don't give milk unless instructed",
      "Don't delay calling for help"
    ]
  },
  {
    id: 'snake-bite',
    title: 'Snake Bite',
    icon: 'Worm',
    color: 'from-green-500/30 to-emerald-500/20',
    dos: [
      'Keep the person calm and still',
      'Immobilize the affected limb below heart level',
      'Remove jewelry/tight clothing',
      'Note snake appearance if safe',
      'Get to hospital immediately for anti-venom'
    ],
    donts: [
      "Don't cut the wound or try to suck venom",
      "Don't apply tourniquet",
      "Don't give alcohol or stimulants",
      "Don't try to catch or kill the snake"
    ]
  },
  {
    id: 'stroke',
    title: 'Stroke',
    icon: 'BrainCircuit',
    color: 'from-violet-500/30 to-purple-500/20',
    dos: [
      'Use FAST test (Face, Arms, Speech, Time)',
      'Call emergency services immediately',
      'Lay person down with head/shoulders raised',
      'Loosen tight clothing',
      'Note time when symptoms started'
    ],
    donts: [
      "Don't give food, water or medication",
      "Don't let person sleep through symptoms",
      "Don't ignore even temporary symptoms",
      "Don't drive person to hospital - call ambulance"
    ]
  },
  {
    id: 'toxic-chemical',
    title: 'Toxic Chemical Contact',
    icon: 'Biohazard',
    color: 'from-yellow-500/30 to-amber-500/20',
    dos: [
      'Remove contaminated clothing',
      'Flush skin with water for 20 minutes',
      'Cover affected area with clean dressing',
      'Identify chemical if safe',
      'Seek medical attention'
    ],
    donts: [
      "Don't touch chemical with bare hands",
      "Don't try to neutralize chemical",
      "Don't apply creams or ointments",
      "Don't ignore exposure even if no symptoms"
    ]
  },
  {
    id: 'toxic-gas',
    title: 'Toxic Gas Inhalation',
    icon: 'CloudFog',
    color: 'from-slate-400/30 to-zinc-500/20',
    dos: [
      'Move person to fresh air immediately',
      'Loosen tight clothing',
      'Check breathing and pulse',
      'Start CPR if not breathing',
      'Call emergency services'
    ],
    donts: [
      "Don't enter contaminated area without protection",
      "Don't give food or water",
      "Don't ignore lingering symptoms",
      "Don't allow person to walk in toxic area"
    ]
  },
  {
    id: 'joint-bone-trauma',
    title: 'Trauma to Joints / Bone',
    icon: 'Footprints',
    color: 'from-orange-500/30 to-amber-500/20',
    dos: [
      'Immobilize the injured area',
      'Apply ice pack wrapped in cloth',
      'Elevate if possible',
      'Use splint if necessary',
      'Seek medical attention'
    ],
    donts: [
      "Don't try to realign bone",
      "Don't move person if spine injury suspected",
      "Don't apply heat",
      "Don't allow weight bearing on injured part"
    ]
  },
  {
    id: 'amputation',
    title: 'Traumatic Amputation',
    icon: 'Slice',
    color: 'from-red-500/30 to-rose-500/20',
    dos: [
      'Control bleeding with direct pressure',
      'Wrap amputated part in clean cloth',
      'Place wrapped part in plastic bag on ice',
      'Call emergency services immediately',
      'Treat for shock'
    ],
    donts: [
      "Don't place amputated part directly on ice",
      "Don't wash the amputated part",
      "Don't apply tourniquet unless trained",
      "Don't delay transport to hospital"
    ]
  },
  {
    id: 'oshwc-regulations',
    title: 'OSHWC Code 2020 & Rule Regulations',
    icon: 'Scale',
    color: 'from-indigo-500/30 to-blue-500/20',
    dos: [
      'Maintain first aid boxes as per regulation',
      'Train designated first aiders',
      'Display emergency contact numbers',
      'Record all incidents in register',
      'Conduct regular safety drills'
    ],
    donts: [
      "Don't ignore mandatory safety protocols",
      "Don't allow untrained persons to administer first aid",
      "Don't delay reporting workplace injuries",
      "Don't use expired medical supplies"
    ]
  }
];
