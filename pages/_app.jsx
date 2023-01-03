import "../styles/globals.css";

import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/router";
import { Toaster } from "react-hot-toast";

function MyApp({ Component, pageProps, router }) {
  const routerHook = useRouter();

  return (
    <div className="font-roboto text-white relative bg-slate-800">
      <AnimatePresence mode={"wait"}>
        <div className="absolute top-20 right-0">
          <Toaster position="bottom-right" />
        </div>
        <Component {...pageProps} key={router.asPath} />
      </AnimatePresence>
    </div>
  );
}

export default MyApp;
