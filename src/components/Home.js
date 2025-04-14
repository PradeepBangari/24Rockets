import marsMission from '../images/mars-mission.jpg';
import habitat from '../images/habitat.jpg';
import resourceExtraction from '../images/resource-extraction.jpg';
import lifeSupport from '../images/life-support.jpg';

function Home() {
  return (
    <div>
      {/* Hero Section */}
      <div className="bg-dark text-white py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <h1 className="display-3 fw-bold">Mars Mission Solutions</h1>
              <p className="lead">Pioneering the Future of Mars Exploration</p>
              <a href="/solutions" className="btn btn-primary btn-lg shadow">Explore Solutions</a>
            </div>
            <div className="col-md-6 text-center">
              <img src={marsMission} alt="Mars Mission" className="img-fluid shadow" style={{ maxWidth: '300px' }} />
            </div>
          </div>
        </div>
      </div>

      {/* Solutions Section */}
      <div className="container my-5">
        <div className="text-center mb-5">
          <h2 className="display-5 fw-bold">Our Solutions</h2>
          <p className="lead">Innovative technologies for a sustainable Mars mission</p>
        </div>
        <div className="row row-cols-1 row-cols-md-3 g-4">
          <div className="col">
            <div className="card h-100 border-0 shadow">
              <img src={habitat} className="card-img-top" alt="Habitat Solutions" />
              <div className="card-body">
                <h5 className="card-title">Habitat Solutions</h5>
                <p className="card-text">Advanced living spaces designed for Mars colonization.</p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card h-100 border-0 shadow">
              <img src={resourceExtraction} className="card-img-top" alt="Resource Extraction" />
              <div className="card-body">
                <h5 className="card-title">Resource Extraction</h5>
                <p className="card-text">Innovative technologies for Mars resource utilization.</p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card h-100 border-0 shadow">
              <img src={lifeSupport} className="card-img-top" alt="Life Support Systems" />
              <div className="card-body">
                <h5 className="card-title">Life Support Systems</h5>
                <p className="card-text">Reliable systems for sustaining life on Mars.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mars Habitat Solutions Section */}
      <div className="bg-light py-5">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="display-5 fw-bold">Mars Habitat Solutions</h2>
            <p className="lead">Innovative solutions for sustainable living on Mars</p>
          </div>
          <div className="row g-4">
            <div className="col-md-6">
              <div className="card h-100 border-0 shadow">
                <div className="card-body">
                  <h3 className="card-title mb-4 text-center" 
                      style={{ 
                        color: '#FF9933', 
                        borderBottom: '2px solid #FF9933',
                        padding: '10px',
                        border: '2px solid #FF9933',
                        borderRadius: '8px'
                      }}>
                    Living Spaces
                  </h3>
                  <ul className="list-unstyled">
                    <li className="mb-3">
                      <h5>Dome Habitats</h5>
                      <p className="text-muted">Developing pressurized dome structures with radiation shielding</p>
                    </li>
                    <li className="mb-3">
                      <h5>Underground Bunkers</h5>
                      <p className="text-muted">Utilizing Mars' natural caves and creating underground living spaces</p>
                    </li>
                    <li className="mb-3">
                      <h5>Modular Living Pods</h5>
                      <p className="text-muted">Expandable and interconnected living modules for growing colonies</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-md-6">
              <div className="card h-100 border-0 shadow">
                <div className="card-body">
                  <h3 className="card-title mb-4 text-center" 
                      style={{ 
                        color: '#FF9933', 
                        borderBottom: '2px solid #FF9933',
                        padding: '10px',
                        border: '2px solid #FF9933',
                        borderRadius: '8px'
                      }}>
                    Life Support
                  </h3>
                  <ul className="list-unstyled">
                    <li className="mb-3">
                      <h5>Water Recycling Units</h5>
                      <p className="text-muted">Closed-loop water purification and recycling systems</p>
                    </li>
                    <li className="mb-3">
                      <h5>Oxygen Generation Plants</h5>
                      <p className="text-muted">Converting Mars' CO2 atmosphere into breathable oxygen</p>
                    </li>
                    <li className="mb-3">
                      <h5>Hydroponics Facilities</h5>
                      <p className="text-muted">Sustainable food production in controlled environments</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-md-6">
              <div className="card h-100 border-0 shadow">
                <div className="card-body">
                  <h3 className="card-title mb-4 text-center" 
                      style={{ 
                        color: '#FF9933', 
                        borderBottom: '2px solid #FF9933',
                        padding: '10px',
                        border: '2px solid #FF9933',
                        borderRadius: '8px'
                      }}>
                    Infrastructure
                  </h3>
                  <ul className="list-unstyled">
                    <li className="mb-3">
                      <h5>Energy Storage Systems</h5>
                      <p className="text-muted">Advanced battery and power management solutions</p>
                    </li>
                    <li className="mb-3">
                      <h5>Thermal Control Units</h5>
                      <p className="text-muted">Managing extreme temperature variations on Mars</p>
                    </li>
                    <li className="mb-3">
                      <h5>Waste Management Systems</h5>
                      <p className="text-muted">Efficient waste processing and resource recovery</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-md-6">
              <div className="card h-100 border-0 shadow">
                <div className="card-body">
                  <h3 className="card-title mb-4 text-center" 
                      style={{ 
                        color: '#FF9933', 
                        borderBottom: '2px solid #FF9933',
                        padding: '10px',
                        border: '2px solid #FF9933',
                        borderRadius: '8px'
                      }}>
                    Safety Systems
                  </h3>
                  <ul className="list-unstyled">
                    <li className="mb-3">
                      <h5>Radiation Shielding Systems</h5>
                      <p className="text-muted">Protection from harmful cosmic and solar radiation</p>
                    </li>
                    <li className="mb-3">
                      <h5>Emergency Shelters</h5>
                      <p className="text-muted">Rapid deployment safe havens for emergency situations</p>
                    </li>
                    <li className="mb-3">
                      <h5>Airlock Systems</h5>
                      <p className="text-muted">Advanced airlocks for safe entry and exit procedures</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
