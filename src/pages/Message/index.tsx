import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { env } from '@/helpers';

import './styles.css';
import { useToast } from '@/contexts';

type Message = {
  content: string;
  createdAt: Date;
};

export const MessagePage = (): JSX.Element => {
  const [message, setMessage] = useState<Message | null>(null);
  const { addToast } = useToast();

  const getMessage = async (): Promise<void> => {
    const response = await fetch(`${env.API_URL}/messages/`);
    const body = await response.json();
    if (response.status === 200) {
      return setMessage({
        content: body.content,
        createdAt: new Date(body.createdAt),
      });
    }

    return addToast({
      type: 'error',
      message: body.message,
    });
  };

  useEffect(() => {
    getMessage();
  }, []);

  return (
    <div className="page-message">
      <Link to="/new"><button type="button">Create new</button></Link>
      {message && (
        <>
          <h1>{message.content}</h1>
          <h3>Created at: {message.createdAt.toLocaleString()}</h3>
        </>
      )}
    </div>
  );
};
