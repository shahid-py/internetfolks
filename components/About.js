import style from "../styles/About.module.css"

const About = () => {
  return (
    <section className={style.container}>
        <div className={style.inner}>
     <div className={style.intro}>
        
        
        <h3 className={style.title}>
        Advanced Statistics
        </h3>
        <p>
        Track how your links are performing across the web with our advanced
          statistics dashboard.
        </p>
    </div>
    <div className={style.items}>
    <div className={style.item}>
    <img 
    src="icon-brand-recognition.svg"
    alt=""
    className={style.image}/>
    <h5 className={style.itemtitle}>
        Brand Recognition
    </h5>
    <p className={style.itemcontent}>
    Boost your brand recognition with each click. Generic links do not
            mean a thing. Branded links help instil confidence in your content.
    </p>
    </div>
    <div className={style.item}>
    <img 
    src="icon-brand-recognition.svg"
    alt=""
    className={style.image}/>
    <h5 className={style.itemtitle}>
        Brand Recognition
    </h5>
    <p className={style.itemcontent}>
    Boost your brand recognition with each click. Generic links do not
            mean a thing. Branded links help instil confidence in your content.
    </p>
    </div>
    <div className={style.item}>
    <img 
    src="icon-brand-recognition.svg"
    alt=""
    className={style.image}/>
    <h5 className={style.itemtitle}>
        Brand Recognition
    </h5>
    <p className={style.itemcontent}>
    Boost your brand recognition with each click. Generic links do not
            mean a thing. Branded links help instil confidence in your content.
    </p>
    </div>
    </div>
    </div>
    </section>
    
  )
}

export default About