import React from "react";

const Page = (props) => {
  const { book } = props;

  return (
    <div>
      <h1>Detail Buku</h1>
      <p>{`Judul: ${book.title}`}</p>
      <p>{`Penulis: ${book.authors
        .map((author) => author.name)
        .join(", ")}`}</p>
      <p>{`Tahun Terbit: ${book.publish_date}`}</p>
    </div>
  );
};

export const getStaticPaths = async () => {
  /*
    Beberapa API KEY yang dapat digunakan jika salah satunya terkena limit.
    API KEY 1 = 72f207b022d74aafb79ba6def6fd9d65
    API KEY 2 = 9eb58e43ca4a4fe2835d891adb6d2a77
    API KEY 3 = 220019d1f068447da9c687e72e1a91d6
   */
  const response = await fetch(
    "https://api.bigbookapi.com/search-books?api-key=72f207b022d74aafb79ba6def6fd9d65&query=folklore"
  );
  const data = await response.json();

  const flattenedBooks = data.books.flat();

  const paths = flattenedBooks.map((book) => ({
    params: { bookId: `${book.id}` },
  }));

  return { paths, fallback: true };
};

export const getStaticProps = async (context) => {
  const { bookId } = context.params;
  /*
    Beberapa API KEY yang dapat digunakan jika salah satunya terkena limit.
    API KEY 1 = 72f207b022d74aafb79ba6def6fd9d65
    API KEY 2 = 9eb58e43ca4a4fe2835d891adb6d2a77
    API KEY 3 = 220019d1f068447da9c687e72e1a91d6
   */
  const response = await fetch(
    `https://api.bigbookapi.com/${bookId}?api-key=72f207b022d74aafb79ba6def6fd9d65`
  );

  const data = await response.json();

  return { props: { book: data } };
};

export default Page;
