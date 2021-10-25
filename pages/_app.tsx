import 'normalize.css';
import '@styles/fonts.css';
import '@styles/globals.sass';
import {AnimatePresence} from "framer-motion";
import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps, router }: AppProps) {
    return <AnimatePresence exitBeforeEnter initial={true}>
        <Component {...pageProps} key={router.route} />
    </AnimatePresence>
}

export default MyApp;
