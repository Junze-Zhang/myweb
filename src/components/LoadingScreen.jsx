import LoadingAnimation from './themes/modern/loading';

export const LoadingScreen = () => {
  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      background: 'linear-gradient(135deg, #f0f2f5 0%, #e8eaf0 50%, #dde1e7 100%)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 9999
    }}>
      {/* Loading Animation */}
      <LoadingAnimation />
      
      {/* Loading Text */}
      <p style={{
        marginTop: '2rem',
        fontSize: '1.2rem',
        color: '#4a5568',
        fontFamily: '"Nunito Sans", sans-serif',
        fontWeight: '500'
      }}>
        Loading...
      </p>
    </div>
  );
};