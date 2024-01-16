import React from 'react';

const MyDashboard = () => {
  return (
    <div>
      <iframe
        title="R Markdown Dashboard"
        src="/Dash.html" // Update this with the actual path to your HTML file
        width="100%"
        height="1000px"
      />
    </div>
  );
};


export default MyDashboard;