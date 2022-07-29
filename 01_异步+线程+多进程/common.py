import asyncio
import time

def write_mail(number):
    print(f"写信(第{number}封)：程序员充电站")
    time.sleep(1)
    print(f"写信(第{number}封)：抖音关注蒙德伊彼")
    time.sleep(1)
    print(f"写信(第{number}封)：感谢支持")
    time.sleep(1)


def send_mail(number):
    print(f"投递(第{number}封)")
    time.sleep(5)

async def async_send_mail(number):
    print(f"投递(第{number}封)")
    await asyncio.sleep(5)

def check_response(number):
    {
        # 确认 空逻辑
    }
    print(f"确认OK(第{number}封)")
