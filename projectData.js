var projectCSSDirectory = "stylesheets/projects/";

var examlearn = {
  date: "July 2017 - Present",
name: "ExamLearn",
description: `Examlearn is an E-Learning service built for Irish students studying for their Leaving and Junior Certificates.
ExamLearn offers a range of tools for it's users, including a State Exam Viewer, notes across a large range of subjects
and quizzes to accompany these notes. ExamLearn was built using <span class='technology'>Ruby On Rails</span> and <span class='technology'>React.js</span>.`,
links: ["https://www.examlearn.ie/"],
linkDisplays: ["ExamLearn.ie"],
stylesheet: projectCSSDirectory +"examlearn.css",
favicon: "",
returnLink: "project.html",
returnDisplay: "Return To Projects",
creators: [
  {
    name: "Ois&#237n O'Duibhir",
    link: "http://www.oisinodwyer.com/",
    role: "Programmer"
  },
  {
    name: "Gytis Daujotas",
    link: "http://www.gytdau.com",
    role: "Programmer"
  }
],
numRows: 3,
rows: [
  {},
  {},
  {}
],
postFunctions: []
};

var projectiles = {
  date: "November 2016",
  name: "Projectiles",
  description: `Projectiles is a simple application for demonstrating concepts thought in Applied Maths(in the Leaving Certificate).
  Building projectiles has helped me understand many aspects of Applied Maths, and I hope to update it with many new features as I progress
  through the course. Projectiles is fully built using <span class="technology">Java</span> and it's Graphics libraries.`,
  links: ["http://www.github.com/coisin/projectiles"],
  linkDisplays: ["Github.com/Coisin/Projectiles"],
  favicon: "",
  stylesheet: projectCSSDirectory +"projectiles.css",
  returnLink: "project.html",
  returnDisplay: "Return To Projects",
  creators: [
    /*{
      name: "Ois&#237n O'Duibhir",
      link: "http://www.oisinodwyer.com/",
      role: "Programmer"
    }*/
  ],
  numRows: 1,
  rows: [
    {
      class: "row-no-mobile"
    }
  ],
  postFunctions: []
};

var tables = {
date: "September 2016",
name: "Tables",
description: `Tables is an implementation of the <span class="technology">Java</span> "JTable" class, supporting easily binding data structures
to a table, within a <span class="technology">Java Swing</span> application. This project was development alongside my other application "MangaRaptor"
due to the difficulty in managing tables efficiently.`,
links: ["https://www.github.com/coisin/javatables", "https://github.com/Coisin/JavaTables/releases/latest"],
linkDisplays: ["Github.com/Coisin/JavaTables", "Download"],
stylesheet: projectCSSDirectory +"tables.css",
favicon: "",
returnLink: "project.html",
returnDisplay: "Return To Projects",
creators: [
  {
    name: "Ois&#237n O'Duibhir",
    link: "http://www.oisinodwyer.com/",
    role: "Programmer"
  }
],
numRows: 3,
rows: [
  {},
  {},
  {
    content: `<div class="code-info">
    <h4>The above Table was made using Java Tables, with the following, simple line of code</h4>
  </div>
  <pre class="code-block">
    <code class="language-java">
      Table&ltSeries&gt seriesTable = new Table(Series.class);</code>
  </pre>
  <div class="code-info">
    <h4>Here, <code>Series</code> is a simple class:</h4>
  </div>
  <pre class="code-block"><code class="language-java">
      public class Series {
        public String name, link, service;
        public int progress = 0;

        public Series(String name, String link, String service) {
          this.name = name;
          this.link = link;
          this.service = service;
        }
      }
    </code></pre>
    <div class="code-info">
      <h4>In order to ignore the <code>progress</code> field, we can use the following line of code: </h4>
    </div>
    <pre class="code-block"><code class="language-java">
      seriesTable.avoidColumn("progress");
    </code></pre>
    <div class="code-info">
      <h4>Last of all, in order to add rows to the table, all we must do is create a <code>Collection&ltSeries&gt</code>, and call
        the <code>addManyRows()</code> method:</h4>
    </div>
    <pre class="code-block">
      <code class="language-java">
        ArrayList&ltSeries&gt series = new ArrayList(); /* ArrayList implements Collection&ltE&gt */
        series.add(new Series("Death Note", "http://www.mangareader.net/death-note", "MangaReader"));

        seriesTable.addManyRows(series);
      </code>
    </pre>`,
    class: "hero-flexible"
  }
],
postFunctions: []
};

var dropbloq = {
  date: "September 2016",
  name: "DropBloq",
  description: `DropBloq was an online puzzle game which I made with <a href='http://www.gytdau.com/'>Gytis Daujotas</a> and Cormac Kinsella, in one weekend.
  It was built using <span class="technology">JavaScript,</span> <span class="technology">HTML</span> and <span class="technology">CSS.</span>`,
  favicon: "",
  returnLink: "project.html",
  returnDisplay: "Return To Projects",
  links: ["https://github.com/gytdau/dropbloq"],
  linkDisplays: ["Github.com/Gytdau/Dropbloq"],
  stylesheet: projectCSSDirectory + "dropbloq.css",
  creators: [
    {
      name: "Ois&#237n O'Duibhir",
      link: "http://www.oisinodwyer.com/",
      role: "Programmer"
    },
    {
      name: "Gytis Daujotas",
      link: "http://www.gytdau.com",
      role: "Programmer"
    },
    {
      name: "Cormac PJ Kinsella",
      link: "https://twitter.com/mackydude12",
      role: "Programmer"
    }
  ],
  numRows: 3,
  rows: [
    {},
    {},
    {}
  ],
  postFunctions: []
};

