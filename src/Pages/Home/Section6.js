import React from "react";
import { Container, Row,Carousel } from "react-bootstrap";
import User1 from "../../assets/blog/review-author-1.jpg"
import User2 from "../../assets/blog/review-author-2.jpg"
import User3 from "../../assets/blog/review-author-3.jpg"
import User5 from "../../assets/blog/review-author-5.jpg"



const Section6 = () => {
  return (
    <div>
      <section className="blog_section">
        <Container>
          <Row>
            <Carousel>
              <Carousel.Item>
                <Carousel.Caption>
                  <div className="user_img">
                    <img src={User1} className="img-fluid" alt="brand1" />
                  </div>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, non nisi! Ea itaque consectetur vel excepturi quam repellendus perspiciatis voluptatem vitae, voluptates nulla iusto ducimus dolores mollitia similique provident reprehenderit.
                  </p>
                  <div className="item_rating mb-2">
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                  </div>
                  <h5> BY AMELIE NEWLOVE</h5>
                </Carousel.Caption>
              </Carousel.Item>

              <Carousel.Item>
                <Carousel.Caption>
                  <div className="user_img">
                    <img src={User1} className="img-fluid" alt="user1" />
                  </div>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, non nisi! Ea itaque consectetur vel excepturi quam repellendus perspiciatis voluptatem vitae, voluptates nulla iusto ducimus dolores mollitia similique provident reprehenderit.
                  </p>
                  <div className="item_rating mb-2">
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                  </div>
                  <h5> BY AMELIE NEWLOVE</h5>
                </Carousel.Caption>
              </Carousel.Item>

              <Carousel.Item>
                <Carousel.Caption>
                  <div className="user_img">
                    <img src={User2} className="img-fluid" alt="user2" />
                  </div>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, non nisi! Ea itaque consectetur vel excepturi quam repellendus perspiciatis voluptatem vitae, voluptates nulla iusto ducimus dolores mollitia similique provident reprehenderit.
                  </p>
                  <div className="item_rating mb-2">
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                  </div>
                  <h5> BY AMELIE NEWLOVE</h5>
                </Carousel.Caption>
              </Carousel.Item>

              <Carousel.Item>
                <Carousel.Caption>
                  <div className="user_img">
                    <img src={User3} className="img-fluid" alt="User3" />
                  </div>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, non nisi! Ea itaque consectetur vel excepturi quam repellendus perspiciatis voluptatem vitae, voluptates nulla iusto ducimus dolores mollitia similique provident reprehenderit.
                  </p>
                  <div className="item_rating mb-2">
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                  </div>
                  <h5> BY AMELIE NEWLOVE</h5>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <Carousel.Caption>
                  <div className="user_img">
                    <img src={User5} className="img-fluid" alt="User5" />
                  </div>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, non nisi! Ea itaque consectetur vel excepturi quam repellendus perspiciatis voluptatem vitae, voluptates nulla iusto ducimus dolores mollitia similique provident reprehenderit.
                  </p>
                  <div className="item_rating mb-2">
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                  </div>
                  <h5> BY AMELIE NEWLOVE</h5>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default Section6;
