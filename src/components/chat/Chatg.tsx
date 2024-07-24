import React from 'react';
import ChatBot from 'react-simple-chatbot';

const SimpleChatBot: React.FC = () => {
  const steps = [
    {
      id: '1',
      message: '¡Hola! Soy un chatbot. ¿Cómo puedo ayudarte hoy?',
      trigger: '2',
    },
    {
      id: '2',
      user: true,
      trigger: '3',
    },
    {
      id: '3',
      message: 'Gracias por tu mensaje. Estoy procesando la información...',
      end: true,
    },
  ];

  return (
    <div>
      <ChatBot
        headerTitle="Mi Chatbot"
        steps={steps}
        floating={true}
        opened={true}
        width="400px"
        botDelay={1000}
        userDelay={1000}
      />
    </div>
  );
};

export default SimpleChatBot;
