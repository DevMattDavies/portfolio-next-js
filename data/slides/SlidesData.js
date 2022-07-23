// Project image imports
import WordleImg from "../../assets/project_img/wordle.png";
import SamuraiImg from "../../assets/project_img/snippet_samurai.png";
import PortfolioImg from "../../assets/project_img/portfolioV1.png";

// Icon imports
import HTMLIcon from "../../public/html.png";
import CSSIcon from "../../public/css.png";
import JSIcon from "../../public/js.png";
import TSIcon from "../../public/typescript.png";
import ReactIcon from "../../public/react.png";
import NextIcon from "../../public/next.png";
import APIIcon from "../../public/api.png";
import NodeIcon from "../../public/node.png";
import SQLIcon from "../../public/sql.png";
import ExpressIcon from "../../public/expressjs2.png";
import VSCodeIcon from "../../public/vscode.png";
import GithubIcon from "../../public/github.png";
import AgileIcon from "../../public/agile.png";

const Slides = [
  {
    title: "Wordle in React",
    url: "website url here",
    github: "https://github.com/DevMattDavies/wordle-react",
    text: `A keen player of Wordle, I originally made my own version using vanilla JS which accessed a Wordle API to generate the daily word. Whilst this approach no doubt had its advantages in targeting individual elements on the DOM, the number of components required resulted in a large and, at times, complex HTML structure with lots of repetition. Refactoring the project and utilising the reusable component nature of React resulted in far more structured code, although presented some unique challenges with state management and element selection. Furthering my understanding of useRef and useContext helped overcome these issues, and would prove invaluable to take forward into other projects.`,
    src: WordleImg,
    icons: {
      Icon1: ReactIcon,
      Icon2: JSIcon,
      Icon3: CSSIcon,
      Icon4: APIIcon,
      Icon5: VSCodeIcon,
      Icon6: GithubIcon,
    },
  },
  {
    title: "Portfolio Website v1",
    url: "website url here",
    github: "github link here",
    text: `The previous iteration of my portfolio website, produced with vanilla HTML, JS and CSS. I had wanted to create a visually striking landing page with lots of contrast centered around a 3D graphic. After deciding on a broad colour scheme, the main image was found using Unsplash, with a digital colour meter then used to match the image colours more accurately and produce other secondary and highlight colours in addition. The edges of the image were also softened using Adobe photoshop to create a seamless blend into the background. During this project a number of JS CDNs were also explored, which I utilised for the main subtitle element to give it its 'typed' appearance.`,
    src: PortfolioImg,
    icons: {
      Icon1: HTMLIcon,
      Icon2: CSSIcon,
      Icon3: JSIcon,
      Icon4: VSCodeIcon,
      Icon5: GithubIcon,
    },
  },
  {
    title: "Snippet Samurai",
    url: "website url here",
    github: "github link here",
    text: `Providing a first taste of working in a tech team, 'Snippet Samurai' was the product of four developers working together during a coding bootcamp, after only 8 weeks of study. A fullstack project, it offered the ability to search for code snippets, with a searchbar providing dynamic responses based on partial search matches in our database. Selecting the required result would then render associated information - including the formatted code snippet, a YouTube embed for further learning, and links to associated documentation. The project was delivered according to Agile methodology, with UX and wireframing given consideration at the start and daily standups and retros throughout.`,
    src: SamuraiImg,
    icons: {
      Icon1: ReactIcon,
      Icon2: JSIcon,
      Icon3: CSSIcon,
      Icon4: APIIcon,
      Icon5: NodeIcon,
      Icon6: ExpressIcon,
      Icon7: SQLIcon,
      Icon8: VSCodeIcon,
      Icon9: GithubIcon,
      Icon10: AgileIcon,
    },
  },
];

export default Slides;
