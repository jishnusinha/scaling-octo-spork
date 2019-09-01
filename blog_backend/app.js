const Express = require("express");
const Mongoose = require("mongoose");
const BodyParser = require("body-parser");

var app = Express();

Mongoose.connect("mongodb://blogadmin:blogadmin123@ds117816.mlab.com:17816/blogdb")
.then(()=> console.log('coonected to mongodb'))
.catch(err => console.error('cound not connect to mongodb',err));

const BlogModel = Mongoose.model("person", {
    name: String,
    content: String,
    like:Number,
    comment:String
});


app.use(BodyParser.json());
app.use(BodyParser.urlencoded({ extended: true }));

app.post("/write", async (request, response) => {
    try {
        var blog = new BlogModel(request.body);
        var result = await blog.save();
        response.send(result);
    } catch (error) {
        response.status(500).send(error);
    }
});
app.get("/allarticles", async (request, response) => {
    try {
        var result = await BlogModel.find().exec();
        response.send(result);
    } catch (error) {
        response.status(500).send(error);
    }


});
app.get("/allarticles/:author", async (request, response) => {
    try {
        var blog = await BlogModel.findById(request.params.id).exec();
        response.send(blog);
    } catch (error) {
        response.status(500).send(error);
    }
});
app.put("/person/:id", async (request, response) => {
    try {
        var blog = await BlogModel.findById(request.params.id).exec();
        blog.set(request.body);
        var result = await blog.save();
        response.send(result);
    } catch (error) {
        response.status(500).send(error);
    }
});
app.delete("/allarticles/:id", async (request, response) => {
    try {
        var result = await BlogModel.deleteOne({ _id: request.params.id }).exec();
        response.send(result);
    } catch (error) {
        response.status(500).send(error);
    }

});



app.listen(3000, () => {
    console.log("Listening at :3000...");
});
 