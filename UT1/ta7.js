const books=[
    {
        title:'Book',
        author:'Name'
    },
    {
        title:'Book2',
        author: 'Name2'
    },
    { title:'Book3',
        author: 'Name3'}
]

function getTheTitles(books , arreglo){
    return books.map(book=> book.title)
}