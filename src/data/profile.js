import profilePhoto from '../assets/profile-photo.png';

const profile = {
  name: {
    first: 'CHAMOD',
    last: 'SAKVITHI',
  },
  role: 'HR Executive',
  subtitle: 'Human Resources Professional',
  quote: {
    line1: '" Building better people,',
    line2: 'stronger teams and a brighter future."',
  },
  welcomeText: 'WELCOME TO MY DIGITAL PROFESSIONAL PORTFOLIO',
  ctaLabel: 'Explore My Profile',
  ctaHref: '#about',
  userGreeting: 'Hi, Chamod',

  image: {
    src: profilePhoto,
    alt: 'Chamod Sakvithi portrait',
  },

  stats: [
    { icon: 'user', title: 'HR Executive', subtitle: 'Current Position' },
    { icon: 'education', title: 'Completed Diploma', subtitle: 'CIPM Sri Lanka' },
    { icon: 'briefcase', title: '1.5+ Years', subtitle: 'HR Experience' },
    { icon: 'location', title: 'Galle, Sri Lanka', subtitle: 'Location' },
  ],

  cards: [
    { number: '01', icon: 'user', title: 'About Me', subtitle: 'Get to know me better', href: '#about' },
    { number: '02', icon: 'education', title: 'Education', subtitle: 'My academic journey', href: '#education' },
    { number: '03', icon: 'briefcase', title: 'Experience', subtitle: 'My career path', href: '#experience' },
    { number: '04', icon: 'settings', title: 'Skills', subtitle: 'What I bring to the table', href: '#skills' },
    { number: '05', icon: 'document', title: 'Certificates', subtitle: 'My achievements', href: '#certificates' },
    { number: '06', icon: 'target', title: 'Career Goals', subtitle: 'My future plans', href: '#goals' },
    { number: '07', icon: 'mail', title: 'Contact Me', subtitle: "Let's connect", href: '#contact' },
  ],

  scriptNote: 'Dream\nPlan\nAchieve',
  footerText: 'THANK YOU FOR VISITING MY DIGITAL CV',
  signature: 'Chamod Sakvithi',
};

export default profile;
