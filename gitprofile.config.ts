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
          title: 'GestureBot: Computer Vision-Controlled Robot Platform',
          description:
            'Comprehensive computer vision system for robotics applications, specifically designed for the GestureBot platform. Features real-time object detection, gesture recognition, hand/pose tracking, and seamless integration with ROS 2 Navigation stack for autonomous robot control through intuitive hand gestures. Supports 9 distinct hand gestures for robot control including thumbs up/down for start/stop navigation, open palm for pause, fist for emergency stop, and directional pointing for movement commands. Implements adaptive processing system with priority-based feature management, achieving ~15 FPS object detection and ~12 FPS gesture recognition. Tech Stack: ROS2 • MediaPipe • OpenCV • Computer Vision • Gesture Recognition • Raspberry Pi 5 • Navigation • Object Detection • Hand Tracking',
          imageUrl:
            '/assets/images/gesturebot.jpg',
          link: 'https://github.com/mvipin/gesturebot',
          githubUrl: 'https://github.com/mvipin/gesturebot',
          youtubeUrl: 'https://www.youtube.com/@rubbotix7261',
          hackadayUrl: 'https://hackaday.io/project/203704-gesturebot',
        },
        {
          title: 'Perceptor: Autonomous Floor Mapping & Navigation',
          description:
            'Modified Roomba platform with integrated RPLiDAR sensor for comprehensive SLAM and navigation capabilities. Features real-time mapping using slam_toolbox with pose graph optimization, AMCL localization for precise positioning, and Nav2 navigation stack for autonomous path planning. Implements advanced navigation features including dynamic obstacle detection, keepout zones for restricted areas, variable speed limits, multi-waypoint patrol routes, and real-time collision monitoring with emergency stop capabilities. Supports both manual teleoperation via Bluetooth gamepad and fully autonomous operation with sensor fusion (wheel odometry + IMU) using Extended Kalman Filter. Tech Stack: ROS2 • SLAM • Path Planning • Autonomous Navigation • RPLiDAR • AMCL • Sensor Fusion • Bluetooth Teleoperation',
          imageUrl:
            '/assets/images/roomba.gif',
          link: 'https://github.com/mvipin/perceptor',
          githubUrl: 'https://github.com/mvipin/perceptor',
          youtubeUrl: 'https://www.youtube.com/playlist?list=PLmUgsufWocy-3w0uKOAjEmPxq2Nj_awAS',
          hackadayUrl: 'https://hackaday.io/project/203547-perceptor-autonomous-floor-mapping-navigation',
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
          title: 'Mini Pupper: Open-Source ROS Quadruped Robot Platform',
          description:
            'Open-source quadruped robot platform with ROS SLAM/Navigation integration, Lidar sensing, and OAK-D-Lite 3D camera. Features multiple gait patterns (Trot, Pace, Bound), Raspberry Pi 4 control, 12x servo actuation, and PS4 controller interface. Supports computer vision applications and autonomous navigation. Tech Stack: ROS • Python • OpenCV • Raspberry Pi • Lidar • Computer Vision • SLAM • Navigation',
          imageUrl:
            '/assets/images/quadruped.jpg',
          link: 'https://github.com/mangdangroboticsclub/mini_pupper_ros',
          githubUrl: 'https://github.com/mangdangroboticsclub/mini_pupper_ros',
          youtubeUrl: 'https://www.youtube.com/@rubbotix7261',
          hackadayUrl: 'https://hackaday.io/projects/hacker/1160436',
        },
        {
          title: 'Bipedal Robot: Dynamic Gait and Balance',
          description:
            'The Biped Hybrid project implements a sophisticated robotic leg system that combines serial and parallel kinematic chains to achieve 6 degrees of freedom (DOF) motion. This hybrid approach enables complex locomotion patterns while maintaining mechanical efficiency and control precision. More details available in the project repository. Tech Stack: Arduino • C++ • Servo Control • Denavit-Hartenberg • Inverse Kinematics',
          imageUrl:
            'assets/images/bipedal.gif',
          link: 'https://github.com/mvipin/biped-hybrid',
          githubUrl: 'https://github.com/mvipin/biped-hybrid',
          youtubeUrl: 'https://youtu.be/3PNreAL9f4w',
          hackadayUrl: 'https://hackaday.io/project/179225-hybrid-leg-for-bipedal-robot',
        },
        {
          title: 'Computer Vision based Rubik\'s Cube Solving Robot',
          description:
            'An intelligent robotic system that automatically solves Rubik\'s cubes using advanced computer vision, machine learning, and precision motor control. Features single-camera dual-orientation capture system with controlled LED lighting, CNN and decision tree models for robust color detection, Kociemba solving algorithm for optimal solutions, and 6-axis stepper motor system with G-code interface. The system captures cube images in two orientations (U,L,F then D,R,B faces), processes them through trained neural networks for color detection, and executes solving moves through precision stepper motor control. Tech Stack: Python • OpenCV • TensorFlow/Keras • Arduino • Stepper Motors • Computer Vision • Machine Learning • G-code',
          imageUrl:
            '/assets/images/cube.gif',
          link: 'https://github.com/wangyuyyt/rubik_cube_solver',
          githubUrl: 'https://github.com/wangyuyyt/rubik_cube_solver',
          youtubeUrl: 'https://youtu.be/mwZZhnmK3QI',
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
          title: 'Self-Balancing Robot: Inverted Pendulum Control System',
          description:
            'An advanced self-balancing robot demonstrating MPU6050 DMP hardware-accelerated orientation sensing, Bluetooth wireless monitoring, and adaptive motor control with dead band compensation. Implements three-term PID controller with tuned parameters for optimal balance performance and disturbance rejection. The system maintains dynamic stability through continuous feedback control at 200Hz sensor sampling rate. Tech Stack: Arduino • C++ • PID Control • MPU6050 DMP • I2C • PWM Motor Control • Bluetooth Serial',
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
            'SlitherBot is a biomimetic snake robot demonstrating graceful serpentine locomotion using cost-effective components and innovative design. Features 16 modular 3D printed ribs, micro-servo actuation, and revolutionary structured sheet skin inspired by Disney Research. Implements natural snake-like movement using cosine wave motion control with infrared obstacle detection and autonomous navigation capabilities. Tech Stack: Arduino • C++ • Servo Control • PWM • Biomimetic Locomotion • 3D Printing • Structured Materials • Orthotropic Design',
          imageUrl:
            '/assets/images/snake.gif',
          link: 'https://github.com/mvipin/slitherbot',
          githubUrl: 'https://github.com/mvipin/slitherbot',
          youtubeUrl: 'https://youtu.be/Q69HzF_Xq_s',
          hackadayUrl: 'https://hackaday.io/project/178463-slitherbot',
        },
        {
          title: 'Cessna Flight Simulator: DIY Cockpit with Air Manager & MobiFlight',
          description:
            'Complete Cessna 172 flight simulator built from scratch with Air Manager providing authentic instrument panel displays and MobiFlight controlling all physical hardware. DIY implementation includes yoke controls, throttle quadrant, brake pedals, rudder pedals, flaps lever, fuel mixture controls, and radio stack—all interfaced through 12 Arduino Uno boards for seamless flight sim integration. Features AI-powered ATC communication system and immersive 200-degree field of view using triple monitor setup. Integrates with X-Plane/MSFS for realistic flight dynamics. Tech Stack: Air Manager • MobiFlight • Arduino • AI ATC • Multi-Monitor',
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
