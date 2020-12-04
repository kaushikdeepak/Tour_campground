////====================
//// CoMMENTS ROUTES
////====================
var express = require("express");
var router = express.Router({mergeParams:true});
var Campground=require("../models/campground")
var Comment=require("../models/comment");
var middleware =require("../middleware");
router.get("/new",middleware.isLoggedIn,function(req,res){
	// find campground by id
	Campground.findById(req.params.id,function(err,campground){
		if(err){
			console.log(err);
		}else{
			res.render("comments/new",{campground:campground});
		}
	})
});

router.post("/",middleware.isLoggedIn,function(req,res){
	//lookup campground using Id
	Campground.findById(req.params.id,function(err,campground){
		if(err){
			console.log(err);
			res.redirect("/campgrounds");
		}else{
			//console.log(rq.body.comment);
			Comment.create(req.body.comment,function(err,comment){
				if(err){
					req.flash("error","Something get wrong!!!");
					console.log(err);
				}
				else{
					// add username and id to comment
					//console.log("New comments by :" + req.user.username);
					comment.author.id = req.user._id;
					comment.author.username = req.user.username;
					comment.save();
					campground.comments.push(comment);
					campground.save();
					//console.log(comment);
					req.flash("success","successfully added comment");
					res.redirect('/campgrounds/' + campground._id);
				}
			});
		}		
	});
	//create new comment
	//connect new comment to campground
	//redirect campground show page 
});


///#### comment edit routes 
router.get("/:comment_id/edit",middleware.checkCommentOwnership,function(req,res){
	//res.send("EDIT ROUTES!!!");
	//req.params.id
	Comment.findById(req.params.comment_id,function(err,foundComment){
		if(err){
			res.redirect("back");
		}
		else{
			res.render("comments/edit",{campground_id:req.params.id,comment:foundComment});
		}
	})
	
});

///###### comment update #####
router.put("/:comment_id",middleware.checkCommentOwnership,function(req,res){
	//find and update the correct campground
	Comment.findByIdAndUpdate(req.params.comment_id,req.body.comment,function(err,updatedcomment){
		if(err){
			res.redirect("back");
		}else{
			res.redirect("/campgrounds/"+req.params.id);
		}
	})
	//res.send("U hit the comment update route");
	//redirect somewhere(show page)
});

//.Destroy routes


router.delete("/:comment_id",middleware.checkCommentOwnership,function(req,res){
	//res.send("U r tyr: ");
	Comment.findByIdAndRemove(req.params.comment_id,function(err){
		if(err){
			res.redirect("back");
		}else{
			req.flash("success","Successfully deleted the comment");
			res.redirect("/campgrounds/"+ req.params.id);
		}
	});
});


module.exports =router;