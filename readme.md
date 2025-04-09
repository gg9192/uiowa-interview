1. The numbers of the estimated hours and the actual hours. You can optionally write a short
paragraph with details and explanations.
Estimation: 5
Actual: 

2. Reasons for choosing your tech stack for this task. You can write a short paragraph to justify
your choice among other alternatives.
Frontend: angular, that is what the job uses, and I have experiance in using it.
Component library: material, I have experiance with this and it's clean/easy to use
Backend: Flask, simple and lightweight thing that I have experiance using. I don't have C#/.NET on my computer.
DB: sqlite, simple lightweight relational DB that comes with my mac. 

3. discussion
Assumptions
- only uploading and viewing requests are in scope
- no authentication, or other similar fancy features
- injectable services not tested, as that is a API call without any logic

Problems
- UX design: outsource to GENAI


Highlights



How to run: 
go to backend directory, "pip3 install -r requirements.txt"
"flask db upgrade" to create the database. make sure you have sqlite
"flask run"

in a new terminal, naviagate to the frontend and do "ng serve"