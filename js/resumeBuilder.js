var bio = {
    "name": "Guilherme Augusto do Amaral",
    "role": "Front-End Developer",
    "contacts": [
        {
            "mobile" : "+55 19 9 9184-3474",
            "email" : "gui.larama@gmail.com",
            "github" : "guiaamaral",
            "location" : "Monte Mor, São Paulo, Brazil"
        }
    ],
    "welcomeMessage": "Graduated in graphic design, post graduate in marketing " +
                      "and seeking knowledge on front-end development. I'm " +
                      "currently working as digital marketing analyst and web " +
                      "designer in Campinas, SP, Brazil.",
    "skills": [
        "HTML", "CSS", "JavaScript", "PHP", "MySQL", "Git", "Magento", "Wordpress",
        "Photoshop", "Illustrator", "InDesign", "Premiere"
    ],
    "bioPic": "images/me.jpg"
};

var education = {
    "schools": [
        {
            "name": "UNIP",
            "location": "Campinas, São Paulo, Brazil",
            "degree": "Graphic design",
            "majors": ["Communication"],
            "dates": "2008 - 2009"
        },
        {
            "name": "Metrocamp",
            "location": "Campinas, São Paulo, Brazil",
            "degree": "MBA in Strategic Marketing Management",
            "majors": ["Marketing"],
            "dates": "2011 - 2012"
        }
    ],
    "onlineCourses": [
        {
            "title": "Nanodegree in Front-End Web Developer",
            "school": "Udacity",
            "dates": 2017,
            "url": "https://udacity.com/"
        }
    ]
};

var work = {
    "jobs": [
        {
            "employer": "Quanta Brasil",
            "title": "Digital marketing analyst / Web designer",
            "location": "Campinas, São Paulo, Brazil",
            "dates": "August 2011 - Until now",
            "description": "Responsible for the maintenance and management of " +
                           "the content of a portal developed in Wordpress and " +
                           "an e-commerce in Magento. Hotsite and email marketing " +
                           "creation. SEO, SEM, metrics analysis (Google Analytics " +
                           "and Facebook Insights) and management of digital " +
                           "marketing campaigns (Google AdWords and Facebook Ads)."
        },
        {
            "employer": "Multi Holding",
            "title": "Graphic designer",
            "location": "Campinas, São Paulo, Brazil",
            "dates": "December 2009 - August 2011",
            "description": "Responsible for create and adapte advertising of " +
                           "the biggest teaching and language networks in Brazil, " +
                           "like Yázigi, Wizard, Microlins, People, and more."
        },
        {
            "employer": "RG Print",
            "title": "Graphic designer",
            "location": "Campinas, São Paulo, Brazil",
            "dates": "August 2009 - December 2009",
            "description": "Creation of graphic arts, logos, stationery and " +
                           "visual identities."
        }
    ]
};

var projects = {
    "projects": [
        {
            "title": "Portfolio",
            "dates": "2017",
            "description": "Portfolio developed in HTML and CSS.",
            "images": [
                "images/portfolio.jpg"
            ]
        },
        {
            "title": "Quanta Brasil",
            "dates": "2015",
            "description": "Template developed using the Bootstrap framework.",
            "images": [
                "images/quantabrasil.jpg"
            ]
        }
    ]
};

var data = '%data%';

// Bio function
bio.display = function() {
    var formattedName = HTMLheaderName.replace(data, bio.name);
    var formattedRole = HTMLheaderRole.replace(data, bio.role);

    for (var contact in bio.contacts) {
        if (bio.contacts.hasOwnProperty(contact)) {
            var formattedMobile = HTMLmobile.replace(data, bio.contacts[contact].mobile);
            var formattedEmail = HTMLemail.replace(data, bio.contacts[contact].email);
            var formattedGithub = HTMLgithub.replace(data, bio.contacts[contact].github);
            var formattedLocation = HTMLlocation.replace(data, bio.contacts[contact].location);
        }
    }

    var formattedBioPic = HTMLbioPic.replace(data, bio.bioPic);
    var formattedWelcomeMsg = HTMLwelcomeMsg.replace(data, bio.welcomeMessage);

    $("#header").prepend(formattedName + formattedRole);
    $("#topContacts, #footerContacts").append(formattedMobile, formattedEmail, formattedGithub, formattedLocation);
    $("#header").append(formattedBioPic);
    $("#header").append(formattedWelcomeMsg);

    if (bio.skills.length > 0) {
        $('#header').append(HTMLskillsStart);

        for (var i = 0, len = bio.skills.length; i < len; i++) {
            var formattedSkills = HTMLskills.replace(data, bio.skills[i]);
            $('#skills').append(formattedSkills);
        }
    }
};
bio.display();

