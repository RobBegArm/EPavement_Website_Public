import emailjs from "@emailjs/browser";
import { FC, FormEvent, useRef, useState } from "react";
import classes from "./ContactForm.module.css";

export const ContactForm: FC = () => {
  const form = useRef<HTMLFormElement>(null);
  const nameInputRef = useRef<HTMLInputElement>(null);
  const emailInputRef = useRef<HTMLInputElement>(null);
  const messageInputRef = useRef<HTMLTextAreaElement>(null);

  const [isLoading, setIsLoading] = useState(false);

  const sumbitFormHandler = (event: FormEvent) => {
    event.preventDefault();
    const name = nameInputRef.current?.value.trim() || "";
    const correctNameInput = checkNameInput(name);
    const email = emailInputRef.current?.value.trim() || "";
    const correctEmailInput = checkEmailInput(email);
    const message = messageInputRef.current?.value.trim() || "";
    const correctMessageInput = checkMessageInput(message);
    if (correctNameInput && correctEmailInput && correctMessageInput) {
      setIsLoading(true);
      sendEmail(event);
    } else {
      console.log(`Invalid Input!`);
    }
  };

  const sendEmail = (event: FormEvent) => {
    try {
      emailjs
        .sendForm(
          "__PRIVATE__CODE___",
          "__PRIVATE__CODE___",
          form.current as HTMLFormElement,
          "__PRIVATE__CODE___"
        )
        .then(
          (result) => {
            alert(
              "Thank you, form submitted successfully! We will reach out to you as soon as possible."
            );
            (event.target as HTMLFormElement).reset();
            setIsLoading(false);
          },
          (error) => {
            alert("Something went wrong, sorry for the inconvenience.");
            setIsLoading(false); // Reset loading state on error
          }
        );
    } catch (error) {
      console.log(error);
      alert("Something went wrong, sorry for the inconvenience.");
      setIsLoading(false); // Reset loading state on exception
    }
  };

  const checkNameInput = (name: string): boolean => {
    if (name.length <= 2) {
      alert(
        "Please provide a valid name input - name should be longer than 2 characters!"
      );
      return false;
    }
    if (name.length > 40) {
      alert(
        "Please provide a valid name input - name should not be longer than 40 characters!"
      );
      return false;
    }
    const regexName = /^[a-zA-ZüÜõÕöÖäÄžŽšŠ]+$/;
    const regexNameAndSurname = /^[a-zA-ZüÜõÕöÖäÄžŽšŠ]+ [a-zA-ZüÜõÕöÖäÄžŽšŠ]+$/;
    const regexNameAnd2Surnames =
      /^[a-zA-ZüÜõÕöÖäÄžŽšŠ]+ [a-zA-ZüÜõÕöÖäÄžŽšŠ]+ [a-zA-ZüÜõÕöÖäÄžŽšŠ]+$/;
    const regexNameAnd3Surnames =
      /^[a-zA-ZüÜõÕöÖäÄžŽšŠ]+ [a-zA-ZüÜõÕöÖäÄžŽšŠ]+ [a-zA-ZüÜõÕöÖäÄžŽšŠ]+ [a-zA-ZüÜõÕöÖäÄžŽšŠ]+$/;
    if (
      !(
        regexName.test(name) ||
        regexNameAndSurname.test(name) ||
        regexNameAnd2Surnames.test(name) ||
        regexNameAnd3Surnames.test(name)
      )
    ) {
      alert(
        "Please provide a valid name input - name should contain Latin letters and no special characters or numbers!"
      );
      return false;
    }
    return true;
  };

  const checkEmailInput = (email: string): boolean => {
    const regexEmail =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (!regexEmail.test(email)) {
      alert("Please provide a valid email input!");
      return false;
    }
    return true;
  };

  const checkMessageInput = (message: string): boolean => {
    if (message.length > 2000) {
      alert("Please provide a message input not longer than 2000 characters!");
      return false;
    }
    return true;
  };

  return (
    <form
      name="contact-form"
      onSubmit={sumbitFormHandler}
      className={`${classes["contact-form"]} grid`}
      ref={form}
    >
      {/* User Name */}
      <div className={classes["form-element"]}>
        <label htmlFor="user_name">
          <p>Name*: </p>
        </label>
        <input
          className={`${classes["text-input"]} focusable`}
          ref={nameInputRef}
          id="user_name"
          name="user_name"
          type="text"
          placeholder="Your Name"
          minLength={3}
          maxLength={40}
          required
          disabled={isLoading}
        />
      </div>
      {/* User E-Mail */}
      <div className={classes["form-element"]}>
        <label htmlFor="user_email">
          <p>E-Mail*: </p>
        </label>
        <input
          className={`${classes["text-input"]} focusable`}
          ref={emailInputRef}
          id="user_email"
          name="user_email"
          type="email"
          placeholder="mail@mail.com"
          minLength={6}
          maxLength={40}
          required
          disabled={isLoading}
        />
      </div>
      {/* Message */}
      <div className={classes["form-element"]}>
        <label htmlFor="message">
          <p>Message: </p>
        </label>
        <textarea
          className={`${classes["text-input"]} focusable`}
          ref={messageInputRef}
          id="message"
          name="message"
          placeholder="Your message ..."
          rows={6}
          cols={50}
          maxLength={2000}
          disabled={isLoading}
        />
      </div>
      {/* Submit Button */}
      <button
        type="submit"
        className={`btn ${classes["btn--form"]} focusable`}
        disabled={isLoading}
      >
        <p>{isLoading ? "Loading..." : "Submit"} </p>
      </button>
    </form>
  );
};
