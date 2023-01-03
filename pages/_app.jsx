import "../styles/globals.css";

import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/router";

function MyApp({ Component, pageProps, router }) {
  const routerHook = useRouter();

  return (
    <div className="font-roboto text-white relative bg-slate-800">
      <AnimatePresence mode={"wait"}>
        <Component {...pageProps} key={router.asPath} />
      </AnimatePresence>
    </div>
  );
}

export default MyApp;
