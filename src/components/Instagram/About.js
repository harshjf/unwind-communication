"use client";

import React, { useState, useEffect } from "react";
import ModalForm from "../Common/Modal/ModalForm";
import Image from "next/image";

const About = () => {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <>
      <section id="about" className="about-area pt-70 pb-70">
        <div className="container-fluid">
          <div className="row align-items-center">
            {isMobile && (
              <h2 style={{ color: "#041d33", textAlign: "center" }}>
                About Us
              </h2>
            )}
            <div
              className="col-lg-5 col-md-12"
              data-aos="fade-up"
              data-aos-delay="100"
              data-aos-duration="800"
              data-aos-once="true"
            >
              <div className="about-image">
                <Image
                  src="/images/about/1.png"
                  className="main-image"
                  alt="image"
                  width={680}
                  height={558}
                  style={{ height: "350px", width: "600px" }}
                />
              </div>
            </div>

            <div
              className="col-lg-7 col-md-12"
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-duration="800"
              data-aos-once="true"
            >
              <div className="about-content">
                {!isMobile && <h2 style={{ color: "#041d33" }}>About Us</h2>}

                <p>
                  At Unwind Communications, we bring most stunning destinations
                  and venues to life on streaming platforms, creating a visual
                  experience that resonates worldwide.
                </p>
                <p>
                  Our expertise extends beyond the initial presentation. We
                  amplify your story through:
                  <ul>
                    <li>
                      <b>Targeted media PR</b>
                    </li>
                    <li>
                      <b>Strategic Digital Marketing</b>
                    </li>
                    <li>
                      <b>360° Promotion Strategy</b>
                    </li>
                  </ul>
                </p>
                <p>
                  within the <b>MICE, Travel </b> and <b>Wedding Industries.</b>{" "}
                  We don’t just enhance brand visibility; we forge powerful
                  narratives that open up new realms of opportunity
                </p>

                {/* <div className="btn-box"> */}
                {/* <ModalForm /> */}

                {/* <a href="mailto:hello@alikamaya.com" className="email"> */}
                {/* hello@unwindcommunication.com */}
                {/* </a> */}
                {/* </div> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
