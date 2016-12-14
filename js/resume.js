/* greeting part */
var greeting = document.getElementById("greeting");
greeting.innerHTML = "<h1>Hello! I am ChiaYing Lin!</h1> \
                    <p> I am a computer science phD student in NCKU. </p>";

var str="";
$.getJSON("data/resume.json", function(data) {
    /* education part */
    var edu = data.education;
    str="<h1>Education</h1>";
    str+="<ul>"
    for(var i =0;i<edu.length;++i){
        str+="<li>";
        str+=edu[i].startDate+" ~ "+edu[i].endDate+": "+edu[i].studyType+", "+edu[i].institution;
        str+="<ul>";
        str+="<li> GPA: "+edu[i].gpa+"</li>";
        str+="<li> Courses: <ul>";
        for(var j=0;j<edu[i].courses.length;++j){
            str+="<li>"+edu[i].courses[j]+"</li>";
        }
        str+="</ul></li>";
        str+="</ul>";
        str+="</li>";
    }
    str+="</ul>";
    document.getElementById("education").innerHTML = str;

    /* experience part*/
    var exp = data.work;
    str="<h1>Experience</h1>";
    document.getElementById("experience").innerHTML = str;

    /* publication part*/
    var pub = data.work;
    str="<h1>Publication</h1>";
    document.getElementById("publication").innerHTML = str;

    /* awards part*/
    var awards = data.work;
    str="<h1>Awards</h1>";
    document.getElementById("awards").innerHTML = str;

    /* Projects part*/
    var proj = data.work;
    str="<h1>Projects</h1>";
    document.getElementById("projects").innerHTML = str;

});


