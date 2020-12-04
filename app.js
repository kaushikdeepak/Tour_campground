// ########### INITIAL SETUP #######################

require('dotenv').config();


var express=require("express"),
	app=express(),
    bodyParser=require("body-parser"),
	mongoose=require("mongoose"),
	flash   = require("connect-flash"),
	seedDB =require("./seeds"),
	passport=require("passport"),
	LocalStrategy=require("passport-local"),
	methodOverride=require("method-override"),
	User=require("./models/user"),
	Campground=require("./models/campground"),
 	Comment=require("./models/comment")	

var commentRoutes    = require("./routes/comments"),
	campgroundRoutes = require("./routes/campgrounds"),
	indexRoutes      = require("./routes/index")

mongoose.set('useNewUrlParser', true);
mongoose.set('useUnifiedTopology', true)
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);

mongoose.connect("mongodb://localhost:27017/Yelp_Camp_v6");


app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static(__dirname +'/public'));
app.set("view engine","ejs");
app.use(methodOverride("_method"));
app.use(flash());
//seedDB();
// ########### INITIAL SETUP COMPELETD #######################

///// PASSPORT CONFIGURATION ########//#endregion

app.use(require("express-session")({
	secret:"I have an awesome car",
	resave:false,
	saveUninitialized:false
}));

app.use(passport.initialize());
app.use(passport.session());

passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use(function(req,res,next){
	res.locals.currentUser =req.user;
	res.locals.error= req.flash("error");
	res.locals.success= req.flash("success");
	next();
});

//INDEX -Show all campgrounds

app.use(indexRoutes);
app.use("/campgrounds",campgroundRoutes);
app.use("/campgrounds/:id/comments",commentRoutes);

app.listen(process.env.PORT || 3000,process.env.IP,function(){
	console.log("YelpCamp has been launched!!!");
});