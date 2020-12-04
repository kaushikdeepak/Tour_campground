var mongoose =require("mongoose"),
    Campground=require("./models/campground"),
    Comment=require("./models/comment");



var data=[
     {
        name:"Cloud's Rest",
        image:"https://newhampshirestateparks.reserveamerica.com/webphotos/NH/pid270015/0/540x360.jpg",
        descriptions:"Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book. It usually begins with:"
    },
    {   
        name:"Tent House",
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTaZA9BsLbDb4xmpjtVCBCDjBf7fG6rpbMf6o9-OFLIPy3IA2tI&usqp=CAU",
        descriptions:"blah Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book. It usually begins with:blah2  blh...."
    },
    {   
        name:"Adventure beneath sunset",
        image:"https://punenightlife.files.wordpress.com/2018/11/img_3832.jpg?w=371&h=278.files.wordpress.com/2018/11/img_3832.jpg?w=371&h=278.files.wordpress.com/2018/11/img_3832.jpg?w=371&h=278.https://images.app.goo.gl/gFTRpZGcz1HGmbSf6reserveamerica.com/webphotos/NH/pid270015/0/540x360.jpg",
        descriptions:"blLorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book. It usually begins with:ah blah3 blh...."
    }
]
function seedDB(){
    Campground.deleteMany({},function(err){
        if(err){
            console.log(err);
        }
        console.log("Removed campgrounds");
    /*    data.forEach(function(seed){
            Campground.create(seed,function(err,campground){
                if(err){
                    console.log(err);
                }
                else{
                    console.log("added a campground")
                    //Create a comment
                    Comment.create(
                        {
                            text:"This place is great",
                            author:"deep"
                        },function(err,comment){
                            if(err){
                               console.log(err);
                            }else{
                                campground.comments.push(comment);
                                campground.save();
                               // console.log("created new comments");
                            }
                        });
                }
            });
        });
        */
    });
}

module.exports =seedDB;