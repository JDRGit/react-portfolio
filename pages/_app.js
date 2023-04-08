import '@/styles/globals.css';
import AppWrap from '@/components/AppWrap';
import MotionWrap from '@/components/MotionWrap';

export default function App({ Component, pageProps }) {
  return (
    <AppWrap>
      <MotionWrap>
        <Component {...pageProps} />
      </MotionWrap>
    </AppWrap>
  );
}
