import React from 'react';

const MessageList = ({ messages }) => {
  const getSnippet = (text) => (text.length > 30 ? `${text.substring(0, 30)}...` : text);

  return (
    <div className="message-list max-w-3xl -mx-auto   rounded-lg " >
      {messages.map((message, index) => (
        <div key={index} className="message flex justify-between items-center p-2  shadow-md border-b mt-2 border-gray-200 mb-4 bg-slate-200 cursor-pointer">
          <div className="text-left">
            <div className="font-semibold">{message.sender}</div>
            <div className="text-gray-600">{getSnippet(message.text)}</div>
          </div>
          {message.unseenCount > 0 && (
            <div className="bg-red-500 text-white rounded-full px-2 py-1 text-xs">
              {message.unseenCount}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

// Example usage:
const messages = [
  { sender: 'Alice', text: 'Hey, how are you?', unseenCount: 3 },
  { sender: 'Bob', text: 'Don’t forget the meeting at 10 AM', unseenCount: 0 },
  { sender: 'Charlie', text: 'Can you send me the report?', unseenCount: 1 },
  // Add more messages here
];

export default function MessageComponent() {
  return (
    <div className="p-4">
      <MessageList messages={messages} />
    </div>
  );
}
