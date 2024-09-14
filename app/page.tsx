// import BookCard from "./components/BookCard";
import ProductCard from "./components/ProductCard/ProductCard";
import styles from "./page.module.css";
// import Link from "next/link";

export default function Home() {
  return (
      <main className={styles.main}>
        <h1>Next Read</h1>
        {/* <Link href="/users">Users</Link> */}
        <p>Welcome to your personalized reading list!</p>
        {/* <BookCard /> */}
        <ProductCard />
      </main>
  );
}