import React from "react";
const projectsData = [
  {
    img: "./icons/pizzaorder.png",
    title: "Order Pizza",
    description:
      "A pizza ordering site that I made using routing, forms, cypress tests and css.",
    skills: ["JavaScript", "CSS", "Form"],
    gitHub: "https://github.com/cosmopoliitans/fsweb-s7-challenge-pizza",
    vievSite: "https://order-pizza-project.netlify.app/",
  },
  {
    img: "./icons/activity.png",
    title: "Activity",
    description:
      "It is a project where I get data from an API with redux thunk and an asynchronous action creator, combine redux, localStorage and react-toastify.",
    skills: ["JavaScript", "redux", "axios"],
    gitHub: "https://github.com/cosmopoliitans/fsweb-s10g4-thunk-and-apis",
    vievSite: "https://thunk-and-apis-iota.vercel.app/",
  },
  {
    img: "./icons/watchlist.png",
    title: "WatchList",
    description: "In this project, I created a movie list with redux.",
    skills: ["JavaScript", "redux", "axios"],
    gitHub: "https://github.com/cosmopoliitans/fsweb-s10g3-redux-watchlist",
    vievSite: "https://watchlist-topaz.vercel.app/",
  },
  {
    img: "./icons/filmprojesi.png",
    title: "Movie Project",
    description:
      "I worked with two different reducers to work in a web application with a small movie database. I've used all available state and action generators, as well as built reducer/redux pairings from scratch.",
    skills: ["JavaScript", "redux", "axios"],
    gitHub: "https://github.com/cosmopoliitans/fsweb-s10g2-redux-filmler",
    vievSite: "https://film-listem.vercel.app/movies",
  },
  {
    img: "./icons/calculator.png",
    title: "Calculator",
    description:
      "In this project, I created a simple calculator application that can add, multiply, subtract and subtract numbers in any order, as well as add save and callback features.",
    skills: ["JavaScript", "redux", "useReducer"],
    gitHub: "https://github.com/cosmopoliitans/fsweb-s10g1-reducer-calculator",
    vievSite: "https://calculator-six-ashen.vercel.app/",
  },
  {
    img: "./icons/minnetgunlugu.png",
    title: "Gratitude Diary",
    description:
      "It is the project where I get data from an API with redux thunk and an asynchronous action creator, use redux, localStorage and react-toastify.",
    skills: ["JavaScript", "redux", "localStorage"],
    gitHub: "https://github.com/cosmopoliitans/fsweb-s10g4-thunk-and-apis",
    vievSite: "https://minnet-gunlugum.vercel.app/",
  },
];
const projectsDataTr = [
  {
    img: "./icons/pizzaorder.png",
    title: "Pizza Siparişi",
    description:
      "Routing, formlar, cypress testleri ve css kullanarak yaptığım bir pizza sipariş sitesi.",
    skills: ["JavaScript", "CSS", "Form"],
    gitHub: "https://github.com/cosmopoliitans/fsweb-s7-challenge-pizza",
    vievSite: "https://vermillion-sundae-4c44a0.netlify.app/",
  },
  {
    img: "./icons/activity.png",
    title: "Aktivite",
    description:
      "Redux thunk ve asenkron bir action creator ile bir API'dan veri aldığım, redux, localStorage ve react-toastify birleştirdiğim bir projedir.",
    skills: ["JavaScript", "redux", "axios"],
    gitHub: "https://github.com/cosmopoliitans/fsweb-s10g4-thunk-and-apis",
    vievSite: "https://thunk-and-apis-iota.vercel.app/",
  },
  {
    img: "./icons/watchlist.png",
    title: "Film Listesi",
    description: "Bu projede redux ile bir film listesi oluşturdum.",
    skills: ["JavaScript", "redux", "axios"],
    gitHub: "https://github.com/cosmopoliitans/fsweb-s10g3-redux-watchlist",
    vievSite: "https://watchlist-topaz.vercel.app/",
  },
  {
    img: "./icons/filmprojesi.png",
    title: "Film Projesi",
    description:
      "Küçük bir film veritabanı içeren bir web uygulamasında çalışacak, iki farklı reducer ile işlem yaptım. Hem mevcut tüm state ve action oluşturucuları kullandım, hem de sıfırdan reducer/redux pairing'leri oluşturdum.",
    skills: ["JavaScript", "redux", "axios"],
    gitHub: "https://github.com/cosmopoliitans/fsweb-s10g2-redux-filmler",
    vievSite: "https://film-listem.vercel.app/movies",
  },
  {
    img: "./icons/calculator.png",
    title: "Hesap Makinesi",
    description:
      "Bu projede, sayıları herhangi bir sırayla toplayabilen, çarpabilen, çıkarabilen ve çıkartabilen, ayrıca hafızaya kaydetme ve callback özellikleri ekleyebilen basit bir hesap makinesi uygulaması oluşturdum",
    skills: ["JavaScript", "redux", "useReducer"],
    gitHub: "https://github.com/cosmopoliitans/fsweb-s10g1-reducer-calculator",
    vievSite: "https://calculator-six-ashen.vercel.app/",
  },
  {
    img: "./icons/minnetgunlugu.png",
    title: "Minnet Günlüğü",
    description:
      "Redux thunk ve asenkron bir action creator ile bir API'dan veri aldığım, redux, localStorage ve react-toastify kullandığım projedir.",
    skills: ["JavaScript", "redux", "localStorage"],
    gitHub: "https://github.com/cosmopoliitans/fsweb-s10g4-thunk-and-apis",
    vievSite: "https://minnet-gunlugum.vercel.app/",
  },
];

export default function Projects({ language }) {
  return language === "en" ? (
    <div className="projects">
      <span className="profileLine"></span>
      <h3>Projects</h3>
      <div className="kartlarGrup">
        {projectsData.map((project) => (
          <div className="projects-list" key={project.name}>
            <img src={project.img} alt="" />
            <h4>{project.title}</h4>
            <p className="aciklama">{project.description}</p>
            <div className="techStack">
              <p>{project.skills[0]}</p>
              <p>{project.skills[1]}</p>
              <p>{project.skills[2]}</p>
            </div>
            <div className="details">
              <a href={project.gitHub} target="_blank" rel="noreferrer">
                <p>GitHub</p>
              </a>
              <a href={project.vievSite} target="_blank" rel="noreferrer">
                <p>Viev Site</p>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  ) : (
    <div className="projects">
      <span className="profileLine"></span>
      <h3>Projelerim</h3>
      <div className="kartlarGrup">
        {projectsDataTr.map((project) => (
          <div className="projects-list" key={project.name}>
            <img src={project.img} alt="" />
            <h4>{project.title}</h4>
            <p className="aciklama">{project.description}</p>
            <div className="techStack">
              <p>{project.skills[0]}</p>
              <p>{project.skills[1]}</p>
              <p>{project.skills[2]}</p>
            </div>
            <div className="details">
              <a href={project.gitHub} target="_blank" rel="noreferrer">
                <p>GitHub</p>
              </a>
              <a href={project.vievSite} target="_blank" rel="noreferrer">
                <p>Siteye Git</p>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
