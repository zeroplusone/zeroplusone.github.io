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
    str+="<ul>"
    for(var i =0;i<exp.length;++i){
        str+="<li>";
        str+=exp[i].startDate+" ~ "+exp[i].endDate+": <b>"+exp[i].company+" "+exp[i].position+"</b>";
        str+="<ul>";
        str+="<li>"+exp[i].summary+"</li>";
        str+="</ul>";
        str+="</li>";
    }
    str+="</ul>";
    document.getElementById("experience").innerHTML = str;

    /* publication part*/
    var pub = data.publications;
    str="<h1>Publication</h1>";
    str+="<ul>";
    for(var i =0;i<pub.length;++i){
        str+="<li>";
        str+="<a href="+pub[i].website+"><b>"+pub[i].name+"</b></a>";
        str+="<ul>";
        str+="<li> publisher: "+pub[i].publisher+"</li>";
        str+="<li> release date: "+pub[i].releaseDate+"</li>";
        str+="</ul>";
        str+="</li>";
    }
    str+="</ul>";
    document.getElementById("publication").innerHTML = str;

    /* awards part*/
    var awards = data.awards;
    str="<h1>Awards</h1>";
    str+="<ul>";
    for(var i =0;i<awards.length;++i){
        str+="<li>";
        str+=awards[i].date+" "+awards[i].title;
        str+="<ul>";
        str+="<li> awarder: "+awards[i].awarder+"</li>";
        str+="</ul>";
        str+="</li>";
    }
    str+="</ul>";
    document.getElementById("awards").innerHTML = str;

    /* Projects part*/
    var proj = data.skills;
    str="<h1>Projects</h1>";
    str+="<ul>";
    for(var i =0;i<proj.length;++i){
        str+="<li>";
        str+=proj[i].name;
        str+="<ul>";
        str+="<li> prject list: coming soon... </li>";
        str+="</ul>";
        str+="</li>";
    }
    str+="</ul>";
    document.getElementById("projects").innerHTML = str;

});


