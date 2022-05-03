export class NatureClub{
    public id:String="";
    constructor(
        public name:String, 
        public surname:String,  
        public email:String,
        public grade:number,
        public allergy:String[],
        public activity:{
            year:String,
            title:String,
            type:String,
        }[]
    ){

    }
}