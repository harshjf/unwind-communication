"use client";

import React, { useState } from "react";
import ModalVideo from "react-modal-video";
import Image from "next/image";

const Section4 = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <ModalVideo
        channel="youtube"
        youtube={{ mute: 0, autoplay: 0 }}
        isOpen={isOpen}
        videoId="8v_jldiqJ6E"
        onClose={() => setOpen(false)}
      />

      <section className="video-area">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div
              className="col-lg-6 col-md-12"
              data-aos="fade-up"
              data-aos-delay="100"
              data-aos-duration="800"
              data-aos-once="true"
            >
              <div className="video-content">
                <h1>
                  <b>
                    <span style={{ color: "#973d5d" }}>INDIA-RUSSIA</span>{" "}
                    BUSINESS FORUM
                  </b>
                </h1>
                <p>
                  <b>
                    A Prestigious Event Hosted by{" "}
                    <span style={{ color: "#973d5d" }}>Shefali Saxena</span>
                  </b>
                </p>
                <ul>
                  <li>
                    <p>
                      <b>Empowering Global Collaboration</b>: Hosted the
                      distinguished India-Russia Business Forum, featuring a
                      keynote address by{" "}
                      <span style={{ color: "#b80a06" }}>
                        Hon&apos;ble External Affairs Minister{" "}
                        <b>Dr. S. Jaishankar</b>
                      </span>{" "}
                      on bilateral agreements and business connectivity between
                      2 countries.
                    </p>
                  </li>
                  <li>
                    <p>
                      <b>Trusted by the Ministry of External Affairs</b>: With
                      her expertise in orchestrating protocol and special
                      events, Shefali Saxena continues to solidify her role as a
                      trusted professional for high-profile national and
                      international events.
                    </p>
                  </li>
                </ul>
              </div>
            </div>

            <div
              className="col-lg-6 col-md-12"
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-duration="800"
              data-aos-once="true"
            >
              <div className="video-image">
                <Image
                  src="/images/work/india-russia.png"
                  alt="image"
                  width={750}
                  height={500}
                  className="responsive-image"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Section4;
