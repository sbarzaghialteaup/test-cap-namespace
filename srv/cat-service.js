module.exports = (say) => {

    say.on("readDefaultNamespace", async (req) => {

        let books = await SELECT.from('Books');
    
        return JSON.stringify(books,null,2);
    })

    say.on("readWithNamespaceInEntities", async (req) => {
        let {Books: BooksEntity} = cds.entities('my.cat')

        let books = await SELECT.from(BooksEntity);
        
        return JSON.stringify(books,null,2);
    })
    
    say.on("readNamespaceInFrom", async (req) => {
        let books = await SELECT.from('my.cat.Books');
    
        return JSON.stringify(books,null,2);
    })

}
