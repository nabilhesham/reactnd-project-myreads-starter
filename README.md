# MyReads Project

MyReads Project is a library for books, Users can search for books and add the books to sheves.

To get started developing right away:

## Starting the project for Development
* install all project dependencies with `npm install`
* start the development server with `npm start`


## configure the project for Deployment
* build deployment server with `npm build`

## Project Contents
```bash

The MyReads Project is developed with React.


## Shelves
* 'Currently Reading'
* 'Want To Read'
* 'Read'

## React Components
* BookCard: 
    Contains the change shelf method and book card UI
* BookList: 
    Contains the list of book devided by shelves
* BookSearch: 
    Contains input to book search

```

## MyReads Backend Methods
### `update`

Method Signature:

```js
update(book, shelf)
```

* book: `<Object>` containing at minimum an `id` attribute
* shelf: `<String>` contains one of ["wantToRead", "currentlyReading", "read"]  
* Returns a Promise which resolves to a JSON object containing the response data of the POST request

### `search`

Method Signature:

```js
search(query)
```

* query: `<String>`
* Returns a Promise which resolves to a JSON object containing a collection of a maximum of 20 book objects.
* These books do not know which shelf they are on. They are raw results only. You'll need to make sure that books have the correct state while on the search page.

## Important
The backend API uses a fixed set of cached search results and is limited to a particular set of search terms, which can be found in [SEARCH_TERMS.md](SEARCH_TERMS.md). That list of terms are the _only_ terms that will work with the backend, so don't be surprised if your searches for Basket Weaving or Bubble Wrap don't come back with any results.
