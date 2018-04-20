$( document ).ready(function() { 

    var myFacebookToken = 'EAACEdEose0cBAEDcjNb86JyOd7ZB31eBho0fNh2e4fwwJi0LTztaSuTZCP9Ty8gKBJyDYGNU9D9iRbgnQlyi2h9KhjPf3LZCc6UNqIBWzIBxgRucbZBrVxwF4IlCjMsh06uszsXrN4TpuWBlLGZCmxrUYAtVjdyLyLRPaGyDhZCE77tnjGobjmcZB2kPQcetE8LyqvHA7Hh1wZDZD'; 

    function getFacebookInfo(){ 

        $.ajax('https://graph.facebook.com/me?access_token='+myFacebookToken,{ 

                success : function(response){ 
                    console.log(response); 
                    console.log(typeof(response)); 
                      $("#myProfileId").html('<a target="blank" href="https://facebook.com/'+response.id+'">https://facebook.com/'+response.id+'</a>'); 
                      $("#myName").text(response.name); 
                      $("#myEmail").text(response.email); 
                      $("#myHometown").text(response.hometown.name); 
                      $("#myLocation").text(response.location.name); 
                      for(i in response.education) 
                    { 
                         console.log(response.education[i].school.name); 
                          $("#mySchool").append(response.education[i].school.name); 


                    }  
                  } 
                                    
            } 

        ); 

   } 
    $("#facebookBtn").on('click',getFacebookInfo) 

  }); 

(function(){ 
    $.getJSON("https://graph.facebook.com/237173582992285/feed?access_token=EAACEdEose0cBAFx2zQibu2Ylnic3BSZCO16GNzS29eMheeZCGwB2n3wydIbIlyrE23fB0cFNVJ3vByIjl4QjtL9qYtHAaf8FJwZBKgUF3mNZBCT3LGtarOOs4hTGavqFc4FRhhU5znePaJnL3c3TjCwWMvbhlR6HTbEgCl4tO30D1xhTN1m5vI7ZAemWbmMmaDQPXbYPzRQZDZD", function(results){ 
        console.log(results); 
    }); 
})(); 
