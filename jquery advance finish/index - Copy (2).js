

$(document).ready(() => {

   $('#get-data1').click((e)=>{

getAllData (e); 

  
})

}); // end of document.ready()

let getAllData = (e) => {

 e.preventDefault();

    
   let TITLE = $('#title').val();
    $.ajax({
        type: 'GET', // request type GET, POST, PUT
        dataType: 'json', // requesting datatype
        url: 'http://www.omdbapi.com/?i=tt3896198&apikey=9514ea30', // URL of getting data
        success: (data) => { // in case of success response
            
            console.log(data)
            
            

           

            if (data.Title == TITLE|| data.Year == TITLE|| data.imdbID == TITLE ) {
                

                $('#tit').append(data.Title)

                $('#year').append(data.Year)
                
                $('#writer').append(data.Writer)

                $('#released').append(data.Released)

                $('#runtime').append(data.Runtime)

                $('#genre').append(data.Genre)


               $('#image').append('<img src="'+data.Poster+'"/>')


               $('#rate').append(data.Rated)
            
            
            
            $('#dir').append(data.Director)
          
            $('#act').append(data.Actors)
            $('#pl').append(data.Plot)
            $('#lan').append(data.Language)
            $('#con').append(data.Country)
            $('#aw').append(data.Awards)
            $('#mscor').append(data.Metascore)
            $('#irat').append(data.imdbRating)
            $('#ivot').append(data.imdbVotes)
            $('#iid').append(data.imdbID)
            $('#typ').append(data.Type)
            $('#dv').append(data.DVD)
            $('#box').append(data.BoxOffice)
            $('#prod').append(data.Production)
            $('#webs').append(data.Website)
          


         for(x of data.Ratings){

                 let tempRow = ` <div class="row">
                                     <div class="col-6" style="text-align: center;">${x.Source}</div>
                                     <div class="col-6" style="text-align: center;">${x.Value}</div>
                                </div>`

                 $("#showData").append(tempRow); // placing data in division with id - 'showData'
            }






           }

            
             else{

                alert("some error occured")
             }
           
        },
       

        beforeSend: () => { // while request is processing.

            // you can use loader here.
            alert("request is being made. please wait")

        },
        complete: () => {

            // what you want to do while request is completed
            alert("data fetched success")

        },

        timeout:3000 // this is in milli seconds

    }); // end of AJAX request

} // end of getAllData

