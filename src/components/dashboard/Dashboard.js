import React from 'react';

const Dashboard = () => {
  return (
    <div className="row">
      <div className="col-lg-3 col-6">
        <div className="small-box bg-info">
          <div className="inner">
            <h3>150</h3>
            <p>Total Companies</p>
          </div>
          <div className="icon">
            <i className="fas fa-shopping-cart"></i>
          </div>
          <a href="#" className="small-box-footer">
            More info <i className="fas fa-arrow-circle-right"></i>
          </a>
        </div>
      </div>
      {/* Add more info boxes as needed */}
    </div>
  );
};

export default Dashboard;