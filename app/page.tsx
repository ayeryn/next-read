// import ProductCard from "./components/ProductCard/ProductCard";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className="w-full flex flex-col justify-center items-center">
        <h1 className="text-primary text-3xl font-bold my-5">
          What is your next read?
        </h1>
        <p>Welcome to your personal reading planner!</p>
      </div>
    </main>
  );
}
