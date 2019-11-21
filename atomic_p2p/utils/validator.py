from socket import inet_pton, inet_aton, AF_INET, AF_INET6, error


def valid_host(host):
    assert type(host) == tuple
    assert len(host) == 2
    assert type(host[0]) == str
    assert type(host[1]) == int
    assert host[1] > 0 and host[1] < 65535
    return True


def valid_ipv4_format(address: str) -> bool:
    try:
        inet_pton(AF_INET, address)
    except AttributeError:  # no inet_pton here, sorry
        try:
            inet_aton(address)
        except error:
            return False
        return address.count(".") == 3
    except error:  # not a valid address
        return False

    return True


def valid_ipv6_format(address: str) -> bool:
    try:
        inet_pton(AF_INET6, address)
    except error:  # not a valid address
        return False
    return True