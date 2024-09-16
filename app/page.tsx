// import ProductCard from "./components/ProductCard/ProductCard";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <h1 className="text-primary text-4xl font-bold">
        What is your next read?
      </h1>
      <p>Welcome to your personalized reading list!</p>
      {/* <ProductCard /> */}
    </main>
  );
}
