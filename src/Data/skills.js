import { faHtml5, faCss3Alt, faJs, faNodeJs, faReact, faBootstrap, faNpm, faGitAlt, faGithub } from '@fortawesome/free-brands-svg-icons';
import { SiExpress, SiTailwindcss, SiMysql } from "react-icons/si"; // React Icons

const skills = [
    { name: 'HTML', icon: faHtml5, color: '#E44D26', type: 'fa' },
    { name: 'CSS', icon: faCss3Alt, color: '#1572B6', type: 'fa' },
    { name: 'JavaScript', icon: faJs, color: '#F7DF1E', type: 'fa' },
    { name: 'NodeJS', icon: faNodeJs, color: '#68A063', type: 'fa' },
    { name: 'Express', icon: SiExpress, color: '#000000', type: 'react' }, // React Icons
    { name: 'MySQL', icon: SiMysql, color: '#4479A1', type: 'react' }, // React Icons
    { name: 'React', icon: faReact, color: '#61DAFB', type: 'fa' },
    { name: 'Bootstrap', icon: faBootstrap, color: '#7952B3', type: 'fa' },
    { name: 'Tailwind', icon: SiTailwindcss, color: '#38B2AC', type: 'react' }, // React Icons
    { name: 'NPM', icon: faNpm, color: '#CB3837', type: 'fa' },
    { name: 'Git', icon: faGitAlt, color: '#F1502F', type: 'fa' },
    { name: 'GitHub', icon: faGithub, color: '#181717', type: 'fa' }
];

export default skills;
