import React from "react";

const projectsData = [
  {
    img: "./icons/pizzaorder.png",
    title: "Order Pizza",
    description:
      "Routing, formlar, cypress testleri ve css kullanarak yaptığım bir pizza sipariş sitesi.",
    skills: ["JavaScript", "CSS", "Form"],
    gitHub: "https://github.com/cosmopoliitans/fsweb-s7-challenge-pizza",
    vievSite: "https://vermillion-sundae-4c44a0.netlify.app/",
  },
  {
    img: "./icons/activity.png",
    title: "Activity",
    description:
      "Redux thunk ve asenkron bir action creator ile bir API'dan veri aldığım, redux, localStorage ve react-toastify birleştirdiğim bir projedir.",
    skills: ["JavaScript", "redux", "axios"],
    gitHub: "https://github.com/cosmopoliitans/fsweb-s10g4-thunk-and-apis",
    vievSite: "https://thunk-and-apis-iota.vercel.app/",
  },
  {
    img: "./icons/watchlist.png",
    title: "WatchList",
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
    title: "Calculator",
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

export default function Projects() {
  return (
    <div className="projects">
      <span className="profileLine"></span>
      <h3>Projects</h3>
      <div className="kartlarGrup">
        {projectsData.map((project) => (
          <div className="projects-list" key={project.name}>
            <img src={project.img} alt="" />
            <h4>{project.name}</h4>
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
  );
}
