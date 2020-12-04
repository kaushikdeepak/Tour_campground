var Campground=require("../models/campground")
var Comment=require("../models/comment");
var middlewareObj={};

middlewareObj.checkCampgroundOwnership = function(req,res,next){
        if(req.isAuthenticated()){
            Campground.findById(req.params.id,function(err,foundCampground){
                if(err){
                    req.flash("error","Campground ot found !!!");
                    res.redirect("back");
                }else{
                    //does user own the campground??
                    if(foundCampground.author.id.equals(req.user._id)){
                        //res.render("campgrounds/edit",{campground:foundCampground});
                        next();
                    }else{
                        req.flash("error","You not have permission to do that!!!");
                        res.redirect("back");
                    }	
                }
            });
        }else {
            //console.log("You NEED TO BE LOGGED IN TO DO THAT !!!");
            //res.send("You NEED TO BE LOGGED IN TO DO THAT !!!");
            req.flash("error","You need to be logged in to do that!!!");
            res.redirect("back");
        }
}

middlewareObj.checkCommentOwnership =function(req,res,next){
	if(req.isAuthenticated()){
		Comment.findById(req.params.comment_id,function(err,foundComment){
			if(err){
				res.redirect("back");
			}else{
				//does user own the comment??
				if(foundComment.author.id.equals(req.user._id)){
					//res.render("campgrounds/edit",{campground:foundCampground});
					next();
				}else{
                    req.flash("error","You dont have permission to do that!!!");
					res.redirect("back");
				}	
			}
		});
	}else {
		//console.log("You NEED TO BE LOGGED IN TO DO THAT !!!");
        //res.send("You NEED TO BE LOGGED IN TO DO THAT !!!");
        req.flash("error","You need to be logged in to do that!!!");
		res.redirect("back");
	}
}

middlewareObj.isLoggedIn = function(req,res,next){
    if(req.isAuthenticated()){
        return next();
    }
    req.flash("error","You need to be logged in to do that!!!");
    res.redirect("/login");
}
module.exports = middlewareObj