import aboutImg from "../images/about.jpeg";
import Title from "./Title";
const About = () => {
  return (
    <section className="section" id="about">
      <Title title={`about`} subTitle={`us`} />
      <div className="section-center about-center">
        <div className="about-img">
          <img src={aboutImg} className="about-photo" alt="awesome beach" />
        </div>
        <article className="about-info">
          <h3>explore the difference</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid ducimus quos eius non sequi tenetur debitis
            animi ex voluptate expedita ratione dolorum, ipsum labore modi sapiente exercitationem atque praesentium ab!
          </p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo mollitia tenetur autem, necessitatibus
            repudiandae optio? Ducimus beatae inventore dolores placeat magni. Quo tenetur tempora autem. Iure
            consequuntur facere quia omnis!
          </p>
          <a href="#about" className="btn">
            read more
          </a>
        </article>
      </div>
    </section>
  );
};
export default About;
