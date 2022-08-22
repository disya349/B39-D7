const express = require('express')

const app = express()
const port = 1000

app.set('view engine', 'hbs')
app.use('/assets', express.static(__dirname + '/assets'))
app.use(express.urlencoded({extended: false}))

app.get('/', function(request, response){
    response.render('index')
})

app.get('/contact', function(request, response){
    response.render('/contact')
})

app.get('/blog-detail/:id', function(request, response){    
    let id = request.params.id
    console.log(id);

    response.render('blog-detail', {
        id,
        title: 'Hello World',
        content: 'lorem ipsum',
        author: 'Dicki Syafrudin',
        postAt: '18 Agustus 2022'
    })
})

app.get('/add-project', function(request, response){
    response.render('add-project')
})

app.post('/add-project', function(request, response){
    let title = request.body.inputName
    let content = request.body.inputMessage

    console.log(title)
    console.log(content)

    response.redirect('/')
})

app.listen(port, function(){
    console.log(`Server running on port ${port}`);
})