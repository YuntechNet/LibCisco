import pytest
import json
from peer.message import Message

def test_init(message):
    assert message._ip == ('0.0.0.0', 9000)
    assert message._type == 'a'
    assert message._data == 'test text'

def test_toDict(message):
    assert message.toDict() == {
        'ip': {
            'host': message._ip[0],
            'port': int(message._ip[1])
        },
        'type': message._type,
        'data': message._data
    }

def test_send(message):
    data = json.loads(Message.send(message))
    assert data['ip']['host'] == message._ip[0]
    assert data['ip']['port'] == int(message._ip[1])
    assert data['type'] == message._type
    assert data['data'] == message._data

def test_recv(message):
    dict_data = message.send(message)
    data = Message.recv(dict_data)
    assert data._ip == ('0.0.0.0', 9000)
    assert data._type == 'a'
    assert data._data == 'test text'

        
