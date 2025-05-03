import React, { useState } from 'react';

function ResearchAgent() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchResults, setSearchResults] = useState([]);

  // Research categories
  const categories = [
    { id: 'all', name: 'All Categories' },
    { id: 'habitat', name: 'Habitat Solutions' },
    { id: 'resources', name: 'Resource Extraction' },
    { id: 'lifesupport', name: 'Life Support Systems' }
  ];

  // Research database
  const researchData = [
    {
      id: 1,
      category: 'habitat',
      title: 'Dome Habitats',
      description: 'Pressurized dome structures with radiation shielding for Mars surface habitation.',
      details: 'Our research focuses on developing lightweight yet durable materials that can withstand Mars\'s harsh environment while providing adequate radiation protection. Current prototypes utilize a multi-layer approach with regolith-based outer shells and specialized polymer inner layers.',
      imageUrl: '/path-to-image',
      tags: ['radiation shielding', 'pressurized environments', 'dome structures']
    },
    {
      id: 2,
      category: 'habitat',
      title: 'Underground Bunkers',
      description: 'Utilizing Mars\' natural caves and creating underground living spaces for enhanced protection.',
      details: 'Underground habitats offer superior radiation protection and temperature stability. Our research involves mapping potential cave systems on Mars and developing specialized excavation equipment designed for the Martian environment.',
      imageUrl: '/path-to-image',
      tags: ['subsurface habitation', 'natural caves', 'excavation technology']
    },
    {
      id: 3,
      category: 'habitat',
      title: 'Modular Living Pods',
      description: 'Expandable and interconnected living modules for growing colonies on Mars.',
      details: 'Our modular habitat system allows for incremental expansion as colony needs grow. Each module is designed for specific functions (living, research, medical, etc.) and can be connected through standardized interfaces.',
      imageUrl: '/path-to-image',
      tags: ['modular design', 'expandable habitats', 'standardized interfaces']
    },
    {
      id: 4,
      category: 'lifesupport',
      title: 'Water Recycling Units',
      description: 'Closed-loop water purification and recycling systems for Mars habitats.',
      details: 'Our advanced water recycling technology achieves over 99% efficiency in water recovery from all sources including human waste, humidity, and used water. The system employs a multi-stage filtration process combined with UV sterilization.',
      imageUrl: '/path-to-image',
      tags: ['water purification', 'closed-loop systems', 'resource efficiency']
    },
    {
      id: 5,
      category: 'lifesupport',
      title: 'Oxygen Generation Plants',
      description: 'Converting Mars\' CO2 atmosphere into breathable oxygen for human habitation.',
      details: 'Our MOXIE-inspired oxygen generation system scales up the solid oxide electrolysis process to produce sufficient oxygen for human habitation. Current research focuses on increasing efficiency and reducing power requirements.',
      imageUrl: '/path-to-image',
      tags: ['atmospheric processing', 'oxygen production', 'electrolysis']
    },
    {
      id: 6,
      category: 'lifesupport',
      title: 'Hydroponics Facilities',
      description: 'Sustainable food production in controlled environments for Mars colonies.',
      details: 'Our hydroponics research focuses on optimizing plant growth under Mars lighting conditions and minimizing resource usage. Current systems can produce a variety of vegetables and herbs using recycled water and nutrients.',
      imageUrl: '/path-to-image',
      tags: ['food production', 'controlled agriculture', 'resource efficiency']
    },
    {
      id: 7,
      category: 'resources',
      title: 'Regolith Processing',
      description: 'Extracting useful materials from Martian soil for construction and manufacturing.',
      details: 'Our regolith processing technology can extract iron, aluminum, and silicon from Martian soil using minimal energy and imported resources. These materials form the foundation of our in-situ manufacturing capabilities.',
      imageUrl: '/path-to-image',
      tags: ['ISRU', 'material extraction', 'manufacturing']
    },
    {
      id: 8,
      category: 'resources',
      title: 'Water Extraction Systems',
      description: 'Technologies for extracting water from Mars\' subsurface ice deposits.',
      details: 'Our drilling and extraction systems are designed to access subsurface ice deposits and extract water with minimal energy requirements. The extracted water serves as a critical resource for life support, agriculture, and fuel production.',
      imageUrl: '/path-to-image',
      tags: ['water mining', 'ice extraction', 'subsurface drilling']
    },
    {
      id: 9,
      category: 'resources',
      title: 'Atmospheric Harvesting',
      description: 'Collecting and processing Mars\' atmosphere for resource utilization.',
      details: 'Our atmospheric processing units can extract carbon dioxide, nitrogen, and argon from the Martian atmosphere. These gases serve as raw materials for fuel production, plant growth, and buffer gases in habitats.',
      imageUrl: '/path-to-image',
      tags: ['atmospheric processing', 'gas extraction', 'ISRU']
    }
  ];

  // Handle search
  const handleSearch = () => {
    let results = [];
    
    if (searchQuery.trim() === '') {
      // If search is empty, show all or filtered by category
      results = activeCategory === 'all' 
        ? researchData 
        : researchData.filter(item => item.category === activeCategory);
    } else {
      // Search by query and optionally filter by category
      const filtered = activeCategory === 'all'
        ? researchData
        : researchData.filter(item => item.category === activeCategory);
      
      // Search in title, description, details and tags
      results = filtered.filter(item => {
        const searchLower = searchQuery.toLowerCase();
        return (
          item.title.toLowerCase().includes(searchLower) ||
          item.description.toLowerCase().includes(searchLower) ||
          item.details.toLowerCase().includes(searchLower) ||
          item.tags.some(tag => tag.toLowerCase().includes(searchLower))
        );
      });
    }
    
    setSearchResults(results);
  };

  // Handle category change
  const handleCategoryChange = (categoryId) => {
    setActiveCategory(categoryId);
    // Re-run search with new category
    let results = [];
    
    if (categoryId === 'all') {
      results = searchQuery.trim() === '' 
        ? researchData 
        : researchData.filter(item => {
            const searchLower = searchQuery.toLowerCase();
            return (
              item.title.toLowerCase().includes(searchLower) ||
              item.description.toLowerCase().includes(searchLower) ||
              item.details.toLowerCase().includes(searchLower) ||
              item.tags.some(tag => tag.toLowerCase().includes(searchLower))
            );
          });
    } else {
      results = researchData.filter(item => item.category === categoryId);
      
      if (searchQuery.trim() !== '') {
        const searchLower = searchQuery.toLowerCase();
        results = results.filter(item => {
          return (
            item.title.toLowerCase().includes(searchLower) ||
            item.description.toLowerCase().includes(searchLower) ||
            item.details.toLowerCase().includes(searchLower) ||
            item.tags.some(tag => tag.toLowerCase().includes(searchLower))
          );
        });
      }
    }
    
    setSearchResults(results);
  };

  // Initialize with all research data
  React.useEffect(() => {
    setSearchResults(researchData);
  }, []);

  return (
    <div className="container py-5 mt-5">
      <div className="row mb-5">
        <div className="col-lg-12 text-center">
          <h1 className="display-5 fw-bold mb-3">Mars Research Agent</h1>
          <p className="lead">Explore cutting-edge research for Mars habitat solutions, resource extraction, and life support systems</p>
        </div>
      </div>
      
      {/* Search and Filter Section */}
      <div className="row mb-5">
        <div className="col-md-8 mx-auto">
          <div className="card border-0 shadow">
            <div className="card-body p-4">
              <div className="input-group mb-4">
                <input 
                  type="text" 
                  className="form-control form-control-lg" 
                  placeholder="Search research topics..." 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
                />
                <button 
                  className="btn btn-primary" 
                  type="button"
                  onClick={handleSearch}
                >
                  <i className="bi bi-search"></i> Search
                </button>
              </div>
              
              <div className="d-flex justify-content-center flex-wrap gap-2">
                {categories.map(category => (
                  <button 
                    key={category.id}
                    className={`btn ${activeCategory === category.id ? 'btn-primary' : 'btn-outline-secondary'}`}
                    onClick={() => handleCategoryChange(category.id)}
                  >
                    {category.name}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Research Results */}
      <div className="row g-4">
        {searchResults.length > 0 ? (
          searchResults.map(item => (
            <div key={item.id} className="col-md-6 col-lg-4">
              <div className="card h-100 border-0 shadow hover-shadow transition">
                <div className="card-body">
                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <h5 className="card-title mb-0">{item.title}</h5>
                    <span className="badge bg-primary">
                      {item.category === 'habitat' && 'Habitat'}
                      {item.category === 'resources' && 'Resources'}
                      {item.category === 'lifesupport' && 'Life Support'}
                    </span>
                  </div>
                  <p className="card-text">{item.description}</p>
                  <div className="collapse" id={`details-${item.id}`}>
                    <div className="card card-body bg-light border-0 mb-3">
                      <p className="mb-0">{item.details}</p>
                    </div>
                    <div className="d-flex flex-wrap gap-1 mb-3">
                      {item.tags.map((tag, index) => (
                        <span key={index} className="badge bg-secondary">{tag}</span>
                      ))}
                    </div>
                  </div>
                  <button 
                    className="btn btn-sm btn-outline-primary mt-2" 
                    type="button" 
                    data-bs-toggle="collapse" 
                    data-bs-target={`#details-${item.id}`}
                    aria-expanded="false"
                  >
                    View Research Details
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="col-12 text-center py-5">
            <h4>No research found matching your criteria</h4>
            <p>Try adjusting your search terms or selecting a different category</p>
          </div>
        )}
      </div>
      
      {/* Research Submission Section */}
      <div className="row mt-5 pt-5 border-top">
        <div className="col-lg-6 mx-auto text-center">
          <h2 className="h3 mb-4">Contribute to Our Research</h2>
          <p className="mb-4">Are you working on Mars habitat solutions? Submit your research for review and potential collaboration.</p>
          <button className="btn btn-primary btn-lg" data-bs-toggle="modal" data-bs-target="#researchSubmissionModal">
            Submit Research
          </button>
        </div>
      </div>
      
      {/* Research Submission Modal (would be implemented with form handling) */}
      <div className="modal fade" id="researchSubmissionModal" tabIndex="-1" aria-hidden="true">
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Submit Your Research</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <form>
                <div className="mb-3">
                  <label htmlFor="researchTitle" className="form-label">Research Title</label>
                  <input type="text" className="form-control" id="researchTitle" required />
                </div>
                <div className="mb-3">
                  <label htmlFor="researchCategory" className="form-label">Category</label>
                  <select className="form-select" id="researchCategory" required>
                    <option value="">Select a category</option>
                    <option value="habitat">Habitat Solutions</option>
                    <option value="resources">Resource Extraction</option>
                    <option value="lifesupport">Life Support Systems</option>
                  </select>
                </div>
                <div className="mb-3">
                  <label htmlFor="researchSummary" className="form-label">Brief Summary</label>
                  <textarea className="form-control" id="researchSummary" rows="2" required></textarea>
                </div>
                <div className="mb-3">
                  <label htmlFor="researchDetails" className="form-label">Detailed Description</label>
                  <textarea className="form-control" id="researchDetails" rows="5" required></textarea>
                </div>
                <div className="mb-3">
                  <label htmlFor="researchTags" className="form-label">Keywords/Tags (comma separated)</label>
                  <input type="text" className="form-control" id="researchTags" />
                </div>
                <div className="mb-3">
                  <label htmlFor="researchContact" className="form-label">Contact Information</label>
                  <input type="email" className="form-control" id="researchContact" placeholder="Email address" required />
                </div>
                <div className="mb-3">
                  <label htmlFor="researchFile" className="form-label">Upload Research Paper/Documents (optional)</label>
                  <input type="file" className="form-control" id="researchFile" />
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="button" className="btn btn-primary">Submit Research</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ResearchAgent;