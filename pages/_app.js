import "@/styles/globals.css";
import AppWrap from "@/components/AppWrap";
import MotionWrap from "@/components/MotionWrap";

function MyApp({ Component, pageProps }) {
  return (
    <AppWrap>
      <MotionWrap>
        <Component {...pageProps} />
      </MotionWrap>
    </AppWrap>
  );
}

export default MyApp;
