import { Card, Carousel } from "../components/slider";

export function Projects() {
  return (
    <div className="projects">
      {/* <ProjectInfo
        title="NARUTO WEB"
        site="https://narutoweb.vercel.app"
        gitRepo="https://github.com/miqstelles/naruto-web"
        image={narutoweb}
        info="Naruto WEB é um site para que os fãs possam encontrar curiosidades e
        informações sobre seus personagens favoritos."
      /> */}
      <Carousel>
        {[
          <Card
            title="Naruto WEB"
            content="Naruto WEB é um site para que os fãs possam encontrar curiosidades e
            informações sobre seus personagens favoritos."
          />,
          <Card
            title="Naruto WEB"
            content="Naruto WEB é um site para que os fãs possam encontrar curiosidades e
            informações sobre seus personagens favoritos."
          />,
        ]}
      </Carousel>
    </div>
  );
}
