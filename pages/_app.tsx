import 'normalize.css';
import '@madeinhaus/nextjs-page-transition/dist/index.css';
import '@styles/fonts.css';
import '@styles/globals.sass';
import type { AppProps } from 'next/app';
import PageTransition, { useAsPathWithoutHash } from '@madeinhaus/nextjs-page-transition';

function MyApp({ Component, pageProps }: AppProps) {
    const key = useAsPathWithoutHash();

    return <PageTransition inPhaseDuration={100} outPhaseDuration={100}>
        <Component {...pageProps} key={key} />
    </PageTransition>
}

export default MyApp;
