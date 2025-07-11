import React, { useState } from 'react';
import { contactText } from '../text/contact';
import {
  ContactContainer,
  ContactWrapper,
  ContactFormTitle,
  ContactFormDescription,
  ContactForm,
  FormGroup,
  FormLabel,
  FormInput,
  FormTextarea,
  FormButton,
  FormMessage
} from '../components/themes/modern/ContactStyles';

export const Contact = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", import.meta.env.VITE_WEB3FORMS_ACCESS_KEY);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult(contactText.contactForm.successMessage);
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message || contactText.contactForm.errorMessage);
    }
  };

  return (
    <ContactContainer>
      <ContactWrapper>
        <ContactFormTitle>{contactText.contactForm.title}</ContactFormTitle>
        <ContactFormDescription>{contactText.contactForm.description}</ContactFormDescription>
        
        <ContactForm onSubmit={onSubmit}>
          <FormGroup delay="0.4s">
            <FormLabel htmlFor="name">
              {contactText.contactForm.fields.name.label}
              {contactText.contactForm.fields.name.required && ' *'}
            </FormLabel>
            <FormInput
              type="text"
              id="name"
              name="name"
              placeholder={contactText.contactForm.fields.name.placeholder}
              required={contactText.contactForm.fields.name.required}
            />
          </FormGroup>

          <FormGroup delay="0.5s">
            <FormLabel htmlFor="email">
              {contactText.contactForm.fields.email.label}
              {contactText.contactForm.fields.email.required && ' *'}
            </FormLabel>
            <FormInput
              type="email"
              id="email"
              name="email"
              placeholder={contactText.contactForm.fields.email.placeholder}
              required={contactText.contactForm.fields.email.required}
            />
          </FormGroup>

          <FormGroup delay="0.6s">
            <FormLabel htmlFor="subject">
              {contactText.contactForm.fields.subject.label}
            </FormLabel>
            <FormInput
              type="text"
              id="subject"
              name="subject"
              placeholder={contactText.contactForm.fields.subject.placeholder}
              required={contactText.contactForm.fields.subject.required}
            />
          </FormGroup>

          <FormGroup delay="0.7s">
            <FormLabel htmlFor="message">
              {contactText.contactForm.fields.message.label}
              {contactText.contactForm.fields.message.required && ' *'}
            </FormLabel>
            <FormTextarea
              id="message"
              name="message"
              placeholder={contactText.contactForm.fields.message.placeholder}
              required={contactText.contactForm.fields.message.required}
              rows="5"
            />
          </FormGroup>

          {result && (
            <FormMessage className={result === contactText.contactForm.successMessage ? 'success' : 'error'}>
              {result}
            </FormMessage>
          )}

          <FormButton type="submit">
            {contactText.contactForm.submitButton}
          </FormButton>
        </ContactForm>
      </ContactWrapper>
    </ContactContainer>
  );
};