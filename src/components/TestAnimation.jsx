import './themes/modern/assets/center.css';

export const TestAnimation = () => {
  return (
    <div style={{
      width: '100vw',
      height: '100vh',
      backgroundColor: '#e8e8e8',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <h1 style={{ 
        position: 'absolute', 
        top: '20px', 
        left: '20px',
        color: '#333'
      }}>
        Test Animation Page
      </h1>
      
      {/* Pure center.css animation - no modifications */}
      <div className="loading-wrapper">
        <div className="loader">
          <div className="loader-inner"></div>
        </div>
      </div>
    </div>
  );
};