// Work function
work.display = function() {
    for (var job in work.jobs) {
        if (work.jobs.hasOwnProperty(job)) {
            var formattedEmployer = HTMLworkEmployer.replace(data, work.jobs[job].employer);
            var formattedTitle = HTMLworkTitle.replace(data, work.jobs[job].title);
            var formattedEmployerTitle = formattedEmployer + formattedTitle;
            var formattedDates = HTMLworkDates.replace(data, work.jobs[job].dates);
            var formattedLocation = HTMLworkLocation.replace(data, work.jobs[job].location);
            var formattedDescription = HTMLworkDescription.replace(data, work.jobs[job].description);

            $("#workExperience").append(HTMLworkStart);
            $(".work-entry:last").append(formattedEmployerTitle);
            $(".work-entry:last").append(formattedDates);
            $(".work-entry:last").append(formattedLocation);
            $(".work-entry:last").append(formattedDescription);
        }
    }
};
work.display();

// Projects function
projects.display = function() {
    for (var project in projects.projects) {
        if (projects.projects.hasOwnProperty(project)) {
            var formattedTitle = HTMLprojectTitle.replace(data, projects.projects[project].title);
            var formattedDates = HTMLprojectDates.replace(data, projects.projects[project].dates);
            var formattedDescription = HTMLprojectDescription.replace(data, projects.projects[project].description);

            $("#projects").append(HTMLprojectStart);
            $(".project-entry:last").append(formattedTitle);
            $(".project-entry:last").append(formattedDates);
            $(".project-entry:last").append(formattedDescription);

            if (projects.projects[project].images.length > 0) {
                for (image in projects.projects[project].images) {
                    var formattedImage = HTMLprojectImage.replace(data, projects.projects[project].images[image]);
                    $(".project-entry:last").append(formattedImage);
                }
            }
        }
    }
};
projects.display();

// Education function
education.display = function() {
    for (var school in education.schools) {
        if (education.schools.hasOwnProperty(school)) {
            var formattedName = HTMLschoolName.replace(data, education.schools[school].name);
            var formattedDegree = HTMLschoolDegree.replace(data, education.schools[school].degree);
            var formattedNameDegree = formattedName + formattedDegree;
            var formattedDates = HTMLschoolDates.replace(data, education.schools[school].dates);
            var formattedLocation = HTMLschoolLocation.replace(data, education.schools[school].location);
            var formattedMajor = HTMLschoolMajor.replace(data, education.schools[school].majors);

            $("#education").append(HTMLschoolStart);
            $(".education-entry:last").append(formattedNameDegree);
            $(".education-entry:last").append(formattedDates);
            $(".education-entry:last").append(formattedLocation);
            $(".education-entry:last").append(formattedMajor);
        }
    }

    for (onlineCourse in education.onlineCourses) {
        if (education.onlineCourses.hasOwnProperty(onlineCourse)) {
            var formattedTitle = HTMLonlineTitle.replace(data, education.onlineCourses[onlineCourse].title);
            var formattedSchool = HTMLonlineSchool.replace(data, education.onlineCourses[onlineCourse].school);
            var formattedTitleSchool = formattedTitle + formattedSchool;
            var formattedURL = HTMLonlineURL.replace(data, education.onlineCourses[onlineCourse].url);
            formattedDates = HTMLonlineDates.replace(data, education.onlineCourses[onlineCourse].dates);

            $("#education").append(HTMLonlineClasses);
            $("#education").append(HTMLschoolStart);
            $(".education-entry:last").append(formattedTitleSchool);
            $(".education-entry:last").append(formattedDates);
            $(".education-entry:last").append(formattedURL);
        }
    }
};
education.display();

// International name
function inName(name) {
    name = name.trim().split(" ");
    console.log(name);
    name[2] = name[2].toUpperCase();
    name[3] = name[3].toUpperCase();
    name[1] = name[1].slice(0,1).toUpperCase() + name[1].slice(1).toLowerCase();
    name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();

    return name[0] +" "+name[1] +" "+name[2] +" "+name[3];
}
// This function is not required
//$("#main").append(internationalizeButton);

// Where I worked
$("#mapDiv").append(googleMap);
