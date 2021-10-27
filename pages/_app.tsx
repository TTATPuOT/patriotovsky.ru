import 'normalize.css';
import '@styles/fonts.css';
import '@styles/globals.sass';
import {AnimatePresence} from "framer-motion";
import type { AppProps } from 'next/app';
import Router from "next/router";

const routeChange = () => {
    // Temporary fix to avoid flash of unstyled content
    // during route transitions. Keep an eye on this
    // issue and remove this code when resolved:
    // https://github.com/vercel/next.js/issues/17464

    const tempFix = () => {
        const allStyleElems = document.querySelectorAll('style[media="x"]');
        allStyleElems.forEach((elem) => {
            elem.removeAttribute("media");
        });
    };
    tempFix();
};

Router.events.on("routeChangeComplete", routeChange );
Router.events.on("routeChangeStart", routeChange );

function MyApp({ Component, pageProps, router }: AppProps) {
    return <AnimatePresence exitBeforeEnter initial={true}>
        <Component {...pageProps} key={router.route} />
    </AnimatePresence>
}

export default MyApp;
