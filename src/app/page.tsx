'use client';

import { useChat } from 'ai/react';

export default function Chat() {
  const { messages, input, handleInputChange, handleSubmit } = useChat(
    {maxSteps: 5}
  );

  
  return (
    <div className="flex flex-col w-full max-w-md py-24 mx-auto stretch">
      {messages
        .filter((m) => !m.toolInvocations) // Exclude tool-related messages
        .map(m => (
        <div key={m.id} className="whitespace-pre-wrap">
          {m.role === 'user' ? (
              <p>User: {m.content}</p>
            ) : (
              <p>AI: {m.content}</p>
            )}
        </div>
      ))}
      <form onSubmit={handleSubmit}>
        <input
          className="fixed bottom-0 w-full max-w-md p-2 mb-8 border border-gray-300 rounded shadow-xl"
          value={input}
          placeholder="Say something..."
          onChange={handleInputChange}
        />
      </form>
    </div>
  );
  
}