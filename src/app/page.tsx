'use client';

import { useChat } from 'ai/react';

export default function Chat() {
  const { messages, input, handleInputChange, handleSubmit } = useChat({ maxSteps: 5 });

  return (
    <div className="flex flex-col w-full max-w-md py-24 mx-auto">
      {messages
        .filter((m) => !m.toolInvocations) // Exclude tool-related messages
        .map((m) => (
          <div
            key={m.id}
            className={`whitespace-pre-wrap mb-4 p-3 rounded-lg ${
              m.role === 'user'
                ? 'bg-blue-500 text-white self-end text-right'
                : 'bg-gray-300 text-black self-start text-left'
            }`}
          >
            <p>{m.content}</p>
          </div>
        ))}
      <form onSubmit={handleSubmit} className="mt-4">
        <input
          className="fixed bottom-0 w-full max-w-md p-2 mb-8 border border-gray-300 rounded shadow-xl text-black"
          value={input}
          placeholder="Say something..."
          onChange={handleInputChange}
        />
      </form>
    </div>
  );
}