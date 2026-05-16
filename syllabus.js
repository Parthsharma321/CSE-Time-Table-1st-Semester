/* ============================================================
   GP ADITYAPUR – CSE 2nd SEMESTER SYLLABUS
   syllabus.js – Data, Interactivity & Animations
   ============================================================ */

'use strict';

/* ══════════════════════════════════════════════════════════════
   1.  SYLLABUS DATA  (extracted from official NEP-2020 PDF)
       Edit this object to update any subject's syllabus.
   ══════════════════════════════════════════════════════════════ */
const SYLLABUS_DATA = [
  /* ─────────────────── S&A ─────────────────── */
  {
    id: 'sa',
    name: 'Statistics & Analytics',
    code: 'S&A-201',
    shortCode: 'S&A',
    semester: 2,
    type: 'Theory + Lab',
    color: 'var(--clr-sa, #00e5ff)',
    icon: '📊',
    hours: { lecture: 26, tutorial: 0, practical: 52 },
    description: 'Covers statistical data collection, data summarisation, measures of location and dispersion, and an introduction to Python programming for data analysis.',
    units: [
      {
        no: 1,
        title: 'Statistical Data Collection and Types',
        hours: '4-0-8',
        skillSet: 'Able to collect statistical data, distinguish data types, and specify problem statements for data collection.',
        topics: [
          'Definition of data and classification (qualitative, quantitative, discrete and continuous data)',
          'Data collection tools: Questionnaires, Survey, Interviews, Focus Group Discussion',
          'Data cleaning',
        ],
      },
      {
        no: 2,
        title: 'Summarisation of Data',
        hours: '8-0-16',
        skillSet: 'Sketches bar, pie and histograms on Microsoft Excel. Draws frequency curve and frequency polygon.',
        topics: [
          'Descriptive statistics – Data tabulation (frequency table), Relative frequency table',
          'Grouped data – Bar graph, Pie chart, Line graph, Frequency polygon, Frequency curve',
          'Relative frequency polygon, Histograms, Box plot, Leaf-stem plot',
          'All visualisations to be done in Microsoft Excel',
        ],
      },
      {
        no: 3,
        title: 'Measure of Location and Dispersion',
        hours: '6-0-12',
        skillSet: 'Able to determine descriptive statistical variables using Microsoft Excel. Determines absolute measures of dispersion. Explains symmetry/asymmetry.',
        topics: [
          'Central tendencies – Range, Mean, Mode and Median (in MS Excel)',
          'Absolute measures of dispersion – Quartile deviation, Mean deviation, Standard deviation, Variance (in MS Excel)',
          'Skewness and kurtosis graphs in MS Excel and interpretation of results',
        ],
      },
      {
        no: 4,
        title: 'Introduction to Python Programming',
        hours: '8-0-16',
        skillSet: 'Install and run Python interpreter. Create and execute Python programs. Understand file I/O. Read data from text files. Learn variable declarations and control structures.',
        topics: [
          '4.1 Introduction to Python',
          '4.2 Syntax of Python',
          '4.3 Comments in Python',
          '4.4 Data types of Python',
          '4.5 Variables in Python',
          '4.6 If-else in Python',
          '4.7 Loops in Python',
          '4.8 Arrays and Functions in Python',
        ],
      },
    ],
    practicals: [
      'Prepare a questionnaire (closed-end) containing 25 questions for a specified problem statement',
      'Prepare a Google Form for a specified problem statement to collect the dataset',
      'Send out a survey (50 responses) by Google Forms and collect the data',
      'Remove duplicate or irrelevant observations from a given dataset',
      'Draw frequency distribution table for data (min 50 entries) in MS Excel',
      'Draw relative frequency distribution table for data (min 50 entries) in MS Excel',
      'Plot bar graph for data collected from 100 people using MS Excel (with explanation ≥30 words)',
      'Plot pie chart for data collected from 50 people using MS Excel (with explanation ≥30 words)',
      'Draw a line graph for the given dataset in MS Excel',
      'Draw frequency polygon and frequency curve for 50-person dataset in MS Excel',
      'Construct a box plot for the given dataset in MS Excel',
      'Construct a leaf plot for the given dataset in MS Excel',
      'Find Mean, Mode and Median for univariate data and represent in a Histogram (MS Excel)',
      'Generate 50 random data samples and determine Range and Quartiles (MS Excel)',
      'Collect crop yield data from 50 persons; determine mean deviation and quartile deviation',
      'Collect livestock data from 50 houses; determine standard deviation (MS Excel)',
      'Collect two-wheeler traffic data; determine variance (MS Excel)',
      'Draw Skewness and Kurtosis graph for randomly generated dataset (MS Excel)',
      'Python: Add 2 integers and 2 strings; print the result',
      'Python: Find sum of first 10 natural numbers',
      'Python: Find whether a number is odd or even',
      'Python: Find variance and standard deviation for given data',
      'Python: Display student marks from a record',
      'Python: Create a labelled bar graph using matplotlib.pyplot',
      'Python: Create a labelled pie chart using matplotlib.pyplot',
    ],
  },

  /* ─────────────────── FEEE ─────────────────── */
  {
    id: 'feee',
    name: 'Fund. of Electrical & Electronics Engineering',
    code: 'FEEE-201',
    shortCode: 'FEEE',
    semester: 2,
    type: 'Theory + Lab',
    color: 'var(--clr-feee, #ffaa00)',
    icon: '⚡',
    hours: { lecture: 26, tutorial: 0, practical: 52 },
    description: 'Covers electrical safety, fundamentals, protective devices, wiring, electrical machines, batteries, electronic devices, and digital electronics.',
    units: [
      {
        no: 1,
        title: 'Electrical Safety',
        hours: '2-0-4',
        skillSet: 'Comply with electrical safety procedures. Identify safety signs. Demonstrate PPE use and first-aid.',
        topics: [
          'Electrical symbols related to electrical engineering',
          'Electrical safety – Identify various types of safety signs and their meanings',
          'Demonstrate and practice use of PPE (Personal Protective Equipment)',
          'Demonstrate how to free a person from electrocution',
          'Administer appropriate first aid – bandaging, heart attack, CPR etc.',
          'Fire safety, causes and precautionary activities',
          'Use of appropriate fire extinguishers on different types of fires',
          'Demonstrate rescue techniques during fire hazard',
          'Correct method to move injured people during emergencies',
        ],
      },
      {
        no: 2,
        title: 'Electrical Fundamentals',
        hours: '6-0-12',
        skillSet: 'Identify and select measuring devices. Identify electrical supply systems. Identify open, close and short circuit conditions. Calculate basic electrical quantities.',
        topics: [
          'Sources of electrical energy',
          'Electrical current, voltage, EMF, potential difference, resistance – SI units',
          'Meters for measuring electrical quantities',
          'Supply systems – AC, DC',
          'Open circuit, close circuit and short circuit',
          'Behaviour of V, I in Series and Parallel DC circuits',
          'Relationship between V, I and R (Ohm\'s Law)',
          'Resistances connected in series and parallel – equations, problems',
          'AC sinewave – sinusoidal voltage, current, amplitude, time-period, cycle, frequency, phase, phase difference',
          'Electrical work, energy, power and power factor – SI units, meters',
          'Single-phase and Three-phase supply',
        ],
      },
      {
        no: 3,
        title: 'Protective Devices and Wiring Circuits',
        hours: '6-0-12',
        skillSet: 'Identify and select Protective Devices. Identify and select wiring systems and cables. Draw wiring diagrams. Estimate and plan electrical wiring.',
        topics: [
          'Necessity of Protective Devices',
          'Various Protective Devices – fuse wire, glass cartridge fuse, HRC fuse, Kit-kat fuse, MCB, MCCB, RCCB, ELCB, Relay',
          'Earthing – Types, Pipe earthing, Plate earthing',
          'Different types of electrician tools and their functions',
          'Care and maintenance of wiring tools',
          'Types of wiring systems – Surface conduit, Concealed conduit, PVC casing capping',
          'Types of wires and cables for different current/voltage ratings',
          'Plan and estimate cost of electrical wiring for a 3m × 3m room (2 lamps, 1 ceiling fan, 2 three-pin sockets)',
        ],
      },
      {
        no: 4,
        title: 'Electrical Machines, Batteries and UPS',
        hours: '6-0-12',
        skillSet: 'Identify types of transformers and verify transformation ratio. Start and run induction motor. Troubleshoot starters. Select and test batteries. Select UPS size.',
        topics: [
          'Transformer – working principle, transformation ratio, types and applications',
          'Induction motor – types, applications, single vs three-phase motors',
          'Necessity of starters for AC motors – types and applications',
          'Causes and remedies for failure of starter and induction motor',
          'Battery – types (Lead acid, Lithium, SMF, Modular), selection criteria, Ampere-Hour capacity, efficiency',
          'UPS – types, applications, selection criteria and sizing',
        ],
      },
      {
        no: 5,
        title: 'Introduction to Electronic Devices & Digital Electronics',
        hours: '6-0-12',
        skillSet: 'Identify and differentiate conductors, insulators and semiconductors. Identify and test PN junction Diode, Transistors. Build bridge rectifier. Identify sensors, actuators and digital ICs.',
        topics: [
          'Comparison of conductors, insulators and semiconductors with examples',
          'Identification of resistor types and values – colour codes',
          'PN junction diode – symbol, characteristics, as switch, types, ratings, applications',
          'Bridge rectifier – need for AC to DC conversion, with and without C filter, Rectifier IC',
          'Transistor (BJT) – symbol, structure, working principle, as electronic switch',
          'Sensors – concept, types: Temperature, Pressure, Water, Light, Sound, Smoke, Proximity, Flow, Humidity, Voltage, Vibration, IR',
          'Actuators – concept, types and applications, Relay as actuator',
          'Analog vs digital signal comparison; digital systems and examples',
          'Binary numbers, Boolean identities and laws',
          'Digital system building blocks – Basic logic gates, symbols and truth tables',
          'IC definition and advantages; test digital IC',
          'Microcontroller – programmable device, real-world applications',
          'PLC and their applications',
        ],
      },
    ],
    practicals: [
      'Collect/draw standard electrical symbols related to electrical engineering; identify safety signs',
      'Demonstrate PPE use, electrocution rescue, first aid, fire safety, fire extinguishers, emergency techniques',
      'Identify measuring devices (Ammeter, Voltmeter, Wattmeter, Ohmmeter, Digital Multimeter, Megger, Tong tester); measure current and voltage',
      'Measure voltage and current against individual resistance; compare theoretical vs actual values',
      'Determine equivalent resistance of series-connected and parallel-connected resistances',
      'Demonstrate measurement of frequency, time period and phase difference using CRO and function generator',
      'Measure voltage, current, power and energy in single-phase load; measure single and three-phase supply voltages',
      'Identification and selection of protective devices; inspection of their installation in college building',
      'Identification and selection of electrician tools; hands-on use for appropriate applications',
      'Identification and selection of wiring systems; wire up and test PVC conduit wiring (2 sockets, 2 lamps)',
      'Wire up and test PVC Conduit wiring to control one lamp from two different places',
      'Plan and estimate cost of electrical wiring for a 3m×3m room (2 CFL, 1 ceiling fan, 2 three-pin sockets)',
      'Connect single-phase transformer as Step-Up and Step-Down; verify transformation ratio',
      'Construct circuit to start and reverse three-phase induction motor using DOL/Star-delta starter',
      'Troubleshoot DOL/Star-delta starter and induction motor',
      'Test condition of a Lead-acid battery',
      'Estimate UPS rating for a computer lab with 50 computers / domestic load',
      'Identify resistor types and values by colour code; compare with multimeter readings',
      'Identify diode terminals; test diode condition',
      'Construct and test bridge rectifier using semiconductor diode and rectifier IC; compare waveforms using CRO',
      'Identify transistor terminals; test and construct transistor as electronic switch',
      'Connect and test IR proximity sensor to a digital circuit',
      'Connect and test a relay circuit using an Optocoupler (Photo Diode & Transistor)',
      'Test an IC; verify truth table for AND, OR, NOT logic gates',
      'Verify truth table for NAND, NOR, EX-OR, EX-NOR logic gates',
      'Identify MCS-51 variants; identify commercially available PLC and their specifications',
    ],
  },

  /* ─────────────────── Python ─────────────────── */
  {
    id: 'python',
    name: 'Python Programming',
    code: 'PY-201',
    shortCode: 'PYTHON',
    semester: 2,
    type: 'Theory + Lab',
    color: 'var(--clr-python, #b44fff)',
    icon: '🐍',
    hours: { lecture: 39, tutorial: 13, practical: 52 },
    description: 'Covers Python fundamentals, I/O, data types, control flow, data collections, functions, modules, NumPy, Pandas, file handling, and exception handling.',
    units: [
      {
        no: 1,
        title: 'Fundamental Concepts',
        hours: 'Week 1',
        skillSet: 'Set up Python environment, execute and debug Python programs.',
        topics: [
          'Brief history, features and applications of Python',
          'Python distributions, versions and IDEs',
          'Python interpreter and execution of programs',
          'Debugging Python code; indentation and comments',
          'Best practices for Python programming',
          'Character set; tokens; keywords',
          'Variables – naming rules, assignment',
        ],
      },
      {
        no: 2,
        title: 'Basic I/O Operations & Data Types',
        hours: 'Week 2',
        skillSet: 'Code, execute and debug programs using I/O statements. Evaluate expressions. Identify and resolve syntactic and semantic issues.',
        topics: [
          'Input – input(), raw_input(); Output – print(), formatting output',
          'Datatypes – Scalar: Numeric (int, long, float, complex), Boolean, bytes, None',
          'Type casting',
          'Operators – Arithmetic, Comparison/Relational, Logical/Boolean, Bitwise',
          'String operators; Expressions and operator precedence',
        ],
      },
      {
        no: 3,
        title: 'Control Flow – Conditional Statements',
        hours: 'Week 3',
        skillSet: 'Code, execute and debug programs using conditional statements. Identify and resolve issues.',
        topics: [
          'If statement – general format',
          'Multiway branching',
          'Sufficient examples on conditional statements',
        ],
      },
      {
        no: 4,
        title: 'Control Flow – Loops',
        hours: 'Week 4',
        skillSet: 'Code, execute and debug programs using loops and combined conditional statements.',
        topics: [
          'While loop – general format with examples',
          'For loop – general format with examples',
          'range(); nesting loops and conditional statements',
          'Controlling loop execution – break, continue, pass statements',
        ],
      },
      {
        no: 5,
        title: 'Data Collections – Set & Tuple',
        hours: 'Week 5',
        skillSet: 'Code, execute and debug programs for set operations, comprehension, and tuple operations.',
        topics: [
          'Concept of mutability',
          'Set – features, declaration, initialization, operations, comprehension',
          'Tuple – features, declaration, initialization, basic operations, indexing, slicing, built-in functions, nested tuples',
        ],
      },
      {
        no: 6,
        title: 'Data Collections – List',
        hours: 'Week 6',
        skillSet: 'Code programs for list operations, indexing, slicing, comprehensions, and nested lists.',
        topics: [
          'List – features, declaration, initialization, basic operations',
          'Indexing; List iterations; Slicing',
          'Built-in functions; Nested Lists',
          'Comprehensions; Applications',
        ],
      },
      {
        no: 7,
        title: 'Data Collections – Dictionary',
        hours: 'Week 7',
        skillSet: 'Code programs for dictionary operations, indexing, iteration, and comprehension.',
        topics: [
          'Dictionary – features, declaration, initialization, basic operations',
          'Indexing; Adding and removing keys',
          'Iterating through dictionaries; Built-in functions',
          'Comprehensions; Applications',
        ],
      },
      {
        no: 8,
        title: 'Arrays and Strings',
        hours: 'Week 8',
        skillSet: 'Code programs for string manipulation and array manipulation.',
        topics: [
          'Arrays – features, create, initialize, indexing, traversal, manipulation',
          'Strings – create, assign, indexing, built-in functions',
        ],
      },
      {
        no: 9,
        title: 'Functions',
        hours: 'Week 9',
        skillSet: 'Code programs using built-in functions, user-defined functions, recursion, and anonymous functions.',
        topics: [
          'Need of functions; types of functions',
          'Define function, calling function, function arguments',
          'Return and yield; None keyword; Scope of variables',
          'Recursion with sufficient examples',
          'Anonymous functions (lambda)',
        ],
      },
      {
        no: 10,
        title: 'Modules and Packages',
        hours: 'Week 10',
        skillSet: 'Create and use modules and packages. Code programs using built-in modules.',
        topics: [
          'Why modules? Module creation; importing modules; Module Namespace',
          'Packages – basics, path setting, Package __init__.py Files',
          'Commonly used modules – Math, random, Emoji',
        ],
      },
      {
        no: 11,
        title: 'NumPy and Pandas',
        hours: 'Week 11',
        skillSet: 'Code programs using NumPy and Pandas for data manipulation and analysis.',
        topics: [
          'NumPy – brief overview, arithmetic functions, array manipulation functions, statistical functions',
          'Pandas – Introduction, Series, DataFrame',
          'Create DataFrames; formatting data; fundamental DataFrame operations',
        ],
      },
      {
        no: 12,
        title: 'File Handling',
        hours: 'Week 12',
        skillSet: 'Perform file operations: read, write. Work with files using DataFrames.',
        topics: [
          'Concept and features of files',
          'File operations – Opening, Closing, Writing, Reading',
          'File methods; Working with files using DataFrame',
        ],
      },
      {
        no: 13,
        title: 'Error and Exception Handling',
        hours: 'Week 13',
        skillSet: 'Integrate exception handling into programs. Write code to raise exceptions. Resolve issues in given code snippets.',
        topics: [
          'Python errors; Exceptions – built-in and user-defined',
          'How to catch exceptions (try-except block)',
          'Raising exceptions',
        ],
      },
    ],
    practicals: [
      'Setup Python environment; execute Python programs in different ways; debug Python code',
      'Code, execute and debug programs using I/O statements; evaluate expressions; formatted output; operator precedence',
      'Code programs using conditional statements; identify and resolve syntactic and semantic issues',
      'Code programs using loops; nested loops and conditional statements; break, continue, pass',
      'Code programs for set operations and set comprehension; tuple operations, indexing and slicing',
      'Code programs for basic List operations, indexing, slicing and comprehension',
      'Code programs for Dictionary operations, indexing, iteration and comprehension',
      'Code programs for string manipulation and array manipulation',
      'Code programs using built-in functions, user-defined functions, recursion and anonymous functions',
      'Create Modules and Packages; code programs using built-in modules (Math, random)',
      'Code programs using NumPy module; Series and DataFrames using Pandas',
      'Perform file operations (read, write) on different types of files; work with DataFrames for file operations',
      'Integrate exception handling; write code to raise exceptions',
    ],
  },

  /* ─────────────────── PMS ─────────────────── */
  {
    id: 'pms',
    name: 'Project Management Skills',
    code: 'PMS-201',
    shortCode: 'PMS',
    semester: 2,
    type: 'Theory + Lab',
    color: 'var(--clr-pms, #ff2d78)',
    icon: '📋',
    hours: { lecture: 26, tutorial: 0, practical: 52 },
    description: 'Introduces project management concepts including project planning, WBS, project lifecycle, scheduling, control, Gantt charts, CPM, and digital project management tools.',
    units: [
      {
        no: 1,
        title: 'Introduction',
        hours: '2-0-4',
        skillSet: 'Use Basic Science and Maths skills to understand project management, planning, execution and control.',
        topics: [
          'Introduction and definition of a project',
          'Features of a project',
          'Types of projects',
          'Benefits and obstacles in project management',
          'Project Management Profession',
          'Role of Project Manager; Consultants',
          'Project and Operation',
          'Project Management Process',
          'Project Scope',
        ],
      },
      {
        no: 2,
        title: 'Project Administration',
        hours: '6-0-12',
        skillSet: 'Able to develop WBS, PEP and PM processes for a project with given inputs.',
        topics: [
          'Project Administration overview',
          'Project Team formation',
          'Project Design',
          'Work Breakdown Structure (WBS)',
          'Project Execution Plan (PEP)',
          'Systems and Procedure Plan',
          'Project Direction',
          'Communication and Coordination',
          'Project Success factors',
          'Case Study I',
        ],
      },
      {
        no: 3,
        title: 'Project Lifecycle',
        hours: '4-0-8',
        skillSet: 'Use project administration and lifecycle knowledge to assess and plan for project risk.',
        topics: [
          'Project Life Cycle phases',
          'Project Planning',
          'Project Execution',
          'Project Closure',
          'Project Risks',
          'Project Cost Risk Analysis',
          'Time and Cost overruns',
          'Case Study 2a',
        ],
      },
      {
        no: 4,
        title: 'Project Planning, Scheduling and Monitoring',
        hours: '6-0-12',
        skillSet: 'Able to develop a detailed project plan given inputs on manpower, funds and time availability.',
        topics: [
          'Project Planning Function and Structure',
          'Project Scheduling',
          'Project monitoring and Project evaluation',
          'Case Study 2b',
        ],
      },
      {
        no: 5,
        title: 'Project Control, Review and Audit',
        hours: '6-0-12',
        skillSet: 'Use Project Management lifecycle knowledge to control parameters, review and audit project performance.',
        topics: [
          'Project Control',
          'Problems of Project Control',
          'Gantt Charts',
          'Milestone Charts',
          'Critical Path Method (CPM)',
          'Network Technique in Project Scheduling',
          'Crashing Project Duration through Network',
          'Project Review and Initial Review',
          'Performance Evaluation',
          'Abandonment Analysis',
          'Project Audit',
          'Case Study 2c',
        ],
      },
      {
        no: 6,
        title: 'Digital Project Management',
        hours: '2-0-4',
        skillSet: 'Understand latest digital technology trends impacting project management and apply them in multiple scenarios.',
        topics: [
          'Digital Technology trends in Project Management',
          'Cloud Technology',
          'IoT and Smart Cities',
          'Data and Analytics in PM',
          'Case Study 3',
        ],
      },
    ],
    practicals: [
      'Case Study I – Project Administration: Develop WBS and PEP for a given project',
      'Case Study 2a – Project Lifecycle: Identify risks and plan mitigation strategies',
      'Case Study 2b – Project Scheduling: Develop a detailed project plan using given inputs',
      'Case Study 2c – Project Control: Draw Gantt Chart and Milestone Chart for a project',
      'Apply CPM/Network technique to schedule a project; crash project duration',
      'Case Study 3 – Digital PM: Apply cloud/IoT/data analytics tools in project management context',
    ],
  },

  /* ─────────────────── ES ─────────────────── */
  {
    id: 'es',
    name: 'Environmental Sustainability',
    code: 'ES-201',
    shortCode: 'ES',
    semester: 2,
    type: 'Theory',
    color: 'var(--clr-es, #00ff99)',
    icon: '🌿',
    hours: { lecture: 26, tutorial: 0, practical: 0 },
    description: 'Covers ecosystem structure, air/water/soil/noise pollution, renewable energy sources, solid waste management, and relevant environmental acts.',
    units: [
      {
        no: 1,
        title: 'Ecosystem',
        hours: 'Contact Hrs: 1–3',
        skillSet: 'Understand ecosystem structure, components, global warming, greenhouse effect and ozone depletion.',
        topics: [
          'Structure of ecosystem – Biotic and Abiotic components',
          'Aquatic ecosystem (Lentic and Lotic)',
          'Terrestrial ecosystem',
          'Global warming – Causes and effects',
          'Green House Effect',
          'Ozone depletion – Causes and effects',
        ],
      },
      {
        no: 2,
        title: 'Air Pollution',
        hours: 'Contact Hrs: 4–6',
        skillSet: 'Understand air pollution sources, types of air pollutants, effects and control methods.',
        topics: [
          'Air pollution – Natural and Man-Made sources',
          'Air pollutants and types',
          'Effects of Particulate Pollutants',
          'Control by Cyclone Separator',
          'Control by Electrostatic Precipitator',
          'Air (Prevention and Control of Pollution) Act, 1981',
        ],
      },
      {
        no: 3,
        title: 'Noise Pollution',
        hours: 'Contact Hrs: 7–8',
        skillSet: 'Understand sources, measurement, effects and control of noise pollution.',
        topics: [
          'Noise pollution – sources',
          'Measurement of noise pollution level',
          'Effects of noise pollution',
          'Control of noise pollution',
          'Noise Pollution (Regulation and Control) Rules, 2000',
        ],
      },
      {
        no: 4,
        title: 'Water and Soil Pollution',
        hours: 'Contact Hrs: 9–14',
        skillSet: 'Understand sources, types, characteristics and control measures for water and soil pollution.',
        topics: [
          'Sources of water pollution; Types and characteristics of water pollutants',
          'Control measures of water pollution',
          'Unit operations in water and wastewater treatment',
          'Water (Prevention and Control of Pollution) Act, 1974',
          'Water conservation – Importance of Rain Water Harvesting',
          'Soil pollution – Causes and effects due to fertilizers, pesticides and insecticides',
          'Preventive measures of soil pollution due to excessive use of chemicals',
        ],
      },
      {
        no: 5,
        title: 'Renewable Sources of Energy',
        hours: 'Contact Hrs: 15–21',
        skillSet: 'Understand basics and applications of solar, biomass, wind and new energy sources.',
        topics: [
          'Solar energy – basics, solar collectors and advanced solar collectors',
          'Solar water heater, solar stills and their uses',
          'Biomass – overview as energy source; thermal characteristics as fuel',
          'Wind energy – current status, future prospects, wind energy in India',
          'Need of new energy sources; types of new energy sources',
          'Hydrogen energy – environmental benefits',
          'Ocean energy resources – environmental benefits',
          'Tidal energy conversion – environmental benefits',
        ],
      },
      {
        no: 6,
        title: 'Solid Waste Management & Environmental Acts',
        hours: 'Contact Hrs: 22–26',
        skillSet: 'Understand solid waste, e-waste and plastic waste generation, management rules and key environmental acts.',
        topics: [
          'Solid waste generation – sources, characteristics; Solid Waste Management Rules, 2016',
          'E-waste – generation, sources, characteristics; E-Waste Management Rules, 2016',
          'Plastic waste – generation, sources, characteristics',
          'Recycled Plastic Rules, 2016',
          'Environment (Protection) Act, 1986 – importance',
          'Occupational health and safety measures',
        ],
      },
    ],
    practicals: [],
  },
];

