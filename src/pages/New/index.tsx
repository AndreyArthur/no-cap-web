import React, { FormEvent, useRef } from 'react';

import { env } from '@/helpers';
import { useToast } from '@/contexts';

import './styles.css';

export const NewPage = (): JSX.Element => {
  const refs = {
    inputs: {
      message: useRef<HTMLInputElement>(null),
    },
  };
  const { addToast } = useToast();
  const sendMessage = async (event: FormEvent): Promise<void> => {
    event.preventDefault();

    const response = await fetch(`${env.API_URL}/messages/`, {
      method: 'POST',
      body: JSON.stringify({
        content: refs.inputs.message.current?.value,
      }),
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    });
    const body = await response.json();

    if (response.status === 201) {
      return addToast({
        type: 'success',
        message: 'Your message has been created with success.',
      });
    }

    return addToast({
      type: 'error',
      message: body.message,
    });
  };

  return (
    <div className="page-new">
      <h1>New message</h1>
      <form onSubmit={sendMessage}>
        <input
          type="text"
          name="message"
          placeholder="Type your message..."
          ref={refs.inputs.message}
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
};
