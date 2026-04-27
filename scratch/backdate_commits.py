import os
import subprocess
from datetime import datetime, timedelta
import random

def run_command(command):
    print(f"Running: {command}")
    result = subprocess.run(command, shell=True, capture_output=True, text=True)
    if result.returncode != 0:
        print(f"Error: {result.stderr}")
    return result.stdout

# Initialize repo
run_command("git init")
run_command('git config user.email "trajath545@gmail.com"')
run_command('git config user.name "zorox-106"')

# Define the 30 logical chunks
# (File/Dir paths, Commit Message)
chunks = [
    (["package.json", "package-lock.json", ".gitignore", "jsconfig.json"], "chore: initial project configuration and dependencies"),
    (["tailwind.config.js", "postcss.config.js", "next.config.js"], "feat: setup design system tokens and tailwind configuration"),
    (["app/globals.css"], "style: implement global theme styles and dot-grid background"),
    (["app/layout.js"], "feat: setup root layout with custom font integration"),
    (["lib/utils.js"], "chore: add tailwind-merge and clsx utility helpers"),
    (["Components/ui/Button.jsx"], "feat: implement animated Candy Button UI primitive"),
    (["Components/ui/Input.jsx"], "feat: implement stylized Input UI primitive"),
    (["Components/ui/Card.jsx"], "feat: implement Sticker Card UI primitive with hover effects"),
    (["Components/Header.jsx"], "feat: redesign header with interactive admin links"),
    (["Components/BlogItem.jsx"], "feat: revamp blog item cards with geometric design"),
    (["Components/BlogList.jsx"], "feat: overhaul blog listing with category filtering"),
    (["app/page.js"], "feat: implement new landing page layout"),
    (["app/blogs/[id]/page.jsx"], "feat: redesign blog post reading experience"),
    (["Components/Footer.jsx"], "feat: implement high-contrast geometric footer"),
    (["lib/config/db.js", ".env.local"], "fix: configure mongodb connectivity and environment variables"),
    (["app/admin/layout.jsx"], "feat: implement admin dashboard layout"),
    (["Components/AdminComponents/Sidebar.jsx"], "feat: build interactive admin sidebar with active states"),
    (["app/admin/addBlog/page.jsx"], "feat: implement 'Add Blog' form with stylized inputs"),
    (["app/admin/blogList/page.jsx"], "feat: build admin blog management table"),
    (["app/admin/subscriptions/page.jsx"], "feat: build newsletter subscription management table"),
    (["Components/AdminComponents/BlogTableItem.jsx"], "style: polish blog table row UI"),
    (["Components/AdminComponents/SubsTableItem.jsx"], "style: polish subscription table row UI"),
    (["app/profile/page.jsx"], "feat: implement user profile page with stats and bio"),
    (["app/api/blog/route.js"], "feat: implement blog API routes with image upload support"),
    (["app/api/email/route.js"], "feat: implement newsletter subscription API routes"),
    (["Assets/assets.js"], "chore: organize project assets and images"),
    (["public/"], "chore: add public static assets"),
    (["app/admin/"], "feat: final polish on admin dashboard interactivity"),
    (["Components/"], "style: ensure visual consistency across all components"),
    ([". "], "feat: complete visual overhaul and system unification")
]

# Generate 30 dates between Mar 10 and Apr 28
start_date = datetime(2026, 3, 10, 10, 0, 0)
end_date = datetime(2026, 4, 28, 10, 0, 0)
total_days = (end_date - start_date).days

# Pick 30 unique random days or just spread them
dates = []
for i in range(len(chunks)):
    # Spread them out logically but with some randomness
    day_offset = (total_days * i) // len(chunks)
    random_hour = random.randint(9, 18)
    random_min = random.randint(0, 59)
    date = start_date + timedelta(days=day_offset, hours=random_hour, minutes=random_min)
    dates.append(date)

dates.sort()

# Perform commits
for i, (paths, message) in enumerate(chunks):
    date_str = dates[i].strftime('%Y-%m-%dT%H:%M:%S')
    
    # Add files
    for path in paths:
        if os.path.exists(path):
            run_command(f"git add {path}")
    
    # Commit with backdate
    env = f'GIT_AUTHOR_DATE="{date_str}" GIT_COMMITTER_DATE="{date_str}"'
    run_command(f'{env} git commit -m "{message}"')

print("30 Backdated commits created successfully!")
