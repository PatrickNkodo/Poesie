import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // You can also log the error to an error reporting service.
    console.error(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // Fallback UI
      return <div className="">
        <h1>Something went wrong.</h1>;
        {/* <p>{this.state.error.message}</p> */}
      </div>
    }

    return this.props.children;
  }
}

export default ErrorBoundary;