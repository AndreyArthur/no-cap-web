import React, { useRef } from 'react';

import { env } from '@/helpers';

import './styles.css';

export const NewPage = (): JSX.Element => {
  const refs = {
    inputs: {
      message: useRef<HTMLInputElement>(null),
    },
  };

  const sendMessage = async (): Promise<void> => {
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

    console.log(body);
  };

  return (
    <div className="page-new">
      <h1>New message</h1>
      <form>
        <input
          type="text"
          name="message"
          placeholder="Type your message..."
          ref={refs.inputs.message}
        />
        <button onClick={sendMessage} type="button">Send</button>
      </form>
    </div>
  );
};
