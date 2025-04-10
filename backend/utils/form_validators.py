from datetime import datetime
import re


def parse_and_return_date(date_str):
    try:
        time = datetime.strptime(date_str, "%m/%d/%Y")
        return time
    except ValueError:
        return None
    
def is_valid_usd(amount):
    pattern = r'^\d+(\.\d{2})?$'
    return bool(re.match(pattern, str(amount)))