-- Sports Table
create table Sports (
	"sport_id" int primary key,
	"sport_name" varchar(40) not null,
	"description" text,
	"rules" text,
	"equipment_required" text
);

-- Sports Academy
create table SportsAcademy (
    "academy_id" serial primary key,
    "academy_name" varchar(30),
    "location" text,
    "facilities" text,
    "contact_info" varchar(30),
    "email" varchar(50)
);

-- Training Course
create table TrainingCourse (
    "course_id" serial primary key,
    "course_name" varchar(30),
    "sports_id" int references Sports(sport_id),
    "description" text,
    "duration" varchar(30),
    "fee" decimal,
    "academy_id" int references SportsAcademy(academy_id)
);

-- Organizer
create table Organizer (
    "organizer_id" serial primary key,
    "organizer_name" varchar(30),
    "contact_info" varchar(30),
    "email" varchar(50),
    "address" varchar(100),
    "academy_id" int references SportsAcademy(academy_id)
);

-- Competition and Events
create table CompetitionAndEvents (
    "event_id" serial primary key,
    "event_name" varchar(30),
    "sports_id" int not null,
    "event_date" date, 
    "location" varchar(100),
    "organizer_id" int references Organizer(organizer_id),
    "competition_level" varchar(20),
    "participants" int,
    "description" text,
    "rules" text,
    "disabled" boolean
);

-- Users Table
create table Users (
    "user_id" serial primary key,
    "username" varchar(50),
    "password" varchar(100)
)