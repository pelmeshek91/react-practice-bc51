// export const App = () => {
//   return (
//     <div
//       style={{
//         height: '100vh',
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         fontSize: 40,
//         color: '#010101'
//       }}
//     >
//       React homework template
//     </div>
//   );
// };

const favouriteBooks = [
  { id: 'id-1', name: 'JS for beginners' },
  { id: 'id-2', name: 'React basics' },
  { id: 'id-3', name: 'React Router overview' },
  { id: 'id-4', name: 'Redux in depth' },
];

const BookList = ({ books }) => {
  return (
    <ul>
      {books.map(book => (
        <li>{book.name}</li>
      ))}
    </ul>
  );
};

export const App = () => {
  return (
    <div>
      <BookList books={favouriteBooks} />
    </div>
  );
};
