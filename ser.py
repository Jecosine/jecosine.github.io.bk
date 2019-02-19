from BaseHTTPServer import HTTPServer
from SimpleHTTPServer import SimpleHTTPRequestHandler
server = HTTPServer(('',80),SimpleHTTPRequestHandler)
server.serve_forever()