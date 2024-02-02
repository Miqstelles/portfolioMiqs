import { Carousel } from "../components/slider";
import { ProjectInfo } from "../components/projects/projectInfo";

import narutoweb from "../assets/naruto-web.png";
import narutomobile from "../assets/iphone.png";

export function Projects() {
  return (
    <div className="projects">
      <h1 className="text-[3rem] text-white font-extrabold mb-6">
        MEUS PROJETOS
      </h1>

      <Carousel>
        {[
          <ProjectInfo
            title="NARUTO WEB"
            site="https://narutoweb.vercel.app"
            gitRepo="https://github.com/miqstelles/naruto-web"
            image={[narutoweb]}
            info="Naruto WEB é um site para que os fãs possam encontrar curiosidades e informações sobre seus personagens favoritos."
            color="from-orange-400 via-orange-300 to-orange-400"
            stacks={[0, 1, 2, 3, 4, 5, 6, 7, 8, 9]}
          />,

          <ProjectInfo
            title="TRYON APP"
            site="https://github.com/Miqstelles/TryonAPP"
            gitRepo="https://github.com/Miqstelles/TryonAPP"
            image={[narutoweb]}
            info="Naruto WEB é um site para que os fãs possam encontrar curiosidades e informações sobre seus personagens favoritos."
            color="from-orange-400 via-orange-300 to-orange-400"
            stacks={[1, 2, 3]}
          />,
          <ProjectInfo
            title="NARUTO WEB"
            site="https://narutoweb.vercel.app"
            gitRepo="https://github.com/miqstelles/naruto-web"
            image={[narutoweb, narutomobile]}
            info="Naruto WEB é um site para que os fãs possam encontrar curiosidades e informações sobre seus personagens favoritos."
            color="from-orange-400 via-orange-300 to-orange-400"
            stacks={[1, 2, 3]}
          />,
        ]}
      </Carousel>
    </div>
  );
}
