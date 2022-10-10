import { useTheme } from "next-themes";
import Head from "next/head";
import { useEffect, useState } from "react";
import Formulair from "../components/Formulair";
import Coach from "../components/Coach";
import FAQ from "../components/FAQ";
import Data from "../seeds/data.json";

export default function Home() {
  // Dark Mode
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) return null;
  return (
    <div className=" dark:bg-black/75">
      <Head>
        <title>Formation de Suture</title>
      </Head>

      <Formulair form={Data.form} />

      <Coach coach={Data.coach} />
      <FAQ />
    </div>
  );
}
