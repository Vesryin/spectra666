import pytest
from fastapi.testclient import TestClient
from main import app

client = TestClient(app)

def test_read_main():
    response = client.get("/")
    assert response.status_code == 200
    assert response.text == "<h1>SPECTRA Backend is running.</h1>"

def test_websocket():
    with client.websocket_connect("/ws") as websocket:
        websocket.send_text("Hello, world!")
        data = websocket.receive_text()
        assert data == "Message text was: Hello, world!"
