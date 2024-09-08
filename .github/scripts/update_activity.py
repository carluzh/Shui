import json
from datetime import datetime

file_path = 'src/data/activityData.ts'

with open(file_path, 'r') as file:
    content = file.read()

start = content.index('[') + 1
end = content.rindex(']')
data = content[start:end]

new_entry = f"""
  {{
    date: '{datetime.now().strftime('%Y-%m-%d')}',
    sports: true,
    twitter: true,
    work: true,
    growth: true,
    note: 'To be updated'
  }},"""

updated_content = content[:start] + new_entry + data + content[end:]

with open(file_path, 'w') as file:
    file.write(updated_content)