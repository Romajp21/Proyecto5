const path =require('path')

const express=require('express')


const app= new express()
//const {config, engine}=require('express-edge')
//Automatically sets view engine and adds dot notation to app.render

//app.use(engine);
//app.set('views',`${__dirname}/views`);


app.get('/',(req,res) => {
res.sendFile(path.resolve(__dirname,'pantallas/index.html'))

})

app.get('/ingresar',(req,res) => {
    res.sendFile(path.resolve(__dirname,'pantallas/ingresar.html'))
    
    })


app.get('/editar',(req,res) => {
        res.sendFile(path.resolve(__dirname,'pantallas/editar.html'))
        
        })

app.get('/editar',(req,res) => {
    res.sendFile(path.resolve(__dirname,'pantallas/borrar.html'))
            
    })
    


app.listen(4000,() =>{
    console.log('Aplicacion corriendo en el puerto 4000')
})