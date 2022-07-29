from multiprocessing import Process
import time
from common import write_mail, send_mail, check_response

def task(process_num):
    write_mail(process_num)
    send_mail(process_num)
    check_response(process_num)

if __name__ == '__main__':
    start_time=time.time()
    t1 = Process(target=task, args=(1,))
    t2 = Process(target=task, args=(2,))
    t3 = Process(target=task, args=(3,))
    t1.start()
    t2.start()
    t3.start()
    t1.join()
    t2.join()
    t3.join()
    print(f"共花费时间：{time.time()-start_time}s")