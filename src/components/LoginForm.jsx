import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import Admin from '../service/Admin';

const LoginForm = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await Admin.authenticate(username, password);
            
            if (response) {
                navigate('/maindashbord', { state: { user: response } });
                setError("");
            } else {
                setError("Login failed. Please check your username and password.");
            }
        } catch (error) {
            setError("An error occurred. Please try again.");
        }
    }

    return (
        <div className="container">
            <div className="row">
                <div className="studreg" style={{
                    backgroundColor: 'lightblue',
                    color: 'black',
                    padding: '20px',
                    margin: '20px',
                    border: '1px solid black',
                    borderRadius: '10px',
                    width: '500px',
                    height: 'auto',
                    marginLeft: '300px',
                    marginTop: '80px',
                    boxShadow: '3px 3px 5px 0.5px rgba(2,2,2,5)'
                }}>
                    <h2 style={{ color: 'red' }}>Login Form</h2><br></br>

                    {error && <p className="error-message">{error}</p>}

                    <Form onSubmit={handleSubmit}>
                        <Row className="mb-3" style={{ marginLeft: '10px', width: '650px' }}>
                            <Form.Group as={Col} md="4" controlId="validationCustomUsername">
                                <Form.Label>Username</Form.Label>
                                <InputGroup hasValidation>
                                    <Form.Control
                                        type="text"
                                        placeholder="Username"
                                        name="username"
                                        aria-describedby="inputGroupPrepend"
                                        required
                                        onChange={(e) => setUsername(e.target.value)}
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        Please choose a username.
                                    </Form.Control.Feedback>
                                </InputGroup>
                            </Form.Group>

                            <Form.Group as={Col} md="4" controlId="validationCustom02">
                                <Form.Label>Password</Form.Label>
                                <Form.Control
                                    required
                                    type="password"
                                    placeholder="Password"
                                    name="password"
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                            </Form.Group>
                        </Row>
                        <Button type="submit" style={{ width: '100px', marginLeft: '180px' }}>Login</Button><br></br>
                    </Form>
                </div>
            </div>
            <br></br>
        </div>
    );
}

export default LoginForm;
