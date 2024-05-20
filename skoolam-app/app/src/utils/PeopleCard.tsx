import React from "react";
import Image from "next/image";

interface PeopleCardProps {
  imagePath: string;
  name: string;
  description: string;
}

const PeopleCard: React.FC<PeopleCardProps> = ({
  imagePath,
  name,
  description,
}) => {
  return (
    <div
      style={{
        paddingTop: 64,
        paddingRight: 64,
        width: 330,
      }}
    >
      <Image src={imagePath} alt={name} width={330} height={330} />
      <div
        style={{
          fontWeight: "bolder",
          fontSize: 36,
          paddingTop: 8,
          maxWidth: 330,
        }}
      >
        {name}
      </div>
      <>
        <p
          style={{
            fontWeight: "regular",
            fontSize: 20,
            paddingTop: 8,
            maxWidth: 330,
            whiteSpace: "wrap",
          }}
        >
          {description}
        </p>
      </>
    </div>
  );
};

export default PeopleCard;
