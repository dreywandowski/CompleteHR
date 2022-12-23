import { useState } from "react";
import icon from '../images/flaticon/svg/004-gear.svg';
import conflict from '../images/flaticon/svg/005-conflict.svg';
import meeting from "../images/flaticon/svg/006-meeting.svg" 
import brainstorming from "../images/flaticon/svg/007-brainstorming.svg" 
import consult from "../images/flaticon/svg/001-consultation.svg";
import brainstorming2 from "../images/flaticon/svg/009-brainstorming-2.svg";
import discuss from '../images/flaticon/svg/002-discussion.svg';
import turnover from "../images/flaticon/svg/003-turnover.svg";
import slider from "../images/slider-1.jpg";
import slider2 from "../images/slider-2.jpg"
import slider3 from "../images/slider-3.jpg";

// Create the function
export function AddLibrary(urlOfTheLibrary) {
    const script = document.createElement('script');
    script.src = urlOfTheLibrary;
    script.async = true;
    document.body.appendChild(script);
  }

const HomeComponent = () => {
    return (
        <div className="primary">
     <div className="js-animsition animsition" id="site-wrap" data-animsition-in-class="fade-in" data-animsition-out-class="fade-out">
        
        
            <header className="templateux-navbar" role="banner">
        
              <div className="container"  data-aos="fade-down">
                <div className="row">
        
                  <div className="col-3 templateux-logo">
                    <a href="index.html" className="animsition-link">HumanResources</a>
                  </div>
                  <nav className="col-9 site-nav">
                    <button className="d-block d-md-none hamburger hamburger--spin templateux-toggle templateux-toggle-light ml-auto templateux-toggle-menu" data-toggle="collapse" data-target="#mobile-menu" aria-controls="mobile-menu" aria-expanded="false" aria-label="Toggle navigation">
                      <span className="hamburger-box">
                        <span className="hamburger-inner"></span>
                      </span>
                    </button> 
        
                    <ul className="sf-menu templateux-menu d-none d-md-block">
                      <li className="active">
                        <a href="index.html" className="animsition-link">Home</a>
                      </li>
                      <li><a href="about.html" className="animsition-link">About</a></li>
                      <li>
                        <a href="services.html" className="animsition-link">Services</a>
                        <ul>
                          <li><a href="#">HR Consulting</a></li>
                          <li><a href="#">Leadership Training</a></li>
                          <li>
                            <a href="#">HR Management</a>
                            <ul>
                              <li><a href="#">Operational Management</a></li>
                              <li><a href="#">Corporate Program</a></li>
                              <li>
                                <a href="#">Service 3</a>
                                <ul>
                                  <li><a href="#">Service 1</a></li>
                                  <li><a href="#">Service 2</a></li>
                                  <li><a href="#">Service 3</a></li>
                                </ul>
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </li>
                      <li><a href="blog.html" className="animsition-link">Blog</a></li>
                      <li><a href="contact.html" className="animsition-link">Contact</a></li>
                    </ul>
        
                  </nav>
                  
        
                </div>
              </div>
            </header> 
            
            <div class="templateux-cover" style="background-image: url(images/hero_1.jpg);">
              <div className="container">
                <div className="row align-items-lg-center">
        
                  <div className="col-lg-6 order-lg-1">
                    <h1 className="heading mb-3 text-white" data-aos="fade-up">We Are Your Partners in <strong>Human Resource</strong></h1>
                    <p className="lead mb-5 text-white" data-aos="fade-up"  data-aos-delay="100">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                    <p data-aos="fade-up" data-aos-delay="200"><a href="#" className="btn btn-primary py-3 px-4 mr-3">Get Started</a> <a href="#" class="text-white">Learn More</a></p>
                  </div>
                  
                </div>
              </div>
            </div>
        
            <div className="templateux-section pt-0 pb-0">
              <div className="container">
                <div className="row">
                  <div className="col-md-12 templateux-overlap">
                    <div className="row">
                      <div className="col-md-4" data-aos="fade-up" data-aos-delay="600">
                        <div className="media block-icon-1 d-block text-left">
                          <div className="icon mb-3">
                            <img src={consult} alt="Image" className="img-fluid"/>
                          </div>
                          <div className="media-body">
                            <h3 className="h5 mb-4">Corporate Collaboration</h3>
                            <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
                            <p><a href="#">Learn More</a></p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4" data-aos="fade-up" data-aos-delay="700">
                        <div className="media block-icon-1 d-block text-left">
                          <div className="icon mb-3">
                            <img src={discuss} alt="Image" className="img-fluid"/>
                          </div>
                          <div className="media-body">
                            <h3 className="h5 mb-4">Strategic Partners</h3>
                            <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
                            <p><a href="#">Learn More</a></p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4" data-aos="fade-up" data-aos-delay="800">
                        <div className="media block-icon-1 d-block text-left">
                          <div className="icon mb-3">
                            <img src='{turnover}' alt="Image" className="img-fluid"/>
                          </div>
                          <div className="media-body">
                            <h3 className="h5 mb-4">Infinite Posibilities</h3>
                            <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
                            <p><a href="#">Learn More</a></p>
                          </div>
                        </div>
                      </div>
                      
                    </div>
                  </div>
                </div>
              </div>
            </div> 
        
            <div className="templateux-section">
        
              <div className="container"  data-aos="fade-up">
                <div className="row">
                  <div className="col-lg-7">
                    <h2 className="mb-5">Our Agency</h2>
                    <div className="owl-carousel wide-slider">
                      <div className="item">
                        <img src={slider} alt="Free template by TemplateUX.com" className="img-fluid"/>
                      </div>
                      <div className="item">
                        <img src={slider2} alt="Free template by TemplateUX.com" className="img-fluid"/>
                      </div>
                      <div className="item">
                        <img src={slider3} alt="Free template by TemplateUX.com" className="img-fluid"/>
                      </div>
                    </div> 
                  </div>
                  <div className="col-lg-5 pl-lg-5">
                    <h2 className="mb-5">Why Us?</h2>
                    <div class="accordion" id="accordionExample">
        
        
                      <div className="accordion-item">
                        <h2 className="mb-0 rounded mb-2">
                          <a href="#" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                          Provident alias</a>
                        </h2>
        
                        <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
                          <div className="accordion-body">
                            <p>Lorem ipsum dolor sit amet, <a href="#">Cnsectetur adipisicing</a> elit. Eos quos incidunt, perspiciatis, ad saepe, magnam error adipisci vitae ut provident alias! Odio debitis error ipsum molestiae voluptas accusantium quibusdam animi, soluta explicabo asperiores aliquid, modi natus suscipit deleniti. Corrupti, autem.</p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="accordion-item">
                        <h2 className="mb-0 rounded mb-2">
                          <a href="#" className="collapsed" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            Debitis ad similique tempore
                          </a>
                        </h2>
                        
                        <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
                          <div className="accordion-body">
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat voluptate animi hic quasi sequi odio, vitae dolorum soluta sapiente debitis ad similique tempore, aliquam quae nam deserunt dicta ullam perspiciatis minima, quam. Quis repellat corporis aperiam, veritatis nemo iure inventore.</p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="accordion-item">
                        <h2 className="mb-0 rounded mb-2">
                          <a href="#" className="collapsed" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            Lorem ipsum dolor sit amet
                          </a>
                        </h2>
                        
                        <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
                          <div className="accordion-body">
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum et dolorum libero consequuntur facere molestias beatae quod labore quidem ad quasi eius pariatur quae nam quo soluta optio dicta, doloribus ullam fugit nulla! Itaque necessitatibus eum sed quam eos id!</p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="accordion-item">
                        <h2 className="mb-0 rounded mb-2">
                          <a href="#" className="collapsed" data-toggle="collapse" data-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                            Modi natus suscipit
                          </a>
                        </h2>
        
                        <div id="collapseFour" className="collapse" aria-labelledby="headingFour" data-parent="#accordionExample">
                          <div className="accordion-body">
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos quos incidunt, perspiciatis, ad saepe, magnam error adipisci vitae ut provident alias! Odio debitis error ipsum molestiae voluptas accusantium quibusdam animi, soluta explicabo asperiores aliquid, modi natus suscipit deleniti. Corrupti, autem.</p>
                          </div>
                        </div>
                      </div>
                      
                    </div>
                  </div>
                </div>
              </div>
            </div>
        
            <div class="templateux-section bg-light py-5" id="templateux-counter-section">
              <div className="container">
                <div className="row">
                  <div className="col-md">
                    <div className="templateux-counter text-center">
                      <span className="templateux-number" data-number="99399">0</span>
                      <span className="templateux-label">Number of Clients</span>
                    </div>
                  </div>
                  <div className="col-md">
                    <div className="templateux-counter text-center">
                      <span className="templateux-number" data-number="199">0</span>
                      <span className="templateux-label">Number of Personnel</span>
                    </div>
                  </div>
                  <div className="col-md">
                    <div className="templateux-counter text-center">
                      <span className="templateux-number" data-number="24">0</span>
                      <span className="templateux-label">Years Of Experience</span>
                    </div>
                  </div>    
                </div>
              </div>
              
            </div>
       
        
          <div className="templateux-section pb-0">
            <div className="container">
              <div className="row text-center mb-5">
                <div className="col-12">
                  <h2>The Leadership</h2>
                </div>
              </div>
              <div className="row">
                <div className="col-6 col-sm-6 col-md-6 col-lg-4">
                  <div className="staff staff-img" style="background-image: url(images/person_1.jpg);">
                    <a href="#" className="desc">
                      <h3>Bob Miller</h3>
                      <span>CEO and Co-Founder</span>
                      <div className="parag">
                        <p>Even the all-powerful Pointing has no control about the blind texts</p>
                      </div>
                    </a>
                  </div>
                </div>
                <div className="col-6 col-sm-6 col-md-6 col-lg-4">
                  <div className="staff staff-img" style="background-image: url(images/person_2.jpg);">
                    <a href="#" className="desc">
                      <h3>Jean Smith</h3>
                      <span>CEO and Co-Founder</span>
                      <div className="parag">
                        <p>Even the all-powerful Pointing has no control about the blind texts</p>
                      </div>
                    </a>
                  </div>
                </div>
                <div className="col-6 col-sm-6 col-md-6 col-lg-4">
                  <div className="staff staff-img" style="background-image: url(images/person_3.jpg);">
                    <a href="#" className="desc">
                      <h3>David Wilson</h3>
                      <span>CEO and Co-Founder</span>
                      <div className="parag">
                        <p>Even the all-powerful Pointing has no control about the blind texts</p>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        
          <div className="templateux-section">
            <div className="container">
              <div className="row text-center mb-5">
                <div className="col-12">
                  <h2>Happy Customers</h2>
                </div>
              </div>
              <div className="row justify-content-center">
                <div className="col-md-8 testimonial-wrap">
                  <div className="quote">&ldquo;</div>
                  <div className="owl-carousel wide-slider-testimonial">
                    <div className="item">
                      <blockquote className="block-testomonial">
                        <p>&ldquo;Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.&rdquo;</p>
                        <p><cite>Drew Wilson, CEO and Founder of CoLab</cite></p>
                      </blockquote>
                    </div>
        
                    <div className="item">
                      <blockquote className="block-testomonial">
                        <p>&ldquo;When she reached the first hills of the Italic Mountains, she had a last view back on the skyline of her hometown Bookmarksgrove, the headline of Alphabet Village and the subline of her own road, the Line Lane. Pityful a rethoric question ran over her cheek, then she continued her way.&rdquo;</p>
                        <p><cite>Craig Smith, CEO and Founder of Slite</cite></p>
                      </blockquote>
                    </div>
        
                    <div className="item">
                      <blockquote className="block-testomonial">
                        <p>&ldquo;A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.&rdquo;</p>
                        <p><cite>Bob Robe, CEO and Founder of Fixer</cite></p>
                      </blockquote>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        
          <div className="templateux-section bg-light">
            <div className="container">
              <div className="row mb-5">
                <div className="col-12 text-center mb-5">
                  <h2>Our Services</h2>
                </div>
                <div className="col-md-4 mb-4" data-aos="fade-up">
                  <div className="media block-icon-1 d-block text-center">
                    <div className="icon mb-3">
                      <img src={icon} alt="Image" className="img-fluid"/>
                    </div>
                    <div className="media-body">
                      <h3 className="h5 mb-4">Regular Update</h3>
                      <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
                    </div>
                  </div> 
                </div>
                <div className="col-md-4 mb-4" data-aos="fade-up" data-aos-delay="100">
                  <div className="media block-icon-1 d-block text-center">
                    <div className="icon mb-3">
                      <img src={conflict} alt="Image" className="img-fluid"/>
                    </div>
                    <div className="media-body">
                      <h3 className="h5 mb-4">Infinite Posibilities</h3>
                      <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
                    </div>
                  </div> 
                </div>
                <div className="col-md-4 mb-4" data-aos="fade-up" data-aos-delay="200">
                  <div className="media block-icon-1 d-block text-center">
                    <div className="icon mb-3">
                      <img src={meeting} alt="Image" className="img-fluid"/>
                    </div>
                    <div className="media-body">
                      <h3 className="h5 mb-4">Good Security</h3>
                      <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
                    </div>
                  </div> 
                </div>
        
                <div className="col-md-4 mb-4" data-aos="fade-up" data-aos-delay="300">
                  <div className="media block-icon-1 d-block text-center">
                    <div className="icon mb-3">
                      <img src={brainstorming} alt="Image" className="img-fluid"/>
                    </div>
                    <div className="media-body">
                      <h3 className="h5 mb-4">HR Management</h3>
                      <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 mb-4" data-aos="fade-up" data-aos-delay="400">
                  <div className="media block-icon-1 d-block text-center">
                    <div className="icon mb-3">
                      <img src={consult} alt="Image" className="img-fluid"/>
                    </div>
                    <div className="media-body">
                      <h3 className="h5 mb-4">Intuitive Thinking</h3>
                      <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 mb-4" data-aos="fade-up" data-aos-delay="500">
                  <div className="media block-icon-1 d-block text-center">
                    <div className="icon mb-3">
                      <img src={brainstorming2} alt="Image" className="img-fluid"/>
                    </div>
                    <div className="media-body">
                      <h3 className="h5 mb-4">Play Video</h3>
                      <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
                    </div>
                  </div> 
                </div>
        
              </div>
              <div className="row">
        
                <div className="col-md-12 text-center" data-aos="fade-up" data-aos-delay="100">
                  <p><a href="#" className="btn btn-black py-3 px-4">More Features</a></p>
                </div>
              </div>
            </div>
          </div>
        
          <div className="container templateux-section">
            <div className="row">
              <div className="col-12 col-md-7 mx-auto text-center mb-5">
                <h2>Our Blog</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit reiciendis dolore, facilis ipsam officiis quasi?</p>
              </div>
            </div>
            <div className="d-flex flex-sm-row">
              <a href="#" class="block-thumbnail-1 one-third" style="background-image: url('images/slider-2.jpg'); " data-aos="fade">
                <div className="block-thumbnail-content">
                  <h2>When she reached the first</h2>
                  <span className="post-meta">June 18, 2020  &bullet; by Admin</span>
                </div>
              </a>
              <a href="#" class="block-thumbnail-1 two-third" style="background-image: url('images/slider-1.jpg'); " data-aos="fade" data-aos-delay="100">
                <div className="block-thumbnail-content">
                  <h2>Duden flows by their place</h2>
                  <span className="post-meta">July 17, 2020 &bullet; by Admin</span>
                </div>
              </a>
            </div>
            <div className="d-flex flex-column flex-sm-row">
              <a href="#" class="block-thumbnail-1 two-third" style="background-image: url('images/slider-3.jpg'); " data-aos="fade" data-aos-delay="200">
                <div className="block-thumbnail-content">
                  <h2>Italic Mountains</h2>
                  <span className="post-meta">March 18, 2020  &bullet; by Admin</span>
                </div>
              </a>
              <a href="#" class="block-thumbnail-1 one-third" style="background-image: url('images/slider-4.jpg'); " data-aos="fade" data-aos-delay="300">
                <div className="block-thumbnail-content">
                  <h2>Behind the word mountains</h2>
                  <span className="post-meta">March 22, 2020  &bullet; by Admin</span>
                </div>
              </a>
            </div>
          </div> 
        
        
        </div> 
        
        
        
        <footer className="templateux-footer bg-light">
          <div className="container">
        
            <div className="row mb-5">
              <div className="col-md-4 pr-md-5">
                <div className="block-footer-widget">
                  <h3>About</h3>
                  <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
                </div>
              </div>
        
              <div className="col-md-8">
                <div className="row">
                  <div className="col-md-3">
                    <div className="block-footer-widget">
                      <h3>Learn More</h3>
                      <ul className="list-unstyled">
                        <li><a href="#">How it works?</a></li>
                        <li><a href="#">Useful Tools</a></li>
                        <li><a href="#">Pricing</a></li>
                        <li><a href="#">Sitemap</a></li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="block-footer-widget">
                      <h3>Support</h3>
                      <ul className="list-unstyled">
                        <li><a href="#">FAQ</a></li>
                        <li><a href="#">Contact Us</a></li>
                        <li><a href="#">Help Desk</a></li>
                        <li><a href="#">Knowledgebase</a></li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="block-footer-widget">
                      <h3>About Us</h3>
                      <ul className="list-unstyled">
                        <li><a href="#">About Us</a></li>
                        <li><a href="#">Careers</a></li>
                        <li><a href="#">Terms of Service</a></li>
                        <li><a href="#">Privacy Policy</a></li>
                      </ul>
                    </div>
                  </div>
        
                  <div className="col-md-3">
                    <div className="block-footer-widget">
                      <h3>Connect With Us</h3>
                      <ul className="list-unstyled block-social">
                        <li><a href="#" className="p-1"><span class="icon-facebook-square"></span></a></li>
                        <li><a href="#" className="p-1"><span class="icon-twitter"></span></a></li>
                        <li><a href="#" className="p-1"><span class="icon-github"></span></a></li>
                      </ul>
                    </div>
                  </div>
                </div> 
        
              </div>
            </div> 
        
            <div className="row pt-5 text-center">
              <div className="col-md-12 text-center"><p>
                Copyright &copy;<script>document.write(new Date().getFullYear());</script> All rights reserved | This template is made with <i className="text-danger icon-heart" aria-hidden="true"></i> by <a href="https://colorlib.com" target="_blank" class="text-primary">Colorlib</a>
              </p></div>
            </div>
        
          </div>
        </footer>
        
        {AddLibrary(
  "js/scripts-all.js")}
  {AddLibrary(
  'js/main.js')}
       </div>
        
        
    );
}
 
export default HomeComponent;