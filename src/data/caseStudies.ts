export interface CaseStudy {
  id: string;
  title: string;
  description: string;
  platform: 'Mobile App' | 'Web Dashboard' | 'Website';
  role: string;
  image: string;
  iconName: 'Smartphone' | 'Monitor';
  fullDescription: string;
  problem: string;
  solution: string;
  features: string[];
  screens?: string[];
}

export const caseStudies: CaseStudy[] = [
  {
    id: 'foodie-app',
    title: 'Foodie App',
    description: 'A mobile application for finding and ordering local street food.',
    platform: 'Mobile App',
    role: 'UX Researcher, UI Designer',
    image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&q=80&w=800',
    iconName: 'Smartphone',
    fullDescription: 'Foodie App connects local street food vendors with hungry customers. It streamlines the ordering process and helps users discover hidden gems in their city.',
    problem: 'Street food vendors often lack digital presence, making it hard for customers to find them or know their current location and menu.',
    solution: 'A location-based mobile app that allows vendors to update their status and menu in real-time, while customers can search, order, and review.',
    features: ['Real-time Vendor Tracking', 'Digital Menu & Ordering', 'User Reviews & Ratings', 'Favorite Vendor List'],
    screens: [
      'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=400',
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=400',
      'https://images.unsplash.com/photo-1523206489230-c012c64b2b48?auto=format&fit=crop&q=80&w=400',
      'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=400'
    ]
  },
  {
    id: 'edulearn-platform',
    title: 'EduLearn Platform',
    description: 'An online learning management system for high schools.',
    platform: 'Web Dashboard',
    role: 'Product Designer',
    image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&q=80&w=800',
    iconName: 'Monitor',
    fullDescription: 'EduLearn is a comprehensive LMS designed to bridge the communication gap between teachers, students, and parents while managing coursework effectively.',
    problem: 'Existing LMS solutions were clunky, outdated, and difficult for non-technical staff to navigate.',
    solution: 'A clean, intuitive dashboard with role-specific views that simplifies assignment tracking, grading, and communication.',
    features: ['Assignment Submission Portal', 'Gradebook & Analytics', 'Parent Communication Hub', 'Resource Library']
  },
  {
    id: 'travel-buddy',
    title: 'Travel Buddy',
    description: 'A travel planning app that helps groups coordinate itineraries.',
    platform: 'Mobile App',
    role: 'UI Designer',
    image: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&q=80&w=800',
    iconName: 'Smartphone',
    fullDescription: 'Travel Buddy takes the stress out of group travel by providing a collaborative space for itinerary planning, expense splitting, and voting on activities.',
    problem: 'Group travel planning often happens in disjointed chat threads, leading to confusion and lost information.',
    solution: 'A centralized collaborative platform where all trip details live, allowing for democratic decision making and transparent expense tracking.',
    features: ['Collaborative Itinerary', 'Expense Splitter', 'Activity Voting', 'Offline Maps'],
    screens: [
      'https://images.unsplash.com/photo-1533022139390-e31c48b7c9e3?auto=format&fit=crop&q=80&w=400',
      'https://images.unsplash.com/photo-1522199755839-a2bacb67c546?auto=format&fit=crop&q=80&w=400',
      'https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?auto=format&fit=crop&q=80&w=400',
      'https://images.unsplash.com/photo-1533022139390-e31c48b7c9e3?auto=format&fit=crop&q=80&w=400'
    ]
  }
];
