export const createMessagesQuery = `
  CREATE TABLE IF NOT EXISTS messages (
    id SERIAL PRIMARY KEY,
    content TEXT NOT NULL,
    role VARCHAR(255),
    chat_id INTEGER REFERENCES chats(id) ON DELETE CASCADE,
    created_at TIMESTAMP DEFAULT NOW(),
    updated_at TIMESTAMP
  );
`;
