class facebookDetails{

   
    constructor( public videoTitle : string ,public videoLength: number ,public videoPublishedOn : string ,public videoPublishedBy :string , public baseurl:string ,public lifeEvents?:number ,public NumberofDislike?:number ,public NumberofComments?:number)
    
    {
        this.videoTitle = videoTitle ;
        this.videoLength= videoLength ;
        this.videoPublishedOn =videoPublishedOn ;
        this.videoPublishedBy =videoPublishedBy ;
       
        this.baseurl=baseurl ;
        
        this.NumberofDislike=NumberofDislike ;
        this.NumberofComments=NumberofComments;
    
    } //end of constructor
    
   


    }

    class IMAGINE_DRAGON extends facebookDetails{


    constructor( public videoTitle : string ,public videoLength: number ,public videoPublishedOn : string ,public videoPublishedBy :string , public baseurl:string ,public numberOfView?:number ,public NumberofDislike?:number ,public NumberofComments?:number){
        super(videoTitle,videoLength,videoPublishedOn,videoPublishedBy,baseurl);
    }
 // method
    getvideoTitle = () => {
        return this.videoTitle
    }
   
    getvideoLength = () => {
        return this.videoLength
    }
   
    getvideoPublishedOn = () => {
        return this.videoPublishedOn
    }
    getvideoPublishedBy = () => {
        return this.videoPublishedBy
    }

        getbaseurl = () => {
            let link="/watch?v=hXQxSi34GWY";
        return this.baseurl+link
    }
    getnumberOfView = () => {
        
    return this.numberOfView
}


}

    let video = new IMAGINE_DRAGON("Believer - Imagine Dragons - Fingerstyle Guitar Cover",4,"Jul 29, 2017","Eddie Van","https://www.youtube.com/")
   console.log(`Heading:${video.getvideoTitle()}\n VIDEO LENGTH: ${video.getvideoLength()}min \n PUBLISHED ON :${video.getvideoPublishedOn()}\n PUBLISHED BY :${video.getvideoPublishedBy()}\n URL :${video.getbaseurl()}`)