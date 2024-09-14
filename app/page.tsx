// import BookCard from "./components/BookCard";
import ProductCard from "./components/ProductCard/ProductCard";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
      <main className={styles.main}>
        <h1 className="bg-primary">Next Read</h1>
        <p>Welcome to your personalized reading list!</p>
        {/* <BookCard /> */}
        <Link href="/users">Users</Link>
        <Link href="/books">Books</Link>
        <ProductCard />
      </main>
  );
}