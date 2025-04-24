import React from 'react';
import '../styles/ProjectsExperience.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faCheckCircle, faGlobe, faUserShield, faShoppingCart,
  faDatabase, faBookOpen, faPalette, faCode, faMobile, faSearch,
  faServer, faUsers, faChartLine, faBrain, faLaptopCode, 
  faLayerGroup, faClock, faPuzzlePiece, faDownload
} from '@fortawesome/free-solid-svg-icons';

const ProjectsExperience = () => {
  return (
    <section id="projects-experience" className="projects-experience fade-in">
      <div className="section-container">
        {/* Training Section */}
        <div className="section-content">
          <h2>Training</h2>
          <div className="cards-grid">
            {/* DSA Training */}
            <div className="card">
              <div className="card-content">
                <h3>Mastery in Data Structures & Algorithms</h3>
                <p className="card-description">
                  Completed intensive hands-on training focused on mastering core DSA concepts and problem-solving skills, building a strong foundation in algorithmic thinking and efficient coding practices.
                </p>
                <div className="features-list">
                  <h4>Key Achievements:</h4>
                  <ul>
                    <li>
                      <FontAwesomeIcon icon={faLayerGroup} className="feature-icon" /> 
                      Covered advanced topics including recursion, backtracking, dynamic programming, trees, graphs, and greedy algorithms
                    </li>
                    <li>
                      <FontAwesomeIcon icon={faLaptopCode} className="feature-icon" /> 
                      Practiced and solved 100+ curated problems across major coding platforms
                    </li>
                    <li>
                      <FontAwesomeIcon icon={faBrain} className="feature-icon" /> 
                      Strengthened algorithmic thinking and coding speed for technical interviews
                    </li>
                    <li>
                      <FontAwesomeIcon icon={faPuzzlePiece} className="feature-icon" /> 
                      Developed ability to break down complex problems into optimal solutions
                    </li>
                    <li>
                      <FontAwesomeIcon icon={faClock} className="feature-icon" /> 
                      Mastered time/space complexity analysis for efficient problem-solving
                    </li>
                  </ul>
                </div>
                <div className="technologies">
                  <h4>Topics Covered:</h4>
                  <div className="tech-tags">
                    <span>Data Structures</span>
                    <span>Algorithms</span>
                    <span>Dynamic Programming</span>
                    <span>Graph Theory</span>
                    <span>Problem Solving</span>
                  </div>
                </div>
                <div className="card-meta">
                  <span className="status">Completed</span>
                </div>
              </div>
              <div className="card-image">
                <img src="/images/training/dsa.png" alt="DSA Training" />
              </div>
            </div>
          </div>
        </div>

        {/* Projects Section */}
        <div className="section-content">
          <h2>Projects</h2>
          <div className="cards-grid">
            {/* Manvir Blogs Project */}
            <div className="card">
              <div className="card-content">
                <h3>Manvir Blogs</h3>
                <p className="card-description">
                  An educational platform dedicated to Data Structures and Algorithms learning, featuring comprehensive content management and user engagement features.
                </p>
                <div className="features-list">
                  <h4>Key Features:</h4>
                  <ul>
                    <li><FontAwesomeIcon icon={faBookOpen} className="feature-icon" /> Interactive DSA learning resources</li>
                    <li><FontAwesomeIcon icon={faUserShield} className="feature-icon" /> Secure admin panel for content management</li>
                    <li><FontAwesomeIcon icon={faCode} className="feature-icon" /> Clean and intuitive code organization</li>
                    <li><FontAwesomeIcon icon={faMobile} className="feature-icon" /> Responsive design for all devices</li>
                    <li><FontAwesomeIcon icon={faSearch} className="feature-icon" /> SEO optimized content structure</li>
                  </ul>
                </div>
                <div className="technologies">
                  <h4>Technologies Used:</h4>
                  <div className="tech-tags">
                    <span>MongoDB</span>
                    <span>Express.js</span>
                    <span>React.js</span>
                    <span>Node.js</span>
                    <span>Tailwind CSS</span>
                  </div>
                </div>
                <div className="card-meta">
                  <a href="https://manvirblogs.netlify.app" target="_blank" rel="noopener noreferrer" className="website-link">
                    <FontAwesomeIcon icon={faGlobe} /> manvirblogs.netlify.app
                  </a>
                  <span className="status">Live</span>
                </div>
              </div>
              <div className="card-image">
                <img src="/images/projects/blog.png" alt="Manvir Blogs Platform" />
              </div>
            </div>

            {/* Ueir Organic Project */}
            <div className="card">
              <div className="card-content">
                <h3>Ueir Organic</h3>
                <p className="card-description">
                  A comprehensive e-commerce platform for organic products, featuring advanced inventory management, secure payments, and seamless order processing.
                </p>
                <div className="features-list">
                  <h4>Key Features:</h4>
                  <ul>
                    <li><FontAwesomeIcon icon={faShoppingCart} className="feature-icon" /> Complete e-commerce functionality</li>
                    <li><FontAwesomeIcon icon={faDatabase} className="feature-icon" /> Advanced inventory tracking system</li>
                    <li><FontAwesomeIcon icon={faServer} className="feature-icon" /> Secure payment gateway integration</li>
                    <li><FontAwesomeIcon icon={faUsers} className="feature-icon" /> Customer account management</li>
                    <li><FontAwesomeIcon icon={faChartLine} className="feature-icon" /> Sales analytics and reporting</li>
                  </ul>
                </div>
                <div className="technologies">
                  <h4>Technologies Used:</h4>
                  <div className="tech-tags">
                    <span>React.js</span>
                    <span>Node.js</span>
                    <span>MongoDB</span>
                    <span>Express.js</span>
                    <span>Redux</span>
                  </div>
                </div>
                <div className="card-meta">
                  <a href="http://ueirorganic.com" target="_blank" rel="noopener noreferrer" className="website-link">
                    <FontAwesomeIcon icon={faGlobe} /> ueirorganic.com
                  </a>
                  <span className="status">Live</span>
                </div>
              </div>
              <div className="card-image">
                <img src="/images/projects/organic.png" alt="Ueir Organic E-commerce" />
              </div>
            </div>
          </div>
        </div>

        {/* Experience Section */}
        <div className="section-content">
          <h2>Experience</h2>
          <div className="cards-grid">
            {/* Soul Interior Website */}
            <div className="card">
              <div className="card-content">
                <h3>Soul Interior Website</h3>
                <p className="card-description">
                  Developed a professional business website for a local interior design entrepreneur to showcase services, attract leads, and build an online presence.
                </p>
                <div className="features-list">
                  <h4>Key Achievements:</h4>
                  <ul>
                    <li><FontAwesomeIcon icon={faPalette} className="feature-icon" /> Designed engaging and responsive frontend with clean design and usability</li>
                    <li><FontAwesomeIcon icon={faCode} className="feature-icon" /> Built backend to handle dynamic content and form submissions</li>
                    <li><FontAwesomeIcon icon={faDatabase} className="feature-icon" /> Integrated MongoDB for efficient data storage and content management</li>
                    <li><FontAwesomeIcon icon={faMobile} className="feature-icon" /> Ensured smooth performance and mobile compatibility</li>
                    <li><FontAwesomeIcon icon={faSearch} className="feature-icon" /> Implemented SEO-friendly structure for maximum reach</li>
                  </ul>
                </div>
                <div className="technologies">
                  <h4>Technologies Used:</h4>
                  <div className="tech-tags">
                    <span>React.js</span>
                    <span>Tailwind CSS</span>
                    <span>Node.js</span>
                    <span>Express.js</span>
                    <span>MongoDB</span>
                  </div>
                </div>
                <div className="card-meta">
                  <a href="https://soulinterior.in" target="_blank" rel="noopener noreferrer" className="website-link">
                    <FontAwesomeIcon icon={faGlobe} /> soulinterior.in
                  </a>
                  <span className="status">Live</span>
                </div>
              </div>
              <div className="card-image">
                <img src="/images/experience/soul.png" alt="Soul Interior Website" />
              </div>
            </div>

            {/* LTC Pumps Experience */}
            <div className="card">
              <div className="card-content">
                <h3>LTC Pumps</h3>
                <p className="card-description">
                  Led the development of a comprehensive business website for submersible pumps, implementing features that significantly improved business metrics and customer engagement.
                </p>
                <div className="features-list">
                  <h4>Key Achievements:</h4>
                  <ul>
                    <li><FontAwesomeIcon icon={faGlobe} className="feature-icon" /> Developed full-featured business website with admin portal</li>
                    <li><FontAwesomeIcon icon={faUsers} className="feature-icon" /> Implemented inquiry system boosting leads by 20%</li>
                    <li><FontAwesomeIcon icon={faChartLine} className="feature-icon" /> Generated 3 lakh profit within 2 months</li>
                    <li><FontAwesomeIcon icon={faDatabase} className="feature-icon" /> Built efficient product management system</li>
                    <li><FontAwesomeIcon icon={faSearch} className="feature-icon" /> Optimized for search engines and performance</li>
                  </ul>
                </div>
                <div className="technologies">
                  <h4>Technologies Used:</h4>
                  <div className="tech-tags">
                    <span>React.js</span>
                    <span>Node.js</span>
                    <span>Express.js</span>
                    <span>MongoDB</span>
                    <span>Tailwind CSS</span>
                  </div>
                </div>
                <div className="card-meta">
                  <a href="https://ltcpumps.netlify.app" target="_blank" rel="noopener noreferrer" className="website-link">
                    <FontAwesomeIcon icon={faGlobe} /> ltcpumps.netlify.app
                  </a>
                  <span className="status">Live</span>
                </div>
              </div>
              <div className="card-image">
                <img src="/images/experience/ltc.png" alt="LTC Pumps Website" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsExperience; 