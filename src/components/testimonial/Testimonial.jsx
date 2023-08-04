import "./testimonial.css";
import { testimonial } from "../../data";
const Testimonial = () => {
  return (
    <section id="testimonial" className="flex testimonial__section section__padding">
      <div className="flex testimonial__content">
        <div className="flex testimonial__heading">
          <p>Testimonial</p>
          <h2>What Our Happy User Says</h2>
        </div>

        <div className="flex testimonials">
          <div className="flex">
            {testimonial.map(({ id, rating, comment, img, name, small }) => {
              return (
                <div className="testimonial" key={id}>
                  <img src={rating} alt="" />
                  <p>{comment}</p>
                  <div className="testimonial__profile">
                    <img src={img} alt="" />
                    <span>
                      <h5>{name}</h5>
                      <small>{small}</small>
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
