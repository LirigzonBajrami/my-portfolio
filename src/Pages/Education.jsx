import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "./Education.css";
import { IoMdSchool } from "react-icons/io";
const Education = () => {
  return (
    <div className="education">
      <VerticalTimeline lineColor="#112d4e">
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2019 - "
          iconStyle={{ background: "#112d4e", color: "#fff" }}
          icon={<IoMdSchool />}
        >
          <h5 className="vertical-timeline-element-title">
            {" "}
            Computer Science and Engineering student at UBT college, Prishtina
          </h5>
          <p></p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2021 "
          iconStyle={{ background: "#112d4e", color: "#fff" }}
          icon={<IoMdSchool />}
        >
          <h3 className="vertical-timeline-element-title">
            {" "}
            <h5>Modern HTML & CSS From The Beginning (21 hr)</h5>
            <p>Instructor: Brad Traversy</p>
            <p>Certificate of completion</p>
          </h3>
          <p></p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2022 "
          iconStyle={{ background: "#112d4e", color: "#fff" }}
          icon={<IoMdSchool />}
        >
          <h3 className="vertical-timeline-element-title">
            {" "}
            <h5>
              Build Responsive Real-World Websites with HTML and CSS (37.5 hr)
            </h5>
            <p>Instructor: Jonas Schmedtmann</p>
            <p>Certificate of completion</p>
          </h3>
          <p></p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2022"
          iconStyle={{ background: "#112d4e", color: "#fff" }}
          icon={<IoMdSchool />}
        >
          <h3 className="vertical-timeline-element-title">
            <h5>
              The Complete JavaScript Course: (Beginner + Advanced) (70 hr)
            </h5>
            <p>Instructor: Jonas Schmedtmann</p>
            <p>Certificate of completion</p>
          </h3>
          <p></p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2022"
          iconStyle={{ background: "#112d4e", color: "#fff" }}
          icon={<IoMdSchool />}
        >
          <h3 className="vertical-timeline-element-title">
            <h5>Modern React - The Complete Guide (49.5 hr)</h5>
            <p>Instructor: Maximilan Schwarzmuller</p>
            <p>Certificate of completion</p>
          </h3>
          <p></p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
};

export default Education;
