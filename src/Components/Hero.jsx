import image from "../profile.jpg";
import classes from "./Hero.module.css";
const Hero = (props) => {
  return (
    <>
      <section className={classes.hero}>{props.info}</section>
    </>
  );
};
export default Hero;
