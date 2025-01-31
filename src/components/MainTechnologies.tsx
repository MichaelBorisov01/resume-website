import { RiGithubFill, RiGitlabFill, RiReactjsFill, RiVuejsLine } from 'react-icons/ri';
import { BiLogoGraphql, BiLogoNodejs, BiLogoTypescript } from 'react-icons/bi';
import { Variants, motion } from 'framer-motion';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';
import skills from "../assets/skills.gif";

const icons = [
    { component: <BiLogoNodejs className="text-7xl text-green-500" />, delay: 1 },
    { component: <BiLogoTypescript className="text-7xl text-blue-500" />, delay: 1.2 },
    { component: <RiVuejsLine className="text-7xl text-green-500" />, delay: 1.5 },
    { component: <RiReactjsFill className="text-7xl text-cyan-500" />, delay: 1.6 },
    { component: <RiGitlabFill className="text-7xl text-orange-500" />, delay: 1.2 },
    { component: <RiGithubFill className="text-7xl text-white" />, delay: 1 },
    { component: <BiLogoGraphql className="text-7xl text-pink-500" />, delay: 1.7 },
];

function iconAnimation(duration: number): Variants {
    return {
        initial: { y: -10 },
        animate: {
            y: [10, -10],
            transition: {
                duration: duration,
                ease: 'linear',
                repeat: Infinity,
                repeatType: 'reverse',
            },
        },
    };
}

export default function MainTechnologies() {
    const store = useSelector((state: RootState) => state.languageSlice);
    return (
        <div className="pb-20">
            <h2 className="mt-20 mb-10 text-center text-4xl">
                {store.isRussian ? 'Мои основные технологии' : 'Main Technologies'}
            </h2>
            <motion.div
                whileInView={{opacity: 1, x: 0}}
                initial={{opacity: 0, x: -100}}
                transition={{duration: 0.7}}
                className="flex flex-wrap items-center justify-center gap-4"
            >
                {icons.map((icon, index) => (
                    <motion.div
                        key={index}
                        variants={iconAnimation(icon.delay)}
                        initial="initial"
                        animate="animate"
                    >
                        {icon.component}
                    </motion.div>
                ))}
            </motion.div>

            <div className="flex justify-center mt-10">
                <motion.img
                    whileInView={{opacity: 1, x: 0}}
                    initial={{opacity: 0, x: -100}}
                    transition={{duration: 0.6}}
                    src={skills}
                    className="rounded-2xl"
                    alt="skills"
                />
            </div>
        </div>
    );
}
