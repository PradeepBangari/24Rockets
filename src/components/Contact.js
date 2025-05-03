import React, { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [formError, setFormError] = useState('');

  // Handle input changes
  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id]: value
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      setFormError('Please fill in all required fields');
      return;
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setFormError('Please enter a valid email address');
      return;
    }
    
    // Clear any previous errors
    setFormError('');
    
    // Construct Gmail URL
    const recipientEmail = '24rockets.mail@gmail.com';
    const subject = encodeURIComponent(`[24Rockets] ${formData.subject}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\n\n` +
      `Email: ${formData.email}\n\n` +
      `Message:\n${formData.message}`
    );
    
    // Open Gmail compose window
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${recipientEmail}&su=${subject}&body=${body}`;
    window.open(gmailUrl, '_blank');
    
    // Reset form after submission
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  return (
    <div className="container py-5 mt-5">
      <div className="row">
        <div className="col-lg-6 mb-5">
          <h2 className="display-5 mb-4">Get in Touch</h2>
          <p className="lead mb-5">Have questions about Mars colonization or investment opportunities? We'd love to hear from you.</p>
          
          <div className="mb-4">
            <h5>Office Location</h5>
            <p># Jigani<br />
            Bengaluru - 560105</p>
          </div>

          <div className="mb-4">
            <h5>Contact Info</h5>
            <p>
              Email: 24rockets.mail@gmail.com<br />
            </p>
          </div>

          <div className="mb-4">
            <h5>Social Media</h5>
            <div className="d-flex gap-3">
              <a href="http://www.linkedin.com/in/24rockets" className="btn btn-outline-dark">LinkedIn</a>
              <a href="https://x.com/24__Rockets" className="btn btn-outline-dark">Twitter</a>
              <a href="#" className="btn btn-outline-dark">Instagram</a>
            </div>
          </div>
        </div>

        <div className="col-lg-6">
          <div className="card border-0 shadow-sm">
            <div className="card-body p-4">
              <h3 className="card-title mb-4">Send us a Message</h3>
              
              <form onSubmit={handleSubmit}>
                {formError && (
                  <div className="alert alert-danger mb-4">{formError}</div>
                )}
                
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">Name</label>
                  <input 
                    type="text" 
                    className="form-control" 
                    id="name" 
                    value={formData.name}
                    onChange={handleChange}
                    required 
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email</label>
                  <input 
                    type="email" 
                    className="form-control" 
                    id="email" 
                    value={formData.email}
                    onChange={handleChange}
                    required 
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="subject" className="form-label">Subject</label>
                  <select 
                    className="form-select" 
                    id="subject" 
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select a subject</option>
                    <option value="Research Inquiry">Research Inquiry</option>
                    <option value="Investment Opportunities">Investment Opportunities</option>
                    <option value="Partnership Inquiry">Partnership Inquiry</option>
                    <option value="Technology Questions">Technology Questions</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                <div className="mb-4">
                  <label htmlFor="message" className="form-label">Message</label>
                  <textarea 
                    className="form-control" 
                    id="message" 
                    rows="5" 
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>
                <button type="submit" className="btn btn-primary w-100">Send Message via Gmail</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;