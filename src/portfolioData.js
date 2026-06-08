export const portfolio = {
  name: 'Mohit Yadav',
  role: 'Robotics Software Engineer',
  location: 'San Jose, CA',
  summary:
    'I build software for dexterous robots, teleoperation systems, and robot learning pipelines, with work spanning firmware interfaces, Python SDKs, ROS 2, motion planning, and physical robot deployment.',
  contact: {
    email: 'mohitydv09@gmail.com',
    website: 'https://mohitydv09.github.io',
    github: 'https://github.com/mohitydv09',
    linkedin: 'https://linkedin.com/in/mohitydv09',
  },
  experience: [
    {
      title: 'Founding Robotics Software Engineer',
      company: 'Tetheria.AI',
      period: 'Sept 2025 - Present',
      highlights: [
        'Architected software for 16-DOF and 20-DOF tendon-driven hands across firmware, SDK, ROS 2, coordinate frames, data structures, and control interfaces.',
        'Built and maintain a Python SDK for low-level serial communication and a binary command protocol at 500 Hz, supporting ESP32 firmware integration.',
        'Developed 1000 Hz neural retargeting for mapping human hand motion to robotic hand kinematics and deployed bimanual teleoperation stacks.',
      ],
    },
    {
      title: 'Robotics Software Engineering Intern',
      company: 'Tetheria.AI',
      period: 'May 2025 - Aug 2025',
      highlights: [
        'Developed URDF assets from SolidWorks models and configured ROS 2 visualization with RViz2, TF alignment, launch files, and joint state publishing.',
        'Designed nonlinear joint-to-actuator models for tendon-driven hands using custom kinematic formulations.',
        'Implemented a real-time motion-capture glove teleoperation pipeline and returned full-time to continue platform development.',
      ],
    },
    {
      title: 'Research Assistant',
      company: 'Robotics: Perception and Manipulation Lab, University of Minnesota',
      period: 'Jan 2024 - May 2025',
      highlights: [
        'Implemented diffusion-policy based bimanual manipulation on UR5e hardware, reaching 74.6% success on a bottle uncorking task.',
        'Designed dual-arm manipulation pipelines integrating perception, motion planning, and collision avoidance, reducing emergency stops by 93.1%.',
      ],
    },
    {
      title: 'Teaching Assistant',
      company: 'University of Minnesota',
      period: 'Jan 2024 - May 2025',
      highlights: [
        'Mentored 280+ students across robotics, dynamics, and applied data analytics, including Intelligent Robotic Systems.',
      ],
    },
    {
      title: 'Scientific Officer',
      company: 'NPCIL, India',
      period: 'Jan 2021 - Aug 2023',
      highlights: [
        'Contributed to nuclear fuel handling machinery design through structural calculations, load calculations, and engineering documentation.',
      ],
    },
  ],
  projects: [
    {
      name: 'In-Context Imitation Learning via Graph Diffusion for Bimanual Manipulation',
      description:
        'Extended Instant Policy to dual-arm manipulation with a heterogeneous graph-transformer diffusion architecture, training a roughly 211M parameter model from generated pseudo-demonstrations and achieving 74% success on RLBench2 Lift Tray.',
      links: [
        { label: 'GitHub', href: 'https://github.com/mohitydv09/' },
        { label: 'YouTube', href: 'https://youtu.be/Bs8WVhzYkac' },
      ],
    },
    {
      name: 'Bimanual Robot Teleoperation using 3D Pose Estimation',
      description:
        'Mapped MediaPipe 3D human pose estimates to a simulated Baxter robot using vector-based retargeting for bimanual teleoperation.',
      links: [{ label: 'Demo', href: 'https://mohitydv09.github.io/copycat/' }],
    },
    {
      name: 'The Real Bartender',
      description:
        'Bimanual UR5e manipulation system combining real robot deployment, diffusion policies, perception, and motion planning for bottle uncorking.',
      links: [
        { label: 'GitHub', href: 'https://github.com/mohitydv09/the-real-bartender' },
        { label: 'YouTube', href: 'https://youtu.be/HdP3ZrLVwHQ?si=GHsB05MJ7Y-854jO' },
      ],
    },
  ],
  education: [
    {
      school: 'University of Minnesota, Twin Cities',
      degree: 'MS in Robotics, GPA: 4.0/4.0',
      year: '2025',
    },
    {
      school: 'Indian Institute of Technology (IIT) BHU Varanasi',
      degree: 'B.Tech. in Mechanical Engineering, GPA: 7.2/10.0',
      year: '2018',
    },
  ],
  skills: [
    {
      id: 'programming',
      label: 'Programming',
      items: ['Python', 'C/C++', 'CUDA'],
    },
    {
      id: 'learning',
      label: 'Robot Learning & Control',
      items: ['ROS 2', 'Motion Planning', 'Generative Modeling', 'Graph Neural Networks', 'PyTorch'],
    },
    {
      id: 'systems',
      label: 'Systems & Infrastructure',
      items: ['Linux', 'Docker', 'Git', 'ESP32', 'Serial Communication', 'AWS', 'Google Cloud'],
    },
  ],
  skillsDock: [
    { id: 'python', label: 'Python' },
    { id: 'cpp', label: 'C/C++' },
    { id: 'cuda', label: 'CUDA' },
    { id: 'ros2', label: 'ROS 2' },
    { id: 'pytorch', label: 'PyTorch' },
    { id: 'docker', label: 'Docker' },
    { id: 'linux', label: 'Linux' },
    { id: 'git', label: 'Git' },
    { id: 'esp32', label: 'ESP32' },
    { id: 'cloud', label: 'Google Cloud' },
  ],
  hobbies: [
    {
      id: 'motorcycling',
      label: 'Motorcycling',
      description: 'Keeping the mechanical engineer alive.',
    },
    {
      id: 'hiking',
      label: 'Hiking',
      description: 'Giving some rest to the eyes.',
    },
    {
      id: 'volleyball',
      label: 'Volleyball',
      description: 'Keeping reflexes sharp and teamwork sharper.',
    },
  ],
};
