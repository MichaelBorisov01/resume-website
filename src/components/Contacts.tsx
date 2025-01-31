import { motion } from 'framer-motion'
import { useSelector } from 'react-redux'
import { RootState } from '../store/store'

export default function Contacts() {
    const store = useSelector((state: RootState) => state.languageSlice)

    return (
        <div className="pb-20">
            <h2 className="mt-10 mb-5 text-center text-4xl">
                {store.isRussian ? 'Мои контакты' : 'Contacts'}
            </h2>
            <motion.div
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 100 }}
                transition={{ duration: 0.5 }}
                className="text-center tracking-tighter"
            >
                <p className="my-4 text-xl"> {store.data.contacts.address}</p>
                <p className="my-4 text-xl"> {store.data.contacts.phoneNo}</p>
                <p className="my-4 text-xl"> {store.data.contacts.email}</p>
            </motion.div>
        </div>
    )
}