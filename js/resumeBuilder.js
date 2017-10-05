var bio = {
  "name" : "Austin Carnahan",
  "role" : "Web Developer",
  "contacts" : {
    "mobile" : "314-111-1111",
    "email" : "ac1114@gmail.com",
    "github" : "racoonmoonswoon",
    "linkedIn" : "linkedin.com/in/austincarnahan",
    "location" : "Saint Louis, MO"
  },
  "welcomeMessage" : "Welcome to my interactive resume! This is an experiment " +
  "in front-end web development!",
  "skills" : [
    "Data analysis", "Core Java", "Web Development", "Making things work better"
  ],
  "biopic" : "images/tuxshot.jpg",

  display: function getBio(){

    //display role
    if(bio.role.length > 0){
      var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
      $("#header").prepend(formattedRole);
    }
    //display Name
    if(bio.name.length > 0){
      var formattedName = HTMLheaderName.replace("%data%", bio.name);
      $("#header").prepend(formattedName);
    }
    //get contacts for top of page
    //email
    if(bio.contacts.email.length > 0){
      var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
      $("#topContacts, #footerContacts").append(formattedEmail);
    }
    //mobile
    if(bio.contacts.mobile.length > 0){
      var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
      $("#topContacts, #footerContacts").append(formattedMobile);
    }
    //github
    if(bio.contacts.github.length > 0){
      var formattedGitHub = HTMLgithub.replace("%data%", bio.contacts.github);
      $("#topContacts, #footerContacts").append(formattedGitHub);
    }
    //linkedin
    if(bio.contacts.linkedIn.length > 0){
      var formattedLinkedin = HTMLlinkedIn.replace("%data%", bio.contacts.linkedIn);
      $("#topContacts, #footerContacts").append(formattedLinkedin);
    }
    //location
    if(bio.contacts.location.length > 0){
      var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
      $("#topContacts, #footerContacts").append(formattedLocation);
    }
    //display pic
    if(bio.biopic.length > 0){
      var formattedPic = HTMLbioPic.replace("%data%", bio.biopic);
      $("#header").append(formattedPic);
    }
    //display welcome message
    if(bio.welcomeMessage.length > 0){
      var formattedMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
      $("#header").append(formattedMessage);
    }
    //display skills
    if(bio.skills.length > 0){
      $("#header").append(HTMLskillsStart);

      //for(var skill in bio.skills){
      bio.skills.forEach(function(skill){
        var formattedSkill = HTMLskills.replace("%data%", skill);
        $("#skills").append(formattedSkill);
      });
    }
  }
};

var education = {
  "schools" : [
    {
      "name" : "University of Missouri St. Louis",
      "location" : "Saint Louis, MO",
      "degree" : "BS",
      "majors" : ["Economics"],
      "dates" : "2015",
      "url" : "http://www.umsl.edu/~econ"
    }
  ],
  "onlineCourses" : [
    {
      "title": "Front End Web Development Nano-Degree",
      "school": "Udacity",
      "dates" : "May 2017",
      "url": "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
    },
    {
      "title": "Deep Learning Foundations Nano-Degree",
      "school": "Udacity",
      "dates" : "July 2017",
      "url": "https://www.udacity.com/course/deep-learning-nanodegree-foundation--nd101"

    },
    {
      "title": "Database Management Essentials",
      "school": "Coursera, University of Colorado",
      "dates" : "November 2016",
      "url": "https://www.coursera.org/learn/database-management"

    }
  ],

  display: function getEducation(){
    //display school & degree info
    education.schools.forEach(function(school){
      $("#education").append(HTMLschoolStart);
      //name is a link
      var formattedSchoolName = HTMLschoolName.replace("%data%", school.name);
      formattedSchoolName = formattedSchoolName.replace("#", school.url);
      formattedSchoolName = formattedSchoolName.replace("%data2%", school.degree);

      $(".education-entry:last").append(formattedSchoolName);

      //graduation date
      var formattedSchoolDates = HTMLschoolDates.replace("%data%", school.dates);
      $(".education-entry:last").append(formattedSchoolDates);
      //major
      //for(var major in school.majors){
      school.majors.forEach(function(major){
        var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", major);
        $(".education-entry:last").append(formattedSchoolMajor);
      });
    });

    //online classes
    $("#education").append(HTMLonlineClasses);

    //for(var course in education.onlineCourses){
    education.onlineCourses.forEach(function(course){

      $("#education").append(HTMLschoolStart);

      var formattedClassName = HTMLonlineTitleSchool.replace("%data%", course.title);
      formattedClassName = formattedClassName.replace("#", course.url);
      formattedClassName = formattedClassName.replace("%data2%", course.school);

      $(".education-entry:last").append(formattedClassName);

      var formattedClassDate = HTMLonlineDates.replace("%data%", course.dates);
      $(".education-entry:last").append(formattedClassDate);

    //  var formattedClassURL = HTMLonlineURL.replace("%data%", education.onlineCourses[course].url);
      $(".education-entry:last").append("<br>");

    });
  }
};

