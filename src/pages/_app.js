import SnackBar from "../../components/common/SnackBar";
import NextTopLoader from "nextjs-toploader";
import ScrollToTop from "react-scroll-to-top";
// import Header from "../../components/common/Header";
import Footer from "../../components/common/Footer";
import { SessionProvider } from "next-auth/react";
import SnackbarContextProvider from "../../context/snackbarContext/SnackbarContext";
import { useState } from "react";
import ReduxProvider from "../../store/redux-provider";
import { Toaster, toast } from 'sonner';
import ButtonMenu from "../../components/common/ButtonMenu";
import dynamic from 'next/dynamic'

const NoSSRHeader = dynamic(() => import('../../components/common/Header'), { ssr: false })

const App = ({ Component, pageProps: { session, ...pageProps } }) => {
  const [bannerTitle, setBannerTitle] = useState("");
  const [headerType, setHeaderType] = useState('personal')

  return (
    <ReduxProvider>
      <SessionProvider session={session}>
        <SnackbarContextProvider>
          <Toaster richColors position="top-right" theme="dark" />
          <SnackBar />
          <NoSSRHeader setHeaderType={setHeaderType} headerType={headerType} />
          <ButtonMenu />
          <NextTopLoader
            color="linear-gradient(90deg, #e33af2, #c4540a)"
            // color="linear-gradient(90deg, #f19a1a, #a9f3dd)"
            initialPosition={0.08}
            crawlSpeed={200}
            height={5}
            crawl={true}
            showSpinner={true}
            easing="cubic-bezier(0.25, 0.1, 0.25, 1)"
            speed={950}
            shadow="0 0 10px #FF5733, 0 0 5px #FF5733"
            template={
              // Custom loader elements with transitions and animations
              '<div className="bar" role="bar"><div className="peg"></div></div>' +
              '<div className="spinner" role="spinner"><div className="custom-spinner-icon"></div></div>'
            }
            zIndex={1600}
            showAtBottom={false}
          />
          <Component {...pageProps} />
          <Footer />
          <ScrollToTop smooth />
        </SnackbarContextProvider>
      </SessionProvider>
    </ReduxProvider>
  );
};

export default App;
