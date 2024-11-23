import React, { useState } from 'react';
import { Button, Form, Container, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify'; // Import Toastify components
import 'react-toastify/dist/ReactToastify.css'; // Import Toastify CSS

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Retrieve users from localStorage
    const users = JSON.parse(localStorage.getItem('users')) || [];

    // Check if the user exists and the password matches
    const user = users.find((user) => user.email === email && user.password === password);

    if (user) {
      // Successful login
      toast.success('Login successful!', {
        autoClose: 1000, // Set toast duration to 1000ms (1 second)
      });
      navigate('/recipe'); // Redirect to recipe page
    } else {
      // Failed login
      toast.error('Invalid credentials', {
        autoClose: 1000, // Set toast duration to 1000ms (1 second)
      });
    }
  };

  return (
    <Container className="d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
      <Row className="w-100">
        <Col md={6} lg={4} className="mx-auto">
          <div className="card shadow-sm p-4 rounded">
            <h3 className="text-center mb-4">Login</h3>
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="email" className="mb-3">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </Form.Group>

              <Form.Group controlId="password" className="mb-4">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Enter password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </Form.Group>

              <Button variant="primary" type="submit" className="w-100 mb-3">
                Login
              </Button>
            </Form>

            <div className="text-center">
              <p>
                Don't have an account?{' '}
                <Button variant="link" onClick={() => navigate('/')} className="p-0">
                  Sign up here
                </Button>
              </p>
            </div>
          </div>
        </Col>
      </Row>

      {/* ToastContainer to display the toasts */}
      <ToastContainer />
    </Container>
  );
};

export default LoginForm;
