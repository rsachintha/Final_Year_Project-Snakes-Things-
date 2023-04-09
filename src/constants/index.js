import automation from '../assets/automation.png';
import idea from '../assets/idea.png';
import treatment from '../assets/treatment.png';
import dos from '../assets/do.png';
import donts from '../assets/dont.png';
import symptoms from '../assets/symptoms.png';
import kingcobra from '../assets/kingcobra.jpg';
import blackmamba from '../assets/blackmamba.jpg';
import boomslang from '../assets/boomslang.jpg';
import milksnake from '../assets/milksnake.jpg';
import rgsnake from '../assets/rgsnake.jpg';
import egsnake from '../assets/egsnake.jpg';

export const navLinks = [
    {
        id: "services",
        title: "Services",
    },
    {
        id: "treatments",
        title: "Treatments",
    },
    {
        id: "learn",
        title: "Learn",
    },
    {
        id: "identification",
        title: "Identification",
    }
];

export const services = [
    {
        title: "Automated Identification",
        icon: automation,
        details: "You can identify snake species by uploading an image with the use of an automated Machine Learning model."
    },
    {
        title: "Gather Knowledge",
        icon: idea,
        details: "Learn about most venomous and non-venomous snake species around the world and their habits."
    },
    {
        title: "Be Aware",
        icon: treatment,
        details: "Get to know regarding paramedic steps which you can follow when it comes to snakebite envenomation and how you can avoid it."
    }
]

export const treatments = [
    {
        title: "Do",
        icon: dos,
        iconBg: "#383E56",
        points: [
            "Do stay calm and reassure the bitten person.",
            "Do move slowly away from the snake.",
            "Do rinse venom in the eyes with running water in case of spitting snakes.",
            "Do leave the wound area(bite mark) alone.",
            "Do remove all the tight items around the affected area.",
            "Do lay the patient on his/her side to reduce movement of affected area.",
            "Do rush to the nearest health facility or medical treatment.",
        ],
    },
    {
        title: "Don't",
        icon: donts,
        iconBg: "#E6DEDD",
        points: [
            "Don't panic, calmly follow these first aid steps.",
            "Don't attack or kill the snake, if you are close enough to hurt it, it is close enough to bite you to defend itself.",
            "Don't rub the eyes, it will cause infliation to the eye and spreads the venom.",
            "Don't wash, cut or suck the wound, it can lead to infections and venom spreading.",
            "Don't tie the affected area to stop blood circulation, it can lead to infections that cause loss of limbs or even death.",
            "Don't lay the patient on his/her back, lying on the back can block the airways.",
            "Don't use traditional methods or unsafe treatments.",
        ],
    },
    {
        title: "Symptoms",
        icon: symptoms,
        iconBg: "#383E56",
        points: [
            "Puncture marks at the wound",
            "Redness, swelling, bruising, bleeding, or blistering around the bite",
            "Severe pain and tenderness at the site of the bite",
            "Nausea, vomiting, or diarrhea",
            "Labored breathing(in extreme cases, breathing may stop altogether)",
            "Rapid heart rate, weak pulse, low blood pressure",
            "Disturbed vision"
        ],
    }
];

export const facts = [
    {
        name: "King Cobra",
        description: "The king cobra is not only deadly, but also is the longest of the venomous snakes. It can grow up to 18-feet-long, though that’s the extreme. If you happen across one, it’s not likely to be more than 12 feet, or so. Isn’t that reassuring? These giants eat mostly other snakes, which is a redeeming feature for humans.Though generally not aggressive, they can be mean during the mating season.And you definitely don’t want to sneak up on one.When threatened, they do the classic cobra stance, raising their bodies straight up, spreading their hoods and hissing.If you want to continue to live, you’ll heed this warning.",
        danger: [
            {
                name: "Highly Venomous",
                color: "pink-text-gradient",
            }
        ],
        image: kingcobra,
        source_code_link: "https://en.wikipedia.org/wiki/King_cobra"
    },
    {
        name: "Black Mamba",
        description: "The black lining of the black mamba’s mouth inspired its name. Its skin ranges from grey to light brown. The black mamba is not quite as long as the king cobra, but it’s faster. It can zip along at more than 12 miles-an-hour — and often uses these bursts of speed to chase anyone who was unlucky, or foolish enough to provoke it. Its venom contains a potent neurotoxin. Just a couple of drops can kill a human. The black mamba is often described as “nervous,” rather than aggressive. The distinction is probably meaningless if you’ve disturbed one.",
        danger: [
            {
                name: "Highly Venomous",
                color: "pink-text-gradient",
            }
        ],
        image: blackmamba,
        source_code_link: "https://en.wikipedia.org/wiki/Black_mamba"
    },
    {
        name: "Boomslang",
        description: "Despite the charming name, the boomslang delivers a nasty bite. Its venom, a hemotoxin that causes widespread, severe hemorrhaging, can kill quickly and unpleasantly. However, boomslangs aren’t as aggressive and rarely bother anything that’s too big to eat.",
        danger: [
            {
                name: "Highly Venomous",
                color: "pink-text-gradient",
            }
        ],
        image: boomslang,
        source_code_link: "https://en.wikipedia.org/wiki/Boomslang"
    },
    {
        name: "Milk Snake",
        description: "Milk snakes are one of most colorful snakes in the world. They have dark blotches and lighter stripes on the body. The blotches of their body are in black and the light stripes vary from red, orange yellow or white. Milk snakes are non venomous snakes. The color pattern of milk snakes have great resemblance with venomous coral snakes. It is difficult to tell the difference between a coral snake and milk snake. The venomous coral snakes have red, yellow, black yellow color pattern and a black head.The harmless milk snakes have black, red, black, yellow pattern and and a red head.Milk snakes inhabit in rocky slopes and forested regions of U.S and Central America.They mainly eat slugs, earthworms, crickets and insects.",
        danger: [
            {
                name: "Non-Venomous",
                color: "green-text-gradient",
            }
        ],
        image: milksnake,
        source_code_link: "https://en.wikipedia.org/wiki/Milk_snake"
    },
    {
        name: "Rough Green Snake",
        description: "Rough green snake or grass green snake is a non-venomous snake found in the Southeastern United States. They inhabit in open forests and woodlands. As the name indicates, grass green snakes have bright green upper part and yellowish belly. This coloration allows them to posses great camouflage in green vegetation. Rough green snakes have very thin long body, reach up to a average length of 45 inches.They spend most of time on trees and low bushes in searching for food.Rough green snakes mainly eat cricketers, grasshoppers, small frogs and spiders.",
        danger: [
            {
                name: "Non-Venomous",
                color: "green-text-gradient",
            }
        ],
        image: rgsnake,
        source_code_link: "https://en.wikipedia.org/wiki/Opheodrys_aestivus"
    },
    {
        name: "Eastern Garter Snake",
        description: "Eastern garter snakes are endemic to North America, found in grassy habitats. Eastern garter snakes are harmless to humans. They strike on disturbance and it makes allergic reaction to humans. They also release a foul smell from its gland to escape from the predators. The adult Eastern garter snakes have a length up to 26 inches.They appear in dark green to black color with three yellow stripes.Eastern garter snakes often confuse with queen snakes because they have two yellowish stripes on its back.",
        danger: [
            {
                name: "Non-Venomous",
                color: "green-text-gradient",
            }
        ],
        image: egsnake,
        source_code_link: "https://en.wikipedia.org/wiki/Common_garter_snake"
    }
];


