export interface TopicModule {
  id: string;
  title: string;
  category: string;
  summary: string;
  image: string;
  isNew?: boolean;
  newBadgeText?: string;
  subtopics: {
    name: string;
    description: string;
    isNew?: boolean;
  }[];
  keyOutcomes: string[];
}

export interface CurriculumWeek {
  number: string;
  title: string;
  subtitle: string;
  focus: string;
  topics: string[];
  deliverable: string;
}

export interface Instructor {
  name: string;
  role: string;
  bio: string;
  image: string;
  specialty: string[];
  tag: string;
}

export interface StudentProject {
  id: string;
  name: string;
  category: string;
  description: string;
  student: string;
  studentRole: string;
  instructor: string;
  image: string;
  tech: string[];
  revenueOrMetric?: string;
  liveUrl?: string;
  summaryDetails?: string;
}

export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  initials: string;
  track: string;
  rating: number;
  highlight: string;
}

export interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

export interface ApplicationFormData {
  fullName: string;
  email: string;
  phoneOrWhatsapp: string;
  topicOfInterest: string;
  background: string;
  primaryGoal?: string;
}

