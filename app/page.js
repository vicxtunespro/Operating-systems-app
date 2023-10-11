import TopicsCard from "./Components/topicsCard";
import topics from "./App-data/topics";

export default function Home() {
  return (
    <main>
      <div className="topics-row">
        {topics.map((topic) => (
          <TopicsCard
          title = {topic.title}
          description={topic.description}
          image={topic.image}
          />
        ))}
      </div>
    </main>
  )
}

