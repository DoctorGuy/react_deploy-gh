import React from 'react';

const MyDashboard = () => {
  const dashboardurl = "https://doctorguy.github.io/website/Dash.html"
  return (
    <div>
      <iframe
        title="R Markdown Dashboard"
        src={dashboardurl}
        width="90%"
        height="1000px"
      />
    </div>
    
  );
};


export default MyDashboard;