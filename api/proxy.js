export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const response = await fetch('https://script.google.com/macros/s/AKfycbw7xqrTDWYpaEG7b3rymV9obUAHk_VMDvQFSPcbvo7FefZNdelxZgxCAIaUAzHmwQWx/exec', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(req.body),
    });

    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: 'Internal server error', error: error.toString() });
  }
}
