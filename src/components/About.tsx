import { useSelector } from 'react-redux'
import aboutImg from '../assets/me.jpg'

import { motion } from 'framer-motion'
import { RootState } from '../store/store'

export default function About() {
    const store = useSelector((state: RootState) => state.languageSlice)

    return (
        <div className="pb-4">
            <h2 className="mt-10  mb-5 text-center text-4xl">
                {store.isRussian ? 'Обо' : 'About'}
                <span className="text-purple-500"> {store.isRussian ? 'Мне' : 'Me'}</span>
            </h2>
            <div className="flex flex-wrap">
                <motion.div
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: -100 }}
                    transition={{ duration: 0.7 }}
                    className="flex items-center justify-center w-full lg:w-1/2 lg:p-8"
                >
                    <img
                        className="rounded-2xl"
                        style={{ maxWidth: '500px !important' }}
                        src={aboutImg}
                        alt="about"
                    />
                </motion.div>
                <motion.div
                    whileInView={{opacity: 1, x: 0}}
                    initial={{opacity: 0, x: 100}}
                    transition={{duration: 0.7}}
                    className="w-full lg:w-1/2 flex flex-col items-center justify-center"
                >
                    <div className="flex justify-center lg:justify-start">
                        <p className="my-2 max-w-xl pb-1 pt-8 text-lg">{store.data.aboutText}</p>
                    </div>
                    <div className="flex justify-center lg:justify-start">
                        <p className="my-2 max-w-xl py-1 text-lg">{store.data.aboutHobby}</p>
                    </div>
                    <div className="flex justify-center lg:justify-start">
                        <p className="my-2 max-w-xl py-1 text-lg">{store.data.aboutMe}</p>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}