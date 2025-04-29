import { FaGraduationCap , FaMaskFace , FaArrowRight , FaFlag } from "react-icons/fa6";
import { FaCrown } from "react-icons/fa";
import { IoIosFootball } from "react-icons/io";
import { RiParentFill } from "react-icons/ri";
import { CgMathPlus, CgMathMinus } from "react-icons/cg";
import jennefer from '/assets/Profile Container.svg';
import David from "/assets/Profile Container (1).svg"
import Emily from "/assets/Profile Container (2).svg"
import line from "/assets/dollet line.png"

export const navData = [
  {
    label: "Home",
    href: "#",
  },
  {
    label: "About Us",
    href: "#about",
  },
  {
    label: "Academics",
    href: "#academics",
  },
  {
    label: "Adimission",
    href: "#adimission",
  },
  {
    label: "Students Life",
    href: "#life",
  },
  {
    label: "Contact",
    href: "#contact",
    state: "contact",
  },
];

export const CardData = [
  {
    icon: <FaGraduationCap />,
    heading: "Holistic Learning Approach",
    paragraph:
      "Our curriculum focuses on nurturing cognitive, social, emotional, and physical development, ensuring a well-rounded education.",
  },
  {
    icon: <FaCrown />,
    heading: "Experienced Educators",
    paragraph:
      "Our passionate and qualified teachers create a supportive and stimulating learning environment.",
  },
  {
    icon: <FaMaskFace />,
    heading: "Nurturing Environment",
    paragraph:
      "We prioritize safety and provide a warm and caring atmosphere for every child.",
  },
  {
    icon: <FaFlag />,
    heading: "Play-Based Learning",
    paragraph:
      "We believe in the power of play to foster creativity, problem-solving skills, and imagination.",
  },
  {
    icon: <IoIosFootball />,
    heading: "Individualized Attention",
    paragraph:
      "Our small class sizes enable personalized attention, catering to each child's unique needs.",
  },
  {
    icon: <RiParentFill />,
    heading: "Parent Involvement",
    paragraph:
      "We foster a strong parent-school partnership to ensure seamless communication and collaboration.",
  },
];

export const TestimonialsData = [
  {
    name: "Jennifer B",
    avatar: jennefer,
    rating: 5,
    text: "Little Learners Academy has been a second home for my child. The caring staff and engaging programs have made her excited to go to school every day!",
  },

  {
    name: "David K",
    avatar: David,
    rating: 5,
    text: "Choosing Little Learners Academy for my daughter was the best decision. She has thrived in their nurturing and stimulating environment.",
  },
  {
    name: "Emily L",
    avatar: Emily,
    rating: 5,
    text: "My son's social and academic growth has been remarkable since joining Little Learners Academy. I am grateful for the supportive and dedicated teachers.",
  },
];

export const AccordionData = [
  {
    icon: <CgMathPlus />,
    extraIcon: <CgMathMinus />,
    question: "What are the school hours at Little Learners Academy?",
    pgf: "Our school hours are from 8:00 AM to 3:00 PM, Monday to Friday. We also offer extended care options for parents who need early drop-off or late pick-up.",
  },
  {
    icon: <CgMathPlus />,
    extraIcon: <CgMathMinus />,
    question: "Is there a uniform policy for students?",
    pgf: "Our school hours are from 8:00 AM to 3:00 PM, Monday to Friday. We also offer extended care options for parents who need early drop-off or late pick-up.",
  },
  {
    icon: <CgMathPlus />,
    extraIcon: <CgMathMinus />,
    question: "What extracurricular activities are available for students?",
    pgf: "Our school hours are from 8:00 AM to 3:00 PM, Monday to Friday. We also offer extended care options for parents who need early drop-off or late pick-up.",
  },
  {
    icon: <CgMathPlus />,
    extraIcon: <CgMathMinus />,
    question: "What extracurricular activities are available for students?",
    pgf: "Our school hours are from 8:00 AM to 3:00 PM, Monday to Friday. We also offer extended care options for parents who need early drop-off or late pick-up.",
  },
  {
    icon: <CgMathPlus />,
    extraIcon: <CgMathMinus />,
    question: "How do you handle food allergies and dietary restrictions?",
    pgf: "Our school hours are from 8:00 AM to 3:00 PM, Monday to Friday. We also offer extended care options for parents who need early drop-off or late pick-up.",
  },
  {
    icon: <CgMathPlus />,
    extraIcon: <CgMathMinus />,
    question:
      "What is the teacher-to-student ratio at Little Learners Academy?",
    pgf: "Our school hours are from 8:00 AM to 3:00 PM, Monday to Friday. We also offer extended care options for parents who need early drop-off or late pick-up.",
  },
  {
    icon: <CgMathPlus />,
    extraIcon: <CgMathMinus />,
    question: "How do you handle discipline and behavior management?",
    pgf: "Our school hours are from 8:00 AM to 3:00 PM, Monday to Friday. We also offer extended care options for parents who need early drop-off or late pick-up.",
  },
  {
    icon: <CgMathPlus />,
    extraIcon: <CgMathMinus />,
    question: "How do I apply for admission to Little Learners Academy?",
    pgf: "Our school hours are from 8:00 AM to 3:00 PM, Monday to Friday. We also offer extended care options for parents who need early drop-off or late pick-up.",
  },
];

export const CardInfoData = [
  {
    heading: "About Us",
    line: line,
    paragraph:
      "Discover our Mission, Values, and our unwavering commitment to providing the best learning experience for your child. Learn about our passionate educators and our engaging approach to early education.",
    btnText: "Learn More",
    arrow: <FaArrowRight />,
  },
  {
    heading: "Academics",
    line: line,
    paragraph:
      "Delve into our comprehensive academic programs designed to stimulate young minds, foster creativity, and encourage a love for learning. Explore our well-rounded curriculum that nurtures both intellectual and social development.",
    btnText: "Learn More",
    arrow: <FaArrowRight />,
  },
  {
    heading: "Student Life",
    line: line,
    paragraph:
      "Peek into the vibrant and enriching world of Student Life at Little Learners Academy. Discover the array of extracurricular activities, arts and crafts, sports, and social events that make our school experience truly memorable.",
    btnText: "Learn More",
    arrow: <FaArrowRight />,
  },
  {
    heading: "Admissions",
    line: line,
    paragraph:
      "Learn about our Enrollment Process and how to secure your child's place at Little Learners Academy. Find information about our admission requirements, application deadlines, and available spaces.",
    btnText: "Learn More",
    arrow: <FaArrowRight />,
  },
];

// {
//   lis: "Our Mission",
//   lis: "Awards and Recognitions",
//   lis: "History",
//   lis: "Teachers",
// },
// {
//   list: "Special Features",
//   list: "Gallery",
// },
// {
//   list: "Information",
//   list: "Map & Direction",
// }
