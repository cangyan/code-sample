import time
import threading
from common import write_mail, send_mail, check_response

def task(thread_num):
    write_mail(thread_num)
    send_mail(thread_num)
    check_response(thread_num)

if __name__ == '__main__':
    start_time=time.time()
    t1 = threading.Thread(target=task, args=(1,))
    t2 = threading.Thread(target=task, args=(2,))
    t3 = threading.Thread(target=task, args=(3,))
    t1.start()
    t2.start()
    t3.start()
    t1.join()
    t2.join()
    t3.join()
    print(f"共花费时间：{time.time()-start_time}s")