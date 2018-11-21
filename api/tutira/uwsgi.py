# test.py
def application(env, start_response):
    start_response('200 OK', [('Content-Type','text/html')])
    return [b"This is Tutira, it\'s a list app."] # python3
