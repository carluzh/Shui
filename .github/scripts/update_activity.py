from datetime import datetime

file_path = 'src/data/activityData.ts'

with open(file_path, 'r') as file:
    content = file.read()

array_start = content.index('ACTIVITY_DATA: DayActivity[] = [')
data_start = content.index('[', array_start) + 1
data_end = content.rindex(']')

new_entry = f"""
  {{
    date: '{datetime.now().strftime('%Y-%m-%d')}',
    sports: true,
    twitter: true,
    work: true,
    growth: true,
    note: 'To be updated'
  }},"""

updated_content = (
    content[:data_start] +
    new_entry +
    content[data_start:data_end] +
    content[data_end:]
)

with open(file_path, 'w') as file:
    file.write(updated_content)