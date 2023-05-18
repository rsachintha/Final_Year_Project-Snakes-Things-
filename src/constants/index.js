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
import one from '../assets/1.png'
import two from '../assets/2.png'
import three from '../assets/3.png'
import four from '../assets/4.png'

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
        description: "boomslang, (Dispholidus typus), venomous snake of the family Colubridae, one of the few colubrid species that is decidedly dangerous to humans. This moderately slender snake grows to about 1.8 metres (6 feet) in length and occurs in savannas throughout sub-Saharan Africa. When hunting, it lies in wait in a bush or tree for chameleons and birds; the forepart of the body often extends motionless into the air. Its body and eye colour are extremely variable, and camouflage is excellent. In defense the boomslang inflates the neck, showing the dark skin between the scales; it then may strike.",
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
        description: "Milk snakes are one of most colorful snakes in the world. They have dark blotches and lighter stripes on the body. The blotches of their body are in black and the light stripes vary from red, orange yellow or white. Milk snakes are non venomous snakes. The color pattern of milk snakes have great resemblance with venomous coral snakes. It is difficult to tell the difference between a coral snake and milk snake. The venomous coral snakes have red, yellow, black yellow color pattern and a black head.The harmless milk snakes have black, red, black, yellow pattern and and a red head.",
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

export const steps = [
    {
        title: "Behavior and Habitat of Snakes",
        icon: one,
        iconBg: "#E6DEDD",
        points: "Behavior is one component that may help identify snakes. Each species of snake exhibits different behaviors. Thus, remembering these differences can pose a challenge to an untrained individual. Regardless, behavior observation is an important component that helps wildlife professionals determine the right solutions in situations when wildlife and humans interact. One of the most well-known behavior traits can be observed in the rattlesnake.",
    },
    {
        title: "Head",
        icon: two,
        iconBg: "#E6DEDD",
        points: "Venomous snakes have distinct heads. While non-venomous snakes have a rounded head, venomous snakes have a more triangular-shaped head. The shape of a venomous snake's head may deter predators. However, some non-venomous snakes can mimic the triangular shape of non-venomous snakes by flattening their heads. This can help them appear more dangerous to potential predators.",
    },
    {
        title: "Coloring",
        icon: three,
        iconBg: "#E6DEDD",
        points: "While there are only four types of venomous snakes in the U.S., each type contains many subspecies with size and color variations that helps them blend in with their environments. Thus, coloring may not be an efficient method for distinguishing between a venomous and non-venomous snake. For example, venomous coral snakes and non-venomous scarlet king snakes both have a banded pattern of yellow, brown and black on their scales. The difference between the two types is that the red bands touch the yellow bands on a coral snake whereas red bands touch the black bands on scarlet king snakes.",
    },
    {
        title: "Pupils",
        icon: four,
        iconBg: "#E6DEDD",
        points: "Examining a snake’s pupils is another method that can be utilized to identify venomous versus non-venomous snakes. Like a cat’s eye, venomous snakes have thin, black, vertical pupils surrounded by a yellow-green eyeball while non-venomous snakes have rounded pupils. While this type of pupils can indicate that the snake is venomous, this is observed at close range, which can be a potentially dangerous identification method.",
    }
]