var work = {
  "jobs": [
    {
      "employer": "International Institute Comunity Development Corporation",
      "title": "Special Projects Coordinator",
      "location" : "Saint Louis, MO",
      "dates": "June 2016 - November 2016",
      "description": "Developed and taught Supporting Entrepreneurship for Immigrants (SEFI) business training program to over 10 immigrant entrepreneurs.Developed Accounting and Computer Training (ACT) program for immigrant business owners. Served as agency liaison to the St. Louis Regional Chamber of Commerce,United Way IDA Partners, and St. Louis Economic Development Partnership."
    },
    {
      "employer" : "International Institute of Saint Louis",
      "title" : "Economic Development AmeriCorps",
      "location" : "Saint Louis, MO",
      "dates" : "August 2015 - June 2016",
      "description" : "Managed individual development savings accounts for over 100 clients. Conducted monthly accounting, data and impact analysis for $500,000 grant. Prototyped dashboards and visualization tools for business intelligence. Provided small business technical assistance to immigrant entrepreneurs."
    },
    {
      "employer": "JB Web Analytics",
      "title": "Online Marketing & SEO Strategist",
      "location" : "Kirksville, MO",
      "dates": "August 2011 - October 2012",
      "description": "Conducted SEO analysis using Google Keywords and Open Site Explorer. Managed content marketing strategies and copywriting. Researched rank checking of websites and competitors."
    },
    {
      "employer": "US House of Representatives Subcommitte on Insular Affairs",
      "title": "Congressional Intern",
      "location" : "Washington D.C.",
      "dates": "June 2010 - August 2010",
      "description": "Coordinated inter-agency coalition focused on improving ultra-low sulphur diesel infrastructure development for U.S. Territories. Advocated for the inclusion of U.S. Territories in relevant legislation."
    }
  ],

  display: function getWork(){

    //for(var job in work.jobs){
    work.jobs.forEach(function(job){
      $("#workExperience").append(HTMLworkStart);

      var formattedEmployer = HTMLworkEmployer.replace("%data%", job.employer);
      //concatenate employer and title. append to html
      var formattedTitle = HTMLworkTitle.replace("%data%", job.title);
      var formattedEmployerTitle = formattedEmployer + formattedTitle;
      $(".work-entry:last").append(formattedEmployerTitle);

      //other deets
      var formattedDates = HTMLworkDates.replace("%data%", job.dates);
      $(".work-entry:last").append(formattedDates);

      var formattedDesc = HTMLworkDescription.replace("%data", job.description);
      $(".work-entry:last").append(formattedDesc);

    });
  }
};

var projects = {
  "projects": [
    {
      "title": "Sample Project 1",
      "dates": "2017",
      "description": "Sample description. blah la lalalalalalla booo looo poo",
      "images": ["images/fry.jpg"]
    },
    {
      "title": "Sample Project 2",
      "dates": "2017",
      "description": "Sample description 2. blah la lalalalalalla booo looo poo",
      "images": ["images/fry.jpg"]
    },
    {
      "title": "Sample Project 3",
      "dates": "2017",
      "description": "Sample description 3. blah la lalalalalalla booo looo poo",
      "images": ["images/fry.jpg"]
    },
    {
      "title": "Sample Project 4",
      "dates": "2017",
      "description": "Sample description 4. blah la lalalalalalla booo looo poo",
      "images": ["images/fry.jpg"]
    },
    {
      "title": "Sample Project 5",
      "dates": "2017",
      "description": "Sample description 5. blah la lalalalalalla booo looo poo",
      "images":["images/fry.jpg"]
    }
  ],

  display: function getProjects() {
    //build carousel. 3 projects per slide.
    //count projects and figure out how many slides....
    var slides;
    var pcount = 0;
    //for(var project in projects.projects){
    projects.projects.forEach(function(project){
      pcount++;
    });
    if(pcount > 0){
      if(pcount % 3 > 0){
        slides = (pcount /3);
        slides = Math.floor(slides) + 1;
      }else{
        slides = (pcount / 3);
      }
    }

    //build slides & indicator buttons /////////////////////////////////////////
    for(i = 0; i < slides; i++){
      //append indicator buttons
      var carouselButton = HTMLcarouselIndicators.replace("%data%", i.toString());
      $(".carousel-indicators").append(carouselButton);

      //append new slide
      var carouselSlide = HTMLcarouselSlide;
      $(".carousel-inner").append(carouselSlide);

      //tag each slide with an identifying class
      var slideID = "slide" + i.toString();
      $(".carousel-inner div:last-child").addClass(slideID);
    }

    //set first slide to active
    $(".carousel-inner div:first-child").addClass("active");
    //set first indicator button to active
    $(".carousel-indicators li:first-child").addClass("active");

    //append and insert projects into slides
    var projcounter = 0; //counting how many projects in slide
    var slidenumber = 0; //for iterating throught slides

    projects.projects.forEach(function(project){
        //check if slide is full
      if(projcounter > 2){
        projcounter = 0;
        slidenumber++;
      }

      var slideID2 = ".slide" + slidenumber.toString(); //for selecting slide

      $(slideID2).append(HTMLprojectStart);
      //insert image
      project.images.forEach(function(image){
      var formattedImage = HTMLprojectImage.replace("%data%", image);
      $(".project-entry:last").append(formattedImage);
      });
      //insert proj title and description
      var formattedCaption = HTMLprojectCaption.replace("%title%", project.title);
      formattedCaption = formattedCaption.replace("%description%", project.description);
      $(".project-entry:last").append(formattedCaption);
      //iterate counter
      projcounter++;
    });
  }
};


function displayMap(){
  $("#mapDiv").append(googleMap);
  $("#map").append(map);
}
