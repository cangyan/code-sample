import time
from multiprocessing import Process

from common import check_response, send_mail, write_mail


def task(process_num):
    write_mail(process_num)
    send_mail(process_num)
    check_response(process_num)


def all():
    start_time = time.time()
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


if __name__ == "__main__":
    t = Process(target=all)
    t.start()
    t.join()
