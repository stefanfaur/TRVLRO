import React from 'react';

const Activity = ({ activity }: { activity: any }) => {
  return (
    <div style={{ marginBottom: '20px', padding: '10px', border: '1px solid #ddd' }}>
      <h3>{activity.name}</h3>
      <p>{activity.description}</p>
      <p>Start: {activity.startTime}</p>
      <p>End: {activity.endTime}</p>
      <p>Duration: {activity.duration} minutes</p>
      <p>Tags: {activity.tags.join(', ')}</p>
    </div>
  );
};

export default Activity;
