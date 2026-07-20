// ═══════════════════════════════════════════════════════
// SSC JE ELECTRICAL — CRACK APP — QUESTION DATA FILE
// ═══════════════════════════════════════════════════════
// Format: { q, opts[4], ans(0-indexed), level, tag, exp }
// Tags:
//   🔴 PYQ (SSC JE YEAR)             = confirmed asked in that year
//   🔴 PYQ (REPEATED — YR1,YR2,YR3)  = asked in multiple years
//   🟢 CONCEPT                       = syllabus-based / pattern question
// ═══════════════════════════════════════════════════════

const TOPICS = [
  { id: 1,  name: "Electrical Machines",    target: 109, priority: "HIGH",   category: "Technical" },
  { id: 2,  name: "Network Theory",         target: 103, priority: "HIGH",   category: "Technical" },
  { id: 3,  name: "Power Systems",          target: 88,  priority: "HIGH",   category: "Technical" },
  { id: 4,  name: "Basic Electrical Engg",  target: 77,  priority: "HIGH",   category: "Technical" },
  { id: 5,  name: "Measurements",           target: 72,  priority: "HIGH",   category: "Technical" },
  { id: 6,  name: "Power Electronics",      target: 56,  priority: "MEDIUM", category: "Technical" },
  { id: 7,  name: "Control Systems",        target: 51,  priority: "MEDIUM", category: "Technical" },
  { id: 8,  name: "EMT / Field Theory",     target: 40,  priority: "MEDIUM", category: "Technical" },
  { id: 9,  name: "Utilisation / Traction", target: 40,  priority: "MEDIUM", category: "Technical" },
  { id: 10, name: "Analog Electronics",     target: 32,  priority: "LOW",    category: "Technical" },
  { id: 11, name: "Digital Electronics",    target: 32,  priority: "LOW",    category: "Technical" },
  { id: 12, name: "Estimation & Costing",   target: 32,  priority: "LOW",    category: "Technical" },
  { id: 13, name: "Reasoning",              target: 180, priority: "HIGH",   category: "Non-Technical" },
  { id: 14, name: "General Awareness",      target: 120, priority: "HIGH",   category: "Non-Technical" }
];

const QUESTION_BANK = {
  1: [], 2: [], 3: [], 4: [], 5: [], 6: [], 7: [],
  8: [], 9: [], 10: [], 11: [], 12: [], 13: [], 14: []
};

