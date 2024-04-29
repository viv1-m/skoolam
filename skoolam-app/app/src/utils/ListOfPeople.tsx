import React from "react";
import PeopleCard from "./PeopleCard";
import peopleList from "./peopleContent.json";

interface PeopleListProps {
  listType: "advisoryCommittee" | "boardOfTrustees";
  title: string;
}

const PeopleList: React.FC<PeopleListProps> = ({ listType, title }) => {
  // Assuming you have an array of people data
  const people = peopleList[listType];
  return (
    <div style={{ padding: "5%", paddingRight: "10%", paddingLeft: "10%" }}>
      <div style={{ color: "#680118", fontWeight: "bolder", fontSize: 43 }}>
        {title}
      </div>
      <div
        style={{
          display: "flex", // This will arrange the child elements in a row
          overflowX: "auto", // This will make the row scrollable when there's not enough space
          whiteSpace: "nowrap", // This will prevent the items from wrapping to the next line
        }}
      >
        {people.map((person, index) => (
          <PeopleCard
            key={index}
            imagePath={person.imagePath}
            name={person.name}
            description={person.description}
          />
        ))}
      </div>
    </div>
  );
};

export default PeopleList;
