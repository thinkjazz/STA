import React from 'react';

const Notification = ({ message, isVisible }) => {
  return (
    isVisible && (
      <div className="fixed bottom-4 right-4 bg-amber-300 text-black py-2 px-4 rounded shadow-lg">
        {message}
      </div>
    )
  );
};

export default Notification;
