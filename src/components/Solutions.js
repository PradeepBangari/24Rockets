import habitat from '../images/habitat.jpg';
import resources from '../images/resource-extraction.jpg';
import lifeSupport from '../images/life-support.jpg';
import transport from '../images/transport.jpg';

function Solutions() {
  const solutions = [
    {
      title: "Habitat Development",
      description: "Sustainable living spaces for Mars colonization",
      image: habitat
    },
    {
      title: "Resource Extraction",
      description: "Advanced technologies for Mars resource utilization",
      image: resources
    },
    {
      title: "Life Support Systems",
      description: "Reliable systems for maintaining life on Mars",
      image: lifeSupport
    },
    {
      title: "Transportation",
      description: "Efficient Mars surface transportation solutions",
      image: transport
    }
  ];

  return (
    <div className="container py-5">
      <h2 className="text-center mb-5">Our Solutions</h2>
      <div className="row g-4">
        {solutions.map((solution, index) => (
          <div key={index} className="col-md-6 col-lg-3">
            <div className="card h-100 border-0 shadow">
              <img src={solution.image} className="card-img-top" alt={solution.title} />
              <div className="card-body">
                <h5 className="card-title">{solution.title}</h5>
                <p className="card-text">{solution.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Solutions;