from time import sleep


def test_no_peer(core1):
    assert core1.monitor._on_command(["list"]) == (
        "There is no peer's info in current list")


def test_one_peer(switch1, switch2):
    switch1.join_net(host=switch2.server_info.host)
    sleep(3)
    
    assert "Current peers status:" in switch1.monitor._on_command(["list"])
    assert "Current peers status:" in switch2.monitor._on_command(["list"])
