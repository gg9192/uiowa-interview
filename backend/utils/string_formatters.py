from datetime import datetime

def serialize_date(date_obj):    
    return date_obj.strftime("%m/%d/%Y")