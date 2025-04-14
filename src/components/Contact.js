import React from 'react';

function Contact() {
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
              Phone: +91  9900990099
            </p>
          </div>

          <div className="mb-4">
            <h5>Social Media</h5>
            <div className="d-flex gap-3">
              <a href="#" className="btn btn-outline-dark">LinkedIn</a>
              <a href="#" className="btn btn-outline-dark">Twitter</a>
              <a href="#" className="btn btn-outline-dark">Instagram</a>
            </div>
          </div>
        </div>

        <div className="col-lg-6">
          <div className="card border-0 shadow-sm">
            <div className="card-body p-4">
              <h3 className="card-title mb-4">Send us a Message</h3>
              <form>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">Name</label>
                  <input type="text" className="form-control" id="name" required />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email</label>
                  <input type="email" className="form-control" id="email" required />
                </div>
                <div className="mb-3">
                  <label htmlFor="subject" className="form-label">Subject</label>
                  <select className="form-select" id="subject" required>
                    <option value="">Select a subject</option>
                    <option value="investment">Investment Opportunities</option>
                    <option value="partnership">Partnership Inquiry</option>
                    <option value="technology">Technology Questions</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div className="mb-4">
                  <label htmlFor="message" className="form-label">Message</label>
                  <textarea className="form-control" id="message" rows="5" required></textarea>
                </div>
                <button type="submit" className="btn btn-primary w-100">Send Message</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;