/* ══════════════════════════════════════════════════════════════
   2. STATE
   ══════════════════════════════════════════════════════════════ */
let activeSubject = null;
let searchQuery   = '';
let filterType    = 'all';
let filterSem     = 'all';

/* ══════════════════════════════════════════════════════════════
   3. RENDER SUBJECT CARDS
   ══════════════════════════════════════════════════════════════ */
function renderCards() {
  const grid = document.getElementById('subject-grid');
  if (!grid) return;

  const filtered = SYLLABUS_DATA.filter(sub => {
    const matchSearch = searchQuery === ''
      || sub.name.toLowerCase().includes(searchQuery)
      || sub.code.toLowerCase().includes(searchQuery)
      || sub.shortCode.toLowerCase().includes(searchQuery);

    const matchType = filterType === 'all'
      || (filterType === 'theory' && sub.type.toLowerCase().includes('theory') && !sub.type.toLowerCase().includes('lab'))
      || (filterType === 'lab'    && sub.type.toLowerCase().includes('lab'))
      || (filterType === 'both'   && sub.type.toLowerCase().includes('+'));

    const matchSem  = filterSem === 'all' || String(sub.semester) === filterSem;

    return matchSearch && matchType && matchSem;
  });

  if (filtered.length === 0) {
    grid.innerHTML = `
      <div class="no-results">
        <div class="nr-icon">🔍</div>
        <div class="nr-text">No subjects found matching your search.</div>
      </div>`;
    return;
  }

  grid.innerHTML = filtered.map((sub, i) => `
    <div class="subject-card reveal reveal-delay-${i % 4}"
         data-id="${sub.id}"
         style="--subj-accent: ${sub.color}">
      <div class="sc-top">
        <span class="sc-icon">${sub.icon}</span>
        <span class="sc-code">${sub.code}</span>
      </div>
      <h3 class="sc-name">${sub.name}</h3>
      <div class="sc-meta">
        <span class="sc-badge sc-type">${sub.type}</span>
        <span class="sc-badge sc-sem">Sem ${sub.semester}</span>
      </div>
      <p class="sc-desc">${sub.desc || sub.description}</p>
      <div class="sc-hours">
        <span title="Lecture hours">📖 L: ${sub.hours.lecture}h</span>
        ${sub.hours.tutorial > 0 ? `<span title="Tutorial hours">✏️ T: ${sub.hours.tutorial}h</span>` : ''}
        ${sub.hours.practical > 0 ? `<span title="Practical hours">🔬 P: ${sub.hours.practical}h</span>` : ''}
        <span title="Units">${sub.units.length} Units</span>
      </div>
      <div class="sc-actions">
        <button class="sc-btn sc-btn-primary" onclick="openModal('${sub.id}')">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>
          View Syllabus
        </button>
        <a class="sc-btn sc-btn-secondary" href="index.html">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
          Timetable
        </a>
      </div>
    </div>
  `).join('');

  // Re-run scroll reveal for new cards
  document.querySelectorAll('#subject-grid .reveal').forEach(el => {
    revealObserver.observe(el);
  });
}

