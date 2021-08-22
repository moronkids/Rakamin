import React from 'react';
import PhotoProfile from 'assets/img/photoProfile.svg';

export default function section1() {
<<<<<<< HEAD
    return (
        <div>
            <section>
                <div className="section-1">
                    <div className="d-md-flex d-block section-1__wrap justify-content-between">
                        <div className="img-wrapper col-12 d-md-none d-block px-0 mx-0 text-center">
                            <img src={PhotoProfile} alt="" srcSet="" />
                        </div>
                        <div className="title col-md-8 col-12 px-0 mx-0 text-left">
                            <div className="wrapp">
                                <h1>
                                    John Doe
                                    <br />
                                    Creative Technologist
                                </h1>
                                <div className="desc">
                                    Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                                    amet sint. Velit officia consequat duis enim velit mollit.
                                    Exercitation veniam consequat sunt nostrud amet.
                                </div>
                            </div>
                        </div>
                        <div className="img-wrapper col-md-4 col-12 d-md-block d-none px-0 mx-0 text-right">
                            <img src={PhotoProfile} alt="" srcSet="" />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
=======
  return (
    <div>
      <section>
        <div className="section-1">
          <div className="d-flex section-1__wrap justify-content-between">
            <div className="title col-md-6 text-left">
              <h1>
                John Doe
                <br />
                Creative Technologist
              </h1>
              <div className="desc">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
              </div>
            </div>
            <div className="img-wrapper col-md-4 text-right">
              <img src={PhotoProfile} alt="" srcSet="" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
>>>>>>> 84a14fc (feat: section1)
}
