let data = [
    {
        id: 1,
        title: "PO MARATHON",
        description: "SUP.VC LLC Hosts and Organizes 'Cultech' - A Pioneering Hackathon Series within 'Creative Week' Supported by the Ministry of Culture. CulTech hackathons, curated and executed by Sup.vc, bring together dedicated teams for a 48-hour intensive program, aimed at developing innovative solutions within the creative sector. With mentor support, teams craft prototypes for their creative products, concluding with a concise three-minute presentation to the jury. This event exemplifies Sup.vc's commitment to fostering innovation and collaboration at the intersection of technology and culture.",
        image: "https://images.ctfassets.net/hrltx12pl8hq/28ECAQiPJZ78hxatLTa7Ts/2f695d869736ae3b0de3e56ceaca3958/free-nature-images.jpg?fit=fill&w=1200&h=630"
    },
    {
        id: 2,
        title: "AGROTECH WORKSHOP & HACKATHON",
        description: "\"From idea to business\" (i2b) project is a startup program covering 8 regions of the country. The 9-month program consists of 3 stages. Startups participating in the program are given incubation classes and given all the information they need to turn their idea into a business. At the end of the program, participants prepare and present an MVP. SUP.VC LLC spearheads the STEAM Hackathon, an integral part of the International STEAM Azerbaijan Festival hosted in collaboration with the Ministry of Science and Education Republic of Azerbaijan. Situated in the iconic Marine Station, this competition aims to kindle interest in educational gamification. With participants hailing from England, Norway, Slovakia, Bulgaria, Denmark, Czech Republic, Turkey, Germany, Turkmenistan, and Azerbaijan, the festival serves as a platform to promote STEAM-based education. Engaging approximately 60 youths, the event focuses on cultivating 21st-century skills, identifying learners with creative digital technology skills, and exploring international experiences in innovation and digitization. Sup.vc is proud to contribute to the advancement of STEAM education and innovation on a global scale.",
        image: "./images/agrotech/image1.jpg"
    },
    {
        id: 3,
        title: "INNOSTART",
        description: "SUP.VC LLC is proud to present 'INNOSTART,' a strategic educational program meticulously designed to cultivate the startup ecosystem in regional areas, in collaboration with the esteemed Innovation and Digital Development Agency. As the hosting and organizing entity, Sup.vc is committed to providing a platform for students, youth, and aspiring individuals to develop their innovative ideas into successful startups. The program, operating under the auspices of Sup.vc, aims to unearth and harness the potential of young talents in regional communities. 'INNOSTART' unfolds through two key directions: community events and an incubation program. Notably, over 2,000 participants actively engaged in community events, resulting in the successful development of 12 startups through the incubation program. This initiative underscores Sup.vc's dedication to fostering regional innovation, empowering emerging entrepreneurs, and contributing significantly to the flourishing startup ecosystem.",
        image: "./images/innostart/img1.jpg"
    },
    {
        id: 4,
        title: "DATA EVENTS",
        image: "./images/dataevents/DataTalk.jpg",
        description: "From idea to business (i2b) project is a startup program covering 8 regions of the country. The 9-month program consists of 3 stages. Startups participating in the program are given incubation classes and given all the information they need to turn their idea into a business. At the end of the program, participants prepare and present an MVP. DATA EVENTS Data Talk is a discussion-oriented event that delves into the latest innovations, information, and problem-solving approaches within the realm of data. During this event, speakers will explore topics such as data analytics, visualization, and the practical applications of results. The Data Panel, on the other hand, gathers experts in the field of data to engage in insightful discussions. This event provides a platform for experts to share their perspectives on innovations, problem-solving strategies, and the future outlook of the data field. The Data Workshop is a comprehensive 2-day event, each lasting 4 hours, dedicated to imparting knowledge about the current state and future trends in the data field. Attendees can expect to receive both practical and theoretical insights, equipping them with valuable information to navigate the dynamic landscape of data."
    },
    {
        id: 5,
        title: "WOMEN OF AZERBAIJAN",
        image: "./images/women/item.jpeg",
        description: "SUP.VC LLC served as the vendor for Kapital Bank's initiative, \"Women of Azerbaijan.\" This 3-month project, launched on International Women's Day, aimed to empower women entrepreneurs in Azerbaijan with essential skills for global e-commerce success. Our responsibilities included streamlining registrations, managing training sessions, and ensuring smooth interaction with platforms like 'Amazon' and 'eBay.' This collaboration highlights sup.vc's expertise in project management and technical support. Join us in recognizing our successful partnership in advancing women in e-commerce."
    },
    {
        id: 7,
        title: "DIGITAL HEIGHTS",
        image: "./images/digital/img1.JPG",
        description: "SUP.VC LLC presents the 'Digital Heights Event,' a distinguished gathering of industry leaders in product, design, digital engineering, and data. Hosted conferences include Product Hunt, a global platform where product owners worldwide share insights, and DevOps Days, featuring knowledge exchange by PASHA Bank experts and global specialists in DevOps, software, and security. This event underscores our commitment to fostering global collaboration, knowledge-sharing, and networking within the tech community."
    },
    {
        id: 9,
        title: "INTERNATIONAL FINTECH EVENING",
        image: "./images/international/1694243357162-1024x623.jpg",
        description: "This Fintech event features a panel on FinTech Innovation and Trends. Over the last decade, FinTech startups have disrupted the business models of the core areas of the legacy financial industry such as lending, financial advice, and payment processing. Panelists from the industry will explore the effects of FinTech innovation on traditional areas of finance, talk about the current FinTech trends and discuss the future of FinTech. The event will be composed of 3 sessions."
    },
    {
        id: 10,
        title: "INNOVATION AZERBAIJAN HOUSE IN SILICON VALLEY, USA",
        image: "./images/silicon/img1.JPG",
        description: "1-year program for Azerbaijani startups. Each startup had a chance to live and work in Silicon Valley and develop the startup there. Startups were provided with home, car, office, mentoring, and other necessary staff. 5 startups from Azerbaijan were sent to Silicon Valley to participate in this program."
    },
    {
        id: 14,
        title: "STARTUP WEEKEND",
        image: "./images/week/img1.JPG",
        description: "Startup Weekend is a 54-hour weekend event, during which groups of developers, business managers, startup enthusiasts, marketing experts, graphic artists and more pitch ideas for new startup companies, form teams around those ideas, and work to develop a working prototype, demo, or presentation by Sunday evening. Startup Weekend has grown into an organization with a global presence."
    },
    {
        id: 16,
        title: "DEVOPSDAYS BAKU",
        image: "./images/devops/devopsdaysbaku.jpg",
        description: "Devopsdays is a worldwide series of technical conferences covering topics of software development, IT infrastructure operations, and the intersection between them. Each event is run by volunteers from the local area. Most devopsdays events feature a combination of curated talks (see open Calls for Proposals) and self-organized open space content. Topics often include automation, testing, security, and organizational culture."
    },
    {
        id: 17,
        title: "GENDER EQUALITY HACKATHON",
        image: "./images/gender/img1.jpeg",
        description: "\"Gender equality\" hackathon was held on February 19-21, 2021, for the first time in our country within the program \"EU for Gender Equality: Against Gender Stereotypes and Gender-Based Violence\", funded by the European Union, co-organized by FemTech platform, the Regional Development Public Union, the Ministry of Transport, Communications and High Technologies, and the State Committee for Family, Women, and Children, and the United Nations Women's Agency (UN Women)."
    },
    {
        id: 18,
        title: "CALL OF DATA WORKSHOP",
        image: "./images/call/1.jpg",
        description: "Call of Data Workshop is an event held in the field of data. The event lasts several days. At the Call of Data Workshop, both local and foreign reporters inform participants about innovations in the field of data, presenting innovative solutions for problems and new trends."
    },
    {
        id: 19,
        title: "AGROTECH WORKSHOP & HACKATHON",
        image: "./images/workshop/img1.jpeg",
        description: "Agrotech Workshop & Hackathon is an event that is organized in the field of agriculture. At the event, farmers were given important information to increase effectiveness in the field of agriculture. Agrotech workshop was a one-day event targeted at informing the audience of the new technological trends in agriculture such as precision agriculture, use of robotics and AI in agriculture and vertical farming in controlled environments. The workshop was delivered by a leading internationally recognized lecturer. The Hackathon lasted for 3 days in the direction of the development of the agric industry, development of prototypes, application of innovative technologies. Students, researchers, designers, entrepreneurs, companies, job seekers participated in the Hackathon. Participants worked as a team and they applied innovative solutions to various problems in the field of agriculture. The team that presented the best solution in the field of agriculture was a winner."
    },
    {
        id: 20,
        title: "IDEATHON ON AGROINNOVATION",
        image: "./images/aaa/img1.jpeg",
        description: "The project is a multi-day event to provide innovative solutions for problems in the field of agriculture. 20 teams participating in the ideathon presented different projects for the development of agriculture. At the event, participants were provided with mentoring support by local and foreign mentors."
    },
    {
        id: 21,
        title: "INNOVATIVE PROFESSIONAL COURSE FOR YOUNG WOMEN",
        image: "./images/aa/1.jpeg",
        description: "The innovative vocational course is a support project initiated by UNDP Azerbaijan and organized by SUP.VC to support women from Fizuli-Horadiz, Agjabadi, and Tartar regions to acquire modern professions. 9 ladies from the regions are trained in design, programming, content management."
    },
    {
        id: 24,
        title: "i2b",
        image: "./images/i2b/img1.jpeg",
        description: "\"From idea to business\" (i2b) project is a startup program covering 8 regions of the country. The 9-month program consists of 3 stages. Startups participating in the program are given incubation classes and given all the information they need to turn their idea into a business. At the end of the program, participants prepare and present an MVP."
    }
]

const portfolio_content = document.querySelector("#portfolio_content")

// const handleItemClick = (productId) => {
//     // window.location.href = `/product.html#id=${productId}`;
//     window.open(`/product.html#id=${productId}`);
// };

const detail = data.map((item) => (
    `
        <a href="${'product.html#id='+item.id}" id="item_${item.id}" class="item newItem">
            <div class="content_wrap">
                <div class="news_box border_radius">
                    <img class="imageNew" src="${item.image}" alt="" />
                    <p class="content_tit">
                        ${item.title}
                    </p>
                </div>
            </div>
        </a>
    `
)).join("");

portfolio_content.innerHTML += detail;
