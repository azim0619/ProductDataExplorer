import "reflect-metadata";
import express from "express";
import { json } from "body-parser";

const app = express();
app.use(json());

// Simple health check
app.get('/api/health', (req, res) => res.json({ ok: true }));

// Simple navigation endpoint (stub)
app.get('/api/navigation', (req, res) => {
  res.json([
    { id: 1, title: 'Books', slug: 'books' },
    { id: 2, title: 'Children', slug: 'children' }
  ]);
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log('Backend listening on', port));