/* ══════════════════════════════════════════════════════════════
   4. MODAL – OPEN / CLOSE
   ══════════════════════════════════════════════════════════════ */
function openModal(id) {
  const sub = SYLLABUS_DATA.find(s => s.id === id);
  if (!sub) return;

  activeSubject = sub;
  const modal   = document.getElementById('syllabus-modal');
  const content = document.getElementById('modal-content');

  content.innerHTML = buildModalContent(sub);
  modal.classList.add('open');
  document.body.style.overflow = 'hidden';

  // Accordion for units
  content.querySelectorAll('.unit-header').forEach(header => {
    header.addEventListener('click', () => {
      const item = header.parentElement;
      item.classList.toggle('expanded');
    });
  });

  // Tab switching (units / practicals)
  content.querySelectorAll('.modal-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      content.querySelectorAll('.modal-tab').forEach(t => t.classList.remove('active'));
      content.querySelectorAll('.tab-panel').forEach(p => p.classList.remove('active'));
      tab.classList.add('active');
      const panel = content.querySelector(`#tab-${tab.dataset.tab}`);
      if (panel) panel.classList.add('active');
    });
  });
}

function closeModal() {
  const modal = document.getElementById('syllabus-modal');
  modal.classList.remove('open');
  document.body.style.overflow = '';
  activeSubject = null;
}

