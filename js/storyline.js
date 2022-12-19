
const generalAssembly = {
    a: {
        prompt: "You've chosen the bootcamp route! Your school of choice is General Assembly. Will you do part time or full time?",
        options: {
            1: { selection: "Full time (Three months)", next: 'aB'},
            2: { selection: "Part Time (Six months)", next: 'aC'}
        }
    },
    aB: {
        prompt: "You've selected full time! As a result you will graduate earlier but the learning is more intense and the bootcamp will take up most of your time",
    },
    aC: {
        prompt: "You've selected part time. You will have more time on your hands but you will graduate later!",
    },

    b: {
        prompt: "The course is set to start in two weeks. How will you use your time?",
        options: {
            1: { selection: "Finish the pre-course work and then study JavaScript using The Odin Project", next: 'bB'},
            2: { selection: "Take a break now that you've finished the pre-course work", next: 'bC'}
        }
    },
    bB: {
        prompt: "As a result of studying you breeze through the Installfest and have a basic understanding of JavaScript which helps you catch on super quickly. This motivates you even more and your passion for software engineering grows!",
    },
    bC: {
        prompt: "The bootcamp begins and you learn of things you've never heard of such as Git and Github which confuses you but luckily your instructors are great and they help you grasp the concepts. This reassures you and get more comfortable asking for help which helps you learn.",
    },

    c: {
        prompt: "You've begun learning array iterators but you're having trouble. What will you do?",
        options: {
            1: { selection: "Schedule a 1-1 with Beryl!", next: 'cB'},
            2: { selection: "Rewatch the lecture", next: 'cC'}
        }
    },
    cB: {
        prompt: "Beryl is amazing! She helps you with array iterators and you grasp it perfectly! As a result you build a habit of attending TA hours and asking your senior SWE's for help which assists with your progression throughout the course and career",
    },
    cC: {
        prompt: "Rewatching lectures is a great habit! You develop the skill to grasps topics by watching videos and this also helps in your note taking as well.This helps with your progression throughout the course and career",
    },

    d: {
        prompt: "Friends want to hang out the day before the daily code challenges are due and you have a few challenges left. What will you do?",
        options: {
            1: { selection: "I got this (go out with friends)", next: 'dB'},
            2: { selection: "Go out another time and focus on the deliverable ", next: 'dC'}
        }
    },
    dB: {
        prompt: "Oh no! You get home late and fall asleep. The next morning you're selected by the student picker and can't turn in the assignment on time. Luckily your instructors work with you on this, but you shouldn't do it again!",
    },
    dC: {
        prompt: "You choose to stay home and work on the daily code challenges. You finish them all and even make some one liner solutions! The next day you are selected by the student picker and the class is amazed with your solutions! They all clap for you and Ian gives you bird bucks. This boost your motivation and momentum even more and this is seen in all of your projects. ",
    },

    e: {
        prompt: "The bootcamp is coming to an end and you're almost done. What will you do?",
        options: {
            1: { selection: "Apply early for interview experience", next: 'eB'},
            2: { selection: "Work on your portfolio and projects", next: 'eC'}
        }
    },
    eB: {
        prompt: "You've selected to apply early! It makes it harder to stand out in more competitive positions but you gain great experience and get comfortable interviewing which recruiters compliment you on.",
    },
    eC: {
        prompt: "You've selected to work on more personal projects and do more work on your portfolio! As a result, you tend to be nervous during interviews but the recruiters love your work ethic and compliment you as your work helps you stand out from other candidates.",
    },

    f: {
        prompt: "You've officially graduated! You feel ecstatic but the work is far from done. What will you do now with everything you've learned?",
        options: {
            1: { selection: "Apply for apprenticeships", next: 'fB'},
            2: { selection: "Search for a junior developer position", next: 'fC'}
        }
    },
    fB: {
        prompt: "You've chosen to apply for an apprenticeship. This allows you to work under great companies that will continue to provide mentorship while using your skills in a work environment. Based on your performance the company may possibly hire you in once your apprenticeship is over.",
    },
    fC: {
        prompt: "You've chosen to apply for an junior developer positions. This option allows you to gain more pay and gain work experience but transferring to the companies you may desire to work at will be harder as you wouldn't be an internal hire.",
    },

    g: {
        prompt: "While applying yourLinkedIn post about graduating has blown up and alumni are connecting with you! From this you've gained referrals at all MAANG companies! Will you choose this route?",
        options: {
            1: { selection: "YES!", next: 'h'},
            2: { selection: "No thanks...", next: 'gOutcome'}
        }
    },
    gOutcome: {
        prompt: "You decided not to work at a MAANG company. You continue applying and two months later land a junior developer. Congratulations! After months of perseverance and sacrifice your journey to becoming a software engineer has officially ended and your career has begun. Good luck on your journey, the work is far from over.",
    },

    h: {
        prompt: "What MAANG will you select?",
        options: {
            1: { selection: "Meta", next: 'hA'},
            2: { selection: "Amazon", next: 'hB'},
            3: { selection: "Apple", next: 'hC'},
            4: { selection: "Netflix", next: 'hD'},
            5: { selection: "Google", next: 'hE'},
        }
    },
    hA: {
        prompt: "Congratulations! You are now a junior developer at Meta! After months of perseverance and sacrifice your journey to becoming a software engineer has officially ended and your career has begun. Good luck on your journey, the work is far from over!",
    },
    hB: {
        prompt: "Congratulations! You are now a junior developer at Amazon! After months of perseverance and sacrifice your journey to becoming a software engineer has officially ended and your career has begun. Good luck on your journey, the work is far from over!",
    },
    hC: {
        prompt: "Congratulations! You are now a junior developer at Apple! After months of perseverance and sacrifice your journey to becoming a software engineer has officially ended and your career has begun. Good luck on your journey, the work is far from over!",
    },
    hD: {
        prompt: "Congratulations! You are now a junior developer at Netflix! After months of perseverance and sacrifice your journey to becoming a software engineer has officially ended and your career has begun. Good luck on your journey, the work is far from over!",
    },
    hE: {
        prompt: "Congratulations! You are now a junior developer at Google! After months of perseverance and sacrifice your journey to becoming a software engineer has officially ended and your career has begun. Good luck on your journey, the work is far from over!",
    },
}