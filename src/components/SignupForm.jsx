import React, { useState } from 'react';
import { Button, Form, Container, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify'; // Import ToastContainer and toast
import 'react-toastify/dist/ReactToastify.css'; // Import CSS for Toastify

const SignupForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Retrieve users from localStorage (if any)
    const users = JSON.parse(localStorage.getItem('users')) || [];
    
    console.log('Existing users in localStorage:', users); // Debugging line
    
    // Check if the email already exists
    const userExists = users.some((user) => user.email === email);

    if (userExists) {
      setError('This email is already registered');
      toast.error('This email is already registered', { autoClose: 1000 }); // Show error toast for 1000ms
      return;
    }

    // Store the new user data in localStorage
    users.push({ email, password });
    
    // Debugging line to confirm the user is added
    console.log('Updated users array:', users);

    localStorage.setItem('users', JSON.stringify(users));

    // Show success toast for 1000ms
    toast.success('Signup successful!', { autoClose: 1000 });
    
    // Redirect to login page after successful signup
    setTimeout(() => {
      navigate('/login'); // Redirect to login page after a brief delay
    }, 1000); // Wait for the toast to finish before redirecting
  };

  return (
    <Container className="d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
      <Row className="w-100">
        <Col md={6} lg={4} className="mx-auto">
          <div className="card shadow-sm p-4 rounded">
            <h3 className="text-center mb-4">Signup</h3>
            {error && <div className="alert alert-danger">{error}</div>}
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
                Signup
              </Button>
            </Form>

            <div className="text-center">
              <p>
                Already have an account?{' '}
                <Button variant="link" onClick={() => navigate('/login')} className="p-0">
                  Login here
                </Button>
              </p>
            </div>
          </div>
        </Col>
      </Row>

      {/* ToastContainer for displaying toasts */}
      <ToastContainer />
    </Container>
  );
};

export default SignupForm;
