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
          title: 'Quadruped Walker: Four-Legged Robot with Gait Planning',
          description:
            'A quadruped robot built on ROS 2 with dynamically switchable gaits, joint-level control, and terrain-aware walking using camera data. Tech Stack: ROS2 • Gait Planning • Quadruped',
          imageUrl:
            '/assets/images/quadruped.jpg',
          link: 'https://github.com/sparkmt/quadruped_robot',
          githubUrl: 'https://github.com/mvipin',
          youtubeUrl: 'https://www.youtube.com/@rubbotix7261',
          hackadayUrl: 'https://hackaday.io/projects/hacker/1160436',
        },
        {
          title: 'ChessMate: The Ultimate Robotic Chess Opponent',
          description:
            'A fully autonomous chess-playing robot that physically manipulates pieces with sub-millimeter precision using a custom SCARA arm, 64 hall-effect sensors, and Stockfish AI integration. Built with ROS 2, custom electronics (CNC-milled PCBs), and expressive animatronics—combining precision robotics, artificial intelligence, and engaging human-robot interaction. Tech Stack: ROS 2 • Python/C++ • Stockfish • Arduino • Raspberry Pi',
          imageUrl:
            'https://cdn.hackaday.io/images/1952301751198086793.jpg',
          link: 'https://github.com/mvipin/ChessMate-ROS2',
          githubUrl: 'https://github.com/mvipin',
          youtubeUrl: 'https://www.youtube.com/@rubbotix7261',
          hackadayUrl: 'https://hackaday.io/projects/hacker/1160436',
        },
        {
          title: 'Bipedal Robot: Dynamic Gait and Balance',
          description:
            'The Biped Hybrid project implements a sophisticated robotic leg system that combines serial and parallel kinematic chains to achieve 6 degrees of freedom (DOF) motion. This hybrid approach enables complex locomotion patterns while maintaining mechanical efficiency and control precision. More details available in the project repository. Tech Stack: Arduino • C++ • Servo Control • Denavit-Hartenberg • Inverse Kinematics',
          imageUrl:
            'https://cdn.hackaday.io/images/original/2397321621729491726.gif',
          link: 'https://github.com/mvipin/biped-hybrid',
          githubUrl: 'https://github.com/mvipin/biped-hybrid',
          youtubeUrl: 'https://youtu.be/3PNreAL9f4w',
          hackadayUrl: 'https://hackaday.io/project/179225-hybrid-leg-for-bipedal-robot',
        },
        {
          title: 'AutoPilot Plane: ROS 2 + ArduPilot Integration',
          description:
            'An autonomous fixed-wing drone powered by ArduPilot, with MAVROS integration in ROS 2 for mission planning and sensor fusion. Tech Stack: ROS2 • MAVROS • Drones',
          imageUrl:
            '/assets/images/plane.jpg',
          link: 'https://github.com/sparkmt/ardupilot_plane',
          githubUrl: 'https://github.com/mvipin',
          youtubeUrl: 'https://www.youtube.com/@rubbotix7261',
          hackadayUrl: 'https://hackaday.io/projects/hacker/1160436',
        },
        {
          title: 'Roomba SLAM Navigator: Autonomous Floor Mapping & Navigation',
          description:
            'Modified Roomba platform running ROS 2 with custom sensor integration (LiDAR, IMU, wheel encoders) for simultaneous localization and mapping (SLAM). Implements gmapping/cartographer for real-time floor plan generation, AMCL for localization, and move_base for autonomous navigation to user-specified coordinates with dynamic obstacle avoidance. Tech Stack: ROS2 • SLAM • Navigation Stack • LiDAR',
          imageUrl:
            '/assets/images/roomba_slam.jpg',
          link: 'https://github.com/sparkmt/roomba_slam',
          githubUrl: 'https://github.com/mvipin',
          youtubeUrl: 'https://www.youtube.com/@rubbotix7261',
          hackadayUrl: 'https://hackaday.io/projects/hacker/1160436',
        },
        {
          title: 'Cessna Flight Simulator: DIY Cockpit with Air Manager & MobiFlight',
          description:
            'Complete Cessna 172 flight simulator built from scratch with Air Manager providing authentic instrument panel displays and MobiFlight controlling all physical hardware. DIY implementation includes yoke controls, throttle quadrant, brake pedals, rudder pedals, flaps lever, fuel mixture controls, and radio stack—all interfaced through 12 Arduino Uno boards for seamless flight sim integration. Features AI-powered ATC communication system and immersive 200-degree field of view using triple monitor setup. Integrates with X-Plane/MSFS for realistic flight dynamics. Tech Stack: Air Manager • MobiFlight • Arduino • AI ATC • Multi-Monitor',
          imageUrl:
            '/assets/images/flight_sim.jpg',
          link: 'https://github.com/sparkmt/cessna_simulator',
          githubUrl: 'https://github.com/mvipin',
          youtubeUrl: 'https://www.youtube.com/@rubbotix7261',
          hackadayUrl: 'https://hackaday.io/projects/hacker/1160436',
        },
        {
          title: '6-DOF Robotic Arm: Advanced Inverse Kinematics Control',
          description:
            'Six degree-of-freedom robotic arm controlled via ROS 2 with real-time inverse kinematics solver using Jacobian-based methods and KDL (Kinematics and Dynamics Library). Features joint-space and Cartesian-space trajectory planning, collision detection using geometric primitives, and MoveIt! integration for motion planning. Supports both position and velocity control modes with force feedback. Tech Stack: ROS2 • MoveIt! • KDL • Inverse Kinematics • Trajectory Planning',
          imageUrl:
            '/assets/images/robotic_arm.jpg',
          link: 'https://github.com/sparkmt/6dof_arm',
          githubUrl: 'https://github.com/mvipin',
          youtubeUrl: 'https://www.youtube.com/@rubbotix7261',
          hackadayUrl: 'https://hackaday.io/projects/hacker/1160436',
        },
        {
          title: 'Rubik\'s Cube Solver: Vision-Guided Manipulation Robot',
          description:
            'A robotic system that solves a Rubik\'s cube using computer vision to detect the cube state and robotic arms for actuation. Built with ROS 2. Tech Stack: ROS2 • Computer Vision • Manipulation',
          imageUrl:
            '/assets/images/rubik.jpg',
          link: 'https://github.com/sparkmt/rubiks_solver',
          githubUrl: 'https://github.com/mvipin',
          youtubeUrl: 'https://www.youtube.com/@rubbotix7261',
          hackadayUrl: 'https://hackaday.io/projects/hacker/1160436',
        },
        {
          title: 'Self-Balancing Bot: Dynamic Stability with ROS 2',
          description:
            'A two-wheeled self-balancing robot using IMU + encoder sensor fusion and PID control with ROS 2. Simulated in Gazebo and visualized in RViz2. Tech Stack: ROS2 • Control Systems • Sensor Fusion',
          imageUrl:
            '/assets/images/selfbalance.jpg',
          link: 'https://github.com/sparkmt/selfbalance_bot',
          githubUrl: 'https://github.com/mvipin',
          youtubeUrl: 'https://www.youtube.com/@rubbotix7261',
          hackadayUrl: 'https://hackaday.io/projects/hacker/1160436',
        },
        {
          title: 'SnakeBot: Modular Serpentine Robot',
          description:
            'A bio-inspired modular snake robot using central pattern generators (CPGs) for locomotion. Controlled via ROS 2 and visualized in RViz. Tech Stack: ROS2 • CPG • Modular Robotics',
          imageUrl:
            '/assets/images/snakebot.jpg',
          link: 'https://github.com/sparkmt/snakebot',
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
    'Device Drivers',
    'C',
    'Python',
    'C++',
    'Bluetooth',
    'WiFi',
    'ROS2',
    'OpenCV',
    'Zephyr',
    'Linux',
    'FreeRTOS',
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
