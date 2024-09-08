from datetime import datetime

file_path = 'src/data/activityData.ts'

with open(file_path, 'r') as file:
    lines = file.readlines()

new_entry = f"""  {{
    date: '{datetime.now().strftime('%Y-%m-%d')}',
    sports: true,
    twitter: true,
    work: true,
    growth: true,
    note: 'To be updated'
  }},
"""

for i, line in enumerate(lines):
    if 'export const ACTIVITY_DATA: DayActivity[] = [' in line:
        lines[i] = line + new_entry
        break

with open(file_path, 'w') as file:
    file.writelines(lines)