var raptor = {
date: "August 2016",
name: "MangaRaptor",
description: `MangaRaptor is an application built in <span class="technology">Java,</span> which allows you to download unlimited amounts of Manga,
onto your computer, in the form of picture files, all for free! The images are scraped from a number of websites, such as MangaReader.net
and Manga3.net.`,
links: ["https://www.github.com/Coisin/MangaRaptor", "https://github.com/Coisin/MangaRaptor/releases/latest"],
linkDisplays: ["Github.com/Coisin/MangaRaptor", "Download"],
stylesheet: projectCSSDirectory +"raptor.css",
favicon: "resources/mangaraptor-2.png",
numRows: 4,
returnLink: "project.html",
returnDisplay: "Return To Projects",
rows: [
  {},
  {},
  {},
  {
    class: "hero-flexible",
    content: `    <h1>How it works.</h1>
        <h4>If you want to download individual chapters, or all chapters of a manga series, MangaRaptor enables you to do so.</h4>
        <ul class="instruction-list">
          <li>Upon opening the application, type the name of the Manga Series into the Search Text Field, and click search. This
              will open a tabbed layout of the various Manga Downloading Services.
          </li>
          <li>Navigate through the tabs, to find the series which you are looking for. Click it, and click the "Add" button.</li>
          <li>All the chapters for the selected Manga Series will open in the Chapters Table. You can then select all the individual chapters
              you wish to download, or click the "Select All" button beneath the table. Selected multiple items can be done by
              holding Control, and clicking on each chapter. Once finished, click the "Add To Downloads" button.</li>
          <li>Between the two tables, there is a button for selecting a destination directory. Click this and selectory a directory,
              in which to download your Manga.</li>
          <li>Click the "Download" button beneath the Downloads Table.</li>
        </ul>`
  },
],
creators: [
  {
    name: "Ois&#237n O'Duibhir",
    link: "http://www.oisinodwyer.com/",
    role: "Programmer"
  }
],
postFunctions: []
};

var examli = {
  date: "June 2016",
name: "Examli",
description: `Examli was a quiz style revision helper for students in the Junior Certificate. During it's development, all the team were
currently studying for the Junior Certificate and thus noticed the lack of a service like this. However, we were all aware of how effective
services such as Duolingo were, where you were consistently being but to a deadline for certain tests. This is what sparked the development of
Examli.  Examli was built using <span class="technology">Ruby On Rails.</span>`,
links: [],
linkDisplays: [],
stylesheet: projectCSSDirectory +"examli.css",
favicon: "",
returnLink: "project.html",
returnDisplay: "Return To Projects",
creators: [
  {
    name: "Ois&#237n O'Duibhir",
    link: "http://www.oisinodwyer.com/",
    role: "Programmer"
  },
  {
    name: "Gytis Daujotas",
    link: "http://www.gytdau.com",
    role: "Programmer"
  },
  {
    name: "Kevin Andrei",
    link: "https://twitter.com/ChungWung",
    role: "Content Creator"
  },
  {
    name: "Cormac PJ Kinsella",
    link: "https://twitter.com/mackydude12",
    role: "Content Creator"
  }
],
numRows: 2,
rows: [
  {},
  {}
],
postFunctions: []
};

var habiten = {
  status: "hidden",
  date: "March 2016",
  name: "Habiten",
  description: `Habiten is an online application for tracking your everyday habits. You can set goals to accoompolish,
  as well tasks to be completed a stated number of times each day. Habiten also has a social aspect to it, in that you can
  follow other users, and complete their challenges. Habiten was my first venture into <span class="technology">Ruby On Rails</span>
  and so I learned a lot during it's development.`,
  favicon: "",
  returnLink: "project.html",
  returnDisplay: "Return To Projects",
  stylesheet: projectCSSDirectory + "habiten.css",
  numRows: 2,
  rows: [
    {},
    {}
  ],
  creators: [
    {
      name: "Ois&#237n O'Duibhir",
      link: "http://www.oisinodwyer.com/",
      role: "Programmer"
    },
    {
      name: "Gytis Daujotas",
      link: "http://www.gytdau.com",
      role: "Programmer"
    }
  ],
  postFunctions: []
};

var def = {
  name: "Projects",
  description: `Below is a list of many projects which I have participated in.`,
  favicon: "resources/avatar.png",
  returnLink: "index.html",
  returnDisplay: "Return To Ois&#237n O'Duibhir.com",
  creators: [],
  numRows: 3,
  links: [],
  linkDisplays: [],
  stylesheet: "",
  rows: [
    {},
    {},
    {
      content: `  <table class="project-list project-list-lg"></table>`
    }
  ],
  postFunctions: [
    function() {
      for(var i in projectData) {
        if(i == "default") continue;
        if(projectData[i].status != null && projectData[i].status == "hidden") continue;
        $(".project-list").append("<tr><td><a href='project.html?p="+i+"' class='project-listing'><span class='project-name'>"+projectData[i].name+"</span><span class='emphasis seperator'>/</span><span class='list-hover text-muted'>"+projectData[i].date+"</span></a></td></tr>");
      }
    }
  ]
};

projectData = {
  examlearn: examlearn,
  raptor: raptor,
  tables: tables,
  dropbloq: dropbloq,
  examli: examli,
  projectiles: projectiles,
  habiten: habiten,
  default: def
};
