# Google Books

## Important Links

- [Getting Started][1]
- [Developer's Guide][2]
- [Embedded Viewer API][3]
- [Using the API][4]

## Request

- [Standard query parameters][5]

### Performing Search

The request has a single required parameter `q`:

`GET https://www.googleapis.com/books/v1/volumes?q=search+terms`

- `intitle`: returns results where the text following this keyword is found in the title.
- `inauthor`: returns results where the text following this keyword is found in the author.
  - `/volumes?q=flowers+inauthor:keyes`
- `inpublisher`: returns results where the text following this keyword is found in the publisher.
- `subject`: returns results where the text following this keyword is listed in the category list of the volume.
- `isbn`: returns results where the text following this keyword is the ISBN number.
- `lccn`: returns results where the text following this keyword is the Library of Congress Control Number.
- `oclc`: returns results where the text following this keyword is the Online Computer Library Center number.

### Filtering

Use the `filter` parameter to restrict the returned results further by setting it to one of the following values:

- `partial`: returns results where at least parts of the text are previewable.
- `full`: only returns results where all of the text is viewable.
- `free-ebooks`:only returns results that are free Google eBooks.
- `paid-ebooks`: only returns results that are Google eBooks with a price.
- `ebooks`: only returns results that are Google eBooks, paid or free.

For example - restricts search results to those available as free eBooks:

`GET https://www.googleapis.com/books/v1/volumes?q=flowers&filter=free-ebooks&key=yourAPIKey`

### Pagination

You can paginate the volumes list by specifying two values in the parameters for the request:

- `startIndex`: the position in the collection at which to start. The index of the first item is `0`.
- `maxResults`: the maximum number of results to return.
  - The default is 10
  - The max is 40

### Print Type

- `books` (this is what we will use for the purpose of this application)
- `magazines`
- `all`

### Sorting

By default, a volumes search request returns `maxResults` results, where `maxResults` is the parameter used in pagination, ordered by **relevance to search terms**.

You can change the ordering by setting the `orderBy` parameter to be one of these values:

- `relevance`: returns results in order of the relevance of search terms (default)
- `newest`: in order of most recently to least recently _published_.

The following example lists results by published date, newest to oldest:

`GET https://www.googleapis.com/books/v1/volumes?q=flowers&orderBy=newest`

## Response

### Sample

```json
200 OK

{
 "kind": "books#volumes",
 "items": [
  {
   "kind": "books#volume",
   "id": "_ojXNuzgHRcC",
   "etag": "OTD2tB19qn4",
   "selfLink": "https://www.googleapis.com/books/v1/volumes/_ojXNuzgHRcC",
   "volumeInfo": {
    "title": "Flowers",
    "authors": [
     "Vijaya Khisty Bodach"
    ],
   ...
  },
  {
   "kind": "books#volume",
   "id": "RJxWIQOvoZUC",
   "etag": "NsxMT6kCCVs",
   "selfLink": "https://www.googleapis.com/books/v1/volumes/RJxWIQOvoZUC",
   "volumeInfo": {
    "title": "Flowers",
    "authors": [
     "Gail Saunders-Smith"
    ],
    ...
  },
  "totalItems": 2
}
```

### IDs

- **Volume IDs**: **unique strings** given to each volume that Google Books knows about.
  - `id` field
- Bookshelf IDs
- User ID

### Projection

Use `projection` parameter with one of the following values to specify a predefined set of Volume fields to return.

- `full`: returns all volume fields.
- `lite`: returns only [certain fields][6]
  - This should suffice for our project. See doc link above for details.
  - `GET https://www.googleapis.com/books/v1/volumes?q=flowers&projection=lite`

## URLs

[1]: https://developers.google.com/books/docs/v1/getting_started
[2]: https://developers.google.com/books/docs/viewer/developers_guide
[3]: https://developers.google.com/books/docs/viewer/reference
[4]: https://developers.google.com/books/docs/v1/using
[5]: https://developers.google.com/books/docs/v1/using#st_params
[6]: https://developers.google.com/books/docs/v1/reference/volumes#resource
