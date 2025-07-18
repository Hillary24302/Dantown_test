const BookmarkPage = () => {
  const book = [
    { name: 'Redeeming Love', author: 'Francine Rivers' },
    { name: 'White Chocolate Moment', author: 'Lori Wick' },
    { name: 'Purple Hibiscus', author: 'Chimamanda Ngozi Adichie' },
    { name: 'Divine', author: 'Karen Kingsbury' },
    { name: 'Vampire Academy', author: 'Richelle Mead' },
  ];

  return (
    <div>
      <h2>Bookmarked Books:</h2>
      <ul>
        {book.map((b, index) => (
          <li key={index}>
            <strong>{b.name}</strong> by {b.author}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookmarkPage;
