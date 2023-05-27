import React from 'react';
import { Button } from 'baseui/button';
import { Input } from 'baseui/input';
import { Textarea } from 'baseui/textarea';

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <div className="container mx-auto py-10 px-4">
      <h1 className="text-4xl font-bold mb-8">Contact Us</h1>
      <p className="text-lg mb-6">
        We'd love to hear from you! Please use the form below to get in touch with us. Whether you have questions, feedback, or partnership inquiries, we're here to assist you.
      </p>
      <form className="flex flex-col space-y-4 max-w-lg" onSubmit={handleSubmit} >
        <Input type="text" placeholder="Name" required className="mb-[200px]" />
        <Input type="email" placeholder="Email" required className="mb-[200px]" />
        <Textarea placeholder="Message" required className="mb-4" />
        <div className="space-x-4">
          <Button type="submit">Send Message</Button>
          {/* <Button variant="secondary">Cancel</Button> */}
        </div>
      </form>
    </div>
  );
};

export default Contact;
