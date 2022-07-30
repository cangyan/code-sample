import asyncio
import time

from common import async_send_mail, check_response, write_mail


async def task():
    # 同步处理
    write_mail(1)
    write_mail(2)
    write_mail(3)
    # 异步处理
    await asyncio.gather(  # 等待所有处理完成
        async_send_mail(1),
        async_send_mail(2),
        async_send_mail(3)
    )
    # 同步处理
    check_response(1)
    check_response(2)
    check_response(3)


if __name__ == '__main__':
    start_time = time.time()
    asyncio.run(task())
    print(f"共花费时间：{time.time()-start_time}s")
