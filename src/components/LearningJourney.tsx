import 'react-vertical-timeline-component/style.min.css';
import {VerticalTimeline, VerticalTimelineElement} from 'react-vertical-timeline-component';
import {
    Atom,
    BookOpen,
    Box,
    Boxes,
    CodeXml,
    Database,
    Heading1,
    Hexagon,
    Laptop,
    Leaf,
    Trophy,
    Users
} from "lucide-react";
import {ReactElement} from "react";

function TimeLineElement({title, subtitle, date, icon}: {
    title: string,
    subtitle: string,
    date: string,
    icon: ReactElement
}) {
    return (
        <VerticalTimelineElement
            contentStyle={{background: 'rgb(62,62,62)', color: '#fff'}}
            contentArrowStyle={{borderRight: '7px solid  rgb(56,54,54)'}}
            className="vertical-timeline-element--work"
            date={date}
            iconStyle={{background: 'rgb(62,62,62)', color: '#fff'}}
            icon={icon}
        >
            <h3 className="text-md vertical-timeline-element-title">{title}</h3>
            {subtitle && <br/>}
            <h6 className="text-gray-300 text-sm vertical-timeline-element-subtitle">{subtitle}</h6>
        </VerticalTimelineElement>
    )
}

export default function LearningJourney() {
    return (
        <VerticalTimeline
            lineColor={"rgb(62,62,62)"}>
            <TimeLineElement
                date="2021 June"
                title="Learned HTML and CSS"
                subtitle="Youtube"
                icon={<Heading1 />}
            />

            <TimeLineElement
                date="September 2021"
                title="Learned Javascript and Git"
                subtitle="Youtube"
                icon={<Hexagon />}
            />
            <TimeLineElement
                date="January 2022"
                title="Learned Java and Object-Oriented Programming"
                subtitle="Instituto Tecnológico de Oaxaca"
                icon={<Box />}
            />
            <TimeLineElement
                date="July 2022"
                title="Learned PHP and Laravel"
                subtitle="Remote trainer"
                icon={<CodeXml />}
            />
            <TimeLineElement
                date="July 2022"
                title="Learned SQL"
                subtitle="Platzi"
                icon={<Database />}
            />
            <TimeLineElement
                date="July 2022"
                title="Started using Ubuntu as my primary and unique OS"
                subtitle=""
                icon={<Laptop />}
            />
            <TimeLineElement
                date="September 2022"
                title="Started participating in contests"
                subtitle=""
                icon={<Trophy />}
            />
            <TimeLineElement
                date="January 2023"
                title="Learned Spring and REST APIs"
                subtitle="Youtube"
                icon={<Leaf />}
            />
            <TimeLineElement
                date="June 2023"
                title="Learned SOLID and CQRS"
                subtitle="Uncle Bob, Codely"
                icon={<BookOpen />}
            />
            <TimeLineElement
                date="December 2023"
                title="Learned React, Express and Typescript"
                subtitle="Docs"
                icon={<Atom />}
            />
            <TimeLineElement
                date="July 2024"
                title="Learned BDD, TDD and DDD"
                subtitle="Remote trainer and Uncle Bob courses"
                icon={<Users />}
            />

            <TimeLineElement
                date="October 2024"
                title="Learned Pattern Designs and Functional programming"
                subtitle="Instituto Tecnológico de Oaxaca"
                icon={<Boxes />}
            />

        </VerticalTimeline>
    )
}