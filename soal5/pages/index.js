import Link from "next/link";
import React from "react";

function HomePage({ books }) {
  const flattenedBooks = books.flat();

  return (
    <>
      <h1>Pilih Buku:</h1>
      <ul>
        {flattenedBooks.map((book) => (
          <li key={book.id}>
            <Link href={`/book-detail/${book.id}`}>{book.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}

export const getStaticProps = async () => {
  /*
    Beberapa API KEY yang dapat digunakan jika salah satunya terkena limit.
    API KEY 1 = 72f207b022d74aafb79ba6def6fd9d65
    API KEY 2 = 9eb58e43ca4a4fe2835d891adb6d2a77
   */
  const response = await fetch(
    "https://api.bigbookapi.com/search-books?api-key=72f207b022d74aafb79ba6def6fd9d65&query=folklore"
  );

  const data = await response.json();

  return { props: { books: data.books } };
};

export default HomePage;
