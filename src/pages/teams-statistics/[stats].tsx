import Head from "next/head";

import styles from "@/styles/Home.module.css";

import { useRouter } from "next/router";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";
import TeamDetailsTable from "@/components/TeamDetailsTable";

function filterByValueTeam(teams, teamName) {
  return teams.filter((team) => team.team === teamName);
}

export default function TeamsStatisticsPage({ data }: any) {
  const router = useRouter();

  const teamName = router.query.stats;

  let teamDetails = filterByValueTeam(data, teamName)[0];
  return (
    <div className={styles.container}>
      <Head>
        <title>IPL DashBoard</title>
        <link rel="icon" href="favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Header
          content="Team Statistics"
          description="Individual Performance and stats"
        />
        <Navigation home="/" goBack="/teams" />
        <TeamDetailsTable teamDetails={teamDetails} />
      </main>

      <Footer />
    </div>
  );
}
export async function getServerSideProps(context: any) {
  const res = await fetch(
    "https://young-wildwood-83401.herokuapp.com/teams_home_and_away_statistics"
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
    },
  };
}
