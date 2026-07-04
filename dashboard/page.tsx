import FactionCard from "@/components/FactionCard";
import QuestCard from "@/components/QuestCard";

export default function Dashboard() {

  return (

    <main>

      <h1>Ledgira Dashboard</h1>

      <FactionCard />

      <QuestCard quests={248} />

    </main>

  );

}
