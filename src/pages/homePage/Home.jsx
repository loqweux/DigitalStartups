import React from "react";
import { useGetPostsQuery } from "../../store/postsApi";
import styles from "./home.module.scss";

const Home = () => {
  const { data: posts, error, isLoading } = useGetPostsQuery();

  if (isLoading) return <p>Загрузка...</p>;
  if (error) return <p>Ошибка при получении постов</p>;

  return (
    <div className={styles.homeContainer}>
      {posts.map((post) => (
        <div key={post.id} className={styles.postCard}>
          <div className={styles.imagePlaceholder}></div>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
};

export default Home;
