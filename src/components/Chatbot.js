import React from 'react';
import styled from 'styled-components';

const ChatbotFrame = styled.iframe`
    position: fixed;
    bottom: 20px;
    right: 20px;
    width: 400px;
    height: 600px;
    border: none;
    z-index: 9999;
`;

const Chatbot = () => {
    return (
        <ChatbotFrame
            src="http://localhost:5176/chatbot-iframe?id=eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZGFyc2guc2luZ2giLCJpc3MiOiJ2a2FpLWltcGFjdC5jb20iLCJyb2xlIjoiYWRtaW4iLCJyZWdpb24iOiJJTiIsImlhdCI6MTcxNDczODQwMCwiZXhwIjoxNzE0NzQyMDAwfQ.-e0iv4-QhHq9_3O_WrZYiH2rCbx6f4xnpE2UwZ-KS3bTLxBoY0N2StwQKBlauNHnl2xZtwIYf4cpiZKqbHDqVw"
            allow="microphone"
            title="Chatbot"
        />
    );
};

export default Chatbot; 