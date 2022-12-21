
const generalAssembly = {
    0: {
        prompt: "You've chosen the bootcamp route! Your school of choice is General Assembly. Will you do part time or full time?",
        options: {
            a: { selection: "Full time (Three months)", next: 1},
            b: { selection: "Part Time (Six months)", next: 2} 
        }
    },
    1: {
        prompt: "You've selected full time! As a result you will graduate earlier but the learning is more intense and the bootcamp will take up most of your time",
        options: {
            a: { selection: "Next", next: 3},
        }
    },
    2: {
        prompt: "You've selected part time. You will have more time on your hands but you will graduate later!",
        options: {
            a: { selection: "Next", next: 3},
        }
    },
    3: {
        prompt: "Next is the pre-assessment to qualify you for the bootcamp. You must correctly answer at least 2/4 questions to pass. Are you ready?",
        options: {
            a: { selection: "Yes!", next: 5},
            b: { selection: "No!", next: 4 }
        }
    },
    4: {
        prompt: "You decided you were not ready to take the pre-assessment which ends the storyline of your software engineering journey. Will you take the risk and try again?",
        options: {
            a: { selection: "Play Again", next: 0}
        }
    },
    // Question Oucomes ===========================================================================================================================
    // Question One 
    5: {
        prompt: "What command is used to create a Git repository?",
        options: {
            a: { selection: "git push origin main", next: 7},
            b: { selection: "git init", next: 6}
        }
    },
    //Final scores
    6: {
        prompt: "Wow! You've passed the assessment with a perfect score of  4-4! Congratulations are in order! The course is officially set to start two weeks from now. How will you use this time? ",
        options: {
            a: { selection: "Finish the pre-course work and then study JavaScript using The Odin Project", next: 'bB'},
            b: { selection: "Take a break now that you've finished the pre-course work", next: 'bC'}
        }
    },
    
    7: {
        prompt: "Wow! You've passed the assessment with a great score of  3/4! Congratulations are in order! The course is officially set to start two weeks from now. How will you use this time?",
        options: {
            a: { selection: "Finish the pre-course work and then study JavaScript using The Odin Project", next: 'bB'},
            b: { selection: "Take a break now that you've finished the pre-course work", next: 'bC'}
        }
    },
    16: {
        prompt: "Nerves of steel! You've passed the assessment with a score of  2/4! Congratulations are in order! The course is officially set to start two weeks from now. How will you use this time?",
        options: {
            a: { selection: "Finish the pre-course work and then study JavaScript using The Odin Project", next: 'bB'},
            b: { selection: "Take a break now that you've finished the pre-course work", next: 'bC'}
        }
    },
    17: {
        prompt: "Yikes! You didn’t complete the assessment.",
        options: {
            a: { selection: "Play Again", next: 'bB'}
        }
    },

    // Question Oucomes End ======================================================================================================================
    18: {
        prompt: "As a result of studying you breeze through the Installfest and have a basic understanding of JavaScript which helps you catch on super quickly. This motivates you even more and your passion for software engineering grows!",
        options: {
            a: { selection: "Next", next: 1}
        }
    },
    19: {
        prompt: "The bootcamp begins and you learn of things you've never heard of such as Git and Github which confuses you but luckily your instructors are great and they help you grasp the concepts. This reassures you and get more comfortable asking for help which helps you learn.",
        options: {
            a: { selection: "Next", next: 1}
        }
    },

    // 20: {
    //     prompt: "You've begun learning array iterators but you're having trouble. What will you do?",
    //     options: {
    //         a: { selection: "Schedule a 1-1 with Beryl!", next: cB},
    //         b: { selection: "Rewatch the lecture", next: cC}
    //     }
    // },
    // 21: {
    //     prompt: "Beryl is amazing! She helps you with array iterators and you grasp it perfectly! As a result you build a habit of attending TA hours and asking your senior SWE's for help which assists with your progression throughout the course and career",
    //     options: {
    //         a: { selection: "Next", next: 1}
    //     }
    // },
    // 22: {
    //     prompt: "Rewatching lectures is a great habit! You develop the skill to grasps topics by watching videos and this also helps in your note taking as well.This helps with your progression throughout the course and career",
    //     options: {
    //         a: { selection: "Next", next: 1}
    //     }
    // },

    // 23: {
    //     prompt: "Friends want to hang out the day before the daily code challenges are due and you have a few challenges left. What will you do?",
    //     options: {
    //         a: { selection: "I got this (go out with friends)", next: dB},
    //         b: { selection: "Go out another time and focus on the deliverable ", next: dC}
    //     }
    // },
    // 24: {
    //     prompt: "Oh no! You get home late and fall asleep. The next morning you're selected by the student picker and can't turn in the assignment on time. Luckily your instructors work with you on this, but you shouldn't do it again!",
    //     options: {
    //         a: { selection: "Next", next: 1}
    //     }
    // },
    // 25: {
    //     prompt: "You choose to stay home and work on the daily code challenges. You finish them all and even make some one liner solutions! The next day you are selected by the student picker and the class is amazed with your solutions! They all clap for you and Ian gives you bird bucks. This boost your motivation and momentum even more and this is seen in all of your projects. ",
    //     options: {
    //         a: { selection: "Next", next: 1}
    //     }
    // },

    // 26: {
    //     prompt: "The bootcamp is coming to an end and you're almost done. What will you do?",
    //     options: {
    //         a: { selection: "Apply early for interview experience", next: eB},
    //         b: { selection: "Work on your portfolio and projects", next: eC}
    //     }
    // },
    // 27: {
    //     prompt: "You've selected to apply early! It makes it harder to stand out in more competitive positions but you gain great experience and get comfortable interviewing which recruiters compliment you on.",
    //     options: {
    //         a: { selection: "Next", next: 1}
    //     }
    // },
    // 28: {
    //     prompt: "You've selected to work on more personal projects and do more work on your portfolio! As a result, you tend to be nervous during interviews but the recruiters love your work ethic and compliment you as your work helps you stand out from other candidates.",
    //     options: {
    //         a: { selection: "Next", next: 1}
    //     }
    // },

    // 29: {
    //     prompt: "You've officially graduated! You feel ecstatic but the work is far from done. What will you do now with everything you've learned?",
    //     options: {
    //         a: { selection: "Apply for apprenticeships", next: fB},
    //         b: { selection: "Search for a junior developer position", next: fC}
    //     }
    // },
    // 30: {
    //     prompt: "You've chosen to apply for an apprenticeship. This allows you to work under great companies that will continue to provide mentorship while using your skills in a work environment. Based on your performance the company may possibly hire you in once your apprenticeship is over.",
    //     options: {
    //         a: { selection: "Next", next: 1}
    //     }
    // },
    // 31: {
    //     prompt: "You've chosen to apply for an junior developer positions. This option allows you to gain more pay and gain work experience but transferring to the companies you may desire to work at will be harder as you wouldn't be an internal hire.",
    //     options: {
    //         a: { selection: "Next", next: 1}
    //     }
    // },

    // 32: {
    //     prompt: "While applying yourLinkedIn post about graduating has blown up and alumni are connecting with you! From this you've gained referrals at all MAANG companies! Will you choose this route?",
    //     options: {
    //         a: { selection: "YES!", next: h},
    //         b: { selection: "No thanks...", next: gOutcome}
    //     }
    // },
    // 33: {
    //     prompt: "You decided not to work at a MAANG company. You continue applying and two months later land a junior developer. Congratulations! After months of perseverance and sacrifice your journey to becoming a software engineer has officially ended and your career has begun. Good luck on your journey, the work is far from over.",
    //     options: {
    //         a: { selection: "Play Again", next: 0}
    //     }
    // },

    // 34: {
    //     prompt: "What MAANG will you select?",
    //     options: {
    //         a: { selection: "Meta", next: hA},
    //         b: { selection: "Amazon", next: hB},
    //         c: { selection: "Apple", next: hC},
    //         d: { selection: "Netflix", next: hD},
    //         e: { selection: "Google", next: hE},
    //     }
    // },
    // 35: {
    //     prompt: "Congratulations! You are now a junior developer at Meta! After months of perseverance and sacrifice your journey to becoming a software engineer has officially ended and your career has begun. Good luck on your journey, the work is far from over!",
    //     options: {
    //         a: { selection: "Play Again", next: '0'},
    //         b: { selection: "Exit Game", next: '200' }
    //     }
    // },
    // 36: {
    //     prompt: "Congratulations! You are now a junior developer at Amazon! After months of perseverance and sacrifice your journey to becoming a software engineer has officially ended and your career has begun. Good luck on your journey, the work is far from over!",
    //     options: {
    //         a: { selection: "Play Again", next: '0'},
    //         b: { selection: "Exit Game", next: '200' }
    //     }
    // },
    // 37: {
    //     prompt: "Congratulations! You are now a junior developer at Apple! After months of perseverance and sacrifice your journey to becoming a software engineer has officially ended and your career has begun. Good luck on your journey, the work is far from over!",
    //     options: {
    //         a: { selection: "Play Again", next: '0'},
    //         b: { selection: "Exit Game", next: '200' }
    //     }
    // },
    // 38: {
    //     prompt: "Congratulations! You are now a junior developer at Netflix! After months of perseverance and sacrifice your journey to becoming a software engineer has officially ended and your career has begun. Good luck on your journey, the work is far from over!",
    //     options: {
    //         a: { selection: "Play Again", next: '0'},
    //         b: { selection: "Exit Game", next: '200' }
    //     }
    // },
    // 39: {
    //     prompt: "Congratulations! You are now a junior developer at Google! After months of perseverance and sacrifice your journey to becoming a software engineer has officially ended and your career has begun. Good luck on your journey, the work is far from over!",
    //     options: {
    //         a: { selection: "Play Again", next: '0'},
    //         b: { selection: "Exit Game", next: '200' }
    //     }
    // },
}

export default generalAssembly