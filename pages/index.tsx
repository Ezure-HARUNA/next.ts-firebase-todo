import { useState, useEffect } from "react";
import Link from "next/link";
import Layout from "../components/Layout";
import { db } from "../src/lib/firebase";

const IndexPage: React.FC = () => {
  const [tasks, setTasks] = useState([{ id: "", title: "" }]);
  useEffect(() => {
    const nuSub = db.collection("tasks").onSnapshot((snapshot) => {
      setTasks(
        snapshot.docs.map((doc) => ({ id: doc.id, title: doc.data().title }))
      );
    });
    return () => unSub();
  }, []);
  return (
    <Layout title="Home | Next.js + TypeScript Example">
      <p>
        <div>
          {tasks.map((task) => {
            task.title;
          })}
        </div>
        <Link href="/about">
          <a>About</a>
        </Link>
      </p>
    </Layout>
  );
};

export default IndexPage;
