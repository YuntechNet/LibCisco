import time

from utils.Task import Task
from utils.Manager import ThreadManager
from utils.Enums import LogLevel

class OutputStream(ThreadManager):

    def __init__(self, inputStream, outputQueue):
        ThreadManager.__init__(self, 'OutputStream', outputQueue)
        self.inputStream = inputStream
        self.print('Inited.', LogLevel.SUCCESS)

    def run(self):
        while not self.stopped.wait(0.1) or not self.outputQueue.empty():
            if not self.outputQueue.empty():
                print('[%17f]%s %s\x1b[0m' % (self.outputQueue.get()))
            elif self.inputStream.isExit():
                self.exit()

    def exit(self):
        super(OutputStream, self).exit()
        self.outputQueue.put((time.time(), LogLevel.SUCCESS.value, 'LibCisco all Process/Thread exited, bye.'))

class InputStream(ThreadManager):
    
    def __init__(self, redisManager, instance, outputQueue):
        ThreadManager.__init__(self, 'InputStream', outputQueue)
        self.redis = redisManager
        self.instance = instance
        self.outputQueue = outputQueue
        self.print('Inited.', LogLevel.SUCCESS)

    def run(self):
        while True:
            if self.outputQueue.empty():
                choice = input('> ')
                self.print('operator execute command: %s' % choice)
                if '--schedule' in choice:
                    task = Task(self.redis.name, 'ScheduleManager', choice.replace('--schedule', ''))
                    self.redis.pub('ScheduleManager', task.to())
                elif '--switch' in choice:
                    task = Task(self.redis.name, 'SwitchManager', choice.replace('--switch', ''))
                    self.redis.pub('SwitchManager', task.to())
                elif '--libserver' in choice:
                    task = Task(self.redis.name, 'LibServer', choice.replace('--libserver', ''))
                    self.redis.pub('LibServer', task.to())
                elif choice == 'exit':
                    for (key, values) in self.instance.items():
                        values.exit()
                    return

