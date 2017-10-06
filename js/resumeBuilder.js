var bio = {
  "name" : "Austin Carnahan",
  "role" : "Web Developer",
  "contacts" : {
    "mobile" : "314-971-3112",
    "email" : "ac6404@gmail.com",
    "github" : "github.com/racoonmoonswoon",
    "linkedIn" : "linkedin.com/in/austincarnahan",
    "location" : "Saint Louis, MO"
  },
  "welcomeMessage" : "I am a self-taught web developer passionate about crafting intuitive, simple, and functional web-based applications and services. I believe in leveraging technology to improve the delivery of essential civil services, empower social impact organizations, and increase equity, access, and stewardship of common goods resources.",
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
      "title": "Front End Web Development Nanodegree",
      "school": "Udacity",
      "dates" : "September 2017",
      "url": "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
    },
    {
      "title": "Intro to Progressive Web Applications",
      "school": "Udacity",
      "dates" : "October 2017",
      "url": ""

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
      "employer": "Code For The People",
      "title": "Project Outreach and Team Lead",
      "location" : "Saint Louis, MO",
      "dates": "May 2017 - Current",
      "description": "Lead collaboration between partner organizations and volunteer dev teams focused on creating software and tools to empower social and progressive causes, community organizations, and the digitization of government services."
    },
    {
      "employer" : "International Institute Refugee Services",
      "title" : "Economic Development AmeriCorps",
      "location" : "Saint Louis, MO",
      "dates" : "August 2015 - June 2016",
      "description" : "Prototyped dashboards and visualization tools for business intelligence. Provided small business technical assistance to refugee entrepreneurs. Advocated for and tested agency-wide technology solutions. Led efforts to push new software adoption, data-fluency, and strategic processes."
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
      "title": "Neighborhood Map",
      "dates": "2017",
      "description": "Single page responsive map built with <strong>Knockout.js</strong> framework. User can view recent pictures and ratings of attractions in Fox Park retrieved via <strong>AJAX</strong> request to <strong>Foursquare API</strong> and explore using <strong>Google Streetview API</strong>",
      "images": ["images/map2.jpg"],
      "url": "https://racoonmoonswoon.github.io/neighoordhoodMap/"
    },
    {
      "title": "TreeTalk",
      "dates": "2017",
      "description": "Contributor to open source <strong>progressive web app</strong> built with <strong>React.js</strong>. Tree Talk is a platform to explore and discover locally sourced environmental science, creative calls-to-action, and fun ideas for growing a more vibrant community.",
      "images": ["images/treetalksketch.jpg"],
      "url": "https://github.com/treetalk/treetalk.github.io"
    },
    {
      "title": "Bug Run/Frogger Clone",
      "dates": "2017",
      "description": "<strong>HTML5 Canvas</strong> clone of classic game frogger. Images and game engine provided by Udacity. Coded player, enemy and other game objects in <strong>JavaScript</strong>’s object-oriented pseudo-classical style. It's fun to play!",
      "images": ["images/bugrun.jpg"],
      "url": "https://racoonmoonswoon.github.io/bugrun/"
    },
    {
      "title": "Bike Share Neural Network",
      "dates": "2017",
      "description": "A simple <strong>neural network</strong> using <strong>python</strong> and <strong>jupyter notebooks</strong> that predicts usage volume and times for a bike sharing co-op.",
      "images": ["images/nNetwork.jpg"],
      "url":"https://racoonmoonswoon.github.io/dlnd_firstnn/"
    },
    {
      "title": "BookStore Inventory DB",
      "dates": "2017",
      "description": "A multi-page <strong>Java</strong> web application built using <strong>Servlets</strong>, <strong>JSP</strong>, and <strong>MySQL</strong>. Simulates inventory management of multiple bookstore locations.",
      "images":["images/booksDB.jpg"],
      "url":"https://github.com/racoonmoonswoon/booksDB"
    },
    {
      "title": "Credit Card Simulator",
      "dates": "2017",
      "description": "A <strong>Java</strong> Web Application built using <strong>Servlets</strong> and <strong>JSP</strong>. Simulates basic credit card transactions for multiple accounts such as posting charges and payments, interest fees, and displays history.<br><br>",
      "images":["images/ccSim.jpg"],
      "url":"https://github.com/racoonmoonswoon/CreditCardSim"
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
