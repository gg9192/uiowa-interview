from datetime import datetime
import re


def parse_and_return_date(date_str):
    try:
        datetime.strptime(date_str, "%m/%d/%Y")
        return datetime
    except ValueError:
        return None
    
def is_valid_usd(amount):
    pattern = r'^\d+(\.\d{2})?$'
    return bool(re.match(pattern, str(amount)))