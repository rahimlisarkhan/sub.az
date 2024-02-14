//! Selector
const __content = document.querySelector("#productContent")
const __product_images = document.querySelector("#productImages")

//! Data
let data = [
    {
        id: 1,
        title: "PO MARATHON",
        images: ["./images/agrotech/image2.jpg","./images/agrotech/image3.jpg","./images/agrotech/image4.jpg","./images/agrotech/image5.jpg","./images/agrotech/image6.jpg"],
        description: "SUP.VC LLC takes pride in the seamless execution of the Product Owner Marathon,  a distinguished 4-week initiative designed to immerse participants in the intricacies of product development and cultivate their prowess as effective product owners. This strategic event featured cross-disciplinary ideation, allowing participants to present innovative concepts in sectors such as fintech, edutech, and agrotech. The competitive edge of the marathon was exemplified through a structured product competition with two stages—an initial idea presentation and subsequent hands-on mentoring sessions. Under the expert guidance provided during the marathon, participants not only honed their skills but also emerged as adept product owners with a comprehensive understanding of industry-specific nuances. The success of the Product Owner Marathon underscores Sup.vc LLC's commitment to fostering learning, innovation, and leadership in the dynamic landscape of product development.",
        image: "./images/agrotech/image1.jpg"
    },
    {
        id: 2,
        title: "AGROTECH WORKSHOP & HACKATHON",
        images: ["./images/agrotech/image2.jpg","./images/agrotech/image3.jpg","./images/agrotech/image4.jpg","./images/agrotech/image5.jpg","./images/agrotech/image6.jpg"],
        description: "Agrotech Workshop & Hackathon is an event that is organized in the field of agriculture. At the event famers were given important information to increase effectiveness in the field of agriculture. Agrotech workshop was a one-day event targeted at informing the audience of the new technological trends in agriculture such as precision agriculture, use of robotics and AI in agriculture and vertical farming in controlled environments. The workshop was delivered by a leading internationally recognized lecture. Hackathon lasted for 3 days in the direction of the development of the agaric industry, development of prototypes, application of innovative technologies. Students, researchers, designers, entrepreneurs, companies, job seekers participated in the Hackathon. Participants worked as a team and they applied innovative solutions to various problems in the field of agriculture. The team that presented the best solution in the field of agriculture was a winner.",
        image: "./images/agrotech/image1.jpg"
    },
    {
        id: 3,
        title: "INNOSTART",
        images: ["./images/innostart/img1.jpg","./images/innostart/img2.jpg","./images/innostart/img3.jpg","./images/innostart/img4.jpg","./images/innostart/img5.jpg","./images/innostart/img6.jpg","./images/innostart/img7.jpg","./images/innostart/img9.jpg","./images/innostart/img10.jpg","./images/innostart/img11.jpg"],
        description: "SUP.VC LLC is proud to present 'INNOSTART,' a strategic educational program meticulously designed to cultivate the startup ecosystem in regional areas, in collaboration with the esteemed Innovation and Digital Development Agency. As the hosting and organizing entity, Sup.vc is committed to providing a platform for students, youth, and aspiring individuals to develop their innovative ideas into successful startups. The program, operating under the auspices of Sup.vc, aims to unearth and harness the potential of young talents in regional communities. 'INNOSTART' unfolds through two key directions: community events and an incubation program. Notably, over 2,000 participants actively engaged in community events, resulting in the successful development of 12 startups through the incubation program. This initiative underscores Sup.vc's dedication to fostering regional innovation, empowering emerging entrepreneurs, and contributing significantly to the flourishing startup ecosystem.",
        image: "./images/innostart/img1.jpg"
    },
    {
        id: 4,
        title: "DATA EVENTS",
        images: ["./images/dataevents/DataTalk.jpg","./images/dataevents/DataTalk2.jpg","./images/dataevents/DataTalk3.jpg","./images/dataevents/DataTalk5.jpg","./images/dataevents/DataTalk7.jpg","./images/dataevents/DataTalk8.jpg","./images/dataevents/DataTalk9.jpg","./images/dataevents/DataTalk10.jpg","./images/dataevents/DataTalk11.jpg","./images/dataevents/DataTalk12.jpg","./images/dataevents/DataTalk13.jpg","./images/dataevents/DataTalk14.jpg","./images/dataevents/DataTalk15.jpg","./images/dataevents/DataTalk16.jpg","./images/dataevents/DataTalk17.jpg","./images/dataevents/DataTalk18.jpg","./images/dataevents/DataTalk19.jpg","./images/dataevents/DataTalk20.jpg","./images/dataevents/DataTalk21.jpg","./images/dataevents/DataTalk22.jpg","./images/dataevents/DataTalk23.jpg","./images/dataevents/DataTalk24.jpg","./images/dataevents/DataTalk25.jpg","./images/dataevents/DataTalk26.jpg","./images/dataevents/DataTalk27.jpg","./images/dataevents/DataTalk28.jpg","./images/dataevents/DataTalk29.jpg"],
        image: "./images/dataevents/DataTalk.jpg",
        description: "From idea to business (i2b) project is a startup program covering 8 regions of the country. The 9-month program consists of 3 stages. Startups participating in the program are given incubation classes and given all the information they need to turn their idea into a business. At the end of the program, participants prepare and present an MVP. DATA EVENTS Data Talk is a discussion-oriented event that delves into the latest innovations, information, and problem-solving approaches within the realm of data. During this event, speakers will explore topics such as data analytics, visualization, and the practical applications of results. The Data Panel, on the other hand, gathers experts in the field of data to engage in insightful discussions. This event provides a platform for experts to share their perspectives on innovations, problem-solving strategies, and the future outlook of the data field. The Data Workshop is a comprehensive 2-day event, each lasting 4 hours, dedicated to imparting knowledge about the current state and future trends in the data field. Attendees can expect to receive both practical and theoretical insights, equipping them with valuable information to navigate the dynamic landscape of data."
    },
    {
        id: 5,
        title: "WOMEN OF AZERBAIJAN",
        images: ["./images/women/item2.jpeg","./images/women/item3.jpeg","./images/women/item4.jpeg","./images/women/item5.jpeg","./images/women/item6.jpeg","./images/women/item7.jpeg"],
        image: "./images/women/item.jpeg",
        description: "SUP.VC LLC served as the vendor for Kapital Bank's initiative, \"Women of Azerbaijan.\" This 3-month project, launched on International Women's Day, aimed to empower women entrepreneurs in Azerbaijan with essential skills for global e-commerce success. Our responsibilities included streamlining registrations, managing training sessions, and ensuring smooth interaction with platforms like 'Amazon' and 'eBay.' This collaboration highlights sup.vc's expertise in project management and technical support. Join us in recognizing our successful partnership in advancing women in e-commerce."
    },
    {
        id: 7,
        title: "DIGITAL HEIGHTS",
        images: ["./images/digital/img2.JPG","./images/digital/img3.JPG","./images/digital/img4.JPG","./images/digital/IMG_3915.PNG","./images/digital/IMG_3916.PNG","./images/digital/IMG_3917.PNG","./images/digital/IMG_3918.PNG","./images/digital/IMG_3919.PNG"],
        image: "./images/digital/img1.JPG",
        description: "SUP.VC LLC presents the 'Digital Heights Event,' a distinguished gathering of industry leaders in product, design, digital engineering, and data. Hosted conferences include Product Hunt, a global platform where product owners worldwide share insights, and DevOps Days, featuring knowledge exchange by PASHA Bank experts and global specialists in DevOps, software, and security. This event underscores our commitment to fostering global collaboration, knowledge-sharing, and networking within the tech community."
    },
    {
        id: 8,
        title: "HACKCOV19",
        images: ["https://images.unsplash.com/photo-1621155346337-1d19476ba7d6?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGltYWdlfGVufDB8fDB8fHww","https://cdn.pixabay.com/photo/2015/04/19/08/32/marguerite-729510_640.jpg"],
        image: "https://images.ctfassets.net/hrltx12pl8hq/28ECAQiPJZ78hxatLTa7Ts/2f695d869736ae3b0de3e56ceaca3958/free-nature-images.jpg?fit=fill&w=1200&h=630",
        description: "\"Hackcov19\" is a global virtual hackathon scheduled for the 10th-12th April 2020 to crowdsource tech solutions to help people cope with the coronavirus pandemic. Organised by SUP VC - an intensive accelerator programme that help startups grow and expand to international markets - as well as the Ministry of Transport, Communications and High Technologies of Azerbaijan and the United Nations Development Programme in partnership with the Azerbaijan Tourism Board, Startup Grind Tbilisi, MeOut and Start-Ist, the competition is fully virtual. From the initial call for ideas to the selection and deployment of prototypes and solutions, participants are invited to help be a part of a global solution. There were more than 1000 participants from 50+ countries and 5 continents. The hackathon was featured on the world's top tech outlets like Forbes and tech.eu."
    },
    {
        id: 9,
        title: "INTERNATIONAL FINTECH EVENING",
        images: ["./images/international/maxresdefault.jpg","./images/international/Mr_Adeeb_Ahamed,_MD_LuLu_Financial_Holdings_being_awarded_with_the_Lea.jpg","./images/international/FM-at-Global-Fintech-Fest-2023-NTC-customers-outpace-banks-1.jpg","./images/international/panel-discussion_1.jpg"],
        image: "./images/international/1694243357162-1024x623.jpg",
        description: "This Fintech event features a panel on FinTech Innovation and Trends. Over the last decade, FinTech startups have disrupted the business models of the core areas of the legacy financial industry such as lending, financial advice, and payment processing. Panelists from the industry will explore the effects of FinTech innovation on traditional areas of finance, talk about the current FinTech trends and discuss the future of FinTech. The event will be composed of 3 sessions."
    },
    {
        id: 10,
        title: "INNOVATION AZERBAIJAN HOUSE IN SILICON VALLEY, USA",
        images: ["./images/silicon/img2.JPG","./images/silicon/img3.JPG","./images/silicon/img4.JPG","./images/silicon/img5.JPG"],
        image: "./images/silicon/img1.JPG",
        description: "1-year program for Azerbaijani startups. Each startup had a chance to live and work in Silicon Valley and develop the startup there. Startups were provided with home, car, office, mentoring, and other necessary staff. 5 startups from Azerbaijan were sent to Silicon Valley to participate in this program."
    },
    {
        id: 11,
        title: "PANEL DISCUSSION TOURISM BOARD",
        images: ["https://images.unsplash.com/photo-1621155346337-1d19476ba7d6?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGltYWdlfGVufDB8fDB8fHww","https://cdn.pixabay.com/photo/2015/04/19/08/32/marguerite-729510_640.jpg"],
        image: "https://images.ctfassets.net/hrltx12pl8hq/28ECAQiPJZ78hxatLTa7Ts/2f695d869736ae3b0de3e56ceaca3958/free-nature-images.jpg?fit=fill&w=1200&h=630",
        description: "Panel discussion: Travel tech and innovation as an opportunity for local tourism development. For the first time, internationally successful Azerbaijani entrepreneurs in the digital tourism sector will come together at the Azerbaijan Tourism Summit 2019 in a high-level panel session. The discussion will give food for thought about how new technologies and innovation can have a positive impact on tourism development in Azerbaijan. The CEOs and founders of companies such as wetravel.com, getguided.net, Expedia will give their firsthand insight into the experiences and challenges of digital start-ups. Moreover, they will share their recommendations and ideas on how local entrepreneurs can contribute to shaping the future of digital tourism in Azerbaijan. The speakers of the panel were founders of global startups like Halalbooking, Wetravel and others."
    },
    {
        id: 12,
        title: "START UP GRIND GANJA",
        images: ["https://images.unsplash.com/photo-1621155346337-1d19476ba7d6?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGltYWdlfGVufDB8fDB8fHww","https://cdn.pixabay.com/photo/2015/04/19/08/32/marguerite-729510_640.jpg"],
        image: "https://images.ctfassets.net/hrltx12pl8hq/28ECAQiPJZ78hxatLTa7Ts/2f695d869736ae3b0de3e56ceaca3958/free-nature-images.jpg?fit=fill&w=1200&h=630",
        description: "Startup Grind is the world's largest community of startups, founders, innovators, and creators. We bring like-minded yet diverse individuals together to connect, learn, teach, help, build, and belong. We do this daily through our local events, flagship conferences, startup program, partnerships, and online media + content - collectively reaching over 3.5 million individuals worldwide."
    },
    {
        id: 13,
        title: "INCUBATION AND DEMO DAYS",
        images: ["https://images.unsplash.com/photo-1621155346337-1d19476ba7d6?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGltYWdlfGVufDB8fDB8fHww","https://cdn.pixabay.com/photo/2015/04/19/08/32/marguerite-729510_640.jpg"],
        image: "https://images.ctfassets.net/hrltx12pl8hq/28ECAQiPJZ78hxatLTa7Ts/2f695d869736ae3b0de3e56ceaca3958/free-nature-images.jpg?fit=fill&w=1200&h=630",
        description: "It is the culmination of their program, where startups can present their pitch company to an audience of investors, media, corporate strategists and the public in general. Most incubators and accelerators model their Demo Day based on Y Combinator's Demo Day, who only gave their startups around three minutes to present. We've organized tens of demo days in partnership with different companies and government organizations like Bakcell, Bank Respublika & Ministry of Agriculture."
    },
    {
        id: 14,
        title: "STARTUP WEEKEND",
        images: ["./images/week/img2.JPG","./images/week/img2.JPG","./images/week/img3.JPG","./images/week/img4.JPG","./images/week/img5.JPG","./images/week/img6.JPG","./images/week/img7.JPG","./images/week/img8.JPG","./images/week/img9.JPG"],
        image: "./images/week/img1.JPG",
        description: "Startup Weekend is a 54-hour weekend event, during which groups of developers, business managers, startup enthusiasts, marketing experts, graphic artists and more pitch ideas for new startup companies, form teams around those ideas, and work to develop a working prototype, demo, or presentation by Sunday evening. Startup Weekend has grown into an organization with a global presence"
    },
    {
        id: 16,
        title: "DEVOPSDAYS BAKU",
        images: ["./images/devops/devopsdaysbaku1.jpg","./images/devops/devopsdaysbaku2.jpg","./images/devops/devopsdaysbaku4.jpg","./images/devops/FB_IMG_1707138761922.jpg","./images/devops/FB_IMG_1707138764876.jpg","./images/devops/FB_IMG_1707138764876.jpg","./images/devops/FB_IMG_1707138767409.jpg","./images/devops/FB_IMG_1707138769878.jpg","./images/devops/FB_IMG_1707138772665.jpg",,"./images/devops/FB_IMG_1707138775643.jpg",,"./images/devops/FB_IMG_1707138777978.jpg","./images/devops/FB_IMG_1707138780215.jpg","./images/devops/FB_IMG_1707138782762.jpg",],
        image: "./images/devops/devopsdaysbaku.jpg",
        description: "Devopsdays is a worldwide series of technical conferences covering topics of software development, IT infrastructure operations, and the intersection between them. Each event is run by volunteers from the local area. Most devopsdays events feature a combination of curated talks (see open Calls for Proposals) and self-organized open space content. Topics often include automation, testing, security, and organizational culture."
    },
    {
        id: 17,
        title: "GENDER EQUALITY HACKATHON",
        images: ["./images/gender/img2.jpeg","./images/gender/img3.jpeg","./images/gender/img4.jpeg","./images/gender/img5.jpeg","./images/gender/img6.jpeg"],
        image: "./images/gender/img1.jpeg",
        description: "\"Gender equality\" hackathon was held on February 19-21, 2021, for the first time in our country within the program \"EU for Gender Equality: Against Gender Stereotypes and Gender-Based Violence\", funded by the European Union, co-organized by FemTech platform, the Regional Development Public Union, the Ministry of Transport, Communications and High Technologies, and the State Committee for Family, Women, and Children, and the United Nations Women's Agency (UN Women)."
    },
    {
        id: 18,
        title: "CALL OF DATA WORKSHOP",
        images: ["./images/call/2.jpg","./images/call/3.jpg","./images/call/4.jpg","./images/call/5.jpg","./images/call/6.jpg","./images/call/7.jpg","./images/call/8.jpg"],
        image: "./images/call/1.jpg",
        description: "Call of Data Workshop is an event held in the field of data. The event lasts several days. At the Call of Data Workshop, both local and foreign reporters inform participants about innovations in the field of data, presenting innovative solutions for problems and new trends."
    },
    {
        id: 19,
        title: "AGROTECH WORKSHOP & HACKATHON",
        images: ["./images/workshop/img2.jpeg","./images/workshop/img3.jpeg","./images/workshop/img4.jpeg","./images/workshop/img5.jpeg","./images/workshop/img6.jpeg"],
        image: "./images/workshop/img1.jpeg",
        description: "Agrotech Workshop & Hackathon is an event that is organized in the field of agriculture. At the event, farmers were given important information to increase effectiveness in the field of agriculture. Agrotech workshop was a one-day event targeted at informing the audience of the new technological trends in agriculture such as precision agriculture, use of robotics and AI in agriculture and vertical farming in controlled environments. The workshop was delivered by a leading internationally recognized lecturer. The Hackathon lasted for 3 days in the direction of the development of the agric industry, development of prototypes, application of innovative technologies. Students, researchers, designers, entrepreneurs, companies, job seekers participated in the Hackathon. Participants worked as a team and they applied innovative solutions to various problems in the field of agriculture. The team that presented the best solution in the field of agriculture was a winner."
    },
    {
        id: 20,
        title: "IDEATHON ON AGROINNOVATION",
        images: ["./images/aaa/img2.jpeg","./images/aaa/img2.jpeg","./images/aaa/img3.jpeg","./images/aaa/img4.jpeg","./images/aaa/img5.jpeg","./images/aaa/img6.jpeg"],
        image: "./images/aaa/img1.jpeg",
        description: "The project is a multi-day event to provide innovative solutions for problems in the field of agriculture. 20 teams participating in the ideathon presented different projects for the development of agriculture. At the event, participants were provided with mentoring support by local and foreign mentors."
    },
    {
        id: 21,
        title: "INNOVATIVE PROFESSIONAL COURSE FOR YOUNG WOMEN",
        images: ["./images/aa/2.jpeg","./images/aa/3.jpeg","./images/aa/4.jpeg","./images/aa/5.jpeg"],
        image: "./images/aa/2.jpeg",
        description: "The innovative vocational course is a support project initiated by UNDP Azerbaijan and organized by SUP.VC to support women from Fizuli-Horadiz, Agjabadi, and Tartar regions to acquire modern professions. 9 ladies from the regions are trained in design, programming, content management."
    },
    {
        id: 22,
        title: "FUTURE OF JOBS",
        images: ["https://images.unsplash.com/photo-1621155346337-1d19476ba7d6?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGltYWdlfGVufDB8fDB8fHww","https://cdn.pixabay.com/photo/2015/04/19/08/32/marguerite-729510_640.jpg"],
        image: "https://images.ctfassets.net/hrltx12pl8hq/28ECAQiPJZ78hxatLTa7Ts/2f695d869736ae3b0de3e56ceaca3958/free-nature-images.jpg?fit=fill&w=1200&h=630",
        description: "Future of jobs was a discussion conference initiated by UNDP Azerbaijan and in partnership with SUP.VC to discuss the development of modern professions in the country, the training of personnel for emerging professions. Local and international speakers attended the discussion."
    },
    {
        id: 23,
        title: "RITM",
        images: ["https://images.unsplash.com/photo-1621155346337-1d19476ba7d6?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGltYWdlfGVufDB8fDB8fHww","https://cdn.pixabay.com/photo/2015/04/19/08/32/marguerite-729510_640.jpg"],
        image: "https://images.ctfassets.net/hrltx12pl8hq/28ECAQiPJZ78hxatLTa7Ts/2f695d869736ae3b0de3e56ceaca3958/free-nature-images.jpg?fit=fill&w=1200&h=630",
        description: "RITM-Regional Innovative Tourism Product. In the 3-month regional project, an intensive incubation program was conducted for dozens of tourism startups from different regions of Azerbaijan (South, North, North-West, West). Startups that successfully completed the incubation program with the participation of 30 teams from different regions advanced to the finals, presented their startups to investors and competed for the finals and won grants."
    },
    {
        id: 24,
        title: "i2b",
        images: ["./images/i2b/img2.jpeg","./images/i2b/img3.jpeg","./images/i2b/img4.jpeg","./images/i2b/img5.jpeg","./images/i2b/img6.jpeg","./images/i2b/img7.jpeg"],
        image: "./images/i2b/img1.jpeg",
        description: "\"From idea to business\" (i2b) project is a startup program covering 8 regions of the country. The 9-month program consists of 3 stages. Startups participating in the program are given incubation classes and given all the information they need to turn their idea into a business. At the end of the program, participants prepare and present an MVP."
    }
];


const __hash = window.location.hash
const __splitted_hash = window.location.href.split("=")[1]

let item = data.filter((item) => item.id == __splitted_hash)

__content.innerHTML += `
    <div class="product">
        <img class="productImage" src="${item[0].image}" />
        <div class="productBg"></div>
        <p class="productTitle">
            ${item[0].title}
        </p>
        <p class="productDescription">
            ${item[0].description}
        </p>
    </div>
`

const product_image = item[0].images.map((item) => (
    `
        <img class="product_images" src="${item}" alt="image" />
    `
)).join("")

__product_images.innerHTML = product_image