function buildModalContent(sub) {
  const practicalTab = sub.practicals.length > 0 ? `
    <button class="modal-tab" data-tab="practicals">
      🔬 Practicals <span class="tab-count">${sub.practicals.length}</span>
    </button>` : '';

  const practicalPanel = sub.practicals.length > 0 ? `
    <div class="tab-panel" id="tab-practicals">
      <ol class="practical-list">
        ${sub.practicals.map((p, i) => `
          <li>
            <span class="pr-num">${String(i + 1).padStart(2, '0')}</span>
            <span class="pr-text">${p}</span>
          </li>`).join('')}
      </ol>
    </div>` : '';

  return `
    <div class="modal-header" style="--modal-color: ${sub.color}">
      <div class="mh-left">
        <span class="mh-icon">${sub.icon}</span>
        <div>
          <div class="mh-code">${sub.code}</div>
          <h2 class="mh-name">${sub.name}</h2>
          <div class="mh-meta">
            <span class="sc-badge sc-type">${sub.type}</span>
            <span class="sc-badge sc-sem">Semester ${sub.semester}</span>
            <span class="sc-badge" style="--badge-c: var(--neon-green)">L:${sub.hours.lecture} T:${sub.hours.tutorial} P:${sub.hours.practical}</span>
          </div>
        </div>
      </div>
      <button class="modal-close" onclick="closeModal()" aria-label="Close">✕</button>
    </div>

    <p class="modal-desc">${sub.description}</p>

    <div class="modal-tabs">
      <button class="modal-tab active" data-tab="units">
        📘 Units <span class="tab-count">${sub.units.length}</span>
      </button>
      ${practicalTab}
    </div>

    <div class="tab-panel active" id="tab-units">
      <div class="units-list">
        ${sub.units.map(unit => `
          <div class="unit-item">
            <div class="unit-header">
              <div class="unit-num" style="--modal-color: ${sub.color}">UNIT ${unit.no}</div>
              <div class="unit-title">${unit.title}</div>
              <div class="unit-hours">${unit.hours}</div>
              <div class="unit-chevron">▾</div>
            </div>
            <div class="unit-body">
              ${unit.skillSet ? `<div class="unit-skillset"><strong>Skill Set:</strong> ${unit.skillSet}</div>` : ''}
              <ul class="unit-topics">
                ${unit.topics.map(t => `<li>${t}</li>`).join('')}
              </ul>
            </div>
          </div>
        `).join('')}
      </div>
    </div>

    ${practicalPanel}
  `;
}

