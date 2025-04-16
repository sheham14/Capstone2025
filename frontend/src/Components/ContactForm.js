import React from 'react';
import Header from './Header'; // adjust the path if needed

const branches = [
    {
        name: 'Conche',
        phone: '1-800-123-4567',
        email: 'conche@taylorinsurance.com',
        address: '4 Harbour Drive, Conche, NL A0K 1Y0',
        mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1485.086610024097!2d-56.333637299999996!3d50.9068679!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4b73a12c21ad13df%3A0xf4d7642b118fb053!2s4%20Harbour%20Dr%2C%20Conche%2C%20NL%20A0K%201Y0!5e0!3m2!1sen!2sca!4v1713226200000!5m2!1sen!2sca'
      },
      
      {
        name: 'Corner Brook',
        phone: '1-800-987-6543',
        email: 'cb@taylorinsurance.com',
        address: '15 Union Street, Corner Brook, NL A2H 5M7',
        mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2805.4525828208365!2d-57.94916042373908!3d48.942198263266404!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4b774173e62a1dbf%3A0x1626f1372f5860ba!2s15%20Union%20St%2C%20Corner%20Brook%2C%20NL%20A2H%205M7!5e0!3m2!1sen!2sca!4v1713228451696!5m2!1sen!2sca'
      },
      
      {
        name: 'Gander',
        phone: '1-800-555-7890',
        email: 'gander@taylorinsurance.com',
        address: '100 Elizabeth Drive, Gander, NL A1V 1G5',
        mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2780.400537207552!2d-54.6109636236979!3d48.94872937134196!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4b780b6f601a1c5d%3A0x8be6b5ed917bb36!2s100%20Elizabeth%20Dr%2C%20Gander%2C%20NL%20A1V%201G5!5e0!3m2!1sen!2sca!4v1713228503721!5m2!1sen!2sca'
      },
      
      {
        name: "St. John's",
        phone: '1-800-222-1111',
        email: 'stjohns@taylorinsurance.com',
        address: '275 Duckworth Street, St. John’s, NL A1C 1G9',
        mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2692.108928939928!2d-52.708952124116706!3d47.565668990803715!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4b0ca3b9422195bb%3A0xfb6545c22817fe18!2s275%20Duckworth%20St%2C%20St.%20John\'s%2C%20NL%20A1C%201G9!5e0!3m2!1sen!2sca!4v1744809306485!5m2!1sen!2sca'

      },
      
];

function ContactForm() {
  return (
    <>
     

      <div className="container py-5">
        <h2 className="text-center mb-5 fw-bold">Find a Branch</h2>
        <div className="row justify-content-center">
          <div className="col-md-10">
            <ul className="list-group list-group-flush">
              {branches.map((branch, index) => (
                <li className="list-group-item py-4" key={index}>
                <div className="row align-items-start">
                  {/* Left: Branch Info */}
                  <div className="col-md-6 mb-3 mb-md-0">
                    <div className="fw-bold text-primary mb-2" style={{ fontSize: '1.2rem' }}>{branch.name}</div>
                    <div>📞 {branch.phone}</div>
                    <div>✉️ <a href={`mailto:${branch.email}`}>{branch.email}</a></div>
                    <div>📍 {branch.address}</div>
                  </div>
              
                  {/* Right: Embedded Map */}
                  <div className="col-md-6">
                    <iframe
                      src={branch.mapEmbedUrl}
                      width="100%"
                      height="200"
                      style={{ border: 0 }}
                      allowFullScreen=""
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title={`Map for ${branch.name}`}
                    />
                  </div>
                </div>
              </li>
              
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactForm;
