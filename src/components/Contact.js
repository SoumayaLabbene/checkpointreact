import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Form from  'react-bootstrap/Form';
import Button from  'react-bootstrap/Button';

class Contact extends Component {
  render() {
      return (
          <Container className="boxx">
              <h1>Send us your comments here !</h1>
      <Form>
        <Form.Group controlId="form.Name">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="Enter name" />
        </Form.Group>
        <Form.Group controlId="form.Email">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="name@example.com" />
        </Form.Group>
        <Form.Group controlId="form.Textarea">
            <Form.Label>Comment</Form.Label>
            <Form.Control as="textarea" rows={3} />
                  </Form.Group>
                  <div className="bouton">
                  <Button variant="success">Send</Button></div>
        </Form>
      </Container>
    );
  }
       
}

export default Contact;