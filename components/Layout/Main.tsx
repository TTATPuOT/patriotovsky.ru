import React from 'react';
import Header from "../Header";
import Footer from "../Footer";
import { motion } from 'framer-motion';

export interface MainProps {
    children: React.ReactNode
}

const Main = (props: MainProps) => {
    return <div className="container">
        <Header />

        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.2, type: 'easeInOut' }}
        >
            {props.children}
        </motion.div>

        <Footer />
    </div>
}

export default Main;
