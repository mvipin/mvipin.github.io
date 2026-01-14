// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'mvipin', // Your GitHub org/user name. (This is the only required config)
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/arifszn/arifszn.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/arifszn/portfolio, then set base to '/portfolio/'.
   */
  base: '/',
  projects: {
    github: {
      display: true, // Display GitHub projects?
      header: 'Github Projects',
      mode: 'automatic', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'stars', // Sort projects by 'stars' or 'updated'
        limit: 8, // How many projects to display.
        exclude: {
          forks: false, // Forked projects will not be displayed if set to true.
          projects: [], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: ['arifszn/gitprofile', 'arifszn/pandora'], // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
      },
    },
    external: {
      header: 'My Projects',
      // To hide the `External Projects` section, keep it empty.
      projects: [
        {
          title: 'ChefMate: Kitchen Robot using VLA Model, ACT and Diffusion Policy',
          description:
            'Advanced robotic manipulation system implemented using GR00T N1.5 Vision-Language-Action (VLA) model, ACT, and Diffusion policy for multi-ingredient sandwich assembly. Features sim-to-real and real-to-sim digital twin pipeline with Isaac Sim/Lab integration, MimicGen data augmentation. Implements comprehensive USD scene design with proper rigid body hierarchies, dual-camera system calibrated for optimal performance, and dynamic ingredient selection for automated data generation. Solves critical language-vision association challenges through LLM fine-tuning, enabling zero-shot adaptation to menu variations. Tech Stack: Python | GR00T N1.5 VLA • Eagle VLM (SigLIP-2 + Qwen3) • Diffusion Transformer • LoRA • MimicGen • LeRobot | OpenCV | SO-101 Arm • STS3215 Servos • USB Cam | Isaac Sim/Lab',
          imageUrl:
            '/assets/images/chefmate.gif',
          link: 'https://github.com/mvipin/chefmate',
          githubUrl: 'https://github.com/mvipin/chefmate',
          youtubeUrl: 'https://www.youtube.com/playlist?list=PLmUgsufWocy8o8Q3oQnF66XBNGicFExsi',
          hackadayUrl: 'https://hackaday.io/project/204187-fine-tuning-gr00t-n15-for-robotic-manipulation',
        },
        {
          title: 'GestureBot: ROS2 Computer Vision enabled Mobile Platform',
          description:
            'Comprehensive computer vision system for robotics applications, specifically designed for the GestureBot platform. Features real-time object detection, gesture recognition, hand/pose tracking, and seamless integration with ROS 2 Navigation stack for autonomous robot control through intuitive hand gestures. Supports 9 distinct hand gestures for robot control including thumbs up/down for start/stop navigation, open palm for pause, fist for emergency stop, and directional pointing for movement commands. Implements adaptive processing system with priority-based feature management, achieving ~15 FPS object detection and ~12 FPS gesture recognition. Tech Stack: Python | ROS2 Nav2 (BT Navigator • Controller Server • Planner Server) | MediaPipe • OpenCV | Raspberry Pi 5 • USB Camera',
          imageUrl:
            '/assets/images/gesturebot.gif',
          link: 'https://github.com/mvipin/gesturebot',
          githubUrl: 'https://github.com/mvipin/gesturebot',
          youtubeUrl: 'https://www.youtube.com/playlist?list=PLmUgsufWocy-pplu9-BMSh6g2yGAAwCQW',
          hackadayUrl: 'https://hackaday.io/project/203704-gesturebot',
        },
        {
          title: 'Perceptor: ROS2 Autonomous Mapping & Navigation',
          description:
            'Modified Roomba platform with integrated RPLiDAR sensor for comprehensive SLAM and navigation capabilities. Features real-time mapping using slam_toolbox with pose graph optimization, AMCL localization for precise positioning, and Nav2 navigation stack for autonomous path planning. Implements advanced navigation features including dynamic obstacle detection, keepout zones for restricted areas, variable speed limits, multi-waypoint patrol routes, and real-time collision monitoring with emergency stop capabilities. Supports both manual teleoperation via Bluetooth gamepad and fully autonomous operation with sensor fusion (wheel odometry + IMU) using Extended Kalman Filter. Tech Stack: Python | ROS2 (SLAM Toolbox • AMCL • Nav2 • EKF Sensor Fusion) | OpenCV | Raspberry Pi 5 • RPLiDAR • IMU • Bluetooth Gamepad',
          imageUrl:
            '/assets/images/perceptor.gif',
          link: 'https://github.com/mvipin/perceptor',
          githubUrl: 'https://github.com/mvipin/perceptor',
          youtubeUrl: 'https://www.youtube.com/playlist?list=PLmUgsufWocy-3w0uKOAjEmPxq2Nj_awAS',
          hackadayUrl: 'https://hackaday.io/project/203547-perceptor-autonomous-floor-mapping-navigation',
        },
        {
          title: 'ChessMate: AI Chess Robot with Sensors, SCARA arm',
          description:
            'Fully autonomous chess-playing robot featuring ROS2 architecture (Raspberry Pi 5 + dual Pi Pico) with topic-based communication. Implements 6-DOF SCARA arm with sub-millimeter repeatability, NEMA 17 microstepping steppers, and four-corner calibration for 64-point square mapping. Custom CNC-milled PCBs integrate 64 hall-effect sensors with I2C expanders for real-time piece detection and 8×8 NeoPixel LED matrix for move visualization. Stockfish engine integration provides professional-grade chess AI with configurable thinking time and position analysis. Features expressive servo-driven animatronic eyes, OLED display with rotary encoder interface, and text-to-speech synthesis for engaging human-robot interaction. Tech Stack: Python • C++ | Stockfish | ROS2 (Topic Communication) | Raspberry Pi 5 • Pi Pico • NEMA 17 Steppers • Hall Effect Sensors • NeoPixel LED • OLED Display • Micro Servo | Gazebo',
          imageUrl:
            '/assets/images/chessmate.gif',
          link: 'https://github.com/mvipin/ChessMate-ROS2',
          githubUrl: 'https://github.com/mvipin/ChessMate-ROS2',
          youtubeUrl: 'https://www.youtube.com/playlist?list=PLmUgsufWocy9A0GdMjyu7Tg_oavEbhUdh',
          hackadayUrl: 'https://hackaday.io/project/203400-chessmate-ros2-chess-robot',
        },
        {
          title: 'TrotBot: ROS2 Quadruped Robot Platform',
          description:
            'Comprehensive ROS2 quadruped robotics platform built on the CHAMP framework with configurable leg geometry. The software stack runs on Raspberry Pi 5 with PCA9685 servo control system, enhanced teleop with Nintendo Pro Controller support, dual backend Hardware Abstraction Layer (Adafruit CircuitPython + sysfs PWM), inverse kinematics with workspace validation, and full Gazebo simulation capabilities with seamless real hardware deployment. Implements layered control architecture with 100Hz gait generation, 50Hz servo updates, and safety features including deadman switches and emergency stops. Tech Stack: Python | ROS2 CHAMP (Quadruped Controller • State Estimator) | Raspberry Pi 5 • PCA9685 • MG996R Servos • Nintendo Pro Controller | Gazebo',
          imageUrl:
            '/assets/images/trotbot.gif',
          link: 'https://github.com/mvipin/trotbot',
          githubUrl: 'https://github.com/mvipin/trotbot',
          youtubeUrl: 'https://www.youtube.com/playlist?list=PLmUgsufWocy-ZaqOsWWwt1tAy33R9EwFb',
          hackadayUrl: 'https://hackaday.io/project/203989-trotbot',
        },
        {
          title: 'CubeMaster: ML Cube Solver with 6-axis control',
          description:
            'An intelligent robotic system that automatically solves Rubik\'s cubes using advanced computer vision, machine learning, and precision motor control. Features single-camera dual-orientation capture system with controlled LED lighting, MLP, CNN and MobileNetV3 models for robust color detection, Kociemba solving algorithm for optimal solutions, and 6-axis stepper motor system with G-code interface. The system captures cube images in two orientations (U,L,F then D,R,B faces), processes them through trained neural network for color detection, and executes solving moves through precision stepper motor control. Tech Stack: Python • PyTorch 2.0+ / torchvision • MLP • Shallow CNN • MobileNetV3 Transfer Learning • Albumentations • ONNX Runtime • Kociemba Algorithm • HD44780 LCD • G-code',
          imageUrl:
            '/assets/images/cube.gif',
          link: 'https://github.com/mvipin/cubemaster',
          githubUrl: 'https://github.com/mvipin/cubemaster',
          youtubeUrl: 'https://youtu.be/mwZZhnmK3QI',
          hackadayUrl: 'https://hackaday.io/projects/hacker/1160436',
        },
        {
          title: 'Biped Hybrid: 6-DOF Serial-Parallel Kinematic Leg System',
          description:
            'Advanced bipedal robot leg based on Disney Research hybrid mechanism combining dual 5-bar serial-parallel kinematic chains for 6 degrees of freedom motion. Features analytical inverse kinematics with <10ms computation time enabling 50Hz real-time control, Denavit-Hartenberg parameter modeling, and Jacobian-based trajectory execution. Implements parametric gait generation with phase-shifted coordination, Gaussian lift profiles for natural foot motion, and dual harmonic forward swing patterns. Achieves ±2mm end-effector precision across 0.3m³ workspace with 120mm ground clearance per step. Comprehensive unit testing framework validates sagittal, vertical, and lateral motion axes. Tech Stack: C++ | Arduino • ESP32 • PCA9685 • MG996R Servos',
          imageUrl:
            'assets/images/bipedal.gif',
          link: 'https://github.com/mvipin/biped-hybrid',
          githubUrl: 'https://github.com/mvipin/biped-hybrid',
          youtubeUrl: 'https://youtu.be/3PNreAL9f4w',
          hackadayUrl: 'https://hackaday.io/project/179225-hybrid-leg-for-bipedal-robot',
        },
        {
          title: 'SkyNav: Autonomous Fixed-Wing Aircraft Platform',
          description:
            'Advanced autonomous fixed-wing aircraft featuring complete ArduPilot autopilot integration for fully autonomous flight operations. Custom-designed airframe with 1.8m wingspan optimized for stable flight, with GPS waypoint accuracy within 2m CEP. Implements comprehensive sensor suite including dual GPS/GNSS receivers, 9-DOF IMU with magnetometer, barometric altimeter, and differential airspeed sensor for precise flight control. Features automatic takeoff and landing (ATOL) capabilities with runway approach accuracy within 5m, emergency failsafe systems with return-to-launch functionality, and real-time telemetry streaming at 915MHz. Ground control station integration via Mission Planner enables complex waypoint missions, geofencing, and live flight monitoring. Tech Stack: C++ | ArduPilot • Mission Planner | Pixhawk • GPS/GNSS • 9-DOF IMU • Barometer • Airspeed Sensor • 915MHz Telemetry',
          imageUrl:
            '/assets/images/skynav.gif',
          link: 'https://github.com/mvipin/skynavigator',
          githubUrl: 'https://github.com/mvipin',
          youtubeUrl: 'https://www.youtube.com/@rubbotix7261',
          hackadayUrl: 'https://hackaday.io/projects/hacker/1160436',
        },
        {
          title: 'Self-Balancing Robot: Inverted Pendulum Control System',
          description:
            'An advanced self-balancing robot demonstrating MPU6050 DMP hardware-accelerated orientation sensing, Bluetooth wireless monitoring, and adaptive motor control with dead band compensation. Implements three-term PID controller with tuned parameters for optimal balance performance and disturbance rejection. The system maintains dynamic stability through continuous feedback control at 200Hz sensor sampling rate. Tech Stack: C++ | Arduino • MPU6050 DMP • L298N Motor Driver • Bluetooth HC-05',
          imageUrl:
            '/assets/images/hammer.gif',
          link: 'https://github.com/mvipin/thorplusplus',
          githubUrl: 'https://github.com/mvipin/thorplusplus',
          youtubeUrl: 'https://youtu.be/sJUxSGPo8PQ',
          hackadayUrl: 'https://hackaday.io/project/177208-enchanted-thor-hammer',
        },
        {
          title: 'SnakeBot: Modular Serpentine Robot',
          description:
            'SlitherBot is a biomimetic snake robot demonstrating graceful serpentine locomotion using cost-effective components and innovative design. Features 16 modular 3D printed ribs, micro-servo actuation, and revolutionary structured sheet skin inspired by Disney Research. Implements natural snake-like movement using cosine wave motion control with infrared obstacle detection and autonomous navigation capabilities. Tech Stack: C++ | Arduino • Micro Servos • IR Sensors',
          imageUrl:
            '/assets/images/snake.gif',
          link: 'https://github.com/mvipin/slitherbot',
          githubUrl: 'https://github.com/mvipin/slitherbot',
          youtubeUrl: 'https://youtu.be/Q69HzF_Xq_s',
          hackadayUrl: 'https://hackaday.io/project/178463-slitherbot',
        },
        {
          title: 'SkyDeck: Cessna Cockpit with MobiFlight & AI ATC',
          description:
            'Complete Cessna 172 flight simulator built from scratch with Air Manager providing authentic instrument panel displays and MobiFlight controlling all physical hardware. DIY implementation includes yoke controls, throttle quadrant, brake pedals, rudder pedals, flaps lever, fuel mixture controls, and radio stack—all interfaced through 12 Arduino Uno boards for seamless flight sim integration. Features AI-powered ATC communication system and immersive 200-degree field of view using triple monitor setup. Integrates with X-Plane/MSFS for realistic flight dynamics. Tech Stack: Lua • C++ | Air Manager • MobiFlight | 12× Arduino Uno • X-Plane/MSFS',
          imageUrl:
            '/assets/images/flight_sim.jpg',
          link: 'https://github.com/mvipin',
          githubUrl: 'https://github.com/mvipin',
          youtubeUrl: 'https://www.youtube.com/@rubbotix7261',
          hackadayUrl: 'https://hackaday.io/projects/hacker/1160436',
        },
      ],
    },
  },
  seo: { title: 'Portfolio of Vipin Mehta', description: '', imageURL: '' },
  social: {
    linkedin: 'mvipin',
    x: '',
    mastodon: '',
    researchGate: '',
    facebook: '',
    instagram: '',
    reddit: '',
    threads: '',
    youtube: 'rubbotix7261', // example: 'pewdiepie'
    udemy: '',
    dribbble: '',
    behance: '',
    medium: '',
    dev: '',
    stackoverflow: '', // example: '1/jeff-atwood'
    discord: '',
    telegram: '',
    website: 'https://mvipin.github.io',
    phone: '',
    email: 'vipinm@gmail.com',
  },
  resume: {
    fileUrl:
      'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    // Programming Languages
    'Python',
    'C++',
    'Lua',

    // Robotics Frameworks
    'ROS2 (Nav2, SLAM Toolbox, AMCL, CHAMP)',
    'ArduPilot',
    'MobiFlight',
    'Air Manager',

    // AI/ML Frameworks
    'GR00T N1.5 VLA',
    'Eagle VLM (SigLIP-2 + Qwen3)',
    'Diffusion Transformer',
    'LoRA Fine-tuning',
    'TensorFlow/Keras',
    'Scikit-learn',
    'MediaPipe',
    'Stockfish',

    // Computer Vision & Data
    'OpenCV',
    'MimicGen',
    'LeRobot',

    // Simulation
    'Isaac Sim/Lab',
    'Gazebo',
    'X-Plane/MSFS',

    // Hardware Platforms
    'Raspberry Pi 4/5',
    'Arduino',
    'ESP32',
    'Pi Pico',
    'Pixhawk',

    // Sensors
    'RPLiDAR',
    'GPS/GNSS',
    'IMU (MPU6050)',
    'Hall Effect Sensors',
    'IR Sensors',
    'USB Cameras',
    'Airspeed Sensors',
    'Barometers',

    // Actuators & Motor Control
    'NEMA 17 Steppers',
    'MG996R Servos',
    'Feetech STS3215 Servos',
    'PCA9685',
    'A4988 Drivers',
    'L298N Motor Driver',

    // Communication & Protocols
    'I2C',
    'SPI',
    'UART',
    'Bluetooth',
    '915MHz Telemetry',

    // Development Tools
    'Git',
    'Docker',
    'Linux (Ubuntu)',
  ],
  experiences: [
    {
      company: 'Atmosic Technologies',
      position: 'Sr. Manager of Technology',
      from: 'November 2019',
      to: 'Present',
      companyLink: 'https://www.atmosic.com',
    },
    {
      company: 'SparkMyThought Labs',
      position: 'Co-founder and Robotics Specialist',
      from: 'June 2016',
      to: 'October 2019',
      companyLink: '',
    },
    {
      company: 'Aintu, Inc.',
      position: 'Mobile Application Development and Data Analytics Consultant',
      from: 'June 2016',
      to: 'September 2019',
      companyLink: '',
    },
    {
      company: 'Qualcomm',
      position: 'Senior Staff Engineer',
      from: 'September 2013',
      to: 'June 2016',
      companyLink: 'https://www.qualcomm.com',
    },
    {
      company: 'Qualcomm',
      position: 'Staff Engineer',
      from: 'May 2011',
      to: 'September 2013',
      companyLink: 'https://www.qualcomm.com',
    },
    {
      company: 'Atheros Communications',
      position: 'Principal Engineer',
      from: 'September 2008',
      to: 'May 2011',
      companyLink: '',
    },
    {
      company: 'Atheros Communications',
      position: 'Senior Engineer',
      from: 'April 2004',
      to: 'August 2008',
      companyLink: '',
    },
    {
      company: 'UC Irvine',
      position: 'Graduate Research Assistant',
      from: 'May 2002',
      to: 'April 2004',
      companyLink: 'https://uci.edu',
    },
  ],
  certifications: [],
  educations: [
    {
      institution: 'UC Irvine',
      degree: 'Master of Science (MS), Computer Science',
      from: '2002',
      to: '2004',
      details: 'Specialization: Networking and Wireless Communication',
    },
    {
      institution: 'Indian Institute of Technology, Delhi',
      degree: 'B. Tech., Electrical Engineering',
      from: '1996',
      to: '2000',
      details: 'Major: Electrical and Electronics Engineering, Minor: Computer Science',
    },
  ],
  publications: [
    {
      title: 'Link aggregation in wireless local area networks',
      conferenceName: '',
      journalName: 'US Patent 14/229,571 • Issued Feb 7, 2017',
      authors: 'Vipin Mehta and other inventors',
      link: 'https://patents.google.com/patent/US9554303B2',
      description:
        'Methods, systems, and devices are described for establishing a virtual communication link including at least a first and second physical link between two devices. A single virtual packet queue of a device may receive one or more data packets to be transmitted via the virtual communication link. The single virtual packet queue may attach a virtual sequence number to each of the one or more data packets and send the one or more data packets to one or more of the first or the second physical link according to the assigned virtual sequence numbers.',
    },
    {
      title: 'Systems and methods for concurrent device discovery',
      conferenceName: '',
      journalName: 'US Patent 13/791,522 • Issued Mar 8, 2013',
      authors: 'Vipin Mehta and other inventors',
      link: 'https://patents.google.com/patent/US8406153B2',
      description:
        'Systems and methods are provided for performing multiple operations associated with a peer-to-peer network in parallel by using two or more independent transceivers. When performing a device discovery protocol, one transceiver may operate in a listen state and another transceiver may operate in a search state, so that an exchange of discovery messages may occur with a peer, regardless of whether the peer is in the listen state or the search state.',
    },
    {
      title: 'Systems and methods for link augmentation',
      conferenceName: '',
      journalName: 'US Patent 13/831,171 • Filed Mar 14, 2013',
      authors: 'Vipin Mehta and other inventors',
      link: 'https://patents.google.com/patent/US13831171',
      description:
        'Systems and methods are provided for coordinating operation of two or more WLAN subsystems in a single physical device to perform an operation more efficiently, such as with greater throughput. An existing communication link may be established between first WLAN subsystems of two wireless communications devices and augmented with an auxiliary link formed between second WLAN subsystems.',
    },
  ],
  // Academic publications and research papers
  academicPublications: [
    {
      title: 'A Bluetooth based Sensor Network for Civil Infrastructure Health Monitoring',
      conferenceName: '',
      journalName: 'ACM WINET Journal, Vol 10',
      authors: 'Vipin Mehta and other authors',
      link: '',
      description:
        'Communicating with sensors has long been limited either to wired connections or to proprietary wireless communication protocols. Using a ubiquitous and inexpensive wireless communication technology to create Sensor Area Networks (SANs) will accelerate the extensive deployment of sensor technology. Bluetooth, an emerging, worldwide standard for inexpensive, local wireless communication is a viable choice for SANs because of its inherent support of the important requirements - low power, small form factor, low cost and sufficient communication range.',
    },
    {
      title: 'An Ultra Wide Band (UWB) based Sensor Network for Civil Infrastructure Health Monitoring',
      conferenceName: 'EWSN - International Conference on Embedded Wireless Systems and Networks, Berlin',
      journalName: '',
      authors: 'Vipin Mehta and other authors',
      link: '',
      description:
        'Communicating with sensors has long been limited either to wired connections or to proprietary wireless communication protocols. Using a ubiquitous and inexpensive wireless communication technology to create Sensor Networks will accelerate the extensive deployment of sensor technology. Ultra Wide Band (UWB), an emerging, worldwide standard for low power, high throughput local wireless communication is a viable choice for sensor networks because of its inherent support for some of the important requirements – throughput governed adaptive communication range, low power, low cost and small form factor.',
    },
    {
      title: 'Fixed Sensor Networks for Civil Infrastructure Monitoring',
      conferenceName: 'Proceedings Med-Hoc-Net, Sardegna, Italy',
      journalName: '',
      authors: 'Vipin Mehta and other authors',
      link: '',
      description:
        'Research on fixed sensor networks for monitoring civil infrastructure, focusing on wireless communication protocols and network topology optimization for structural health monitoring applications.',
    },
  ],
  // Display articles from your medium or dev account. (Optional)
  blog: {
    source: '', // medium | dev
    username: '', // to hide blog section, keep it empty
    limit: 2, // How many articles to display. Max is 10.
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: { id: '', snippetVersion: 6 },
  themeConfig: {
    defaultTheme: 'lofi',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'dim',
      'nord',
      'sunset',
      'caramellatte',
      'abyss',
      'silk',
      'procyon',
    ],
  },

  // Optional Footer. Supports plain text or HTML.
  footer: '',

  enablePWA: true,
};

export default CONFIG;