/* ══════════════════════════════════════════════════════════════
   5. SEARCH & FILTER
   ══════════════════════════════════════════════════════════════ */
function initControls() {
  const searchEl = document.getElementById('syl-search');
  const typeEls  = document.querySelectorAll('.syl-filter-type');
  const semEls   = document.querySelectorAll('.syl-filter-sem');

  if (searchEl) {
    searchEl.addEventListener('input', e => {
      searchQuery = e.target.value.toLowerCase().trim();
      renderCards();
    });
  }

  typeEls.forEach(btn => {
    btn.addEventListener('click', () => {
      typeEls.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      filterType = btn.dataset.type;
      renderCards();
    });
  });

  semEls.forEach(btn => {
    btn.addEventListener('click', () => {
      semEls.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      filterSem = btn.dataset.sem;
      renderCards();
    });
  });
}

/* ══════════════════════════════════════════════════════════════
   6. SHARED UTILITIES (particles, cursor, scroll, etc.)
   ══════════════════════════════════════════════════════════════ */

// Particles
function initParticles() {
  const canvas = document.getElementById('particles-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let W, H, particles = [];
  const COUNT = window.innerWidth < 768 ? 35 : 65;

  function resize() { W = canvas.width = window.innerWidth; H = canvas.height = window.innerHeight; }

  function mkParticle() {
    return { x: Math.random()*W, y: Math.random()*H, r: Math.random()*1.4+0.3,
             vx: (Math.random()-.5)*.22, vy: (Math.random()-.5)*.22,
             alpha: Math.random()*.45+0.1, hue: [200,210,230,260][Math.floor(Math.random()*4)] };
  }

  function draw() {
    ctx.clearRect(0,0,W,H);
    // Connections
    for (let i=0;i<particles.length;i++) {
      for (let j=i+1;j<particles.length;j++) {
        const dx=particles[i].x-particles[j].x, dy=particles[i].y-particles[j].y;
        const d=Math.sqrt(dx*dx+dy*dy);
        if (d<120) {
          ctx.strokeStyle=`rgba(0,200,255,${(1-d/120)*0.1})`;
          ctx.lineWidth=.5; ctx.beginPath();
          ctx.moveTo(particles[i].x,particles[i].y); ctx.lineTo(particles[j].x,particles[j].y); ctx.stroke();
        }
      }
    }
    particles.forEach(p => {
      p.x+=p.vx; p.y+=p.vy;
      if (p.x<0) p.x=W; if (p.x>W) p.x=0; if (p.y<0) p.y=H; if (p.y>H) p.y=0;
      ctx.save(); ctx.globalAlpha=p.alpha;
      ctx.fillStyle=`hsl(${p.hue},80%,70%)`; ctx.shadowColor=`hsl(${p.hue},80%,70%)`; ctx.shadowBlur=6;
      ctx.beginPath(); ctx.arc(p.x,p.y,p.r,0,Math.PI*2); ctx.fill(); ctx.restore();
    });
    requestAnimationFrame(draw);
  }

  resize(); particles=Array.from({length:COUNT},mkParticle); draw();
  window.addEventListener('resize',()=>{resize();particles=Array.from({length:COUNT},mkParticle);});
}

// Custom cursor
function initCursor() {
  const dot=document.getElementById('cursor'), ring=document.getElementById('cursor-ring');
  if (!dot||!ring) return;
  let mx=0,my=0,rx=0,ry=0;
  document.addEventListener('mousemove',e=>{mx=e.clientX;my=e.clientY;dot.style.left=mx+'px';dot.style.top=my+'px';});
  (function a(){rx+=(mx-rx)*.12;ry+=(my-ry)*.12;ring.style.left=rx+'px';ring.style.top=ry+'px';requestAnimationFrame(a);})();
  document.querySelectorAll('a,button,.subject-card').forEach(el=>{
    el.addEventListener('mouseenter',()=>{dot.style.width='20px';dot.style.height='20px';ring.style.transform='translate(-50%,-50%) scale(1.5)';});
    el.addEventListener('mouseleave',()=>{dot.style.width='12px';dot.style.height='12px';ring.style.transform='translate(-50%,-50%) scale(1)';});
  });
}

// Scroll progress
function initScrollProgress() {
  const bar=document.getElementById('scroll-progress');
  const nav=document.getElementById('main-nav');
  window.addEventListener('scroll',()=>{
    const t=document.documentElement.scrollTop, m=document.documentElement.scrollHeight-window.innerHeight;
    if (bar) bar.style.width=(m>0?(t/m)*100:0)+'%';
    if (nav) nav.classList.toggle('scrolled',t>60);
  },{passive:true});
}

// Loading screen
function initLoading() {
  const s=document.getElementById('loading-screen');
  if (!s) return;
  document.body.style.overflow='hidden';
  setTimeout(()=>{s.classList.add('hidden');document.body.style.overflow='auto';},2200);
}

// Scroll reveal (shared observer exported
let revealObserver;
function initScrollReveal() {
  revealObserver = new IntersectionObserver(entries=>{
    entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');revealObserver.unobserve(e.target);}});
  },{threshold:.1,rootMargin:'0px 0px -30px 0px'});
  document.querySelectorAll('.reveal').forEach(el=>revealObserver.observe(el));
}

// Nav hamburger
function initNav() {
  const hb=document.getElementById('nav-hamburger'), nl=document.getElementById('nav-links');
  if (!hb||!nl) return;
  hb.addEventListener('click',()=>nl.classList.toggle('open'));
  nl.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>nl.classList.remove('open')));
}

