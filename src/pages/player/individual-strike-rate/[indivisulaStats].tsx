import Head from "next/head";
import styles from "../../../styles/Home.module.css";

import { useRouter } from "next/router";
import Header from "@/components/Header";
import Navigation from "@/components/Navigation";
import IndividualStats from "@/components/IndivisualStats";
import Footer from "@/components/Footer";

function filterByValue(player, nameOfPlayer) {
  return player.filter((name) => name.batsman === nameOfPlayer);
}

export default function IndividualDetails({ data }) {
  const router = useRouter();
  const name = router.query.indivisulaStats;
  let playerDetails = filterByValue(data, name)[0];
  return (
    <>
      <div className={styles.container}>
        <Head>
          <title>IPL Dashboard</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className={styles.main}>
          <Header
            content="Individual player details"
            description="Most runs and average strikerate of an individual"
          />
          <Navigation home="/" goBack="/players" />
          <IndividualStats individualDetails={playerDetails} />
        </main>

        <Footer />
      </div>
    </>
  );
}

export async function getServerSideProps() {
  const res = await fetch(
    `https://young-wildwood-83401.herokuapp.com/most_runs_average_strikerate`
  );
  const data = await res.json();

  if (!data) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return {
    props: {
      data,
    }, // will be passed to the page component as props
  };
}
