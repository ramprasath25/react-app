export function createBook(book) {
	return {
		//Action name
		type: 'add_book',
		payload: book
	}
}