// Ripple
function initRipple() {
  document.querySelectorAll('.sc-btn,.syl-filter-type,.syl-filter-sem').forEach(btn=>{
    btn.addEventListener('click',function(e){
      const r=this.getBoundingClientRect();
      const rpl=document.createElement('span');
      const sz=Math.max(r.width,r.height);
      rpl.style.cssText=`position:absolute;width:${sz}px;height:${sz}px;left:${e.clientX-r.left-sz/2}px;top:${e.clientY-r.top-sz/2}px;border-radius:50%;background:rgba(255,255,255,.15);transform:scale(0);animation:ripple-anim .5s linear;pointer-events:none;`;
      this.style.position='relative'; this.style.overflow='hidden';
      this.appendChild(rpl); setTimeout(()=>rpl.remove(),550);
    });
  });
  const st=document.createElement('style');
  st.textContent='@keyframes ripple-anim{to{transform:scale(3);opacity:0;}}';
  document.head.appendChild(st);
}

// Animated stat counters on syllabus page
function initSylStats() {
  const statEls = document.querySelectorAll('.syl-stat-val');
  const obs = new IntersectionObserver(entries=>{
    entries.forEach(entry=>{
      if (entry.isIntersecting) {
        const el=entry.target, target=parseInt(el.dataset.target,10);
        let start=null;
        const step=(ts)=>{
          if(!start)start=ts;
          const p=Math.min((ts-start)/1500,1);
          const e2=1-Math.pow(2,-10*p);
          el.textContent=Math.floor(e2*target);
          if(p<1)requestAnimationFrame(step); else el.textContent=target;
        };
        requestAnimationFrame(step);
        obs.unobserve(el);
      }
    });
  },{threshold:.3});
  statEls.forEach(el=>obs.observe(el));
}

/* ══════════════════════════════════════════════════════════════
   7. INIT
   ══════════════════════════════════════════════════════════════ */
document.addEventListener('DOMContentLoaded', () => {
  initLoading();
  initParticles();
  initCursor();
  initNav();
  initScrollProgress();
  initScrollReveal();
  renderCards();
  initControls();
  initRipple();
  initSylStats();

  // Modal backdrop click to close
  document.getElementById('syllabus-modal')?.addEventListener('click', e => {
    if (e.target.id === 'syllabus-modal') closeModal();
  });

  // ESC to close modal
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeModal();
  });
});

// Expose globally for onclick handlers
window.openModal  = openModal;
window.closeModal = closeModal;
