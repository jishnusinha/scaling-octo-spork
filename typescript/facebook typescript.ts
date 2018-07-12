class facebookDetails{

   
    constructor( public Work_Education : any ,public places_YouHaveLived: string ,public contact_andBasicInfo : any ,public family_andRelationship :string ,public detailsAboutYou?:string ,public lifeEvents?:string)
    
    {
        this.Work_Education = Work_Education ;
        this.places_YouHaveLived= places_YouHaveLived ;
        this.contact_andBasicInfo =contact_andBasicInfo ;
        this.family_andRelationship =family_andRelationship ;
        this.detailsAboutYou=detailsAboutYou ;
        this.lifeEvents=lifeEvents ;
      
    
    } //end of constructor
    
    // method
    getWork_Education = () => {
        return this.Work_Education
    }
   
    getplaces_YouHaveLived = () => {
        return this.places_YouHaveLived
    }
   
    getcontact_andBasicInfo = () => {
        return this.contact_andBasicInfo
    }
    getfamily_andRelationship = () => {
        return this.family_andRelationship
    }

    getdetailsAboutYou = () => {
        return this.detailsAboutYou
    }


    }
    
    let education={graduation:"ASANSOL ENGINEERING COLLEGE",PLUS_TWO :"SHANTINAGAR VIDYA MANDIR"}
    let contact={"date_of_birth":"17 th september","year_of_birth":1994,gender:"male",language:"bengali,english,hindi"}
    let video = new facebookDetails(education, "ASANSOL" ,contact,"Single")
   console.log(`work and education:\n GRADUATION:${video.getWork_Education().graduation}\n PLUS TWO ${video.getWork_Education().PLUS_TWO}\n
   
    \n LIVED ON :${video.getplaces_YouHaveLived()} \n CONTACT:\n date of birth:${video. getcontact_andBasicInfo(). date_of_birth}\n year of birth:${video. getcontact_andBasicInfo(). year_of_birth} \n language:${video.getcontact_andBasicInfo().language}\nSTATUS:${video. getfamily_andRelationship()}`)