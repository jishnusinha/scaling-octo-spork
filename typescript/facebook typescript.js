var facebookDetails = /** @class */ (function () {
    function facebookDetails(Work_Education, places_YouHaveLived, contact_andBasicInfo, family_andRelationship, detailsAboutYou, lifeEvents) {
        var _this = this;
        this.Work_Education = Work_Education;
        this.places_YouHaveLived = places_YouHaveLived;
        this.contact_andBasicInfo = contact_andBasicInfo;
        this.family_andRelationship = family_andRelationship;
        this.detailsAboutYou = detailsAboutYou;
        this.lifeEvents = lifeEvents;
        // method
        this.getWork_Education = function () {
            return _this.Work_Education;
        };
        this.getplaces_YouHaveLived = function () {
            return _this.places_YouHaveLived;
        };
        this.getcontact_andBasicInfo = function () {
            return _this.contact_andBasicInfo;
        };
        this.getfamily_andRelationship = function () {
            return _this.family_andRelationship;
        };
        this.getdetailsAboutYou = function () {
            return _this.detailsAboutYou;
        };
        this.Work_Education = Work_Education;
        this.places_YouHaveLived = places_YouHaveLived;
        this.contact_andBasicInfo = contact_andBasicInfo;
        this.family_andRelationship = family_andRelationship;
        this.detailsAboutYou = detailsAboutYou;
        this.lifeEvents = lifeEvents;
    } //end of constructor
    return facebookDetails;
}());
var education = { graduation: "ASANSOL ENGINEERING COLLEGE", PLUS_TWO: "SHANTINAGAR VIDYA MANDIR" };
var contact = { "date_of_birth": "17 th september", "year_of_birth": 1994, gender: "male", language: "bengali,english,hindi" };
var video = new facebookDetails(education, "ASANSOL", contact, "Single");
console.log("work and education:\n GRADUATION:" + video.getWork_Education().graduation + "\n PLUS TWO " + video.getWork_Education().PLUS_TWO + "\n\n   \n    \n LIVED ON :" + video.getplaces_YouHaveLived() + " \n CONTACT:\n date of birth:" + video.getcontact_andBasicInfo().date_of_birth + "\n year of birth:" + video.getcontact_andBasicInfo().year_of_birth + " \n language:" + video.getcontact_andBasicInfo().language + "\nSTATUS:" + video.getfamily_andRelationship());
