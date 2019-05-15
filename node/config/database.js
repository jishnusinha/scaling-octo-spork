if(process.env.NODE_ENV === 'production'){
    module.exports = {mongoURI :'mongodb://<dbuser>:<dbpassword>@ds041546.mlab.com:41546/auth'}
}else {
    module.exports = {mongoURI : 'mongodb://localhost/auth'}
}