// ─────────────────────────────────────────────────────────
// TOPIC 1: ELECTRICAL MACHINES — Sub-topic: DC MACHINES (35Q)
// ─────────────────────────────────────────────────────────
QUESTION_BANK[1].push(
{ q:"A 4-pole, lap-wound DC generator has 500 armature conductors, flux/pole 0.02 Wb, and runs at 1000 rpm. Calculate the EMF generated.",
  opts:["166.67 V","83.33 V","333.33 V","200 V"], ans:0, level:"Medium", tag:"🟢 CONCEPT",
  exp:"E = ΦZNP/(60A). For lap winding A = P, so E = ΦZN/60 = (0.02×500×1000)/60 = 166.67 V." },

{ q:"The same generator (Φ=0.02 Wb, Z=500, N=1000 rpm, P=4) is now wave-wound instead of lap-wound. Find the new EMF.",
  opts:["166.67 V","333.33 V","83.33 V","250 V"], ans:1, level:"Medium", tag:"🟢 CONCEPT",
  exp:"For wave winding A = 2. E = ΦZNP/(60A) = (0.02×500×1000×4)/(60×2) = 333.33 V." },

{ q:"In the EMF equation of a DC generator, E = ΦZNP/(60A), which of the following quantities does NOT appear at all?",
  opts:["Armature resistance (Ra)","Flux per pole (Φ)","Number of parallel paths (A)","Speed (N)"], ans:0, level:"Easy", tag:"🟢 CONCEPT",
  exp:"Ra affects terminal voltage (V = E − IaRa) but does not appear in the induced-EMF equation itself." },

{ q:"For the same machine and speed, what is the ratio of EMF generated with wave winding to that with lap winding (P = number of poles)?",
  opts:["P/2","2/P","P","1/P"], ans:0, level:"Medium", tag:"🟢 CONCEPT",
  exp:"E_wave/E_lap = A_lap/A_wave = P/2 (since A_lap = P and A_wave = 2). For P=4 this ratio is 2, matching Q1 & Q2 (166.67×2=333.33)." },

{ q:"In a DC generator, speed is doubled and flux per pole is simultaneously halved, all else remaining constant. The induced EMF will:",
  opts:["Remain unchanged","Double","Halve","Become zero"], ans:0, level:"Easy", tag:"🟢 CONCEPT",
  exp:"E ∝ ΦN. New E = (Φ/2)×(2N) = ΦN = same as before, so EMF stays unchanged." },

{ q:"A lap-wound DC motor (P=6, A=6) has Z=600 conductors, flux/pole 0.015 Wb, and draws an armature current of 20 A. Find the torque developed.",
  opts:["28.65 N·m","14.32 N·m","57.3 N·m","9.55 N·m"], ans:0, level:"Hard", tag:"🟢 CONCEPT",
  exp:"Ta = PΦZIa/(2πA) = (6×0.015×600×20)/(2π×6) = 1080/37.70 = 28.65 N·m." },

{ q:"A DC motor is supplied at V=220 V, draws armature current Ia=10 A, with armature resistance Ra=0.5 Ω. Find the back EMF (Eb).",
  opts:["215 V","225 V","220 V","210 V"], ans:0, level:"Easy", tag:"🟢 CONCEPT",
  exp:"Eb = V − IaRa = 220 − (10×0.5) = 220 − 5 = 215 V." },

{ q:"If a starting rheostat is inserted in the armature circuit of a shunt motor while it drives a constant torque load, the steady-state speed will:",
  opts:["Decrease","Increase","Remain unchanged","Become infinite"], ans:0, level:"Medium", tag:"🟢 CONCEPT",
  exp:"Extra Ra increases the IaRa drop, reducing Eb (=V−IaRa). Since N ∝ Eb/Φ, speed decreases — this is the armature (rheostatic) speed control principle." },

{ q:"The condition for maximum power developed by the armature of a DC motor is:",
  opts:["Back EMF = half of applied voltage","Back EMF = applied voltage","Back EMF = zero","Armature current = zero"], ans:0, level:"Medium", tag:"🟢 CONCEPT",
  exp:"Power developed Pd = EbIa is maximum when Ia = V/(2Ra), which makes Eb = V − IaRa = V/2, i.e. Eb equals half the applied voltage." },

{ q:"A DC motor has a no-load speed of 1200 rpm and a full-load speed of 1140 rpm. Calculate its percentage speed regulation.",
  opts:["5.26%","5.0%","4.75%","6.0%"], ans:0, level:"Medium", tag:"🟢 CONCEPT",
  exp:"%SR = (N_NL − N_FL)/N_FL × 100 = (1200−1140)/1140 × 100 = 60/1140 × 100 = 5.26%." },

{ q:"The no-load saturation curve of a DC generator, plotted between generated EMF and field current at constant speed, is also known as the:",
  opts:["Open circuit characteristic (OCC)","Internal characteristic","External characteristic","Load characteristic"], ans:0, level:"Easy", tag:"🟢 CONCEPT",
  exp:"OCC (magnetisation curve) shows E0 vs If at constant speed on no load, revealing the machine's saturation behaviour." },

{ q:"If the load on a DC series motor is suddenly and completely removed while running, the motor will:",
  opts:["Race to a dangerously high speed","Stop immediately","Continue at the same speed","Reverse direction"], ans:0, level:"Medium", tag:"🟢 CONCEPT",
  exp:"In a series motor Φ ∝ Ia. At no load Ia (and hence Φ) becomes very small, and since N ∝ 1/Φ, speed rises dangerously — series motors must never be started/run unloaded (belt-driven)." },

{ q:"A cumulatively compound DC generator that is 'level compounded' is designed so that its terminal voltage:",
  opts:["Remains the same at no-load and full-load","Rises continuously with load","Falls continuously with load","Becomes zero at full load"], ans:0, level:"Medium", tag:"🟢 CONCEPT",
  exp:"Level compounding adjusts the series field so that the voltage drop is exactly compensated, keeping V equal at no-load and full-load." },

{ q:"A differentially compounded DC generator, which has a drooping (falling) voltage-current characteristic, is best suited for:",
  opts:["Arc welding generators","Street lighting","Battery charging at constant voltage","Motor field supply"], ans:0, level:"Medium", tag:"🟢 CONCEPT",
  exp:"The series field opposes the shunt field, so terminal voltage falls sharply as load current rises — this near-constant-current behaviour suits welding sets." },

{ q:"Which type of DC motor is preferred for cranes, hoists and traction applications requiring very high starting torque?",
  opts:["Series motor","Shunt motor","Differentially compounded motor","Separately excited motor with weak field"], ans:0, level:"Easy", tag:"🟢 CONCEPT",
  exp:"Ta ∝ Φ×Ia and Φ ∝ Ia in a series motor, so Ta ∝ Ia², giving very high starting torque per ampere — ideal for cranes and traction." },

{ q:"As mechanical load on a DC shunt motor increases, its speed:",
  opts:["Drops only slightly, staying almost constant","Drops sharply","Rises steadily","Becomes zero"], ans:0, level:"Easy", tag:"🟢 CONCEPT",
  exp:"With Φ nearly constant, only the small IaRa drop reduces Eb, so speed falls only slightly — hence the shunt motor is called a 'constant speed' motor." },

{ q:"Armature reaction in a DC machine, with brushes kept exactly on the geometric neutral axis (GNA), primarily produces:",
  opts:["A cross-magnetising effect that distorts the main flux","A purely demagnetising effect","No effect at all on the field","An increase in generated EMF"], ans:0, level:"Medium", tag:"🟢 CONCEPT",
  exp:"At the GNA, armature MMF acts at 90° to the main field, distorting (cross-magnetising) rather than directly weakening it; demagnetising component appears only when brushes are shifted." },

{ q:"The demagnetising and cross-magnetising effects of armature reaction in a DC machine are neutralised mainly by using:",
  opts:["Interpoles (commutating poles)","A larger commutator","Higher armature resistance","A lower number of brushes"], ans:0, level:"Medium", tag:"🟢 CONCEPT",
  exp:"Interpoles, connected in series with the armature, are placed on the GNA to counter the reactance voltage and aid sparkless commutation." },

{ q:"Compensating windings, embedded in slots in the pole shoes and connected in series with the armature, are used mainly in large DC machines to:",
  opts:["Neutralise cross-magnetising armature reaction directly under the pole face","Increase the main field flux","Reduce copper losses in the field winding","Improve mechanical balancing of the armature"], ans:0, level:"Hard", tag:"🟢 CONCEPT",
  exp:"Interpoles alone cannot fully cancel armature reaction under the pole face in heavy machines with large armature MMF; compensating windings directly oppose it there." },

{ q:"The 'reactance voltage' that appears during commutation in a DC machine is caused by:",
  opts:["Self-inductance of the coil undergoing commutation","Resistance of the brushes","Eddy currents in the yoke","Hysteresis loss in the core"], ans:0, level:"Medium", tag:"🟢 CONCEPT",
  exp:"As current in the short-circuited coil reverses during commutation, its self-inductance L opposes the change (L·di/dt), producing the reactance voltage responsible for sparking." },

{ q:"Which loss in a DC machine is classified as a 'constant loss', i.e. it does not vary appreciably with armature load current?",
  opts:["Iron (core) loss","Armature copper loss","Series field copper loss (series motor)","Brush contact loss (variable component)"], ans:0, level:"Easy", tag:"🟢 CONCEPT",
  exp:"Iron loss (hysteresis + eddy current) depends on flux and speed, both roughly constant, so it is a fixed loss along with friction, windage and shunt-field Cu loss." },

{ q:"The condition for maximum efficiency of a DC generator is:",
  opts:["Variable loss equals constant loss (Ia²Ra = Wc)","Variable loss is zero","Constant loss is zero","Input equals output"], ans:0, level:"Medium", tag:"🟢 CONCEPT",
  exp:"Efficiency is maximum when the load-dependent (variable) loss equals the load-independent (constant) loss: Ia²Ra = Wc." },

{ q:"A DC shunt generator has constant losses of 500 W and armature resistance Ra = 0.4 Ω. At what armature current will efficiency be maximum?",
  opts:["35.36 A","25 A","50 A","20 A"], ans:0, level:"Hard", tag:"🟢 CONCEPT",
  exp:"At max efficiency, Ia²Ra = Wc ⟹ Ia² = 500/0.4 = 1250 ⟹ Ia = √1250 = 35.36 A." },

{ q:"A DC motor draws an input of 20 kW and has total losses of 2 kW. Calculate its efficiency.",
  opts:["90%","80%","95%","85%"], ans:0, level:"Easy", tag:"🟢 CONCEPT",
  exp:"η = (Input − Losses)/Input = (20−2)/20 = 0.90 = 90%." },

{ q:"Swinburne's test for determining DC machine efficiency is NOT applicable to which type of motor?",
  opts:["Series motor","Shunt motor","Compound motor","Separately excited motor"], ans:0, level:"Medium", tag:"🟢 CONCEPT",
  exp:"A series motor's no-load speed rises to a dangerously high value, so it cannot safely be run unloaded as required by Swinburne's test." },

{ q:"In Swinburne's test, the machine is run as an unloaded motor and the input power measured essentially represents:",
  opts:["The constant losses (iron + friction/windage + shunt Cu loss)","The full-load output","The armature copper loss at rated current","The total losses at rated load"], ans:0, level:"Medium", tag:"🟢 CONCEPT",
  exp:"At no load, armature current (and hence armature Cu loss) is negligible, so the input essentially supplies only the constant losses, which are then assumed unchanged at any load." },

{ q:"Hopkinson's (back-to-back) test is preferred over Swinburne's test for large DC machines mainly because it:",
  opts:["Loads both machines at full rated current while the supply only makes up the losses","Requires only one machine","Eliminates the need for a DC supply entirely","Avoids temperature-rise effects"], ans:0, level:"Medium", tag:"🟢 CONCEPT",
  exp:"Two identical machines are mechanically coupled, one motoring and one generating; the generator's output feeds back electrically, so the mains supply need only cover the total losses — an economical full-load test." },

{ q:"In Hopkinson's test, the generator's electrical output is fed back to supply the motor, so the power drawn from the mains is used to:",
  opts:["Supply only the total losses of both machines","Supply the full rated output of both machines","Supply only the field circuits","Charge a battery bank"], ans:0, level:"Medium", tag:"🟢 CONCEPT",
  exp:"Since the generator's output largely re-supplies the motor, the external mains only needs to replace the combined friction, iron, and copper losses of the set." },

{ q:"A key disadvantage of the 3-point starter, which limits its use with field-weakening speed control, is that:",
  opts:["The No-Volt-Release coil (in series with the field) may release the arm on excessive field weakening, causing nuisance tripping","It cannot limit starting current","It has no field circuit connection at all","It only works with series motors"], ans:0, level:"Hard", tag:"🟢 CONCEPT",
  exp:"Because the NVC holding coil is in series with the field, too much field weakening reduces its current below the holding value, releasing the starter arm even though the supply is healthy — hence a 4-point starter is preferred." },

{ q:"The main function of the No-Volt Release (NVR) coil in a DC motor starter is to:",
  opts:["Disconnect the motor automatically on supply failure, preventing an uncontrolled restart","Increase the starting torque","Limit the running speed of the motor","Reduce the armature resistance at start"], ans:0, level:"Easy", tag:"🟢 CONCEPT",
  exp:"On loss of supply, the NVR coil de-energises and releases the starter arm to the OFF position, so the motor cannot suddenly restart at full voltage across a bare armature when supply resumes." },

{ q:"The starting resistance connected in series with the armature during starting of a DC motor is primarily meant to:",
  opts:["Limit the high inrush starting current (since back EMF is zero at start)","Increase the starting torque beyond rated value","Reduce the field current","Improve commutation only"], ans:0, level:"Easy", tag:"🟢 CONCEPT",
  exp:"At the instant of starting Eb = 0, so armature resistance alone (very low) cannot limit current; extra starting resistance is inserted and gradually cut out as speed (and Eb) rises." },

{ q:"The Ward-Leonard method of DC motor speed control is chosen for applications needing:",
  opts:["Smooth, wide-range speed control above and below rated speed, in both directions","Only fixed constant-speed operation","Only above-rated-speed operation","The cheapest possible control scheme"], ans:0, level:"Medium", tag:"🟢 CONCEPT",
  exp:"By varying the generator field feeding the motor, Ward-Leonard gives smooth, reversible, wide-range control — used in rolling mills, lifts and mine hoists." },

{ q:"In the armature (rheostatic) control method of DC motor speed control, increasing the series resistance causes the speed to:",
  opts:["Decrease below the rated/normal speed","Increase above the rated speed","Stay exactly constant","Become negative"], ans:0, level:"Medium", tag:"🟢 CONCEPT",
  exp:"Added resistance increases the IaR drop, lowering Eb and hence N (N ∝ Eb/Φ); this method only gives speeds below the normal/rated value." },

{ q:"In the flux (field) control method of DC motor speed control, weakening the field causes the speed to:",
  opts:["Increase above the rated speed","Decrease below the rated speed","Remain unchanged","Drop to zero"], ans:0, level:"Medium", tag:"🟢 CONCEPT",
  exp:"With Eb roughly constant, N ∝ 1/Φ, so reducing flux raises speed — this method is used to obtain speeds above the base/rated speed." },

{ q:"A DC shunt motor (negligible Ra) has its field flux reduced to 80% of the original value while torque is kept constant and back EMF stays practically unchanged. Find the ratio of new speed to original speed.",
  opts:["1.25 (25% increase)","0.80 (20% decrease)","1.0 (unchanged)","1.60 (60% increase)"], ans:0, level:"Hard", tag:"🟢 CONCEPT",
  exp:"With Eb constant, N ∝ 1/Φ, so N2/N1 = Φ1/Φ2 = 1/0.8 = 1.25 — speed rises by 25%." }
);
