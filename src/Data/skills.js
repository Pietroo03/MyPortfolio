import { faHtml5, faCss3Alt, faJs, faNodeJs, faReact, faBootstrap, faNpm, faGitAlt, faGithub } from '@fortawesome/free-brands-svg-icons';
import { SiExpress, SiTailwindcss, SiMysql } from "react-icons/si";

const skills = [
    { name: 'HTML', icon: faHtml5, color: '#FF5D33', type: 'fa' },
    { name: 'CSS', icon: faCss3Alt, color: '#218BD9', type: 'fa' },
    { name: 'JavaScript', icon: faJs, color: '#F7DF1E', type: 'fa' },
    { name: 'NodeJS', icon: faNodeJs, color: '#4BBF41', type: 'fa' },
    { name: 'Express', icon: SiExpress, color: '#000000', type: 'react' },
    { name: 'MySQL', icon: SiMysql, color: '#2F9AEB', type: 'react' },
    { name: 'React', icon: faReact, color: '#61DAFB', type: 'fa' },
    { name: 'Bootstrap', icon: faBootstrap, color: '#A877F2', type: 'fa' },
    { name: 'Tailwind', icon: SiTailwindcss, color: '#38B2AC', type: 'react' },
    { name: 'NPM', icon: faNpm, color: '#CB3837', type: 'fa' },
    { name: 'Git', icon: faGitAlt, color: '#F1502F', type: 'fa' },
    { name: 'GitHub', icon: faGithub, color: '#181717', type: 'fa' }
];

export default skills;
