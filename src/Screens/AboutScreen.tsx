import team6 from '../assets/team6.jpg';
const AboutScreen = () => {
  return (
    <div>
      <div className="grid md:grid-cols-2 gap-2 p-4">
        <div>
          <img src={team6} className="rounded-md" alt="img" />
        </div>
        <div>
          <h1 className="text-4xl font-bold ">
            <span className="text-orange-300">WHO</span> WE ARE
          </h1>
          <p className='text-sm'>
            My name is David Odunayo, a proud graduate from Kogi State
            University. I grew up in Lagos, moving from Surulere to Iyanu-Paja.
            As a
            <span className="text-orange-300 font-bold"> Filmmaker</span>,{' '}
            <span className="text-orange-300 font-bold"> Cinematographer</span>,{' '}
            <span className="text-orange-300 font-bold"> Director</span> and{' '}
            <span className="text-orange-300 font-bold"> Video editor</span> you
            can say I'm a versatile content creator. In 2022, I founded
            Rhemaction Studio, where I shot my first movie and wrote the
            script—though scriptwriting isn't my primary focus. I ventured into
            Nollywood in 2019 with a clear goal: to become one of the greatest
            editors in the industry. Rhemaction Studio, named after the word
            "rhema," reflects my faith and commitment. Today, I run a thriving
            post-production studio, where we handle content creation, direction,
            animation, graphic design, and collaborate with a talented team.
          </p>
          <h1 className="text-4xl font-bold mt-5">
            <span className="text-orange-300">OUR</span> MISSION
          </h1>
          <p className='text-sm'>
            Our mission is to deliver cinematic excellence through top-tier
            video editing, post-production, and visual storytelling. We aim to
            be the go-to studio for filmmakers, content creators, and brands
            seeking to bring their visions to life. With a passion for
            storytelling and cutting-edge editing techniques, our team is
            dedicated to crafting compelling, high-quality visuals that
            captivate audiences and leave a lasting impact. We are committed to
            pushing creative boundaries, ensuring that every project we touch is
            polished, immersive, and exceeds expectations.
          </p>
          <h1 className="text-4xl font-bold mt-5">
            <span className="text-orange-300">OUR</span> VISION
          </h1>
          <p className='text-sm'>
            To be a leading force in the film industry, revolutionizing video
            editing and post-production with cutting-edge creativity and
            technology. We strive to empower filmmakers, content creators, and
            brands by delivering visually stunning, emotionally compelling, and
            seamlessly crafted stories that captivate audiences worldwide. Our
            goal is to set new standards in cinematic storytelling, making our
            studio the ultimate destination for those who seek excellence in
            film editing and post-production.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutScreen;
