# Test CAP namespace

## Which is the default namespace?
cds load the `.cds` files alpha ordered, the namespace defined in the first file became the default namespace.

So please always specify the namespace during entities access, otherwise a new cds file could broke everything.

## This example
The are two cds files `dog.cds` and `cat.cds`, the `dog.cds` is the first file loaded so `my.dog` is the default namespace. Both cds contains a single entity with name `Books`.

In `test.http` there are three examples of three different functions implemented in the three different ways.

## How to read from namespaces?

### If not namespace specified, read from default `my.dog`:
```
let books = await SELECT.from(Books);
```

### Specifing namespace in cds.entities:
```
let {Books} = cds.entities('my.cat')
let books = await SELECT.from(Books);
```

### Specifing namespace in from clause:
```
let books = await SELECT.from('my.cat.Books');
```
