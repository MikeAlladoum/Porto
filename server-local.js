const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 3000;
const PUBLIC_DIR = path.join(__dirname, 'public');

const server = http.createServer((req, res) => {
    // Default to index.html for root
    let filePath = req.url === '/' ? '/index.html' : req.url;
    filePath = path.join(PUBLIC_DIR, filePath);

    // Security: prevent directory traversal
    const realPath = path.resolve(filePath);
    if (!realPath.startsWith(path.resolve(PUBLIC_DIR))) {
        res.writeHead(403, { 'Content-Type': 'text/plain' });
        res.end('Forbidden');
        return;
    }

    // Check if file exists
    fs.stat(filePath, (err, stats) => {
        if (err) {
            // Serve index.html for any non-existent file (SPA routing)
            filePath = path.join(PUBLIC_DIR, 'index.html');
        }

        fs.readFile(filePath, (err, content) => {
            if (err) {
                res.writeHead(404, { 'Content-Type': 'text/plain' });
                res.end('404 - File Not Found');
                return;
            }

            // Determine content type
            const ext = path.extname(filePath);
            let contentType = 'text/plain';
            
            const mimeTypes = {
                '.html': 'text/html',
                '.css': 'text/css',
                '.js': 'text/javascript',
                '.json': 'application/json',
                '.png': 'image/png',
                '.jpg': 'image/jpeg',
                '.jpeg': 'image/jpeg',
                '.gif': 'image/gif',
                '.svg': 'image/svg+xml',
                '.pdf': 'application/pdf'
            };

            contentType = mimeTypes[ext] || 'text/plain';

            res.writeHead(200, { 
                'Content-Type': contentType,
                'Cache-Control': 'no-cache'
            });
            res.end(content);
        });
    });
});

server.listen(PORT, () => {
    console.log(`🚀 Portfolio serveur lancé sur http://localhost:${PORT}`);
    console.log(`📁 Dossier: ${PUBLIC_DIR}`);
});
